const {MongoClient, ObjectID} = require('mongodb');   //ES6 Object Destructuring (pull-off object properties)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    console.log('Unable to connect to MongoDB server.');
  } else {
    console.log('Connected to MongoDB server.');
  }

  const db = client.db('TodoApp');

  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({name: 'Marco'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5aa2647211c070024df691d2')
  }).then((result) => {
    console.log(result);
  });

  client.close();
});
