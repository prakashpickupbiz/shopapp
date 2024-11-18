import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
    const navigate = useNavigate();

    // State for user information
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        profilePic: null, // New field for profile picture
    });

    // State to track if the form is in edit mode
    const [isEditing, setIsEditing] = useState(true); // Start in edit mode

    // Handler for form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    // Handler for saving the form
    const handleSave = () => {
        setIsEditing(false);
    };

    // Handler for editing the form
    const handleEdit = () => {
        setIsEditing(true);
    };

    // Handler for logging out
    const handleLogout = () => {
        alert("You have logged out!");
        navigate("/"); // Redirect to home page
    };

    // Handler for profile picture upload
    const handleProfilePicChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setUser({ ...user, profilePic: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-semibold mb-4">Profile</h2>

                {/* Profile Picture Upload */}
                <div className="mb-6 text-center">
                    <div className="relative">
                        <img
                            src={user.profilePic || "https://via.placeholder.com/150"} // Placeholder image if no profile pic
                            alt="Profile"
                            className="w-32 h-32 rounded-full mx-auto object-cover border-2 border-gray-300"
                        />
                        {isEditing && (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleProfilePicChange}
                                className="mt-2 block mx-auto text-sm text-gray-500"
                            />
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
                                    type="text"
                                    name="phone"
                                    value={user.phone}
                                    onChange={handleChange}
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
