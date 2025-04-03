import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Middleware setup
app.use(bodyParser.json());

// Dummy data for products
const products = [
  { id: 1, name: 'Men’s Shirt', category: 'Men’s Apparel', price: 25, imageUrl: 'image1.jpg' },
  { id: 2, name: 'Women’s Dress', category: 'Women’s Apparel', price: 45, imageUrl: 'image2.jpg' },
];

// Route to get all products
app.get('/products', (req, res) => {
  res.json(products);
});

// Route to add an item to the cart (for now, log the data)
app.post('/cart', (req, res) => {
  console.log('Item added to cart:', req.body);
  res.status(200).send('Item added to cart');
});

// Route to checkout (just logs for now)
app.post('/checkout', (req, res) => {
  console.log('Checkout initiated:', req.body);
  res.status(200).send('Checkout successful');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
