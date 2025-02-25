import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

const Product = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/products")
            .then((response) => {
                setProducts(response.data);  // Assuming API returns an array of products
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-r from-gray-800 to-blue-600 p-6">
            <h1 className="text-5xl font-bold text-center text-white mb-10">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Card
                        key={product._id}
                        name={product.name}
                        price={product.price}
                        image={`http://localhost:8000/uploads/${product.images[0]}`}  // Fix the path
                    />
                ))}
            </div>
        </div>
    );
};

export default Product;