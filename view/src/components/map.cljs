(ns components.map
  (:require ["react-leaflet" :refer [MapContainer TileLayer GeoJSON]]
            [state.state :refer [app-state open-modal!]]))

(defn intensity->color [ci]
  (cond
    (nil? ci)  "#cccccc"   ;; no data

    (< ci 30)  "#1e8449"   ;; deep green
    (< ci 60)  "#27ae60"
    (< ci 90)  "#58d68d"
    (< ci 120) "#a9dfbf"

    (< ci 160) "#f9e79f"   ;; yellow
    (< ci 200) "#f4d03f"

    (< ci 240) "#f5b041"   ;; orange
    (< ci 300) "#eb984e"

    (< ci 360) "#e74c3c"   ;; red
    (< ci 420) "#cb4335"
    :else      "#7b241c")) ;; dark red

(defn geojson-style
  [intensities]  ;; pass the API result map here
  (fn [feature]
    (let [props       (js->clj (.-properties feature) :keywordize-keys true)
          region-id   (:zoneName props) 
          ci           (get-in intensities [region-id "actual_intensity"])
          fill-color   (intensity->color ci)]
      (clj->js
        {:fillColor   fill-color
         :weight      2
         :opacity     1
         :color       "white"
         :dashArray   "3"
         :fillOpacity 0.7}))))

;; Function called when a feature is clicked
(defn on-each-feature [feature layer]
  (.on layer "click" 
       (fn [e]
         (.stopPropagation (.-originalEvent e))
         (open-modal! (js->clj feature :keywordize-keys true)))))

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
       :style {:height "90vh" :width "80vw"}}
      [:> TileLayer
       {:attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
        :url "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}]

      ;; Render each GeoJSON layer
      (for [[idx geojson] (map-indexed vector geojson)]
        ^{:key (str idx "-" (hash geojson))}  ;; 🔑 force remount
        [:> GeoJSON
         {:data (clj->js geojson)
          :style (geojson-style carbon-intensities)
          :onEachFeature on-each-feature}])]]))
