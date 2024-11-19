import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';
import ClassesNavbar from './components/ClassesNavbar';
import Home from './components/Home';
import ProfilePage from './components/ProfilePage';
import Mehandi from './components/ClassesDesc/Mehandi';
import Taekwondo from './components/ClassesDesc/Taekwondo';
import KarateClasses from './components/ClassesDesc/KarateClasses';
import FashionDesigning from './components/ClassesDesc/FashionDesigning';
import CookingClasses from './components/ClassesDesc/CookingClasses';
import Precision from './components/ClassesDesc/Precision';
import EnglishSpoken from './components/ClassesDesc/EnglishSpoken';
import TuitionCentre from './components/ClassesDesc/TuitionCentre';
import SkateClasses from './components/ClassesDesc/SkateClasses';
import ComputerClasses from './components/ClassesDesc/ComputerClasses';
import ArabicClasses from './components/ClassesDesc/ArabicClasses';
import SignLanguage from './components/ClassesDesc/SignLanguage';
import MakeupClasses from './components/ClassesDesc/MakeupClasses';
import YogaClasses from './components/ClassesDesc/YogaClasses';
import FootballClasses from './components/ClassesDesc/FootballClasses';
import HorseRiding from './components/ClassesDesc/HorseRiding';
import GYMClasses from './components/ClassesDesc/GYMClasses';
import MeditationClasses from './components/ClassesDesc/MeditationClasses';
import HotelManagement from './components/ClassesDesc/HotelManagement';
import PaintingClasse from './components/ClassesDesc/PaintingClasse';
import Contact from './components/Contact';

const AppRouter = () => {
    return (
        <Routes>


            <Route path="/classes" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/classes/mehandi" element={<Mehandi />} />
            <Route path="/classes/taekwondo" element={<Taekwondo />} />
            <Route path="/classes/karate" element={<KarateClasses />} />
            <Route path="/classes/fashion-designing" element={<FashionDesigning />} />
            <Route path="/classes/cooking" element={<CookingClasses />} />
            <Route path="/classes/precision-shooting" element={<Precision />} />
            <Route path="/classes/english-spoken" element={<EnglishSpoken />} />
            <Route path="/classes/tuition-centre" element={<TuitionCentre />} />
            <Route path="/classes/skate" element={<SkateClasses />} />
            <Route path="/classes/computer" element={<ComputerClasses />} />
            <Route path="/classes/arabic" element={<ArabicClasses />} />
            <Route path="/classes/sign-language" element={<SignLanguage />} />
            <Route path="/classes/make-up" element={<MakeupClasses />} />
            <Route path="/classes/yoga" element={<YogaClasses />} />
            <Route path="/classes/football" element={<FootballClasses />} />
            <Route path="/classes/horse-riding" element={<HorseRiding />} />
            <Route path="/classes/gym" element={<GYMClasses />} />
            <Route path="/classes/meditation" element={<MeditationClasses />} />
            <Route path="/classes/hotel-management" element={<HotelManagement />} />
            <Route path="/classes/painting" element={<PaintingClasse />} />
            <Route path="/contact" element={<Contact />} />

        </Routes>
    );
};

export default AppRouter;
