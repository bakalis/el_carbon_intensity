(ns components.sidebar
  (:require [state.state :refer [app-state]]
            [components.region :refer [regions-selector]]
            [components.datetime-selector :refer [datetime-selector]]
            [components.map :refer [map-component]]))

(defn collapsible-sidebar []
  (let [{:keys [sidebar-open? selected-date selected-hour]} @app-state
        format-hour (fn [hour] (str (when (< hour 10) "0") hour ":00"))
        prev-hour! #(swap! app-state update :selected-hour 
                           (fn [h] (if (> h 0) (dec h) 23)))
        next-hour! #(swap! app-state update :selected-hour 
                           (fn [h] (if (< h 23) (inc h) 0)))
        toggle-sidebar! #(swap! app-state update :sidebar-open? not)]

    [:div.flex.h-full
     ;; Sidebar
     [:div.bg-white.border-r.border-slate-200.shadow-lg.transition-all.duration-300.ease-in-out.flex.flex-col
      {:class (if sidebar-open? "w-80" "w-0")
       :style {:overflow "hidden"}}

      ;; Header
      [:div.p-4.border-b.border-slate-200.flex.items-center.justify-between.bg-gradient-to-r.from-indigo-50.to-white
       [:div.flex.items-center.space-x-2
        [:div.w-8.h-8.bg-indigo-600.rounded-lg.flex.items-center.justify-center
         [:svg.w-4.h-4.text-white {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"}
          [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2"
                  :d "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"}]]]
        [:h2.text-lg.font-semibold.text-slate-900 "Controls"]]
       [:button.p-1.text-slate-400.hover:text-slate-600.hover:bg-slate-100.rounded.transition-colors
        {:on-click toggle-sidebar!}
        [:svg.w-5.h-5 {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"}
         [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2" :d "M6 18L18 6M6 6l12 12"}]]]]

      ;; Content
      [:div.flex-1.overflow-y-auto.p-4.space-y-6
       ;; Region Selection
       (regions-selector)

       ;; Date Selection
      (datetime-selector)]]

     ;; Toggle Button (when closed)
     (when-not sidebar-open?
       [:button.absolute.left-0.top-20.bg-white.border.border-slate-200.rounded-r-lg.shadow-lg.p-2.hover:bg-indigo-50.transition-colors.z-10
        {:on-click toggle-sidebar!}
        [:svg.w-5.h-5.text-slate-600 {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"} [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2" :d "M4 6h16M4 12h16M4 18h16"}]]])

     ;; Map Area
     [:div.flex-1.relative
      (map-component)]]))
