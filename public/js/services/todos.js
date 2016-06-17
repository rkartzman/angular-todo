// Todo service will interact with our Node api
// get, create, delete etc will be in this service


// now we can inject Todos and call it: 
// Todos.get()
angular.module('todoService', [])

	.factory('Todos', function($http) {
		return {
			get: function() {
				return $http.get('/api/todos');
			}, 
			create: function() {
				return $http.post('/api/todos', todoData);
			}, 
			delete: function(id) {
				return $http.delete('/api/todos' + id);
			}
		};
	});