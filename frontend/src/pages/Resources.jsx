import React, { useState, useEffect, useRef } from "react";
import FAQ from '../components/FAQ';
import People from '../assets/Media/People.jpg';

const cardData = [
  {
    icon: "📄",
    title: "Debt Relief Settlement",
    description: "Pay off your debt in less time with the most savings.",
    link: "#",
    extraContent: (
      <div className="mt-3 p-4 bg-gray-50 rounded-lg w-full text-left">
        <h4 className="font-bold text-gray-800 mb-2">How It Works:</h4>
        <p className="text-gray-600 text-sm">
          Our proven debt settlement program creates a faster path to financial freedom by negotiating 
          significant reductions with your creditors. We leverage our relationships with all major lenders 
          to secure optimal settlement terms on your behalf.
        </p>
        <ul className="mt-2 list-disc pl-5 text-sm text-gray-600">
          <li>Typical debt reduction: 30-50% before fees</li>
          <li>Program completion: 2-4 years</li>
          <li>Pay nothing until your debt is resolved</li>
          <li>Customized repayment strategy</li>
          <li>Your personal debt relief expert</li>
        </ul>
      </div>
    )
  },
];

const howItWorksSteps = [
  "✓ Credit card balances",
  "✓ Personal loans",
  "✓ Private student loans",
  "✓ Collections accounts",
   "✓ Business debt "
];

