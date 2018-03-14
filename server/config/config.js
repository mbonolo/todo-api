var env = process.env.NODE_ENV || 'development';

if(env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if(env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest'
}

//this is the configuration file
//when server.js is executed it can be fired up with 3 values:
//  - process.env.NODE_ENV = 'development' when it runs locally) so it use a local database (process.env.MONGODB_URI = 'mongodb://...TodoApp...')
//  - process.env.NODE_ENV = 'test' when it runs on test execution so it use a specific test database (process.env.MONGODB_URI = 'mongodb://...TodoAppTest...')
//  - process.env.NODE_ENV = 'production' when it runs on heroku
