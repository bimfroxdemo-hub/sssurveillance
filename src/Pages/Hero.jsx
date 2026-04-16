import { ArrowRight, Phone } from "lucide-react";
import { NavLink } from "react-router-dom";
import herobg from "../assets/herobg.jpg";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${herobg})` }}
      >
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-700/50 sm:from-blue-900/70 sm:to-blue-700/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-5xl flex flex-col justify-center items-center h-full">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug mb-4">
          <span className="text-blue-300">Your Trusted</span>
          <span className="block">Security Service Partner</span>
        </h1>

        {/* Tagline */}
        <p className="text-gray-200 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Professional CCTV installation, monitoring, and maintenance services.
          Protect your property with high-quality surveillance solutions tailored to your needs.
        </p>

        {/* Highlight Boxes */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 w-full justify-center items-center">
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-md text-white font-semibold text-base sm:text-lg md:text-xl w-full sm:w-auto">
            6+ Years Industry Experience
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-md text-white font-semibold text-base sm:text-lg md:text-xl w-full sm:w-auto">
            Trusted by Leading Brands
          </div>
          <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-md text-white font-semibold text-base sm:text-lg md:text-xl w-full sm:w-auto">
            Complete Security System Installation & Service
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center w-full sm:w-auto">
          <a
            href="https://wa.me/918200572237?text=Hi%20I%20want%20CCTV%20installation%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition text-base sm:text-base w-full sm:w-auto"
          >
            <Phone className="w-5 h-5" />
            Free Site Visit
            <ArrowRight className="w-5 h-5" />
          </a>

          <NavLink
            to="/projects"
            className="flex items-center justify-center px-5 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-700 transition text-base sm:text-base w-full sm:w-auto"
          >
            View Projects
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;