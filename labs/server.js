const PORT = process.env.PORT || 8000;
const express = require("express");
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// middleware for /route_test
app.use("/route_test", (req, res, next) => {
  const testValidation = req.query.test_validation;
  const timestamp = new Date().toISOString();
  
  if (testValidation) {
    console.log(`test_validation: ${testValidation}`);
  } else {
    console.log("test_validation query parameter is missing");
  }
  
  console.log(`Route: /route_test, Timestamp: ${timestamp}`);
  
  // Continue with the next middleware or route handler
  next();
});

// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

app.get("/route_test", (req, res) => {
  res.send("Route Test Successful");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
