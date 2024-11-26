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
import SocialAchievements from "./components/ClassesDesc/SocialAchievements";

const App = () => {
  return (
    <div>
      <AppRouter />

      <Testimonials />
      <Footer />

      {/* <Card/> */}

      {/* <Counter/> */}
      

    </div>
  );
};

export default App;
