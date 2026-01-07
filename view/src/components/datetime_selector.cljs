(ns components.datetime-selector
  (:require [state.state :refer [app-state fetch-day-all-carbon-intensities!]]
            [utils.datetime :refer [today-ymd yesterday-ymd week-ago-ymd]]))

(defn datetime-selector []
  (let [{:keys [selected-date selected-hour]} @app-state
        format-hour (fn [hour] (str (when (< hour 10) "0") hour ":00"))
        prev-hour! #(swap! app-state update :selected-hour 
                           (fn [h] (if (> h 0) (dec h) 23)))
        next-hour! #(swap! app-state update :selected-hour 
                           (fn [h] (if (< h 23) (inc h) 0)))]
    [:div
     [:div
      [:div.flex.items-center.space-x-2.mb-3
       [:svg.w-4.h-4.text-indigo-600 {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"}
        [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2"
                :d "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}]]
       [:h3.text-sm.font-semibold.text-slate-700 "Date"]]

      [:input.w-full.px-3.py-2.text-sm.border.border-slate-300.rounded-lg.focus:ring-2.focus:ring-indigo-500.focus:border-indigo-500.mb-3
       {:type "date"
        :value (or selected-date "2024-01-15")
        :on-change #(let [new-date (-> % .-target .-value)] (when-not (= selected-date new-date)
                                                              ((swap! app-state assoc :selected-date new-date)
                                                               (fetch-day-all-carbon-intensities! new-date))))}]

      [:div.flex.flex-wrap.gap-2
       [:button.px-3.py-1.5.text-xs.font-medium.text-slate-600.bg-slate-50.hover:bg-indigo-50.hover:text-indigo-700.rounded-md.transition-colors
        {:on-click #(let [new-date (today-ymd)] (when-not (= selected-date new-date)
                                                  ((swap! app-state assoc :selected-date new-date)
                                                   (fetch-day-all-carbon-intensities! new-date))))}
        "Today"]
       [:button.px-3.py-1.5.text-xs.font-medium.text-slate-600.bg-slate-50.hover:bg-indigo-50.hover:text-indigo-700.rounded-md.transition-colors
        {:on-click #(let [new-date (yesterday-ymd)] (when-not (= selected-date new-date)
                                                      ((swap! app-state assoc :selected-date new-date)
                                                       (fetch-day-all-carbon-intensities! new-date))))}
        "Yesterday"]
       [:button.px-3.py-1.5.text-xs.font-medium.text-slate-600.bg-slate-50.hover:bg-indigo-50.hover:text-indigo-700.rounded-md.transition-colors
        {:on-click #(let [new-date (week-ago-ymd)] (when-not (= selected-date new-date)
                                                     ((swap! app-state assoc :selected-date new-date)
                                                      (fetch-day-all-carbon-intensities! new-date))))}
        "Last Week"]]]

     ;; Time Selection
     [:div.mt-5
      [:div.flex.items-center.justify-between.mb-3.mt-5
       [:div.flex.items-center.space-x-2
        [:svg.w-4.h-4.text-indigo-600 {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"}
         [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2"
                 :d "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"}]]
        [:h3.text-sm.font-semibold.text-slate-700 "Time"]]
       [:span.text-sm.font-semibold.text-indigo-600
        (format-hour (or selected-hour 12))]]

      ;; Hour Controls
      [:div.flex.items-center.space-x-2.mb-3
       [:button.p-2.text-slate-600.hover:text-indigo-600.hover:bg-indigo-50.rounded-lg.transition-colors.flex-shrink-0
        {:on-click prev-hour!}
        [:svg.w-4.h-4 {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"}
         [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2" :d "M15 19l-7-7 7-7"}]]]

       [:input.flex-1.h-2.bg-slate-200.rounded-lg.appearance-none.cursor-pointer
        {:type "range"
         :min 0
         :max 23
         :value (or selected-hour 12)
         :on-change #(swap! app-state assoc :selected-hour (js/parseInt (-> % .-target .-value)))}]

       [:button.p-2.text-slate-600.hover:text-indigo-600.hover:bg-indigo-50.rounded-lg.transition-colors.flex-shrink-0
        {:on-click next-hour!}
        [:svg.w-4.h-4 {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"}
         [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2" :d "M9 5l7 7-7 7"}]]]]

      ;; Hour Grid
      [:div.grid.grid-cols-6.gap-1.5
       (for [hour (range 24)]
         ^{:key hour}
         [:button.px-1.5.py-2.text-xs.font-medium.rounded.transition-all
          {:class (if (= (or selected-hour 12) hour)
                    "bg-indigo-600 text-white shadow-sm scale-105"
                    "bg-slate-50 text-slate-600 hover:bg-slate-100")
           :on-click #(swap! app-state assoc :selected-hour hour)}
          (str (when (< hour 10) "0") hour)])]]

     ;; Summary
     [:div.p-3.bg-gradient-to-br.from-indigo-50.to-blue-50.rounded-lg.border.border-indigo-200
      [:p.text-xs.font-medium.text-slate-600.mb-1 "Currently Viewing"]
      [:p.text-sm.font-semibold.text-slate-900 (or selected-date "2024-01-15")]
      [:p.text-sm.font-semibold.text-indigo-600 (format-hour (or selected-hour 12))]]]))
