import React, { useEffect } from 'react';

const classesData = [
  {
    title: 'Introduction to Programming',
    description: 'Learn the basics of programming using Python.',
    image: 'https://permutable.ai/wp-content/uploads/2024/03/19301.jpg',
  },
  {
    title: 'Web Development',
    description: 'Build modern websites using HTML, CSS, and JavaScript.',
    image: 'https://permutable.ai/wp-content/uploads/2024/03/19301.jpg',
  },
  {
    title: 'Data Science',
    description: 'Analyze data and build machine learning models.',
    image: 'https://permutable.ai/wp-content/uploads/2024/03/19301.jpg',
  },
  {
    title: 'Cybersecurity',
    description: 'Learn to protect systems and networks from attacks.',
    image: 'https://permutable.ai/wp-content/uploads/2024/03/19301.jpg',
  },
];

const ComputerClasses = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div className="bg-gray-100 py-8 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">Computer Classes</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {classesData.map((classItem, index) => (
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

export default ComputerClasses;
