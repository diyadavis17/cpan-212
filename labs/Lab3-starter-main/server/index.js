import express from "express";
import cors from "cors";
import save_router from "./routers/save_router.js";
import fetch_router from "./routers/fetch_router.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
    res.send("Server is running!");
});


app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/save", save_router);
app.use("/fetch", fetch_router);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
