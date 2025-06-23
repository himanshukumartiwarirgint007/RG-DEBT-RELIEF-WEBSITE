import React from "react";

// Reusable Section Component with Card & Accent
const Section = ({ title, children, id }) => (
  <div id={id} className="mb-8 p-6 bg-white/90 dark:bg-gray-800/90 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
    <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-3 border-l-4 pl-3 border-indigo-400">
      {title}
    </h2>
    <div className="text-zinc-700 dark:text-gray-300 text-base leading-relaxed">
      {children}
    </div>
  </div>
);

// SVG Icons for Contact
const MailIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const AddressIcon = () => (
  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

const TermsOfService = () => (
  <div className="bg-zinc-50 dark:bg-gray-900 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 max-w-6xl mx-auto transition-colors duration-300">
    <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-600 dark:text-indigo-400">Terms of Service</h1>
    <p className="text-center text-sm text-zinc-500 dark:text-gray-400 mb-8">Effective Date: June 23, 2025</p>

    <Section title="Welcome">
      <p>Welcome to RG Debt Relief. By accessing or using our website and services, you agree to be bound by these Terms of Service and our <a href="/PrivacyPolicy" className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline">Privacy Policy</a>. If you do not agree, please do not use our site.</p>
    </Section>

    <Section title="Services Provided">
      <p>RG Debt Relief provides debt relief education, financial wellness resources, and personalized consultations. Our services are informational and educational in nature. We do not provide legal advice, credit repair, or financial planning services.</p>
    </Section>

    <Section title="Eligibility">
      <p>You must be at least 18 years of age to use our services. By using our site, you represent that you meet this requirement.</p>
    </Section>

    <Section title="User Responsibilities">
      <ul className="list-disc list-inside space-y-2">
        <li>Provide accurate, current, and complete information when using our services.</li>
        <li>Use our site and services lawfully and in accordance with these terms.</li>
        <li>Do not engage in any activity that disrupts or interferes with the operation of our site.</li>
        <li>Do not attempt to gain unauthorized access to our systems or data.</li>
        <li>Do not use our site for any fraudulent, illegal, or harmful purposes.</li>
      </ul>
    </Section>

    <Section title="Intellectual Property">
      <p>All content, trademarks, logos, and materials on our site are the property of RG Debt Relief or our licensors. You may not copy, reproduce, distribute, or create derivative works without our express written permission.</p>
    </Section>

    <Section title="Limitation of Liability">
      <p>RG Debt Relief is not liable for any indirect, incidental, special, or consequential damages arising from your use of our site or services. We make no warranties regarding the accuracy, completeness, or reliability of the information provided.</p>
      <p className="mt-2">Our site is provided "as is" and "as available" without any guarantees.</p>
    </Section>

    <Section title="Third-Party Links">
      <p>Our site may contain links to third-party websites. We are not responsible for the content or practices of these external sites. Use them at your own risk.</p>
    </Section>

    <Section title="Updates & Termination">
      <p>We may update these terms at any time. Continued use of our site after changes constitutes acceptance of the revised terms.</p>
      <p className="mt-2">We reserve the right to suspend or terminate your access to our site for any violation of these terms or for any other reason at our sole discretion.</p>
    </Section>

    <Section title="Governing Law">
      <p>These Terms of Service are governed by and construed in accordance with the laws of [Your State/Country]. Any disputes will be resolved in the courts of [Your State/Country].</p>
    </Section>

    <Section title="Contact Us">
      <p>If you have any questions about these terms, please contact us:</p>
      <p className="mt-2"><a className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline" href="mailto:support@rgdebtrelief.com"><MailIcon />support@rgdebtrelief.com</a></p>
      <p><AddressIcon />Reddington Global Consultancy</p>
    </Section>
  </div>
);

export default TermsOfService;
