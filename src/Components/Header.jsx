import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="bg-navy-700 text-white p-2 rounded-lg">
              <span className="text-xl font-bold">PW</span>
            </div>
            <span className="ml-3 text-xl font-bold text-gray-800">PropertyWala</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-navy-700 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-navy-700 font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-navy-700 font-medium">Services</a>
            <a href="#case-studies" className="text-gray-700 hover:text-navy-700 font-medium">Case Studies</a>
            <a href="#contact" className="text-gray-700 hover:text-navy-700 font-medium">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-navy-700 font-medium">Home</a>
              <a href="#about" className="text-gray-700 hover:text-navy-700 font-medium">About</a>
              <a href="#services" className="text-gray-700 hover:text-navy-700 font-medium">Services</a>
              <a href="#case-studies" className="text-gray-700 hover:text-navy-700 font-medium">Case Studies</a>
              <a href="#contact" className="text-gray-700 hover:text-navy-700 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header