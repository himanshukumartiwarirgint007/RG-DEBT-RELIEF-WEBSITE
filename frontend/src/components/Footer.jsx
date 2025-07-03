import React, { useEffect } from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Mail } from 'lucide-react';


const Footer = () => {
  useEffect(() => {
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.style.opacity = '0';
      footer.style.transform = 'translateY(30px)';
      const footerObserver = new window.IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            footer.style.opacity = '1';
            footer.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.1 });
      footerObserver.observe(footer);
    }
  }, []);

  return (
    <footer className="footer bg-gradient-to-r from-[#0059B3] to-[#66B3FF] dark:from-[#0e1a2b] dark:to-[#1a2d47] text-white shadow-md transition-all duration-300 px-4 py-12 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-start">
          
          {/* Left Section */}
          <div className="md:col-span-2">
            <a href="Apply" className="text-yellow-400 text-2xl font-bold mb-4 inline-block">
              DebtFree Solutions
            </a>
            <p className="text-sm text-white dark:text-gray-300 mt-4">
              Helping families breathe easier and rebuild their futures through compassionate, ethical debt relief — proudly serving since 2025.
            </p>
            <a href="mailto:debtsettlement@rgdebtrelief.com" className="text-[#ffffff] flex items-center gap-2"><Mail className="w-5 h-5 text-white" /> debtsettlement@rgdebtrelief.com</a>

            {/* Social Icons */}
            {/* <div className="flex gap-4 mt-5">
              <a href="https://www.linkedin.com/company/immergixthefuture" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400"> <FaFacebookF /> </a>
              <a href="https://www.linkedin.com/company/immergixthefuture" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400"> <FaTwitter /> </a>
              <a href="https://www.linkedin.com/company/immergixthefuture" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400"> <FaInstagram /> </a>
              <a href="https://www.linkedin.com/company/immergixthefuture/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400"> <FaLinkedinIn /> </a>
            </div> */}
          </div>

          {/* Center gap */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Right-aligned links */}
          <div className="lg:col-span-3 flex flex-col md:flex-row justify-end gap-8 text-center">
            <div>
              <h5 className="text-[#f7c948] font-semibold mb-3">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="AboutUs" className="text-white dark:text-gray-300 hover:text-yellow-400 transition-all">About Us</a></li>
                <li><a href="ContactUs" className="text-white dark:text-gray-300 hover:text-yellow-400 transition-all">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[#f7c948] font-semibold mb-3">Services</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="Apply" className="text-white dark:text-gray-300 hover:text-yellow-400 transition-all">Debt Settlement</a></li>
              </ul>
            </div>

            <div>
              <h5 className="text-[#f7c948] font-semibold mb-3">Resources</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="Blog" className="text-white dark:text-gray-300 hover:text-yellow-400 transition-all">Blog</a></li>
                <li><a href="FAQ" className="text-white dark:text-gray-300 hover:text-yellow-400 transition-all">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section - preserved */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-sm text-white dark:text-gray-400">
          <p>
            &copy; 2025 DebtFree Solutions. All rights reserved. |{" "}
            <a href="PrivacyPolicy" className="hover:text-yellow-400">Privacy Policy</a> |{" "}
            <a href="TermsOFServices" className="hover:text-yellow-400">Terms of Service</a>
          </p>
        </div>

        <div className="mt-2 pt-3 text-center text-sm text-white dark:text-gray-400">
          <p>
            <strong>DISCLAIMER: </strong>RG Debt Relief is committed to providing debt relief services in a transparent, ethical, and inclusive manner. We do not discriminate based on race, color, religion, gender, sexual orientation, marital status, national origin, or any other protected status. All communications, including phone calls and website interactions, may be recorded or monitored for quality assurance and training purposes.
            Our programs are designed to help clients reduce their unsecured debt; however, individual results vary based on total enrolled debt, creditor participation, and consistent monthly deposits. While many clients experience significant savings, we cannot guarantee specific outcomes or timelines. Not all debts qualify for enrollment, and services may not be available in all states. Fee structures and program terms may vary based on state regulations.
            RG Debt Relief does not assume, manage, or pay your debts on your behalf. We also do not provide legal advice, credit repair services, accounting, tax assistance, or bankruptcy services. We encourage clients to consult licensed professionals for any legal, tax, or financial guidance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
