import React from 'react';
import de from '../assets/Media/Debtconsolidation.png'
import PersonalLone from '../assets/Media/PersonalLoans.png'
import Balancetransfer from '../assets/Media/Balancetransfer.png'
import HomeEquityLoans from '../assets/Media/HomeEquityLoans.png'

const DebtConsolidationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-orange-300 to-red-300 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Debt Consolidation: Simplifying Your Finances</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Combine multiple debts into one manageable loan and save money.
          </p>
        </div>
      </header>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              
                <span className="inline-block max-w-2xl rounded-2xl overflow-hidden shadow-xl">
                <img 
                    src={de} 
                    alt="Multiple debts merging into one" 
                    className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                />
                </span>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Debt Consolidation?</h2>
              <p className="text-gray-600 mb-4">
                Debt consolidation is a financial strategy that combines multiple debts into a single, more manageable loan. 
                This approach simplifies your payments and can potentially save you money by securing a lower interest rate.
              </p>
              <p className="text-gray-600">
                By consolidating high-interest debts like credit cards, personal loans, or medical bills, you can reduce 
                your monthly payments and pay off your debt faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Debt Consolidation Works */}
      <section className="py-16 bg-blue-50 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">How Debt Consolidation Works</h2>
    
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-2">
      {/* Step 1 with hover animation */}
      <div className="text-center w-full md:w-1/4 group">
        <div className="relative">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 group-hover:shadow-lg z-10 relative">
            1
          </div>
          <div className="absolute inset-0 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 mx-auto -z-10" style={{width: '4.5rem', height: '4.5rem', top: '-0.25rem', left: '50%', transform: 'translateX(-50%)'}}></div>
        </div>
        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-700 transition-colors duration-300">Assess Debts</h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Identify all your current debts</p>
      </div>
      
      {/* Arrow - only visible on medium screens and above */}
      <div className="hidden md:flex justify-center w-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
      
      {/* Step 2 with hover animation */}
      <div className="text-center w-full md:w-1/4 group">
        <div className="relative">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 group-hover:shadow-lg z-10 relative">
            2
          </div>
          <div className="absolute inset-0 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 mx-auto -z-10" style={{width: '4.5rem', height: '4.5rem', top: '-0.25rem', left: '50%', transform: 'translateX(-50%)'}}></div>
        </div>
        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-700 transition-colors duration-300">Apply for Loan</h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Get approved for consolidation loan</p>
      </div>
      
      {/* Arrow */}
      <div className="hidden md:flex justify-center w-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
      
      {/* Step 3 with hover animation */}
      <div className="text-center w-full md:w-1/4 group">
        <div className="relative">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 group-hover:shadow-lg z-10 relative">
            3
          </div>
          <div className="absolute inset-0 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 mx-auto -z-10" style={{width: '4.5rem', height: '4.5rem', top: '-0.25rem', left: '50%', transform: 'translateX(-50%)'}}></div>
        </div>
        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-700 transition-colors duration-300">Pay Off Debts</h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Use loan to pay existing creditors</p>
      </div>
      
      {/* Arrow */}
      <div className="hidden md:flex justify-center w-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
      
      {/* Step 4 with hover animation */}
      <div className="text-center w-full md:w-1/4 group">
        <div className="relative">
          <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 group-hover:bg-blue-700 transition-all duration-300 group-hover:shadow-lg z-10 relative">
            4
          </div>
          <div className="absolute inset-0 bg-blue-200 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300 mx-auto -z-10" style={{width: '4.5rem', height: '4.5rem', top: '-0.25rem', left: '50%', transform: 'translateX(-50%)'}}></div>
        </div>
        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-700 transition-colors duration-300">Single Payment</h3>
        <p className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">Make one monthly payment</p>
      </div>
    </div>
    
    <div className="mt-16 bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto transform hover:-translate-y-1 transition-transform duration-300 text-center">
      <h3 className="text-xl font-bold mb-4 text-blue-700">Key Benefits of This Process:</h3>
      <div className="list-disc pl-5 space-y-2 text-gray-700">
        <div className="hover:bg-blue-50 hover:pl-3 transition-all duration-300 p-1 rounded">Simplifies your financial life with just one payment</div>
        <div className="hover:bg-blue-50 hover:pl-3 transition-all duration-300 p-1 rounded">Potentially lowers your overall interest rate</div>
        <div className="hover:bg-blue-50 hover:pl-3 transition-all duration-300 p-1 rounded">Helps you pay off debt faster</div>
        <div className="hover:bg-blue-50 hover:pl-3 transition-all duration-300 p-1 rounded">May reduce your monthly payment amount</div>
        <div className="hover:bg-blue-50 hover:pl-3 transition-all duration-300 p-1 rounded">Can improve your credit score over time</div>
      </div>
    </div>
  </div>
</section>

{/* Benefits Section */}
<section className="py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Benefits of Debt Consolidation</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Benefit 1 */}
      <div className="group relative bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        {/* Floating circle effect */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-blue-200 rounded-full animate-ping absolute"></div>
        </div>
        
        <div className="text-blue-500 mb-4 group-hover:text-blue-700 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-700 transition-colors duration-300">Lower Interest Rates</h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          Consolidation loans often have lower interest rates than credit cards, saving you money over time.
        </p>
        
        {/* Animated underline */}
        <div className="mt-4 h-0.5 bg-blue-100 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
      
      {/* Benefit 2 */}
      <div className="group relative bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        {/* Floating circle effect */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-green-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-green-200 rounded-full animate-ping absolute"></div>
        </div>
        
        <div className="text-green-500 mb-4 group-hover:text-green-700 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-green-700 transition-colors duration-300">Simplified Payments</h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          Manage just one monthly payment instead of juggling multiple due dates and amounts.
        </p>
        
        {/* Animated underline */}
        <div className="mt-4 h-0.5 bg-green-100 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
      
      {/* Benefit 3 */}
      <div className="group relative bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        {/* Floating circle effect */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-purple-200 rounded-full animate-ping absolute"></div>
        </div>
        
        <div className="text-purple-500 mb-4 group-hover:text-purple-700 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-purple-700 transition-colors duration-300">Improved Credit Score</h3>
        <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          Consistent on-time payments and lower credit utilization can boost your credit score.
        </p>
        
        {/* Animated underline */}
        <div className="mt-4 h-0.5 bg-purple-100 w-0 group-hover:w-full transition-all duration-500"></div>
      </div>
    </div>
  </div>
</section>

      {/* Eligibility & Risks */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Eligibility */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Eligibility Criteria</h2>
            <div className="bg-blue-100 p-6 rounded-xl">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Credit score typically 650+ (varies by lender)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Stable income and employment history</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Debt-to-income ratio below 50%</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Positive payment history</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Minimum debt amount ($5,000-$10,000 typically)</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Risks */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Risks and Considerations</h2>
            <div className="bg-orange-100 p-6 rounded-xl">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>May extend repayment period and total interest paid</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Possible origination fees (1-8% of loan amount)</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Risk of accumulating new debt after consolidation</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>Potential for higher interest rates if credit worsens</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default DebtConsolidationPage;