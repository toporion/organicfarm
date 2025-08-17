import React from 'react';
import { FaAppleAlt, FaCarrot, FaLeaf, FaSeedling, FaTractor } from "react-icons/fa";
import { FaCow } from "react-icons/fa6";

const Services = () => {
    const serviceCards = [
        { icon: <FaCarrot className="text-6xl mb-4 text-yellow-400" />, title: 'Fresh Vegetables', desc: 'Organic and farm-fresh vegetables delivered to your home.' },
        { icon: <FaAppleAlt className="text-6xl mb-4 text-yellow-400" />, title: 'Fresh Fruits', desc: 'Seasonal fruits harvested with care and quality.' },
        { icon: <FaCow className="text-6xl mb-4 text-yellow-400" />, title: 'Healthy Cattle', desc: 'Well-raised, healthy cattle for dairy and meat.' },
        { icon: <FaSeedling className="text-6xl mb-4 text-yellow-400" />, title: 'Farming Plans', desc: 'Custom farm planning and consultation services.' },
        { icon: <FaTractor className="text-6xl mb-4 text-yellow-400" />, title: 'Farm Equipment', desc: 'Top quality farming equipment for better yield.' },
    ];

    return (
        <div className="max-w-6xl mx-auto py-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">

                {/* First special card */}
                <div className="bg-green-600 hover:bg-green-700 text-black p-8 rounded-xl shadow-lg flex flex-col justify-between transition-all duration-300">
                    <div>
                        <p className="uppercase tracking-wider text-sm font-semibold">SERVICES</p>
                        <h2 className="text-3xl md:text-4xl font-bold mt-2">Organic Farm Services</h2>
                        <p className="mt-4 text-black/80">Providing the best organic products and services for a healthier life.</p>
                    </div>
                    <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-6 py-2 rounded-lg shadow-lg w-max">
                        Contact Us
                    </button>
                </div>

                {/* Remaining 5 cards */}
                {serviceCards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white hover:bg-green-700 text-black hover:text-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center text-center transition-all duration-300"
                    >
                        <div>{card.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                        <p>{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
