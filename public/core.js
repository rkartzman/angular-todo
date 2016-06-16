var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all the todos and show them
	$http.get('/api/todos')
		 .success(function(data) {
		 	$scope.todos = data;
		 	console.log(data);
		 })
		 .error(function(data) {
		 	console.log("Error" + data);
		 });

	// when submitting the add form, send the text to the node api

	$scope.createTodo = function() {
		$http.post('/api/todos', $scope.formData)
			 .success(function(data) {
			 	// we get back json from this post request. we now set our new array of todos equal to $scope.todos to update the frontend 
			 	$scope.formData = {};
			 	$scope.todos = data;
			 	console.log(data);
			 })
			 .error(function(data) {
			 	console.log("Error" + data);
			 });
	};

	$scope.deleteTodo = function(id) {
		$http.delete('/api/todos/' + id)
			 .success(function(data) {
			 	$scope.todos = data;
			 	console.log(data);
			 })
			 .error(function(data) {
			 	console.log('Error' + data);
			 })
	}

}