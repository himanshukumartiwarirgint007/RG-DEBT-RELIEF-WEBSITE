import React from "react";
import HeroImg from "../assets/Media/Hero.jpg";
import ChatIcon from "../assets/Media/chat.png";
import CalculatorIcon from "../assets/Media/Calculator.png";
import CoinIcon from "../assets/Media/coin.png";
import { Link } from "react-router-dom";

const HowItWorks = () => (
  <div className="bg-[#f9f9f8] text-[#0d1b39] font-['Inter',sans-serif]">
    {/* Hero Section */}
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-16 md:py-24 gap-8 md:gap-16 max-w-7xl mx-auto">
      <div className="w-full md:w-1/2">
        <img
          src={HeroImg}
          alt="Happy family"
          className="rounded-md w-full h-auto shadow-lg"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
          Pay Off Your Debt for <br />
          Significantly Less than You Owe
        </h1>
        <Link
          to="/Apply"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-full transition"
        >
          Let’s Start Now
        </Link>
      </div>
    </section>

    {/* How It Works Section */}
    <section className="bg-[#f1f3f6] py-16">
      <div className="max-w-5xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold mb-4">How It Works</h2>
        <p className="text-gray-600 mb-10">
          You’re in control, our debt experts do the work.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div>
            <img
              src={ChatIcon}
              alt="Chat Icon"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="font-semibold text-lg mb-2">
              Talk to us for a free consultation
            </h3>
            <p className="text-gray-600 text-sm">
              Tell us your situation, then find out your debt relief options – no obligation.
            </p>
          </div>
          {/* Step 2 */}
          <div>
            <img
              src={CalculatorIcon}
              alt="Plan Icon"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="font-semibold text-lg mb-2">
              We create an affordable plan that works for you
            </h3>
            <p className="text-gray-600 text-sm">
              Approve your plan, personalized from our suite of products.
            </p>
          </div>
          {/* Step 3 */}
          <div>
            <img
              src={CoinIcon}
              alt="Coins Icon"
              className="mx-auto mb-4 w-12 h-12"
            />
            <h3 className="font-semibold text-lg mb-2">
              Get out of debt faster than you think
            </h3>
            <p className="text-gray-600 text-sm">
              Take back your life in as little as 24–48 months.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Debt We Can Help With Section */}
    <section className="py-16 bg-white text-center px-6">
      <h2 className="text-3xl font-bold mb-4">Debt We Can Help With</h2>
      <p className="text-lg font-semibold text-[#0d1b39] max-w-3xl mx-auto mb-10">
        We cover most{" "}
        <span className="font-bold underline decoration-dotted">unsecured debt</span> and negotiate with major credit card issuers
        and banks every day to reduce debts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto mb-10">
        <div className="space-y-3">
          <p className="text-blue-600 flex items-center">
            <span className="text-xl mr-2">✔</span> Credit Cards
          </p>
          <p className="text-blue-600 flex items-center">
            <span className="text-xl mr-2">✔</span> Personal Loans
          </p>
          <p className="text-blue-600 flex items-center">
            <span className="text-xl mr-2">✔</span> Lines of Credit
          </p>
          <p className="text-blue-600 flex items-center">
            <span className="text-xl mr-2">✔</span> Medical Bills
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-blue-600 flex items-center">
            <span className="text-xl mr-2">✔</span> Collections
          </p>
          <p className="text-blue-600 flex items-center">
            <span className="text-xl mr-2">✔</span> Repossessions
          </p>
          <p className="text-blue-600 flex items-center">
            <span className="text-xl mr-2">✔</span> Business Debts
          </p>
          <p className="text-blue-600 flex items-center">
            <span className="text-xl mr-2">✔</span> Certain Student Debts
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Link
          to="/Apply"
          className="inline-block border border-[#0d1b39] text-[#0d1b39] font-semibold px-6 py-3 rounded-full hover:bg-[#0d1b39] hover:text-white transition"
        >
          Apply Now
        </Link>
      </div>
    </section>
  </div>
);

export default HowItWorks;