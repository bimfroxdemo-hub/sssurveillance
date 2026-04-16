// src/Pages/Client.jsx
import React from "react";
import { motion } from "framer-motion";

// Logos
import HDFC from "../assets/client/hdfc-logo.jpg";
import SBI from "../assets/client/sbi-logo.jpg";
import BankofBaroda from "../assets/client/Bank-of-Baroda.jpg";
import Zudio from "../assets/client/zudio-logo.png";
import Zara from "../assets/client/Zara-logo.jpg";
import CMS from "../assets/client/CMS-logo.jpg";
import VCTech from "../assets/client/VC-Tech-logo.jpg";
import FeelSafe from "../assets/client/feelsafe-logo.jpg";
import Blinkit from "../assets/photos/Blinkit.png";
import IIFLFinance from "../assets/client/IIFL-Finance-logo.jpg";
import MuthoothFinance from "../assets/client/Muthooth-Finance-logo.jpg";
import Soteria from "../assets/client/Soteria-logo.jpg";
import cbi from "../assets/client/cbi.jpg";

const clients = [
  HDFC, SBI, BankofBaroda, Zudio, CMS,
  VCTech,, Zara, FeelSafe, Blinkit, IIFLFinance, MuthoothFinance,cbi ,Soteria,
];

const Client = () => {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Trusted by <span className="text-blue-600">Leading Brands</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-3xl mx-auto">
          We provide top-notch CCTV and security solutions for banks, offices, and businesses across Surat.
        </p>
      </div>

      {/* Auto-slide carousel */}
      <motion.div
        className="flex w-[200%] gap-8 animate-scroll"
        style={{ display: "flex" }}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {clients.concat(clients).map((logo, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 flex items-center justify-center h-32 w-48 flex-shrink-0"
          >
            <img
              src={logo}
              alt={`Client ${i}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </motion.div>

      {/* CSS for smooth scroll */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-scroll {
            display: flex;
            gap: 2rem;
            animation: scroll 20s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Client;