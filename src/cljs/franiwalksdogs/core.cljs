(ns franiwalksdogs.core
  (:require [reagent.core :as r]
            [franiwalksdogs.ajax :as ajax]
            [franiwalksdogs.captcha :as captcha]
            [ajax.core :refer [GET POST]])
  (:import goog.History))

(def fields (r/atom {}))
(def errors (r/atom {}))

(defn dog-walker []
  [:div.lead
   [:p "It all started when my friend at CrossFit needed a dog walker.
       I was up for the task, I’m a dog owner myself, 
       and I love sharing my time with doggies"]
   [:p "A few days went by until I realized this is the best job I could ever have, I love watching a happy dog’s smile after a nice walk."]
   [:p "From that moment I have dedicated myself to walking dogs and I " [:strong "love"] " it."]
   [:p "I’ve come to known them, and I understand some will need to walk alone out of nervousness or aggressive behaviors. While others can simply get out on packs (4) because they also love to share and have no problems about it."]])

(defn table []
  [:table.table.table-bordered
   {:style {:position :relative :top "20px"}}
   [:caption "*If you need any other services like: Bathing your Dog, two visits in a day, or petsitting in my home we can talk about that too."]
   [:thead
    [:tr
     [:th "Services"]
     [:th "Prices"]]]
   [:tbody
    [:tr
     [:td "Friendly Dog (walked in groups of 4)"]
     [:td "USD $20.00"]]
    [:tr
     [:td "Aggressive Dog (walked alone)"]
     [:td "USD $60.00"]]]])

(defn pricing []
  [:div.lead
   [:p "My services include picking up/bringing back your furry child, walking out with him/her for an hour, I’ll sent you pictures, and if I notice anything out of the ordinary I’ll let you know immediately."]
   [:p "My neighborhoods are: Rinchmond District, Laurel Heights, Presidio Heights, Cow Hollow and Haight-Ashbury."]
   [:p "I like to know my kids (and their parents) before taking them out, so go ahead an schedule an initial interview"]])


(def features [{:id :dog-walker 
                :pull-class "float-right"
                :image "/images/frani.jpg"
                :element dog-walker
                :text "Dog Walker"}
                {:id :pricing+services 
                 :pull-class "float-left"
                 :image "/images/pricing.jpg"
                 :element pricing
                 :text "Pricing + Services"}
                ])

(defn navbar []
  [:nav.navbar.navbar-expand-lg.navbar-light
   {:style {:background-color "#F78306"}}
   [:a.navbar-brand {:href "#"} "Frani walks dogs"]
   [:button.navbar-toggler {:type :button
                            :data-toggle :collapse
                            :data-target "#navbarNav"
                            :aria-controls "navbarNav"
                            :aria-expanded false}
    [:span.navbar-toggler-icon]]
   [:div#navbarNav.collapse.navbar-collapse 
    {:style {:text-align :right}}
    [:ul.navbar-nav.mr-auto #_{:style { :position :absolute :right :2em}}
     (for [{:keys [id text]} features]
       ^{:key id}
       [:li.nav-item>a.nav-link {:href (str "#" (name id))} text])
     [:li.nav-item>a.nav-link {:href "#contact"} "Contact"]]]])

(defn hero-unit []
  [:div.text-center>img.img-responseive.img-fluid 
   {:src "/images/frani_dog_walker.jpg"
    :style {:padding "60px"
            :display "inline"}}])

(defn feature-element [feature]
  (let [{:keys [id text element pull-class image]} feature 
        css-class (str "redondo img-circle img-fluid " pull-class)]
    [:div.row>div.col-12
     [:section {:id id}
      [:img {:class css-class :src image}]
      [:h2 text]
      [element]]]))

(defn contact []
  [:div
   [:div.row>div.col-12
    [:h2 "Contact"]]
   [:div.row
    [:div.col-6
     [:form
      [:div.form-group
       [:label.col-form-label {:for :name-input} "Name"]
       [:input#name-input.form-control {:type :text :placeholder "Name"}] ]
      [:div.form-group
       [:label.col-form-label {:for :email-input} "Email"]
       [:input#email-input.form-control {:type :email :placeholder "Email"}]]
      [:div.form-group
       [:label.col-form-label {:for :message} "Message"]
       [:textarea#message.form-control {:rows 3
                                        :placeholder "Message"}]]
      [:div.form-group
       [captcha/min-captcha fields errors]]
      [:button.btn.btn-primary {:type :submit
                                :style {:float :right}} "Send"]]]

    [:div.col-6
     [:img {:class "redondo img-responsive img-fluid" 
            :src "/images/contactme.jpg"}]]]] )

(defn layout []
  [:div.container 
   [:div.row>div.col-12 [hero-unit]]
   (for [{:keys [id] :as feature} features]
     ^{:key id} 
     [feature-element feature])
   [:div.row>div.col-12 [table]]
   [:div.row>div.col-12 [contact]]
   [:hr]
   
   ])


(defn footer []
  [:div.container>div.row>div.col-12
   {:style {:text-align :right}}
   [:p "By Frani_Du"]])

;; -------------------------
;; Initialize app

(defn mount-components []
  (r/render [#'navbar] 
            (.getElementById js/document "navbar"))
  (r/render [#'layout] 
            (.getElementById js/document "app"))
  (r/render [#'footer] 
            (.getElementById js/document "footer")))

(defn init! []
  (ajax/load-interceptors!)
  (mount-components))
