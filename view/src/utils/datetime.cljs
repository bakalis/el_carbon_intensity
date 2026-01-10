(ns utils.datetime)

(defn date->ymd [d]
  (let [yyyy (.getFullYear d)
        mm   (.padStart (str (inc (.getMonth d))) 2 "0")
        dd   (.padStart (str (.getDate d)) 2 "0")]
    (str yyyy "-" mm "-" dd)))

(defn today-ymd []
  (date->ymd (js/Date.)))

(defn yesterday-ymd []
  (let [d (js/Date.)]
    (.setDate d (- (.getDate d) 1))
    (date->ymd d)))

(defn tomorrow-ymd []
  (let [d (js/Date.)]
    (.setDate d (+ (.getDate d) 1))
    (date->ymd d)))

(defn two-days-ahead-ymd []
  (let [d (js/Date.)]
    (.setDate d (+ (.getDate d) 2))
    (date->ymd d)))

(defn week-ago-ymd []
  (let [d (js/Date.)]
    (.setDate d (- (.getDate d) 7))
    (date->ymd d)))

(defn hour-from-iso-int [dt]
  (js/parseInt (subs dt 11 13)))

(defn index-intensities-by-hour [intensities]
  (into {}
        (for [[zone intensity-types] intensities]
          [zone
           (into {}
                 (for [[intensity-type entries] intensity-types]
                   [intensity-type
                    (into {}
                          (map (fn [[hour entries-for-hour]]
                                 [hour (apply min-key #(get % "hours_before_forecast") entries-for-hour)])
                               (group-by #(hour-from-iso-int (get % "date_time")) entries)))]))])))

(defn get-available-dates [data]
  (when data
    (->> data
         (map :date_time)
         (map #(.slice % 0 10))
         distinct
         sort
         vec)))

(defn filter-data-by-date [data date]
  (when data
    (filter #(= (.slice (:date_time %) 0 10) date) data)))

