const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  table_name: {
    type: String,
    required: true
  },
  employee_name: {
    type: String,
    required: true
  },
  customer_name: {
    type: String,
    required: true
  },
  menu_name: {
    type: String,
    required: true
  },
  quantity_ordered: {
    type: Number,
    required: true
  },
  order_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Orders', OrderSchema);