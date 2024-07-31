import React from 'react';
import FacebookIcon from './Facebook.png';
import TwitterIcon from './Twitter.png';
import InstagramIcon from './Instagram.png';
import GitHubIcon from './GitHub.png';

export const Footer = () => {
return (
    <footer className="bg-DarkRed sticky absolute bottom-0 flex-wrap z-[10] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-6">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap md:justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Company</h5>
            <ul>
            <li><a href="#" className="hover:text-white text-lg mb-1">About Us</a></li>
            <li><a href="#" className="hover:text-white text-lg mb-1">Services</a></li>
            <li><a href="#" className="hover:text-white text-lg mb-1">Careers</a></li>
            <li><a href="#" className="hover:text-white text-lg mb-1">Contact</a></li>
            </ul>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-xl font-bold mb-4">Follow Us</h5>
            <div className="flex justify-center space-x-4">
            <a href="https://www.facebook.com/" className="text-white hover:text-gray-400" aria-label="Facebook">
                <img src={FacebookIcon} alt="Facebook" className="w-14 h-14 opacity-50 hover:opacity-100"/>
            </a>
            <a href="https://x.com/?lang=en" className="text-white hover:text-gray-400" aria-label="Twitter">
                <img src={TwitterIcon} alt="Twitter" className="w-14 h-14 opacity-50 hover:opacity-100"/>
            </a>
            <a href="https://www.instagram.com/" className="text-white hover:text-gray-400" aria-label="Instagram">
                <img src={InstagramIcon} alt="Instagram" className="w-14 h-14 opacity-50 hover:opacity-100"/>
            </a>
            <a href="https://github.com/ZachMcD223/MileStone-3.git" className="text-white hover:text-gray-400" aria-label="GitHub">
                <img src={GitHubIcon} alt="GitHub" className="w-14 h-14 opacity-50 hover:opacity-100"/>
            </a>
            </div>
        </div>
        <div className="w-full md:w-1/3">
            <h5 className="text-xl font-bold mb-4">Contact Us</h5>
            <p className="text-lg mb-1">123 Main Street</p>
            <p className="text-lg mb-1">Houston, Texas, 77001</p>
            <p className="text-lg mb-1">Email: <a href="mailto:contact@example.com" className="hover:text-white">contact@example.com</a></p>
            <p>Phone: (713) 555-5555</p>
        </div>
        </div>
        <div className="text-xl font-bold mb-4 mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; 2024 Aztec Chicken. All rights reserved.</p>
        </div>
    </div>
    </footer>
);
};

export default Footer;
