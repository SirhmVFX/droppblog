import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="bg-white text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide text-white">
          Dropp<span className="text-white  ">BLOG</span>
        </Link>

        {/* Nav Links */}
        <nav className="flex space-x-6">
          <Link to="/HomePage" className="hover:text-black transition">Home</Link>
          <Link to="/Signup" className="hover:text-black transition">Sign Up</Link>
          <Link to="/Login" className="hover:text-black transition">Login</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header

