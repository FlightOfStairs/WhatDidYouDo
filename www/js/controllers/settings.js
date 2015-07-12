angular.module('SettingsCtrl', []).controller('SettingsCtrl', function($scope, $localStorage) {
    $scope.options = {
        hours: _.range(0, 24),
        days: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
    };

    $scope.$storage = $localStorage;
});
