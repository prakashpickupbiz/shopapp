import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import ClassesNavbar from './components/ClassesNavbar';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';

const AppRouter = () => {
    return (
        <Routes>


            <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
        </Routes>
    );
};

export default AppRouter;
