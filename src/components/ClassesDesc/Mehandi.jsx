import React, { useEffect } from 'react';

const mehndiClassesData = [
  {
    title: 'Basic Mehndi Design',
    description: 'Learn the basics of traditional and modern Mehndi designs.',
    image: 'https://bibinzmakeupacademy.com/wp-content/uploads/2023/09/mehndi-course-in-kochi.jpg', // Mehndi hand design image
  },
  {
    title: 'Bridal Mehndi Design',
    description: 'Specialized Mehndi designs for brides, perfect for weddings.',
    image: 'https://bibinzmakeupacademy.com/wp-content/uploads/2023/09/mehndi-course-in-kochi.jpg', // Bridal Mehndi design
  },
  {
    title: 'Arabic Mehndi Design',
    description: 'Learn intricate Arabic-style Mehndi designs for hands and feet.',
    image: 'https://bibinzmakeupacademy.com/wp-content/uploads/2023/09/mehndi-course-in-kochi.jpg', // Arabic Mehndi design
  },
  {
    title: 'Mehndi for Special Occasions',
    description: 'Custom designs for festivals, parties, and other special occasions.',
    image: 'https://bibinzmakeupacademy.com/wp-content/uploads/2023/09/mehndi-course-in-kochi.jpg', // Special occasion Mehndi
  },
];

const Mehandi = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Mehndi Classes</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {mehndiClassesData.map((classItem, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:-translate-y-2"
          >
            <img
              className="w-full h-40 object-cover"
              src={classItem.image}
              alt={classItem.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{classItem.title}</h2>
              <p className="text-gray-600 text-sm">{classItem.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mehandi;
