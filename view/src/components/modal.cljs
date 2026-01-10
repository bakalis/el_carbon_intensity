(ns components.modal 
  (:require [state.state :refer [app-state close-modal! set-active-tab!]]
            [clojure.walk :refer [keywordize-keys]]
            [clojure.string :as str]
            [components.hindcast-tab :refer [hindcast-chart]]
            [components.playground-tab :refer [playground-content]]))

(defn modal []
  (let [{:keys [open feature active-tab]} (:modal @app-state)
        carbon-intensities (:carbon-intensities @app-state)
        intensity-type (name (:intensity-type @app-state))
        zone-id (get-in feature [:properties :zoneName] "Unnamed Region")
        carbon-data (keywordize-keys (get-in carbon-intensities [zone-id intensity-type]))]
    (when open
      [:div.modal-overlay {:on-click close-modal!}
       [:div.modal-content {:on-click #(.stopPropagation %)}
        [:div.modal-header
         [:h2 (str zone-id " - " (:selected-date @app-state) " - " (str/capitalize intensity-type) " Carbon Intensity")]
         [:button.close-btn {:on-click close-modal!} "×"]]

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
