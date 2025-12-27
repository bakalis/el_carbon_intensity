(ns components.modal 
  (:require [state.state :refer [app-state close-modal! fetch-carbon-intensity!]]
            [reagent.core :as r]
            ["recharts" :refer [LineChart Line XAxis YAxis CartesianGrid Tooltip Legend ResponsiveContainer]]))

;; Extract unique dates from carbon data
(defn get-available-dates [data]
  (when data
    (->> data
         (map :datetime)
         (map #(.slice % 0 10))
         distinct
         sort
         vec)))

;; Filter data for a specific date
(defn filter-data-by-date [data date]
  (when data
    (filter #(= (.slice (:datetime %) 0 10) date) data)))

;; New: Hindcast chart component
(defn hindcast-chart [data]
  (when (and data (seq data))
    (let [;; Filter only data with actual values (hindcast)
          hindcast-data (filter :actual_intensity data)
          ;; Transform for Recharts
          chart-data (mapv (fn [entry]
                            {:time (-> (:datetime entry) (.slice 11 16))
                             :datetime (:datetime entry)
                             :predicted (:predicted_intensity entry)
                             :actual (:actual_intensity entry)})
                          hindcast-data)
          ;; Calculate performance metrics
          mae (if (seq hindcast-data)
                (/ (reduce + (map #(js/Math.abs (- (:actual_intensity %)
                                                   (:predicted_intensity %)))
                                 hindcast-data))
                   (count hindcast-data))
                0)
          rmse (if (seq hindcast-data)
                 (js/Math.sqrt
                  (/ (reduce + (map #(js/Math.pow (- (:actual_intensity %)
                                                     (:predicted_intensity %))
                                                  2)
                                   hindcast-data))
                     (count hindcast-data)))
                 0)]
      (when (seq chart-data)
        [:div.hindcast-section
         [:h4 "Model Performance - Hindcast"]
         
         ;; Performance metrics
         [:div.metrics-row
          [:div.metric-card
           [:div.metric-label "Mean Absolute Error"]
           [:div.metric-value (str (.toFixed mae 2) " gCO₂/kWh")]]
          [:div.metric-card
           [:div.metric-label "Root Mean Square Error"]
           [:div.metric-value (str (.toFixed rmse 2) " gCO₂/kWh")]]
          [:div.metric-card
           [:div.metric-label "Data Points"]
           [:div.metric-value (count hindcast-data)]]]
         
         ;; Chart
         [:div.chart-container
          [:> ResponsiveContainer {:width "100%" :height 400}
           [:> LineChart {:data (clj->js chart-data)
                         :margin {:top 5 :right 30 :left 20 :bottom 5}}
            [:> CartesianGrid {:strokeDasharray "3 3"}]
            [:> XAxis {:dataKey "time"
                      :label {:value "Time" :position "insideBottom" :offset -5}}]
            [:> YAxis {:label {:value "Intensity (gCO₂/kWh)" :angle -90 :position "insideLeft"}}]
            [:> Tooltip {:contentStyle {:background "#fff" :border "1px solid #ccc"}}]
            [:> Legend]
            [:> Line {:type "monotone"
                     :dataKey "actual"
                     :stroke "#4ecdc4"
                     :strokeWidth 2
                     :name "Actual Intensity"
                     :dot {:r 3}}]
            [:> Line {:type "monotone"
                     :dataKey "predicted"
                     :stroke "#667eea"
                     :strokeWidth 2
                     :name "Predicted Intensity"
                     :strokeDasharray "5 5"
                     :dot {:r 3}}]]]]]))))

;; New: Date selector component
(defn date-selector []
  (let [zone-name (get-in @app-state [:modal :feature :properties :zoneName])
        selected-date (r/atom (-> (js/Date.) .toISOString (.slice 0 10)))]
    (fn []
      [:div.date-selector
       [:label "Select Date: "
        [:input {:type "date"
                :value @selected-date
                :max (-> (js/Date.) .toISOString (.slice 0 10))
                :on-change #(let [new-date (-> % .-target .-value)]
                             (reset! selected-date new-date)
                             (when zone-name
                               (fetch-carbon-intensity! zone-name new-date)))}]]])))

;; Your existing carbon-intensity-chart - keeping it as is
(defn carbon-intensity-chart [data]
  (when data
    [:div.carbon-chart
     [:h4 "Carbon Intensity Data"]
     [:div.data-summary
      [:p "Total data points: " (count data)]]
     [:table.carbon-table
      [:thead
       [:tr
        [:th "Time"]
        [:th "Predicted"]
        [:th "Actual"]
        [:th "Difference"]]]
      [:tbody
       (for [entry (take 24 data)] ; Show first 24 hours
         ^{:key (:datetime entry)}
         [:tr
          [:td (-> (:datetime entry) (.slice 11 16))] ; Show HH:MM
          [:td.predicted (str (.toFixed (:predicted_intensity entry) 1))]
          [:td.actual (if (:actual_intensity entry)
                       (str (.toFixed (:actual_intensity entry) 1))
                       "N/A")]
          [:td.difference 
           (if (:actual_intensity entry)
             (let [diff (- (:actual_intensity entry) (:predicted_intensity entry))]
               [:span {:class (if (pos? diff) "positive" "negative")}
                (str (.toFixed diff 1))])
             "N/A")]])]]]))

;; Enhanced modal - your existing structure with added chart
(defn modal []
  (let [{:keys [open feature carbon-data loading error]} (:modal @app-state)]
    (when open
      [:div.modal-overlay {:on-click close-modal!}
       [:div.modal-content {:on-click #(.stopPropagation %)}
        [:div.modal-header
         [:h2 "Region Details"]
         [:button.close-btn {:on-click close-modal!} "×"]]
        [:div.modal-body
         (when feature
           [:div
            [:h3 (get-in feature [:properties :zoneName] "Unnamed Region")]
            
            ;; NEW: Date selector
            [date-selector]
            
            ;; Loading state (your existing code)
            (when loading
              [:div.loading-data
               [:div.spinner-small]
               [:p "Loading carbon intensity data..."]])
            
            ;; Error state (your existing code)
            (when error
              [:div.error-message
               [:p "Error loading data: " error]])
            
            ;; NEW: Hindcast chart (only when data is loaded)
            (when (and carbon-data (not loading))
              [hindcast-chart carbon-data])])]
        [:div.modal-footer
         [:button.btn-primary {:on-click close-modal!} "Close"]]]])))

