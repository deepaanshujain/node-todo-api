var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text : {
		type : String,
		required : true,
		trim : true,
		minLength : 1
	},
	completed : {
		type : Boolean,
		default : false
	},
	completedAt : {
		type : Number,
		default : null
	}
});

module.exports = {Todo};


// var newTodo = new Todo({
// 	text : '    this is a todo test    '
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved Todo', doc);
// }, (e) => {
// 	console.log('Unable to Save', e);
// })

