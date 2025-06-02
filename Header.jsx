import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50 overflow-x-hidden">
      <div
        className="max-w-7xl mx-auto flex items-center justify-between p-4 px-5 sm:px-6 lg:px-8 min-w-0 flex-nowrap"
      >
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide text-black whitespace-nowrap min-w-0"
        >
          Dropp<span className="text-black">BLOG</span>
        </Link>

        {/* Desktop nav - hidden below md */}
        <nav className="hidden md:flex space-x-6 min-w-0 max-w-full flex-shrink-0">
          <Link
            to="/HomePage"
            className="hover:text-black transition truncate max-w-[6rem]"
          >
            Home
          </Link>
          <Link
            to="/Signup"
            className="hover:text-black transition truncate max-w-[8rem]"
          >
            Sign Up
          </Link>
          <Link
            to="/Login"
            className="hover:text-black transition truncate max-w-[6rem]"
          >
            Login
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
          type="button"
        >
          {menuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-inner w-full overflow-x-hidden">
          <div className="flex flex-col space-y-4 p-4 text-black min-w-0">
            <Link
              to="/HomePage"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black transition truncate"
            >
              Home
            </Link>
            <Link
              to="/Signup"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black transition truncate"
            >
              Sign Up
            </Link>
            <Link
              to="/Login"
              onClick={() => setMenuOpen(false)}
              className="hover:text-black transition truncate"
            >
              Login
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
