import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaUsers, FaStar, FaBookOpen, FaAward } from 'react-icons/fa';

export default function TuitionCentre() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const cards = [
    {
      title: 'Expert Tutors',
      icon: <FaChalkboardTeacher size={40} />,
      description: 'Learn from the best tutors in the industry.',
    },
    {
      title: 'Expert Tutors',
      icon: <FaChalkboardTeacher size={40} />,
      description: 'Learn from the best tutors in the industry.',
    },
    {
      title: 'Interactive Sessions',
      icon: <FaUsers size={40} />,
      description: 'Engage in group discussions and activities.',
    },
    {
      title: 'Excellent Results',
      icon: <FaStar size={40} />,
      description: 'Achieve top grades with our proven methods.',
    },
    {
      title: 'Comprehensive Materials',
      icon: <FaBookOpen size={40} />,
      description: 'Access well-organized and detailed study materials.',
    },
    {
      title: 'Award-Winning Programs',
      icon: <FaAward size={40} />,
      description: 'Join programs recognized for their excellence.',
    },
  ];

  // Typing effect with cursor
  const [text, setText] = useState("");
  const fullText = "Welcome to Tuition Centre";

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index += 1;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, 150); // Typing speed in ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-400 text-white py-20 w-full">
        <div className="max-w-7xl mx-auto text-center px-6">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <span>{text}</span>
            <span className="cursor-blink text-white">|</span> {/* Blinking cursor */}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Empowering students to excel with expert guidance and personalized support.
          </motion.p>
          <motion.button
            className="bg-white text-blue-500 px-8 py-3 rounded-md shadow-lg hover:bg-gray-200 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="text-blue-500 mb-4">{card.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Slider Section */}
      <section className="bg-blue-50 py-12 w-full">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Programs</h2>
          <div className="overflow-hidden relative">
            <div className="flex gap-8 animate-infinite-scroll justify-center">
              {/* Original set of cards */}
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r p-8 w-72 flex-shrink-0 text-center rounded-2xl shadow-2xl hover:shadow-xl transition-shadow duration-300 from-${['blue', 'green', 'pink', 'purple', 'orange'][index]}-400 to-${['blue', 'green', 'pink', 'purple', 'orange'][index]}-600 transform hover:scale-105`}
                >
                  <div className="text-5xl text-white mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                  <p className="text-white text-sm opacity-90">{card.description}</p>
                </div>
              ))}
              {/* Duplicate set of cards for seamless looping */}
              {cards.map((card, index) => (
                <div
                  key={`duplicate-${index}`}
                  className={`bg-gradient-to-r p-8 w-72 flex-shrink-0 text-center rounded-2xl shadow-2xl hover:shadow-xl transition-shadow duration-300 from-${['blue', 'green', 'pink', 'purple', 'orange'][index]}-400 to-${['blue', 'green', 'pink', 'purple', 'orange'][index]}-600 transform hover:scale-105`}
                >
                  <div className="text-5xl text-white mb-4">{card.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{card.title}</h3>
                  <p className="text-white text-sm opacity-90">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
  .animate-infinite-scroll {
    display: flex;
    gap: 8px;
    animation: scroll 15s linear infinite;
    flex-wrap: nowrap;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`}</style>



      {/* Call to Action */}
      <section className="bg-blue-400 text-white py-16 w-full">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us Today</h2>
          <p className="text-lg mb-8">
            Take the first step towards academic excellence with our trusted programs.
          </p>
          <motion.button
            className="bg-white text-blue-500 px-8 py-3 rounded-md shadow-lg hover:bg-gray-200 font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Enroll Now
          </motion.button>
        </div>
      </section>

    </div>


  );
}
