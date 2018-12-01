(ns franiwalksdogs.email
  (:require [selmer.parser :refer [render-file]]
            [franiwalksdogs.config :refer [env]]
            [clj-http.client :as client]))

(defn mailgun-key []
  (env :mailgun-key ""))

(defonce ^:private mailgun-domain "mg.felicesgallinas.cl")
(defonce ^:private mailgun-url (format "https://api.mailgun.net/v3/%s/messages" mailgun-domain))

(defn submit [to subject html]
  (when-not (:testing env false)
    (client/post mailgun-url {:basic-auth ["api" (mailgun-key)]
                              :form-params {:from "Felices Gallinas <no-reply@felicesgallinas.cl>"
                                            :to to
                                            :subject subject
                                            :html html}})))


