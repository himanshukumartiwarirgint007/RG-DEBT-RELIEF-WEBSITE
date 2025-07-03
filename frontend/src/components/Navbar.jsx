import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PhoneCall } from 'lucide-react';
import logo from '../assets/Media/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (path) => {
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate(path);
    }
    setMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-gradient-to-r from-[#0059B3] to-[#66B3FF] dark:from-[#0e1a2b] dark:to-[#1a2d47] text-white shadow-md transition-all duration-300">
      <div className="w-full mx-auto flex items-center px-4 py-0 justify-between">
        
        {/* Left: Logo and Brand */}
        <nav className="flex items-center gap-3 flex-shrink-0 min-w-0">
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 cursor-pointer bg-transparent border-none outline-none p-0 m-0"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-24 h-20 object-contain sm:w-32 sm:h-24 lg:w-56 lg:h-28"
            />
            {/* <div className="min-w-0 text-left hidden sm:block">
              <div className="text-white font-bold text-xl lg:text-2xl leading-tight truncate">
                REDDINGTON GLOBAL
              </div>
              <div className="text-white font-bold text-xl lg:text-2xl leading-tight truncate">
                DEBT RELIEF
              </div>
            </div> */}
          </button>
        </nav>

        {/* Centre: Navbar */}
        <nav className="hidden lg:flex flex-1 justify-center flex-wrap gap-4 min-w-0 mx-2 whitespace-nowrap">
          {[
            { label: 'Home', path: '/' },
            { label: 'Apply', path: '/apply' },
            { label: 'How It Works', path: '/howitworks' },
            { label: 'About Us', path: '/aboutus' },
            { label: 'Resources', path: '/resources' },
            { label: 'Blog', path: '/blog' },
            { label: 'Contact Us', path: '/ContactUs' },
          ].map(({ label, path }) => (
            <button
              key={path}
              onClick={() => handleNavClick(path)}
              className="text-white font-medium text-base xl:text-lg px-4 py-2 rounded-md hover:bg-white hover:text-[#002855] transition duration-200"
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Right: Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-6 flex-shrink-0">
          <a
            href="Apply"
            className="flex items-center gap-2 border-2 border-white bg-white text-[#002855] font-bold px-4 py-2 rounded-full transition text-base whitespace-nowrap hover:bg-gray-200 hover:text-[#001F3F]"
          >
            Get Free Consultation
          </a>

          <a
            href="tel:8003009550"
            className="flex items-center gap-2 border-2 border-white bg-white text-[#002855] font-bold px-4 py-2 rounded-full transition text-base whitespace-nowrap hover:bg-gray-200 hover:text-[#001F3F]"
          >
            <PhoneCall className="w-5 h-5 text-[#002855]" />
            +19545563969
          </a>
        </div>

        {/* Hamburger (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-1 h-10 ml-auto"
          aria-label="Toggle Menu"
        >
          <span className="block w-8 h-1 bg-white mb-1.5 rounded"></span>
          <span className="block w-8 h-1 bg-white mb-1.5 rounded"></span>
          <span className="block w-8 h-1 bg-white rounded"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden px-2 pb-4">
          <nav className="flex flex-col gap-2 mt-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'Apply', path: '/apply' },
              { label: 'How It Works', path: '/howitworks' },
              { label: 'About Us', path: '/aboutus' },
              { label: 'Resources', path: '/resources' },
              { label: 'Blog', path: '/blog' },
              { label: 'Contact Us', path: '/ContactUs' },
            ].map(({ label, path }) => (
              <button
                key={path}
                onClick={() => handleNavClick(path)}
                className="text-white font-medium text-base px-4 py-2 hover:bg-white hover:text-[#002855] transition bg-transparent text-left rounded"
              >
                {label}
              </button>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col items-start pl-2 mt-3 space-y-3">
              <a
                href="Apply"
                className="flex items-center gap-2 border-2 border-white bg-white text-[#002855] font-bold px-4 py-2 rounded-full transition text-base whitespace-nowrap hover:bg-gray-200 hover:text-[#001F3F]"
              >
                Get Free Consultation
              </a>

              <a
                href="tel:8003009550"
                className="flex items-center gap-2 border-2 border-white bg-white text-[#002855] font-bold px-4 py-2 rounded-full transition text-base whitespace-nowrap hover:bg-gray-200 hover:text-[#001F3F]"
              >
                <PhoneCall className="w-5 h-5 text-[#002855]" />
                +19545563969
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
