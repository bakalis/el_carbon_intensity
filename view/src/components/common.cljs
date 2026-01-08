(ns components.common)

(defn energy-slider
  [{:keys [label icon key min max step unit]} form-state]
  (let [value (get @form-state key 0)]
    [:div.form-group.energy-slider
     [:div.slider-label
      [:span.slider-icon icon]
      [:span.slider-text label]]

     [:div.slider-wrapper
      [:input.slider-input
       {:type "range"
        :min min
        :max max
        :step step
        :value value
        :on-change #(swap! form-state assoc
                           key
                           (js/parseFloat (.. % -target -value)))}]

      [:div.slider-value
       (str (.toFixed value 0) " " unit)]]]))
