import React from "react";
import farmImg from "../assets/Untitled design (1).png"; // example image

const InfoSection = () => {
    return (
        <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Image */}
                <div className="rounded-lg overflow-hidden shadow-lg">
                    <img
                        src={farmImg}
                        alt="Organic Farm"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right - Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">
                        Welcome to OrganicFarm
                    </h2>
                    <p className="text-gray-700 mb-6">
                        We believe in sustainable, eco-friendly farming that nurtures both
                        the land and the community. Our produce is grown without harmful
                        chemicals, ensuring you get the purest, freshest flavors nature
                        offers.
                    </p>
                    <ul className="space-y-3">
                        <li className="flex items-center space-x-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span>100% Organic & Pesticide-Free</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span>Farm-to-Table Freshness</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <span>Supporting Local Communities</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
