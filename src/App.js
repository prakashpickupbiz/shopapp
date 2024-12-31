import React from "react";
import CartBadge from "./components/CartBadge";
import AppRouter from "./router";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import Testimonials from "./components/TestimonialCard";
import HeroSection from "./components/HeroSection";
import Counter from "./components/Counter";
import Card from "./components/ClassesDesc/Card";
import AnimatedCounter from "./components/ClassesDesc/AnimatedCounter";
import "./App.css";
import SocialAchievements from "./components/ClassesDesc/SocialAchievements";
import ImageSlider from "./components/ClassesDesc/ImageSlider";
import InputDropdown from "./components/ClassesDesc/InputDropdown";
import Map from "./components/ClassesDesc/Map";

import FAQ from "./components/FAQ";

const App = () => {
  return (
    <div>
      <AppRouter />


      
      <FAQ />
      <Footer />




      <Map />

    </div>
  );
};

export default App;