const Resources = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState({
    hero: false,
    cards: false,
    howItWorks: false,
    faq: false
  });
  const [expandedCards, setExpandedCards] = useState([]);
  
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
      
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .animate-float {
        animation: float 4s infinite ease-in-out;
      }
      
      .animate-pulse-custom {
        animation: pulse 2s infinite ease-in-out;
      }
      
      .animate-fadeIn {
        animation: fadeIn 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const toggleExpand = (idx) => {
    if (expandedCards.includes(idx)) {
      setExpandedCards(expandedCards.filter(index => index !== idx));
    } else {
      setExpandedCards([...expandedCards, idx]);
    }
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-[#abd5ff] to-[#abfbff] font-sans">
      {/* Hero Section */}
      <div 
        ref={heroRef}
        className={`
          flex flex-col md:flex-row items-center justify-between 
          mb-10 sm:mb-12 md:mb-14 lg:mb-16
          bg-gradient-to-r from-white to-[#f8faff] 
          rounded-3xl shadow-xl 
          p-4 sm:p-6 md:p-8 lg:p-10
          gap-4 sm:gap-6 md:gap-8 lg:gap-10
          transition-all duration-700 ease-out 
          ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        `}
      >
        <div className="flex-1 w-full min-w-[280px] max-w-full md:max-w-[600px] text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 sm:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#ff7a59] to-[#ff4c1c]">
            All You Need To Know
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            We've put all our essential resources in one spot. Everything from debt resolution to taking control of your financial future.
            Need to talk? Our experts are here to help. Call us anytime for a free no-obligation consultation.
          </p>
          <a 
            className="
              inline-flex items-center justify-center 
              bg-gradient-to-r from-[#ff7a59] to-[#ff4c1c] 
              text-white font-bold px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-xl 
              shadow-lg hover:shadow-xl transition-all duration-300
              transform hover:-translate-y-1
              relative overflow-hidden z-10
              animate-pulse-custom
              text-base sm:text-lg
              w-full sm:w-auto
            "
            href="tel:8003009550"
          >
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#ff4c1c] to-[#ff7a59] z-[-1] transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left"></span>
            800-300-9550
          </a>
        </div>
        
        <div className="flex-1 w-full min-w-[280px] max-w-full md:max-w-[480px] flex items-center justify-center md:justify-end perspective-1000 animate-float mt-6 md:mt-0">
          <img
            src={People}
            alt={'People working in an office'}
            className="
              max-w-full w-full h-auto 
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
        className="grid grid-cols-1 gap-6 sm:gap-8"
      >
        {cardData.map((card, idx) => (
          <div
            key={idx}
            className={`
              bg-white rounded-2xl shadow-md p-6 sm:p-7 md:p-8 text-center 
              flex flex-col items-center 
              relative overflow-hidden 
              rounded-3xl shadow-xl 
              gap-1.5 sm:gap-2 md:gap-3
              transition-all duration-400 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] 
              transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl 
              ${hoveredCard === idx ? 'bg-gradient-to-br from-white to-[#f8f9ff] opacity-100' : 'opacity-1'}
            `}
            style={{ transitionDelay: `${idx * 0.05}s` }}
            onMouseEnter={() => setHoveredCard(idx)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff7a59] to-[#ff4c1c] transition-opacity duration-300 ${hoveredCard === idx ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className={`text-5xl mb-4 sm:mb-5 transition-transform duration-300 ${hoveredCard === idx ? 'scale-110' : ''} drop-shadow-md`}>
              {card.icon}
            </div>
            <h3 className="text-xl sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">{card.title}</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-normal">{card.description}</p>
            
            <button
              className={`
                text-[#ff7a59] font-semibold flex items-center gap-1 
                transition-all duration-300 mb-2
                ${hoveredCard === idx ? 'text-[#ff4c1c]' : ''}
              `}
              onClick={() => toggleExpand(idx)}
            >
              {expandedCards.includes(idx) ? 'Read Less' : 'Read More'}
              <span className={`transition-transform duration-300 ${hoveredCard === idx ? 'translate-x-1' : ''}`}>
                {expandedCards.includes(idx) ? '↑' : '↓'}
              </span>
            </button>
            
            {expandedCards.includes(idx) && card.extraContent && (
              <div className="animate-fadeIn w-full">
                {card.extraContent}
              </div>
            )}
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
          p-6 sm:p-7 md:p-8 lg:p-10
          my-10 sm:my-12 md:my-14 lg:my-16
          transition-all duration-700 ease-out 
          ${isVisible.howItWorks ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center mb-8 sm:mb-10">
          <span className="relative inline-block pb-3">
            Freedom From Debt Starts Here
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff7a59] to-[#ff4c1c] rounded"></span>
          </span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-10">
          <div className="flex-1 w-full min-w-[280px] max-w-full lg:max-w-[55%]">
            <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
             
            At Reddington Global Debt Relief, we’ve empowered 550,000+ clients to break free from overwhelming debt. Our experts negotiate directly with major creditors—including credit card companies, banks, and collectors—to reduce what you owe on.
            Your fresh start begins with a single call. Let’s work together to rebuild your financial future—so you can finally live without the weight of debt.
          </p>
            
            <a 
              className="
                inline-flex items-center justify-center 
                bg-gradient-to-r from-[#1976d2] to-[#1e88e5] 
                text-white font-bold px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 rounded-xl 
                shadow-lg hover:shadow-xl transition-all duration-300
                transform hover:-translate-y-1
                relative overflow-hidden z-10
                animate-pulse-custom
                text-base sm:text-lg
                w-full sm:w-auto
                mb-8 sm:mb-10
              "
              href="tel:8003009550"
            >
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#1e88e5] to-[#1976d2] z-[-1] transition-transform duration-500 origin-right scale-x-0 group-hover:scale-x-100 group-hover:origin-left"></span>
              800-300-9550
            </a>
            
            <ul className="list-none pl-0 mt-6 sm:mt-8">
              {howItWorksSteps.map((step, idx) => (
                <li 
                  key={idx} 
                  className={`
                    relative pl-10 sm:pl-12 mb-6 sm:mb-8 transition-all duration-500 ease-out 
                    ${isVisible.howItWorks ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}
                  `}
                  style={{ transitionDelay: `${idx * 0.2}s` }}
                >
                  <div className="absolute left-0 top-0 font-bold text-[#ff7a59] text-xl sm:text-2xl w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-[#fff8f6] to-[#ffede8] flex items-center justify-center shadow">
                    {idx + 1}
                  </div>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{step}</p>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Video Container */}
          <div 
            className={`
              flex-1 w-full min-w-[280px] max-w-full lg:max-w-[40%] 
              rounded-2xl shadow-lg overflow-hidden 
              transform scale-95 
              transition-all duration-700 ease-out 
              ${isVisible.howItWorks ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-5 rotate-2'}
              hover:scale-100 hover:shadow-xl
            `}
          >
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oQjdOMSUZpA"
                title="How Debt Relief Works - 4 Simple Steps"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-2xl border-none w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px]"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section 
        ref={faqRef}
        className={`
          mt-10 sm:mt-12 md:mt-14 transition-all duration-700 ease-out 
          ${isVisible.faq ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}
      >
        <FAQ />
      </section>
    </div>
  );
};

export default Resources;