const express = require('express');
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const app = express();
const connectDB = require('./config/db');
const port = process.env.PORT || 5000;
const errorHandler = require('./middleware/error');
//loadDB
connectDB();
//middleware
app.use(cors());
app.use(express.json());

//routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/private', require('./routes/private'));

//error middleware
app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
process.on('unhandledRejection', (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
