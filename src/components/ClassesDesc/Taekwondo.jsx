import React, { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import { MdSportsBaseball } from "react-icons/md";

const TaekwondoClasses = () => {
  const [classes] = useState([
    {
      id: 1,
      name: "Beginner Taekwondo",
      description:
        "An introductory class focusing on basic techniques, stances, and forms for beginners.",
      duration: "1 hour",
      image:
        "https://delhitaekwondo.org/wp-content/uploads/2018/11/sparring_techniques-300x204.jpg",
    },
    {
      id: 2,
      name: "Intermediate Taekwondo",
      description:
        "This class builds on the basics, introducing new forms, kicks, and sparring techniques.",
      duration: "1.5 hours",
      image:
        "https://koryo.club/wp-content/uploads/2023/05/Taekwondo-Belt-Tying-Guide.jpg",
    },
    {
      id: 3,
      name: "Advanced Taekwondo",
      description:
        "A high-level class focusing on advanced techniques, sparring strategies, and mastery of forms.",
      duration: "2 hours",
      image:
        "https://www.delhitaekwondo.org/wp-content/uploads/2018/09/Advanced-taekwondo-kicks-400x189.jpg",
    },
  ]);

  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Function to handle class selection
  const handleClassClick = (taekwondoClass) => {
    setSelectedClass(taekwondoClass);
  };

  return (
    <>
      <div className="bg-blue-200 flex flex-col lg:flex-row justify-between items-center p-6 m-4 rounded-lg shadow-lg">
        {/* Left Section: Taekwondo Information */}
        <div className="lg:w-1/2 mb-6 lg:mb-0">
          <div className="flex flex-col gap-6">
            {/* Heading */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-blue-950">
                Master the Art of Taekwondo!
              </h1>
            </div>
            {/* Subheading */}
            <div>
              <h2 className="text-lg md:text-xl text-gray-700">
                Join our Taekwondo classes to improve strength, discipline, and
                confidence.
              </h2>
            </div>
            {/* Buttons */}
            <div className="flex gap-5 flex-wrap">
              <button className="bg-blue-950 text-white py-3 px-8 rounded-2xl hover:bg-blue-800">
                Sign Up Now
              </button>
              <button className="bg-blue-950 text-white py-3 px-8 rounded-2xl hover:bg-blue-800">
                Learn More
              </button>
            </div>
            {/* Schedule and Details */}
            <div className="flex flex-col gap-2 mt-4">
              <div className="inline-flex items-center text-gray-700 font-medium">
                <GoClockFill className="mr-2" /> Classes: Mon, Wed, Fri - 6 PM
                to 8 PM
              </div>

              <div className="text-gray-700 font-medium flex items-center gap-2">
                <FaLocationDot />
                <span>East Street, Road, Camp, Pune, Maharashtra 411001, India</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section: Image */}
        <div className="lg:w-1/2 flex items-center justify-center">
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2022/4/DA/UY/EF/33605057/product-jpeg-500x500.jpg"
            alt="Taekwondo Class"
            className="h-64 object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="p-6 bg-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Taekwondo Classes
        </h1>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {classes.map((taekwondoClass) => (
            <div
              key={taekwondoClass.id}
              className="bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition overflow-hidden"
              onClick={() => handleClassClick(taekwondoClass)}
            >
              <img
                src={taekwondoClass.image}
                alt={taekwondoClass.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{taekwondoClass.name}</h2>
                <p className="text-gray-600">Duration: {taekwondoClass.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {selectedClass && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-2">{selectedClass.name}</h2>
            <p className="text-gray-700 mb-2">{selectedClass.description}</p>
            <p className="text-gray-600">Duration: {selectedClass.duration}</p>
          </div>
        )}
      </div>

      <div className="flex justify-center my-8">
        <h1 className="text-3xl font-bold mb-6">Choose from Taekwondo Teachers</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {/* Example of Taekwondo Teachers */}
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-3 bg-blue-200 rounded-lg p-4 shadow-lg w-full sm:w-64 lg:w-72"
          >
            <div>
              <img
                className="w-16 h-16 rounded-full"
                src="https://c.superprof.com/i/m/24530811/300/20230112175201/24530811.webp"
                alt=""
              />
            </div>
            <div>
              <h2 className="font-bold">Rahul Yadav</h2>
              <h5>5 Years of Experience</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaekwondoClasses;
