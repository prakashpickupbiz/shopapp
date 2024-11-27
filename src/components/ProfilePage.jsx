import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage = () => {
    const navigate = useNavigate();

    // Load user data from localStorage or set default values
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("userProfile");
        return savedUser
            ? JSON.parse(savedUser)
            : {
                name: "",
                email: "",
                phone: "",
                address: "",
                profilePic: null,
            };
    });

    // State to track if the form is in edit mode
    const [isEditing, setIsEditing] = useState(false);

    // Save user data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("userProfile", JSON.stringify(user));
    }, [user]);

    // Handler for form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Handler for saving the form
    const handleSave = () => {
        if (!user.name || !user.email || !user.phone || !user.address) {
            toast.error("All fields must be filled out before saving!", {
                position: "top-right",
            });
            return;
        }
        setIsEditing(false);
        toast.success("Profile saved successfully!", { position: "top-right" });
    };

    // Handler for editing the form
    const handleEdit = () => {
        setIsEditing(true);
    };

    // Handler for logging out
    const handleLogout = () => {
        toast.info("You have logged out!", { position: "top-right" });
        navigate("/"); // Redirect to home page
    };

    // Handler for profile picture upload
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUser({ ...user, profilePic: reader.result });
                toast.success("Profile picture updated!", { position: "top-right" });
            };
            reader.readAsDataURL(file);
        } else {
            toast.warning("No file selected!", { position: "top-right" });
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <ToastContainer />
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>

                {/* Profile Picture Upload */}
                <div className="mb-6 text-center">
                    <div className="relative">
                        <img
                            src={user.profilePic || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-gray-300"
                        />
                        {isEditing && (
                            <div className="mt-2">
                                <label
                                    htmlFor="profilePic"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-600"
                                >
                                    Upload Image
                                </label>
                                <input
                                    id="profilePic"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleProfilePicChange}
                                    className="hidden"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* User Information Form */}
                <form>
                    <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Personal Information</h3>
                        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={user.name}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-lg"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-lg"
                                    disabled={!isEditing}
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Phone</label>
                                <input
                                    type="number"
                                    name="phone"
                                    value={user.phone}
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        // Trim to 10 digits
                                        if (value.length > 10) {
                                            value = value.slice(0, 10);
                                        }
                                        handleChange({ target: { name: 'phone', value } });
                                    }}
                                    className="w-full p-2 border rounded-lg"
                                    disabled={!isEditing}
                                />

                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={user.address}
                                    onChange={handleChange}
                                    className="w-full p-2 border rounded-lg"
                                    disabled={!isEditing}
                                />
                            </div>
                        </div>
                    </div>
                </form>

                {/* Buttons */}
                <div className="flex space-x-4">
                    {isEditing ? (
                        <button
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                    )}
                    <button
                        className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
