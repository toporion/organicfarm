import React from "react";
import { FaLeaf, FaHome, FaShoppingBasket, FaInfoCircle, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaSearch, FaUser } from "react-icons/fa";
import UseAuth from "../hook/UseAuth";
import { Link, useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'

const MainMenu = () => {
    const { isAuthenticated, logoutUser } = UseAuth()
    const navigate = useNavigate()

    const logoutHandler = () => {
        logoutUser()
        navigate('/login')
    }
    return (
        <nav className="w-full bg-gradient-to-r from-green-900 via-green-700 to-green-500 text-white shadow-md">
            <div className=" px-4 flex justify-between items-center h-16">

                {/* LEFT - Logo */}
                <div className="flex items-center space-x-2">
                    <FaLeaf className="text-2xl text-yellow-300" />
                    {/* <img className="w-12" src={logo} alt="" /> */}
                    <span className="font-bold text-lg">OrganicFarm</span>
                </div>

                {/* CENTER - Navigation */}
                <ul className="hidden md:flex space-x-6 font-medium">
                   <Link to={'/'}> <li className="flex items-center space-x-1 hover:text-yellow-200 cursor-pointer">
                        <FaHome /> <span>Home</span>
                    </li></Link>
                    <li className="flex items-center space-x-1 hover:text-yellow-200 cursor-pointer">
                        <FaShoppingBasket /> <span>Products</span>
                    </li>
                    <li className="flex items-center space-x-1 hover:text-yellow-200 cursor-pointer">
                        <FaInfoCircle /> <span>About Us</span>
                    </li>
                    <li className="flex items-center space-x-1 hover:text-yellow-200 cursor-pointer">
                        <FaPhone /> <span>Contact</span>
                    </li>
                </ul>

                {/* RIGHT - Social + Search + Avatar + Login */}
                <div className="flex items-center space-x-4">
                    {/* Social icons */}
                    <div className="hidden sm:flex space-x-2">
                        <FaFacebook className="hover:text-yellow-200 cursor-pointer" />
                        <FaInstagram className="hover:text-yellow-200 cursor-pointer" />
                        <FaTwitter className="hover:text-yellow-200 cursor-pointer" />
                    </div>

                    {/* Search Bar */}
                    <div className="hidden md:flex items-center bg-white text-black px-2 rounded-lg">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="outline-none px-1 py-1 text-sm w-28 md:w-40"
                        />
                        <FaSearch className="text-green-700" />
                    </div>

                    {/* Avatar */}
                    <div className="w-8 h-8 bg-yellow-300 rounded-full flex items-center justify-center text-green-900 font-bold cursor-pointer">
                        <Link to={'/admin'}><FaUser /></Link>
                    </div>

                    {/* Login Button */}
                    {
                        isAuthenticated ? <><button onClick={logoutHandler} className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-3 py-1 rounded-lg font-semibold">
                        Logout
                    </button></> : <>
                           <Link to={'/login'}> <button className="bg-yellow-400 hover:bg-yellow-500 text-green-900 px-3 py-1 rounded-lg font-semibold">
                                Login
                            </button></Link>
                        </>
                    }
                </div>
            </div>
        </nav>
    );
};

export default MainMenu;
