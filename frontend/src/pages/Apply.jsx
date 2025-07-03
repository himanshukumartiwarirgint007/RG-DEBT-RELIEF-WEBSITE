import React, { useState, useEffect } from "react";
import applyNowImg from '../assets/Media/apply.png';
import ChatIcon from "../assets/Media/chat.png";
import CalculatorIcon from "../assets/Media/Calculator.png";
import CoinIcon from "../assets/Media/coin.png";
import xyz from "../assets/Media/xyz.png";

const initialForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  bestTimeToCall: "",
  consent: false,
  state: "",
  city: "",
  zipCode: "",
  disclaimerConsent: false,
};
const states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
  "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
  "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
  "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
  "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
  "New Hampshire", "New Jersey", "New Mexico", "New York", 
  "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", 
  "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
  "West Virginia", "Wisconsin", "Wyoming"
];
const cityOptions = {
  "Alabama": ["Birmingham"],
  "Alaska": ["Anchorage"],
  "Arizona": ["Mesa", "Phoenix", "Tucson"],
  "Arkansas": ["Little Rock"],
  "California": ["Fresno", "Los Angeles", "Oakland", "Sacramento", "San Diego", "San Francisco", "San Jose"],
  "Colorado": ["Colorado Springs", "Denver"],
  "Connecticut": [],
  "Delaware": [],
  "Florida": ["Fort Lauderdale", "Jacksonville", "Miami", "Orlando", "Tampa"],
  "Georgia": ["Atlanta", "Savannah"],
  "Hawaii": ["Honolulu"],
  "Idaho": ["Boise"],
  "Illinois": ["Chicago"],
  "Indiana": ["Indianapolis"],
  "Iowa": ["Des Moines"],
  "Kansas": ["Wichita"],
  "Kentucky": ["Lexington", "Louisville"],
  "Louisiana": ["Baton Rouge", "New Orleans"],
  "Maine": [],
  "Maryland": ["Baltimore"],
  "Massachusetts": ["Boston"],
  "Michigan": ["Detroit"],
  "Minnesota": ["Minneapolis"],
  "Mississippi": [],
  "Missouri": ["Kansas City", "St. Louis"],
  "Montana": [],
  "Nebraska": ["Lincoln", "Omaha"],
  "Nevada": ["Las Vegas", "Reno"],
  "New Hampshire": [],
  "New Jersey": ["Newark"],
  "New Mexico": ["Albuquerque"],
  "New York": ["Buffalo", "New York City"],
  "North Carolina": ["Charlotte", "Durham", "Raleigh"],
  "North Dakota": ["Fargo"],
  "Ohio": ["Cincinnati", "Cleveland", "Columbus", "Toledo"],
  "Oklahoma": ["Oklahoma City", "Tulsa"],
  "Oregon": ["Portland"],
  "Pennsylvania": ["Philadelphia", "Pittsburgh"],
  "Rhode Island": ["Providence"],
  "South Carolina": [],
  "South Dakota": [],
  "Tennessee": ["Memphis", "Nashville"],
  "Texas": ["Arlington", "Austin", "Dallas", "El Paso", "Fort Worth", "Houston", "San Antonio"],
  "Utah": ["Salt Lake City"],
  "Vermont": [],
  "Virginia": ["Richmond", "Virginia Beach"],
  "Washington": ["Seattle", "Spokane"],
  "West Virginia": [],
  "Wisconsin": ["Madison", "Milwaukee"],
  "Wyoming": []
};

