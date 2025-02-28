import React, { useState } from 'react';
import Logo from './Logo';
import { Menu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Custom styles based on your requirements
  const navStyle = {
    height: '97px',
    flexShrink: 0,
  };
  
  const linkStyle = {
    color: '#FAD8EA',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  };
  
  return (
    <nav className="bg-gradient-custom text-white p-4" style={navStyle}>
      <div className="container mx-auto flex items-center h-full">
        <div className="ml-4">
          <Logo />
        </div>
        
        <div className="hidden md:flex flex-1 justify-center space-x-12">
          <a href="#about" className="hover:text-indigo-200" style={linkStyle}>About</a>
          <a href="#how-it-works" className="hover:text-indigo-200" style={linkStyle}>How It Works</a>
          <a href="#features" className="hover:text-indigo-200" style={linkStyle}>Features</a>
        </div>
        
        <button 
          className="ml-auto"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-indigo-800 py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <a href="#about" className="block py-2 hover:bg-indigo-700 px-2 rounded" style={linkStyle}>About</a>
            <a href="#how-it-works" className="block py-2 hover:bg-indigo-700 px-2 rounded" style={linkStyle}>How It Works</a>
            <a href="#features" className="block py-2 hover:bg-indigo-700 px-2 rounded" style={linkStyle}>Features</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;