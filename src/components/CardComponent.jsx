import React from 'react';
import { FcCustomerSupport } from 'react-icons/fc';
import { PiCurrencyCircleDollarFill } from 'react-icons/pi';
import { TbSettings2 } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';

const cards = [
    {
        head: "Free Trials",
        desc: "Enjoy free trials for all our premium features.",
        icons: <PiCurrencyCircleDollarFill aria-label="Free Trials Icon" />
    },
    {
        head: "Lifetime Access",
        desc: "Get lifetime access to all our courses and resources.",
        icons: <TbSettings2 aria-label="Lifetime Access Icon" />
    },
    {
        head: "Best Teachers",
        desc: "Learn from the best teachers around the world.",
        icons: <TiTick aria-label="Best Teachers Icon" />
    },
    {
        head: "24/7 Support",
        desc: "Our team is here to help you anytime, anywhere.",
        icons: <FcCustomerSupport aria-label="24/7 Support Icon" />
    },
    {
        head: "Best Teachers",
        desc: "Learn from the best teachers around the world.",
        icons: <TiTick aria-label="Best Teachers Icon" />
    },
    {
        head: "24/7 Support",
        desc: "Our team is here to help you anytime, anywhere.",
        icons: <FcCustomerSupport aria-label="24/7 Support Icon" />
    }
];

export default function CardComponent() {
    return (
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-50 pb-9">
            {cards.map((item, index) => (
                <div
                    key={index}
                    className="w-full sm:w-1/2 lg:w-1/4 p-4 flex justify-center"
                >
                    <div
                        className="w-full max-w-xs border-2 p-6 rounded-2xl bg-white flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="text-4xl p-4 -mt-14 border-gray-300 rounded-full border-2 w-20 h-20 bg-gray-100 flex justify-center items-center">
                            {item.icons}
                        </div>
                        <h6 className="mt-6 font-semibold text-lg text-gray-700 text-center">
                            {item.head}
                        </h6>
                        <p className="mt-3 text-gray-500 text-center">
                            {item.desc} fgdg
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
