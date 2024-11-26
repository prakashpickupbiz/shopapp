import React from "react";
import CountUp from "react-countup";
import { FaFacebook, FaTelegramPlane, FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

const SocialAchievements = () => {
    const achievements = [
        { icon: <FaFacebook />, target: 4000, label: "Followers", color: "text-blue-600" },
        { icon: <FaInstagram />, target: 20000, label: "Followers", color: "text-pink-500" },
        { icon: <FaGlobe />, target: 1000, label: "Daily Visitors", color: "text-blue-900" },
        { icon: <FaTelegramPlane />, target: 2000, label: "Subscribers", color: "text-blue-400" },
        { icon: <FaLinkedin />, target: 3000, label: "Followers", color: "text-blue-700" },
    ];

    // Hook to detect when the section is in view
    const { ref, inView } = useInView({
        threshold: 0.5, // Trigger when 50% of the section is visible
        triggerOnce: true, // Run the animation only once
    });

    return (
        <div ref={ref} className="max-w-4xl mx-auto p-4 text-center">
            <h2 className="bg-blue-800 text-white py-4 text-lg font-bold rounded-md">
                Our Social Achievements
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-6">
                {achievements.map((item, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center hover:scale-105 transform transition"
                    >
                        <div className={`text-5xl mb-4 ${item.color}`}>{item.icon}</div>
                        <div className="text-2xl font-bold text-gray-800">
                            {inView && (
                                <CountUp start={1} end={item.target} duration={2.5} separator="," />
                            )}
                            +
                        </div>
                        <div className="text-sm text-gray-500">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialAchievements;
