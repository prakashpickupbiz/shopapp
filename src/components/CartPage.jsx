import React from "react";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();

    // Function to calculate total cost
    const calculateTotal = () => {
        return cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };

    // Function to handle removing an item from the cart with a toast notification
    const handleRemoveFromCart = (itemId, itemName) => {
        removeFromCart(itemId);
        toast.error(`${itemName} removed from cart!`);
    };

    // Function to handle updating item quantity with a toast notification
    const handleUpdateQuantity = (itemId, newQuantity, itemName) => {
        updateQuantity(itemId, newQuantity);

        if (newQuantity > 0) {
            toast.info(`Quantity of ${itemName} updated to ${newQuantity}.`, {
                autoClose: 3000,
            });
        } else {
            toast.warning(`Quantity cannot be less than 1.`);
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between items-center mb-4 border-b pb-4 border-gray-300"
                        >
                            <div className="flex items-center space-x-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                                <div>
                                    <h4 className="text-lg font-medium">{item.name}</h4>
                                    <p className="text-sm text-gray-600">
                                        ₹{item.price.toFixed(2)}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-2">
                                <button
                                    onClick={() =>
                                        handleUpdateQuantity(item.id, item.quantity - 1, item.name)
                                    }
                                    className="px-2 py-1 bg-gray-200 rounded-full text-sm  font-medium hover:bg-gray-300"
                                >
                                    -
                                </button>
                                <span className="px-2">{item.quantity}</span>
                                <button
                                    onClick={() =>
                                        handleUpdateQuantity(item.id, item.quantity + 1, item.name)
                                    }
                                    className="px-2 py-1 bg-gray-200 rounded-full font-bold text-sm  hover:bg-gray-300"
                                >
                                    +
                                </button>
                            </div>

                            <button
                                onClick={() => handleRemoveFromCart(item.id, item.name)}
                                className="text-white p-2 rounded-3xl font-medium hover:underline ml-4 bg-red-500 hover:bg-red-600 hover:shadow-lg hover:translate-y-1 transition-all"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <h3 className="text-xl font-semibold mt-6">
                        Total: ₹{calculateTotal()}
                    </h3>
                </div>
            )}

            {/* Toast Container to display notifications */}
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        </div>
    );
};

export default CartPage;
