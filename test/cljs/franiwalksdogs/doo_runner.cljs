(ns franiwalksdogs.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [franiwalksdogs.core-test]))

(doo-tests 'franiwalksdogs.core-test)

