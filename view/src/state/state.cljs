(ns state.state
  (:require [reagent.core :as r]
            [clojure.string :as str]
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
                            :sidebar-open? false
                            :selected-date nil
                            :selected-hour nil
                            :loading? true
                            :raw-features nil
                            :carbon-intensities nil
                            :modal {:open false
                                    :feature nil
                                    :carbon-data nil
                                    :loading false
                                    :error nil
                                    :active-tab :hindcast}}))


;; API configuration
(def api-base-url "https://bakalis-el-carbon-intensity-backend.hf.space")
; (def api-base-url "http://localhost:8000")

(defn fetch-raw-features! []
  (-> (js/fetch (str api-base-url "/raw-features"))
      (.then (fn [response]
               (if (.-ok response)
                 ;; parse JSON first, then assoc into the atom
                 (.then (.json response)
                        (fn [data]
                          (swap! app-state assoc :raw-features (js->clj data))))
                 (throw (js/Error. (str "HTTP error: " (.-status response)))))))
      (.catch (fn [err]
                (js/console.error "Error fetching raw features:" err)))))

(defn fetch-all-carbon-intensities! []
  (-> (js/fetch (str api-base-url "/all-carbon-intensities"))
      (.then (fn [response]
               (if (.-ok response)
                 (.then (.json response)
                        (fn [data]
                          (let [clj-data (js->clj data)
                                keywordized-data (js->clj data :keywordize-keys true)
                                first-date (-> keywordized-data vals first :date_time (str/split #"T") first)]
                            ;; single swap! updating both keys
                            (swap! app-state
                                   #(assoc % 
                                           :carbon-intensities clj-data
                                           :selected-date first-date)))))
                 (throw (js/Error. (str "HTTP error: " (.-status response)))))))
      (.catch (fn [err]
                (js/console.error "Error fetching carbon intensities:" err)))))

(defn predict-carbon-intensity [form-data]
  (let [payload (clj->js form-data)]
    (-> (js/fetch (str api-base-url "/predict")
                  (clj->js {:method "POST"
                            :headers {"Content-Type" "application/json"}
                            :body (js/JSON.stringify payload)}))
        (.then (fn [response]
                 (if (.-ok response)
                   (.json response)
                   (throw (js/Error. (str "HTTP error: " (.-status response)))))))
        (.then (fn [data]
                 (js->clj data :keywordize-keys true)))
        (.catch (fn [err]
                  (js/console.error "Prediction error:" err)
                  {:error (.-message err)})))))

;; Fetch carbon intensity data for a zone
(defn fetch-carbon-intensity! [zone-name request-date]
  (swap! app-state
         (fn [s]
           (-> s
               (assoc-in [:modal :loading] true)
               (assoc-in [:modal :error] nil))))

  (-> (js/fetch (str api-base-url "/carbon-intensity"
                     "?request_date=" request-date
                     "&zone_id=" zone-name))
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

(defn set-active-tab! [tab]
  (swap! app-state assoc-in [:modal :active-tab] tab))

;; Open modal and fetch data for the feature
(defn open-modal! [feature]
  (let [zone-name (get-in feature [:properties :zoneName])
        today (-> (js/Date.) .toISOString (.slice 0 10))] ; Format: YYYY-MM-DD
    (swap! app-state assoc :modal {:open true 
                                   :feature feature
                                   :carbon-data nil
                                   :loading false
                                   :error nil
                                   :active-tab :hindcast})
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

