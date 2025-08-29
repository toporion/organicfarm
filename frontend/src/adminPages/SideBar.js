import React from 'react';
import {
    FaTachometerAlt, FaCalendarAlt, FaUsers, FaCog,
    FaMoneyCheckAlt, FaTasks, FaSignOutAlt
} from 'react-icons/fa';
import { FaScissors, FaUsersViewfinder } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../hook/UseAuth';


// ✅ Menu items with proper 'label' and 'roles'
const menuItems = [
 
    { label: 'Dashboard', icon: <FaTachometerAlt />, href: '/admin', roles: ['admin'] },
    { label: 'Users', icon: <FaUsers />, href: '/admin/users', roles: ['admin'] },
    { label: 'Services', icon: <FaScissors />, href: '/admin/show_services', roles: ['admin'] },
    { label: 'Appointments', icon: <FaCalendarAlt />, href: '/admin/appointments', roles: ['admin', 'staff'] },
    { label: 'Clients', icon: <FaUsersViewfinder />, href: '/admin/clients', roles: ['admin'] },
    { label: 'Staff', icon: <FaCog />, href: '/admin/show_staff', roles: ['admin'] },
    { label: 'Total Task', icon: <FaTasks />, href: '/admin/tasks', roles: ['staff'] },
    { label: 'Total Payment', icon: <FaMoneyCheckAlt />, href: '/admin/payments', roles: ['staff', 'user'] },
    { label: 'Booking', icon: <FaCalendarAlt />, href: '/booking', roles: ['user'] },
    { label: 'Message', icon: <FaUsers />, href: '/messages', roles: ['user'] },
];

const SideBar = () => {
    const { logoutUser, isAuthenticated, user } = UseAuth() // ✅ Get user and auth state
    const navigate = useNavigate();

    // ✅ Handle logout
    const handleLogOut = () => {
        logoutUser();
        navigate('/login');
    };

    // ✅ If user is not loaded yet, show loading placeholder
    if (!user) {
        return (
            <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-500 to-blue-500 w-56 text-white flex items-center justify-center">
                <p>Loading menu...</p>
            </div>
        );
    }

    // ✅ Filter menu safely based on user role
    const filteredMenu = menuItems.filter(item =>
        item.roles.includes(user?.role)
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-500 to-blue-500 w-56 text-white px-4 flex flex-col justify-between py-6">
            {/* ✅ Top section: Menu items */}
            <div>
                <ul className="space-y-4">
                    {filteredMenu.map((item, idx) => (
                        <li key={idx}>
                            {/* ✅ Use Link for SPA navigation */}
                            <Link
                                to={item.href}
                                className="flex items-center gap-3 px-8 py-3 text-gray-300 hover:bg-gray-900 hover:text-white transition-colors"
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ✅ Bottom section: Logout button */}
            <button
                onClick={handleLogOut}
                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-200"
            >
                <FaSignOutAlt />
                {isAuthenticated === true && 'Log Out'}
            </button>
        </div>
    );
};

export default SideBar;
