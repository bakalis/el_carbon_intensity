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

(defn week-ago-ymd []
  (let [d (js/Date.)]
    (.setDate d (- (.getDate d) 7))
    (date->ymd d)))
