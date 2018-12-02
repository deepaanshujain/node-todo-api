// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
	if(err) {
		return console.log("Cannot connect to Mongo DB");
	}
	console.log("Connected to Mongo DB");

	const db = client.db('TodoApp');

	db.collection('Todos').findOneAndUpdate({
		_id : new ObjectID('5c039cb1fa7da7134134ce64')
	}, {
		$set : {
			completed : false
		}
	},{
		returnOriginal : false
	}).then((result) => {
		console.log(result)
	});

	db.collection('Users').findOneAndUpdate({
		name : "Test User"
	}, {
		$set : {
			name : "Test User Modified"
		},
		$inc : {
			age : 1
		}
	},{
		returnOriginal : false
	}).then((result) => {
		console.log(result)
	});

	//client.close();
});