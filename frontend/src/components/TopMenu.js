import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
const TopMenu = () => {
    return (
        <div className='bg-green-200 px-2 text-black'>
            <div className='flex justify-between  '>
                <div className='flex gap-2'>
                    <p className='flex items-center gap-2'> <FaPhone /> Phone:+880-175-252-9602,</p>
                    <p  className='flex items-center gap-2'><MdEmail /> Email:info@organicfarm.org</p>
                </div>
                <Link to={'/register'}><p className=' cursor-pointer' >Join Now</p></Link>
            </div>
        </div>
    );
};

export default TopMenu;