import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdPersonPin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import CartBadge from "./CartBadge";

const routes = [
    { name: "home", path: "/" },
    { name: "cart", path: "/cart" },
    { name: "profile", path: "/profile" },
    { name: "contact", path: "/contact" },
];

const classSubmenu = [
    { name: "mehandi", path: "/classes/mehandi" },
    { name: "taekwondo", path: "/classes/taekwondo" },
    { name: "karate", path: "/classes/karate" },
    { name: "fashion designing", path: "/classes/fashion-designing" },
    { name: "cooking", path: "/classes/cooking" },
    { name: "precision shooting", path: "/classes/precision-shooting" },
    { name: "english spoken", path: "/classes/english-spoken" },
    { name: "tuition centre", path: "/classes/tuition-centre" },
    { name: "skate", path: "/classes/skate" },
    { name: "computer", path: "/classes/computer" },
    { name: "arabic", path: "/classes/arabic" },
    { name: "sign language", path: "/classes/sign-language" },
    { name: "makeup", path: "/classes/make-up" },
    { name: "yoga", path: "/classes/yoga" },
    { name: "football", path: "/classes/football" },
    { name: "horse riding", path: "/classes/horse-riding" },
    { name: "gym", path: "/classes/gym" },
    { name: "meditation", path: "/classes/meditation" },
    { name: "hotel management", path: "/classes/hotel-management" },
    { name: "painting", path: "/classes/painting" },
];

export default function ClassesNavbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const navigate = useNavigate();

    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase().trim();
        setSearchQuery(query);

        const matches = [...routes, ...classSubmenu].filter(
            (route) => route.name.toLowerCase().includes(query)
        );
        setSuggestions(matches);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const query = searchQuery.toLowerCase().trim();

        const match = [...routes, ...classSubmenu].find(
            (route) => route.name.toLowerCase().includes(query)
        );

        if (match) {
            navigate(match.path);
        } else {
            alert("No matching class found");
        }
    };

    const handleItemClick = (name, path) => {
        setSearchQuery(name); // Update the input with the clicked item's name
        setSuggestions([]); // Clear suggestions
        setSubmenuVisible(false); // Hide the submenu
        navigate(path); // Navigate to the item's path
    };

    return (
        <nav className="bg-white shadow-md p-1 sticky top-0 z-20">
            <div className="flex justify-between items-center m-4">
                {/* Logo */}
                <div className="text-xl font-bold">logo</div>

                {/* Navigation Links */}
                <div className="nav">
                    <ul className="flex justify-between gap-12 items-center">
                        {routes.map((route) => (
                            <Link key={route.path} to={route.path}>
                                <li className="hover:text-blue-500">{route.name}</li>
                            </Link>
                        ))}

                        {/* Main Item with Submenu */}
                        <li
                            className="relative hover:text-blue-500 cursor-pointer flex items-center gap-2"
                            onClick={() => setSubmenuVisible((prev) => !prev)}
                        >
                            Classes
                            <FaChevronDown className={`transition-transform ${submenuVisible ? "rotate-180" : ""}`} />
                            {/* Submenu */}
                            {submenuVisible && (
                                <ul className="absolute bg-white shadow-md p-2 top-6 rounded-md mt-2 w-48">
                                    {classSubmenu.map((submenu) => (
                                        <li
                                            key={submenu.path}
                                            className="p-1 hover:bg-gray-200 cursor-pointer"
                                            onClick={() => handleItemClick(submenu.name, submenu.path)}
                                        >
                                            {submenu.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
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

                    {/* Suggestions */}
                    {suggestions.length > 0 && (
                        <div className="absolute bg-white shadow-md p-2 mt-1 rounded-md">
                            {suggestions.map((suggestion) => (
                                <div
                                    key={suggestion.path}
                                    className="p-1 hover:bg-gray-200 cursor-pointer"
                                    onClick={() => handleItemClick(suggestion.name, suggestion.path)}
                                >
                                    {suggestion.name}
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Profile and Cart */}
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
