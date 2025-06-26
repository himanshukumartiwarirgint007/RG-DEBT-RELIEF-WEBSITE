import React from 'react';
import { useNavigate } from 'react-router-dom';
import Girlpic from '../assets/Media/Girlpic.png'; // Ensure correct path

const HomeAboutSection = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
  {/* Top Section */}
  <section className="text-center px-6 py-18 max-w-6xl mx-auto mb-8">
    <h1 className="text-2xl md:text-3xl lg:text-6xl font-extrabold text-[#8175ff] mb-4">About Us</h1>
    <h2 className="text-3xl md:text-4xl font-bold text-[#1e3a8a] mb-6 leading-tight">
      Your Financial Fresh Start Begins Here
    </h2>
    <p className="text-gray-600 max-w-4xl mx-auto mb-14 text-base md:text-lg leading-relaxed">
      At Reddington Global Debt Relief, we believe that everyone deserves a second chance at financial freedom. 
      Our mission is to simplify your path to a debt-free future—backed by real strategies, real people, and real support.
    </p>

    {/* Middle Section: Text + Image */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-10">
      <div className="text-left max-w-xl">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-snug">
          What We Offer To Help You Reclaim Control:
        </h3>
        <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
          <li>✔ Personalized debt reduction strategies tailored to your lifestyle</li>
          <li>✔ Guidance through legal and financial hurdles with confidence</li>
          <li>✔ Direct access to industry professionals who care</li>
          <li>✔ Long-term planning tools to help you stay debt-free</li>
        </ul>
        <button
          onClick={() => navigate('/howitworks')}
          className="mt-8 px-6 py-3 bg-[#0f172a] text-white font-semibold rounded hover:bg-[#1e293b] text-base transition"
        >
          Learn More
        </button>
      </div>

      <img
        src={Girlpic}
        alt="Support Team"
        className="w-72 h-72 object-cover rounded-full border-4 border-[#1e3a8a] shadow-xl"
      />
    </div>
  </section>

  {/* Call-to-Action Section */}
  <section
    className="py-10 mt-8 text-white px-4 backdrop-blur-sm"
    style={{
      background: 'linear-gradient(100deg, rgba(17, 38, 99, 0.85), rgba(59, 130, 246, 0.85))',
      opacity: 0.95,
      borderRadius: '0.5rem',
      transition: 'background 0.3s ease, opacity 0.3s ease',
    }}
  >
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <h3 className="text-3xl font-bold leading-snug max-w-2xl">
        Let’s explore how you can reduce debt and rebuild your financial future
      </h3>
      <button
        onClick={() => navigate('/apply')}
        className="bg-white text-[#1e3a8a] px-8 py-3 rounded font-semibold text-base hover:bg-gray-100 transition"
      >
        Get in Touch
      </button>
    </div>
  </section>
</div>

  );
};

export default HomeAboutSection;
