// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
	if(err) {
		return console.log("Cannot connect to Mongo DB");
	}
	console.log("Connected to Mongo DB");

	const db = client.db('TodoApp');
	// db.collection('Todos').find().toArray().then((docs) =>{
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined,2));
	// }, (err) => {
	// 	console.log('Unable to fetch Todos', err);
	// });

	// db.collection('Todos').find({completed : false}).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined,2));
	// }, (err) => {
	// 	console.log('Unable to fetch Todos', err);
	// });

	// db.collection('Todos').find({
	// 	_id : new ObjectID('5c039cb1fa7da7134134ce64')
	// }).toArray().then((docs) => {
	// 	console.log('Todos');
	// 	console.log(JSON.stringify(docs, undefined,2));
	// }, (err) => {
	// 	console.log('Unable to fetch Todos', err);
	// });

	db.collection('Users').find({name : 'Test User 4'}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined,2));
	}, (err) => {
		console.log('Unable to fetch Users', err);
	});

	client.close();
});