import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment } from "react-icons/ai";
import { IoIosArrowDropright } from "react-icons/io"; // Import arrow icon
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-blue-50 py-10">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
                {/* Logo and Description */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4">Educate</h2>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet consectetur. Non convallis sed id aliquam
                        tempus. Volutpat tortor tincidunt egestas sit risus donec.
                    </p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-blue-500">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="text-blue-500">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="#" className="text-blue-500">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="text-blue-500">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center space-x-2">
                            <IoIosArrowDropright />
                            <Link to="/classes">
                                <a href="#" className="hover:text-blue-500">Courses</a>
                            </Link>
                        </li>
                        <li className="flex items-center space-x-2">
                            <IoIosArrowDropright />
                            <a href="#" className="hover:text-blue-500">Join a Career</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <IoIosArrowDropright />
                            <a href="#" className="hover:text-blue-500">Upcoming Events</a>
                        </li>
                    </ul>
                </div>

                {/* Explore */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Explore</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center space-x-2">
                            <IoIosArrowDropright />
                            <a href="#" className="hover:text-blue-500">About Us</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <IoIosArrowDropright />
                            <a href="#" className="hover:text-blue-500">Gallery</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <IoIosArrowDropright />
                            <a href="#" className="hover:text-blue-500">Teacher's Detail</a>
                        </li>
                    </ul>
                </div>

                {/* Information */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Information</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li className="flex items-center space-x-2">
                            <IoIosArrowDropright />
                            <a href="#" className="hover:text-blue-500">Login</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <IoIosArrowDropright />
                            <a href="#" className="hover:text-blue-500">Register</a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <IoIosArrowDropright />
                            <Link to={"/contact"}>
                                <a href="#" className="hover:text-blue-500">Contact Us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Contact Information and Newsletter */}
            <div className="container mx-auto px-4 mt-8 md:mt-12 flex flex-col md:flex-row justify-between items-center text-gray-700">
                <div className="space-y-2 text-center md:text-left">
                    <div className="flex items-center space-x-2">
                        <AiOutlineEnvironment size={20} />
                        <p>631 Elgin St. Celina, State 11111</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <AiOutlineMail size={20} />
                        <p>email@example.com</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <AiOutlinePhone size={20} />
                        <p>+1 234 567 890</p>
                    </div>
                </div>
                <div className="mt-6 md:mt-0">
                    <form className="flex">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="p-2 rounded-l-md border border-gray-300 focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 rounded-r-md hover:bg-blue-600"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

        </footer>

    );
};

export default Footer;
