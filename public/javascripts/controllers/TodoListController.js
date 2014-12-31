var myApp = angular.module('myApp', [])
.controller('TodoListController', ['$scope', function TodoListController($scope) {
  $scope.todos = [];

  $scope.doneFilter = { done : true };
  $scope.notDoneFilter = { done : false };

  $scope.setTodos = function(todos) {
    $scope.todos = todos;
  };
}]);