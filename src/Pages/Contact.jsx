import Navbar from './Navbar';
import Footer from './Footer';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />

      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE: Stylish Contact Details */}
          <div className="space-y-6 pr-6 md:pr-12 border-r border-gray-300">
            <h2 className="text-3xl font-bold mb-6">Contact Details</h2>

            {/* Individual Cards */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <Phone className="w-7 h-7 text-blue-600" />
              <div>
                <p className="font-semibold">Mobile Number</p>
                <p className="text-gray-600">+91 7862094259</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition cursor-pointer"
              onClick={() => window.open("https://wa.me/918200572237", "_blank")}>
              <MessageCircle className="w-7 h-7 text-green-500" />
              <div>
                <p className="font-semibold">WhatsApp</p>
                <p className="text-gray-600">+91 8200572237</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <Mail className="w-7 h-7 text-red-500" />
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-600">sssurveillance.service@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <MapPin className="w-7 h-7 text-purple-600" />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-600">Shop no. 111, Omkar Plaza, 1st floor, Priyanka Chowkdi, Bhestan, Surat, Gujarat 395023</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
              <p><strong>Opening Time:</strong> 10:00 AM</p>
              <p><strong>Closing Time:</strong> 7:00 PM</p>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-10">
            <h2 className="text-3xl font-bold mb-6 text-center">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block mb-2 font-medium text-gray-700">Full Name</label>
                <input type="text" placeholder="Your Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Email</label>
                <input type="email" placeholder="Your Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
              </div>
              <div>
                <label className="block mb-2 font-medium text-gray-700">Message</label>
                <textarea placeholder="Your Message" rows="5" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition">Send Message</button>
            </form>
          </div>

        </div>
      </section>

      {/* 🔥 MAP */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">
            Our Location
          </h2>

         <iframe
  src="https://maps.google.com/maps?q=Omkar%20Plaza%2C%201st%20floor%2C%20Priyanka%20Chowkdi%2C%20Bhestan%2C%20Surat%2C%20Gujarat%20395023&t=&z=15&ie=UTF8&iwloc=&output=embed"
  className="w-full h-[350px] rounded-xl"
  loading="lazy"
></iframe>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;