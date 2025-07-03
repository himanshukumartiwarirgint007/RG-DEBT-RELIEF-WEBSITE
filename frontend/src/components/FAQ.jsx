import React, { useState } from "react";

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  
  const faqs = [
{
  q: "How does debt relief affect my credit score?",
  a: "Enrollment in our program could impact your credit rating, particularly if you've already missed payments. While we help resolve your debt, we don't provide credit repair services due to separate industry regulations. We recommend reviewing your credit reports regularly throughout the process."
},
{
  q: "What are your fees?",
  a: "You pay nothing until we successfully settle your debts. Our fee applies only when: (1) We secure a settlement offer from your creditor, (2) You approve the agreement, and (3) At least one settlement payment is processed. The typical fee is up to 25% of enrolled debt, charged only after settlements are finalized. No upfront costs apply."
},
{
  q: "How does your debt relief process work?",
  a: "Our 4-phase approach: 1) Free Consultation: We review your financial situation 2) Custom Plan: We recommend the optimal debt solution 3) Creditor Negotiation: Our experts work to reduce what you owe 4) Resolution: You make payments through a protected account until debts are settled."
},
{
  q: "Which types of debt can you help with?",
  a: "We specialize in unsecured debts including: • Credit cards • Medical bills • Personal loans • Private student loans. We cannot assist with: × Mortgages × Auto loans × Federal student loans. During your consultation, we'll identify exactly which debts we can resolve."
}
  ];

  return (
    <section
      className="faq-section"
      style={{
        background: "var(--white)",
        borderRadius: "24px",
        boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
        padding: "32px 0",
        margin: "32px 0",
        maxWidth: "98vw"
      }}
    >
      <h2
        style={{
          fontSize: "2.4rem",
          color: "#181c2a",
          textAlign: "center",
          marginBottom: "8px",
          fontWeight: 600,
          letterSpacing: "-1px",
          fontFamily: "'Poppins', sans-serif"
        }}
      >
        Frequently Asked Questions
      </h2>
      <p
        style={{
          color: "#444",
          fontSize: "1.15rem",
          marginBottom: "32px",
          textAlign: "center"
        }}
      >
        Get clear, straightforward information about how debt relief works
      </p>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{
              background: openIdx === idx ? "#fff" : "#f7f9fa",
              borderRadius: "18px",
              boxShadow: openIdx === idx ? "0 2px 16px rgba(0,0,0,0.08)" : "none",
              marginBottom: "24px",
              transition: "box-shadow 0.2s, background 0.2s",
              padding: openIdx === idx ? "24px 24px 16px 24px" : "0 24px",
              border: openIdx === idx ? "1.5px solid var(--primary)" : "none"
            }}
          >
           <button
  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
  aria-expanded={openIdx === idx}
  style={{
    background: openIdx === idx ? "#f8f9ff" : "transparent",
    border: "none",
    width: "100%",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#181c2a",
    padding: "20px 24px",
    cursor: "pointer",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    boxShadow: openIdx === idx ? "0 4px 12px rgba(0,0,0,0.08)" : "none",
    margin: "4px 0"
  }}
>
  <span style={{
    flex: 1,
    paddingRight: "16px"
  }}>
    {faq.q}
  </span>
  
  <span style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "32px",
    height: "32px",
    borderRadius: "8px",
    backgroundColor: openIdx === idx ? "var(--primary)" : "#f0f2f7",
    color: openIdx === idx ? "#fff" : "var(--primary)",
    transition: "all 0.3s ease",
    fontSize: "1.2rem",
    fontWeight: 400
  }}>
    {openIdx === idx ? "−" : "+"}
  </span>
</button>
            <div
              style={{
                maxHeight: openIdx === idx ? 500 : 0,
                overflow: "hidden",
                transition: "max-height 0.35s cubic-bezier(.4,0,.2,1)",
                padding: openIdx === idx ? "0 0 18px 54px" : "0 0 0 54px"
              }}
            >
              {openIdx === idx && (
                <div
                  style={{
                    color: "#222",
                    fontSize: "1.08rem",
                    lineHeight: 1.7,
                    marginTop: 0
                  }}
                >
                  {faq.a}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

/*
"To use this component, simply import it and include it in your JSX:""

jsx
import FAQSection from './FAQSection';

function App() {
  return (
    <div>

      <FAQSection />
    </div>
  );
}
"The component uses CSS variables for colors (--primary, --white), so make sure you have these defined in your global CSS:""

css
:root {
  --primary: #002856;
  --white: #ffffff;
}
"Or you can replace these variables with actual color values if you prefer.""

*/