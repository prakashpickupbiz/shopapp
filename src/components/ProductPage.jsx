import React from "react";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaCartShopping } from "react-icons/fa6";
import { products } from "./products"
import { Link } from "react-router-dom";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

const ProductPage = () => {
    const { addToCart } = useCart();

    // Product details in a JSON-like format


    // Function to handle adding to cart and showing a toast
    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success(`${product.name} added to cart!`);
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-slate-600 "
                    >
                        {/* Image */}
                        <img
                            className="w-full h-48 object-cover"
                            src={product.image}
                            alt={product.name}
                        />

                        {/* Product details */}
                        <div className="p-4 flex-1 flex flex-col">
                            <h4 className="text-lg font-semibold">{product.name.slice(0, 15) + "..."}</h4>
                            <p className="text-gray-500 text-sm mt-2">{product.description.slice(0, 30) + "."}</p>
                            <p className="font-bold text-lg mt-4">₹{product.price.toFixed(2)}</p>

                            {/* Add to Cart button */}

                            <div className="flex gap-1">
                                <button
                                    onClick={() => handleAddToCart(product)}
                                    className="mt-4 bg-blue-600 text-white hover:bg-blue-700 transition-colors font-bold duration-200 rounded-lg w-1/2 py-2 px-4 flex items-center justify-center hover:translate-y-1  "
                                >
                                     Enroll Now
                                </button>

                                <button

                                    className="mt-4 bg-gray-700 text-white hover:bg-blue-700 transition-colors duration-200 rounded-lg w-1/2 py-2 px-4 flex items-center justify-center hover:translate-y-1 "
                                >
                                    <FaExternalLinkSquareAlt className="mr-2" />
                                    <Link to={product.path} >
                                        Learn more
                                    </Link>
                                </button>
                            </div>


                        </div>
                    </div>
                ))}
            </div>

            {/* Toast Container for notifications */}
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={false}
            />
        </div>
    );
};

export default ProductPage;
