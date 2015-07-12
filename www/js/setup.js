angular.module('setup', []).run(["$localStorage", function($localStorage) {
    if (!$localStorage.log) {
        $localStorage.log = {};
    }

    if (! $localStorage.settings) {
        $localStorage.settings = {
            hours: {
                start: 10,
                end: 18,
                format: "24"
            },
            days: {
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true
            }
        };
    }
}]);