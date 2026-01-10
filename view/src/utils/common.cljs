(ns utils.common)

(defn create-default-form-data [zone-id zone-features]
  (let [features-map (into {} (map (fn [f] [(:name f) f]) zone-features))
        get-median (fn [feature-name] 
                     (get-in features-map [feature-name :median] 0.0))]
    {:date_time (-> (js/Date.) .toISOString (.slice 0 16))
     :zone_id zone-id
     :coal (get-median "coal")
     :oil (get-median "oil")
     :gas (get-median "gas")
     :solar (get-median "solar")
     :wind (get-median "wind")
     :hydro (get-median "hydro")
     :hydro_storage (get-median "hydro_storage")
     :geothermal (get-median "geothermal")
     :biomass (get-median "biomass")
     :nuclear (get-median "nuclear")
     :battery_storage (get-median "battery_storage")
     :other (get-median "other")
     :total (get-median "total")
     :load (get-median "load")
     :import_ (get-median "import")
     :export (get-median "export")}))

(defn intensity->color [ci]
  (cond
    (nil? ci)  "#cccccc"

    (< ci 30)  "#1e8449"
    (< ci 60)  "#27ae60"
    (< ci 90)  "#58d68d"
    (< ci 120) "#a9dfbf"

    (< ci 160) "#f9e79f"
    (< ci 200) "#f4d03f"

    (< ci 240) "#f5b041"
    (< ci 300) "#eb984e"

    (< ci 360) "#e74c3c"
    (< ci 420) "#cb4335"
    :else      "#7b241c"))

