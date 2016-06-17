angular.module('todoController', [])
	// inject Todo service factory into our controller
	.controller('mainController', function($scope, $http, Todos) {
		$scope.formData = {};
		// when landing on the page, get all the Todos and show them
		// use the service to get all the todos
		Todos.get()
			 .success(function(data) {
			 	$scope.todos = data;
			 });
		
		
		// when submitting the add form, send the text to the node api

		$scope.createTodo = function() {
			if(!$.isEmptyObject($scope.formData)) {
				Todos.create($scope.formData)
					 .success(function(data) {
					 	$scope.formData = {}; // clear the form so our user is ready to enter another 
					 	$scope.todos = data; // assign our new list of todos 
					 });
			}
				 
		};

		$scope.deleteTodo = function(id) {
			Todos.delete(id)
				 .success(function(data) {
				 	$scope.todos = data;
				 });
		};

	});