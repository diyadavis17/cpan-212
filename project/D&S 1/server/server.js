const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://dvsdiya17:q0dsLTyPS8X0pwGV@cluster0.vrwjj6p.mongodb.net/project?retryWrites=true&w=majority')
  .then(() => {
    console.log('MongoDB connected successfully to the project database');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// Use user routes
app.use('/api/users', userRoutes);

// Basic route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the backend of the e-commerce platform!');
});

// Set the server to listen on port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`You can access the backend API at: http://localhost:${PORT}`);
});
