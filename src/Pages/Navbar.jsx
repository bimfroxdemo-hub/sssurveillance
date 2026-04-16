import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo-2.png";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const whatsappLink =
    "https://wa.me/919427683001?text=Hi%20I%20want%20CCTV%20installation%20service";

  return (
   <nav className="sticky top-0 z-50 bg-white shadow-md">
  <div className="container mx-auto px-12 md:px-20"> {/* more space */}

    {/* Top Bar */}
    <div className="flex justify-between items-center py-4">

  {/* Logo */}
      <NavLink to="/">
        <img src={logo} alt="SS Surveillance Logo" className="h-10 w-auto" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10"> {/* more gap between items */}
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `font-medium transition ${
                isActive
                  ? "text-blue-600"
                  : "text-gray-800 hover:text-blue-600"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden md:block">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition"
        >
          Free Site Visit
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-gray-800" />
        ) : (
          <Menu className="w-6 h-6 text-gray-800" />
        )}
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  <div
    className={`md:hidden bg-white shadow-md transition-all duration-300 ${
      isOpen ? "max-h-100 py-4" : "max-h-0 overflow-hidden"
    }`}
  >
    <div className="flex flex-col items-center gap-4 px-8"> {/* more padding */}
      {navItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          onClick={() => setIsOpen(false)}
          className="text-gray-800 font-medium hover:text-blue-600"
        >
          {item.name}
        </NavLink>
      ))}

      {/* Mobile CTA */}
      <a
        href={whatsappLink}
        target="_blank"
        className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
      >
        Free Site Visit
      </a>
    </div>
  </div>
</nav>
  );
};

export default Navbar;