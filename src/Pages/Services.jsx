// src/Pages/Services.jsx
import { Camera, Flame, ShieldAlert, Fingerprint, Check } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import cctv from "../assets/photos/cctv.jpg";
import fire from "../assets/photos/fire.jpg";
import alarm from "../assets/photos/alarm.jpg";
import bio from "../assets/photos/biometric.jpg";
import Card from "./Card";
import SEO from "../components/SEO";
const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "CCTV Surveillance Systems",
      description:
        "Complete CCTV solutions with real-time monitoring for homes and businesses.",
      features: [
        "CCTV camera installation",
        "DVR / NVR setup",
        "Remote monitoring",
        "Maintenance & repair",
      ],
      img: cctv,
    },
    {
      icon: Flame,
      title: "Fire Alarm Systems",
      description:
        "Advanced fire detection systems to ensure safety and early alerts.",
      features: [
        "Fire alarm installation",
        "Fire detection sensors",
        "Safety alert systems",
      ],
      img: fire,
    },
    {
      icon: ShieldAlert,
      title: "Security Alarm Systems",
      description:
        "Intrusion detection and emergency alert systems for complete protection.",
      features: ["IP alarm panels", "Intrusion detection", "Emergency alerts"],
      img: alarm,
    },
    {
      icon: Fingerprint,
      title: "Motion & Biometric Security",
      description:
        "Modern access control with biometric and motion-based systems.",
      features: ["Motion sensors", "Tamper sensors", "Biometric systems"],
      img: bio,
    },
  ];

  const faqs = [
    {
      question: "Do you provide maintenance services?",
      answer:
        "Yes, we offer annual maintenance and repair services for all security systems.",
    },
    {
      question: "Can I monitor my CCTV remotely?",
      answer:
        "Absolutely, all CCTV systems can be monitored via mobile or desktop apps.",
    },
    {
      question: "Are the fire alarms certified?",
      answer:
        "Yes, all our fire alarm systems comply with local and international safety standards.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      <SEO
        title="Security System Services in Surat | CCTV, Fire Alarm"
        description="Complete CCTV, fire alarm and biometric security services in Surat with installation and maintenance."
        keywords="security services Surat, CCTV services Surat, fire alarm Surat"
      />
      <section className="py-20 bg-blue-50">
        {/* HEADING */}
        <div className="max-w-6xl mx-auto px-6 text-center mb-16">
          <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-3">
            Our Services
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
            Smart Security Solutions
          </h1>

          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We provide complete security solutions including CCTV, fire alarms,
            burglar systems and biometric access to keep your home and business
            safe.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group"
            >
              {/* IMAGE */}
              <div className="w-full h-48 md:h-56 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6 md:p-7">
                {/* ICON + TITLE */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-blue-100 rounded-full shrink-0">
                    <s.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {s.title}
                  </h3>
                </div>

                {/* SUB TITLE */}
                <p className="text-blue-600 text-xs sm:text-sm font-medium mb-3">
                  Professional CCTV & Security Solution
                </p>

                {/* DESCRIPTION */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
                  {s.description} High-quality installation, monitoring systems,
                  and reliable support.
                </p>

                {/* FEATURES */}
                <ul className="space-y-1 text-[11px] sm:text-xs mb-3">
                  {s.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-slate-700"
                    >
                      <span className="text-blue-600 mt-[2px]">✔</span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA BUTTON */}
                <a
                  href="https://wa.me/918200572237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                >
                  Get Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Card />

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-12">
          Why Choose SS Surveillance?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <Camera className="text-blue-600 w-10 h-10 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Advanced Technology</h3>
            <p className="text-gray-600">
              Latest CCTV, fire alarms & biometric systems for complete
              protection.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <ShieldAlert className="text-blue-600 w-10 h-10 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">Certified Professionals</h3>
            <p className="text-gray-600">
              Trained, certified & experienced team for installations &
              maintenance.
            </p>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <Flame className="text-blue-600 w-10 h-10 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock support & monitoring for your peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-4 text-left">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-4 border rounded-lg hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-1">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
