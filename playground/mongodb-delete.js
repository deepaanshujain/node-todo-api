// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
	if(err) {
		return console.log("Cannot connect to Mongo DB");
	}
	console.log("Connected to Mongo DB");

	const db = client.db('TodoApp');

	// db.collection('Todos').deleteMany({text : "To Do3"}).then((results) => {
	// 	console.log(results);
	// });

	// db.collection('Todos').deleteOne({text : "To Do3"}).then((results) => {
	// 	console.log(results);
	// });

	// db.collection('Todos').findOneAndDelete({text : "To Do3"}).then((results) => {
	// 	console.log(results);
	// });

	db.collection('Users').findOneAndDelete({
		_id : new ObjectID('5c0391c8fd75a00f0485d6c4')
	}).then((results) => {
		console.log(results);
	});

	//client.close();
});