import express from "express"; // if you are using type: module
 
const app = express();
const PORT = process.env.PORT || 8000;

cons
console.log(Date())
console.log(req.url)
console.log(req.method)
console.log(req.headers)
 
// middlelware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
 
// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});
 
app.method("/01", (req, res) => {
//do soemthing -middleware
//do something else middleware

console.log(Date())
console.log(req.url)
console.log(req.method)
console.log(req.headers)

    res.send("Welcome to our server");
  });

  app.get("/02", (req, res) => {
    res.send("Welcome to our server");
  });
 
  
  app.get("/03", (req, res) => {
    res.send("Welcome to our server");
  });
 
  
  app.get("/04", (req, res) => {
    res.send("Welcome to our server");
  });
 
 
   
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
 