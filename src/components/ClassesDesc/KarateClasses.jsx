import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Dummy data for Karate classes
const karateClasses = [
  {
    name: "Beginner Karate",
    description: "Start your journey with the basics of Karate.",
    imageUrl: "https://3.imimg.com/data3/GP/RU/MY-9294818/karate-class-500x500.jpg"
  },
  {
    name: "Intermediate Karate",
    description: "Take your skills to the next level with intermediate Karate.",
    imageUrl: "https://via.placeholder.com/400x250?text=Intermediate+Karate"
  },
  {
    name: "Advanced Karate",
    description: "Master Karate with advanced techniques and strategies.",
    imageUrl: "https://via.placeholder.com/400x250?text=Advanced+Karate"
  },
  {
    name: "Karate for Kids",
    description: "A fun and engaging Karate class designed for kids.",
    imageUrl: "https://via.placeholder.com/400x250?text=Karate+for+Kids"
  },
  {
    name: "Karate Self-Defense",
    description: "Learn Karate techniques that help in self-defense.",
    imageUrl: "https://via.placeholder.com/400x250?text=Karate+Self-Defense"
  },
  {
    name: "Karate Fitness",
    description: "Combine Karate techniques with fitness exercises.",
    imageUrl: "https://via.placeholder.com/400x250?text=Karate+Fitness"
  },
];

export default function KarateClasses() {
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, []); // Empty dependency array ensures this effect runs only once when component mounts

  return (
    <div className="bg-gradient-to-r from-blue-50 to-white min-h-screen py-12">
      <div className="max-w-screen-xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center text-blue-600 mb-12">Karate Classes</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {karateClasses.map((classItem, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              {/* Image with curved border radius */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <img
                  src={classItem.imageUrl}
                  alt={classItem.name}
                  className="w-full h-56 object-cover transition-all transform hover:scale-110"
                />
              </div>

              {/* Class Information */}
              <h3 className="text-3xl font-semibold text-blue-700 mb-4">{classItem.name}</h3>
              <p className="text-gray-600 mb-6">{classItem.description}</p>

              <Link to={`/enroll/karate/${classItem.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-8 rounded-full shadow-md hover:shadow-xl transition-all transform hover:scale-105">
                  Enroll Now
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
