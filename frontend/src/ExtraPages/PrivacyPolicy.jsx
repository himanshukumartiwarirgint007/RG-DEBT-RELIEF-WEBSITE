import React from 'react';
import { Link } from 'react-router-dom';

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

export const PrivacyPolicy = () => (
  <div className="bg-zinc-50 dark:bg-gray-900 py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 max-w-6xl mx-auto transition-colors duration-300">
    <h1 className="text-4xl font-extrabold text-center mb-6 text-indigo-600 dark:text-indigo-400">Privacy Policy</h1>
    <p className="text-center text-sm text-zinc-500 dark:text-gray-400 mb-8">Effective Date: June 23, 2025</p>

    <Section title="Information We Collect">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, and debt-related details.</li>
        <li><strong>Usage Data:</strong> Pages visited, IP address, browser type, device information, time spent on site, and navigation paths.</li>
        <li><strong>Communication Data:</strong> Emails, chat logs, support tickets, and any other interactions with our team.</li>
        <li><strong>Financial Information:</strong> (If applicable) Details about your debts, payment history, and financial situation, processed securely and only as necessary.</li>
      </ul>
    </Section>

    <Section title="How We Use Your Information">
      <ul className="list-disc list-inside space-y-2">
        <li>To provide personalized debt relief assistance and tailored financial advice.</li>
        <li>To improve our services, website functionality, and user experience.</li>
        <li>To communicate with you about updates, offers, and important notices.</li>
        <li>To analyze trends and usage patterns for research and development.</li>
      </ul>
      <p className="mt-4">We never sell or share your personal information with third parties for marketing purposes.</p>
    </Section>

    <Section title="Cookies & Tracking">
      <p>We use cookies and similar tracking technologies to enhance your browsing experience, analyze site usage, and personalize content. You can manage your cookie preferences through your browser settings.</p>
      <p className="mt-2">We also use third-party analytics services to help us understand how our site is used and to improve our services.</p>
    </Section>

    <Section title="Data Sharing & Disclosure">
      <ul className="list-disc list-inside space-y-2">
        <li>We may share your information with trusted partners who assist us in delivering our services, under strict confidentiality agreements.</li>
        <li>We may disclose information if required by law or in response to valid legal requests.</li>
      </ul>
    </Section>

    <Section title="Your Rights">
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Access:</strong> Request a copy of your personal data.</li>
        <li><strong>Correction:</strong> Update or correct inaccurate information.</li>
        <li><strong>Deletion:</strong> Request deletion of your personal data.</li>
        <li><strong>Objection:</strong> Object to certain data processing activities.</li>
      </ul>
      <p className="mt-4">To exercise any of these rights, please email us at <a className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline" href="mailto:support@rgdebtrelief.com"><MailIcon />support@rgdebtrelief.com</a>.</p>
    </Section>

    <Section title="Security & Policy Updates">
      <p>We implement industry-standard security measures to protect your data, including encryption and secure access controls. Our team is trained in data protection best practices.</p>
      <p className="mt-2">We may update this policy from time to time. The effective date at the top of this page will reflect any changes. Continued use of our site after updates constitutes acceptance of the revised policy.</p>
    </Section>

    <Section title="Contact Us">
      <p>If you have any questions about this privacy policy or your personal data, please contact us:</p>
      <p className="mt-2"><a className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline" href="mailto:support@rgdebtrelief.com"><MailIcon />support@rgdebtrelief.com</a></p>
      <p><AddressIcon />Reddington Global Consultancy</p>
    </Section>
  </div>
);
export default PrivacyPolicy;