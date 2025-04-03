const express = require('express');
const Order = require('../models/Order');
const router = express.Router();


router.get('/', async (req, res) => {
  try {

    const orders = await Order.find().populate('userId');
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/add', async (req, res) => {
  const order = new Order({
    userId: req.body.userId,
    items: req.body.items, 
    totalPrice: req.body.totalPrice,
    status: req.body.status || 'pending'
  });
  
  try {
    const newOrder = await order.save();
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
