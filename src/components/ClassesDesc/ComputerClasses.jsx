import React, { useEffect, useState } from "react";
import { FaLaptopCode, FaChalkboardTeacher, FaShieldAlt, FaPlus, FaMinus } from "react-icons/fa";

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

const testimonials = [
  {
    name: "John Doe",
    feedback: "The courses are well-structured and easy to follow. Highly recommend!",
    image: "https://via.placeholder.com/100",
  },
  {
    name: "Jane Smith",
    feedback: "I landed my first job in web development thanks to these classes!",
    image: "https://via.placeholder.com/100",
  },
];

const faqData = [
  {
    question: "What is the duration of each course?",
    answer: "Each course is self-paced and can be completed in 4-6 weeks on average.",
  },
  {
    question: "Are these courses beginner-friendly?",
    answer: "Yes, all our courses are designed to cater to both beginners and experienced learners.",
  },
  {
    question: "What certifications do you offer?",
    answer: "We provide certificates of completion for all our courses.",
  },
];

const ComputerClasses = () => {
  const [activeFAQ, setActiveFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQ(activeFAQ === index ? null : index);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="flex justify-around pt-5 m-10 gap-28 items-center">
        <div className="flex flex-col gap-6 ml-4 max-w-md">
          <div className="text-6xl font-black">
            <h1>Online</h1>
            <h1 className="text-blue-600">Education</h1>
          </div>
          <p className="text-gray-600">
            Unlock your potential with flexible and affordable online classes. Learn at your own pace from the comfort of your home.
          </p>
          <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-6 py-3">
            Get Started Now
          </button>
        </div>
        <div>
          <img
            className="shadow-2xl border rounded-2xl wiggle max-w-md"
            src="https://cdn.pixabay.com/photo/2016/03/27/20/12/desk-1284085_1280.jpg"
            alt="Online Education"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-6">Why Choose Us?</h1>
        <div className="flex justify-center gap-12 m-6">
          <div className="bg-blue-100 p-5 rounded-full text-4xl flex items-center justify-center">
            <FaLaptopCode />
          </div>
          <div className="bg-blue-100 p-5 rounded-full text-4xl flex items-center justify-center">
            <FaChalkboardTeacher />
          </div>
          <div className="bg-blue-100 p-5 rounded-full text-4xl flex items-center justify-center">
            <FaShieldAlt />
          </div>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto">
          From expert instructors to industry-relevant content, we provide everything you need to succeed in your learning journey.
        </p>
      </div>

      {/* Classes Section */}
      <div className="bg-gray-100 py-10 px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Our Computer Classes</h1>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
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

      {/* Testimonials Section */}
      <div className="bg-white py-10 px-6">
        <h1 className="text-3xl font-bold text-center mb-8">What Our Students Say</h1>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-lg p-6 shadow-md max-w-sm text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="italic text-gray-600">"{testimonial.feedback}"</p>
              <h3 className="mt-4 font-semibold text-gray-800">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-10 px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div key={index} className="mb-4 border-b pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                {activeFAQ === index ? (
                  <FaMinus className="text-blue-600" />
                ) : (
                  <FaPlus className="text-blue-600" />
                )}
              </div>
              {activeFAQ === index && (
                <p className="text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Ready to Start Your Journey?</h1>
        <p className="mb-6">Sign up now and take the first step towards achieving your dreams!</p>
        <button className="bg-white text-blue-500 font-semibold rounded-full text-lg px-6 py-3 shadow-md hover:bg-gray-200">
          Join Us Today
        </button>
      </div>
    </>
  );
};

export default ComputerClasses;
