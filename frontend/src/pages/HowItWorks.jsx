import React from 'react';

const HowItWorks = () => (
  <main className="text-center py-16 px-4">
    <h1 className="text-3xl sm:text-5xl font-extrabold text-[#002855] mb-4">
      How It Works
    </h1>
    <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
      Our process is simple and transparent. Here’s how you can start your journey to financial freedom:
    </p>
    <ol className="list-decimal list-inside text-left max-w-xl mx-auto text-lg text-gray-800 space-y-4">
      <li>
        <span className="font-bold text-[#16b477]">Apply Online:</span> Fill out our secure online application form.
      </li>
      <li>
        <span className="font-bold text-[#16b477]">Free Consultation:</span> Our experts review your situation and discuss your options.
      </li>
      <li>
        <span className="font-bold text-[#16b477]">Custom Plan:</span> We create a debt relief plan tailored to your needs.
      </li>
      <li>
        <span className="font-bold text-[#16b477]">Start Saving:</span> Begin your path to financial freedom with our support.
      </li>
    </ol>
    <a
      href="/apply.html"
      className="mt-10 inline-block bg-[#16b477] text-white font-bold px-8 py-3 rounded-full hover:bg-[#13a06b] transition text-lg"
    >
      Get Started
    </a>
  </main>
);

export default HowItWorks;