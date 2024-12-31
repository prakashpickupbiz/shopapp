// Import necessary dependencies
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


// JSON Data
const data = {
  heroSection: {
    title: "Experience the Joy of Horse Riding",
    description:
      "Discover the best horse-riding classes with professional trainers and a safe environment.",
    buttonText: "Enroll Now",
  },
  whyJoinUs: [
    {
      title: "Expert Trainers",
      description:
        "Learn from experienced professionals dedicated to improving your skills.",
      animation: "zoom-in",
    },
    {
      title: "Safe Environment",
      description:
        "Enjoy well-maintained facilities ensuring the safety of all participants.",
      animation: "zoom-in",
      delay: 100,
    },
    {
      title: "For All Levels",
      description:
        "From beginners to advanced riders, we have sessions tailored for everyone.",
      animation: "zoom-in",
      delay: 200,
    },
  ],
  classSchedule: [
    { day: "Monday", time: "10:00 AM - 11:30 AM", level: "Beginner" },
    { day: "Wednesday", time: "1:00 PM - 2:30 PM", level: "Intermediate" },
    { day: "Friday", time: "3:00 PM - 4:30 PM", level: "Advanced" },
  ],
  testimonials: [
    {
      text: "The best horse-riding experience I've ever had! Highly recommend it to everyone.",
      author: "Sachin",
      delay: 100,
    },
    {
      text: "Amazing trainers and facilities. My riding skills improved significantly!",
      author: "Ruhi",
      delay: 200,
    },
    {
      text: "A safe and fun environment for all ages. My kids love it!",
      author: "Ravi",
      delay: 300,
    },
  ],
};

const HorseRiding = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="p-8 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 text-gray-800 font-[Nunito] min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-blue-600 text-white py-20 px-8 text-center mb-16 rounded-lg shadow-lg"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-extrabold mb-4">{data.heroSection.title}</h1>
        <p className="text-lg font-medium mb-8">{data.heroSection.description}</p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-md hover:bg-gray-100 transition">
          {data.heroSection.buttonText}
        </button>
      </div>

      {/* Why Join Us Section */}
      <section className="mb-16">
        <h2
          className="text-3xl font-semibold text-blue-600 mb-6"
          data-aos="fade-right"
        >
          Why Join Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.whyJoinUs.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              data-aos={item.animation}
              data-aos-delay={item.delay || 0}
            >
              <h3 className="text-xl font-bold text-blue-700 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Class Schedule Section */}
      <section className="mb-16">
        <h2
          className="text-3xl font-semibold text-blue-600 mb-6"
          data-aos="fade-left"
        >
          Class Schedule
        </h2>
        <div
          className="overflow-x-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <table className="table-auto w-full border-collapse shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="border border-blue-600 px-6 py-3 text-left">
                  Day
                </th>
                <th className="border border-blue-600 px-6 py-3 text-left">
                  Time
                </th>
                <th className="border border-blue-600 px-6 py-3 text-left">
                  Level
                </th>
              </tr>
            </thead>
            <tbody>
              {data.classSchedule.map((schedule, index) => (
                <tr
                  key={index}
                  className="odd:bg-blue-100 even:bg-blue-50"
                >
                  <td className="border border-blue-400 px-6 py-3">
                    {schedule.day}
                  </td>
                  <td className="border border-blue-400 px-6 py-3">
                    {schedule.time}
                  </td>
                  <td className="border border-blue-400 px-6 py-3">
                    {schedule.level}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="mb-16">
        <h2
          className="text-3xl font-semibold text-blue-600 mb-6 text-center"
          data-aos="fade-up"
        >
          What Our Students Say
        </h2>
        <div className="flex gap-6 overflow-x-auto px-4">
          {data.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white p-6 rounded-lg shadow-md"
              data-aos="fade-up"
              data-aos-delay={testimonial.delay}
            >
              <p className="text-gray-700">{testimonial.text}</p>
              <h4 className="mt-4 text-blue-700 font-bold">
                - {testimonial.author}
              </h4>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer
        className="text-center py-12 bg-blue-700 text-white rounded-lg"
        data-aos="fade-up"
      >
        <p className="text-lg">
          Sign up today and experience the joy of horse riding!
        </p>
        <button className="mt-6 bg-white text-blue-600 px-8 py-3 rounded-full font-bold shadow-md hover:bg-gray-100 transition">
          Join Now
        </button>
      </footer>
    </div>
  );
};

export default HorseRiding;
