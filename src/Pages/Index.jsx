import { ArrowRight, Shield, Users, MapPin, Camera } from "lucide-react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import Client from "./Clients";

// Example service images (replace with real SS Surveillance photos)
import cctv from "../assets/photos/cctv.jpg";
import fire from "../assets/photos/fire.jpg";
import alarm from "../assets/photos/alarm.jpg";
import bio from "../assets/photos/biometric.jpg";
import SecuritySystems from "../assets/photos/SecuritySystems.jpg";
const Index = () => {
  const services = [
    {
      title: "CCTV Surveillance Systems",
      description:
        "Installation, DVR/NVR setup, and remote monitoring for real-time security access.",
      icon: Camera,
      img: cctv,
    },
    {
      title: "Fire Alarm Systems",
      description:
        "Advanced fire detection sensors and alert systems for homes and offices.",
      icon: Shield,
      img: fire,
    },
    {
      title: "Security Alarm Systems",
      description:
        "Intrusion detection and emergency alert setups for complete protection.",
      icon: Users,
      img: alarm,
    },
    {
      title: "Motion & Biometric Security",
      description:
        "Modern access control systems with motion sensors and biometric verification.",
      icon: MapPin,
      img: bio,
    },
  ];

  const whatsappLink =
    "https://wa.me/918200572237?text=Hi%20I%20want%20a%20security%20solution%20consultation"; // SS Surveillance WhatsApp

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />

      {/* Services Overview */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-8 md:px-16"> {/* increased padding */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-blue-900">
              Our Security Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive surveillance and security services to protect your home, office, and business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"> {/* more gap */}
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 text-center rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300 border-t-4 border-blue-600"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <NavLink
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-md transition"
            >
              View All Services <ArrowRight className="ml-2" />
            </NavLink>
          </div>
        </div>
      </section>



      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Why Choose SS Surveillance?
            </h2>

            <p className="text-gray-600 mb-6">
              We provide reliable and advanced security solutions tailored for
              businesses, banks, and offices with expert support.
            </p>

            <ul className="space-y-4">
              {[
                "6+ Years Experience in Security Systems",
                "Professional Installation Team",
                "Trusted by Banks & Companies",
                "Complete CCTV & Alarm Solutions",
                "24/7 Support & Maintenance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-green-500 text-lg">✔</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT IMAGE */}
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={SecuritySystems}
              alt="Security Systems"
              className="w-[400px] h-[380px] object-cover rounded-lg"
            />
          </div>

        </div>
      </section>


      {/* client brand*/}
      <Client />


      {/* Featured Projects */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-8 md:px-16"> {/* increased padding */}

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
              Our Recent Installations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our latest CCTV, fire alarm, and biometric security projects
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="relative rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-lg font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white text-blue-800">
        <div className="container mx-auto px-8 md:px-16 text-center"> {/* increased padding */}

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Secure Your Property Today
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-black">
            Get a free security consultation and installation proposal.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 font-semibold text-lg rounded-lg shadow-md hover:bg-gray-100 transition"
            >
              Get Free Consultation
            </a>
            <NavLink
              to="/projects"
              className="px-8 py-4 border-2 border-blue text-blue-500 font-semibold text-lg rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition"
            >
              View Installations
            </NavLink>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;