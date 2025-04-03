const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  stock: Number
});

module.exports = mongoose.model("Product", ProductSchema);
