(ns franiwalksdogs.routes.home
  (:require [franiwalksdogs.layout :as layout]
            [franiwalksdogs.validation :refer [get-errors?]]
            [franiwalksdogs.email :as email]
            [franiwalksdogs.db.core :as db]
            [selmer.parser :as selmer]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))

(defn do-contact [payload]
  (let [html (selmer/render-file "mails/contact.html" payload)]
    (email/submit 
      "franiwalksdogs@gmail.com" 
      "Nuevo contacto en franiwalksdogs.com" 
      html)))

(defroutes home-routes
  (GET "/" [] (home-page))
  (POST "/contact" [name email message captcha :as request]
        (let [payload {:name name
                       :email email
                       :message message
                       :captcha captcha}]
          (if-let [errors (get-errors? payload)]
            (response/bad-request errors)
						(do
              (do-contact payload)
							(response/ok {:status :ok}))))))


