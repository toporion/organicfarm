import React from 'react';

const TopBar = () => {
    return (
        <div className="bg-gradient-to-r from-blue-900 via-blue-500 to-blue-700 h-12 text-white px-4 flex items-center">
            <div className="flex justify-between w-full">
                <p>Welcome</p>
                <p>Home</p>
            </div>
        </div>
    );
};

export default TopBar;
