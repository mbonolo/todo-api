const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5aa2b2838c9b68043f635922';

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     console.log('Id not found');
//   } else {
//     console.log('Todo by Id', todo);
//   }
// }).catch((e) => console.log(e));

User.findById(id).then((user) => {
  if(!user) {
    console.log('ID not found');
  } else {
    console.log('User by ID', user);
  }
}, (e) => {
  console.log(e);
});
