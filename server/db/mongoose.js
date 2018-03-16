var mongoose = require('mongoose');

mongoose.Promise = global.Promise;    //Set use of promise in mongoose instead of callbacks
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
  mongoose
};
