import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "./card";

const Product = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/products")
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setProducts(response.data);
                } else {
                    console.error("Unexpected response format:", response.data);
                }
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    // Function to handle delete
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/products/${id}`);
            setProducts(products.filter(product => product._id !== id)); // Update UI
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    return (
        <div className="flex justify-center items-center w-full">
            <div className="min-h-screen w-full mt-20 bg-red-400 flex flex-col items-center p-5">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-10">
                    Our Products
                </h1>
                <div className="grid  grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
                    {products.map((product) => (
                        <Card
                            key={product._id}
                            name={product.name}
                            price={product.price}
                            image={`http://localhost:8000/uploads/${product.images?.[0]}`}
                            onAddToCart={() => console.log("Added to cart:", product.name)}
                            onBuyNow={() => console.log("Buying:", product.name)}
                            onEdit={() => navigate(`/edit-product/${product._id}`)}
                            onDelete={() => handleDelete(product._id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Product;