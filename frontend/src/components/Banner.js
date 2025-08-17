import React from "react";
import video from "../assets/Organic.mp4";
import OverlayDesign from "./OverlayDesign";

const Banner = () => {
    return (
        <div className="relative w-full overflow-hidden">
            {/* Banner Section */}
            <div className="relative w-full h-[700px] overflow-hidden">
                <video
                    src={video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                        Fresh From Nature
                    </h1>
                    <p className="text-lg md:text-2xl text-yellow-200 mt-4 max-w-2xl">
                        Sustainable Organic Farming for a Healthier Tomorrow
                    </p>
                    <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-green-900 font-semibold px-6 py-2 rounded-lg shadow-lg">
                        Explore Our Farm
                    </button>
                </div>
            </div>

            {/* Overlay Section Overlapping Banner */}
            <div className="relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-28 z-10 w-full">
                    <div className="max-w-6xl mx-auto">
                        <OverlayDesign />
                    </div>
                </div>
                {/* Spacer */}
                <div className="h-40"></div>
            </div>
        </div>
    );
};

export default Banner;
