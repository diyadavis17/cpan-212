import express from "express";
import lab_router from "./routers/lab_router.js";

const app = express();
const PORT = process.env.PORT || 8000;

// Use the router for /lab routes
app.use("/lab", lab_router);

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to the server");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
