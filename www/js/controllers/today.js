angular.module('TodayCtrl', []).controller('TodayCtrl', function($scope, $localStorage) {
    var dateString = moment().format("YYYY-MM-DD");

    if (! $localStorage.log[dateString]) {
        $localStorage.log[dateString] = { };
    }
    var dayRecord = $localStorage.log[dateString];

    $scope.isDayOff = ! $localStorage.settings.days[moment().format("dddd").toLowerCase()];

    $scope.records = (function() {
        var start = $localStorage.settings.hours.start;
        var end = Math.min($localStorage.settings.hours.end, moment().hour());

        if ($scope.showAll) end = $localStorage.settings.hours.end;

        return _.range(start, end).map(function(hour) {
            if (! dayRecord[hour]) {
                dayRecord[hour] = {
                    notes: "adsfas",
                    tags: ["Meetings", "Pointless"],
                    completed: false
                }
            }
            var record = dayRecord[hour];
            record.hour = hour;

            return record;
        });
    })();

    $scope.toggleComplete = function(hour) {
        dayRecord[hour].completed = ! dayRecord[hour].completed;
    }
});
