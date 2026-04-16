// src/Pages/AboutBusiness.jsx
import { Phone, Mail, MapPin, Shield, Target } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import founder from "../assets/founder.png";
import { Briefcase, Camera, Users, ShieldCheck } from "lucide-react";

const AboutBusiness = () => {
  return (
    <div className="bg-[#F4FAFF] min-h-screen">
      <Navbar />

      {/* 🔥 HERO (Light Glassy) */}
      <section className="relative py-20 text-center overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-200 blur-[150px] opacity-60"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
            SS Surveillance Services
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Smart Security Solutions Across Gujarat
          </p>

          {/* Glass badge */}
          <div className="mt-6 inline-block bg-white/60 backdrop-blur px-5 py-2 rounded-full border border-white/40 shadow-sm text-sm text-slate-700">
            Trusted CCTV & Security Experts
          </div>
        </div>
      </section>

      {/* 🔥 ABOUT SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue-400/20 blur-2xl rounded-2xl group-hover:opacity-40 transition"></div>

              <img
                src={founder}
                alt="Owner"
                className="relative w-[430px] h-[400px] object-cover rounded-2xl 
                border border-white/40 bg-white/60 backdrop-blur shadow-xl"
              />
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Thakur Yogendra
            </h2>

            <p className="text-blue-600 font-semibold mb-4">
              Founder & Owner
            </p>

            <p className="text-slate-600 mb-4 leading-relaxed">
              SS Surveillance over 6 years experience in the security and surveillance industry, and company goal has always been to provide reliable and effective solutions to protect homes and businesses.
            </p>

            <p className="text-slate-600 mb-6 leading-relaxed">
              SS Surveillance specialize in CCTV installation, DVR/NVR setup, fire alarm systems, intrusion detection, and biometric security solutions. company personally ensure that every project is completed with quality, precision, and complete customer satisfaction.
            </p>

            {/* CONTACT */}
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-slate-700">
                <Phone size={18} className="text-blue-600" />+91 7862094259
              </p>
              <p className="flex items-center gap-3 text-slate-700">
                <Mail size={18} className="text-blue-600" /> sssurveillance.service@gmail.com
              </p>
              <p className="flex items-center gap-3 text-slate-700">
                <MapPin size={18} className="text-blue-600" /> Surat, Gujarat
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-gradient-to-b from-[#EAF6FF] to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            { icon: <Briefcase size={20} />, value: "6+", label: "Years Experience" },
            { icon: <Camera size={20} />, value: "500+", label: "Installations" },
            { icon: <Users size={20} />, value: "350+", label: "Happy Clients" },
            { icon: <ShieldCheck size={20} />, value: "99%", label: "Security Focus" },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/40 
        p-6 rounded-3xl text-center shadow-md 
        hover:shadow-[0_25px_80px_rgba(0,0,0,0.15)] 
        hover:-translate-y-3 transition duration-500 overflow-hidden"
            >

              {/* 🔥 Top Gradient Line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-400 to-blue-600 opacity-70"></div>

              {/* Glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-200 blur-2xl opacity-30 group-hover:opacity-60 transition"></div>

              {/* Icon Circle */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 flex items-center justify-center 
          rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white 
          shadow-md group-hover:scale-110 transition">
                  {item.icon}
                </div>
              </div>

              {/* Value */}
              <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                {item.value}
              </h3>

              {/* Label */}
              <p className="text-sm text-slate-600 mt-1">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* 🔥 MISSION & VISION */}

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          {/* Mission */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-white 
    p-8 rounded-3xl shadow hover:shadow-2xl transition overflow-hidden">

            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-200 blur-2xl opacity-40"></div>

            <Target className="text-blue-600 mb-4 group-hover:scale-110 transition" size={30} />

            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Our Mission
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Our mission is to deliver high-quality surveillance and security
              solutions tailored to each client’s needs. We focus on reliability,
              precision installation, and long-term customer satisfaction.
            </p>
          </div>

          {/* Vision */}
          <div className="group relative bg-gradient-to-br from-blue-50 to-white 
    p-8 rounded-3xl shadow hover:shadow-2xl transition overflow-hidden">

            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 blur-2xl opacity-40"></div>

            <Shield className="text-blue-600 mb-4 group-hover:scale-110 transition" size={30} />

            <h3 className="text-xl font-bold mb-3 text-slate-900">
              Our Vision
            </h3>

            <p className="text-slate-600 leading-relaxed">
              To become one of Gujarat’s most trusted security solution providers by
              continuously innovating and offering advanced, smart, and scalable
              protection systems.
            </p>
          </div>

        </div>
      </section>

      {/* 🔥 SERVICES */}
      {/* 🔥 AREAS WE SERVE */}
      <section className="py-24 px-6 bg-gradient-to-b from-white to-blue-50">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-slate-900">
            Areas We Serve
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-3">
            We provide professional CCTV installation and advanced security solutions
            across Gujarat with fast response and trusted service support.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-5 py-2 text-sm 
bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 rounded-full border font-semibold shadow">
  📍 Available Across Gujarat 
</div>
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {[
            "Surat",
            "Ahmedabad",
            "Vadodara",
            "Rajkot",
            "Bhavnagar",
            "Vapi",
            "Ankleshwar",
            "Navsari",
            "Bharuch"
          ].map((city, i) => (
            <div
              key={i}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/40 
        p-6 rounded-3xl shadow-md text-center overflow-hidden
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] 
        hover:-translate-y-3 transition duration-500"
            >

              {/* Glow Effect */}
              <div className="absolute -top-10 -right-10 w-32 h-32 
        bg-blue-200 blur-2xl opacity-30 group-hover:opacity-60 transition"></div>

              {/* Icon */}
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 flex items-center justify-center 
          rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white 
          shadow group-hover:scale-110 transition">
                  <MapPin size={18} />
                </div>
              </div>

              {/* City */}
              <h3 className="text-lg font-semibold text-slate-900 
        group-hover:text-blue-600 transition">
                {city}
              </h3>

              {/* Subtitle */}
              <p className="text-xs text-slate-500 mt-1">
                CCTV Installation & Security Services
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Line */}
        <div className="text-center mt-14">
          <p className="text-sm text-slate-600 leading-relaxed">
            We provide fast installation, reliable support, and secure surveillance systems
            <span className="block mt-2 text-blue-600 font-semibold text-base">
              Across All Over Gujarat
            </span>
          </p>
        </div>

      </section>
      <Footer />
    </div>
  );
};

export default AboutBusiness;