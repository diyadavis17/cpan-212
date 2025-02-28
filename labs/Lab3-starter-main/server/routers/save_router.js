import express from "express";
import multer from "multer";
import fs from "fs"; 
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload_directory = path.join(__dirname, "../uploads");

if (!fs.existsSync(upload_directory)) {
    fs.mkdirSync(upload_directory, { recursive: true });
}

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, upload_directory);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

const upload = multer({ storage });

router.post("/dog", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    const filePath = `http://localhost:8000/uploads/${encodeURIComponent(req.file.filename)}`;
    res.json({ message: "File uploaded successfully", filePath });
});

export default router;
