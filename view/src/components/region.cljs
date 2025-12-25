(ns components.region)

(defn regions-selector [{mode :mode
                         on-change :on-change}]
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
        :checked (= mode :full)
        :on-change (fn [_](on-change :full))}]
      " Full Sweden"]

     [:label
      {:style {:display "block" :cursor "pointer"}}
      [:input
       {:type "radio"
        :name "regions"
        :checked (= mode :zones)
        :on-change (fn [_](on-change :zones))}]
      " Zones"]])
