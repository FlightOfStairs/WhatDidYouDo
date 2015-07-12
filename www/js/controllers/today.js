angular.module('TodayCtrl', []).controller('TodayCtrl', function($scope, $localStorage) {

    $scope.isDayOff = function() {
        return ! $localStorage.settings.days[moment().format("dddd").toLowerCase()];
    };

    $scope.record = function() {
        return $localStorage.log[moment().format("YYYY-MM-DD")];
    };
});
