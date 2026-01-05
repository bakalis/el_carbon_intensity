(ns components.app
  (:require [reagent.core :as r]
            [components.map :refer [map-component]]
            [state.state :refer [fetch-raw-features!]]
            [components.region :refer [regions-selector]]
            [components.modal :refer [modal]]))

;; Main app
(defn app []
  (r/with-let [_ (fetch-raw-features!)]
    [:div.app
     [:header
      [:h1 "React-Leaflet ClojureScript App"]
      [:p "Map with multiple GeoJSON layers"]]
     (regions-selector)
     (map-component)
     (modal)]))