export default function Apply() {
  const [form, setForm] = useState(initialForm);
  const [page, setPage] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [nextLoading, setNextLoading] = useState(false);
  const [cityOptionsList, setCityOptionsList] = useState([]);

  const timeOptions = [
    "10:00 - 2:00", "2:00 - 3:00","3:00 - 4:00", "4:00 - 5:00","5:00 - 6:00","6:00 - 7:00","7:00 - 8:00","8:00 - 9:00"
  ];
  
  const phoneLength = 10;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === "typeOfDebt") {
      setForm(f => ({
        ...f,
        typeOfDebt: checked
          ? [...f.typeOfDebt, value]
          : f.typeOfDebt.filter(v => v !== value),
      }));
    } else if (type === "checkbox") {
      setForm(f => ({ ...f, [name]: checked }));
    } else if (name === "phone") {
      setForm(f => ({
        ...f,
        phone: value.replace(/[^0-9]/g, "").slice(0, phoneLength),
      }));
    } else if (name === "zipCode") {
      setForm(f => ({
        ...f,
        zipCode: value.replace(/[^0-9]/g, "").slice(0, 5),
      }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
    };
    
  // Update city options when state changes
  useEffect(() => {
    if (form.state && cityOptions[form.state]) {
      setCityOptionsList(cityOptions[form.state]);
    } else {
      setCityOptionsList([]);
    }
    // Reset city when state changes
    setForm(f => ({ ...f, city: "" }));
  }, [form.state]);
  
  const validatePage = () => {
    if (page === 1) {
      return (
        form.firstName &&
        form.lastName &&
        form.email &&
        form.phone.length === phoneLength &&
        form.bestTimeToCall &&
        form.consent
      );
    }
    if (page === 2) {
      return (
        form.state &&
        form.city &&
        form.zipCode.length === 5 &&
        form.disclaimerConsent
      );
    }
    return true;
  };
  
  const handleNext = async () => {
    if (!validatePage()) {
      alert("Please fill all required fields.");
      return;
    }
    setNextLoading(true);
    try {
      // Save partial data to backend
      await fetch("http://localhost:3001/api/apply/partial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch (err) {
      // Optionally handle error
    }
    setTimeout(() => {
      setPage(p => p + 1);
      setNextLoading(false);
    }, 500);
  };
  
  const handleBack = () => setPage(p => p - 1);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePage()) {
      alert("Please fill all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      // Send data to backend
      const response = await fetch("http://localhost:3001/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Submission failed.");
      }
    } catch (err) {
      alert("Submission failed.");
    }
    setSubmitting(false);
  };
  
  // Success screen after form submission
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#edf2fa] to-[#abc4ff] flex flex-col items-center justify-center p-6">
        
        <div className="rounded-2xl shadow-2xl max-w-4xl w-full p-8 md:p-16 text-center">
          <div className="mb-9 flex justify-center">
          <img 
            src={xyz}
            alt="Success"
            className="w-70 h-40 object-contain"
          />
        </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            We'll be <span className="text-[#4b38d3]">HAPPY</span> to Assist You
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your free consultation and custom-fit plan are just a phone call away.
          </p>
          <div className="my-10 py-6 border-t border-b border-gray-200">
            <h2 className="text-2xl font-bold text-[#4b38d3] mb-4">
              Thanks for submitting your application
            </h2>
            <p className="text-lg text-gray-700">
              One of our Debt Relief Experts will be reaching out to you very soon
            </p>
          </div>
          <div className="mt-10">
            <p className="text-lg mb-4">
              Email us at: <a href="mailto:support@reddingtonglobal.com" className="text-[#4b38d3] font-semibold">
                support@reddingtonglobal.com
              </a>
            </p>
            <p className="text-lg">
              or you can also call us now at: 
              <span className="text-[#4b38d3] font-bold ml-2">(800)-300-9550</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#edf2fa] to-[#abc4ff] pt-0">
      
      {/* Centered Form Container */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <form 
          className="w-[90%] max-w-4xl min-h-[600px] bg-white rounded-2xl shadow-xl flex flex-col md:flex-row mx-auto overflow-hidden"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          {/* Image Section */}
          <div className="hidden md:block md:w-1/2 relative">
            <img 
              src={applyNowImg} 
              alt="Apply Now" 
              className="absolute inset-0 w-full h-full object-cover rounded-l-2xl" 
            />
          </div>
          
          {/* Form Section */}
          <div className="w-full md:w-1/2 p-5 md:p-10 relative rounded-r-2xl">
            {/* Page 1 */}
            <div className={`${page === 1 ? "block animate-fadeIn" : "hidden"}`}>
              <label className="block mt-4 mb-1 font-bold">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              />
              <label className="block mt-4 mb-1 font-bold">Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              />
              <label className="block mt-4 mb-1 font-bold">Email*</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              />
              <label className="block mt-4 mb-1 font-bold">Phone Number*</label>
              <div className="flex gap-2">
                <div className="max-w-[110px] p-3 rounded border border-gray-300 bg-gray-100">
                  (US)+1
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  maxLength={phoneLength}
                  placeholder=" (555)-123-4567"
                  className="flex-1 p-3 rounded border border-gray-300"
                />
              </div>
              <label className="block mt-4 mb-1 font-bold">Best Time To Call*</label>
              <select
                name="bestTimeToCall"
                value={form.bestTimeToCall}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              >
                <option value="">Select Best Time</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              {/* Consent Section */}
              <div className="mt-6">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-[#4b38d3]"
                  />
                  <span className="text-xs text-gray-600">
                    By providing my phone number and opting in, I consent to receive marketing SMS text messages from Reddington Global Debt Relief at the number provided, including messages sent by an automatic telephone dialing system (auto-dialer). I understand that consent is not a condition of purchase, and I can opt out at any time. I will receive 1-4 messages per month. Standard message and data rates may apply. To opt out of future messages, reply STOP. For help, reply HELP or contact us at support@reddingtonglobalcom. For more information check our Privacy Policy
                  </span>
                </label>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={submitting}
                  className={`px-5 py-2.5 bg-[#4b38d3] text-white font-bold rounded hover:bg-[#3a2ca8] transition-all duration-300 ${
                    nextLoading ? "relative overflow-hidden" : ""
                  }`}
                >
                  {nextLoading ? (
                    <>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                      </span>
                      <span className="invisible">Processing...</span>
                    </>
                  ) : (
                    "Next"
                  )}
                </button>
              </div>
            </div>
            {/* Page 2 */}
            <div className={`${page === 2 ? "block animate-fadeIn" : "hidden"}`}>
              <label className="block mt-4 mb-1 font-bold">State*</label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                required
                className="w-full p-3 rounded border border-gray-300"
              >
                <option value="">Select State</option>
                {states.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>            
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mt-4 mb-1 font-bold">City*</label>
                  <select
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    required
                    disabled={!form.state || cityOptionsList.length === 0}
                    className="w-full p-3 rounded border border-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
                  >
                    <option value="">{form.state ? "Select City" : "First select state"}</option>
                    {cityOptionsList.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  {!form.state && (
                    <p className="text-xs text-red-500 mt-1">Please select state first</p>
                  )}
                  {form.state && cityOptionsList.length === 0 && (
                    <input
                      type="text"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      required
                      className="w-full p-3 rounded border border-gray-300 mt-2"
                      placeholder="Enter your city"
                    />
                  )}
                </div>
                <div>
                  <label className="block mt-4 mb-1 font-bold">Zip Code*</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={form.zipCode}
                    onChange={handleChange}
                    required
                    maxLength={5}
                    placeholder="5-digit zip"
                    className="w-full p-3 rounded border border-gray-300"
                  />
                </div>
              </div>           
              <div className="mt-6 p-4">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="disclaimerConsent"
                    checked={form.disclaimerConsent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 accent-[#4b38d3]"
                    required
                  />
                  <span className="text-xs text-gray-600">
                    By clicking "Submit", I provide express written consent for Clarity Debt Resolution to contact me via email, phone calls, and/or text messages at the phone number associated with my account. This includes communications regarding scheduling, account alerts (Reddingtonglobal alert), and authorizing account transactions. I consent to the use of any telephone dialing system, including prerecorded or artificial voice messages and/or automatic dialing devices, as applicable, for sending these communications. My phone number and SMS consent will not be shared with third parties for any reason, and Msg & data rates may apply. Messaging frequency may vary. I can text HELP for assistance or email support@reddingtonglobal.com for additional support, and I can text STOP at any time to cancel these messages. Even if my phone number is on any state or federal Do-Not-Call list, I still authorize these communications. I understand that I can revoke this consent at any time and that opting in is not a condition for receiving services from Reddington Global Debt Relief. It is my responsibility to keep my phone number updated for these purposes.
                  </span>
                </label>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={submitting}
                  className="px-5 py-2.5 bg-gray-300 font-bold rounded hover:bg-gray-400 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className={`px-5 py-2.5 bg-[#4b38d3] text-white font-bold rounded hover:bg-[#3a2ca8] transition-all duration-300 ${
                    submitting ? "relative overflow-hidden" : ""
                  }`}
                >
                  {submitting ? (
                    <>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white"></span>
                      </span>
                      <span className="invisible">Submitting...</span>
                    </>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* How It Works Section */}
      <section className="bg-gradient-to-b from-[#edf2fa] to-[#abc4ff] py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 mb-10">
            You're in control, our debt experts do the work.
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
                Tell us your situation, then find out your debt relief options - no obligation.
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
                Take back your life in as little as 24-48 months.
              </p>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin {
          animation: spin 0.8s linear infinite;
        }
      `}</style>
    </div>
  );
}