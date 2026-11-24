
import {
  HeartHandshake,
  Mail,
  Phone,
  MapPin
} from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#103b2d] text-white pt-16 pb-6">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-[#16a675] p-2.5 rounded-xl">
                <HeartHandshake size={26} />
              </div>

              <h2 className="text-xl font-bold">
                CareConnect
              </h2>
            </div>

            <p className="text-green-100/70 text-sm leading-7 max-w-xs">
              Connecting elderly people with compassionate caregivers
              to make everyday life safer, healthier and happier.
            </p>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#16a675] transition-all duration-300 hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#16a675] transition-all duration-300 hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#16a675] transition-all duration-300 hover:-translate-y-1"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-sm text-green-100/70">
              <Link to="/" className="hover:text-white transition">Home</Link>
              <Link to="/about" className="hover:text-white transition">About Us</Link>
              <Link to="/services" className="hover:text-white transition">Our Services</Link>
              <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Our Services
            </h3>

            <div className="flex flex-col gap-4 text-sm text-green-100/70">
              <span>Personal Care</span>
              <span>Care Scheduling</span>
              <span>Emergency Assistance</span>
              <span>Medical Appointments</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-5 text-sm text-green-100/70">

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#16a675]" />
                support@careconnect.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#16a675]" />
                +91 98765 43210
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-[#16a675]" />
                Kerala, India
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-xs text-green-100/50">
            © {new Date().getFullYear()} CareConnect. All rights reserved.
          </p>

          <p className="text-xs text-green-100/50">
            Made with care for a better tomorrow.
          </p>
        </div>

      </div>
    </footer>
  );
}
export default Footer