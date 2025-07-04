import React, { useState } from 'react';

const Contact = () => {
  const [phoneError, setPhoneError] = useState('');
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);

  const formatPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, '').slice(0, 10);
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (!match) return '';
    return !match[2]
      ? match[1]
      : `(${match[1]}) ${match[2]}${match[3] ? '-' + match[3] : ''}`;
  };

  const validatePhone = (value) => {
    const raw = value.replace(/\D/g, '');
    if (raw.length !== 10) {
      setPhoneError('Please enter a valid 10-digit number');
    } else {
      setPhoneError('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setForm(f => ({ ...f, phone: formatted }));
      validatePhone(formatted);
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (res.ok) {
        alert("Thank you for contacting us!");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        alert("Submission failed.");
      }
    } catch {
      alert("Submission failed.");
    }
    setSubmitting(false);
  };

  return (
    <div className="bg-[#f0f8ff] py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Section */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-[#0e2f4f] mb-6">Your Path to Financial Freedom Starts Here</h1>
          <p className="text-[#2f3c4f] text-lg leading-8 mb-6">
            Debt can be stressful — but with the right support, you can overcome it. At RG Debt Relief, we specialize in helping individuals find smart, effective solutions to reduce debt and regain peace of mind.
          </p>
          <p className="text-[#2f3c4f] text-lg leading-8 mb-8">
            Get in touch for a 100% free consultation, or simply fill out the form and our team will connect with you shortly.
          </p>

          {/* Contact Info Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-[#0e2f4f] mb-4 flex items-center gap-2">📞 Need Help?</h3>
            <div className="mb-6">
              <h4 className="font-medium text-[#0e2f4f] mb-2">Contact Numbers</h4>
              <ul className="space-y-2 text-base">
                {[
                  '+19545563969',
                  '+19547168287',
                  '+19544663789',
                  '+19544660072',
                  '+19548002482',
                ].map((number, index) => (
                  <li key={index}>
                    <a href={`tel:${number}`} className="flex items-center text-blue-700 hover:text-blue-900 transition">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h1.28a1 1 0 01.948.684l1.357 4.071a1 1 0 01-.21.99l-1.04 1.04a16.001 16.001 0 006.586 6.586l1.04-1.04a1 1 0 01.99-.21l4.07 1.357a1 1 0 01.685.949V19a2 2 0 01-2 2h-1C8.268 21 3 15.732 3 9V5z" />
                      </svg>
                      {number}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-[#0e2f4f] mb-2">Email</h4>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=debtsettlement@rgdebtrelief.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-700 hover:text-blue-900 transition break-all text-base"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6c0-1.1-.9-2-2-2Zm0 4.99-8 5-8-5V6l8 5 8-5v2.99Z" />
                </svg>
                debtsettlement@rgdebtrelief.com
              </a>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-[#0e2f4f]">Contact Us</h2>
          <p className="text-base mb-6 text-gray-700">We're here to help! Send us a message and we'll give you a quick call back.</p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
                className="w-full border border-gray-300 rounded px-4 py-3 text-base"
              />
              <input
                type="text"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
                className="w-full border border-gray-300 rounded px-4 py-3 text-base"
              />
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border border-gray-300 rounded px-4 py-3 text-base"
            />
            <div>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                required
                className="w-full border border-gray-300 rounded px-4 py-3 text-base"
              />
              {phoneError && <p className="text-sm text-red-600 mt-1">{phoneError}</p>}
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              className="w-full h-32 border border-gray-300 rounded px-4 py-3 text-base"
              required
            ></textarea>
            <div className="text-sm text-gray-500">
              By providing my phone number and opting in, I consent to receive marketing SMS text messages from RG Debt Relief at the number provided. These messages may include updates, promotions, and service-related information. I understand that consent is not a condition of purchase and that message and data rates may apply. To opt out, I can reply STOP at any time.
              <a href="mailto:debtsettlement@rgdebtrelief.com" className="text-blue-700"> debtsettlement@rgdebtrelief.com</a>. For more information check our{' '}
              <a href="/PrivacyPolicy" className="text-blue-700">Privacy Policy</a>.
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#0e2f4f] text-white py-3 rounded font-semibold hover:bg-[#0c263e] transition text-lg"
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {/* DISCLAIMER */}
      <p className="text-[12px] text-gray-600 mt-12 max-w-6xl mx-auto leading-6 text-justify">
        DISCLAIMER: RG Debt Relief is committed to providing debt relief services in a transparent, ethical, and inclusive manner. We do not discriminate based on race, color, religion, gender, sexual orientation, marital status, national origin, or any other protected status. All communications, including phone calls and website interactions, may be recorded or monitored for quality assurance and training purposes. Our programs are designed to help clients reduce their unsecured debt; however, individual results vary based on total enrolled debt, creditor participation, and consistent monthly deposits. While many clients experience significant savings, we cannot guarantee specific outcomes or timelines. Not all debts qualify for enrollment, and services may not be available in all states. Fee structures and program terms may vary based on state regulations. RG Debt Relief does not assume, manage, or pay your debts on your behalf. We also do not provide legal advice, credit repair services, accounting, tax assistance, or bankruptcy services. We encourage clients to consult licensed professionals for any legal, tax, or financial guidance.
      </p>
    </div>
  );
};

export default Contact;
