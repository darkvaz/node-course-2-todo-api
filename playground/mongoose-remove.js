const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '596ba3480f6c7a0c2ec58728'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('596ba3480f6c7a0c2ec58728').then((todo) => {
  console.log(todo);
});
