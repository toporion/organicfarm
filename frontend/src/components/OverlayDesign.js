import React from 'react';
import box1 from '../assets/bg-product-1.png';
import box2 from '../assets/bg-product-2.png';

const OverlayDesign = () => {
    return (
        <div className="max-w-6xl mx-auto flex items-stretch justify-center gap-4">
            {/* Box 1 */}
            <div className="relative w-1/2 h-60 p-8 text-white font-semibold text-lg overflow-hidden
                            bg-green-600/70 backdrop-blur-md border border-white/30 shadow-lg rounded-xl">
                {/* Text Layer */}
                <div className="relative z-10">
                    <p className="text-2xl mb-2">Fresh Organic Carrots</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum neque est minima placeat modi veniam delectus illo maxime consequuntur officia!</p>
                </div>
                {/* Image Layer */}
                <img 
                    src={box1} 
                    alt="Organic Carrots" 
                    className="absolute bottom-0 right-0 w-60 h-60 object-contain pointer-events-none z-0 opacity-90"
                />
            </div>

            {/* Box 2 */}
            <div className="relative w-1/2 h-60 p-8 text-white font-semibold text-lg overflow-hidden
                            bg-orange-500/70 backdrop-blur-md border border-white/30 shadow-lg rounded-xl">
                {/* Text Layer */}
                <div className="relative z-10">
                    <p className="text-2xl mb-2">Organic Tomatoes</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum neque est minima placeat modi veniam delectus illo maxime consequuntur officia!</p>
                </div>
                {/* Image Layer */}
                <img 
                    src={box2} 
                    alt="Organic Tomatoes" 
                    className="absolute bottom-0 right-0 w-60 h-60 object-contain pointer-events-none z-0 opacity-90"
                />
            </div>
        </div>
    );
};

export default OverlayDesign;
