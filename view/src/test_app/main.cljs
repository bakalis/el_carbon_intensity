(ns test-app.main
  (:require [reagent.dom.client :as rdomc]
            [components.app :refer [app]]
            [state.state :refer [app-state close-modal! set-region-mode!]]))

;; Root element for React 19
(defonce root (atom nil))

(defn app-root []
  (let [{:keys [region-mode geojson center zoom modal]} @app-state]
    [app {:mode region-mode
          :center center
          :zoom zoom
          :geojson geojson
          :on-change set-region-mode!
          :open (:open modal)
          :feature (:feature modal)
          :close-modal close-modal!}]))

;; Initialize app with React 19 createRoot API
(defn mount-root []
  (let [root-el (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdomc/create-root root-el)))
    (rdomc/render @root [app-root])))

(defn ^:export init []
  (mount-root))
