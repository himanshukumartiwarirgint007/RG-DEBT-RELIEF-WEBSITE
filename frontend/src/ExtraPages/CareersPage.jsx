import React, { useState, useEffect } from "react";

// ICON COMPONENTS
const LocationIcon = () => (
  <svg className="inline-block w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4.5 8-10A8 8 0 1 0 4 12c0 5.5 8 10 8 10z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="inline-block w-5 h-5 mr-1 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
  </svg>
);

const QuestionIcon = () => (
  <svg className="inline-block w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10a4 4 0 1 1 8 0c0 2-2 3-2 3m-2 4h.01" />
  </svg>
);

const StarIcon = () => (
  <svg className="inline-block w-4 h-4 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
    <polygon points="10 1.5 12.09 6.26 17.18 6.91 13.64 10.21 14.54 15.09 10 12.77 5.46 15.09 6.36 10.21 2.82 6.91 7.91 6.26 10 1.5" />
  </svg>
);

const ArrowUpIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
);

// Light/Dark Mode Toggle
const ThemeToggle = ({ darkMode, setDarkMode }) => (
  <button
    onClick={() => setDarkMode(!darkMode)}
    className="fixed top-5 right-5 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
    aria-label="Toggle dark mode"
  >
    {darkMode ? '☀️' : '🌙'}
  </button>
);

// Scroll-to-top button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUpIcon />
    </button>
  );
};

// Quick Online Consultancy Form
const QuickConsultancy = ({ darkMode }) => (
  <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden my-16 mx-auto">
    {/* Left: Form */}
    <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-12">
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Quick Online Consultancy</h2>
      <p className="text-gray-500 dark:text-gray-300 mb-6">Sample text. Click to select the Text Element.</p>
      <form className="space-y-5">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="firstName" className="sr-only">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter your First Name"
              className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 outline-none py-2 bg-transparent text-gray-900 dark:text-white"
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="lastName" className="sr-only">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Enter your Last Name"
              className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 outline-none py-2 bg-transparent text-gray-900 dark:text-white"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter a valid email address"
            className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 outline-none py-2 bg-transparent text-gray-900 dark:text-white"
          />
        </div>
        <div>
          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            className="w-full border-b-2 border-gray-300 dark:border-gray-600 focus:border-indigo-500 outline-none py-2 bg-transparent resize-none text-gray-900 dark:text-white"
            rows={3}
          />
        </div>
        <hr className="my-2 border-gray-200 dark:border-gray-700" />
        <button
          type="submit"
          className="w-full bg-black dark:bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-gray-800 dark:hover:bg-indigo-700 transition"
        >
          BOOK A CONSULTATION
        </button>
      </form>
      <p className="text-xs text-gray-400 text-center mt-6">
        Images from <a href="https://www.freepik.com/" className="underline" target="_blank" rel="noopener noreferrer">Freepik</a>
      </p>
    </div>
    {/* Right: Image */}
    <div className="hidden md:block md:w-1/2">
      <img
        src="https://pplx-res.cloudinary.com/image/private/user_uploads/73554570/0a2fbfe8-9caa-4bc9-a6d5-07db2a504054/image.jpg"
        alt="Consultancy"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

const CareersPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors duration-500 py-8 px-4 md:px-8 relative overflow-hidden`}
    >
      {/* Background pattern */}
      <div
        className={`absolute inset-0 opacity-10 -z-10 pointer-events-none ${
          darkMode
            ? "bg-[url('data:image/svg+xml;base64,PHN2Zy...')]"
            : "bg-[url('data:image/svg+xml;base64,PHN2Zy...')]"
        }`}
      />

      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <ScrollToTop />

      {/* Header */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        <h1
          className={`text-4xl md:text-5xl font-extrabold mb-4 md:mb-0 tracking-tight ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Careers
        </h1>
        <p
          className={`max-w-lg text-lg ${
            darkMode ? "text-gray-300" : "text-gray-500"
          }`}
        >
          Digitalic is growing and we want to continue to do so. We are proud of what we achieve and are very keen to continue growing. We currently have sufficient strength in our team.
        </p>
      </div>

      {/* Open Application Section */}
      <div
        className={`max-w-5xl mx-auto mt-12 flex flex-col md:flex-row items-center rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md ${
          darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <div className="flex-1 p-8">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
            Would you like to send an open application?
          </h2>
          <p className="mb-6">
            Of course that is always possible!
          </p>
          <button
            className="bg-indigo-600 text-white font-semibold px-6 py-2 rounded-full shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none transition-all hover:shadow-lg animate-pulse animate-infinite animate-duration-1500 animate-alternate"
            aria-label="Open application"
          >
            OPEN APPLICATION
          </button>
        </div>
        <div className="flex-1 min-w-[220px] min-h-[220px]">
          <img
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
            alt="Astronaut illustration"
            className="object-cover w-full h-full"
            style={{ maxHeight: 260 }}
          />
        </div>
      </div>

      {/* Quick Online Consultancy Form */}
      <QuickConsultancy darkMode={darkMode} />
    </div>
  );
};

export default CareersPage;