import React, { useState } from "react";

export default function Card() {
    const initialWidth = 30; // Initial width for all images
    const expandedWidth = 600; // Width when an image is clicked
    const [activeIndex, setActiveIndex] = useState(0); // Set the first image as active by default

    const handleClick = (index) => {
        // Set the active index to the clicked image
        setActiveIndex(index);
    };

    return (
        <div className="flex flex-wrap justify-center gap-4">
            {[0, 1, 2, 3].map((_, index) => (
                <div key={index} className="m-4 flex gap-4 transition ease-in-out delay-150">
                    <div className="rounded-2xl bg-yellow-700 h-80">
                        <img
                            onClick={() => handleClick(index)} // Handle click for the current image
                            className="h-full rounded-2xl object-fill cursor-pointer"
                            style={{
                                width: activeIndex === index ? `${expandedWidth}px` : `${initialWidth}px`, // Expand only the clicked image
                                transition: "width 0.8s ease-in-out", // Smooth transition for width change
                            }}
                            src="https://wmace.b-cdn.net/wp-content/uploads/2017/11/basic-english-speaking-course-content-syllabus-1.jpg"
                            alt={`Image ${index + 1}`}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}
