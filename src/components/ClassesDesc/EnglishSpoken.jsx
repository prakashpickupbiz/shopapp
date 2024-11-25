import React from "react";
import { FaBookOpen, FaBookOpenReader } from "react-icons/fa6";
import { GiTeacher } from "react-icons/gi";
import { TbCertificate } from "react-icons/tb";
import Card from "./Card";

// Key Factors Data
const keyFactors = [
  {
    icon: <FaBookOpenReader className="text-7xl text-blue-600" />,
    description: "Comprehensive Reading Resources",
  },
  {
    icon: <FaBookOpen className="text-7xl text-green-600" />,
    description: "Rich Learning Materials",
  },
  {
    icon: <GiTeacher className="text-7xl text-purple-600" />,
    description: "Experienced Instructors",
  },
  {
    icon: <TbCertificate className="text-7xl text-orange-600" />,
    description: "Recognized Certifications",
  },
];

// Why Us Points
const whyUsPoints = [
  {
    number: "1",
    text: "With our language course, you will be able to understand, comprehend, listen, and speak effectively.",
  },
  {
    number: "2",
    text: "We have specially designed courses for different levels from beginners to advanced.",
  },
  {
    number: "3",
    text: "Our classes are enjoyable, interactive, and relevant to your needs. We offer only the best.",
  },
];

// Gallery Images
const galleryImages = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
];

export default function EnglishSpoken() {
  return (
    <>
      {/* Hero Section */}
      <div className="flex p-5 justify-around mb-6 gap-6bg-gradient-to-br from-blue-500 to-green-500p-2">
        <div className="flex flex-col gap-5 items-start justify-center">
          <h1 className="text-5xl font-bold">Online Education</h1>
          <h2>
            Empowering Communication, Unlocking Opportunities: Master the Art
            of Spoken English.
          </h2>
          <button className="rounded-3xl bg-blue-950 text-white p-2">
            Contact us
          </button>
        </div>
        <img
          className="w-auto rounded-full rounded-tr-sm-lg "
          src="https://zenithguidance.com/wp-content/uploads/2021/02/spoken-english.jpg"
          alt="Online Education"
        />
      </div>


      {/* Key Factors Section */}
      <div className="flex flex-col items-center space-y-8 p-6">
        <h1 className="text-4xl font-bold text-center">Our Key Factors</h1>
        <div className="flex flex-wrap justify-center gap-12">
          {keyFactors.map((factor, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-between space-y-4"
            >
              {factor.icon}
              <p className="text-lg font-medium text-center">
                {factor.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="p-4">
        <h1 className="text-center text-4xl font-bold p-4 m-3">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              className="h-auto max-w-full rounded-lg"
              src={img}
              alt={`Gallery Image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Why Us Section */}
      <div className="flex flex-col items-center space-y-6 px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800">Why Us?</h2>
        <div className="flex flex-col md:flex-row justify-center items-start md:items-center md:space-x-16 space-y-6 md:space-y-0">
          {whyUsPoints.map((point, index) => (
            <div key={index} className="flex items-start space-x-4">
              <span className="text-4xl font-bold text-orange-500">
                {point.number}
              </span>
              <p className="text-gray-700 text-lg max-w-sm">{point.text}</p>
            </div>
          ))}
        </div>
      </div>

      <Card />
    </>
  );
}
