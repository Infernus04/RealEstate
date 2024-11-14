import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-slate-200">
      <div className="flex max-w-6xl mx-auto p-6 justify-between items-center">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <img
            src="/Infernus.png"
            alt="Logo"
            className="h-10 w-10 rounded-full mr-2 transition-transform duration-200 ease-in-out hover:scale-105"
          />
          <h1 className="font-bold text-xl">Real Estate</h1>
        </Link>

        {/* Links Section - Hidden on small screens */}
        <ul className="hidden md:flex gap-7 pl-12">
          <Link to="/">
            <li className="hover:text-blue-600 transition-colors duration-200">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hover:text-blue-600 transition-colors duration-200">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-blue-600 transition-colors duration-200">
              Contact
            </li>
          </Link>
          <Link to="/agents">
            <li className="hover:text-blue-600 transition-colors duration-200">
              Agents
            </li>
          </Link>
        </ul>

        {/* Sign In/Sign Out Section - Hidden on small screens */}
        <ul className="hidden md:flex gap-5">
          <Link to="/signin">
            <li className="hover:text-blue-600 transition-colors duration-200">
              Sign In
            </li>
          </Link>
          <Link to="/signout">
            <li className="hover:text-blue-600 transition-colors duration-200">
              Sign Out
            </li>
          </Link>
        </ul>

        {/* Menu Icon for Small Screens */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden p-2 focus:outline-none">
          <MenuIcon className="h-8 w-8 text-gray-700" />
        </button>
      </div>

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-1/2 bg-slate-200 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-5 p-4 mt-20">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <li className="hover:text-blue-600 transition-colors duration-200">
              Home
            </li>
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            <li className="hover:text-blue-600 transition-colors duration-200">
              About
            </li>
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <li className="hover:text-blue-600 transition-colors duration-200">
              Contact
            </li>
          </Link>
          <Link to="/agents" onClick={() => setIsMenuOpen(false)}>
            <li className="hover:text-blue-600 transition-colors duration-200">
              Agents
            </li>
          </Link>
          <Link to="/signin" onClick={() => setIsMenuOpen(false)}>
            <li className="hover:text-blue-600 transition-colors duration-200">
              Sign In
            </li>
          </Link>
          <Link to="/signout" onClick={() => setIsMenuOpen(false)}>
            <li className="hover:text-blue-600 transition-colors duration-200">
              Sign Out
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
