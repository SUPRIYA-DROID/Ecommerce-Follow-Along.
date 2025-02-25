const express = require("express");
const cors = require("cors");
const app = require("./app");
const connectDatabase = require("./db/database");
const userRoutes = require("./controller/userRouter");
const fs = require("fs");
const path = require("path");

// Ensure uploads directory exists
const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
    console.log(" Created 'uploads/' directory");
}

// Handling uncaught Exception (e.g., using an undefined variable)
process.on("uncaughtException", (err) => {
    console.error(`Error: ${err.message}`);
    console.log("Shutting down due to an uncaught exception...");
    process.exit(1); // Exit process with failure
});

// Load environment variables (only in development mode)
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "config/.env" });
}

//  Connect to MongoDB database
connectDatabase();
const allowedOrigins = ["http://localhost:5173", "http://localhost:3000"];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use("/user", userRoutes);

//  Start server
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(` Server running on http://localhost:${PORT}`);
});