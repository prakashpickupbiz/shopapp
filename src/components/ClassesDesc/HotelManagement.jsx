import React, { useEffect } from "react";
import { FaHotel, FaChartLine, FaBullhorn, FaLightbulb, FaUtensils, FaCertificate } from "react-icons/fa";

const HotelManagement = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  // Embedded JSON data
  const features = [
    {
      icon: "FaHotel",
      title: "Hotel Operations",
      description:
        "Understand the day-to-day operations of a hotel, from front desk management to housekeeping and beyond.",
    },
    {
      icon: "FaChartLine",
      title: "Financial Management",
      description:
        "Learn how to manage budgets, revenue, and cost optimization for a profitable hotel business.",
    },
    {
      icon: "FaBullhorn",
      title: "Marketing Strategies",
      description:
        "Master the art of attracting and retaining customers with modern marketing techniques and tools.",
    },
    {
      icon: "FaLightbulb",
      title: "Industry Insights",
      description:
        "Stay ahead with knowledge of the latest trends, technology, and innovations in the hospitality industry.",
    },
    {
      icon: "FaUtensils",
      title: "Culinary Basics",
      description:
        "Learn the essentials of food and beverage management to enhance the guest experience.",
    },
    {
      icon: "FaCertificate",
      title: "Certification",
      description:
        "Receive an industry-recognized certificate upon successful completion of the course.",
    },
  ];

  const testimonials = [
    {
      text: "This course gave me the skills and confidence to excel in hospitality. The instructors are amazing!",
      name: "Sarah M.",
    },
    {
      text: "The practical knowledge I gained here has been invaluable in my career as a hotel manager.",
      name: "David P.",
    },
    {
      text: "Highly recommend this course to anyone looking to start or grow their career in hospitality!",
      name: "Emily R.",
    },
  ];

  // Mapping icons dynamically
  const ICONS = {
    FaHotel: FaHotel,
    FaChartLine: FaChartLine,
    FaBullhorn: FaBullhorn,
    FaLightbulb: FaLightbulb,
    FaUtensils: FaUtensils,
    FaCertificate: FaCertificate,
  };



  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Hotel Management</h1>
          <p className="text-lg font-light mb-8">
            Master the art of hospitality with our comprehensive course. Learn essential skills, industry insights, and strategies to excel in hospitality.
          </p>
          <button className="bg-white text-blue-600 px-6 py-3 font-semibold rounded-lg shadow hover:bg-gray-100 transition">
            Enroll Now
          </button>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Course Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = ICONS[feature.icon];
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <p className="mt-4 text-gray-800 font-bold">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default HotelManagement;
