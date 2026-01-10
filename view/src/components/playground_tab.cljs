(ns components.playground-tab
  (:require [reagent.core :as r]
            [state.state :refer [app-state predict-carbon-intensity]]
            [components.common :refer [energy-slider]]
            [utils.common :refer [intensity->color]]))

(defn playground-content []
  (let [feature     (:feature (:modal @app-state))
        zone-id (get-in feature [:properties :zoneName])
        intensities (:carbon-intensities @app-state)
        intensity-type (name (:intensity-type @app-state))
        carbon-data (get-in intensities [zone-id intensity-type])
        sample-data (first carbon-data)
        raw-features (:raw-features @app-state)
        zone-features (get raw-features zone-id)
        form-state
        (r/atom
          (or sample-data
              {:date_time (-> (js/Date.) .toISOString (.slice 0 16))
               :zone_id zone-id

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
             (-> (predict-carbon-intensity (assoc @form-state :output_type intensity-type))
                 (.then #(reset! prediction-result (:carbon_intensity %)))
                 (.finally #(reset! loading? false))))}
          [:h5.section-title "🏭 Fossil Fuels"]

          [:div.slider-grid 
           (when (some #(= % "coal") zone-features) 
             [energy-slider
              {:label "Coal" :icon "⚫" :key :coal
               :min 0 :max 5000 :step 50 :unit "MW"}
              form-state sample-data])

           (when (some #(= % "oil") zone-features) 
             [energy-slider
              {:label "Oil" :icon "🛢️" :key :oil
               :min 0 :max 3000 :step 50 :unit "MW"}
              form-state sample-data])

           (when (some #(= % "gas") zone-features) 
             [energy-slider
              {:label "Gas" :icon "🔥" :key :gas
               :min 0 :max 8000 :step 100 :unit "MW"}
              form-state sample-data])]

          [:h5.section-title "♻️ Renewables"]

          [:div.slider-grid 
           (when (some #(= % "solar") zone-features) 
             [energy-slider
              {:label "Solar" :icon "☀️" :key :solar
               :min 0 :max 6000 :step 50 :unit "MW"}
              form-state sample-data])

           (when (some #(= % "wind") zone-features) 
             [energy-slider
              {:label "Wind" :icon "💨" :key :wind
               :min 0 :max 10000 :step 100 :unit "MW"}
              form-state sample-data])

           (when (some #(= % "hydro") zone-features) 
             [energy-slider
              {:label "Hydro" :icon "💧" :key :hydro
               :min 0 :max 7000 :step 50 :unit "MW"}
              form-state sample-data])]

          [:div.slider-grid 
           (when (some #(= % "hydro_storage") zone-features) 
             [energy-slider
              {:label "Hydro Storage" :icon "🌊" :key :hydro_storage
               :min -3000 :max 3000 :step 50 :unit "MW"}
              form-state sample-data])

           (when (some #(= % "geothermal") zone-features) 
             [energy-slider
              {:label "Geothermal" :icon "🌋" :key :geothermal
               :min 0 :max 2000 :step 25 :unit "MW"}
              form-state sample-data])

           (when (some #(= % "biomass") zone-features) 
             [energy-slider
              {:label "Biomass" :icon "🌿" :key :biomass
               :min 0 :max 3000 :step 25 :unit "MW"}
              form-state sample-data])]

          [:h5.section-title "⚡ Other Sources"]

          [:div.slider-grid 
           (when (some #(= % "nuclear") zone-features) 
             [energy-slider
              {:label "Nuclear" :icon "⚛️" :key :nuclear
               :min 0 :max 12000 :step 100 :unit "MW"}
              form-state sample-data])

           (when (some #(= % "battery_storage") zone-features) 
             [energy-slider
              {:label "Battery Storage" :icon "🔋" :key :battery_storage
               :min -2000 :max 2000 :step 25 :unit "MW"}
              form-state sample-data])

           (when (some #(= % "other") zone-features) 
             [energy-slider
              {:label "Other" :icon "❓" :key :other
               :min 0 :max 2000 :step 25 :unit "MW"}
              form-state sample-data])]

          [:h5.section-title "📊 Load & Trade"]

          [:div.slider-grid 
           (when (some #(= % "total") zone-features) 
             [energy-slider
              {:label "Total Generation" :icon "⚡" :key :total
               :min 0 :max 25000 :step 100 :unit "MW"}
              form-state sample-data])

           (when (some #(= % "load") zone-features) 
             [energy-slider
              {:label "Load" :icon "📈" :key :load
               :min 0 :max 25000 :step 100 :unit "MW"}
              form-state sample-data])]

          [:div.slider-grid 
           (when (some #(= % "import") zone-features) 
             [energy-slider
              {:label "Import" :icon "📥" :key :import_
               :min 0 :max 10000 :step 100 :unit "MW"}
              form-state sample-data])

           (when (some #(= % "export") zone-features) 
             [energy-slider
              {:label "Export" :icon "📤" :key :export
               :min 0 :max 10000 :step 100 :unit "MW"}
              form-state sample-data])]

          ;; Submit
          [:button.btn-predict {:type "submit" :disabled @loading?}
           (if @loading?
             "Computing…"
             "⚡ Get Prediction")]]]

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
             {:style {:color (intensity->color @prediction-result)}}
             (str (.toFixed @prediction-result 1)
                  " gCO₂ / kWh")]

            (when-let [c (:confidence @prediction-result)]
              [:p (str "Confidence: " (.toFixed (* c 100) 0) "%")])])]]])))

