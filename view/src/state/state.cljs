(ns state.state
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [data.SE :as SE]
            [data.SE-1 :as SE-1]
            [data.SE-2 :as SE-2]
            [data.SE-3 :as SE-3]
            [data.SE-4 :as SE-4]
            [cljs.core :as c]))

;; App state
(defonce app-state (r/atom {:center [62.3293 18.0686]
                            :zoom 5
                            :region-mode :zones
                            :intensity-type :lifecycle
                            :geojson [SE-1/data 
                                      SE-2/data 
                                      SE-3/data 
                                      SE-4/data]
                            :sidebar-open? false
                            :selected-date nil
                            :selected-hour 12
                            :loading? true
                            :raw-features nil
                            :carbon-intensities nil
                            :modal {:open false
                                    :feature nil
                                    :selected-before-hours nil
                                    :error nil
                                    :active-tab :hindcast}}))


;; API configuration
; (def api-base-url "https://bakalis-el-carbon-intensity-backend.hf.space")
(def api-base-url "http://localhost:7860")

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
                                ;; Navigate through the nested structure to get first date
                                first-date (-> keywordized-data 
                                              vals 
                                              first 
                                              vals 
                                              first 
                                              first 
                                              :date_time 
                                              (str/split #"T") 
                                              first)]
                            (swap! app-state
                                   #(assoc % 
                                           :carbon-intensities clj-data
                                           :selected-date first-date)))))
                 (throw (js/Error. (str "HTTP error: " (.-status response)))))))
      (.catch (fn [err]
                (js/console.error "Error fetching carbon intensities:" err)))))

(defn fetch-day-all-carbon-intensities! [request-date]
  (-> (js/fetch (str api-base-url "/day-all-carbon-intensities"
                     "?request_date=" request-date))
      (.then (fn [response]
               (if (.-ok response)
                 (.then (.json response)
                        (fn [data]
                          (let [clj-data (js->clj data)
                                keywordized-data (js->clj data :keywordize-keys true)
                                ;; Navigate through the nested structure to get first date
                                first-date (-> keywordized-data 
                                              vals 
                                              first 
                                              vals 
                                              first 
                                              first 
                                              :date_time 
                                              (str/split #"T") 
                                              first)]
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

(defn get-min-before-hours! [feature]
  (let [zone-id (get-in feature [:properties :zoneName])
        intensities (:carbon-intensities @app-state)
        intensity-type (name (:intensity-type @app-state))
        carbon-data (get-in intensities [zone-id intensity-type])]
    (when (and carbon-data (seq carbon-data))
      (let [hours-before-values (keep #(get % "hours_before_forecast") carbon-data)]
        (when (seq hours-before-values)
          (apply min hours-before-values))))))

(defn set-active-tab! [tab]
  (swap! app-state assoc-in [:modal :active-tab] tab))

(defn open-modal! [feature]
  (let [selected-before-hours (get-min-before-hours! feature)] 
    (swap! app-state assoc :modal {:open true 
                                   :feature feature
                                   :selected-before-hours selected-before-hours
                                   :active-tab :hindcast})))

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

(defn set-selected-before-hours! [selected-hour]
  (swap! app-state
        (fn [state]
          (assoc-in state [:modal :selected-before-hours] selected-hour))))

(c/comment 
  (-> @app-state 
      (dissoc :geojson)
      (dissoc :raw-features)
      (dissoc :carbon-intensities)) ; nil
  
  (-> (deref state.state/app-state)
      (keys))

  (-> (deref state.state/app-state)
      (:raw-features))
  
  (-> (deref state.state/app-state)
      (:carbon-intensities)))
