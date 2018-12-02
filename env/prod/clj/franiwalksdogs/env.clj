(ns franiwalksdogs.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[franiwalksdogs started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[franiwalksdogs has shut down successfully]=-"))
   :middleware identity})
