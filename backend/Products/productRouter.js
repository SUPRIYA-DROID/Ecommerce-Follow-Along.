const express = require("express");
const router = express.Router();
const Product = require("./productSchema");
const authenticate = require("../middleware/auth");
const upload = require("../multer");

router.post("/add", authenticate, upload.array("images", 5), async (req, res) => {
    try {
        console.log("🔹 Checking req.user:", req.user); // 🛠 Debugging line

        if (!req.user) {
            return res.status(401).json({ message: "Unauthorized! User not authenticated." });
        }

        const { name, price } = req.body;
        const userId = req.user._id; // Ensure userId is taken from authenticated user

        if (!name || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const imagePaths = req.files.map(file => file.filename);
        const product = new Product({ name, price, images: imagePaths, userId });

        await product.save();
        res.status(201).json({ message: "Product added successfully!", product });
    } catch (error) {
        console.error("❌ Error adding product:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});


// Get a single product by ID
router.get("/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});


router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
  
    try {
      const result = await Product.findByIdAndUpdate(id, updatedData, { new: true });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Error updating product" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Product.findByIdAndDelete(id);
      if (!result) return res.status(404).json({ message: "Product not found" });
      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting product", error });
    }
  });

module.exports = router;