import React, { useRef, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

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
        name: "Sanya Kapoor",
        position: "Content Writer",
        image: "https://cdn.pixabay.com/photo/2016/11/19/13/08/business-1839191_1280.jpg",
        text: "Outstanding service and support. The team went above and beyond to meet our needs.",
        rating: 5,
    },
];

const TestimonialCard = ({ name, position, image, text, rating, onHover, onLeave }) => (
    <div
        className="bg-white shadow-lg rounded-lg p-6 md:p-8 flex flex-col items-center text-center mx-4 min-w-[300px]"
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
    >
        <img
            className="w-20 h-20 rounded-full object-cover mb-4"
            src={image}
            alt={`${name}'s profile`}
        />
        <h4 className="text-xl font-semibold mb-1">{name}</h4>
        <p className="text-gray-500 text-sm mb-3">{position}</p>
        <div className="flex mb-3">
            {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                    key={index}
                    className={`h-5 w-5 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
                />
            ))}
        </div>
        <p className="text-gray-700 italic">"{text}"</p>
    </div>
);

const Testimonials = () => {
    const scrollContainerRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;

        // Function to handle continuous scrolling
        const scrollLoop = () => {
            if (scrollContainer && !isPaused) {
                scrollContainer.scrollLeft += 1;

                // If scroll reaches the end, reset to the beginning
                if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                    scrollContainer.scrollLeft = 0;
                }
            }
        };

        // Set up an interval for scrolling
        const interval = setInterval(scrollLoop, 20);

        return () => clearInterval(interval);
    }, [isPaused]);

    // Duplicate testimonials to create an infinite loop
    const duplicatedTestimonials = [...testimonials, ...testimonials];

    return (
        <div className="bg-gray-100 py-12 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-8">
                    What People Are Saying
                </h2>
                {/* Scroll container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-scroll no-scrollbar scroll-smooth w-full"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    style={{
                        scrollbarWidth: "none", // Hides the scrollbar for Firefox
                        msOverflowStyle: "none", // Hides the scrollbar for IE and Edge
                    }}
                >
                    {duplicatedTestimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
