'use strict';


angular.module('myApp').controller('paremie', ['$scope','$http',function ($scope, $http) {
      $scope.show = false;
      $scope.upto = 0;
      $http.get('paremie.json')
        .then(function(response){
          $scope.paremie = response.data;
          $scope.chooseNext();
          $scope.upto = $scope.paremie.length;
        });


      $scope.chooseNext = function() {
        
        $scope.paremia = $scope.paremie[Math.floor(Math.random() * $scope.upto)];
        $scope.puzzle = Math.random() > 0.5 ? $scope.paremia.polish : $scope.paremia.latin;
        $scope.show = false;
      };

      $scope.toogleShow = function() {
        $scope.show = !$scope.show;
      }

    }]);