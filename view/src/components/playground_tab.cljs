(ns components.playground-tab
  (:require [reagent.core :as r]
   [state.state :refer [app-state predict-carbon-intensity]]
   [components.common :refer [energy-slider]]))

(defn playground-content []
  (let [feature     (:feature (:modal @app-state))
        carbon-data (:carbon-data (:modal @app-state))
        sample-data (first carbon-data)

        form-state
        (r/atom
         (or sample-data
             {:date_time (-> (js/Date.) .toISOString (.slice 0 16))
              :zone_id (get-in feature [:properties :zoneName])

              :coal 0.0
              :oil 0.0
              :gas 0.0

              :solar 0.0
              :wind 0.0
              :hydro 0.0
              :hydro_storage 0.0
              :geothermal 0.0
              :biomass 0.0

              :nuclear 0.0
              :battery_storage 0.0
              :other 0.0

              :total 0.0
              :load 0.0
              :import_ 0.0
              :export 0.0}))

        prediction-result (r/atom nil)
        loading?          (r/atom false)]

    (fn []
      [:div.playground-tab
       [:div.playground-header
        [:h3 "⚡ Prediction Playground"]
        [:p.playground-description
         "Adjust the energy mix and demand to explore how carbon intensity changes."]]

       [:div.playground-content
        [:div.form-section
         [:form.prediction-form
          {:on-submit
           (fn [e]
             (.preventDefault e)
             (reset! loading? true)
             (-> (predict-carbon-intensity @form-state)
                 (.then #(reset! prediction-result (:carbon_intensity %)))
                 (.finally #(reset! loading? false))))}
          [:h5.section-title "🏭 Fossil Fuels"]

          [:div.slider-grid 
            [energy-slider
              {:label "Coal" :icon "⚫" :key :coal
               :min 0 :max 5000 :step 50 :unit "MW"}
             form-state sample-data]

          [energy-slider
           {:label "Oil" :icon "🛢️" :key :oil
            :min 0 :max 3000 :step 50 :unit "MW"}
           form-state sample-data]

          [energy-slider
           {:label "Gas" :icon "🔥" :key :gas
            :min 0 :max 8000 :step 100 :unit "MW"}
           form-state sample-data]]

          ;; -------------------------------
          ;; Renewables
          ;; -------------------------------
          [:h5.section-title "♻️ Renewables"]

          [:div.slider-grid 
          [energy-slider
           {:label "Solar" :icon "☀️" :key :solar
            :min 0 :max 6000 :step 50 :unit "MW"}
           form-state sample-data]

          [energy-slider
           {:label "Wind" :icon "💨" :key :wind
            :min 0 :max 10000 :step 100 :unit "MW"}
           form-state sample-data]

          [energy-slider
           {:label "Hydro" :icon "💧" :key :hydro
            :min 0 :max 7000 :step 50 :unit "MW"}
           form-state sample-data]]

          [:div.slider-grid 
          [energy-slider
           {:label "Hydro Storage" :icon "🌊" :key :hydro_storage
            :min -3000 :max 3000 :step 50 :unit "MW"}
           form-state sample-data]

          [energy-slider
           {:label "Geothermal" :icon "🌋" :key :geothermal
            :min 0 :max 2000 :step 25 :unit "MW"}
           form-state sample-data]

          [energy-slider
           {:label "Biomass" :icon "🌿" :key :biomass
            :min 0 :max 3000 :step 25 :unit "MW"}
           form-state sample-data]]

          ;; -------------------------------
          ;; Other Sources
          ;; -------------------------------
          [:h5.section-title "⚡ Other Sources"]

          [:div.slider-grid 
          [energy-slider
           {:label "Nuclear" :icon "⚛️" :key :nuclear
            :min 0 :max 12000 :step 100 :unit "MW"}
           form-state sample-data]

          [energy-slider
           {:label "Battery Storage" :icon "🔋" :key :battery_storage
            :min -2000 :max 2000 :step 25 :unit "MW"}
           form-state sample-data]

          [energy-slider
           {:label "Other" :icon "❓" :key :other
            :min 0 :max 2000 :step 25 :unit "MW"}
           form-state sample-data]]

          ;; -------------------------------
          ;; Load & Trade
          ;; -------------------------------
          [:h5.section-title "📊 Load & Trade"]

          [:div.slider-grid 
          [energy-slider
           {:label "Total Generation" :icon "⚡" :key :total
            :min 0 :max 25000 :step 100 :unit "MW"}
           form-state sample-data]

          [energy-slider
           {:label "Load" :icon "📈" :key :load
            :min 0 :max 25000 :step 100 :unit "MW"}
           form-state sample-data]]

          [:div.slider-grid 
          [energy-slider
           {:label "Import" :icon "📥" :key :import_
            :min 0 :max 10000 :step 100 :unit "MW"}
           form-state sample-data]

          [energy-slider
           {:label "Export" :icon "📤" :key :export
            :min 0 :max 10000 :step 100 :unit "MW"}
           form-state sample-data]]

          ;; Submit
          [:button.btn-predict {:type "submit" :disabled @loading?}
           (if @loading?
             "Computing…"
             "⚡ Get Prediction")]]]

        ;; =====================================================================
        ;; RIGHT — RESULTS
        ;; =====================================================================
        [:div.results-section
         [:h4 "Prediction Result"]

         (cond
           @loading?
           [:p "Analyzing inputs…"]

           (nil? @prediction-result)
           [:p "Adjust sliders and run a prediction."]

           (:error @prediction-result)
           [:p.error (:error @prediction-result)]

           :else
           [:div.prediction-display
            [:h2
             (str (.toFixed @prediction-result 1)
                  " gCO₂ / kWh")]

            (when-let [c (:confidence @prediction-result)]
              [:p (str "Confidence: " (.toFixed (* c 100) 0) "%")])])]]])))

