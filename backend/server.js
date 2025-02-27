const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");
const connectDatabase = require("./db/database");
const ErrorHandler = require("./middleware/error");

const app = express();

// Load environment variables (only in development mode)
if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "config/.env" });
}

// Ensure uploads directory exists
const uploadPath = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
    console.log("✅ Created 'uploads/' directory");
}

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

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

// Serve static files
app.use("/", express.static("uploads"));
app.use("/uploads", express.static("uploads"));

// Import and use routes
const userRoutes = require("./controller/userRouter");
const productRoutes = require("./controller/productRouter");
app.use("/user", userRoutes);
app.use("/products", productRoutes);

// Error Handling Middleware
app.use(ErrorHandler);

// ✅ Connect to MongoDB database
connectDatabase();

// ✅ Start server
const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});

// Handling uncaught Exception (e.g., using an undefined variable)
process.on("uncaughtException", (err) => {
    console.error(`Error: ${err.message}`);
    console.log("Shutting down due to an uncaught exception...");
    process.exit(1); // Exit process with failure
});