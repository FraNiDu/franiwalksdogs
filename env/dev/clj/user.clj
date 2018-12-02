(ns user
  (:require [franiwalksdogs.config :refer [env]]
            [clojure.spec.alpha :as s]
            [expound.alpha :as expound]
            [mount.core :as mount]
            [franiwalksdogs.figwheel :refer [start-fw stop-fw cljs]]
            [franiwalksdogs.core :refer [start-app]]
            [franiwalksdogs.db.core]
            [conman.core :as conman]
            [luminus-migrations.core :as migrations]))

(alter-var-root #'s/*explain-out* (constantly expound/printer))

(defn start []
  (mount/start-without #'franiwalksdogs.core/repl-server))

(defn stop []
  (mount/stop-except #'franiwalksdogs.core/repl-server))

(defn restart []
  (stop)
  (start))

(defn restart-db []
  (mount/stop #'franiwalksdogs.db.core/*db*)
  (mount/start #'franiwalksdogs.db.core/*db*)
  (binding [*ns* 'franiwalksdogs.db.core]
    (conman/bind-connection franiwalksdogs.db.core/*db* "sql/queries.sql")))

(defn reset-db []
  (migrations/migrate ["reset"] (select-keys env [:database-url])))

(defn migrate []
  (migrations/migrate ["migrate"] (select-keys env [:database-url])))

(defn rollback []
  (migrations/migrate ["rollback"] (select-keys env [:database-url])))

(defn create-migration [name]
  (migrations/create name (select-keys env [:database-url])))


