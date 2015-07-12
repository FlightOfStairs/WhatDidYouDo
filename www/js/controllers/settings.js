angular.module('SettingsCtrl', []).controller('SettingsCtrl', function($scope, $localStorage) {
    $scope.options = {
        hours: _.range(0, 24),
        days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    };

    $scope.$storage = $localStorage;

    if (! $scope.$storage.initialized) {
        $scope.$storage.settings = {
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
        $scope.$storage.initialized = true;
    }
});
