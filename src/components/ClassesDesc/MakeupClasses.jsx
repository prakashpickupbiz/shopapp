import React from 'react';

const MakeupClasses = () => {
  return (
    <div className="bg-blue-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold">Discover the Art of Makeup</h1>
          <p className="mt-4 text-lg">
            Join our professional makeup classes and unlock your full potential.
          </p>
          <button className="mt-6 bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </header>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-blue-600">Why Choose Us?</h2>
          <p className="mt-4 text-gray-700">
            Our makeup classes are designed for all skill levels. Whether you
            are a beginner exploring the basics or an advanced learner perfecting your craft,
            our expert instructors are here to guide you. With hands-on training,
            you will learn industry-standard techniques and trends.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-600">
                Certified Instructors
              </h3>
              <p className="mt-2 text-gray-700">
                Learn from top professionals with years of experience.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-600">
                Hands-On Training
              </h3>
              <p className="mt-2 text-gray-700">
                Practice with the latest tools and techniques.
              </p>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold text-blue-600">
                Flexible Schedules
              </h3>
              <p className="mt-2 text-gray-700">
                Join classes that fit your busy lifestyle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="bg-blue-100 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-blue-600 text-center">
            Our Popular Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">
                Basic Makeup Techniques
              </h3>
              <p className="mt-2 text-gray-700">
                Learn the fundamentals of flawless makeup application.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">
                Advanced Bridal Makeup
              </h3>
              <p className="mt-2 text-gray-700">
                Master the art of stunning bridal looks.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">
                Special Effects Makeup
              </h3>
              <p className="mt-2 text-gray-700">
                Create realistic special effects for films and events.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">
                Everyday Glam Looks
              </h3>
              <p className="mt-2 text-gray-700">
                Perfect your daily makeup routine with a touch of glam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-blue-600 text-center">
          What Our Students Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700">
              "The classes were amazing! I learned so much and gained
              confidence in my skills."
            </p>
            <h3 className="mt-4 text-blue-600 font-semibold">- Sarah </h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700">
              "The instructors were patient and professional. Highly recommend
              these courses!"
            </p>
            <h3 className="mt-4 text-blue-600 font-semibold">- Aakash</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="italic text-gray-700">
              "I loved the hands-on training. It felt like working in a real
              studio."
            </p>
            <h3 className="mt-4 text-blue-600 font-semibold">- Jamil</h3>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold">Ready to Transform Your Skills?</h2>
          <p className="mt-4 text-lg">
            Enroll in our makeup classes today and start your journey!
          </p>
          <button className="mt-6 bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-100 transition">
            Enroll Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 Makeup Classes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MakeupClasses;
