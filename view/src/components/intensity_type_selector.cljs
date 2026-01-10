(ns components.intensity-type-selector
  (:require [state.state :refer [app-state]]))

(defn intensity_selector []
  (let [{:keys [intensity-type]} @app-state]
    [:div
     [:h3.text-sm.font-semibold.text-slate-700.mb-3 "Carbon Intensity Type"]
     [:div.space-y-2
      [:label.flex.items-center.space-x-2.cursor-pointer.group.p-2.rounded-lg.hover:bg-slate-50.transition-colors
       [:button.px-4.py-2.text-sm.font-medium.rounded-md.transition-all.duration-200
        {:class (if (= intensity-type :direct)
                  "bg-white text-indigo-700 shadow-sm"
                  "text-slate-600 hover:text-slate-900")
         :on-click #(swap! app-state assoc :intensity-type :direct)}
        [:div.flex.items-center.space-x-2
         [:svg.w-4.h-4 {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"}
          [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2"
                  :d "M13 10V3L4 14h7v7l9-11h-7z"}]]
         [:span "Direct Emissions"]]]]
      
      [:label.flex.items-center.space-x-2.cursor-pointer.group.p-2.rounded-lg.hover:bg-slate-50.transition-colors
       [:button.px-4.py-2.text-sm.font-medium.rounded-md.transition-all.duration-200
        {:class (if (= intensity-type :lifecycle)
                  "bg-white text-indigo-700 shadow-sm"
                  "text-slate-600 hover:text-slate-900")
         :on-click #(swap! app-state assoc :intensity-type :lifecycle)}
        [:div.flex.items-center.space-x-2
         [:svg.w-4.h-4 {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"}
          [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2"
                  :d "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"}]]
         [:span "Lifecycle Emissions"]]]]]]))
