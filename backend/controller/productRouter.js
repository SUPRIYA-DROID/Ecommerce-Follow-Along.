const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("../model/product");

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// Route to add a new product
router.post("/add", upload.array("images", 5), async (req, res) => {
  try {
    console.log("Incoming request:", req.body);
    console.log("Uploaded files:", req.files);

    const { name, price } = req.body;
    if (!name || !price || req.files.length === 0) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const images = req.files.map((file) => file.filename);

    const product = new Product({ name, price, images });
    await product.save();

    res.status(201).json({ message: "Product added successfully!", product });
  } catch (error) {
    console.error("Error in /products/add route:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});


// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;