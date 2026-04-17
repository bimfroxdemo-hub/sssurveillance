import { NavLink } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-200">

      {/* Top Section */}
      <div className="container mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Company Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="SS Surveillance Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          <p className="text-sm font-medium">Owner: Thakur Yogendra</p>
          <p className="text-sm">6+ Years Experience in Security Systems</p>
          <p className="text-sm">GST: 24BGUPT6842G2ZQ</p>

          <p className="text-sm mt-3 leading-relaxed">
            SS Surveillance provides CCTV installation, fire alarm systems,
            and complete security solutions across Surat for homes,
            offices, and businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3 text-sm">
            <li><NavLink to="/" className="hover:text-blue-400 transition">Home</NavLink></li>
            <li><NavLink to="/about" className="hover:text-blue-400 transition">About</NavLink></li>
            <li><NavLink to="/services" className="hover:text-blue-400 transition">Services</NavLink></li>
            <li><NavLink to="/projects" className="hover:text-blue-400 transition">Projects</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-blue-400 transition">Contact</NavLink></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">
            Contact Us
          </h3>

          <ul className="space-y-4 text-sm">

            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-blue-400 mt-1" />
              <span>
                CCTV Installation Services in Bhestan, Surat, Gujarat – 395023
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone size={20} className="text-blue-400" />
              <a href="tel:+917862094259" className="hover:text-blue-400">
                +91 7862094259
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail size={20} className="text-blue-400" />
              <a href="mailto:sssurveillance.service@gmail.com" className="hover:text-blue-400">
                sssurveillance.service@gmail.com
              </a>
            </li>

          </ul>

          {/* CTA */}
          <a
            href="https://wa.me/918200572237?text=Hi%20I%20want%20CCTV%20installation%20in%20Surat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition shadow-lg"
          >
            WhatsApp Now
          </a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-blue-800 text-center py-5 text-sm text-gray-400">
        © {new Date().getFullYear()} SS Surveillance Services. All Rights Reserved.
        <br />
        <span>
          Made by{" "}
          <a
            href="https://www.bimfrox.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 font-medium"
          >
            BIMFROX 
          </a>
        </span>
      </div>

    </footer>
  );
};

export default Footer;