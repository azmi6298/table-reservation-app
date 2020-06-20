const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ordersRoute = require('./routes/orders');
require('dotenv/config');

// use body-parser
app.use(bodyParser.json());

// create middleware
app.use('/orders', ordersRoute);

// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true } ,
  () => {
    console.log('db connected')
  } 
);

app.listen(5000);
