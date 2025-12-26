(ns state.state
  (:require [reagent.core :as r]
            [data.SE :as SE]
            [data.SE-1 :as SE-1]
            [data.SE-2 :as SE-2]
            [data.SE-3 :as SE-3]
            [data.SE-4 :as SE-4]))

;; App state
(defonce app-state (r/atom {:center [62.3293 18.0686]
                            :zoom 5
                            :region-mode :zones
                            :geojson [SE-1/data 
                                      SE-2/data 
                                      SE-3/data 
                                      SE-4/data]
                            :modal {:open false
                                    :feature nil}}))

(defn open-modal! [feature]
  (swap! app-state assoc :modal {:open true :feature feature}))

;; Close modal
(defn close-modal! []
  (swap! app-state assoc-in [:modal :open] false))


(defn set-region-mode! [mode]
  (swap! app-state
         (fn [state]
           (case mode
             :full
             (-> state
                 (assoc :region-mode :full)
                 (assoc :geojson [SE/data]))

             :zones
             (-> state
                 (assoc :region-mode :zones)
                 (assoc :geojson [SE-1/data 
                                  SE-2/data 
                                  SE-3/data 
                                  SE-4/data]))))))

