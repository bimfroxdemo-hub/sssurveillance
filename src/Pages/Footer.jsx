import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-blue-900/70 backdrop-blur-md text-gray-200">

      {/* Top Section */}
      <div className="container mx-auto px-8 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Company Info */}
        <div className="space-y-4">
          {/* Logo */}
<div className="flex items-center gap-3">
  <img
    src={logo}
    alt="SS Surveillance Logo"
    className="h-12 w-auto object-contain brightness-110 contrast-125 drop-shadow-md hover:scale-105 transition duration-300"
  />
</div>
          <p className="text-sm">Owner: Thakur Yogendra</p>
          <p className="text-sm">Experience: 6+ Years</p>
          <p className="text-sm">GST: 24BGUPT6842G2ZQ</p>
          <p className="text-sm">Udyam: UDYAM-GJ-22-0251321</p>

          <p className="text-sm mt-4">
            We provide reliable CCTV, fire alarm, and complete security
            solutions for homes and businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li><NavLink to="/" className="hover:text-blue-300">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-blue-300">About</NavLink></li>
            <li><NavLink to="/services" className="hover:text-blue-300">Services</NavLink></li>
            <li><NavLink to="/projects" className="hover:text-blue-300">Projects</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-300">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">

            <li className="flex items-start space-x-3">
              <MapPin size={20} className="text-blue-300 mt-1" />
              <span>
                Shop no. 111, Omkar Plaza, 1st Floor, Priyanka Chowkdi,
                Bhestan, Surat, Gujarat – 395023
              </span>
            </li>

            <li className="flex items-center space-x-3">
              <Phone size={20} className="text-blue-300" />
              <span>+91 7862094259</span>
            </li>

            <li className="flex items-center space-x-3">
              <Mail size={20} className="text-blue-300" />
              <span>sssurveillance.service@gmail.com</span>
            </li>

          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/918200572237?text=Hi%20I%20want%20CCTV%20installation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-200 transition"
          >
            WhatsApp Now
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 text-center py-6 text-sm text-gray-300">
        © {new Date().getFullYear()} SS Surveillance Services. All Rights Reserved.{" "}
        Made by{" "}
        <a
          href="https://www.bimfrox.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 hover:text-blue-600 font-medium"
        >
          Bimfrox
        </a>
      </div>

    </footer>
  );
};

export default Footer;