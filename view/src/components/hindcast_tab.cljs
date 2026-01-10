(ns components.hindcast-tab
  (:require ["recharts" :refer [LineChart Line XAxis YAxis CartesianGrid Tooltip Legend ResponsiveContainer]]
            [state.state :refer [app-state]]
            [reagent.core :as r]))

(defn hindcast-chart [data on-hours-changed]
  (when (and data (seq data))
    (let [hours-before-options (sort (distinct (map :hours_before_forecast data)))
          selected-hours (:selected-before-hours (:modal @app-state))
          filtered-data (filter #(= (:hours_before_forecast %) selected-hours) data)
          chart-data (mapv (fn [entry]
                             {:time (-> (:date_time entry) (.slice 11 16))
                              :date_time (:date_time entry)
                              :predicted (:predicted_intensity entry)
                              :actual (:actual_intensity entry)})
                           filtered-data)
          valid-data (filter #(and (some? (:actual_intensity %))
                                   (some? (:predicted_intensity %)))
                             filtered-data)
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
           [:div.metric-value (count filtered-data)]]]
         
         ;; Hours Before Forecast Slider
         [:div.w-full.mt-4.mb-6.p-4.bg-slate-50.rounded-lg.border.border-slate-200
          [:div.flex.items-center.justify-between.mb-2
           [:label.text-sm.font-medium.text-slate-700 "Forecast Horizon (Hours Before)"]
           [:span.text-sm.font-semibold.text-indigo-600 (str selected-hours " hours")]]
          [:input.w-full.h-2.bg-slate-200.rounded-lg.appearance-none.cursor-pointer
           {:type "range"
            :min (apply min hours-before-options)
            :max (apply max hours-before-options)
            :step 1
            :value selected-hours
            :on-change #(on-hours-changed (js/parseInt (-> % .-target .-value)))}]
          [:div.flex.justify-between.mt-1
           [:span.text-xs.text-slate-500 (str (apply min hours-before-options) "h")]
           [:span.text-xs.text-slate-500 (str (apply max hours-before-options) "h")]]]
         
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
