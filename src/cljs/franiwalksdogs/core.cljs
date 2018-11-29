(ns franiwalksdogs.core
  (:require [baking-soda.core :as b]
            [reagent.core :as r]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [franiwalksdogs.ajax :as ajax]
            [ajax.core :refer [GET POST]]
            [secretary.core :as secretary :include-macros true])
  (:import goog.History))

(defonce session (r/atom {:page :home}))

(def features ["Dog Walker" 
               "Pricing + Services" 
               "Contact"])

(defn nav-link [uri title page]
  [b/NavItem
   [b/NavLink
    {:href   uri
     :active (when (= page (:page @session)) "active")}
    title]])

(defn navbar []
  [:nav.navbar.navbar-expand-lg.navbar-light.bg-light 
   {:style {:position :fixed :background-color "#F78306"}}
   [:a.navbar-brand {:href "#"} "Frani walks dogs"]
   [:button.navbar-toggler {:type :button
                            :data-toggle :collapse
                            :data-target "#navbarNav"
                            :aria-controls "navbarNav"
                            :aria-expanded false}
    [:span.navbar-toggler-icon]]
   [:div#navbarNav.collapse.navbar-collapse 
    {:style {:text-align :right}}
    [:ul.navbar-nav {:style { :float :right}}
     (for [feature features]
       ^{:key feature}
       [:li.nav-item>a.nav-link 
        {:href (str "#" feature)} 
        feature])]]])

(defn home-page []
  [:div.container
   "hola daniel"
   (when-let [docs (:docs @session)]
     [:div.row>div.col-sm-12
      [:div {:dangerouslySetInnerHTML
             {:__html (md->html docs)}}]])])

(def pages 
  {:home #'home-page})

(defn page []
  [(pages (:page @session))])

;; -------------------------
;; Routes

;; (secretary/set-config! :prefix "#")
;; 
;; (secretary/defroute "/" []
;;   (swap! session assoc :page :home))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          HistoryEventType/NAVIGATE
          (fn [event]
            (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(swap! session assoc :docs %)}))

(defn mount-components []
  (r/render [#'navbar] (.getElementById js/document "navbar"))
  #_(r/render [#'page] (.getElementById js/document "app")))

(defn init! []
  ;; (ajax/load-interceptors!)
  ;; (fetch-docs!)
  ;; (hook-browser-navigation!)
  (mount-components))
