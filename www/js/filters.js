angular.module('WhatDidYouDoFilters', [])
    .filter('hour', ['$localStorage', function($localStorage) {
        return function(num) {
            if ($localStorage.settings.hours.format == "12") {
                var after12 = num >= 12;
                num = num - (after12 ? 12 : 0);
                if (num === 0) num = 12;
                return num + ":00 " + (after12 ? "PM" : "AM");
            } else {
                return ("100" + num).slice(-2) + ":00";
            }
        }
    }])

    .filter('capitalize', function() {
        return function(str) {
            return str.substring(0,1).toUpperCase()+str.substring(1);
        }
    });
;