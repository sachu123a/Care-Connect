
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HeartHandshake, Menu, X, ArrowRight } from "lucide-react";

 function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#e7eee9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="bg-[#087f5b] p-2.5 rounded-xl shadow-md shadow-green-900/10">
            <HeartHandshake size={25} className="text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-[#17352b] tracking-tight">
              Care<span className="text-[#087f5b]">Connect</span>
            </h1>
            <p className="text-[10px] text-gray-400 tracking-[2px] uppercase">
              Care with compassion
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-all duration-300 hover:text-[#087f5b] ${
                  isActive
                    ? "text-[#087f5b]"
                    : "text-gray-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

       
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-5 py-2.5 text-sm font-semibold text-[#087f5b] hover:bg-green-50 rounded-xl transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="flex items-center gap-2 px-5 py-2.5 bg-[#087f5b] text-white text-sm font-semibold rounded-xl btn-hover"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>

      
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-[#087f5b]"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </div>


      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 border-t" : "max-h-0"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-4 bg-white">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-[#087f5b]" : "text-gray-600"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="text-sm font-semibold text-[#087f5b]"
          >
            Login
          </Link>

          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="bg-[#087f5b] text-white text-center py-3 rounded-xl font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Navbar