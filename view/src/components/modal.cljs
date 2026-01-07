(ns components.modal 
  (:require [state.state :refer [app-state close-modal! set-active-tab!]]
            [clojure.walk :refer [keywordize-keys]] [components.hindcast-tab :refer [hindcast-chart]]
            [components.playground-tab :refer [playground-content]]))

;; Extract unique dates from carbon data
(defn get-available-dates [data]
  (when data
    (->> data
         (map :date_time)
         (map #(.slice % 0 10))
         distinct
         sort
         vec)))

;; Filter data for a specific date
(defn filter-data-by-date [data date]
  (when data
    (filter #(= (.slice (:date_time %) 0 10) date) data)))

;; Modal with tabs
(defn modal []
  (let [{:keys [open feature active-tab]} (:modal @app-state)
        carbon-intensities (:carbon-intensities @app-state)
        zone-id (get-in feature [:properties :zoneName] "Unnamed Region")
        carbon-data (keywordize-keys (get-in carbon-intensities [zone-id]))]
    (when open
      [:div.modal-overlay {:on-click close-modal!}
       [:div.modal-content {:on-click #(.stopPropagation %)}
        [:div.modal-header
         [:h2 (str zone-id " - " (:selected-date @app-state))]
         [:button.close-btn {:on-click close-modal!} "×"]]
        
        ;; Tab buttons
        [:div.tab-navigation
         [:button.tab-button 
          {:class (when (= active-tab :hindcast) "active")
           :on-click #(set-active-tab! :hindcast)}
          "📊 Hindcast Analysis"]
         [:button.tab-button 
          {:class (when (= active-tab :playground) "active")
           :on-click #(set-active-tab! :playground)}
          "⚡ Playground"]]
        
        [:div.modal-body
         (when feature
           [:div
            (when carbon-data 
              (if (= active-tab :playground)
                [playground-content]
                [hindcast-chart carbon-data]))])]
        [:div.modal-footer
         [:button.btn-primary {:on-click close-modal!} "Close"]]]])))
