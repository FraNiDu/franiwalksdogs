(ns franiwalksdogs.captcha
  (:require [clojure.data.json :as json]
            [franiwalksdogs.config :refer [env]]
            [clojure.tools.logging :as log]
            [clj-http.client :as client]))

(def verify-endpoint 
  "https://www.google.com/recaptcha/api/siteverify")

(defn secret []
  (env :captcha-private-key ""))

(defn- mk-payload [response]
  {:form-params
   {:secret (secret)
    :response response}})

(defn- endpoint-call [response]
  (log/info (format "(endpoint-call response=\"%s\")" response))
  (let [payload (mk-payload response)]
    (try 
      (log/info (format "(endpoint-call payload=\"%s\")" payload))
      (client/post verify-endpoint payload)
      (catch Exception e
        (log/error (str "While calling captcha's verify " e))
        false))))

(defn- parse-response [response]
  (log/info (format "(parse-response response=\"%s\")" response))
  (if response
    (if (= 200 (:status response))
      (-> response
          :body
          (json/read-str :key-fn keyword)
          :success))))

(defn check-response [response]
  (log/info (format "(check-response response=\"%s\")" response))
  (if (:dev env false)
    true 
    (-> response endpoint-call parse-response))) 
