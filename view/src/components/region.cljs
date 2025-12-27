(ns components.region
  (:require [state.state :refer [app-state set-region-mode!]]))

(defn regions-selector []
  (let [{:keys [region-mode]} @app-state]
    [:div.regions-selector
     {:style {:margin "1rem 0"
              :display "flex"
              :align-items "center"
              :justify-content "center"}}

     [:h3 "Regions"]

     [:label
      {:style {:display "block" :cursor "pointer"}}
      [:input
       {:type "radio"
        :name "regions"
        :checked (= region-mode :full)
        :on-change (fn [_](set-region-mode! :full))}]
      " Full Sweden"]

     [:label
      {:style {:display "block" :cursor "pointer"}}
      [:input
       {:type "radio"
        :name "regions"
        :checked (= region-mode :zones)
        :on-change (fn [_](set-region-mode! :zones))}]
      " Zones"]]))
