(ns franiwalksdogs.captcha
  (:require 
    [reagent.core :as r]))

(def site-key "6Lfm_n0UAAAAAAs3jz7FKPGK2KkZbe8QV7BgJrBf")
(def grecaptcha (js* "window.grecaptcha"))

(defn- on-mount [captcha-id fields errors]
  (fn [div]
    (reset! captcha-id
            (.render grecaptcha 
                     (-> div r/dom-node .-firstChild)
                     (clj->js {:sitekey site-key
                               :expired-callback #(swap! fields dissoc :captcha)
                               :callback #(do (swap! errors dissoc :captcha)
                                              (swap! fields assoc :captcha %))})))))

(defn on-update [captcha-id errors]
  (fn [this old-argv]
    (when (and @captcha-id (:captcha @errors))
      (.reset js/grecaptcha @captcha-id))))

(defn- html [errors] 
  (fn []
    [:div.form-group 
     [:div] 
     ]))

(defn- html-min-captcha [errors] 
  (fn []
    [:div
     [:div] 
     ]))

(defn captcha [fields errors]
  (let [captcha-id (atom nil)]
    (r/create-class {:render (html errors)
                     :component-did-update (on-update captcha-id errors)
                     :component-did-mount (on-mount captcha-id fields errors)})))

(defn min-captcha [fields errors]
  (let [captcha-id (atom nil)]
    (r/create-class {:render (html-min-captcha errors)
                     :component-did-update (on-update captcha-id errors)
                     :component-did-mount (on-mount captcha-id fields errors)})))
