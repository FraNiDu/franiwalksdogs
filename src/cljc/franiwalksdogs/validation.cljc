(ns franiwalksdogs.validation
  (:require [struct.core :as st]))

(def +struct+ {:name [st/required st/string]
               :email [st/required st/string st/email]
               :message [st/required st/string]
               :captcha [st/required]})

(defn get-errors? [payload]
  (first (st/validate payload +struct+)))

