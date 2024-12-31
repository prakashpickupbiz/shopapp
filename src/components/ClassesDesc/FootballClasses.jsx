import React, { useEffect } from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaPodcast } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const FootballClasses = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const socialLinks = [
    { icon: <FaInstagram />, name: "Instagram", handle: "@onefootball" },
    { icon: <FaFacebook />, name: "Facebook", handle: "@OneFootball.de" },
    { icon: <FaTwitter />, name: "Twitter", handle: "@OneFootball" },
    { icon: <FaYoutube />, name: "Youtube", handle: "@OneFootball" },
    { icon: <FaTiktok />, name: "TikTok", handle: "@onefootball" },
    { icon: <FaPodcast />, name: "AudioBoom", handle: "@OneFootball" },
  ];

  const classes = [
    { name: "Dribbling" },
    { name: "Shooting" },
    { name: "Defensive Tactics" },
    { name: "Passing Accuracy" },
    { name: "Fitness Training" },
    { name: "Defensive Tactics" },
  ];

  const testimonials = [
    {
      name: "PC Prajapat",
      text: "OneFootball classes took my game to the next level! The trainers are knowledgeable and motivating.",
    },
    {
      name: "Amjad Khan",
      text: "I love the personalized approach! I’ve seen noticeable improvements in my skills.",
    },
    {
      name: "Rahul Roy",
      text: "The fitness training sessions are outstanding. They helped me build strength and agility.",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen text-gray-900">
      {/* Hero Section */}
      <section className="relative text-center py-16 px-6 rounded ">
        <div className="relative z-10" data-aos="fade-up">
          <h1 className="text-4xl font-bold mb-4 ">Welcome to OneFootball Classes</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto">
            Learn and improve your football skills with world-class trainers. Join us to take your game to the next level.
          </p>
          <button
            className="mt-6 px-6 py-3  bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 hover:text-white transition duration-300"
            data-aos="zoom-in"
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-12 rounded px-6 bg-gradient-to-br from-blue-700 to-blue-500 m-3">
        <h2 className="text-2xl font-bold mb-6 text-white" data-aos="fade-right">
          Follow OneFootball
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {socialLinks.map((link, index) => (
            <div
              className="bg-blue-950  p-4 flex items-center border-l-4 border-blue-700
                        transform transition-transform duration-500 hover:scale-105 hover:shadow-xl rounded-lg"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-3xl text-white mr-4">{link.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-white">{link.name}</h3>
                <p className="text-sm text-blue-200">{link.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Classes Section */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900" data-aos="fade-right">
          Popular Classes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((classItem, index) => (
            <div
              className="relative bg-gradient-to-br from-blue-700 to-blue-500 p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">{classItem.name}</h3>
              <p className="text-sm text-blue-200">
                Master {classItem.name.toLowerCase()} with our specialized classes designed for all skill levels.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 bg-gray-200">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900" data-aos="fade-left">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <p className="text-sm text-gray-700 mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-blue-500">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-gradient-to-br from-blue-600 to-blue-700">
        <h2 className="text-2xl font-bold mb-6 text-center text-white" data-aos="fade-up">
          Why Choose OneFootball?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Experienced Coaches</h3>
            <p className="text-sm text-gray-700">
              Our coaches are experts in football training, with years of experience coaching at all levels.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Tailored Training Plans</h3>
            <p className="text-sm text-gray-700">
              Each student gets a personalized training plan to help them focus on areas that need improvement.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-lg shadow-lg text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Flexible Schedule</h3>
            <p className="text-sm text-gray-700">
              We offer flexible class schedules that fit around your busy life, ensuring you never miss a session.
            </p>
          </div>
        </div>
      </section>


      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900" data-aos="fade-left">
          Meet Our Coaches
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example coach data */}
          <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Coach Mike</h3>
            <p className="text-sm text-gray-700">Specialized in offensive tactics and shooting drills.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Coach Sarah</h3>
            <p className="text-sm text-gray-700">Focuses on fitness training and overall player development.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">Coach John</h3>
            <p className="text-sm text-gray-700">Expert in defensive tactics and team strategy.</p>
          </div>
        </div>
      </section>


      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center" data-aos="fade-up">
          Contact Us
        </h2>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-blue-800 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            data-aos="fade-up"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-blue-800 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-blue-800 text-white border border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            data-aos="fade-up"
            data-aos-delay="200"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
            data-aos="zoom-in"
          >
            Send Messagee
          </button>
        </form>
      </section>
    </div>
  );
};

export default FootballClasses;
