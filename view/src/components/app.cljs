(ns components.app
  (:require [components.map :refer [map-component]]
            [components.region :refer [regions-selector]]
            [components.modal :refer [modal]]))

;; Main app
(defn app [{mode :mode
            center :center
            zoom :zoom
            on-change :on-change
            geojson :geojson
            open :open
            feature :feature
            close-modal :close-modal}]
  [:div.app
   [:header
    [:h1 "React-Leaflet ClojureScript App"]
    [:p "Map with multiple GeoJSON layers"]]
   (regions-selector {:mode mode
                      :on-change on-change})
   (map-component {:mode mode 
                   :center center
                   :zoom zoom
                   :geojson geojson})
   (modal {:open open
           :feature feature
           :close-modal close-modal})])
