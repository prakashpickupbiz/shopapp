import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube, FaTiktok, FaPodcast } from 'react-icons/fa';

const Social = () => {
    const socialLinks = [
        { icon: <FaInstagram />, name: 'Instagram', handle: '@onefootball' },
        { icon: <FaFacebook />, name: 'Facebook', handle: '@OneFootball.de' },
        { icon: <FaTwitter />, name: 'Twitter', handle: '@OneFootball' },
        { icon: <FaYoutube />, name: 'Youtube', handle: '@OneFootball' },
        { icon: <FaTiktok />, name: 'TikTok', handle: '@onefootball' },
        { icon: <FaPodcast />, name: 'AudioBoom', handle: '@OneFootball' },
    ];

    return (
        <div className="mb-2  text-white p-6">
            <h1 className="text-2xl font-bold  mb-6 text-black text-center ">---Follow us---</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {socialLinks.map((link, index) => (
                    <div
                        className="bg-gradient-to-br from-blue-700 to-blue-500 p-4 flex items-center border-l-4 border-black
                      transform transition-transform duration-500 hover:scale-105 hover:shadow-xl rounded-lg"
                        key={index}
                    >
                        <div className="text-3xl text-white mr-4">{link.icon}</div>
                        <div>
                            <h3 className="text-lg font-semibold">{link.name}</h3>
                            <p className="text-sm text-blue-200">{link.handle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Social;
