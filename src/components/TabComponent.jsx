import React, { useState } from 'react';

const TabComponent = () => {
    // State to keep track of the active tab
    const [activeIndex, setActiveIndex] = useState(0);

    // Tabs and their content
    const tabs = [
        { label: 'Tab 1', content: 'This is content for Tab 1.' },
        { label: 'Tab 2', content: 'This is content for Tab 2.' },
        { label: 'Tab 3', content: 'This is content for Tab 3.' },
    ];

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Tabs */}
            <div className="flex border-b border-gray-300">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`flex-1 p-2 text-center ${activeIndex === index
                                ? 'border-b-2 border-blue-500 text-blue-500'
                                : 'text-gray-500 hover:text-blue-500'
                            }`}
                        onClick={() => setActiveIndex(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="bg-gray-100 rounded-lg shadow-md mt-4 p-4">
                {tabs[activeIndex].content}
            </div>
        </div>
    );
};

export default TabComponent;
