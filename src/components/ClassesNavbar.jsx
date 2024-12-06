import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdPersonPin } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaChevronDown } from "react-icons/fa";
import CartBadge from "./CartBadge";

const routes = [
    { name: "HOME", path: "/" },
    { name: "CART", path: "/cart" },
    { name: "PROFILE", path: "/profile" },
    { name: "CONTACT", path: "/contact" },
];

const classSubmenu = [
    { name: "Mehandi", path: "/classes/mehandi" },
    { name: "Taekwondo", path: "/classes/taekwondo" },
    { name: "Karate", path: "/classes/karate" },
    { name: "Fashion designing", path: "/classes/fashion-designing" },
    { name: "Cooking", path: "/classes/cooking" },
    { name: "Precision shooting", path: "/classes/precision-shooting" },
    { name: "English spoken", path: "/classes/english-spoken" },
    { name: "Tuition centre", path: "/classes/tuition-centre" },
    { name: "Skate", path: "/classes/skate" },
    { name: "Computer", path: "/classes/computer" },
    { name: "Arabic", path: "/classes/arabic" },
    { name: "Sign language", path: "/classes/sign-language" },
    { name: "Makeup", path: "/classes/make-up" },
    { name: "Yoga", path: "/classes/yoga" },
    { name: "Football", path: "/classes/football" },
    { name: "Horse riding", path: "/classes/horse-riding" },
    { name: "Gym", path: "/classes/gym" },
    { name: "Meditation", path: "/classes/meditation" },
    { name: "Hotel management", path: "/classes/hotel-management" },
    { name: "Painting", path: "/classes/painting" },
];

export default function ClassesNavbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [submenuVisible, setSubmenuVisible] = useState(false);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    const [isSearchActive, setIsSearchActive] = useState(false); // To track if search is active
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

        // Reset search input after submitting
        setSearchQuery("");
        setSuggestions([]);
        setIsSearchActive(false); // Hide search input after submission
    };

    const handleItemClick = (name, path) => {
        setSearchQuery(name);
        setSubmenuVisible(false);
        setSuggestions([]);
        navigate(path);
        setSearchQuery("");
        setMobileMenuVisible(false); // Close the mobile menu when an item is clicked
        setIsSearchActive(false); // Hide search input after selecting a suggestion
    };

    return (
        <nav className="bg-white shadow-md p-1 sticky top-0 z-20">
            <div className="flex justify-between items-center m-4">
                {/* Logo */}
                <div className="text-xl font-bold">logo</div>

                {/* Hamburger Icon for Mobile */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileMenuVisible(!mobileMenuVisible)} className="text-2xl">
                        <FaBars />
                    </button>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex gap-12 items-center">
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
                            <Link to={"/classes"}>Classes</Link>
                            <FaChevronDown
                                className={`transition-transform ${submenuVisible ? "rotate-180" : ""}`}
                            />
                            {/* Submenu */}
                            {submenuVisible && (
                                <ul
                                    className="absolute bg-white shadow-md p-2 top-6 rounded-md mt-2 w-44 z-10"
                                    onClick={(e) => e.stopPropagation()} // Prevent submenu clicks from toggling
                                    style={{
                                        maxHeight: "80vh",
                                        overflowY: "auto",
                                    }}
                                >
                                    <style>
                                        {`
                                        .submenu::-webkit-scrollbar {
                                            display: none;
                                        }
                                    `}
                                    </style>

                                    {classSubmenu.map((submenu) => (
                                        <li
                                            key={submenu.path}
                                            className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer bg-slate-200 m-1 rounded"
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
                <div className="flex items-center gap-4">
                    {/* Search Bar (Mobile Version Only Shows Search Icon Initially) */}
                    <div className="md:hidden flex items-center">
                        {!isSearchActive ? (
                            <button onClick={() => setIsSearchActive(true)} className="text-2xl">
                                <CiSearch />
                            </button>
                        ) : (
                            <form onSubmit={handleSearchSubmit} className="flex items-center border-2 border-gray-300 rounded-lg p-1 w-48 sm:w-64">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                    placeholder="Search..."
                                    className="p-2 rounded-l-lg w-full focus:outline-none"
                                />
                                <button type="submit" className="bg-blue-500 p-2 rounded-r-lg text-white">
                                    <CiSearch />
                                </button>
                            </form>
                        )}
                    </div>

                    {/* Desktop Search Bar */}
                    <form
                        onSubmit={handleSearchSubmit}
                        className="hidden md:flex items-center border-2 border-gray-300 rounded-lg p-1 w-48 sm:w-64"
                    >
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            placeholder="Search..."
                            className="p-2 rounded-l-lg w-full focus:outline-none"
                        />
                        <button type="submit" className="bg-blue-500 p-2 rounded-r-lg text-white">
                            <CiSearch />
                        </button>
                    </form>

                    {/* Suggestions */}
                    {suggestions.length > 0 && (
                        <div className="absolute top-16 bg-white shadow-md p-2 mt-1 rounded-md w-48 sm:w-64">
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

                    {/* Profile and Cart (Visible only in Mobile Hamburger Menu) */}
                    <CartBadge />
                    <div className="text-2xl">
                        <Link to={"/profile"}>
                            <MdPersonPin />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuVisible && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white shadow-md p-4 z-10">
                    <ul>
                        {routes.map((route) => (
                            <Link key={route.path} to={route.path}>
                                <li
                                    className="p-2 hover:bg-blue-500 hover:text-white"
                                    onClick={() => setMobileMenuVisible(false)}
                                >
                                    {route.name}
                                </li>
                            </Link>
                        ))}
                        <li
                            className="p-2 hover:bg-blue-500 hover:text-white"
                            onClick={() => setMobileMenuVisible(false)}
                        >
                            <Link to={"/classes"}>Classes</Link>
                        </li>
                        {/* Cart and Profile Icons in Mobile Menu */}
                        <div className="p-2 hover:bg-blue-500 hover:text-white">
                            <CartBadge />
                        </div>
                        <div className="p-2 hover:bg-blue-500 hover:text-white">
                            <Link to={"/profile"}>
                                <MdPersonPin />
                            </Link>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    );
}
