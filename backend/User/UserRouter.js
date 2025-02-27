
// module.exports = router;
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./UserSchema');
require('dotenv').config();

// Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if email is already in use
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;

// User Login Route
// User Login Route
router.post('/login', async (req, res) => {
  try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
          return res.status(403).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign(
          { userId: user._id, email: user.email },  // Ensure userId is in the token
          process.env.SECRET_KEY,
          { expiresIn: '1h' }
      );

      // ✅ Send userId explicitly in the response
      res.status(200).json({
          message: 'Login successful',
          token: token,
          userId: user._id   // Include userId in response
      });
  } catch (err) {
      console.error("Login error:", err);
      res.status(500).json({ message: 'Server Error' });
  }
});



// // Changes
// router.get('/user', async(req,res)=>{
//   const user = req.params.dictionary;
//   try {
//     const user = await User.find();

//     if(!user){
//       return res.status(404).json({msg:"User not found"});
//     }
//     res.status(200).json({user});
//   } catch (error) {
//     res.status(500).json({error:"Internal server error"});
//   }
// })

module.exports = router;
