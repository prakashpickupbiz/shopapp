import React, { useState, useEffect } from 'react';

const TaekwondoClasses = () => {
  // Dummy data for Taekwondo classes
  const [classes] = useState([
    {
      id: 1,
      name: 'Beginner Taekwondo',
      description: 'An introductory class focusing on basic techniques, stances, and forms for beginners.',
      duration: '1 hour',
      image: 'https://delhitaekwondo.org/wp-content/uploads/2018/11/sparring_techniques-300x204.jpg',
    },
    {
      id: 2,
      name: 'Intermediate Taekwondo',
      description: 'This class builds on the basics, introducing new forms, kicks, and sparring techniques.',
      duration: '1.5 hours',
      image: 'https://koryo.club/wp-content/uploads/2023/05/Taekwondo-Belt-Tying-Guide.jpg',
    },
    {
      id: 3,
      name: 'Advanced Taekwondo',
      description: 'A high-level class focusing on advanced techniques, sparring strategies, and mastery of forms.',
      duration: '2 hours',
      image: 'https://www.delhitaekwondo.org/wp-content/uploads/2018/09/Advanced-taekwondo-kicks-400x189.jpg',
    },
  ]);

  // State to manage the selected class
  const [selectedClass, setSelectedClass] = useState(null);

  // Scroll to the top of the page when the component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Function to handle class selection
  const handleClassClick = (taekwondoClass) => {
    setSelectedClass(taekwondoClass);
  };

  return (
    <div className="p-6 bg-gray-100   ">
      <h1 className="text-3xl font-bold mb-6 text-center">Taekwondo Classes</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
  );
};

export default TaekwondoClasses;
