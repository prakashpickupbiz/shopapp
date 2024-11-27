import React from "react";
import { motion } from "framer-motion";

export default function FashionDesigning() {
  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6">
        <div className="container mx-auto flex justify-between items-center">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            FashionDesign
          </motion.h1>
          <nav className="space-x-6">
            {["Collections", "About", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-blue-400"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 * index }}
              >
                {item}
              </motion.a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 text-center py-20">
        <div className="container mx-auto">
          <motion.h2
            className="text-5xl font-extrabold mb-4 text-blue-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Embrace Your Unique Style
          </motion.h2>
          <motion.p
            className="text-lg mb-8 text-blue-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Experience modern fashion that blends elegance with creativity.
          </motion.p>
          <motion.a
            href="#collections"
            className="bg-blue-900 text-white px-8 py-4 rounded-full hover:bg-blue-700"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          >
            Explore Collections
          </motion.a>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-white">
        <div className="container mx-auto">
          <motion.h3
            className="text-4xl font-bold text-center mb-10 text-blue-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Collections
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { id: 1, name: "Spring Collection", image: "https://via.placeholder.com/300" },
              { id: 2, name: "Summer Collection", image: "https://via.placeholder.com/300" },
              { id: 3, name: "Winter Collection", image: "https://via.placeholder.com/300" },
            ].map((collection, index) => (
              <motion.div
                key={collection.id}
                className="border rounded-lg overflow-hidden shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ scale: 1.05 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
              >
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h4 className="text-xl font-semibold text-blue-900">
                    {collection.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-blue-100">
        <div className="container mx-auto text-center">
          <motion.h3
            className="text-4xl font-bold mb-6 text-blue-900"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            About Us
          </motion.h3>
          <motion.p
            className="text-lg max-w-2xl mx-auto text-blue-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            FashionDesign is where contemporary style meets individuality. Our
            mission is to create innovative designs that make you stand out
            while staying timelessly elegant.
          </motion.p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            &copy; 2024 FashionDesign. All Rights Reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
