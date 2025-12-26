(ns components.modal)

;; Modal component
(defn modal [{open :open
              feature :feature
              close-modal :close-modal}]
  (when open
    [:div.modal-overlay {:on-click close-modal}
     [:div.modal-content {:on-click #(.stopPropagation %)}
      [:div.modal-header
       [:h2 "Region Details"]
       [:button.close-btn {:on-click close-modal} "×"]]
      [:div.modal-body
       (when feature
         [:div
          [:h3 (get-in feature [:properties :name] "Unnamed Region")]
          [:div.properties
           [:h4 "Properties:"]
           [:table
            [:tbody
             (for [[k v] (:properties feature)]
               ^{:key k}
               [:tr
                [:td.property-key (name k)]
                [:td.property-value (str v)]])]]
           [:h4 "Geometry:"]
           [:p [:strong "Type: "] (get-in feature [:geometry :type])]
           [:p [:strong "Coordinates: "] 
            (let [coords (get-in feature [:geometry :coordinates])]
              (str (count (first coords)) " points"))]]])]
      [:div.modal-footer
       [:button.btn-primary {:on-click close-modal} "Close"]]]]))
