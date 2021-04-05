const mongoose = require('mongoose');

const connectDB = async () => {
  await mongoose.connect(process.env.ATLAS_URI, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
  });
  console.log('MongoDB connected');
};

module.exports = connectDB;
