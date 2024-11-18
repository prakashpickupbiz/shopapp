import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const CartBadge = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    return (
        <div
            className="relative inline-block cursor-pointer"
            onClick={() => navigate('/cart')}
        >
            <span className="text-2xl">
                <FaCartShopping />
            </span>
            {cart.length > 0 && (
                <span
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full px-2 py-1 text-xs transform translate-x-1/2 -translate-y-1/2"
                >
                    {cart.length}
                </span>
            )}
        </div>
    );
};

export default CartBadge;
