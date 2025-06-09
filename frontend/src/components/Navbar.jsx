import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/Media/logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-[#002855] w-full sticky top-0 z-50">
      <div className="w-full mx-auto flex items-center px-4 py-0 justify-between">
        {/* Left: Logo and Brand */}
        <div className="flex items-center gap-2 flex-shrink-0 min-w-0">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-16 object-contain sm:w-28 sm:h-20 lg:w-32 lg:h-30"
          />
          <div className="min-w-0">
            <div className="text-white font-bold text-lg sm:text-xl lg:text-2xl leading-tight truncate">
              REDDINGTON
              <br className="hidden lg:block" /> GLOBAL Pvt. Ltd.
            </div>
            <div className="text-white text-xs tracking-widest mt-1 hidden lg:block">
              DEBT RELIEF
            </div>
          </div>
        </div>

        {/* Centre: Navbar */}
        <nav className="hidden lg:flex flex-1 justify-center flex-wrap gap-6 min-w-0 mx-2 whitespace-nowrap">
          <button
            onClick={() => navigate('/')}
            className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition whitespace-nowrap bg-transparent"
          >
            Home
          </button>
          <button
            onClick={() => navigate('/apply')}
            className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition whitespace-nowrap bg-transparent"
          >
            Apply
          </button>
          <button
            onClick={() => navigate('/howitworks')}
            className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition whitespace-nowrap bg-transparent"
          >
            How It Works
          </button>
          <button
            onClick={() => navigate('/aboutus')}
            className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition whitespace-nowrap bg-transparent"
          >
            About&nbsp;Us
          </button>
          <button
            onClick={() => navigate('/resources')}
            className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition whitespace-nowrap bg-transparent"
          >
            Resources
          </button>
          <button
            onClick={() => navigate('/clientstories')}
            className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition whitespace-nowrap bg-transparent"
          >
            Client&nbsp;Stories
          </button>
          <button
            onClick={() => navigate('/blog')}
            className="text-white font-semibold text-base px-3 py-2 hover:bg-[#16b477] rounded transition whitespace-nowrap bg-transparent"
          >
            Blog
          </button>
        </nav>

        {/* Right: Login + Contact */}
        <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => navigate('/login')}
            className="bg-[#2563eb] text-white font-bold px-5 py-2 rounded hover:bg-[#174ea6] transition text-base"
          >
            Login
          </button>
          <span className="border-2 border-white bg-white text-[#002855] font-bold px-6 py-2 rounded-full transition text-base whitespace-nowrap mr-6">
            800-300-9550
          </span>
        </div>

        {/* Hamburger for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto"
          aria-label="Open Menu"
        >
          <span className="block w-8 h-1 bg-white mb-1.5 rounded"></span>
          <span className="block w-8 h-1 bg-white mb-1.5 rounded"></span>
          <span className="block w-8 h-1 bg-white rounded"></span>
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden px-2 pb-4">
          <nav className="flex flex-col gap-2 mt-2">
            <button
              onClick={() => { navigate('/'); setMenuOpen(false); }}
              className="text-white font-semibold text-base px-4 py-2 hover:bg-[#16b477] rounded transition bg-transparent text-left"
            >
              Home
            </button>
            <button
              onClick={() => { navigate('/apply'); setMenuOpen(false); }}
              className="text-white font-semibold text-base px-4 py-2 hover:bg-[#16b477] rounded transition bg-transparent text-left"
            >
              Apply
            </button>
            <button
              onClick={() => { navigate('/howitworks'); setMenuOpen(false); }}
              className="text-white font-semibold text-base px-4 py-2 hover:bg-[#16b477] rounded transition bg-transparent text-left"
            >
              How It Works
            </button>
            <button
              onClick={() => { navigate('/aboutus'); setMenuOpen(false); }}
              className="text-white font-semibold text-base px-4 py-2 hover:bg-[#16b477] rounded transition bg-transparent text-left"
            >
              About Us
            </button>
            <button
              onClick={() => { navigate('/resources'); setMenuOpen(false); }}
              className="text-white font-semibold text-base px-4 py-2 hover:bg-[#16b477] rounded transition bg-transparent text-left"
            >
              Resources
            </button>
            <button
              onClick={() => { navigate('/clientstories'); setMenuOpen(false); }}
              className="text-white font-semibold text-base px-4 py-2 hover:bg-[#16b477] rounded transition bg-transparent text-left"
            >
              Client Stories
            </button>
            <button
              onClick={() => { navigate('/blog'); setMenuOpen(false); }}
              className="text-white font-semibold text-base px-4 py-2 hover:bg-[#16b477] rounded transition bg-transparent text-left"
            >
              Blog
            </button>
            <div className="flex flex-col items-start pl-2">
              <button
                onClick={() => { navigate('/login'); setMenuOpen(false); }}
                className="bg-[#2563eb] text-white font-bold px-7 py-3 rounded hover:bg-[#174ea6] transition text-lg mt-2 text-left"
              >
                Login
              </button>
              <span className="border-2 border-white bg-white text-[#002855] font-bold px-6 py-2 rounded-full transition text-base whitespace-nowrap mt-2">
                800-300-9550
              </span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;