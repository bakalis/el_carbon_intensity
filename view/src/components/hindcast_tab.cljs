(ns components.hindcast-tab
  (:require ["recharts" :refer [LineChart Line XAxis YAxis CartesianGrid Tooltip Legend ResponsiveContainer]]))

(defn hindcast-chart [data]
  (when (and data (seq data))
    (let [chart-data (mapv (fn [entry]
                             {:time (-> (:date_time entry) (.slice 11 16))
                              :date_time (:date_time entry)
                              :predicted (:predicted_intensity entry)
                              :actual (:actual_intensity entry)})
                           data)
          valid-data (filter #(and (some? (:actual_intensity %))
                                   (some? (:predicted_intensity %)))
                             data)
          mae (if (seq valid-data)
                (/ (reduce + (map #(js/Math.abs (- (:actual_intensity %)
                                                   (:predicted_intensity %)))
                                  valid-data))
                   (count valid-data))
                0)
          rmse (if (seq valid-data)
                 (js/Math.sqrt
                   (/ (reduce + (map #(js/Math.pow (- (:actual_intensity %)
                                                      (:predicted_intensity %))
                                                   2)
                                     valid-data))
                      (count valid-data)))
                 0)]
      (when (seq chart-data)
        [:div.hindcast-section
         [:h4 "Model Performance - Hindcast"]
         [:div.metrics-row
          [:div.metric-card
           [:div.metric-label "Mean Absolute Error"]
           [:div.metric-value (str (.toFixed mae 2) " gCO₂/kWh")]]
          [:div.metric-card
           [:div.metric-label "Root Mean Square Error"]
           [:div.metric-value (str (.toFixed rmse 2) " gCO₂/kWh")]]
          [:div.metric-card
           [:div.metric-label "Data Points"]
           [:div.metric-value (count data)]]]
         [:div.chart-container
          [:> ResponsiveContainer {:width "100%" :height 400}
           [:> LineChart {:data (clj->js chart-data)
                          :margin {:top 5 :right 30 :left 20 :bottom 5}}
            [:> CartesianGrid {:strokeDasharray "3 3"}]
            [:> XAxis {:dataKey "time"}]
            [:> YAxis {:label {:value "Intensity (gCO₂/kWh)" :angle -90 :position "insideLeft"}}]
            [:> Tooltip {:contentStyle {:background "#fff" :border "1px solid #ccc"}}]
            [:> Legend]
            [:> Line {:type "monotone"
                      :dataKey "actual"
                      :stroke "#FFA500"
                      :strokeWidth 2
                      :name "Actual Intensity"
                      :dot {:r 4}}]
            [:> Line {:type "monotone"
                      :dataKey "predicted"
                      :stroke "#667eea"
                      :strokeWidth 2
                      :name "Predicted Intensity"
                      :dot {:r 4}}]]]]]))))
