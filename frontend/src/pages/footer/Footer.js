import React from 'react';
import footer from '../../assets/footer.png';

const Footer = () => {
  return (
    <div className="w-full">
      {/* Main Footer with bg image */}
      <div
        className="relative w-full bg-center bg-cover"
        style={{ backgroundImage: `url(${footer})` }}
      >
        {/* Green overlay */}
        <div className="absolute inset-0 bg-green-800 bg-opacity-90"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 text-white">
          {/* Get In Touch */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-sm mb-2">123 Street, City, Country</p>
            <p className="text-sm mb-2">+123 456 789</p>
            <p className="text-sm">info@example.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Popular Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Popular Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Testimonials</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter (popping out) */}
          <div className="relative">
            <div className="absolute -right-1/3 top-0 w-[120%] md:w-[140%] bg-yellow-400 text-black p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-sm mb-4">Subscribe to our newsletter to get the latest updates.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="flex-1 px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button className="px-4 py-2 bg-green-700 text-white rounded-r-md hover:bg-green-800">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full h-[70px] bg-slate-800 flex items-center justify-center text-center text-white px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold">Your Company</span>. All Rights Reserved.
          </p>
          <p className="text-sm mt-2 md:mt-0">
            Designed & Developed by <span className="font-semibold">Your Company</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
