(ns franiwalksdogs.routes.home
  (:require [franiwalksdogs.layout :as layout]
            [franiwalksdogs.validation :refer [get-errors?]]
            [franiwalksdogs.db.core :as db]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (POST "/contact" [name email message captcha :as request]
        (let [payload {:name name
                       :email email
                       :message message
                       :captcha captcha}]
          (if-let [errors (get-errors? payload)]
            (response/bad-request errors)
            (response/ok {:status :ok})))))


