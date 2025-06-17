import React, { useState } from "react";

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);
  
  const faqs = [
    {
      q: "Will your program impact my credit score?",
      a: "Depending on your personal situation and whether you have already missed payments to your creditors, debt settlement programs may have a negative impact on your credit score. Due to it being a separately regulated service, we do not provide credit repair services or offer advice on ways to improve your credit."
    },
    {
      q: "What will your service cost me?",
      a: "At National Debt Relief we do not earn anything unless we get you results. Specifically, 3 things must happen for a fee to be earned for the service. First, a settlement offer must be received from the creditor, we must receive your approval of the settlement, and finally at least 1 settlement payment to the creditor must be made. Only then would our fee be earned and charged to your Dedicated Account. Once debts are settled, the average client usually pays a fee of up to 25% of the total debt enrolled. But, until these 3 things occur, there is no fee for the service."
    },
    {
      q: "How does the debt relief process work?",
      a: "Our debt relief process begins with a free consultation where we analyze your financial situation. We then develop a customized plan that may include debt settlement, consolidation, or management strategies. Our team negotiates directly with your creditors to reduce balances, lower interest rates, or create affordable payment plans."
    },
    {
      q: "Can you help with all types of debt?",
      a: "We specialize in unsecured debts like credit cards, medical bills, personal loans, and private student loans. We cannot assist with secured debts (mortgages, auto loans) or federal student loans. During your consultation, we'll review all your debts and advise which ones we can help with."
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
        Everything you need to know about debt relief
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
                background: "none",
                border: "none",
                outline: "none",
                width: "100%",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                fontSize: "1.35rem",
                fontWeight: 700,
                color: "#181c2a",
                padding: "24px 0",
                cursor: "pointer",
                borderRadius: "14px",
                transition: "background 0.2s"
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 36,
                  height: 36,
                  border: "2px solid var(--primary)",
                  borderRadius: "50%",
                  marginRight: 18,
                  fontSize: "1.6rem",
                  background: "#fff",
                  color: "var(--primary)"
                }}
              >
                {openIdx === idx ? "−" : "+"}
              </span>
              {faq.q}
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