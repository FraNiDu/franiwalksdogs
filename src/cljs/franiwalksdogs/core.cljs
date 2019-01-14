(ns franiwalksdogs.core
  (:require [reagent.core :as r]))


(defn hero-unit-drawing []
  [:div.text-center>img.img-responseive.img-fluid
   {:src "/images/frani.jpg"
    :style {:display "inline"}}])

(def ENTER-KEY-CODE 13)

(defn layout []
  (fn []
    [:div.container {:style {:text-align :justify}}
     [:div.row>div.col-12 [hero-unit-drawing]]]))

(defn footer []
  [:div.container>div.row>div.col-12
   {:style {:text-align :right}}
   [:p "By Frani_Du"]])

;; -------------------------
;; Initialize app

(defn mount-components []
  (r/render [#'layout]
    (.getElementById js/document "app"))
  (r/render [#'footer]
    (.getElementById js/document "footer")))

(defn init! []
  (mount-components))
