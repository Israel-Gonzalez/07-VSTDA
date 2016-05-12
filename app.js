var app = angular.module('myApp', []);

//Initializing controller 
app.controller('todoCtrl', function($scope) {

    $scope.todos = [];
    $scope.orderMethod = '';

    //Adding todos function
    $scope.addTodo = function(newTodo) {

        //Push new todo items. 
        $scope.todos.push({
            'newTodo': $scope.newTodo,
            'priority': $scope.color,
        });

        //Reset todos
        $scope.newTodo = '';


    };
});
