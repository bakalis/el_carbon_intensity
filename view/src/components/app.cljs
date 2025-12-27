(ns components.app
  (:require [components.map :refer [map-component]]
            [components.region :refer [regions-selector]]
            [components.modal :refer [modal]]))

;; Main app
(defn app []
  [:div.app
   [:header
    [:h1 "React-Leaflet ClojureScript App"]
    [:p "Map with multiple GeoJSON layers"]]
   (regions-selector)
   (map-component)
   (modal)])
