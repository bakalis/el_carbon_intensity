(ns components.header
  (:require [state.state :refer [app-state]]))

(defn header []
  (let [region-id     "SE" 
        selected-hour (:selected-hour @app-state)
        selected-date (:selected-date @app-state)
        intensity-type (name (:intensity-type @app-state))
        intensities-by-datetime (:carbon-intensities @app-state)
        entries (get-in intensities-by-datetime [region-id intensity-type])
        selected-datetime (str selected-date "T" (when (< selected-hour 10) "0") selected-hour ":00:00")
        matching-entries (filter #(= (get % "date_time") selected-datetime) entries)
        entry (when (seq matching-entries)
                (apply min-key #(get % "hours_before_forecast") matching-entries))
        actual_intensity (get entry "actual_intensity")]
    [:nav.bg-white.shadow-sm.border-b.border-slate-200
     [:div.max-w-7xl.mx-auto.px-4.sm:px-6.lg:px-8
      [:div.flex.items-center.justify-between.h-16
       [:div.flex.items-center.space-x-3
        [:div.w-10.h-10.bg-gradient-to-br.from-indigo-500.to-indigo-800.rounded-lg.flex.items-center.justify-center
         [:svg.w-6.h-6.text-white {:fill "currentColor" :viewBox "0 0 20 20"}
          [:path {:d "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}]]]
        [:div
         [:h1.text-xl.font-semibold.text-slate-900 "Carbon Intensity Monitoring"]
         [:p.text-sm.text-slate-500 "Real-time energy insights for Sweden"]]]
       [:div.flex.items-center.space-x-2
        [:span.px-4.py-2.text-base.font-semibold.rounded-lg
         {:class (if (some? actual_intensity)
                   "bg-green-100 text-green-700"
                   "bg-amber-100 text-amber-700")}
         (if (some? actual_intensity) "Live Data" "Predicted Data")]]]]]))
