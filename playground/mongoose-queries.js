const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

id = '5c0bbe1aba95a10910819c57';

if(!ObjectID.isValid(id)) {
	console.log("Invalid Id");
}


// Todo.find({
// 	_id : id
// }).then((todos) => {
// 	console.log(todos);
// });

// Todo.findOne({
// 	_id : id
// }).then((todo) => {
// 	console.log(todo);
// });

Todo.findById(id).then((todo) => {
	console.log(todo);
}).catch((e)=> {
	//console.log(e);
});