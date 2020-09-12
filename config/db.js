const mongoose = require('mongoose');
const config = require('config');

const connectDB = () => {
  mongoose.connect(config.get('mongo_uri'), {
    useNewUrlParser: true, useCreateIndex: true,
    useFindAndModify: false, useUnifiedTopology: true
  }, (err) => {
    if (err)
    {
      console.log(err);
      process.exit(1);
    } else
    {
      console.log('Mongodb connected...');
    }
  })
}

module.exports = connectDB;