import React, { useEffect } from "react";
import { FaLaptopCode } from "react-icons/fa";

const classesData = [
  {
    title: "Introduction to Programming",
    description: "Learn the basics of programming using Python.",
    image: "https://permutable.ai/wp-content/uploads/2024/03/19301.jpg",
  },
  {
    title: "Web Development",
    description: "Build modern websites using HTML, CSS, and JavaScript.",
    image: "https://permutable.ai/wp-content/uploads/2024/03/19301.jpg",
  },
  {
    title: "Data Science",
    description: "Analyze data and build machine learning models.",
    image: "https://permutable.ai/wp-content/uploads/2024/03/19301.jpg",
  },
  {
    title: "Cybersecurity",
    description: "Learn to protect systems and networks from attacks.",
    image: "https://permutable.ai/wp-content/uploads/2024/03/19301.jpg",
  },
];

const ComputerClasses = () => {
  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>

      <div className="flex justify-around pt-5 m-10 gap-28"  >
        <div className="flex flex-col gap-4 ml-4" >
          <div className="text-6xl font-black">
            <h1 >Online </h1>
            <h1 className="text-blue-600" >Education</h1>
          </div >
          <div>
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, sunt
              quas deleniti tenetur iure suscipit! Eligendi esse ea eum ratione!
            </h3>
          </div>
          <div>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Try it now</button>
          </div>
        </div>
        <div>
          <div className=""><img className="wiggle  shadow-2xl border  rounded-2xl" src="https://cdn.pixabay.com/photo/2016/03/27/20/12/desk-1284085_1280.jpg" alt="" /></div>
        </div>
      </div>

      <div className="text-center mt-6">
        <h1 className="text-4xl">Find flexible and affordable options... </h1>
      </div>
      <div className="flex justify-center gap-6">

        <div className="flex  justify-center gap-40 m-6">
          <div className="bg-slate-200 p-3 rounded-full text-4xl"><FaLaptopCode /></div>
          <div className="bg-slate-200 p-3 rounded-full text-4xl"><FaLaptopCode /></div>
          <div className="bg-slate-200 p-3 rounded-full text-4xl"><FaLaptopCode /></div>

        </div>
      </div>


      <div className="bg-gray-100 py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Computer Classes
        </h1>
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
                <h2 className="text-xl font-semibold mb-2">
                  {classItem.title}
                </h2>
                <p className="text-gray-600 text-sm">{classItem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


    </>
  );
};

export default ComputerClasses;
