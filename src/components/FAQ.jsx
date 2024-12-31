import React, { useState } from "react";

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "What is the return policy?",
            answer: "You can return any item within 30 days of purchase for a full refund."
        },
        {
            question: "How can I track my order?",
            answer: "Once your order is shipped, you will receive a tracking link via email."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to most countries worldwide. Shipping rates and times vary by location."
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div className="border-b border-gray-300 pb-4" key={index}>
                        <div
                            className="flex justify-between items-center cursor-pointer text-lg font-medium text-gray-800"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            <span className="text-xl">{activeIndex === index ? "➖" : "➕"}</span>
                        </div>
                        {activeIndex === index && (
                            <div className="mt-2 text-gray-600">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
