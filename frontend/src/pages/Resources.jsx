import React, { useState, useEffect, useRef } from "react";
import FAQ from '../components/FAQ';
import People from '../assets/Media/People.jpg';
const cardData = [
  {
    icon: "💳",
    title: "Credit Card Debt Relief",
    description: "Pay off the credit card debt you've racked up.",
    link: "/CreditCard"
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
      observer.disconnect();
    };
  }, []);

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
      
      .animate-float {
        animation: float 4s infinite ease-in-out;
      }
      
      .animate-pulse-custom {
        animation: pulse 2s infinite ease-in-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen p-5 sm:p-10 bg-gradient-to-br from-[#f9fcff] to-[#f6f8fa] font-sans">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className={`
          flex flex-col-reverse md:flex-row items-center justify-between 
          mb-14 md:mb-16 
          bg-gradient-to-r from-white to-[#f8faff] 
          rounded-3xl shadow-xl 
          p-6 md:p-12 
          gap-6 md:gap-14 
          transition-all duration-700 ease-out 
          ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
      >
        <div className="flex-1 min-w-[350px] max-w-[600px] text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7a59] to-[#ff4c1c]">
            All You Need To Know
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            We've put all our essential resources in one spot. Everything from debt resolution to taking control of your financial future.
            Need to talk? Our experts are here to help. Call us anytime for a free no-obligation consultation.
          </p>
          <a 
            className="
              inline-flex items-center justify-center 
              bg-gradient-to-r from-[#ff7a59] to-[#ff4c1c] 
              text-white font-bold px-8 py-4 rounded-xl 
              shadow-lg hover:shadow-xl transition-all duration-300
              transform hover:-translate-y-1
              relative overflow-hidden z-10
              animate-pulse-custom
              text-lg
            "
            href="tel:8003009550"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff4c1c] to-[#ff7a59] z-[-1] transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left"></span>
            800-300-9550
          </a>
        </div>
        
        <div className="flex-1 min-w-[320px] flex items-center justify-center md:justify-end perspective-1000 animate-float">
          <img
            src={People}
            alt={'People working in an office'}
            className="
              max-w-full w-full md:w-[480px] min-w-[220px] h-auto 
              rounded-2xl object-cover object-center 
              shadow-lg transition-all duration-500 ease-out
              transform rotate-y-5 hover:rotate-y-0 hover:shadow-2xl
            "
          />
        </div>
      </div>

      {/* Cards Section */}
      <div 
        ref={cardsRef}
        className={`
          grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 
          transition-all duration-700 ease-out 
          ${isVisible.cards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className={`
              bg-white rounded-2xl shadow-md p-8 text-center 
              flex flex-col items-center 
              relative overflow-hidden 
              transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] 
              transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl 
              ${hoveredCard === idx ? 'bg-gradient-to-br from-white to-[#f8f9ff]' : ''}
            `}
            style={{ transitionDelay: `${idx * 0.05}s` }}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff7a59] to-[#ff4c1c] transition-opacity duration-300 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className={`text-5xl mb-5 transition-transform duration-300 ${hoveredCard === idx ? 'scale-110' : ''} drop-shadow-md`}>
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">{card.title}</h3>
            <p className="text-gray-600 mb-6 leading-normal">{card.description}</p>
            <a
  className={`
    text-[#ff7a59] font-semibold flex items-center gap-1 
    transition-all duration-300
    ${hoveredCard === idx ? 'text-[#ff4c1c] translate-x-1' : ''}
  `}
  href={card.link}
>
  Learn More 
  <span className={`transition-transform duration-300 ${hoveredCard === idx ? 'translate-x-1' : ''}`}>→</span>
</a>
          </div>
        ))}
      </div>

      {/* How It Works Section */}
      <section 
        ref={howItWorksRef}
        className={`
          flex flex-col 
          bg-gradient-to-br from-white to-[#f8f9ff] 
          rounded-3xl shadow-xl 
          p-8 md:p-12 
          my-16 
          transition-all duration-700 ease-out 
          ${isVisible.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 relative">
          How Debt Relief Works in 4 Life-Changing Steps
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#ff7a59] to-[#ff4c1c] rounded"></span>
        </h2>
        
        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="flex-1 min-w-[280px]">
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              At National Debt Relief, we've helped over 550,000 clients with their debt settlement. We negotiate with major credit card issuers and banks to reduce debts, and cover most unsecured debt. For anyone carrying the burden of credit card debt, personal loans, private student loans, collections or business debt, it starts with one simple call and ends with you living again, debt free!
            </p>
            
            <a 
              className="
                inline-flex items-center justify-center 
                bg-gradient-to-r from-[#1976d2] to-[#1e88e5] 
                text-white font-bold px-8 py-4 rounded-xl 
                shadow-lg hover:shadow-xl transition-all duration-300
                transform hover:-translate-y-1
                relative overflow-hidden z-10
                animate-pulse-custom
                text-lg
                mb-10
              "
              href="tel:8003009550"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1e88e5] to-[#1976d2] z-[-1] transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left"></span>
              800-300-9550
            </a>
            
            <ul className="list-none pl-0 mt-8">
              {howItWorksSteps.map((step, idx) => (
                <li 
                  key={idx} 
                  className={`
                    relative pl-12 mb-8 transition-all duration-500 ease-out 
                    ${isVisible.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}
                  `}
                  style={{ transitionDelay: `${idx * 0.2}s` }}
                >
                  <div className="absolute left-0 top-0 font-bold text-[#ff7a59] text-2xl w-9 h-9 rounded-full bg-gradient-to-br from-[#fff8f6] to-[#ffede8] flex items-center justify-center shadow">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Video Container */}
          <div 
            className={`
              flex-1 min-w-[300px] 
              rounded-2xl shadow-lg overflow-hidden 
              transform scale-95 
              transition-all duration-700 ease-out 
              ${isVisible.howItWorks ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-5 rotate-2'}
              hover:scale-100 hover:shadow-xl
            `}
          >
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/oQjdOMSUZpA"
              title="How Debt Relief Works - 4 Simple Steps"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl border-none"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section 
        ref={faqRef}
        className={`
          mt-16 transition-all duration-700 ease-out 
          ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <FAQ />
      </section>
    </div>
  );
};

export default Resources;