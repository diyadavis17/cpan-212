const express = require('express');
const Product = require('../models/Product'); 
const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


router.post('/add', async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    category: req.body.category,
    stock: req.body.stock
  });
  
  try {
    const newProduct = await product.save();
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
