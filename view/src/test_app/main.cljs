(ns test-app.main
  (:require [reagent.core :as r]
            [reagent.dom.client :as rdomc]
            ["react-leaflet" :refer [MapContainer TileLayer Marker Popup GeoJSON]]
            [data.SE-1 :as SE-1]
            [data.SE-2 :as SE-2]
            [data.SE-3 :as SE-3]
            [data.SE-4 :as SE-4]
            [data.SE :as SE]))

;; App state
(defonce app-state (r/atom {:center [62.3293 18.0686]
                            :zoom 5
                            :region-mode :zones
                            :geojson [SE-1/data 
                                      SE-2/data 
                                      SE-3/data 
                                      SE-4/data]}))

;; Root element for React 19
(defonce root (atom nil))

(defn geojson-style 
  [layer-index]
  (fn [_]
    (let [colors ["#3388ff" "#ff6b6b" "#4ecdc4" "#ffe66d"]]
      (clj->js {:fillColor (get colors layer-index "#3388ff")
                :weight 2
                :opacity 1
                :color "white"
                :dashArray "3"
                :fillOpacity 0.4}))))

;; Function called when a feature is clicked
(defn on-each-feature [feature layer]
  (let [props (.-properties feature)
        popup-content (str "<div>"
                           (reduce-kv (fn [acc k v]
                                        (str acc "<strong>" (name k) ":</strong> " v "<br/>"))
                                      ""
                                      (js->clj props :keywordize-keys true))
                           "</div>")]
    (.bindPopup layer popup-content)))

;; Loading spinner component
(defn loading-spinner []
  [:div.loading
   [:div.spinner]
   [:p "Loading GeoJSON data..."]])

;; Error component
(defn error-message [error]
  [:div.error
   [:h3 "Error Loading Data"]
   [:p error]])

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

(defn regions-selector []
  (let [mode (:region-mode @app-state)]
    [:div.regions-selector
     {:style {:margin "1rem 0"
              :display "flex"
              :align-items "center"
              :justify-content "center"}}

     [:h3 "Regions"]

     [:label
      {:style {:display "block" :cursor "pointer"}}
      [:input
       {:type "radio"
        :name "regions"
        :checked (= mode :full)
        :on-change #(set-region-mode! :full)}]
      " Full Sweden"]

     [:label
      {:style {:display "block" :cursor "pointer"}}
      [:input
       {:type "radio"
        :name "regions"
        :checked (= mode :zones)
        :on-change #(set-region-mode! :zones)}]
      " Zones"]]))

;; Map component
(defn map-component []
  [:div.map-container
   {:style {:display "flex"
            :align-items "center"
            :justify-content "center"}}
   [:> MapContainer 
    {:center (clj->js (:center @app-state))
     :zoom (:zoom @app-state)
     :scrollWheelZoom false
     :doubleClickZoom false
     :touchZoom false
     :boxZoom false
     :keyboard false

     ;; Optional: hide zoom controls
     :zoomControl false
     :style {:height "90vh" :width "80vw"}}
    [:> TileLayer
     {:attribution "&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors"
      :url "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}]

    ;; Render each GeoJSON layer
    (for [[idx geojson] (map-indexed vector (:geojson @app-state))]
      ^{:key (str idx "-" (hash geojson))}  ;; 🔑 force remount
      [:> GeoJSON
       {:data (clj->js geojson)
        :style (geojson-style idx)
        :onEachFeature on-each-feature}])]])

;; Main app
(defn app []
  [:div.app
   [:header
    [:h1 "React-Leaflet ClojureScript App"]
    [:p "Map with multiple GeoJSON layers"]]
   [regions-selector]
   (cond
     (:loading @app-state) [loading-spinner]
     (:error @app-state) [error-message (:error @app-state)]
     :else [map-component])])

;; Initialize app with React 19 createRoot API
(defn mount-root []
  (let [root-el (.getElementById js/document "app")]
    (when-not @root
      (reset! root (rdomc/create-root root-el)))
    (rdomc/render @root [app])))

(defn ^:export init []
  (println "Initializing app...")
  (mount-root))
