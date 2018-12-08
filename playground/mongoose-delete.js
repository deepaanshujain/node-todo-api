const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

id = '5c0bbe1aba95a10910819c57';

if(!ObjectID.isValid(id)) {
	console.log("Invalid Id");
}


// Todo.remove({}).then((result) => {
// 	console.log(result);
// });


// Todo.findOneAndRemove({
// 	_id : "5c0bbe1aba95a10910819c57"
// }).then((result) => {
// 	console.log(result);
// });


Todo.findByIdAndRemove('5c0801340cdcc62216d3697f').then((result) => {
	console.log(result);
});