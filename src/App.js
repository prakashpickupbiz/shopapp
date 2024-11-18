import React from "react";
import CartBadge from "./components/CartBadge";
import AppRouter from "./router";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import Testimonials from "./components/TestimonialCard";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div>
      <AppRouter />

      
      <Testimonials/>
      <Footer/>
      {/* <HeroSection/> */}
      {/* <ProfilePage /> */}
    </div>
  );
};

export default App;



