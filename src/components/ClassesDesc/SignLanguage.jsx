import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SignLanguage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="">
      {/* Hero Section */}
      <header className="bg-blue-600 text-white text-center py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome to Sign Language Learning</h1>
          <p className="text-lg mb-6">Empowering communication through the beauty of Sign Language.</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 hover:text-white transition duration-300">
            Get Started
          </button>
        </div>
      </header>

      {/* Image Slider */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 ">
          <Slider {...sliderSettings}>
            <div className='px-2'>
              <img
                src="https://api.upskillstutor.com/news_image/zM/PX/zMPXQRhbUm4cbngEbtGwievF6I7gVDD0BteT8HQF.jpg"
                alt="Learn Sign Language"
                className="w-96 h-60 rounded-lg"
              />
            </div>
            <div className='px-2'>
              <img
                src="https://universeofmemory.com/wp-content/uploads/2019/08/american-sign.jpg"
                alt="Communicate Effectively"
                className="w-96 h-60 rounded-lg"
              />
            </div>
            <div className='px-2'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqfU-mL_fe6UHgju7d12GYKOVVpcLjyL6gdg&s"
                alt="Connect With Community"
                className="w-96 h-60 rounded-lg"
              />
            </div>
          </Slider>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Why Learn Sign Language?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Inclusive Communication</h3>
              <p>Bridge the gap and connect with the deaf community.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Boost Cognitive Skills</h3>
              <p>Learning sign language enhances memory and multitasking.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Career Opportunities</h3>
              <p>Stand out with unique skills in education, interpretation, and more.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path Section */}
      <section className="py-12 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Our Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Beginner</h3>
              <p>Start with the basics and learn essential signs for daily communication.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Intermediate</h3>
              <p>Enhance your vocabulary and improve your signing speed and accuracy.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Advanced</h3>
              <p>Master complex signs and learn to interpret for others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6">Sign up now and begin learning sign language today!</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Sign Up
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Sign Language Learning. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default SignLanguage;
