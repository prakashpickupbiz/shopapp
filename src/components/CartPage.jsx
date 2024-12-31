import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

    // Calculate total cost
    const calculateTotal = () =>
        cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    // Handle removing an item from the cart
    const handleRemoveFromCart = (itemId, itemName) => {
        removeFromCart(itemId);
        toast.error(`${itemName} removed from cart!`);
    };

    // Handle updating item quantity
    const handleUpdateQuantity = (itemId, newQuantity, itemName) => {
        if (newQuantity < 1) {
            toast.warning(`Quantity cannot be less than 1.`);
            return;
        }
        updateQuantity(itemId, newQuantity);
        toast.info(`Updated ${itemName}'s quantity to ${newQuantity}.`);
    };

    // Handle clearing the cart
    const handleClearCart = () => {
        clearCart();
        toast.success("Cart cleared successfully!");
    };

    // Scroll to top when cart changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [cart]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />

            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">Your Cart</h2>

                {cart.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-600 mb-4">Your cart is empty!</p>
                        <button
                            onClick={() => (window.location.href = "/classes")}
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all"
                        >
                            Browse Products
                        </button>
                    </div>
                ) : (
                    <div>
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col sm:flex-row justify-between items-center py-4 border-b border-gray-200 space-y-4 sm:space-y-0"
                            >
                                <div className="flex items-center space-x-4 w-full sm:w-auto">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                    <div>
                                        <h4 className="text-lg font-medium">{item.name}</h4>
                                        <p className="text-gray-600">
                                            Price: ₹{item.price.toFixed(2)}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <button
                                        onClick={() =>
                                            handleUpdateQuantity(item.id, item.quantity - 1, item.name)
                                        }
                                        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 text-lg">{item.quantity}</span>
                                    <button
                                        onClick={() =>
                                            handleUpdateQuantity(item.id, item.quantity + 1, item.name)
                                        }
                                        className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    onClick={() => handleRemoveFromCart(item.id, item.name)}
                                    className="text-white bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}

                        <div className="mt-6 text-right">
                            <h3 className="text-2xl font-semibold mb-4">
                                Total: ₹{calculateTotal()}
                            </h3>
                            <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-end">
                                <button
                                    onClick={handleClearCart}
                                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                                >
                                    Clear Cart
                                </button>
                                <button
                                    onClick={() => alert("Proceeding to checkout...")}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CartPage;
