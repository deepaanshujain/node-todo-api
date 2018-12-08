var express = require('express');
var bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

var port = process.env.PORT || 3000;

app.use(bodyParser.json());


app.post('/todos', (req, res) => {
	var newTodo = new Todo({
		text : req.body.text
	});

	newTodo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send(todos);
	}, (e) => {
		res.status(400).send(e);
	});
});

app.get('/todos/:id', (req, res) => {
	id = req.params.id;
	if(!ObjectID.isValid(id)) {
		res.status(404).send();
	} else {
		Todo.findById(id).then((todo) => {
			if(todo) {
				res.send(todo);
			} else {
				res.status(404).send();
			}
		}, (e) => {
			res.status(400).send(e);
		});
	}
});



app.listen(port, () => {
	console.log(`App started on Port ${port}`);
});
 





