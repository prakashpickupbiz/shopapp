import React from 'react';

const GymClasses = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <header className="relative bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center">
              Transform Your Fitness Journey
            </h1>
            <p className="mt-4 text-lg md:text-xl text-center">
              Join our gym classes and unlock your full potential.
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-lg font-medium">
              Explore Classes
            </button>
          </div>
        </div>
      </header>

      {/* Class Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">Our Classes</h2>
          <p className="text-center text-gray-600 mt-2">Choose from a variety of fitness classes to suit your goals.</p>
          <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Yoga", description: "Enhance flexibility and find inner peace.", icon: "🧘" },
              { title: "Strength Training", description: "Build muscle and increase endurance.", icon: "🏋️" },
              { title: "Cardio Blast", description: "Boost your energy with high-intensity workouts.", icon: "🏃" },
              { title: "Pilates", description: "Improve posture and core strength.", icon: "🧘" },
              { title: "Zumba", description: "Dance your way to fitness.", icon: "💃" },
              { title: "Boxing", description: "Learn self-defense and improve agility.", icon: "🥊" },
            ].map((classItem, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <div className="text-5xl">{classItem.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{classItem.title}</h3>
                <p className="mt-2 text-gray-600">{classItem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans and Pricing Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">Membership Plans</h2>
          <p className="text-center text-gray-600 mt-2">Affordable plans tailored to your fitness goals.</p>
          <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { plan: "Basic", price: "₹1,999", features: ["Access to gym", "1 class per week"] },
              { plan: "Standard", price: "₹3,999", features: ["Access to gym", "3 classes per week", "Free fitness assessment"] },
              { plan: "Premium", price: "₹5,999", features: ["Access to gym", "Unlimited classes", "Personal trainer support", "Free diet plan"] },
            ].map((planItem, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <h3 className="text-xl font-bold text-gray-800">{planItem.plan}</h3>
                <p className="mt-2 text-gray-600 text-lg font-semibold">{planItem.price}</p>
                <ul className="mt-4 space-y-2">
                  {planItem.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600">
                      - {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white rounded-full text-lg font-medium">
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800">What Our Members Say</h2>
          <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Rakesh", quote: "The classes here are amazing! Highly recommended.", img: "https://via.placeholder.com/150" },
              { name: "Akshay", quote: "Great atmosphere and fantastic trainers.", img: "https://via.placeholder.com/150" },
              { name: "Anulata", quote: "I've seen incredible results since joining.", img: "https://via.placeholder.com/150" },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg flex flex-col items-center text-center"
              >
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  src={testimonial.img}
                  alt={testimonial.name}
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800">{testimonial.name}</h3>
                <p className="mt-2 text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Join Us?</h2>
            <p className="mt-4 text-lg">Sign up today and take the first step towards a healthier you.</p>
            <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-lg font-medium">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GymClasses;
