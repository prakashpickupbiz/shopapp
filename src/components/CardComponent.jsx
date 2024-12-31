import React from 'react';
import { FcCustomerSupport } from 'react-icons/fc';
import { PiCurrencyCircleDollarFill } from 'react-icons/pi';
import { TbSettings2 } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';

const cards = [
    {
        head: "Free Trials",
        desc: "Enjoy free trials for all our premium features.",
        icons: <PiCurrencyCircleDollarFill aria-label="Free Trials Icon" />,
        gradient: "bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600",
        additionalContent: "No credit card required. Start learning today!"
    },
    {
        head: "Lifetime Access",
        desc: "Get lifetime access to all our courses and resources.",
        icons: <TbSettings2 aria-label="Lifetime Access Icon" />,
        gradient: "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600",
        additionalContent: "Access all resources, updates, and more forever."
    },
    {
        head: "Best Teachers",
        desc: "Learn from the best teachers around the world.",
        icons: <TiTick aria-label="Best Teachers Icon" />,
        gradient: "bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-600",
        additionalContent: "Our instructors are passionate and experienced."
    },
    {
        head: "24/7 Support",
        desc: "Our team is here to help you anytime, anywhere.",
        icons: <FcCustomerSupport aria-label="24/7 Support Icon" />,
        gradient: "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700",
        additionalContent: "Get help via chat, email, or phone, whenever you need."
    },
    {
        head: "Exclusive Discounts",
        desc: "Access exclusive discounts on courses and materials.",
        icons: <PiCurrencyCircleDollarFill aria-label="Exclusive Discounts Icon" />,
        gradient: "bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600",
        additionalContent: "Save big on bundles and seasonal sales."
    },
    {
        head: "Community Access",
        desc: "Join a community of learners and instructors.",
        icons: <TiTick aria-label="Community Access Icon" />,
        gradient: "bg-gradient-to-r from-sky-400 via-sky-500 to-sky-600",
        additionalContent: "Collaborate, ask questions, and share ideas."
    }
];

export default function CardComponent() {
    return (
        <div className="flex flex-wrap justify-center gap-6 p-4 bg-blue-50 pb-12">
            {cards.map((item, index) => (
                <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/4 p-4 flex justify-center"
                >
                    <div
                        className={`w-full max-w-xs border-2 p-6 rounded-2xl ${item.gradient} flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                    >
                        <div className="text-4xl p-4 -mt-14 border-2 rounded-full w-20 h-20 bg-white flex justify-center items-center">
                            {item.icons}
                        </div>
                        <h6 className="mt-6 font-semibold text-lg text-white text-center">
                            {item.head}
                        </h6>
                        <p className="mt-3 text-white text-center">
                            {item.desc}
                        </p>
                        <p className="mt-3 text-sm text-white text-center italic">
                            {item.additionalContent}
                        </p>
                        <button className="mt-6 px-6 py-2 bg-white text-blue-600 rounded-full hover:bg-blue-100 transition duration-300">
                            Learn More
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
