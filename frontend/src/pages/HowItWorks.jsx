import React from "react";
import { Link } from "react-router-dom";
import HappyFamily from "../assets/Media/HappyFamily.jpg";
import ChatIcon from "../assets/Media/chat.png";
import CalculatorIcon from "../assets/Media/Calculator.png";
import CoinIcon from "../assets/Media/coin.png";
import secure from "../assets/Media/secure.png";
import trusted from "../assets/Media/trusted.png";
import support from "../assets/Media/support.png";
import FAQSection from "../components/FAQ";
import LoanCalculator from "../ExtraPages/LoanCalculator";

// ✅ Correct trust badge format
const trustBadges = [
  { src: secure, alt: "Secure" },
  { src: trusted, alt: "Trusted" },
  { src: support, alt: "Support" },
];

// Example testimonials
// const testimonials = [
//   {
//     name: "Priya S.",
//     text: "I never thought I could be debt-free. This team made it possible and stress-free!",
//     img: "https://randomuser.me/api/portraits/women/44.jpg",
//   },
//   {
//     name: "Rahul M.",
//     text: "Professional, transparent, and truly caring. Highly recommended for anyone struggling with debt.",
//     img: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Anjali K.",
//     text: "The process was simple and the results were life-changing. Thank you!",
//     img: "https://randomuser.me/api/portraits/women/65.jpg",
//   },
// ];

const HowItWorks = () => (
  <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen font-['Inter',sans-serif]">
    {/* Hero Section */}
    <section className="relative flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-24 gap-10 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-10 z-0" style={{ background: "url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png') repeat" }} />
      <div className="w-full md:w-1/2 flex justify-center z-10">
        <img
          src={HappyFamily}
          alt="Happy family"
          className="rounded-2xl w-full max-w-md h-auto shadow-2xl border-4 border-white"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left z-10">
        <span className="inline-block bg-green-100 text-green-800 font-semibold px-4 py-1 rounded-full mb-4 shadow">
          Debt Relief Made Simple
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-blue-900">
          Pay Off Your Debt for <span className="text-green-600">Less</span> Than You Owe
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-lg">
          Our experts negotiate with creditors so you can break free from debt faster and regain control of your financial future.
        </p>
        <Link
          to="/Apply"
          className="inline-block bg-blue-700 hover:bg-green-600 text-white text-base font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Let's Start Now
        </Link>

        {/* ✅ Trust Badges */}
        <div className="flex justify-center md:justify-start gap-6 mt-8">
          {trustBadges.map((badge, idx) => (
            <img key={idx} src={badge.src} alt={badge.alt} className="w-10 h-10" title={badge.alt} />
          ))}
        </div>
      </div>
    </section>

    {/* Decorative Divider */}
    <div className="w-full flex justify-center">
      <svg height="40" width="100%" viewBox="0 0 1440 40" className="block">
        <path fill="#fff" fillOpacity="1" d="M0,32L48,37.3C96,43,192,53,288,38.7C384,24,480,0,576,0C672,0,768,24,864,32C960,40,1056,24,1152,16C1248,8,1344,8,1392,8L1440,8L1440,40L1392,40C1344,40,1248,40,1152,40C1056,40,960,40,864,40C768,40,672,40,576,40C480,40,384,40,288,40C192,40,96,40,48,40L0,40Z"></path>
      </svg>
    </div>

    {/* How It Works Section */}
    <section className="bg-white/90 py-16">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">How It Works</h2>
        <p className="text-gray-600 mb-10 text-lg">
          You’re in control—our debt experts do the work. Here’s how we help you become debt-free:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Step 1 */}
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <img src={ChatIcon} alt="Chat Icon" className="mb-4 w-14 h-14" />
            <h3 className="font-bold text-lg mb-2 text-blue-900">Free Consultation</h3>
            <p className="text-gray-700 text-base">Tell us your situation and discover your debt relief options—no obligation, just answers.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <img src={CalculatorIcon} alt="Plan Icon" className="mb-4 w-14 h-14" />
            <h3 className="font-bold text-lg mb-2 text-blue-900">Personalized Plan</h3>
            <p className="text-gray-700 text-base">Approve a plan tailored to your needs, with affordable payments and a clear path to freedom.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform">
            <img src={CoinIcon} alt="Coins Icon" className="mb-4 w-14 h-14" />
            <h3 className="font-bold text-lg mb-2 text-blue-900">Become Debt-Free</h3>
            <p className="text-gray-700 text-base">We negotiate with creditors. You could be debt-free in as little as 24–48 months.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Testimonial Section */}
    {/* <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-blue-800">What Our Clients Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-full md:w-1/3 hover:scale-105 transition-transform">
              <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-green-200" />
              <p className="italic text-gray-700 mb-2">"{t.text}"</p>
              <span className="font-bold text-blue-700">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section> */}

    {/* Debt Types Section */}
    <section className="py-16 bg-gradient-to-r from-blue-50 to-green-50 text-center px-6">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">Debt We Can Help With</h2>
      <p className="text-lg font-semibold text-[#0d1b39] max-w-3xl mx-auto mb-10">
        We cover most <span className="font-bold ">Secured debt</span> and negotiate with major credit card issuers and banks every day to reduce what you owe.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-10">
        <div className="space-y-3">
          <p className="text-blue-700 flex items-center text-lg"><span className="text-2xl mr-2">✔</span> Credit Cards</p>
          <p className="text-blue-700 flex items-center text-lg"><span className="text-2xl mr-2">✔</span> Personal Loans</p>
          <p className="text-blue-700 flex items-center text-lg"><span className="text-2xl mr-2">✔</span> Lines of Credit</p>
          <p className="text-blue-700 flex items-center text-lg"><span className="text-2xl mr-2">✔</span> Medical Bills</p>
        </div>
        <div className="space-y-3">
          <p className="text-blue-700 flex items-center text-lg"><span className="text-2xl mr-2">✔</span> Collections</p>
          <p className="text-blue-700 flex items-center text-lg"><span className="text-2xl mr-2">✔</span> Repossessions</p>
          <p className="text-blue-700 flex items-center text-lg"><span className="text-2xl mr-2">✔</span> Business Debts</p>
          <p className="text-blue-700 flex items-center text-lg"><span className="text-2xl mr-2">✔</span> Certain Student Debts</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          to="/Apply"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Apply Now
        </Link>
      </div>
    </section>
    <section className="mt-8 sm:mt-12 md:mt-16"> <LoanCalculator /> </section>
    <section className="mt-8 sm:mt-12 md:mt-16"> <FAQSection /> </section>
  </div>
);

export default HowItWorks;
