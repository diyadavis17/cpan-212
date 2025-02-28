import express from "express";
import fs from "fs";
import path from "path";
import _ from "lodash";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload_directory = path.join(__dirname, "../uploads");

router.get("/multiple", (req, res) => {
    try {
        if (!fs.existsSync(upload_directory)) {
            return res.status(503).json({ message: "Uploads folder does not exist." });
        }

        const files_array = fs.readdirSync(upload_directory).filter(file =>
            file.endsWith(".jpg") || file.endsWith(".png") || file.endsWith(".jpeg")
        );

        if (files_array.length === 0) {
            return res.status(503).json({ message: "No images found." });
        }

        const selectedFiles = _.sampleSize(files_array, Math.min(files_array.length, 3));
        const fileUrls = selectedFiles.map(file => `http://localhost:8000/uploads/${encodeURIComponent(file)}`);

        console.log("Selected image URLs:", fileUrls); 

        res.json({ files: fileUrls });
    } catch (error) {
        console.error("Error fetching multiple images:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
