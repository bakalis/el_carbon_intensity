(ns state.state
  (:require [reagent.core :as r]
            [data.SE :as SE]
            [data.SE-1 :as SE-1]
            [data.SE-2 :as SE-2]
            [data.SE-3 :as SE-3]
            [data.SE-4 :as SE-4]))

;; App state
(defonce app-state (r/atom {:center [62.3293 18.0686]
                            :zoom 5
                            :region-mode :zones
                            :geojson [SE-1/data 
                                      SE-2/data 
                                      SE-3/data 
                                      SE-4/data]
                            :modal {:open false
                                    :feature nil
                                    :carbon-data nil
                                    :loading false
                                    :error nil}}))

;; API configuration
(def api-base-url "https://elcarbonintensity-bakalis1334-ft6sl0da.leapcell.dev")
; (def api-base-url "http://localhost:8000")

;; Fetch carbon intensity data for a zone
(defn fetch-carbon-intensity! [zone-name request-date]
  (swap! app-state
         (fn [s]
           (-> s
               (assoc-in [:modal :loading] true)
               (assoc-in [:modal :error] nil))))

  (-> (js/fetch (str api-base-url "/carbon-intensity"
                     "/?request_date=" request-date
                     "&zone_name=" zone-name))
      (.then (fn [response]
               (if (.-ok response)
                 (.json response)
                 (throw (js/Error. (str "HTTP error: " (.-status response)))))))
      (.then (fn [data]
               (let [parsed-data (js->clj data :keywordize-keys true)]
                 (swap! app-state
                        (fn [s]
                          (-> s
                              (assoc-in [:modal :carbon-data] parsed-data)
                              (assoc-in [:modal :loading] false))))
                 parsed-data)))
      (.catch (fn [error]
                (js/console.error "Error fetching carbon intensity:" error)
                (swap! app-state
                       (fn [s]
                         (-> s
                             (assoc-in [:modal :error] (.-message error))
                             (assoc-in [:modal :loading] false))))))))

;; Open modal and fetch data for the feature
(defn open-modal! [feature]
  (let [zone-name (get-in feature [:properties :zoneName])
        today (-> (js/Date.) .toISOString (.slice 0 10))] ; Format: YYYY-MM-DD
    (swap! app-state assoc :modal {:open true 
                                    :feature feature
                                    :carbon-data nil
                                    :loading false
                                    :error nil})
    ;; Fetch carbon intensity data when modal opens
    (when zone-name
      (fetch-carbon-intensity! zone-name today))))

;; Close modal
(defn close-modal! []
  (swap! app-state assoc-in [:modal :open] false))


(defn set-region-mode! [mode]
  (swap! app-state
         (fn [state]
           (case mode
             :full
             (-> state
                 (assoc :region-mode :full)
                 (assoc :geojson [SE/data]))

             :zones
             (-> state
                 (assoc :region-mode :zones)
                 (assoc :geojson [SE-1/data 
                                  SE-2/data 
                                  SE-3/data 
                                  SE-4/data]))))))

