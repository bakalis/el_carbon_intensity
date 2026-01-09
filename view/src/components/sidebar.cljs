(ns components.sidebar
  (:require [state.state :refer [app-state]]
            [components.region :refer [regions-selector]]
            [components.datetime-selector :refer [datetime-selector]]
            [components.map :refer [map-component]]))

(defn collapsible-sidebar []
  (let [{:keys [sidebar-open?]} @app-state
        toggle-sidebar! #(swap! app-state update :sidebar-open? not)]
    [:div.flex.h-full.relative
     (when sidebar-open?
       [:div.fixed.inset-0.bg-black.bg-opacity-50.z-40.lg:hidden
        {:on-click toggle-sidebar!}])
     
     [:div.bg-white.shadow-lg.transition-all.duration-300.ease-in-out.flex.flex-col.z-50
      {:class [(if sidebar-open? "translate-x-0" "translate-x-[-100%]")
               ;; Mobile: fixed overlay, Desktop: static sidebar
               "fixed lg:relative"
               "inset-y-0 left-0"
               "w-80 lg:w-80"
               "lg:border-r lg:border-slate-200"
               (when-not sidebar-open? "lg:w-0")]
       :style {:overflow (if sidebar-open? "visible" "hidden")}}
      
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
      
      [:div.flex-1.overflow-y-auto.p-4.space-y-6

       (regions-selector)
       
       (datetime-selector)]]
     
     (when-not sidebar-open?
       [:button.bg-white.border.border-slate-200.shadow-lg.hover:bg-indigo-50.transition-colors.z-30
        {:class ["fixed lg:absolute"
                 "top-4 left-4 lg:left-0 lg:top-20"
                 "rounded-full lg:rounded-r-lg lg:rounded-l-none"
                 "p-3 lg:p-2"]
         :on-click toggle-sidebar!}
        [:svg.w-5.h-5.text-slate-600 {:fill "none" :stroke "currentColor" :viewBox "0 0 24 24"}
         [:path {:stroke-linecap "round" :stroke-linejoin "round" :stroke-width "2" :d "M4 6h16M4 12h16M4 18h16"}]]])
     
     [:div.flex-1.w-full
      {:class (when sidebar-open? "hidden lg:block")}
      (map-component)]]))
