import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProfilePage = () => {
    const navigate = useNavigate();

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

    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        localStorage.setItem("userProfile", JSON.stringify(user));
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

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

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleLogout = () => {
        toast.info("You have logged out!", { position: "top-right" });
        navigate("/");
    };

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
        <div
            className="min-h-screen p-6"
            style={{
                background: "linear-gradient(to right, #ff7e5f, #feb47b, #ff6a88)",
            }}
        >
            <ToastContainer />
            <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg p-8">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-gray-800">Your Profile</h2>
                    <button
                        className="bg-gradient-to-r from-red-400 to-red-600 text-white py-2 px-6 rounded-lg hover:from-red-500 hover:to-red-700"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>

                {/* Profile Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                    <div className="text-center md:text-left">
                        <img
                            src={user.profilePic || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-32 h-32 rounded-full object-cover border-4 border-pink-400 shadow-lg mx-auto md:mx-0"
                        />
                        {isEditing && (
                            <div className="mt-4">
                                <label
                                    htmlFor="profilePic"
                                    className="bg-gradient-to-r from-blue-400 to-blue-600 text-white px-4 py-2 rounded-full cursor-pointer hover:from-blue-500 hover:to-blue-700"
                                >
                                    Change Picture
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
                    <div className="flex-1">
                        <form>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { label: "Name", name: "name", value: user.name },
                                    { label: "Email", name: "email", value: user.email },
                                    { label: "Phone", name: "phone", value: user.phone },
                                    { label: "Address", name: "address", value: user.address },
                                ].map((field) => (
                                    <div key={field.name}>
                                        <label className="block text-gray-700 font-medium mb-1">
                                            {field.label}
                                        </label>
                                        <input
                                            type="text"
                                            name={field.name}
                                            value={field.value}
                                            onChange={handleChange}
                                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${isEditing
                                                    ? "focus:ring-purple-400"
                                                    : "bg-gray-200"
                                                }`}
                                            disabled={!isEditing}
                                        />
                                    </div>
                                ))}
                            </div>
                        </form>
                    </div>
                </div>

                {/* Buttons */}
                <div className="text-center mb-6">
                    {isEditing ? (
                        <button
                            className="bg-gradient-to-r from-green-400 to-green-600 text-white py-2 px-6 rounded-lg hover:from-green-500 hover:to-green-700"
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            className="bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 px-6 rounded-lg hover:from-blue-500 hover:to-blue-700"
                            onClick={handleEdit}
                        >
                            Edit
                        </button>
                    )}
                </div>

                {/* Activity Logs */}
                <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Activity Logs</h3>
                    <ul className="space-y-4">
                        <li className="p-4 bg-gray-50 rounded-lg shadow-sm">
                            <span className="font-medium">Logged in:</span> 2 hours ago
                        </li>
                        <li className="p-4 bg-gray-50 rounded-lg shadow-sm">
                            <span className="font-medium">Updated profile:</span> Yesterday
                        </li>
                        <li className="p-4 bg-gray-50 rounded-lg shadow-sm">
                            <span className="font-medium">Uploaded a document:</span> Last week
                        </li>
                    </ul>
                </div>

                {/* Quick Stats */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Stats</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: "Followers", value: 1200 },
                            { label: "Posts", value: 75 },
                            { label: "Comments", value: 320 },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-gradient-to-r from-purple-400 to-purple-600 text-white p-6 rounded-lg text-center shadow-lg"
                            >
                                <h4 className="text-2xl font-bold">{stat.value}</h4>
                                <p className="text-lg">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
