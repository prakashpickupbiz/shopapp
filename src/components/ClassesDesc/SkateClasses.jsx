import React, { useEffect, useState } from 'react';

const SkateClasses = () => {
  // Dummy data for skate classes with images
  const [classes] = useState([
    {
      id: 1,
      name: 'Beginner Skateboarding',
      description: 'Learn the basics of skateboarding, including balance, pushing, and simple tricks.',
      duration: '1 hour',
      image: 'https://www.worldice.com/wp-content/uploads/2019/12/IMG_0275-002-460x295.jpg', // Replace with actual image URL
    },
    {
      id: 2,
      name: 'Intermediate Skateboarding',
      description: 'Improve your skills with more complex tricks and learn how to ride ramps.',
      duration: '1.5 hours',
      image: 'https://www.worldice.com/wp-content/uploads/2019/04/veronicapic2-460x295.jpg', // Replace with actual image URL
    },
    {
      id: 3,
      name: 'Advanced Skateboarding',
      description: 'Master advanced tricks and techniques for street and vert skating.',
      duration: '2 hours',
      image: 'https://www.worldice.com/wp-content/uploads/2020/01/IMG_7635-1-460x295.jpg', // Replace with actual image URL
    },
  ]);

  // State to manage the selected class
  const [selectedClass, setSelectedClass] = useState(null);

  // Function to handle class selection
  const handleClassClick = (skateClass) => {
    setSelectedClass(skateClass);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="p-6 bg-gray-100 ">
      <h1 className="text-3xl font-bold mb-6 text-center">Skate Classes</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((skateClass) => (
          <div
            key={skateClass.id}
            className="bg-white rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition overflow-hidden"
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

export default SkateClasses;
