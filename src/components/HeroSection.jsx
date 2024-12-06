import React from 'react';
import Typing from 'react-typing-effect';

export default function HeroSection() {
  return (
    <div className="p-6 sm:p-12 flex flex-col sm:flex-row justify-around items-center mb-12 rounded-tr-xl bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 text-white">

      {/* Text Section */}
      <div className="flex flex-col text-center sm:text-left sm:w-1/2 items-center sm:items-start">
        <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight">
          <Typing
            text={[
              'Discover the Best Online Resources',
              'Learn and Grow with Expert Courses',
              'Start Your Journey Today!'
            ]}
            speed={100}
            eraseDelay={2000}
            className="inline-block"
          />
        </h1>
        <h2 className="text-lg sm:text-2xl mt-6 sm:mt-8">
          Create your free account today and unlock exclusive benefits.
        </h2>
        <button className="font-semibold text-blue-600 bg-white rounded-full px-6 py-3 mt-6 sm:mt-8 w-3/4 sm:w-1/3 hover:bg-blue-100 transition duration-300">
          Enroll Now
        </button>
      </div>

      {/* Image Section */}
      <div className="mt-6 sm:mt-0 sm:w-1/2 flex justify-center">
        <img
          className="rounded-xl w-full max-w-md drop-shadow-lg"
          src="https://blog.hocking.edu/hs-fs/hubfs/Images/Stock%20images/Rear%20view%20of%20students%20attentively%20listening%20to%20male%20teacher%20in%20the%20classroom.jpeg?width=552&name=Rear%20view%20of%20students%20attentively%20listening%20to%20male%20teacher%20in%20the%20classroom.jpeg"
          alt="Classroom Learning"
        />
      </div>
    </div>
  );
}
