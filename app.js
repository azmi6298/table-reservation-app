const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ordersRoute = require('./routes/orders');
const cors = require('cors');
require('dotenv/config');


// use cors, to access localhost API (in development server)
app.use(cors())
app.options('*', cors());

// to parse HTTP request
app.use(bodyParser.json());

// for routing
app.use('/api/v1/orders', ordersRoute);

// connect to DB
mongoose.connect(
  process.env.DB_CONNECTION, 
  { useNewUrlParser: true, useUnifiedTopology: true } ,
  () => {
    console.log('db connected')
  } 
);

const PORT = 5001
app.listen(PORT, () => console.log(`connected to port ${PORT}`));
