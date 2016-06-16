// routes ======================


// load the todo model 
var Todo = require('./models/todo');


/* api ------------------- */
module.exports = function(app) {

	app.get('/api/todos', function(req, res) {
		Todo.find(function(err, todos) {
			if(err) // if there is an error retrieving
				res.send(err)
			res.json(todos); // return all todos in JSON format
		});
	});

// create todo and send back all todos after creation 

	app.post('/api/todos', function(req, res) {
		console.log('hey request' + req);
		Todo.create({
			text: req.body.text, 
			done: false
		}, function(err, todo) {
			if(err)
				res.send(err);

			Todo.find(function(err, todos) {
				if (err) 
					res.send(err)
				console.log('response here' + res);
				res.json(todos);
			});
		});
	});

	app.delete('/api/todos/:todo_id', function(req, res) {
		Todo.remove({
			_id : req.params.todo_id
		}, function(err, todo) {
			if(err)
				res.send(err);

			Todo.find(function(err, todos) {
				if(err)
					res.send(err)
				res.json(todos);
			});
		});
	});


	// application ----------------


	app.get('*', function(req, res) {
		res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
		// this will loud our single index.html file when we hit localhost:8080
	});


}
