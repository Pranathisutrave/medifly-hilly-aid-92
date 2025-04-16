
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";
import MedflyLogo from "./MedflyLogo";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="medfly-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <MedflyLogo className="filter brightness-0 invert" />
            </Link>
            <p className="text-gray-400 mb-6">
              Delivering essential medicines to remote and hilly areas using drone technology, saving lives when every minute counts.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/diagnosis" className="text-gray-400 hover:text-white transition-colors">AI Diagnosis</Link>
              </li>
              <li>
                <Link to="/coverage" className="text-gray-400 hover:text-white transition-colors">Coverage Areas</Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Medical Disclaimer</Link>
              </li>
              <li>
                <Link to="/licensing" className="text-gray-400 hover:text-white transition-colors">Licensing</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-medfly-blue mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Drone Street, Tech City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-medfly-blue mr-3 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-medfly-blue mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@medifly.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MediFly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
