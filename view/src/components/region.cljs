(ns components.region
  (:require [state.state :refer [app-state set-region-mode!]]))

(defn regions-selector []
  (let [{:keys [region-mode]} @app-state]
    [:div
        [:h3.text-sm.font-semibold.text-slate-700.mb-3 "Region Mode"]
        [:div.space-y-2
         [:label.flex.items-center.space-x-2.cursor-pointer.group.p-2.rounded-lg.hover:bg-slate-50.transition-colors
          [:button.px-4.py-2.text-sm.font-medium.rounded-md.transition-all.duration-200
           {:class (if (= region-mode :full)
                     "bg-white text-indigo-700 shadow-sm"
                     "text-slate-600 hover:text-slate-900")
            :on-click (fn [_](set-region-mode! :full))}
           [:div.flex.items-center.space-x-2
            [:svg.w-4.h-4 {:fill "currentColor" :viewBox "0 0 20 20"}
             [:path {:d "M10 20a10 10 0 100-20 10 10 0 000 20zm0-2a8 8 0 110-16 8 8 0 010 16z"}]]
            [:span "Full Sweden"]]]]
         [:label.flex.items-center.space-x-2.cursor-pointer.group.p-2.rounded-lg.hover:bg-slate-50.transition-colors
          [:button.px-4.py-2.text-sm.font-medium.rounded-md.transition-all.duration-200
           {:class (if (= region-mode :zones)
                     "bg-white text-indigo-700 shadow-sm"
                     "text-slate-600 hover:text-slate-900")
            :on-click (fn [_](set-region-mode! :zones))}
           [:div.flex.items-center.space-x-2
            [:svg.w-4.h-4 {:fill "currentColor" :viewBox "0 0 20 20"}
             [:path {:d "M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"}]]
            [:span "Regional Zones"]]]]]]))
