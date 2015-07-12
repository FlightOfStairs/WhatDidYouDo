angular.module('SettingsCtrl', []).controller('SettingsCtrl', function($scope, $localStorage) {
    $scope.options = {
        hours: _.range(0, 24),
        days: _.range(0, 7).map(function(i) { return moment().weekday(i + 1).format("dddd").toLowerCase(); })
    };

    $scope.$storage = $localStorage;
});
