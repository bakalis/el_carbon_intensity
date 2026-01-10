(ns components.map
  (:require ["react-leaflet" :refer [MapContainer TileLayer GeoJSON]]
            [utils.common :refer [intensity->color]]
            [utils.datetime :refer [index-intensities-by-hour]]
            [state.state :refer [app-state open-modal!]]
            [clojure.string :as str]))

(defn geojson-style
  [intensities]
  (fn [feature]
    (let [props         (js->clj (.-properties feature) :keywordize-keys true)
          region-id     (:zoneName props) 
          selected-hour (:selected-hour @app-state)
          intensity-type-key (:intensity-type @app-state)
          intensity-type (name intensity-type-key)
          intensities-by-datetime (index-intensities-by-hour intensities)
          actual_intensity (get-in intensities-by-datetime [region-id intensity-type selected-hour "actual_intensity"]) 
          predicted_intensity (get-in intensities-by-datetime [region-id intensity-type selected-hour "predicted_intensity"]) 
          ci (or actual_intensity predicted_intensity)
          fill-color    (intensity->color ci intensity-type-key)]
      (clj->js
        {:fillColor   fill-color
         :weight      2
         :opacity     1
         :color       "white"
         :dashArray   "3"
         :fillOpacity 0.7}))))

;; Function called when a feature is added
(defn on-each-feature [intensities]
  (fn [feature layer]
    (let [props (js->clj (.-properties feature) :keywordize-keys true)
          region-id (:zoneName props)]
      
      (.on layer "click" 
           (fn [e]
             (.stopPropagation (.-originalEvent e))
             (open-modal! (js->clj feature :keywordize-keys true))))
      
      (.bindTooltip layer
                    (fn []
                      (let [selected-hour (:selected-hour @app-state)
                            intensity-type-key (:intensity-type @app-state)
                            intensity-type (name intensity-type-key)
                            intensities-by-datetime (index-intensities-by-hour intensities)
                            actual (get-in intensities-by-datetime [region-id intensity-type selected-hour "actual_intensity"]) 
                            predicted (get-in intensities-by-datetime [region-id intensity-type selected-hour "predicted_intensity"])
                            ci (or actual predicted)
                            data-type (if actual "Actual" "Predicted")]
                        (str "<div style='padding: 8px;'>"
                             "<strong style='font-size: 14px;'>" region-id "</strong><br/>"
                             "<span style='font-size: 12px; color: #666;'>" data-type " " (str/capitalize intensity-type) " Intensity</span><br/>"
                             "<strong style='font-size: 16px; color: " (intensity->color ci intensity-type-key) ";'>"
                             (if ci (.toFixed ci 2) "N/A") " gCO₂/kWh"
                             "</strong>"
                             "</div>")))
                    #js {:sticky true
                         :direction "top"
                         :className "custom-tooltip"}))))

(defn map-component []
  (let [{:keys [center carbon-intensities zoom geojson]} @app-state]
    [:div.map-container
     {:style {:display "flex"
              :align-items "center"
              :justify-content "center"}}
     [:> MapContainer 
      {:center (clj->js center)
       :zoom zoom 
       :scrollWheelZoom false
       :doubleClickZoom false
       :touchZoom false
       :boxZoom false
       :keyboard false
       :zoomControl false
       :style {:height "90vh" :width "80vw"}
       :key (str "map-" (hash carbon-intensities))}
      [:> TileLayer
       {:attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
        :url "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}]
      ;; Render each GeoJSON layer
      (for [[idx geojson] (map-indexed vector geojson)]
        ^{:key (str idx "-" (hash geojson))}
        [:> GeoJSON
         {:data (clj->js geojson)
          :style (geojson-style carbon-intensities)
          :onEachFeature (on-each-feature carbon-intensities)}])]]))
