import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-xl font-bold flex justify-start">
        <img
          className="w-[50px] rounded-xl"
          alt="app-logo"
          src="/images/app-logo.png"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex justify-between w-[60%]">
        <Link to="/" className="no-underline text-white hover:text-gray-300">
          Home
        </Link>
        <Link to="/friends" className="no-underline text-white hover:text-gray-300">
          Friends
        </Link>
        <Link to="/groups" className="no-underline text-white hover:text-gray-300">
          Groups
        </Link>
        <Link to="/my-expenses" className="no-underline text-white hover:text-gray-300">
          My Expenses
        </Link>
        <Link to="/profile" className="no-underline text-white hover:text-gray-300">
          Profile
        </Link>
      </div>

      {/* Hamburger Button (only on small screens) */}
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
        <span className="w-6 h-0.5 bg-white"></span>
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-[70px] right-4 bg-gray-900 rounded-lg shadow-lg p-4 flex flex-col space-y-3 md:hidden">
          <Link to="/" className="no-underline text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/friends" className="no-underline text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Friends
          </Link>
          <Link to="/groups" className="no-underline text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Groups
          </Link>
          <Link to="/my-expenses" className="no-underline text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
            My Expenses
          </Link>
          <Link to="/profile" className="no-underline text-white hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Profile
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
