const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Ensure uploads directory exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const filename = path.parse(file.originalname).name; // Get file name without extension
    cb(null, `${filename}-${uniqueSuffix}${path.extname(file.originalname)}`); // Keep original file extension
  },
});

// Initialize upload object
exports.upload = multer({ storage: storage });