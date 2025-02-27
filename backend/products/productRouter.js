// const express = require("express");
// const router = express.Router();
// const multer = require("multer");
// const Product = require("./productSchema");

// // Configure multer for file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });
// const upload = multer({ storage });

// // Route to add a new product
// router.post("/add", async (req, res) => {
//   try {
//     console.log("Incoming request body:", req.body); // Debugging

//     const { name, price, userId, images } = req.body;

//     if (!name || !price || !userId) {
//       return res.status(400).json({ message: "All fields are required" });
//     }

//     const product = new Product({ name, price, images, userId });
//     await product.save();

//     res.status(201).json({ message: "Product added successfully!", product });
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });


// // Get all products
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.status(200).json(products);
//   } catch (error) {
//     res.status(500).json({ message: "Server error" });
//   }
// });

// // Get products for a specific user
// router.get("/:userId", async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const products = await Product.find({ userId }); // Fetch only products added by the user
//     res.json(products);
//   } catch (error) {
//     console.error("Error fetching user-specific products:", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;
const express = require("express");
const router = express.Router();
const multer = require("multer");
const Product = require("./productSchema");
const authenticate = require("../middleware/auth"); // Import authentication middleware

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

// Route to add a new product (Only for logged-in users)
router.post("/add", authenticate, async (req, res) => {
  try {
    const { name, price, images } = req.body;
    const userId = req.user.userId; // Get userId from token

    if (!name || !price) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const product = new Product({ name, price, images, userId }); // Assign userId
    await product.save();

    res.status(201).json({ message: "Product added successfully!", product });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Get all products (Public)
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get products for the logged-in user
router.get("/user-products", authenticate, async (req, res) => {
  try {
   const userId = req.user.userId; // Get logged-in user's ID
    const products = await Product.find({ userId }); // Fetch only user's products
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching user-specific products:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
