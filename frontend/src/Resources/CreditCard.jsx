import React from 'react';

const CreditCard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-orange-000 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Credit Card Debt Relief</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Pay off the credit card debt you've racked up
          </p>
          <a 
            href="#contact" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 inline-block"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              {/* IMAGE PLACEHOLDER - Replace with actual image */}
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center">
                <span className="text-gray-500">[Image: Person looking relieved about finances]</span>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Find Freedom From Credit Card Debt</h2>
              <p className="text-gray-600 mb-4">
                Credit card debt relief helps you regain financial control by reducing your outstanding balances and interest rates through proven strategies. Our service negotiates with creditors on your behalf to lower your total debt amount.
              </p>
              <p className="text-gray-600">
                With our program, you could pay off your debt faster while saving thousands in interest payments. Many clients reduce their monthly payments by 30-50% and become debt-free in 24-48 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Debt Relief Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Debt Negotiation</h3>
              <p className="text-gray-600 text-center">
                Our experts negotiate with creditors to reduce your principal balance by up to 50% before you make a single payment.
              </p>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Debt Consolidation</h3>
              <p className="text-gray-600 text-center">
                Combine multiple high-interest payments into one manageable monthly payment with a lower interest rate.
              </p>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">Financial Counseling</h3>
              <p className="text-gray-600 text-center">
                Personalized financial education to help you budget effectively and avoid future debt accumulation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-r from-orange-500 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Become Debt-Free?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Take the first step toward financial freedom today. Our specialists are ready to help.
          </p>
          <div className="max-w-lg mx-auto bg-white bg-opacity-20 p-8 rounded-xl backdrop-blur-sm">
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-600"
                  aria-label="Your Name"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-600"
                  aria-label="Email Address"
                />
              </div>
              <div className="mb-6">
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-gray-800 placeholder-gray-600"
                  aria-label="Phone Number"
                />
              </div>
              <button 
                type="submit" 
                className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full shadow-lg w-full transition duration-300"
              >
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreditCard;