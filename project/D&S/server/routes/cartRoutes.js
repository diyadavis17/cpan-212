const express = require('express');
const Cart = require('../models/Cart'); 
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const carts = await Cart.find().populate('userId');
    res.json(carts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/add', async (req, res) => {
  const cart = new Cart({
    userId: req.body.userId,
    products: req.body.products 
  });
  
  try {
    const newCart = await cart.save();
    res.status(201).json({ message: 'Cart updated successfully', cart: newCart });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
