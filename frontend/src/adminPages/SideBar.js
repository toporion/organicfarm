import React from 'react';
import { FaHome } from "react-icons/fa";
const SideBar = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-500 to-blue-500 w-56 text-white px-4 flex flex-col justify-between py-6">
            {/* Top content */}
            <div>
                <ul className="space-y-4">
                    <li className="hover:text-blue-200 cursor-pointer flex items-center gap-1"><FaHome className='text-xl'/>Dashboard</li>
                    <li className="hover:text-blue-200 cursor-pointer">Profile</li>
                    <li className="hover:text-blue-200 cursor-pointer">Settings</li>
                </ul>
            </div>

            {/* Bottom logout button */}
            <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-200">
                Log Out
            </button>
        </div>
    );
};

export default SideBar;
