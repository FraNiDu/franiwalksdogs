(ns franiwalksdogs.validation
  (:require [struct.core :as st]
            #?@(:clj [[franiwalksdogs.captcha :as captcha]
                      [franiwalksdogs.config :refer [env]]])))

(def valid-captcha?
  {:message "Invalid Captcha, please try again"
   :optional false
   :validate #?(:clj captcha/check-response
                :cljs (constantly true))})

(def +struct+ {:name [st/required st/string [st/min-count 2] [st/max-count 155]]
               :email [st/required st/string st/email [st/min-count 2] [st/max-count 155]]
               :message [st/required st/string [st/min-count 5] [st/max-count 2000]]
               :captcha [st/required 
                         [valid-captcha?]]})

(defn get-errors? [payload]
  (first (st/validate payload +struct+)))

(defn get-error? [key payload]
  (let [+struct+ (select-keys +struct+ [key])]
    (first (st/validate payload +struct+))))


