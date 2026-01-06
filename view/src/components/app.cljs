(ns components.app
  (:require [reagent.core :as r]
            [components.map :refer [map-component]]
            [state.state :refer [app-state fetch-all-carbon-intensities! fetch-raw-features!]]
            [components.region :refer [regions-selector]]
            [components.modal :refer [modal]]))

;; Main app
(defn app []
  (r/with-let [_ (do (swap! app-state (fn [old-state] (assoc old-state :loading? true)))
                     (fetch-raw-features!)
                     (fetch-all-carbon-intensities!)
                     (swap! app-state (fn [old-state] (assoc old-state :loading? false))))]
    [:div.app
     [:header
      [:h1 "React-Leaflet ClojureScript App"]
      [:p "Map with multiple GeoJSON layers"]]
     (regions-selector)
     (when-not (:loading? @app-state)
       (map-component))
     (modal)]))
