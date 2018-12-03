(ns franiwalksdogs.core
  (:require [reagent.core :as r]
            [franiwalksdogs.ajax :as ajax]
            [franiwalksdogs.captcha :as captcha]
            [franiwalksdogs.validation :refer [get-errors? get-error?]]
            [ajax.core :refer [GET POST]]))

(def captcha-loaded? (r/atom false))

(defn dog-walker []
  [:div.lead
   [:p "It all started when my friend at CrossFit needed a dog walker.
       I was up for the task, I’m a dog owner myself,
       and I love sharing my time with doggies."]
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
     [:td "Friendly doggies (Dog Walked in groups up to four dogs, for 30 minutes.)"]
     [:td "USD $25.00"]]
    [:tr
     [:td "Walked in groups up to four dogs, for 60 minutes."]
     [:td "USD $35.00"]]
     [:tr
     [:td "Walked alone for 60 minutes."]
     [:td "USD $40.00"]]
     [:tr
      [:td "Aggressive Dog (walked alone)"]
      [:td "USD $60.00"]]]])

(defn pricing []
  [:div.lead
   [:p "My services include picking up/bringing back your furry child, walking out with him/her for an thirty minutes or one hour, I’ll sent you pictures, and if I notice anything out of the ordinary I’ll let you know immediately."]
   [:p "My neighborhoods are: Richmond District, Laurel Heights, Presidio Heights, Cow Hollow and Haight-Ashbury."]
   [:p "I like to know my kids (and their parents) before taking them out, so go ahead an schedule an initial interview."]])

(def features [{:id :dog-walker
                :pull-class "float-right"
                :image "/images/frani.jpg"
                :element dog-walker
                :text "About Me"}
                {:id :pricing+services
                 :pull-class "float-left"
                 :image "/images/pricing.jpg"
                 :element pricing
                 :text "Pricing + Services"}])

(defn navbar []
  [:nav.navbar.navbar-expand-lg.navbar-light
   {:style {:background-color "#F78306"}}
   [:div.container
    [:a.navbar-brand {:href "#"} "Frani walks dogs"]
    [:button.navbar-toggler {:type :button
                             :data-toggle :collapse
                             :data-target "#navbarNav"
                             :aria-controls "navbarNav"
                             :aria-expanded false}
     [:span.navbar-toggler-icon]]
    [:div#navbarNav.collapse.navbar-collapse
     {:style {:text-align :right}}
     [:ul.navbar-nav.ml-auto #_{:style { :position :absolute :right :2em}}
      (for [{:keys [id text]} features]
        ^{:key id}
        [:li.nav-item>a.nav-link {:href (str "#" (name id))} text])
      [:li.nav-item>a.nav-link {:href "#contact"} "Contact"]]]]])

(defn hero-unit []
  [:div.text-center>img.img-responseive.img-fluid
   {:src "/images/frani_dog_walker.jpg"
    :style {:display "inline"}}])

(defn feature-element-expanded [feature]
  (let [{:keys [id text element pull-class image]} feature
        css-class (str "redondo img-circle img-fluid " pull-class)]
    [:div.col-12.d-none.d-lg-block
     [:section
      [:img {:class css-class :src image}]
      [:h2 text]
      [element]]]))

(defn feature-element-mobile [feature]
  (let [{:keys [id text element image]} feature
        css-class (str "redondo img-circle img-fluid")]
    [:div.d-lg-none
     [:div.col-12 [:h2 text]]
     [:div
      [:div.col-12 [element]]
      [:div.col-12 {:style {:text-align :center}} [:img {:class css-class :src image}]]]]))

(defn feature-element [feature]
  [:div.row.mb-3 {:id (:id feature)}
   [feature-element-expanded feature]
   [feature-element-mobile feature]])

(defn disable-event! [evt]
  (when evt
    (.preventDefault evt)
    (.stopPropagation evt)))

(defn bind
  ([key fields]
   (bind key fields identity))
  ([key fields transform]
   (fn [evt]
     (disable-event! evt)
     (swap! fields assoc key (-> evt .-target .-value transform)))))

