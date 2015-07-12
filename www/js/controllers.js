angular.module('starter.controllers', [])

    .controller('DashCtrl', function($scope) {})

    .controller('ChatsCtrl', function($scope, Chats) {
        // With the new view caching in Ionic, Controllers are only called
        // when they are recreated or on app start, instead of every page change.
        // To listen for when this page is active (for example, to refresh data),
        // listen for the $ionicView.enter event:
        //
        //$scope.$on('$ionicView.enter', function(e) {
        //});

        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
            Chats.remove(chat);
        }
    })

    .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })

    .controller('SettingsCtrl', function($scope, $localStorage) {
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
