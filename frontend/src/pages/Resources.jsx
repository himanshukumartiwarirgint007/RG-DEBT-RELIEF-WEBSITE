import { useState, useEffect } from "react";
import people from '../assets/Media/People.avif'; 
import FAQ from '../components/FAQ';

const cardData = [
  {
    icon: "💳",
    title: "Credit Card Debt Relief",
    description: "Pay off the credit card debt you've racked up.",
    link: "#"
  },
  {
    icon: "💰",
    title: "Debt Consolidation",
    description: "Combine multiple credit card debts into one loan and save.",
    link: "#"
  },
  {
    icon: "🤝",
    title: "Personal Loan Debt Relief",
    description: "We'll help you navigate through life's financial challenges.",
    link: "#"
  },
  {
    icon: "📄",
    title: "Debt Relief Settlement",
    description: "Pay off your debt in less time with the most savings.",
    link: "#"
  },
  {
    icon: "🏥",
    title: "Medical Debt Relief",
    description: "We can help you feel better by paying off your medical debt.",
    link: "#"
  },
  {
    icon: "🧑‍💼",
    title: "Unemployment Debt Relief",
    description: "Put unemployment debt relief to work and pay off your bills.",
    link: "#"
  },
  {
    icon: "👴",
    title: "Retirement Debt Relief",
    description: "We can help you make your golden years more valuable.",
    link: "#"
  },
  {
    icon: "🎖️",
    title: "Veteran Debt Relief",
    description: "We're honored to help you pay off your debt and get a fresh start.",
    link: "#"
  },
  {
    icon: "💼",
    title: "Business Debt Relief",
    description: "Don't start or run your business on a negative note.",
    link: "#"
  },
  {
    icon: "🏦",
    title: "Bankruptcy",
    description: "Learn how bankruptcy works and if it's right for you.",
    link: "#"
  },
  {
    icon: "👨‍🏫",
    title: "Credit Counseling",
    description: "Is a credit counselor or debt management plan for you?",
    link: "#"
  },
  {
    icon: "🎓",
    title: "Private Student Debt Relief",
    description: "Learn how to pay off your private student debt for less money.",
    link: "#"
  },
  {
    icon: "💍",
    title: "Marital Debt Relief",
    description: "Discover how to afford a wedding or divorce and turn your life around.",
    link: "#"
  },
  {
    icon: "🛑",
    title: "Personal Finance Debt Relief",
    description: "Stop personal debt from interfering with your personal life.",
    link: "#"
  },
  {
    icon: "📍",
    title: "Debt Relief by State",
    description: "See your debt relief options based on where you live.",
    link: "#"
  }
];

const howItWorksSteps = [
  "Talk to a Debt Specialist for a free, no-obligation consultation.",
  "Customize your plan to fit your needs and budget.",
  "We negotiate with your creditors to reduce your total debt.",
  "Complete your program and enjoy a fresh financial start."
];

