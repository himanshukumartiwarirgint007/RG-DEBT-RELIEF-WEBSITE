import { useState, useEffect, useRef } from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    cards: false,
    howItWorks: false,
    faq: false
  });
  
  const heroRef = useRef(null);
  const cardsRef = useRef(null);
  const howItWorksRef = useRef(null);
  const faqRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({ ...prev, [entry.target.dataset.section]: true }));
        }
      });
    }, { threshold: 0.1 });
    
    if (heroRef.current) {
      heroRef.current.dataset.section = 'hero';
      observer.observe(heroRef.current);
    }
    if (cardsRef.current) {
      cardsRef.current.dataset.section = 'cards';
      observer.observe(cardsRef.current);
    }
    if (howItWorksRef.current) {
      howItWorksRef.current.dataset.section = 'howItWorks';
      observer.observe(howItWorksRef.current);
    }
    if (faqRef.current) {
      faqRef.current.dataset.section = 'faq';
      observer.observe(faqRef.current);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      observer.disconnect();
    };
  }, []);

  const styles = {
    page: {
      padding: "40px 20px",
      background: "linear-gradient(135deg, #f9fcff 0%, #f6f8fa 100%)",
      fontFamily: "'Inter', Arial, sans-serif",
      minHeight: "100vh"
    },
    hero: {
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "60px",
      background: "linear-gradient(to right, #ffffff 0%, #f8faff 100%)",
      borderRadius: "24px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      padding: isMobile ? "24px 16px" : "48px 40px",
      gap: isMobile ? "24px" : "60px",
      opacity: 0,
      transform: "translateY(20px)",
      transition: "all 0.8s ease-out"
    },
    heroVisible: {
      opacity: 1,
      transform: "translateY(0)"
    },
    heroText: {
      flex: "1 1 350px",
      maxWidth: "600px",
      textAlign: isMobile ? "center" : "left"
    },
    heroTextH1: {
      fontSize: isMobile ? "2.2rem" : "3rem",
      marginBottom: "16px",
      color: "#1a202c",
      lineHeight: "1.2",
      fontWeight: 800,
      background: "linear-gradient(90deg, #ff7a59 0%, #ff4c1c 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent"
    },
    heroTextP: {
      fontSize: isMobile ? "1.1rem" : "1.25rem",
      marginBottom: "32px",
      color: "#555",
      lineHeight: "1.6"
    },
    heroBtn: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(90deg, #ff7a59 0%, #ff4c1c 100%)",
      color: "#fff",
      padding: "15px 35px",
      borderRadius: "12px",
      fontWeight: "bold",
      textDecoration: "none",
      transition: "all 0.3s ease",
      fontSize: isMobile ? "1.1rem" : "1.2rem",
      boxShadow: "0 6px 15px rgba(255, 122, 89, 0.4)",
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
      border: "none",
      cursor: "pointer"
    },
    heroBtnHover: {
      transform: "translateY(-3px)",
      boxShadow: "0 10px 20px rgba(255, 122, 89, 0.6)"
    },
    heroBtnBefore: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background: "linear-gradient(90deg, #ff4c1c 0%, #ff7a59 100%)",
      zIndex: -1,
      transition: "transform 0.5s ease",
      transform: "scaleX(0)",
      transformOrigin: "right"
    },
    heroBtnHoverBefore: {
      transform: "scaleX(1)",
      transformOrigin: "left"
    },
    heroImgContainer: {
      flex: "1 1 320px",
      display: "flex",
      alignItems: "center",
      justifyContent: isMobile ? "center" : "flex-end",
      minWidth: 0,
      width: isMobile ? "100%" : "auto",
      perspective: "1000px"
    },
    heroImg: {
      maxWidth: "100%",
      width: isMobile ? "90%" : "480px",
      minWidth: "220px",
      height: "auto",
      borderRadius: "20px",
      objectFit: "cover",
      objectPosition: "center",
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transform: "rotateY(5deg)",
      transition: "transform 0.5s ease, box-shadow 0.5s ease"
    },
    heroImgHover: {
      transform: "rotateY(0deg)",
      boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
    },
    cardsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "32px",
      opacity: 0,
      transform: "translateY(40px)",
      transition: "all 0.8s ease-out"
    },
    cardsVisible: {
      opacity: 1,
      transform: "translateY(0)"
    },
    card: {
      background: "#ffffff",
      borderRadius: "20px",
      boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
      padding: "36px 24px",
      textAlign: "center",
      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
      transform: "translateY(0)",
      cursor: "pointer"
    },
    cardHover: {
      transform: "translateY(-10px) scale(1.03)",
      boxShadow: "0 15px 30px rgba(0,0,0,0.15)",
      background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)"
    },
    cardIcon: {
      fontSize: "3.5rem",
      marginBottom: "20px",
      transition: "transform 0.3s ease",
      filter: "drop-shadow(0 5px 5px rgba(0,0,0,0.1))"
    },
    cardIconHover: {
      transform: "scale(1.2)"
    },
    cardTitle: {
      fontSize: "1.3rem",
      marginBottom: "12px",
      color: "#1a202c",
      fontWeight: 700
    },
    cardDescription: {
      fontSize: "1.05rem",
      color: "#555",
      marginBottom: "24px",
      lineHeight: "1.5"
    },
    cardLink: {
      color: "#ff7a59",
      textDecoration: "none",
      fontWeight: "600",
      transition: "all 0.3s ease",
      display: "flex",
      alignItems: "center",
      gap: "5px"
    },
    cardLinkHover: {
      color: "#ff4c1c",
      transform: "translateX(5px)"
    },
    cardGlow: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "5px",
      background: "linear-gradient(90deg, #ff7a59 0%, #ff4c1c 100%)",
      opacity: 0,
      transition: "opacity 0.3s ease"
    },
    cardGlowHover: {
      opacity: 1
    },
    howItWorks: {
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(135deg, #ffffff 0%, #f8f9ff 100%)",
      borderRadius: "24px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      padding: "48px 32px",
      margin: "60px 0",
      opacity: 0,
      transform: "translateY(40px)",
      transition: "all 0.8s ease-out"
    },
    howItWorksVisible: {
      opacity: 1,
      transform: "translateY(0)"
    },
    stepList: {
      marginTop: "30px",
      paddingLeft: "20px",
      fontSize: "1.1rem"
    },
    stepItem: {
      marginBottom: "25px",
      position: "relative",
      paddingLeft: "40px",
      opacity: 0,
      transform: "translateX(-20px)",
      transition: "all 0.5s ease-out"
    },
    stepItemVisible: {
      opacity: 1,
      transform: "translateX(0)"
    },
    stepNumber: {
      position: "absolute",
      left: 0,
      top: "2px",
      fontWeight: "bold",
      color: "#ff7a59",
      fontSize: "1.8rem",
      background: "linear-gradient(135deg, #fff8f6 0%, #ffede8 100%)",
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 10px rgba(255, 122, 89, 0.2)"
    },
    stepText: {
      color: "#444",
      lineHeight: "1.6"
    },
    videoContainer: {
      flex: "1 1 45%",
      minWidth: "300px",
      display: "flex",
      justifyContent: "center",
      borderRadius: "20px",
      overflow: "hidden",
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      transform: "scale(0.95)",
      transition: "transform 0.5s ease, box-shadow 0.5s ease",
      opacity: 0,
      transform: "translateY(20px) rotate(2deg)"
    },
    videoContainerVisible: {
      opacity: 1,
      transform: "translateY(0) rotate(0deg)"
    },
    videoHover: {
      transform: "scale(1)",
      boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
    },
    faqSection: {
      opacity: 0,
      transform: "translateY(40px)",
      transition: "all 0.8s ease-out"
    },
    faqVisible: {
      opacity: 1,
      transform: "translateY(0)"
    },
    sectionTitle: {
      fontSize: isMobile ? "2rem" : "2.5rem",
      marginBottom: "40px",
      color: "#1a202c",
      lineHeight: "1.2",
      fontWeight: 800,
      textAlign: "center",
      position: "relative",
      display: "inline-block",
      width: "100%"
    },
    sectionTitleAfter: {
      content: '""',
      position: "absolute",
      bottom: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "80px",
      height: "4px",
      background: "linear-gradient(90deg, #ff7a59 0%, #ff4c1c 100%)",
      borderRadius: "2px"
    }
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0px); }
      }
      
      @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
      }
      
      .pulse-animation {
        animation: pulse 2s infinite ease-in-out;
      }
      
      .float-animation {
        animation: float 4s infinite ease-in-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <div 
        ref={heroRef}
        style={{
          ...styles.hero,
          ...(isVisible.hero && styles.heroVisible)
        }}
      >
        <div style={styles.heroText}>
          <h1 style={styles.heroTextH1}>All You Need To Know</h1>
          <p style={styles.heroTextP}>
            We've put all our essential resources in one spot. Everything from debt resolution to taking control of your financial future.
            Need to talk? Our experts are here to help. Call us anytime for a free no-obligation consultation.
          </p>
          <a 
            style={styles.heroBtn} 
            href="tel:8003009550"
            className="pulse-animation"
          >
            <span style={styles.heroBtnBefore}></span>
            800-300-9550
          </a>
        </div>
        
        <div 
          style={styles.heroImgContainer}
          className="float-animation"
        >
          <img
            src={people}
            alt="People working in an office"
            style={styles.heroImg}
          />
        </div>
      </div>

      {/* Cards Section */}
      <div 
        ref={cardsRef}
        style={{
          ...styles.cardsGrid,
          ...(isVisible.cards && styles.cardsVisible)
        }}
      >
        {cardData.map((card, idx) => (
          <div
            style={{
              ...styles.card,
              ...(hoveredCard === idx && styles.cardHover),
              transitionDelay: `${idx * 0.05}s`
            }}
            key={idx}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div style={styles.cardGlow}></div>
            <div 
              style={{
                ...styles.cardIcon,
                ...(hoveredCard === idx && styles.cardIconHover)
              }}
            >
              {card.icon}
            </div>
            <h3 style={styles.cardTitle}>{card.title}</h3>
            <p style={styles.cardDescription}>{card.description}</p>
            <a
              style={{
                ...styles.cardLink,
                ...(hoveredCard === idx && styles.cardLinkHover)
              }}
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <span style={{ transition: "transform 0.3s", transform: hoveredCard === idx ? "translateX(5px)" : "none" }}>→</span>
            </a>
          </div>
        ))}
      </div>

      {/* How It Works Section */}
      <section 
        ref={howItWorksRef}
        style={{
          ...styles.howItWorks,
          ...(isVisible.howItWorks && styles.howItWorksVisible)
        }}
      >
        <h2 style={styles.sectionTitle}>
          How Debt Relief Works in 4 Life-Changing Steps
          <span style={styles.sectionTitleAfter}></span>
        </h2>
        
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "40px"
        }}>
          <div style={{ flex: "1 1 350px", minWidth: "280px" }}>
            <p style={{ color: "#444", fontSize: "1.15rem", marginBottom: "32px", lineHeight: "1.7" }}>
              At National Debt Relief, we've helped over 550,000 clients with their debt settlement. We negotiate with major credit card issuers and banks to reduce debts, and cover most unsecured debt. For anyone carrying the burden of credit card debt, personal loans, private student loans, collections or business debt, it starts with one simple call and ends with you living again, debt free!
            </p>
            
            <a 
              style={{
                ...styles.heroBtn,
                background: "linear-gradient(90deg, #1976d2 0%, #1e88e5 100%)",
                boxShadow: "0 6px 15px rgba(25, 118, 210, 0.4)"
              }} 
              href="tel:8003009550"
              className="pulse-animation"
            >
              <span style={styles.heroBtnBefore}></span>
              800-300-9550
            </a>
            
            <ul style={styles.stepList}>
              {howItWorksSteps.map((step, idx) => (
                <li 
                  key={idx} 
                  style={{
                    ...styles.stepItem,
                    ...(isVisible.howItWorks && styles.stepItemVisible),
                    transitionDelay: `${idx * 0.2}s`
                  }}
                >
                  <div style={styles.stepNumber}>{idx + 1}</div>
                  <p style={styles.stepText}>{step}</p>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Video Container */}
          <div 
            ref={howItWorksRef}
            style={{
              ...styles.videoContainer,
              ...(isVisible.howItWorks && styles.videoContainerVisible)
            }}
          >
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/oQjdOMSUZpA"
              title="How Debt Relief Works - 4 Simple Steps"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                borderRadius: "16px",
                border: "none"
              }}
            ></iframe>
          </div>
        </div>
      </section>
      <section className="mt-16"><FAQ /></section>
    </div>
  );
};

export default Resources;