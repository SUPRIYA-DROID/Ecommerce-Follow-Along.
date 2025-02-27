const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: String},
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true } // Add userId field  
});

module.exports = mongoose.model("Product", ProductSchema);