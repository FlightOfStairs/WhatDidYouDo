angular.module('setup', []).run(["$localStorage", function($localStorage) {
    if (! $localStorage.initialized) {
        $localStorage.log = {};

        $localStorage.settings = {
            hours: {
                start: 10,
                end: 18
            },
            days: {
                monday: true,
                tuesday: true,
                wednesday: true,
                thursday: true,
                friday: true
            }
        };
        $localStorage.initialized = true;
    }
}]);