const Resources = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredLink, setHoveredLink] = useState(null);

  const styles = {
    page: {
      padding: "40px 20px",
      background: "#f6f8fa",
      fontFamily: "'Inter', Arial, sans-serif"
    },
    hero: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "40px",
      background: "#fff",
      borderRadius: "20px",
      boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
      padding: "32px 24px"
    },
    heroText: {
      flex: "1 1 350px",
      maxWidth: "500px"
    },
    heroTextH1: {
      fontSize: "2.5rem",
      marginBottom: "16px",
      color: "#1a202c"
    },
    heroTextP: {
      fontSize: "1.15rem",
      marginBottom: "24px",
      color: "#555"
    },
    heroBtn: {
      display: "inline-block",
      background: "#ff7a59",
      color: "#fff",
      padding: "12px 28px",
      borderRadius: "8px",
      fontWeight: "bold",
      textDecoration: "none",
      transition: "background 0.2s"
    },
    heroBtnHover: {
      background: "#ff4c1c"
    },
    heroImg: {
      maxWidth: "350px",
      borderRadius: "20px",
      marginLeft: "32px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.08)"
    },
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "32px"
    },
    card: {
      background: "#fff",
      borderRadius: "18px",
      boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
      padding: "32px 24px",
      textAlign: "center",
      transition: "box-shadow 0.2s, transform 0.2s",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      opacity: 0,
      transform: "translateY(40px)",
      animation: "fadeInUp 0.7s ease forwards"
    },
    cardAnimated: (delay) => ({
      animationDelay: `${delay}s`
    }),
    cardHover: {
      boxShadow: "0 8px 32px rgba(0,0,0,0.13)",
      transform: "translateY(-4px) scale(1.03)"
    },
    cardIcon: {
      fontSize: "2.5rem",
      marginBottom: "18px"
    },
    cardTitle: {
      fontSize: "1.2rem",
      marginBottom: "10px",
      color: "#1a202c"
    },
    cardDescription: {
      fontSize: "1rem",
      color: "#555",
      marginBottom: "18px"
    },
    cardLink: {
      color: "#ff7a59",
      textDecoration: "none",
      fontWeight: "600",
      transition: "color 0.2s"
    },
    cardLinkHover: {
      color: "#ff4c1c"
    }
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeInUp {
        0% {
          opacity: 0;
          transform: translateY(40px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={styles.page}>
      {/* Top Section */}
      <div style={{ ...styles.hero, flexWrap: "nowrap", minHeight: 0 }}>
        <div style={{ ...styles.heroText, flex: "1 1 350px", maxWidth: "600px" }}>
          <h1 style={styles.heroTextH1}>All You Need To Know</h1>
          <p style={styles.heroTextP}>
            We've put all our essential resources in one spot. Everything from debt resolution to taking control of your financial future.
            Need to talk? Our experts are here to help. Call us anytime for a free no-obligation consultation.
          </p>
          <a style={styles.heroBtn} href="tel:8003009550">800-300-9550</a>
        </div>
        <div style={{
          flex: "1 1 320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          minWidth: 0
        }}>
          <img
            src={people}
            alt="People working in an office"
            style={{
              ...styles.heroImg,
              width: "100%",
              maxWidth: "400px",
              minWidth: "220px",
              height: "auto",
              marginLeft: "32px",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
        </div>
      </div>

      {/* Cards Section */}
      <div style={styles.cardsGrid}>
        {cardData.map((card, idx) => (
          <div
            style={{
              ...styles.card,
              ...(hoveredCard === idx ? styles.cardHover : {}),
              ...styles.cardAnimated(idx * 0.07)
            }}
            key={idx}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.cardIcon}>{card.icon}</div>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDescription}>{card.description}</p>
            <a
              style={{
                ...styles.cardLink,
                ...(hoveredLink === idx ? styles.cardLinkHover : {})
              }}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredLink(idx)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Learn More &rarr;
            </a>
          </div>
        ))}
      </div>

      {/* How Debt Relief Works Section */}
      <section style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#fff",
        borderRadius: "20px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
        padding: "32px 24px",
        margin: "48px 0"
      }}>
        <div style={{ flex: "1 1 350px", minWidth: "280px", maxWidth: "600px" }}>
          <h2 style={{ fontSize: "2.2rem", color: "#1a202c", marginBottom: "18px" }}>
            How Debt Relief Works in 4 Life-Changing Steps
          </h2>
          <p style={{ color: "#444", fontSize: "1.1rem", marginBottom: "18px" }}>
            At National Debt Relief, we've helped over 550,000 clients with their debt settlement. We negotiate with major credit card issuers and banks to reduce debts, and cover most unsecured debt. For anyone carrying the burden of credit card debt, personal loans, private student loans, collections or business debt, it starts with one simple call and ends with you living again, debt free!
          </p>
          <a style={{
            display: "inline-block",
            background: "#1976d2",
            color: "#fff",
            padding: "12px 28px",
            borderRadius: "24px",
            fontWeight: "bold",
            textDecoration: "none",
            marginTop: "12px"
          }} href="tel:8003009550">800-300-9550</a>
          <ul style={{ marginTop: "28px", paddingLeft: "20px", color: "#1976d2", fontSize: "1.08rem" }}>
            {howItWorksSteps.map((step, idx) => (
              <li key={idx} style={{ marginBottom: "10px" }}>
                <span style={{
                  fontWeight: "bold",
                  color: "#ff7a59",
                  marginRight: "8px"
                }}>{idx + 1}.</span> {step}
              </li>
            ))}
          </ul>
        </div>
        <div style={{
          flex: "1 1 320px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: "260px"
        }}>
          <iframe
            width="360"
            height="200"
            src="https://www.youtube.com/embed/4Q7FTjhvZ7Y"
            title="How Does Debt Relief Work?"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
              background: "#eee"
            }}
          ></iframe>
        </div>
      </section>
      <section className="mt-16"><FAQ /></section>
    </div>
  );
};

export default Resources;