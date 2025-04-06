const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const recipeRouter = require('./routes/recipes_router'); 

const app = express();

app.use(cors());
app.use(bodyParser.json());

const dbURI = 'mongodb+srv://dvsdiya17:5kXKrAhRvmqpcCnT@cluster0.hgyrc15.mongodb.net/recipe_db';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Failed to connect to MongoDB:', err));


app.use('/recipe', recipeRouter);

app.get('/', (req, res) => {
  res.send('Welcome to the Recipe API Server!');
});

const serverPort = 8001;
app.listen(serverPort, () => {
  console.log(`Server is running on port ${serverPort}`);
  console.log(`Server URL: http://localhost:${serverPort}`);
});
