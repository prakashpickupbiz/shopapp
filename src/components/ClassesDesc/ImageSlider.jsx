import React, { useState } from "react";
// import "./ImageSlider.css";

const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Move to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    // Move to the previous slide
    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    return (
        <div className="slider-container">
            <button className="prev-btn" onClick={prevSlide}>
                &#10094;
            </button>
            <div className="slider">
                <div
                    className="slider-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div className="slide" key={index}>
                            <img src={slide.image} alt={slide.title} />
                            <h3 className="image-title">{slide.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <button className="next-btn" onClick={nextSlide}>
                &#10095;
            </button>
        </div>
    );
};

export default ImageSlider;
