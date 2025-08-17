import React from 'react';

const Stat = () => {
    return (
        <div className="bg-green-600 py-12">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-4 text-center shadow-lg  backdrop-blur-md border border-white/20 rounded-xl p-8 gap-4">
                    
                    {/* Our Experience */}
                    <div className="stat">
                        <div className="stat-title text-white/80">Our Experience</div>
                        <div className="stat-value text-3xl font-bold text-white">25+</div>
                        <div className="stat-desc text-white/60">Years in organic farming</div>
                    </div>

                    {/* Farm Speciality */}
                    <div className="stat">
                        <div className="stat-title text-white/80">Farm Speciality</div>
                        <div className="stat-value text-3xl font-bold text-white">50+</div>
                        <div className="stat-desc text-white/60">Organic products</div>
                    </div>

                    {/* Complete Projects */}
                    <div className="stat">
                        <div className="stat-title text-white/80">Complete Projects</div>
                        <div className="stat-value text-3xl font-bold text-white">120+</div>
                        <div className="stat-desc text-white/60">Delivered worldwide</div>
                    </div>

                    {/* Happy Customers */}
                    <div className="stat">
                        <div className="stat-title text-white/80">Happy Customers</div>
                        <div className="stat-value text-3xl font-bold text-white">10K+</div>
                        <div className="stat-desc text-white/60">Across the globe</div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Stat;
