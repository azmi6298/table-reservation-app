const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// get all orders
router.get('/', async(req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.json({ message: error });
  }
});

// get specific order
router.get('/:orderId', async(req, res) => {
  try {
    const order = await Order.findById(req.params.orderId)
    res.json(order);
  } catch (error) {
    res.status(404).json({ message: `Order with ID ${req.params.orderId} not found`});
  }
});

// add an order data
router.post('/', async(req, res) => {
  const order = new Order({
    code: req.body.code,
    table_name: req.body.table_name,
    employee_name: req.body.employee_name,
    customer_name: req.body.customer_name,
    menu_name: req.body.menu_name,
    quantity_ordered: req.body.quantity_ordered,
    order_date: req.body.order_date
  });

  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    res.json({ message: error });
  }
});

// edit an order data
router.put('/:orderId', async(req, res) => {
  try {
    const updatedOrder = await Order.updateOne(
      {_id: req.params.orderId}, 
      { $set: 
        { 
          code: req.body.code,
          table_name: req.body.table_name,
          employee_name: req.body.employee_name,
          customer_name: req.body.customer_name,
          menu_name: req.body.menu_name,
          quantity_ordered: req.body.quantity_ordered
        }
      }
    );

    res.json(updatedOrder);
  } catch (error) {
    res.json({ message: error });
  }
});

// delete an order data
router.delete('/:orderId', async(req, res) => {
  try {
    const removedOrder = await Order.remove({_id: req.params.orderId});
    res.json(removedOrder);
  } catch (error) {
    res.status(404).json({ message: `Order with ID ${req.params.orderId} not found`});
  }
});

module.exports = router;