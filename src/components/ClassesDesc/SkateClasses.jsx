import React, { useEffect, useState } from "react";
import { IoRibbon } from "react-icons/io5";
import { motion } from "framer-motion"; // Import Framer Motion
import SocialAchievements from "./SocialAchievements";
import { FaExternalLinkSquareAlt } from "react-icons/fa";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const SkateClasses = () => {
  const [classes] = useState([
    {
      id: 1,
      name: "Beginner Skateboarding",
      description: "Learn the basics of skateboarding, including balance, pushing, and simple tricks.",
      duration: "1 hour",
      image: "https://www.worldice.com/wp-content/uploads/2019/12/IMG_0275-002-460x295.jpg",
    },
    {
      id: 2,
      name: "Intermediate Skateboarding",
      description: "Improve your skills with more complex tricks and learn how to ride ramps.",
      duration: "1.5 hours",
      image: "https://www.worldice.com/wp-content/uploads/2019/04/veronicapic2-460x295.jpg",
    },
    {
      id: 3,
      name: "Advanced Skateboarding",
      description: "Master advanced tricks and techniques for street and vert skating.",
      duration: "2 hours",
      image: "https://www.worldice.com/wp-content/uploads/2020/01/IMG_7635-1-460x295.jpg",
    },
  ]);

  const [selectedClass, setSelectedClass] = useState(null);

  const handleClassClick = (skateClass) => {
    setSelectedClass(skateClass);
  };

  // Define the variant for the selected class details
  const detailVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 300 } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, transition: { duration: 0.3 } },
    tap: { scale: 0.95, transition: { duration: 0.2 } },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.8, type: "spring", stiffness: 100 } },
    initial: { opacity: 0, x: -20 },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <div className="mt-5 flex flex-col items-center justify-center">
        <motion.span
          className="inline-flex items-center justify-center bg-slate-200 w-auto m-auto mt-4 p-2 rounded-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-500 font-bold text-2xl">
            <IoRibbon />
          </span>
          <span className="ml-2 text-blue-500 font-bold">
            Skateboarding Classes: Learn, Progress, and Master
          </span>
        </motion.span>

        <motion.h1
          className="ml-2 text-4xl p-3 font-bold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Skateboard with <span className="text-blue-500">Confidence</span>
        </motion.h1>

        <motion.h5
          className="ml-2 text-xl inline-flex text-center items-center justify-center w-3/4 my-6"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Whether you're just starting out or looking to level up your skills, our skateboarding
          classes are designed to meet you where you are. From the basics of balance and pushing to
          mastering complex tricks and ramps, we provide a fun and engaging learning environment
          for all levels. Our expert instructors are dedicated to helping you progress at your own
          pace, building confidence with each session.
        </motion.h5>

        <div className="flex gap-4 mb-4">
          <motion.button
            className="bg-blue-950 text-white p-2 rounded-full px-4"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="whileInView"
          >
            CONTACT US <IoIosArrowDroprightCircle className="inline text-xl" />
          </motion.button>
          <motion.button
            className="bg-slate-100 border-2 p-2 rounded-full px-4"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial="initial"
            animate="whileInView"
          >
            Learn more <FaExternalLinkSquareAlt className="inline" />
          </motion.button>
        </div>
      </div>

      <SocialAchievements />

      <motion.div
        className="p-6 bg-gray-100"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger animation once 20% of the element is in view
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Skate Classes</h1>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((skateClass) => (
            <motion.div
              key={skateClass.id}
              className="bg-white rounded-lg shadow-md cursor-pointer transition overflow-hidden"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }} // Trigger animation once element is 30% in view
              onClick={() => handleClassClick(skateClass)}
            >
              <img
                src={skateClass.image}
                alt={skateClass.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{skateClass.name}</h2>
                <p className="text-gray-600">Duration: {skateClass.duration}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {selectedClass && (
          <motion.div
            className="mt-8 p-6 bg-white rounded-lg shadow-md"
            variants={detailVariants}
            initial="hidden"
            animate="visible"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // Trigger animation once 30% of the details div is visible
          >
            <h2 className="text-2xl font-bold mb-2">{selectedClass.name}</h2>
            <p className="text-gray-700 mb-2">{selectedClass.description}</p>
            <p className="text-gray-600">Duration: {selectedClass.duration}</p>
          </motion.div>
        )}
      </motion.div>

    </>
  );
};

export default SkateClasses;
