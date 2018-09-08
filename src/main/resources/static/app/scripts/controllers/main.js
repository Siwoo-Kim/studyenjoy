'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
(function () {

  angular.module("frontendApp")
    .controller("MainCtrl", ["$scope", function ($scope) {
      $scope.remove = remove;
      $scope.todos = todos();




      function remove(todo /*$index*/) {
        // $scope.todos.splice($index, 1);
        let index = $scope.todos.findIndex(_todo => _todo.title == todo.title);
        if(index > -1) {
          $scope.todos.splice(index, 1);
        }
      }

      function todos() {
        return [
          {
            title: "요가 수행",
            completed: false,
            createdAt: Date.now()
          },
          {
            title: "앵귤러 학습",
            completed: false,
            createdAt: Date.now()
          },
          {
            title: "운동하기",
            completed: true,
            createdAt: Date.now()
          }
        ];
      }

    }])

})();

