import express from "express";
import fs from "fs";
import path from "path";
import _ from "lodash"; // To use the sampleSize function
import { fileURLToPath } from "url"; // For file path

const router = express.Router();

// Grab the current directory for the file paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const upload_directory = path.join(__dirname, "../uploads"); // Path to the uploads folder

// Route to fetch a single random image
router.get("/single", (req, res) => {
  let files_array = fs.readdirSync(upload_directory);  // Get all files from the uploads folder

  if (files_array.length === 0) {
    return res.status(503).send({
      message: "No images available",
    });
  }

  let filename = _.sample(files_array);  // Randomly select a file
  res.sendFile(path.join(upload_directory, filename));  // Send the selected file
});

// Route to fetch multiple random images (up to 3)
router.get("/multiple", (req, res) => {
  let files_array = fs.readdirSync(upload_directory);

  if (files_array.length === 0) {
    return res.status(503).send({
      message: "No images available",
    });
  }

  let filenames = _.sampleSize(files_array, 3);  // Randomly select up to 3 files
  let imagePaths = filenames.map(filename => path.join(upload_directory, filename));

  res.json({ images: imagePaths });
});

export default router;
