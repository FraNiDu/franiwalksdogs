(ns franiwalksdogs.routes.home
  (:require [franiwalksdogs.layout :as layout]
            [franiwalksdogs.db.core :as db]
            [compojure.core :refer [defroutes GET]]
            [ring.util.http-response :as response]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))

(defroutes home-routes
  (GET "/" [] (home-page)))

