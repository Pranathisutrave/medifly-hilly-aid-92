
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Services", path: "/#services" },
    { title: "About", path: "/#about" },
    { title: "Contact", path: "/#contact" },
    { title: "AI Diagnosis", path: "/diagnosis" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="medfly-container py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-medfly-blue rounded-full w-10 h-10 flex items-center justify-center">
              <span className="text-white font-bold text-xl">M</span>
            </div>
            <span className="text-xl font-bold text-medfly-blue">MediFly</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-medfly-blue"
                    : "text-gray-600 hover:text-medfly-blue"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="medfly-button medfly-button-outline">
              Login
            </Link>
            <Link to="/signup" className="medfly-button medfly-button-primary">
              Sign Up
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.title}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? "bg-medfly-blue bg-opacity-10 text-medfly-blue"
                      : "text-gray-600 hover:bg-gray-50 hover:text-medfly-blue"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-2 border-t">
                <Link
                  to="/login"
                  className="px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-medfly-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-3 py-2 rounded-md text-base font-medium bg-medfly-blue text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
