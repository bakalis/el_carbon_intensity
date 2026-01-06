(ns components.modal 
  (:require [state.state :refer [app-state close-modal! fetch-carbon-intensity! set-active-tab!]]
            [components.hindcast-tab :refer [hindcast-chart]]
            [components.playground-tab :refer [playground-content]]
            [reagent.core :as r]))

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

;; Date selector component
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

;; Modal with tabs
(defn modal []
  (let [{:keys [open feature carbon-data loading error active-tab]} (:modal @app-state)]
    (when open
      [:div.modal-overlay {:on-click close-modal!}
       [:div.modal-content {:on-click #(.stopPropagation %)}
        [:div.modal-header
         [:h2 (str (get-in feature [:properties :zoneName] "Unnamed Region") " - " (:selected-date @app-state))]
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
            (when loading
              [:div.loading-data
               [:div.spinner-small]
               [:p "Loading carbon intensity data..."]])
            
            ;; Error state
            (when error
              [:div.error-message
               [:p "Error loading data: " error]])
            
            ;; Tab content
            (when (and carbon-data (not loading))
              (if (= active-tab :playground)
                [playground-content]
                [hindcast-chart carbon-data]))])]
        [:div.modal-footer
         [:button.btn-primary {:on-click close-modal!} "Close"]]]])))
