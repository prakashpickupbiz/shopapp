import React from "react";
import CartBadge from "./components/CartBadge";
import AppRouter from "./router";
import ProfilePage from "./components/ProfilePage";
import Footer from "./components/Footer";
import Testimonials from "./components/TestimonialCard";
import HeroSection from "./components/HeroSection";
import Counter from "./components/Counter";


const App = () => {
  return (
    <div>
      <AppRouter />

      <Testimonials />
      <Footer />



      {/* <Counter/> */}
    </div>
  );
};

export default App;
