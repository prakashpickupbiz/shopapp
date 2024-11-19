import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdPersonPin } from "react-icons/md";
import { Link } from "react-router-dom";
import CartBadge from "./CartBadge";

export default function ClassesNavbar() {
    const [searchQuery, setSearchQuery] = useState("");

    // Handler for search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Optional: Function to handle the search when the user presses Enter or submits the form
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // In a real-world scenario, you would trigger a search API or filter products here.
        console.log("Search query:", searchQuery);
    };

    return (
        <nav className="bg-white shadow-md p-1 sticky top-0 z-20 ">
            <div className="flex justify-between items-center m-4">
                {/* Logo */}
                <div className="text-xl font-bold">logo</div>

                {/* Navigation Links */}
                <div className="nav">
                    <ul className="flex justify-between gap-12">

                        <Link to={"/"}>
                            <li className="hover:text-blue-500">Home</li>
                        </Link>
                        <Link to={"/classes"}>
                            <li className="hover:text-blue-500">Classes</li>
                        </Link>

                        <Link to={"/cart"}>
                            <li className="hover:text-blue-500">Cart</li>
                        </Link>
                        <li className="hover:text-blue-500">Pages</li>
                        <li className="hover:text-blue-500">Contact</li>
                    </ul>
                </div>

                {/* Search and Icons */}
                <div className="flex items-center gap-6">
                    {/* Search Bar */}
                    <form onSubmit={handleSearchSubmit} className="flex items-center border-2 border-gray-300 rounded-lg p-1">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            className="p-2 rounded-l-lg w-64 focus:outline-none"
                        />
                        <button type="submit" className="bg-blue-500 p-2 rounded-r-lg text-white">
                            <CiSearch />
                        </button>
                    </form>

                    {/* Profile Icon */}
                    <CartBadge />
                    <div className="text-2xl">

                        <Link to={"/profile"}>
                            <MdPersonPin />
                        </Link>
                    </div>

                    {/* Enroll Button */}
                    <button className="bg-blue-500 p-2 rounded-lg font-bold text-white">
                        Enroll Now
                    </button>
                </div>
            </div>
        </nav>
    );
}