import React from 'react';
import vishalBora from "../assets/Media/Vishal Bora.jpg";
import jyotsanaBora from "../assets/Media/Jyotsana Bora.jpeg";
import humanApproach from "../assets/Media/human approch.png";
import movingForward from "../assets/Media/moving forword.png";
import person from "../assets/Media/person.png";
import smrt from "../assets/Media/smrt.png";
import certificate from "../assets/Media/certificate.jpg";
import certificate2 from "../assets/Media/certificate2.png";
import FAQ from '../components/FAQ';
import ourMission from "../assets/Media/ourMission.png";
import ourVision from "../assets/Media/ourVision.png";

const principles = [
  {
    icon: humanApproach,
    title: "A Human Approach",
    desc: "We listen and treat you with respect, empathy, and understanding."
  },
  {
    icon: movingForward,
    title: "Moving You Forward",
    desc: "We help you reach your next goal and push your finances in a better direction."
  },
  {
    icon: person,
    title: "Personalized Solutions",
    desc: "We customize solutions to resolve debt for your life today and your future."
  },
  {
    icon: smrt,
    title: "Financially Smarter",
    desc: "We teach you to manage money with confidence and transform your financial future."
  }
];

const AboutUs = () => (
  <div>
    {/* Hero - Replaced with image */}
    <section 
      className="relative flex flex-col items-center justify-center text-center"
  style={{
    backgroundImage: `url(${ourMission})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    width: '100%'
  }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none" />
      <span className="inline-block bg-yellow-400 text-blue-900 font-bold px-4 py-1 rounded-full shadow mb-4 animate-pop z-10">Trusted by 5000+ Families</span>
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg z-10 animate-slideDown text-white">
        Guiding You Toward <span className="text-yellow-400">Financial Freedom</span>
      </h1>
      <p className="max-w-xl mx-auto text-lg opacity-90 mb-6 z-10 animate-fadeIn delay-200 text-white">
        We're here to support you every step of the way on your journey to a debt-free life—committed to helping you find peace of mind and lasting relief.
      </p>
      <a
        href="/Apply"
        // target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3 rounded-full shadow-lg transition-all animate-pop z-10"
      >
        Start Now
      </a>
      {/* Testimonial */}
      <blockquote className="max-w-xl mx-auto mt-10 italic text-lg text-white/90 z-10 animate-fadeIn delay-300">
        “Reddington Global helped me get my life back on track. It truly made a change in my life nad helped me in the future endeviours. Their team truly cares and delivers real results.”<br />
        <span className="not-italic font-bold text-yellow-200">— Satisfied Client</span>
      </blockquote>
    </section>

   <section className="py-0 px-0">
  {/* Our Mission - Removed mb-12 margin */}
  <div className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-500">
    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-transparent to-green-300/20 animate-gradientMove pointer-events-none" />
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
      <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Our Mission</h3>
      <p className="text-lg sm:text-2xl text-white max-w-2xl drop-shadow-lg">
        To empower individuals and families to break free from debt and achieve lasting financial freedom through expert guidance, empathy, and support.
      </p>
    </div>
  </div>
  
  {/* Our Vision - Removed top spacing */}
  <div className="relative w-full min-h-[60vh] flex items-center justify-center">
    <img
      src={ourVision}
      alt="Our Vision"
      className="w-full h-[60vh] object-cover"
      style={{ filter: "brightness(0.7)" }}
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">Our Vision</h3>
      <p className="text-lg sm:text-2xl text-white max-w-2xl drop-shadow-lg">
        To be the most trusted partner in debt relief, made a final change in society and empowered people for change, inspiring hope and building a financially healthy community for generations to come.
      </p>
    </div>
  </div>
</section>

    {/* Leadership */}
    <section className="py-12 px-4 bg-white/80">
      <h2 className="text-2xl sm:text-4xl font-bold text-blue-700 mb-8 text-center">Leadership Team</h2>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center">
          <img src={vishalBora} alt="Vishal Bora" className="w-30 h-30 rounded-full object-cover border-4 border-blue-200 shadow" />
          <div className="mt-2 font-bold text-blue-800">Vishal Bora</div>
          <div className="text-blue-600 text-sm">CEO & Founder</div>
        </div>
        <div className="flex flex-col items-center">
          <img src={jyotsanaBora} alt="Jyotsana Bora" className="w-30 h-30 rounded-full object-cover border-4 border-blue-200 shadow" />
          <div className="mt-2 font-bold text-blue-800">Jyotsana Bora</div>
          <div className="text-blue-600 text-sm">Chief HR Officer</div>
        </div>
      </div>
    </section>

    {/* Principles */}
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
      <h2 className="text-2xl sm:text-4xl font-bold text-blue-700 mb-8 text-center">What You Can Count On</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {principles.map((p, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform">
            <img src={p.icon} alt={p.title} className="w-16 h-16 mb-4" />
            <div className="font-bold text-blue-700 mb-2">{p.title}</div>
            <div className="text-gray-600 text-center">{p.desc}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Certificates */}
    <section className="py-12 px-4 text-center">
      <h2 className="text-2xl sm:text-4xl font-bold text-blue-700 mb-8">Our Commitment</h2>
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <img src={certificate} alt="Certificate 1" className="w-60 rounded-xl shadow-lg" />
        <img src={certificate2} alt="Certificate 2" className="w-60 rounded-xl shadow-lg" />
      </div>
      <a
        href="/Apply"
        // target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all"
      >
        Fill The Form To Start Now
      </a>
    </section>

    {/* FAQ */}
    <section className="py-16 px-4 bg-white/80">
      <FAQ />
    </section>

    {/* Animations */}
    <style>
      {`
        @keyframes gradientMove {
          0% { background-position: 0% 50%;}
          50% { background-position: 100% 50%;}
          100% { background-position: 0% 50%;}
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 8s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0;}
          to { opacity: 1;}
        }
        .animate-fadeIn { animation: fadeIn 1.2s both;}
        .animate-fadeIn.delay-200 { animation-delay: 0.2s;}
        .animate-fadeIn.delay-300 { animation-delay: 0.3s;}
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-slideDown { animation: slideDown 1s both;}
        @keyframes pop {
          0% { transform: scale(0.8);}
          80% { transform: scale(1.08);}
          100% { transform: scale(1);}
        }
        .animate-pop { animation: pop 0.7s both;}
      `}
    </style>
  </div>
);

export default AboutUs;