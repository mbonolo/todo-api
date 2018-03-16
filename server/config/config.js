var env = process.env.NODE_ENV || 'development';

if(env === 'development' || env === 'test') {
  var config = require('./config.json');
  var envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}

//this is the configuration file
//when server.js is executed it can be fired up with 3 values:
//  - process.env.NODE_ENV = 'development' when it runs locally) so it use a local database (process.env.MONGODB_URI = 'mongodb://...TodoApp...')
//  - process.env.NODE_ENV = 'test' when it runs on test execution so it use a specific test database (process.env.MONGODB_URI = 'mongodb://...TodoAppTest...')
//  - process.env.NODE_ENV = 'production' when it runs on heroku
