// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name : "test name", age : 23};
// var {name} = user;
// console.log(name);

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
	if(err) {
		return console.log("Cannot connect to Mongo DB");
	}
	console.log("Connected to Mongo DB");

	const db = client.db('TodoApp');

	db.collection('Todos').insertOne({
		text : "To Do 2",
		completed : true
	}, (err, result) => {
		if(err){
			return console.log("Something went wrong", err);
		}

		console.log(JSON.stringify(result.ops, undefined,2));
	});

	// db.collection('Users').insertOne({
	// 	name : "Test User",
	// 	age : 28,
	// 	location : "New Delhi"
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log("Something went wrong", err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined,2));
	// 	console.log(result.ops[0]._id.getTimestamp());
	// });
	client.close();
});