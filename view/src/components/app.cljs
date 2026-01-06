(ns components.app
  (:require [reagent.core :as r]
            [components.map :refer [map-component]]
            [state.state :refer [app-state fetch-all-carbon-intensities! fetch-raw-features!]]
            [components.region :refer [regions-selector]]
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
         [:div.w-10.h-10.bg-gradient-to-br.from-emerald-500.to-teal-600.rounded-lg.flex.items-center.justify-center
          [:svg.w-6.h-6.text-white {:fill "currentColor" :viewBox "0 0 20 20"}
           [:path {:d "M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"}]]]
         [:div
          [:h1.text-xl.font-semibold.text-slate-900 "Carbon Intensity Monitor"]
          [:p.text-sm.text-slate-500 "Real-time energy insights for Sweden"]]]
        [:div.flex.items-center.space-x-2
         [:span.px-3.py-1.bg-emerald-100.text-emerald-700.text-xs.font-medium.rounded-full
          "Live Data"]]]]]
     
     ;; Main Content
     [:main.max-w-7xl.mx-auto.px-4.sm:px-6.lg:px-8.py-6
      ;; Controls Section
      [:div.bg-white.rounded-xl.shadow-sm.border.border-slate-200.p-4.mb-6
       [:div.flex.items-center.justify-between.mb-3
        [:h2.text-lg.font-semibold.text-slate-900 "Region Selection"]
        [:span.text-xs.text-slate-500 "Select regions to view"]]
       (regions-selector)]

      ;; Map Section
      (if (:loading? @app-state)
        [:div.bg-white.rounded-xl.shadow-sm.border.border-slate-200.p-12.flex.flex-col.items-center.justify-center
         [:div.animate-spin.rounded-full.h-12.w-12.border-b-2.border-emerald-600.mb-4]
         [:p.text-slate-600 "Loading data..."]]
        [:div.bg-white.rounded-xl.shadow-sm.border.border-slate-200.overflow-hidden
         (map-component)])]

     (modal)]))
