import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
    const { id } = useParams();  // Get product ID from URL
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        price: "",
        description: "",
    });

    // Fetch existing product details
    useEffect(() => {
        axios.get(`http://localhost:8000/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            })
            .catch((error) => {
                console.error("Error fetching product:", error);
            });
    }, [id]);
    

    // Handle input changes
    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`http://localhost:8000/products/${id}`, product);
            console.log("Product updated successfully!");
            navigate("/");  // Redirect to product list
        } catch (error) {
            console.error("Error updating product:", error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-700">
            <div className="p-8 bg-white rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold text-center mb-6">Edit Product</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        placeholder="Product Name"
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="p-2 border rounded"
                        required
                    />
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        placeholder="Description"
                        className="p-2 border rounded"
                    />
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Update Product
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;