(ns components.app
  (:require [reagent.core :as r]
            [components.sidebar :refer [collapsible-sidebar]]
            [state.state :refer [app-state fetch-all-carbon-intensities! fetch-raw-features!]]
            [components.modal :refer [modal]]))

;; Main app
(defn app []
  (r/with-let [_ (do (swap! app-state (fn [old-state] (assoc old-state :loading? true)))
                     (fetch-raw-features!)
                     (fetch-all-carbon-intensities!)
                     (swap! app-state (fn [old-state] (assoc old-state :loading? false))))]
    [:div.min-h-screen.bg-gradient-to-br.from-slate-50.to-slate-100
     ;; Top Navigation Bar
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
         [:span.px-3.py-1.bg-indigo-100.text-indigo-700.text-xs.font-medium.rounded-full
          "Live Data"]]]]]

     (collapsible-sidebar)

     (modal)]))
