const {MongoClient, ObjectID} = require('mongodb');   //ES6 Object Destructuring (pull-off object properties)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log('Unable to connect to MongoDB server.');
  } else {
    console.log('Connected to MongoDB server.');
  }

  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5aa29a0b7468e96c831e52a1')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5aa263f83727ff024747f39f')
  }, {
    $set: {
      name: 'Anna'
    },
    $inc: {
      age: -1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  client.close();
});
