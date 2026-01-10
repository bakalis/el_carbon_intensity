(ns components.playground-tab
  (:require [reagent.core :as r]
            [state.state :refer [app-state predict-carbon-intensity]]
            [clojure.walk :refer [keywordize-keys]]
            [components.common :refer [energy-slider]]
            [utils.common :refer [create-default-form-data intensity->color]]))

(defn playground-content []
  (let [feature     (:feature (:modal @app-state))
        zone-id (get-in feature [:properties :zoneName])
        intensity-type (name (:intensity-type @app-state))
        raw-features (:raw-features @app-state)
        zone-features (keywordize-keys (get raw-features zone-id))
        form-state
        (r/atom
          (create-default-form-data zone-id zone-features))

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
           (when-let [coal-feature (first (filter #(= (:name %) "coal") zone-features))]
             [energy-slider
              {:label "Coal" :icon "⚫" :key :coal
               :min (:min coal-feature) 
               :max (:max coal-feature) 
               :step 50 :unit "MW"}
              form-state])

           (when-let [feature (first (filter #(= (:name %) "oil") zone-features))] 
             [energy-slider
              {:label "Oil" :icon "🛢️" :key :oil
               :min (:min feature)
               :max (:max feature)
               :step 50 :unit "MW"}
              form-state])

           (when-let [feature (first (filter #(= (:name %) "gas") zone-features))] 
             [energy-slider
              {:label "Gas" :icon "🔥" :key :gas
               :min (:min feature)
               :max (:max feature)
               :step 50 :unit "MW"}
              form-state])]

          [:h5.section-title "♻️ Renewables"]

          [:div.slider-grid 
           (when-let [feature (first (filter #(= (:name %) "solar") zone-features))] 
             [energy-slider
              {:label "Solar" :icon "☀️" :key :solar
               :min (:min feature)
               :max (:max feature)
               :step 50 :unit "MW"}
              form-state])

           (when-let [feature (first (filter #(= (:name %) "wind") zone-features))] 
             [energy-slider
              {:label "Wind" :icon "💨" :key :wind
               :min (:min feature)
               :max (:max feature)
               :step 50 :unit "MW"}
              form-state])

           (when-let [feature (first (filter #(= (:name %) "hydro") zone-features))] 
             [energy-slider
              {:label "Hydro" :icon "💧" :key :hydro
               :min (:min feature)
               :max (:max feature)
               :step 50 :unit "MW"}
              form-state])]

          [:div.slider-grid 
           (when-let [feature (first (filter #(= (:name %) "hydro_storage") zone-features))] 
             [energy-slider
              {:label "Hydro Storage" :icon "🌊" :key :hydro_storage
               :min (:min feature)
               :max (:max feature)
               :step 50 :unit "MW"}
              form-state])

           (when-let [feature (first (filter #(= (:name %) "geothermal") zone-features))] 
             [energy-slider
              {:label "Geothermal" :icon "🌋" :key :geothermal
               :min (:min feature)
               :max (:max feature)
               :step 50 :unit "MW"}
              form-state])

           (when-let [feature (first (filter #(= (:name %) "biomass") zone-features))] 
             [energy-slider
              {:label "Biomass" :icon "🌿" :key :biomass
               :min (:min feature)
               :max (:max feature)
               :step 50 :unit "MW"}
              form-state])]

          [:h5.section-title "⚡ Other Sources"]

          [:div.slider-grid 
           (when-let [feature (first (filter #(= (:name %) "nuclear") zone-features))] 
             [energy-slider
              {:label "Nuclear" :icon "⚛️" :key :nuclear
               :min (:min feature)
               :max (:max feature)
               :step 50 :unit "MW"}
              form-state])

           (when-let [feature (first (filter #(= (:name %) "battery_storage") zone-features))] 
             [energy-slider
              {:label "Battery Storage" :icon "🔋" :key :battery_storage
               :min (:min feature)
               :max (:max feature)
               :step 50 :unit "MW"}
              form-state])

           (when-let [feature (first (filter #(= (:name %) "other") zone-features))] 
             [energy-slider
              {:label "Other" :icon "❓" :key :other
               :min (:min feature)
               :max (:max feature)
               :value (:median feature)
               :step 50 :unit "MW"}
              form-state])]

          [:h5.section-title "📊 Load & Trade"]

          [:div.slider-grid 
           (when-let [feature (first (filter #(= (:name %) "total") zone-features))] 
             [energy-slider
              {:label "Total Generation" :icon "⚡" :key :total
               :min (:min feature)
               :max (:max feature)
               :value (:median feature)
               :step 50 :unit "MW"}
              form-state])

           (when-let [feature (first (filter #(= (:name %) "load") zone-features))] 
             [energy-slider
              {:label "Load" :icon "📈" :key :load
               :min (:min feature)
               :max (:max feature)
               :value (:median feature)
               :step 50 :unit "MW"}
              form-state])]

          [:div.slider-grid 
           (when-let [feature (first (filter #(= (:name %) "import") zone-features))] 
             [energy-slider
              {:label "Import" :icon "📥" :key :import_
               :min (:min feature)
               :max (:max feature)
               :value (:median feature)
               :step 50 :unit "MW"}
              form-state])

           (when-let [feature (first (filter #(= (:name %) "export") zone-features))] 
             [energy-slider
              {:label "Export" :icon "📤" :key :export
               :min (:min feature)
               :max (:max feature)
               :step 50 :unit "MW"}
              form-state])]

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

