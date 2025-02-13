const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');
require('dotenv').config();

// Test route
router.get('/', (req, res) => {
    return res.send("Hello World");
});

// User signup route
router.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Save user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).send('User not found');
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(403).send('Invalid credentials');
        }

        // Generate JWT token
        const token = jwt.sign(
            { userId: existingUser._id, email: existingUser.email },
            'yourSecretKey', // Change this to a secure secret key
            { expiresIn: '1h' }
        );

        return res.status(200).json({ message: 'Login successful', token });
    } catch (err) {
        console.log('Error in login:', err);
        return res.status(500).send('Server Error');
    }
});

// User login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;