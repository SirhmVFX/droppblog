import React from 'react'
import { Link } from 'react-router-dom'
import { Bell } from 'lucide-react'

function HomeHeader() {
  return (
    <header className="bg-white text-gray-900 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold font-serif tracking-tight">
          Dropp<span className="text-black">Blog</span>
        </Link>

        {/* Center Navigation */}
        <div className="flex-1 mx-8 max-w-lg">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-6">
          <Link
            to="/write"
            className="text-sm font-medium hover:text-black transition"
          >
            Write
          </Link>

          <button className="relative hover:text-black transition">
            <Bell className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              
            </span>
          </button>

          <img
            src="https://via.placeholder.com/36"
            alt="Profile"
            className="w-9 h-9 rounded-full object-cover border"
          />
        </div>
      </div>
    </header>
  )
}

export default HomeHeader
