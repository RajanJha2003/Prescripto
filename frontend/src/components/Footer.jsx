import React from 'react';
import { assets } from '../assets/assets_frontend/assets';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <img className="h-12 w-auto mb-6" src={assets.logo} alt="Prescripto" />
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem repellat optio magni id. Minima, unde! Assumenda ducimus sunt illum corporis molestiae.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Contact Us', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-600">
                <Phone className="h-5 w-5 mr-2 text-blue-600" />
                <span>+1 390 5495 443</span>
              </li>
              <li className="flex items-center text-gray-600">
                <Mail className="h-5 w-5 mr-2 text-blue-600" />
                <span>prescripto@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="py-6 text-sm text-center text-gray-600">
            Copyright © 2025 Prescripto - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;