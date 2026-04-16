import { MapPin, Calendar, User } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Logos
import HDFC from "../assets/client/hdfc-logo.jpg";
import SBI from "../assets/client/sbi-logo.jpg";
import BankofBaroda from "../assets/client/Bank-of-Baroda.jpg";
import Zudio from "../assets/client/zudio-logo.png";
import Zara from "../assets/client/Zara-logo.jpg";
import CMS from "../assets/client/CMS-logo.jpg";
import VCTech from "../assets/client/VC-Tech-logo.jpg";
import FeelSafe from "../assets/client/feelsafe-logo.jpg";
import Blinkit from "../assets/P/Blinkit.png";
import IIFLFinance from "../assets/client/IIFL-Finance-logo.jpg";
import MuthoothFinance from "../assets/client/Muthooth-Finance-logo.jpg";
import Soteria from "../assets/client/Soteria-logo.jpg";

const Projects = () => {
  const projects = [
    {
      title: "CCTV Surveillance for HDFC Bank",
      client: "HDFC Bank",
      location: "Surat",
      date: "2024",
      desc: "Complete high-security CCTV system installed with real-time monitoring and backup recording for banking operations.",
      details: ["16+ HD Cameras Installed", "Central DVR Setup", "Remote Monitoring Enabled", "Secure Data Storage"],
      logo: HDFC,
    },
    {
      title: "Security System for SBI",
      client: "State Bank of India",
      location: "Surat",
      date: "2024",
      desc: "Integrated CCTV + alarm system with intrusion detection for banking security.",
      details: ["Alarm System Integration", "Intrusion Detection Setup", "Emergency Alert System", "Regular Maintenance Support"],
      logo: SBI,
    },
    {
      title: "Retail Surveillance - Zudio",
      client: "Zudio",
      location: "Surat",
      date: "2023",
      desc: "Smart surveillance system for retail store monitoring and theft prevention.",
      details: ["Wide Angle CCTV Cameras", "Motion Detection Technology", "Live Monitoring System", "Cloud Backup Enabled"],
      logo: Zudio,
    },
    {
      title: "Warehouse Security - Blinkit",
      client: "Blinkit",
      location: "Surat",
      date: "2023",
      desc: "Warehouse security system with night vision & motion sensors.",
      details: ["Night Vision Cameras", "Motion Sensor Detection", "24/7 Recording System", "Instant Alert Notifications"],
      logo: Blinkit,
    },
    {
      title: "Office Security - IIFL Finance",
      client: "IIFL Finance",
      location: "Surat",
      date: "2023",
      desc: "Biometric + CCTV setup for secure office access.",
      details: ["Fingerprint Access Control", "Indoor CCTV Installation", "Secure Entry Management", "Live Monitoring Dashboard"],
      logo: IIFLFinance,
    },
    {
      title: "Premium Store Surveillance - Zara",
      client: "Zara",
      location: "Surat",
      date: "2023",
      desc: "High-end surveillance system for premium retail brand.",
      details: ["HD CCTV Camera Setup", "Real-time Monitoring", "Data Recording System", "Security Alert System"],
      logo: Zara,
    },
    {
      title: "Finance Branch Security - Muthoot Finance",
      client: "Muthoot Finance",
      location: "Surat",
      date: "2022",
      desc: "Full CCTV + alarm system for financial branch security.",
      details: ["Multi Camera Setup", "Alarm System Integration", "Secure Data Backup", "24/7 Monitoring"],
      logo: MuthoothFinance,
    },
    {
      title: "Corporate Security System - CMS",
      client: "CMS",
      location: "Surat",
      date: "2022",
      desc: "Corporate-level security surveillance system.",
      details: ["Full CCTV Setup", "Remote Monitoring Access", "Backup System Integration", "Technical Support Service"],
      logo: CMS,
    },
    {
      title: "Advanced Security - VC Tech",
      client: "VC Tech",
      location: "Surat",
      date: "2022",
      desc: "Comprehensive security solution including CCTV, alarms and access control for corporate office.",
      details: ["Integrated CCTV Cameras", "Alarm Panel Setup", "Controlled Entry System", "Remote Monitoring"],
      logo: VCTech,
    },
    {
      title: "Premium Office Security - Feel Safe",
      client: "Feel Safe",
      location: "Surat",
      date: "2022",
      desc: "High-security setup with monitoring and alarm system for premium office spaces.",
      details: ["HD CCTV Cameras", "Alarm Integration", "Monitoring Dashboard", "24/7 Support"],
      logo: FeelSafe,
    },
    {
      title: "Corporate Surveillance - Soteria",
      client: "Soteria",
      location: "Surat",
      date: "2021",
      desc: "Complete surveillance and alarm system for corporate security.",
      details: ["CCTV Setup", "Access Control", "Alarm Integration", "Maintenance & Support"],
      logo: Soteria,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="py-15 text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4">
          Our Security Projects
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          Advanced CCTV and security solutions delivered for banks, retail stores, and corporate clients across Gujarat.
        </p>
      </section>

      <section className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((p, i) => (
            <div
              key={i}
              className="relative group rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 bg-white"
            >
              {/* Logo Container */}
              <div className="w-full h-32 flex items-center justify-center bg-blue-50 p-4">
                <div className="bg-white p-3 rounded-xl shadow-md w-24 h-24 flex items-center justify-center">
                  <img
                    src={p.logo}
                    alt={p.title}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between">
                <h2 className="text-lg font-bold text-blue-900 mb-2 text-center">{p.title}</h2>

                <div className="flex flex-wrap justify-center gap-2 text-gray-500 text-xs mb-3">
                  <span className="flex items-center gap-1"><User size={14} /> {p.client}</span>
                  <span className="flex items-center gap-1"><MapPin size={14} /> {p.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> {p.date}</span>
                </div>

                <p className="text-gray-600 text-sm mb-3 text-center">{p.desc}</p>

                <ul className="space-y-1 text-gray-700 text-sm mb-4">
                  {p.details.map((d, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-purple-600 font-bold">✔</span>{d}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/918200572237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-5 py-2 bg-blue-600 text-white rounded-xl text-sm hover:bg-blue-700 transition"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;