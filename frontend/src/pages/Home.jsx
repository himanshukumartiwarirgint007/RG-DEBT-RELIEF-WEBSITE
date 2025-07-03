import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../assets/Media/Image1 (2).png';
import img2 from '../assets/Media/Image2 (2).png';
import img3 from '../assets/Media/Image3 (2).png';
import homebg1 from '../assets/Media/HomeBg1.jpg';
import homebg2 from '../assets/Media/HomeBg2.jpg';
import homebg3 from '../assets/Media/HomeBg3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import FAQSection from '../components/FAQ';
import HomeAboutSection from '../ExtraPages/HomeAboutSection';
import DebtCalculator from '../ExtraPages/DebtCalculator';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full h-screen lg:h-screen">
  {/* Swiper as background */}
  <Swiper
    modules={[Pagination, Autoplay]}
    spaceBetween={0}
    slidesPerView={1}
    pagination={{ clickable: true }}
    loop={true}
    autoplay={{ delay: 3500, disableOnInteraction: false }}
    className="absolute inset-0 w-full h-full z-0"
  >
    {[homebg1, homebg2, homebg3].map((bg, idx) => (
      <SwiperSlide key={idx}>
        <img
          src={bg}
          alt={`Slide ${idx + 1}`}
          className="w-full h-full object-cover"
        />
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Overlay: text + video */}
  <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center gap-6 px-4 sm:px-8 md:px-24 z-10 pointer-events-none">
    {/* Left Text */}
    <div className="w-full md:w-1/2 text-center md:text-left pointer-events-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 max-w-xl mx-auto md:mx-0 text-white">
        Take Control of Your <span className="bg-gradient-to-r from-[#f7c948] to-orange-400 bg-clip-text text-transparent">Debt</span> Today
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-xl mx-auto md:mx-0 text-white">
        Reddington Global Debt Relief helps you find real solutions for your financial future. Start your journey to financial freedom with our expert team.
      </p>
      <button
        onClick={() => navigate('/Apply')}
        className="bg-[#FF624D] text-white font-bold px-6 py-3 text-base rounded-full shadow hover:bg-[#13a06b] transition"
      >
        Get Free Consultancy
      </button>
    </div>

    {/* Right Video */}
    {/* <div className="w-full md:w-1/2 flex justify-center pointer-events-auto">
      <div className="w-full max-w-[480px] aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
  src="https://www.youtube.com/embed/CHiOBzqcMV8?autoplay=1&mute=1&loop=1&playlist=CHiOBzqcMV8"
  title="YouTube Video"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="w-full h-full"
></iframe>

      </div>
    </div> */}
  </div>
</div>

  <div className="bg-[linear-gradient(to_bottom_right,#FFFFFF_0%,#B3D9FF_100%)]">
  {/* Responsive Grid Section */}
  <div className="max-w-7xl mx-auto py-14 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
  {[
    {
      type: 'text',
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-4">Overcoming Key Challenges in Debt Relief Programs</h2>
          <p className="text-lg mb-4">
            Many programs fail due to avoidable mistakes. Discover practical strategies to guide you toward debt-free living.
          </p>
          <Link to="/apply" className="text-blue-600 font-bold hover:underline text-lg">
            Reset Your Finances &rarr;
          </Link>
        </div>
      )
    },
    {
      type: 'image',
      content: <img src={img1} alt="AI Cubes" className="w-full h-auto" />
    },
    {
      type: 'image',
      content: <img src={img2} alt="Team Collaboration" className="w-full h-auto" />
    },
    {
      type: 'text',
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-4">Tackle the Biggest Pitfalls in Debt Relief</h2>
          <p className="text-lg mb-4">
            Many people enter debt relief with good intentions but fall into avoidable traps—like unrealistic repayment plans or lack of proper guidance.
          </p>
          <Link to="/Apply" className="text-blue-600 font-bold hover:underline text-lg">
            Rebuild with Confidence &rarr;
          </Link>
        </div>
      )
    },
    {
      type: 'text',
      content: (
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold mb-4">Why Debt Programs Fail—and How Yours Won’t</h2>
          <p className="text-lg mb-4">
            Hard experience has revealed common pitfalls in debt relief programs—and proven strategies that truly lead to lasting financial freedom.
          </p>
          <Link to="/Apply" className="text-blue-600 font-bold hover:underline text-lg">
            Begin Your Debt-Free Journey &rarr;
          </Link>
        </div>
      )
    },
    {
      type: 'image',
      content: <img src={img3} alt="Financial Visual" className="w-full h-auto" />
    }
  ].map((item, index) => (
    <React.Fragment key={index}>{item.content}</React.Fragment>
  ))}
</div>

  
      {/* Page Call Section */}
      <div className="bg-[length:200%] bg-gradient-to-r from-blue-100 to-pink-100 animate-bg-pan-right">
  <section className="py-2 px-2 mt-8 sm:mt-12 md:mt-16"> <DebtCalculator /> </section>
  <section className="py-2 mt-8 sm:mt-12 md:mt-16"> <HomeAboutSection /> </section>
</div>
</div>
      {/* Page Call Section */}
       <section className="mt-8 sm:mt-12 md:mt-16"> <FAQSection /> </section>
    </>
  );
};

export default Home;