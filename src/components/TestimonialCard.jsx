import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Testimonials data
const testimonials = [
    {
        name: "Arjun Kumar",
        position: "Software Engineer, Tech Solutions",
        image: "https://cdn.pixabay.com/photo/2016/01/30/16/11/employee-1169923_1280.jpg",
        text: "This service has significantly improved my workflow and productivity. Highly recommended!",
        rating: 5,
    },
    {
        name: "Priya Sharma",
        position: "Digital Marketer",
        image: "https://randomuser.me/api/portraits/women/47.jpg",
        text: "Excellent support and service! The team is always there to assist whenever needed.",
        rating: 4,
    },
    {
        name: "Prakash Prajapat",
        position: "Freelancer",
        image: "https://codebypc.in/wp-content/uploads/2024/09/Picture1.png",
        text: "The service quality is outstanding. It has been a real game-changer for my projects.",
        rating: 5,
    },
    {
        name: "Heera Joshi",
        position: "HR Manager, GlobalCorp",
        image: "https://cdn.pixabay.com/photo/2014/08/06/11/19/businessman-411487_1280.jpg",
        text: "Very professional and reliable service. It exceeded my expectations in every way!",
        rating: 5,
    },
    {
        name: "Ankit Verma",
        position: "Entrepreneur",
        image: "https://cdn.pixabay.com/photo/2023/01/06/23/04/indian-businessman-7702279_1280.jpg",
        text: "I am truly impressed with the results. It has made a significant impact on my business.",
        rating: 4,
    },
    {
        name: "Sanjay Kapoor",
        position: "Content Writer",
        image: "https://cdn.pixabay.com/photo/2016/11/19/13/08/business-1839191_1280.jpg",
        text: "Outstanding service and support. The team went above and beyond to meet our needs.",
        rating: 5,
    },
];

const TestimonialCard = ({ name, position, image, text, rating }) => (
    <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg rounded-lg p-6 md:p-8 flex flex-col items-center text-center mx-4 min-w-[300px] max-w-[400px] transition-transform transform duration-500 ease-in-out">
        <img
            className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md mb-4"
            src={image}
            alt={`${name}'s profile`}
        />
        <h4 className="text-2xl font-semibold text-white mb-1">{name}</h4>
        <p className="text-gray-200 text-sm italic mb-3">{position}</p>
        <div className="flex mb-3">
            {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                    key={index}
                    className={`h-5 w-5 ${index < rating ? "text-yellow-300" : "text-gray-400"}`}
                />
            ))}
        </div>
        <p className="text-white italic">"{text}"</p>
    </div>
);

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-blue-600 mb-12">
                    What People Are Saying
                </h2>
                <div className="relative flex items-center justify-center">

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md z-10 hidden md:block"
                        aria-label="Previous Testimonial"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Slider Container */}
                    <div className="flex gap-4 overflow-x-auto scrollbar-hide md:overflow-hidden md:flex-nowrap justify-center">
                        {/* On mobile, show one card at a time */}
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className={`flex-shrink-0 transition-all duration-500 ease-in-out transform ${index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                                    }`}
                            >
                                <TestimonialCard {...testimonial} />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={handleNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-md z-10 hidden md:block"
                        aria-label="Next Testimonial"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Mobile swipeable section */}
                <div className="md:hidden mt-8 flex justify-center">
                    <button
                        onClick={handlePrev}
                        className="bg-blue-500 text-white p-2 rounded-full"
                        aria-label="Previous Testimonial"
                    >
                        <FaChevronLeft />
                    </button>
                    <div className="mx-4">
                        <TestimonialCard {...testimonials[currentIndex]} />
                    </div>
                    <button
                        onClick={handleNext}
                        className="bg-blue-500 text-white p-2 rounded-full"
                        aria-label="Next Testimonial"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
