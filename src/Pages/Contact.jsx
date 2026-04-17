import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import SEO from "../components/SEO";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = `Hello SS Surveillance,

I want CCTV installation service in Surat.

👤 Name: ${formData.name.trim()}
📧 Email: ${formData.email.trim()}
💬 Message: ${formData.message.trim()}`;

    const url = `https://wa.me/918200572237?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <SEO
        title="Contact SS Surveillance | CCTV Service in Surat"
        description="Contact us for CCTV installation and security services in Surat."
        keywords="CCTV Surat, security system Surat"
      />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <div className="space-y-6 pr-6 md:pr-12 border-r border-gray-300">
            <h2 className="text-3xl font-bold mb-6">Contact Details</h2>

            {/* Mobile */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <Phone className="w-7 h-7 text-blue-600" />
              <div>
                <p className="font-semibold">Mobile Number</p>
                <a
                  href="tel:+917862094259"
                  className="text-gray-600 hover:text-blue-500"
                >
                  +91 7862094259
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() =>
                window.open("https://wa.me/918200572237", "_blank")
              }
            >
              <MessageCircle className="w-7 h-7 text-green-500" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-gray-600">+91 8200572237</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <Mail className="w-7 h-7 text-red-500" />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:sssurveillance.service@gmail.com"
                  className="text-gray-600 hover:text-blue-500"
                >
                  sssurveillance.service@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <MapPin className="w-7 h-7 text-purple-600 mt-1" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">
                  Shop no. 111, Omkar Plaza, 1st Floor, Priyanka Chowkdi,
                  Bhestan, Surat, Gujarat – 395023
                </p>
              </div>
            </div>

            {/* Timing */}
            <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <p className="font-semibold mb-2">Working Hours</p>
              <p className="text-gray-600">
                Monday – Saturday: 10:00 AM – 7:00 PM
              </p>
              <p className="text-red-500 text-sm mt-1">Sunday: Closed</p>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Get Free Consultation
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full p-3 border rounded-lg"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full p-3 border rounded-lg"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Requirement"
                rows="4"
                required
                className="w-full p-3 border rounded-lg"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-green-600 text-white p-3 rounded-lg font-semibold"
              >
                Send on WhatsApp
              </button>
            </form>
          </div>
          {/* 🔥 GOOGLE MAP */}
          <div className="mt-16 col-span-1 md:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
              Our Location in Surat
            </h2>

            <div className="w-full h-[280px] sm:h-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-lg border">
              <iframe
                src="https://www.google.com/maps?q=Omkar%20Plaza%20Bhestan%20Surat&z=15&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                title="SS Surveillance Location Surat"
              ></iframe>
            </div>

            <p className="text-center text-gray-600 text-sm mt-4">
              Located in Bhestan, Surat. We provide CCTV installation and
              security services across Surat.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
