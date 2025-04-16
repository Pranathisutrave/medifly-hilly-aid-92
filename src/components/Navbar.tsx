
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MedflyLogo from "./MedflyLogo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-medfly-blue font-semibold"
      : "text-gray-600 hover:text-medfly-blue";
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-10">
      <div className="medfly-container py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <MedflyLogo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className={`${isActive("/")} transition-colors`}>
              Home
            </Link>
            <Link to="/diagnosis" className={`${isActive("/diagnosis")} transition-colors`}>
              AI Diagnosis
            </Link>
            <Link to="/dashboard" className={`${isActive("/dashboard")} transition-colors`}>
              Dashboard
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/login"
              className={`medfly-button medfly-button-outline ${
                location.pathname === "/login" ? "bg-medfly-blue text-white" : ""
              }`}
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className={`medfly-button medfly-button-primary ${
                location.pathname === "/signup" ? "bg-opacity-90" : ""
              }`}
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`${isActive("/")} block px-4 py-2 rounded-md hover:bg-gray-50`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/diagnosis"
                className={`${isActive("/diagnosis")} block px-4 py-2 rounded-md hover:bg-gray-50`}
                onClick={() => setIsMenuOpen(false)}
              >
                AI Diagnosis
              </Link>
              <Link
                to="/dashboard"
                className={`${isActive("/dashboard")} block px-4 py-2 rounded-md hover:bg-gray-50`}
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className="pt-4 space-y-2">
                <Link
                  to="/login"
                  className="block w-full text-center medfly-button medfly-button-outline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  className="block w-full text-center medfly-button medfly-button-primary"
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
