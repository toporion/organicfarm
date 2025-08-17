import React from 'react';
import feature from '../assets/feature.png';
import { FaLeaf, FaTractor, FaAward, FaHeadset } from 'react-icons/fa';

const WhyChooseUs = () => {
    const features = [
        { icon: <FaLeaf className="text-green-500 text-3xl" />, title: "100% Organic", desc: "Our farm delivers purely organic products, free from chemicals and pesticides." },
        { icon: <FaTractor className="text-gray-500 text-3xl" />, title: "Modern Farming", desc: "We use advanced and sustainable farming techniques for higher quality produce." },
        { icon: <FaAward className="text-yellow-500 text-3xl" />, title: "Award Winning", desc: "Recognized for excellence in organic farming and sustainable practices." },
        { icon: <FaHeadset className="text-blue-500 text-3xl" />, title: "24/7 Support", desc: "Our team is always available to help you with any questions or orders." },
    ];

    return (
        <div className=' bg-green-600 '>
            <div className="max-w-6xl mx-auto py-16 px-4 lg:flex lg:items-center lg:gap-12">
                {/* Feature Image */}
                <div className="lg:w-1/2 mb-8 lg:mb-0 bg-white">
                    <img
                        src={feature}
                        alt="Feature"
                        className="w-full rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Text and Features */}
                <div className="lg:w-1/2 flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-green-700 mb-4">Why Choose Us?</h2>
                    <p className="text-gray-700 mb-6">
                        At our organic farm, we provide the freshest produce and high-quality farm services.
                        Sustainability, health, and quality are our top priorities.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {features.map((featureItem, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex-shrink-0">{featureItem.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-lg text-gray-800">{featureItem.title}</h3>
                                    <p className="text-gray-600 text-sm">{featureItem.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WhyChooseUs;
