import multer from "multer";
import path from "path";

// Set up storage engine for multer
const storage = multer.diskStorage({
  // Destination function to save files to the 'uploads' directory
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));  // Pointing to the uploads folder
  },
  // Filename function to give each file a unique name (using timestamp)
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);  // Format: timestamp-filename.extension
  },
});

// Initialize multer with the defined storage engine
const upload = multer({ storage: storage });

export default upload;
