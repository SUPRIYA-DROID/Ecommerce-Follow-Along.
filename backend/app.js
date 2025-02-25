const express = require('express');
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

const app = express();

// Config
if (process.env.NODE_ENV !== 'PRODUCTION') {
    dotenv.config({ path: "backend/config/.env" });
}

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// Serve static files
app.use("/", express.static("uploads"));
app.use("/uploads", express.static("uploads"));

// Import Routes
const user = require("./controller/userRouter");
app.use("/user", user);

const productRoutes = require("./controller/productRouter");
app.use("/products", productRoutes);

// Error Handling Middleware
app.use(ErrorHandler);

module.exports = app;