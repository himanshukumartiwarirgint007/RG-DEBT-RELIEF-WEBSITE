import React from 'react';

const Section = ({ title, children, id }) => (
  <div id={id} className="mb-10 p-7 bg-white/95 dark:bg-gray-800/95 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700">
    <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 pb-2 border-b border-indigo-100 dark:border-gray-700 flex items-center">
      <span className="bg-indigo-100 dark:bg-indigo-900/30 p-2 rounded-md mr-3">
        {title.split(' ')[0]}
      </span>
      <span>{title.substring(title.indexOf(' ') + 1)}</span>
    </h2>
    <div className="text-zinc-700 dark:text-gray-300 text-base leading-relaxed">
      {children}
    </div>
  </div>
);

const IconWrapper = ({ children }) => (
  <span className="inline-flex items-center mr-2 text-indigo-600 dark:text-indigo-400">
    {children}
  </span>
);

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
  </svg>
);

const GlobeIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
  </svg>
);

const AddressIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

export const PrivacyPolicy = () => {
  // Phone number constant
  const supportPhoneNumber = "+19548002482";
  const formattedPhone = "+19548002482";

  return (
    <div className="bg-gradient-to-br from-zinc-50 to-indigo-50/20 dark:from-gray-900 dark:to-gray-900 py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 max-w-6xl mx-auto transition-colors duration-300">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <div className="w-24 h-1 bg-indigo-500 mx-auto mb-4 rounded-full"></div>
        <p className="text-sm text-zinc-500 dark:text-gray-400 font-medium">Effective Date: July, 2025</p>
      </div>

      <Section title="1. Information We Collect">
        <p className="mb-4">We collect the following categories of information when you engage with our website, services, or representatives:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li><strong>Personal Information:</strong> Full name, phone number, email address, mailing address, date of birth, Social Security Number (if required).</li>
          <li><strong>Financial Information:</strong> Debt balances, credit score insights, income, banking details, payment history, and other relevant financial data.</li>
          <li><strong>Usage Information:</strong> Browser type, IP address, device type, time spent, pages visited, and user behavior.</li>
          <li><strong>Communications Data:</strong> Emails, call recordings, chat transcripts, support tickets, and other service interactions.</li>
          <li><strong>Third-Party Data:</strong> Credit bureaus and affiliate partners may share your data under your authorization.</li>
        </ul>
      </Section>

      <Section title="2. How We Use Your Information">
        <p className="mb-4">We use your data to:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>Deliver personalized debt relief and financial consulting services.</li>
          <li>Conduct credit assessments and offer tailored program recommendations.</li>
          <li>Communicate important updates, reminders, confirmations, and service notices.</li>
          <li>Improve our platform functionality, analytics, and user experience.</li>
          <li>Fulfill legal obligations and protect our business interests.</li>
        </ul>
      </Section>

      <Section title="3. TCPA & Consent to Contact">
        <p className="mb-4">By providing your phone number (landline or mobile), you expressly consent, in accordance with the Telephone Consumer Protection Act (TCPA), to receive:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>Calls (including pre-recorded or artificial voice messages)</li>
          <li>Text messages (SMS/MMS)</li>
          <li>Emails</li>
        </ul>
        <p className="mb-4">from RG Debt Relief Solutions and its service providers or affiliates for:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>Account servicing</li>
          <li>Informational updates</li>
          <li>Marketing offers related to debt relief or financial services</li>
        </ul>
        <p className="mb-4">This may include automated systems such as auto-dialers or predictive dialers. Consent is not a condition of purchase.</p>
        <p className="font-medium mb-2">You may opt-out at any time by:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>Replying "STOP" to SMS messages</li>
          <li>Clicking "unsubscribe" in emails</li>
          <li>
            Calling us at: 
            <a 
              href={`tel:+1${supportPhoneNumber}`} 
              className="ml-1 text-indigo-600 dark:text-indigo-400 underline hover:no-underline"
            >
              {formattedPhone}
            </a>
          </li>
          <li>Emailing: <a className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline" href="mailto:privacy@rgdebtrelief.com">privacy@rgdebtrelief.com</a></li>
        </ul>
      </Section>

      <Section title="4. Data Sharing & Disclosure">
        <p className="mb-4">We may share your information:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>With trusted third-party vendors (CRM, payment processors, credit report services) under strict confidentiality terms.</li>
          <li>With government or law enforcement agencies, if legally compelled.</li>
          <li>With affiliates or marketing partners only with your express written consent.</li>
        </ul>
        <p className="mt-4 font-medium">We never sell your personal information.</p>
      </Section>

      <Section title="5. Your Privacy Rights">
        <p className="mb-4">You have the right to:</p>
        <ul className="list-disc list-inside space-y-3 ml-4 mb-6">
          <li><strong>Access:</strong> View the personal data we hold.</li>
          <li><strong>Correction:</strong> Update inaccurate or outdated data.</li>
          <li><strong>Deletion:</strong> Request removal of your personal information (subject to legal limitations).</li>
          <li><strong>Objection:</strong> Restrict use of your data for certain purposes.</li>
          <li><strong>Withdraw Consent:</strong> Revoke marketing or communication permissions at any time.</li>
        </ul>
        <p className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
          To exercise your rights, please contact us at:
          <a className="text-indigo-600 dark:text-indigo-400 font-medium ml-2 underline hover:no-underline" href="mailto:privacy@rgdebtrelief.com">
            privacy@rgdebtrelief.com
          </a>
        </p>
      </Section>

      <Section title="6. Cookies & Tracking">
        <p className="mb-4">We use cookies and analytics tools to:</p>
        <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
          <li>Analyze traffic and user behavior</li>
          <li>Improve page performance and UX</li>
          <li>Personalize your experience</li>
        </ul>
        <p>You may control cookie settings via your browser preferences.</p>
      </Section>

      <Section title="7. Security Measures">
        <p className="mb-4">We apply industry-standard safeguards including:</p>
        <ul className="list-disc list-inside space-y-2 ml-4">
          <li>SSL encryption</li>
          <li>Secure access controls</li>
          <li>Third-party security audits</li>
          <li>Data minimization & retention policies</li>
        </ul>
      </Section>

      <Section title="8. Data Retention">
        <p>Your information is retained only as long as necessary to fulfill services or comply with legal obligations. It is then securely archived or deleted.</p>
      </Section>

      <Section title="9. Children's Privacy">
        <p>Our services are intended only for individuals aged 18 and above. We do not knowingly collect data from minors under 13.</p>
      </Section>

      <Section title="10. Changes to This Policy">
        <p>We may update this policy periodically. The most recent version will always be posted on this page with the revised effective date.</p>
      </Section>

      <Section title="11. Contact Us">
        <div className="space-y-3 mt-4">
          <p className="flex items-center">
            <IconWrapper><MailIcon /></IconWrapper>
            <a className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline" href="mailto:privacy@rgdebtrelief.com">
              privacy@rgdebtrelief.com
            </a>
          </p>
          <p className="flex items-center">
            <IconWrapper><PhoneIcon /></IconWrapper>
            <a 
              href={`tel:+1${supportPhoneNumber}`} 
              className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline"
            >
              {formattedPhone}
            </a>
          </p>
          <p className="flex items-center">
            <IconWrapper><GlobeIcon /></IconWrapper>
            <a className="text-indigo-600 dark:text-indigo-400 underline hover:no-underline" href="https://www.rgdebtrelief.com">
              www.rgdebtrelief.com
            </a>
          </p>
          <p className="flex items-start">
            <IconWrapper><AddressIcon /></IconWrapper>
            RG Debt Relief Solutions
          </p>
        </div>
      </Section>

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-zinc-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} RG Debt Relief Solutions. All rights reserved.</p>
      </div>
    </div>
  );
};
export default PrivacyPolicy;