import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo />
            <p className="mt-2 text-indigo-200 text-sm">
              Connecting students, faculty, and alumni since 2025
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Platform</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-indigo-200 hover:text-white">Features</a></li>
                <li><a href="#pricing" className="text-indigo-200 hover:text-white">Pricing</a></li>
                <li><a href="#faq" className="text-indigo-200 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-3">Company</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-indigo-200 hover:text-white">About Us</a></li>
                <li><a href="#careers" className="text-indigo-200 hover:text-white">Careers</a></li>
                <li><a href="#contact" className="text-indigo-200 hover:text-white">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#privacy" className="text-indigo-200 hover:text-white">Privacy Policy</a></li>
                <li><a href="#terms" className="text-indigo-200 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-indigo-800 mt-8 pt-8 text-center text-indigo-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;