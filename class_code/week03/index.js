import express from "express";
import dotenv from "dotenv";

dotenv.config(); // This loads variables from .env file
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send("Welcome to the server - GET");
});
app.post("/", (req, res) => {
    res.send("Welcome to the server - POST");
});
app.put("/", (req, res) => {
    res.send("Welcome to the server - PUT");
});
app.delete("/", (req, res) => {
    res.send("Welcome to the server - DELETE");
});




app.get("/watch", (req, res) =>{
    console.log("URL call:")
    console.log(req.url)
    console.log("Method call:")
    console.log(req.method)
    console.log("Headers call:")
    console.log(req.headers)
    console.log("Query call:")
    console.log(req.query)
    console.log("Params call:")
    console.log(req.params)
    console.log("Req call:")
    console.log(req.body)
    res.send("welcome to the watch list");

})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
