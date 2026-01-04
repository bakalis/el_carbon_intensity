(ns components.playground-tab
  (:require [state.state :refer [app-state]]
            [reagent.core :as r]))

;; Playground content - placeholder for now
(defn predict-carbon-intensity [form-data]
  (-> (js/fetch "http://localhost:8000/predict"
                (clj->js {:method "POST"
                         :headers {"Content-Type" "application/json"}
                         :body (js/JSON.stringify (clj->js form-data))}))
      (.then (fn [response]
               (if (.-ok response)
                 (.json response)
                 (throw (js/Error. (str "HTTP error: " (.-status response)))))))
      (.then (fn [data]
               (js->clj data :keywordize-keys true)))
      (.catch (fn [error]
                (js/console.error "Error predicting:" error)
                {:error (.-message error)}))))

;; Playground content
(defn playground-content []
  (let [feature (:feature (:modal @app-state))
        carbon-data (:carbon-data (:modal @app-state))
        sample-data (first carbon-data)
        form-state (r/atom (or sample-data
                              {:datetime (-> (js/Date.) .toISOString (.slice 0 16))
                               :zone_id (get-in feature [:properties :zoneName])
                               :coal 0.0
                               :oil 0.0
                               :gas 0.0
                               :geothermal 0.0
                               :solar 0.0
                               :hydro 0.0
                               :hydro_storage 0.0
                               :wind 0.0
                               :biomass 0.0
                               :battery_storage 0.0
                               :nuclear 0.0
                               :other 0.0
                               :total 0.0
                               :load 0.0
                               :import 0.0
                               :export 0.0}))
        prediction-result (r/atom nil)
        loading (r/atom false)]
    (fn []
      [:div.playground-tab
       [:div.playground-header
        [:h3 "🧪 Prediction Playground"]
        [:p.playground-description 
         "Adjust energy generation and load parameters to predict carbon intensity."]]
       
       [:div.playground-content
        ;; Left side - Form
        [:div.form-section
         [:div.form-header
          [:h4 "Input Features"]
          [:p.form-subtitle "Configure energy mix and demand"]]
         
         [:form.prediction-form
          {:on-submit (fn [e]
                       (.preventDefault e)
                       (reset! loading true)
                       (-> (predict-carbon-intensity @form-state)
                           (.then (fn [result]
                                   (reset! prediction-result result)
                                   (reset! loading false)))
                           (.catch (fn [_]
                                    (reset! loading false)))))}
          
          ;; Fossil Fuels Section
          [:h5.section-title "🏭 Fossil Fuels"]
          
          [:div.form-row
           [:div.form-group
            [:label 
             [:span.label-icon "⚫"]
             "Coal"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :min "0"
                                 :value (or (:coal @form-state) 0)
                                 :on-change #(swap! form-state assoc :coal (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]
           
           [:div.form-group
            [:label 
             [:span.label-icon "🛢️"]
             "Oil"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :min "0"
                                 :value (or (:oil @form-state) 0)
                                 :on-change #(swap! form-state assoc :oil (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]]
          
          [:div.form-group
           [:label 
            [:span.label-icon "🔥"]
            "Gas"]
           [:div.input-with-unit
            [:input.input-field {:type "number"
                                :step "0.1"
                                :min "0"
                                :value (or (:gas @form-state) 0)
                                :on-change #(swap! form-state assoc :gas (js/parseFloat (-> % .-target .-value)))}]
            [:span.unit "MW"]]]
          
          ;; Renewable Energy Section
          [:div.form-section-divider
           [:h5.section-title "♻️ Renewable Energy"]]
          
          [:div.form-row
           [:div.form-group
            [:label 
             [:span.label-icon "☀️"]
             "Solar"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :min "0"
                                 :value (or (:solar @form-state) 0)
                                 :on-change #(swap! form-state assoc :solar (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]
           
           [:div.form-group
            [:label 
             [:span.label-icon "💨"]
             "Wind"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :min "0"
                                 :value (or (:wind @form-state) 0)
                                 :on-change #(swap! form-state assoc :wind (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]]
          
          [:div.form-row
           [:div.form-group
            [:label 
             [:span.label-icon "💧"]
             "Hydro"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :min "0"
                                 :value (or (:hydro @form-state) 0)
                                 :on-change #(swap! form-state assoc :hydro (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]
           
           [:div.form-group
            [:label 
             [:span.label-icon "🌊"]
             "Hydro Storage"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :value (or (:hydro_storage @form-state) 0)
                                 :on-change #(swap! form-state assoc :hydro_storage (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]]
          
          [:div.form-row
           [:div.form-group
            [:label 
             [:span.label-icon "🌋"]
             "Geothermal"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :min "0"
                                 :value (or (:geothermal @form-state) 0)
                                 :on-change #(swap! form-state assoc :geothermal (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]
           
           [:div.form-group
            [:label 
             [:span.label-icon "🌿"]
             "Biomass"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :min "0"
                                 :value (or (:biomass @form-state) 0)
                                 :on-change #(swap! form-state assoc :biomass (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]]
          
          ;; Other Sources Section
          [:div.form-section-divider
           [:h5.section-title "⚡ Other Sources"]]
          
          [:div.form-row
           [:div.form-group
            [:label 
             [:span.label-icon "⚛️"]
             "Nuclear"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :min "0"
                                 :value (or (:nuclear @form-state) 0)
                                 :on-change #(swap! form-state assoc :nuclear (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]
           
           [:div.form-group
            [:label 
             [:span.label-icon "🔋"]
             "Battery Storage"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :value (or (:battery_storage @form-state) 0)
                                 :on-change #(swap! form-state assoc :battery_storage (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]]
          
          [:div.form-group
           [:label 
            [:span.label-icon "❓"]
            "Other"]
           [:div.input-with-unit
            [:input.input-field {:type "number"
                                :step "0.1"
                                :min "0"
                                :value (or (:other @form-state) 0)
                                :on-change #(swap! form-state assoc :other (js/parseFloat (-> % .-target .-value)))}]
            [:span.unit "MW"]]]
          
          ;; Load & Trade Section
          [:div.form-section-divider
           [:h5.section-title "📊 Load & Trade"]]
          
          [:div.form-group
           [:label 
            [:span.label-icon "⚡"]
            "Total Generation"]
           [:div.input-with-unit
            [:input.input-field {:type "number"
                                :step "0.1"
                                :min "0"
                                :value (or (:total @form-state) 0)
                                :on-change #(swap! form-state assoc :total (js/parseFloat (-> % .-target .-value)))}]
            [:span.unit "MW"]]]
          
          [:div.form-row
           [:div.form-group
            [:label 
             [:span.label-icon "📈"]
             "Load"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :min "0"
                                 :value (or (:load @form-state) 0)
                                 :on-change #(swap! form-state assoc :load (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]
           
           [:div.form-group
            [:label 
             [:span.label-icon "📥"]
             "Import"]
            [:div.input-with-unit
             [:input.input-field {:type "number"
                                 :step "0.1"
                                 :value (or (:import @form-state) 0)
                                 :on-change #(swap! form-state assoc :import (js/parseFloat (-> % .-target .-value)))}]
             [:span.unit "MW"]]]]
          
          [:div.form-group
           [:label 
            [:span.label-icon "📤"]
            "Export"]
           [:div.input-with-unit
            [:input.input-field {:type "number"
                                :step "0.1"
                                :value (or (:export @form-state) 0)
                                :on-change #(swap! form-state assoc :export (js/parseFloat (-> % .-target .-value)))}]
            [:span.unit "MW"]]]
          
          ;; Submit button
          [:button.btn-predict {:type "submit" :disabled @loading}
           (if @loading 
             [:span 
              [:span.spinner-inline] 
              "Computing..."]
             [:span 
              [:span "🚀"] 
              " Get Prediction"])]]]
        
        ;; Right side - Results (same as before)
        [:div.results-section
         [:div.results-header
          [:h4 "Prediction Result"]
          [:p.results-subtitle "AI-powered carbon intensity forecast"]]
         
         (cond
           @loading
           [:div.loading-prediction
            [:div.spinner-large]
            [:p "Analyzing your inputs..."]]
           
           @prediction-result
           (if (:error @prediction-result)
             [:div.error-display
              [:div.error-icon "⚠️"]
              [:h5 "Prediction Failed"]
              [:p (:error @prediction-result)]]
             [:div.prediction-display
              [:div.result-main-card
               [:div.result-icon "🌍"]
               [:div.result-label "Predicted Carbon Intensity"]
               [:div.result-value 
                (str (.toFixed (:predicted_intensity @prediction-result) 1))
                [:span.result-unit " gCO₂/kWh"]]]
              
              (when (:confidence @prediction-result)
                [:div.result-secondary-card
                 [:div.metric-row
                  [:span.metric-label "Confidence Level"]
                  [:span.metric-value 
                   (str (.toFixed (* (:confidence @prediction-result) 100) 0) "%")]]
                 [:div.confidence-bar
                  [:div.confidence-fill 
                   {:style {:width (str (* (:confidence @prediction-result) 100) "%")}}]]])
              
              [:div.result-info-box
               [:div.info-icon "💡"]
               [:div
                [:p.info-title "What does this mean?"]
                [:p.info-text 
                 "This prediction shows the estimated carbon intensity based on your energy mix. "
                 "Lower values indicate cleaner energy generation."]]]])
           
           :else
           [:div.placeholder-display
            [:div.placeholder-icon "📊"]
            [:h5 "Ready to predict"]
            [:p "Configure the energy generation mix on the left and click 'Get Prediction' to see results."]])]]])))
