(ns components.app
  (:require [reagent.core :as r]
            [components.sidebar :refer [collapsible-sidebar]]
            [components.header :refer [header]]
            [state.state :refer [fetch-all-carbon-intensities! fetch-raw-features!]]
            [components.modal :refer [modal]]))

(defn app []
  (r/with-let [_ (do (fetch-raw-features!)
                     (fetch-all-carbon-intensities!))]
    [:div.min-h-screen.bg-gradient-to-br.from-slate-50.to-slate-100
     (header) 

     (collapsible-sidebar)

     (modal)]))
