import React from 'react';
import { FcCustomerSupport } from 'react-icons/fc';
import { IoPricetags } from "react-icons/io5";
import { PiCurrencyCircleDollarFill } from 'react-icons/pi';
import { TbSettings2 } from 'react-icons/tb';
import { TiTick } from 'react-icons/ti';

const cards = [
    {
        head: "Free Trials",
        desc: "This is the desc for this item...",
        icons: < PiCurrencyCircleDollarFill />
    },
    {
        head: "Lifetime Access",
        desc: "This is the desc for this item...",
        icons: < TbSettings2 />
    },
    {
        head: "Best Teachers",
        desc: "This is the desc for this item...",
        icons: <TiTick />
    },
    {
        head: "24/7 Support",
        desc: "This is the desc for this item...",
        icons: <FcCustomerSupport />
    }
];

export default function CardComponent() {
    return (
        <div className='flex justify-around gap-2'>
            {cards.map((item, index) => (
                <div key={index} className='border-2 p-10 m-4 rounded-2xl bg-slate-100 flex  justify-center shadow-xl flex-col items-center'>
                    <div className=' text-4xl p-2 -m-14 border-slate-400 rounded-full border-2 w-12 h-10 bg-slate-200 flex justify-center items-center'>
                      {item.icons}
                    </div>
                    <div className='mt-16 font-bold'>
                        <h6>{item.head}</h6>
                    </div>
                    <div className='mt-4'>
                        <p>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
