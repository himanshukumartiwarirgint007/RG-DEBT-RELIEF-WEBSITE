import React, { useEffect } from 'react';

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
    <footer className="footer bg-[#002855] text-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="md:col-span-2">
            <a href="#" className="text-yellow-400 text-2xl font-bold mb-4 inline-block">DebtFree Solutions</a>
            <p className="text-sm text-[#ffffff]">Helping individuals and families achieve financial freedom through ethical debt relief solutions since 2010.</p>
          </div>

          <div className="footer-links text-center">
            <h5 className="text-[#f7c948] font-semibold mb-3">Company</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="AboutUs" className="text-[#ffffff] hover:text-yellow-400 transition-all">About Us</a></li>
              <li><a href="AboutUs" className="text-[#ffffff] hover:text-yellow-400 transition-all">Our Team</a></li>
              <li><a href="CareersPage" className="text-[#ffffff] hover:text-yellow-400 transition-all">Careers</a></li>
              <li><a href="Blog" className="text-[#ffffff] hover:text-yellow-400 transition-all">News</a></li>
              <li><a href="Apply" className="text-[#ffffff] hover:text-yellow-400 transition-all">Contact</a></li>
            </ul>
          </div>

          <div className="footer-links text-center">
            <h5 className="text-[#f7c948] font-semibold mb-3">Services</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">Debt Settlement</a></li>
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">Debt Management</a></li>
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">Credit Counseling</a></li>
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">Bankruptcy Alternatives</a></li>
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">Financial Education</a></li>
            </ul>
          </div>

          <div className="footer-links text-center">
            <h5 className="text-[#f7c948] font-semibold mb-3">Resources</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">Success Stories</a></li>
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">Blog</a></li>
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">Calculators</a></li>
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">FAQ</a></li>
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">Glossary</a></li>
            </ul>
          </div>

          <div className="footer-links text-center">
            <h5 className="text-[#f7c948] font-semibold mb-3">Legal</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="PrivacyPolicy" className="text-[#ffffff] hover:text-yellow-400 transition-all">Privacy Policy</a></li>
              <li><a href="TermsOfServices" className="text-[#ffffff] hover:text-yellow-400 transition-all">Terms of Service</a></li>
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">Disclosures</a></li>
              <li><a href="#" className="text-[#ffffff] hover:text-yellow-400 transition-all">Licenses</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#fff]-700 mt-10 pt-6 text-center text-sm text-[#ffffff]-400">
          <p>&copy; 2025 DebtFree Solutions. All rights reserved. | <a href="PrivacyPolicy" className="text-[#ffffff] hover:text-yellow-400">Privacy Policy</a> | <a href="TermsOFServices" className="text-[#ffffff] hover:text-yellow-400">Terms of Service</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
