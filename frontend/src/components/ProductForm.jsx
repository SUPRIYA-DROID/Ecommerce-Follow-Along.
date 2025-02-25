import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
const navigate = useNavigate();
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    images: [],
    imagePreviews: [],
  });

  const handleInputChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePreviews = files.map((file) => URL.createObjectURL(file));
    
    setProductData({ 
      ...productData, 
      images: files, 
      imagePreviews 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("price", productData.price);
    productData.images.forEach((image) => formData.append("images", image));
  
    console.log("Submitting Form Data:", formData);
  
    try {
      const response = await axios.post("http://localhost:8000/products/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response:", response.data);
      console.log("Product added successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error adding product:", error.response ? error.response.data : error.message);
      alert("Failed to add product");
    }
    
  };
  
  return (
    <div className="flex items-center justify-center h-lvh w-lvw">
      <div className="p-6 max-w-lg mx-auto bg-gray-200 shadow-xl rounded-lg">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-gray-700 font-semibold">Product Name:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />

          <label className="block text-gray-700 font-semibold">Price ($):</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          <div className="flex justify-center items-center w-96">
          {/* Image Preview Section */}
          {productData.imagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {productData.imagePreviews.map((src, index) => (
                <img key={index} src={src} alt={`preview-${index}`} className="w-full h-24 object-cover rounded-lg border border-gray-300" />
              ))}
            </div>
          )}
          </div>

          <label className="block text-gray-700 font-semibold">Upload Images:</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-400"
          />


          <button
            type="submit"
                  
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-5 py-3 rounded-lg shadow-md font-semibold text-lg transition duration-300 hover:from-blue-600 hover:to-purple-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;