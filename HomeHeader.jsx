import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Menu, X, Plus } from 'lucide-react';
import user from '../droppblog/src/Assets/img.jpeg'

function HomeHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white text-gray-900 shadow-sm sticky top-0 z-50 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8 min-w-0 flex-nowrap">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-serif tracking-tight whitespace-nowrap min-w-0">
          Dropp<span className="text-black">Blog</span>
        </Link>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 mx-6 max-w-lg min-w-0">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4 min-w-0">
          <Link
            to="/create-post"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Create Post
          </Link>

          <button className="relative hover:text-black transition">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full" />
          </button>

          <Link to="/profile">
            <img
            src={user}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border"
          />
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4 overflow-x-hidden">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          <Link
            to="/create-post"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Create Post
          </Link>

          <button className="relative hover:text-black transition">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full" />
          </button>

          <Link to="/profile">
            <img
            src={user}
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border"
          />
          </Link>
        </div>
      )}
    </header>
  );
}

export default HomeHeader;