(defn error-message [key errors]
  (when-let [err (key @errors)]
    [:div.invalid-feedback {:style {:display :block}}
     (clojure.string/capitalize err)]))

(defn ajax-success-handler [response]
  (js/alert "Thanks for your message, I'll be in contact with you shortly."))

(defn ajax-error-handler [errors]
  (fn [{:keys [status response]}]
    (when (= 400 status)
      (reset! errors response))))

(defn ajax-call [fields errors]
  (POST "/contact"
        {:headers {"Accept" "application/transit+json"}
         :params @fields
         :handler ajax-success-handler
         :error-handler (ajax-error-handler errors)}))

(def ENTER-KEY-CODE 13)

(defn on-enter
  "Retorna un handler para un HTML Form, este handler delega en el handler parametrico
  cuando detecta que la tecla apretada fue ENTER."
  [handler]
  (fn [evt]
    (when (= ENTER-KEY-CODE ( .-charCode evt))
      (handler evt))))

(defn on-submit [fields errors]
  (fn [evt]
    (disable-event! evt)
    (reset! errors {})
    (if-let [new-errors (get-errors? @fields)]
      (reset! errors new-errors)
      (ajax-call fields errors))))

(defn on-blur-validation [key fields errors]
  (fn [evt]
    (disable-event! evt)
    (swap! errors dissoc key)
    (when-let [nerrs (get-error? key @fields)]
      (swap! errors merge nerrs))))

(defn capitalize-words
  "Capitalize every word in a string"
  [s]
  (->> (clojure.string/split (str s) #"\b")
       (map clojure.string/capitalize)
       clojure.string/join))

(defn contact []
  [:div#contact
   [:div.row>div.col-12
    [:h2 "Contact"]]
   [:div.row
    [:div.col-12.col-lg-6
     (let [fields (r/atom {})
           errors (r/atom {})
           handler (on-submit fields errors)]
       [:form {:on-key-press (on-enter handler)
               :on-submit handler}
        [:div.form-group
         [:label.col-form-label {:for :name-input} "Name"]
         [:input#name-input.form-control {:type :text
                                          :auto-complete :off
                                          :on-change (bind :name fields capitalize-words)
                                          :on-blur (on-blur-validation :name fields errors)
                                          :placeholder "Name"}]
         [error-message :name errors] ]
        [:div.form-group
         [:label.col-form-label {:for :email-input} "Email"]
         [:input#email-input.form-control {:type :email
                                           :auto-complete :off
                                           :on-change (bind :email fields)
                                           :on-blur (on-blur-validation :email fields errors)
                                           :placeholder "Email"}]
         [error-message :email errors]]
        [:div.form-group
         [:label.col-form-label {:for :message} "Message"]
         [:textarea#message.form-control {:rows 3
                                          :auto-complete :off
                                          :on-change (bind :message fields)
                                          :on-blur (on-blur-validation :message fields errors)
                                          :placeholder "Message"}]
         [error-message :message errors]]

        (when @captcha-loaded?
          [:div.form-group
           [captcha/min-captcha fields errors]
           [error-message :captcha errors]])

        [:div.form-group.mt-3.pt-3
         [:button.btn.btn-primary.btn-lg {:type :submit
                                          :class "d-none d-lg-block"
                                          :style {:float :right}} "Send"]
         [:button.btn.btn-primary.btn-lg {:type :submit
                                          :class "btn-block d-lg-none"
                                          :style {:float :right}} "Send"]]])]

    [:div.col-6.d-none.d-lg-block
     [:img {:class "redondo img-responsive img-fluid"
            :src "/images/contactme.jpg"}]]]] )

(defn layout []
  (fn []
  [:div.container
   [:div.row>div.col-12 [hero-unit]]
   (for [{:keys [id] :as feature} features]
     ^{:key id}
     [feature-element feature])
   [:div.row.mb-3>div.col-12 [table]]
   [:div.row>div.col-12 [contact]]
   [:hr]]))

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
  (set! (.-captchaLoaded js/window)
        #(reset! captcha-loaded? true))
  (ajax/load-interceptors!)
  (mount-components))
