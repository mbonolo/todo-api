const {MongoClient, ObjectID} = require('mongodb');   //ES6 Object Destructuring (pull-off object properties)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log('Unable to connect to MongoDB server.');
  } else {
    console.log('Connected to MongoDB server.');
  }

  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     console.log('Unable to insert todo.', err)
  //   } else {
  //     console.log(JSON.stringify(result.ops, undefined, 2))
  //   }
  // });

  // db.collection('Users').insertOne({
  //   name: 'Marco',
  //   age: 22,
  //   location: 'Treviso'
  // }, (err, result) => {
  //   if(err) {
  //     console.log('Unable to insert user.', err);
  //   } else {
  //     console.log(result.ops[0]._id.getTimestamp());
  //   }
  // });

  client.close();
});
