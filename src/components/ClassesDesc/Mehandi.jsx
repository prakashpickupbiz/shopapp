import React, { useEffect } from 'react';
import { motion } from 'framer-motion'; // Install this library using: npm install framer-motion

const mehndiClassesData = [
  {
    title: 'Basic Mehndi Design',
    description: 'Learn the basics of traditional and modern Mehndi designs.',
    image: 'https://bibinzmakeupacademy.com/wp-content/uploads/2023/09/mehndi-course-in-kochi.jpg',
    duration: '4 weeks',
    level: 'Beginner',
    AI_Tips: 'Start with simple floral patterns to master line precision.',
  },
  {
    title: 'Bridal Mehndi Design',
    description: 'Specialized Mehndi designs for brides, perfect for weddings.',
    image: 'https://bibinzmakeupacademy.com/wp-content/uploads/2023/09/mehndi-course-in-kochi.jpg',
    duration: '6 weeks',
    level: 'Advanced',
    AI_Tips: 'Experiment with intricate motifs like peacocks and mandalas.',
  },
  {
    title: 'Arabic Mehndi Design',
    description: 'Learn intricate Arabic-style Mehndi designs for hands and feet.',
    image: 'https://bibinzmakeupacademy.com/wp-content/uploads/2023/09/mehndi-course-in-kochi.jpg',
    duration: '5 weeks',
    level: 'Intermediate',
    AI_Tips: 'Focus on bold strokes and negative spaces for clean designs.',
  },
  {
    title: 'Mehndi for Special Occasions',
    description: 'Custom designs for festivals, parties, and other special occasions.',
    image: 'https://bibinzmakeupacademy.com/wp-content/uploads/2023/09/mehndi-course-in-kochi.jpg',
    duration: '3 weeks',
    level: 'All Levels',
    AI_Tips: 'Combine geometric and traditional elements for versatile looks.',
  },
];

const Mehandi = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-800 via-indigo-700 to-blue-600 text-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative text-center py-20 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.pixabay.com/photo/2017/11/03/23/12/henna-2916596_1280.jpg')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <motion.h1
            className="text-5xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Master the Art of Mehndi
          </motion.h1>
          <motion.p
            className="text-lg text-gray-200 max-w-xl mx-auto mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Elevate your creativity with hands-on classes and AI-guided tips, where tradition meets innovation.
          </motion.p>
          <motion.button
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg rounded-full hover:scale-110 transform transition-transform"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Learning Now
          </motion.button>
        </div>
      </motion.section>

      {/* Courses Section */}
      <section className="py-12 px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Explore Our Courses
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {mehndiClassesData.map((classItem, index) => (
            <motion.div
              key={index}
              className="bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden transform transition-transform hover:-translate-y-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                className="w-full h-48 object-cover"
                src={classItem.image}
                alt={classItem.title}
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{classItem.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{classItem.description}</p>
                <p className="text-gray-500 mb-2">
                  <strong>Duration:</strong> {classItem.duration}
                </p>
                <p className="text-gray-500 mb-4">
                  <strong>Level:</strong> {classItem.level}
                </p>
                <p className="text-blue-600 text-sm italic mb-4">
                  <strong>AI Tip:</strong> {classItem.AI_Tips}
                </p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-full hover:bg-blue-700">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <motion.section
        className="py-12 bg-indigo-700 text-white text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p>Learn from seasoned Mehndi artists with years of experience.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Innovative Techniques</h3>
            <p>Master unique designs with modern tools and AI-powered tips.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p>Learn at your own pace with both in-person and online classes.</p>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold mb-6">Join the Mehndi Revolution</h2>
        <p className="text-lg mb-6 text-gray-200">
          Don’t just learn Mehndi, master it! With personalized lessons, AI-guided tips, and a supportive community, your creativity will know no bounds.
        </p>
        <motion.button
          className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-lg rounded-full hover:scale-110 transform transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Enroll Now
        </motion.button>
      </motion.section>

      <footer className="py-6 text-center text-gray-400">
        &copy; 2050 Mehndi Academy. All rights reserved.
      </footer>
    </div>
  );
};

export default Mehandi;
