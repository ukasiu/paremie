'use strict';

angular.module('myApp').
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/paremie', {
                templateUrl: 'app/paremie/paremie.html',
                controller: 'paremie'
            })
            .otherwise({redirectTo: '/paremie'});
    }]);
