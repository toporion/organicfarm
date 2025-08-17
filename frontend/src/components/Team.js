import React, { useEffect, useRef } from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import team1 from '../assets/team-1.jpg';
import team2 from '../assets/team-2.jpg';
import team3 from '../assets/team-3.jpg';

const teamMembers = [
    { name: 'John Doe', role: 'CEO', image: team1 },
    { name: 'Sarah Smith', role: 'Designer', image: team2 },
    { name: 'David Lee', role: 'Developer', image: team3 },
];

const Team = () => {
    const scrollRef = useRef(null);

    // Auto scroll effect
    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollBy({
                    left: 350, // step = card width
                    behavior: 'smooth',
                });

                if (
                    scrollRef.current.scrollLeft + scrollRef.current.offsetWidth >=
                    scrollRef.current.scrollWidth
                ) {
                    scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                }
            }
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full py-10 bg-gray-100 ">
            <h2 className="text-3xl font-bold text-center mb-2 text-green-700">Our Team</h2>
            <div className='w-96 mx-auto mb-7'>
                <p className='text-4xl font-bold text-center'>We Are Professional Organic Farmers</p>
            </div>

            <div
                ref={scrollRef}
                className="flex space-x-6 overflow-x-auto scrollbar-hide justify-center  px-6"
            >
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="relative min-w-[320px] h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden"
                    >
                        {/* Full Card Image */}
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover"
                        />

                        {/* Overlay with info */}
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                            <h3 className="text-lg font-semibold">{member.name}</h3>
                            <p className="text-sm">{member.role}</p>
                        </div>

                        {/* Vertical Social Icons */}
                        <div className="absolute top-0 right-0 h-full flex flex-col bg-yellow-400 justify-center space-y-4 px-3">
                            <a href="#" className="text-black hover:text-white">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-black hover:text-white">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-black hover:text-white">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
