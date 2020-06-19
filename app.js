const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());

const ordersRoute = require('./routes/orders');

// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true } ,
  () => {
    console.log('db connected')
  } 
);

// create middleware
app.use('/orders', ordersRoute);

app.get('/', (req, res) => {
  
});
app.listen(5000);
