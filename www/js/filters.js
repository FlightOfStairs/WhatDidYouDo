angular.module('WhatDidYouDoFilters', [])
    .filter('hour', function() {
        return function(num) {
            return ("100" + num).slice(-2) + ":00";
        }
    })
    .filter('capitalize', function() {
        return function(str) {
            return str.substring(0,1).toUpperCase()+str.substring(1);
        }
    });
;