(ns test-app.main
  (:require [reagent.core :as r]
            [reagent.dom.client :as rdomc]
            [components.app :refer [app]]
            [data.SE-1 :as SE-1]
            [data.SE-2 :as SE-2]
            [data.SE-3 :as SE-3]
            [data.SE-4 :as SE-4]
            [data.SE :as SE]))

;; App state
(defonce app-state (r/atom {:center [62.3293 18.0686]
                            :zoom 5
                            :region-mode :zones
                            :geojson [SE-1/data 
                                      SE-2/data 
                                      SE-3/data 
                                      SE-4/data]}))

;; Root element for React 19
(defonce root (atom nil))

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
(defn app-root []
  (let [{:keys [region-mode geojson center zoom]} @app-state]
    [app {:mode region-mode
          :center center
          :zoom zoom
          :geojson geojson
          :on-change set-region-mode!}]))

;; Initialize app with React 19 createRoot API
(defn mount-root []
  (let [root-el (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdomc/create-root root-el)))
    (rdomc/render @root [app-root])))

(defn ^:export init []
  (mount-root))
