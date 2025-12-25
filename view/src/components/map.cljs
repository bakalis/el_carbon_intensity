(ns components.map
 (:require ["react-leaflet" :refer [MapContainer TileLayer GeoJSON]]))

(defn geojson-style 
  [layer-index]
  (fn [_]
    (let [colors ["#3388ff" "#ff6b6b" "#4ecdc4" "#ffe66d"]]
      (clj->js {:fillColor (get colors layer-index "#3388ff")
                :weight 2
                :opacity 1
                :color "white"
                :dashArray "3"
                :fillOpacity 0.4}))))

;; Function called when a feature is clicked
(defn on-each-feature [feature layer]
  (let [props (.-properties feature)
        popup-content (str "<div>"
                           (reduce-kv (fn [acc k v]
                                        (str acc "<strong>" (name k) ":</strong> " v "<br/>"))
                                      ""
                                      (js->clj props :keywordize-keys true))
                           "</div>")]
    (.bindPopup layer popup-content)))

(defn map-component [{mode :mode
                      center :center
                      zoom :zoom
                      geojson :geojson}]
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
        :style (geojson-style idx)
        :onEachFeature on-each-feature}])]])
