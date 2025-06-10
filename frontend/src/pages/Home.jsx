import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/Media/Image1.jpg';
import img2 from '../assets/Media/Image2.avif';
import img3 from '../assets/Media/Image3.avif';
import homebg1 from '../assets/Media/HomeBg1.jpg';
import homebg2 from '../assets/Media/HomeBg2.jpg';
import homebg3 from '../assets/Media/HomeBg3.jpg';
import HowItWorks from './HowItWorks';
import ClientStories from './ClientStories';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // Add Autoplay

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
  <>
    {/* Fullscreen Hero Slider */}
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        className="h-full"
      >
        {[homebg1, homebg2, homebg3].map((bg, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={bg}
              alt={`Hero Slide ${idx + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 sm:px-24 bg-black/40 text-center z-20">
        <h1 className="text-3x1 sm:text-6xl font-extrabold text-white mb-4 max-w-2xl">
          Take Control of Your Debt Today
        </h1>
        <p className="text-lg sm:text-xl text-white mb-8 max-w-2xl">
          Reddington Global Debt Relief helps you find real solutions for your financial future. Start your journey to financial freedom with our expert team.
        </p>
        <button
          onClick={() => navigate('/apply')}
          className="bg-[#16b477] text-white font-bold px-8 py-3 rounded-full shadow hover:bg-[#13a06b] transition text-lg"
        >
          Get Started
        </button>
      </div>
    </div>

     {/* Grid Section */}
<div className="max-w-7xl mx-auto py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
  {/* Top Left: Text Block */}
  <div className="flex flex-col justify-center bg-white p-12 rounded-3xl shadow-2xl">
    <h2 className="text-4xl font-extrabold mb-6">
      Overcoming two issues that are sinking gen AI programs
    </h2>
    <p className="text-2xl mb-8">
      Hard experience has revealed common technology pitfalls in building a gen AI capability and proven strategies for overcoming them.
    </p>
    <a href="#" className="text-[#2563eb] font-bold hover:underline text-xl">
      Recalibrate for growth &rarr;
    </a>
  </div>
  {/* Top Right: Image */}
  <div>
    <img
      src={img3}
      alt="AI Cubes"
      className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
    />
  </div>
  {/* Middle Left: Image */}
  <div>
    <img
      src={img1}
      alt="Team Collaboration"
      className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
    />
  </div>
  
  {/* Middle Right: Text Block */}
  <div className="flex flex-col justify-center bg-white p-12 rounded-3xl shadow-2xl col-span-2 md:col-span-1">
    <h2 className="text-4xl font-extrabold mb-6">
      When building new businesses, culture matters
    </h2>
    <p className="text-2xl mb-8">
      A healthy culture can triple a corporate venture’s TSR by defining underlying beliefs, focusing on leadership, and modeling and celebrating desired behavior.
    </p>
    <a href="#" className="text-[#2563eb] font-bold hover:underline text-xl">
      Build an authentic, lasting culture &rarr;
    </a>
  </div>
  
  {/* Bottom Left: Text Block */}
  <div className="flex flex-col justify-center bg-white p-12 rounded-3xl shadow-2xl">
    <h2 className="text-4xl font-extrabold mb-6">
      Overcoming two issues that are sinking gen AI programs
    </h2>
    <p className="text-2xl mb-8">
      Hard experience has revealed common technology pitfalls in building a gen AI capability and proven strategies for overcoming them.
    </p>
    <a href="#" className="text-[#2563eb] font-bold hover:underline text-xl">
      Recalibrate for growth &rarr;
    </a>
  </div>

  {/* Bottom Right: Image */}
  <div>
    <img
      src={img2}
      alt="Additional Visual"
      className="w-full h-[400px] object-cover rounded-3xl shadow-2xl"
    />
  </div>
</div>
    <section className="mt-16"><HowItWorks /></section>
    <section className="mt-16"><ClientStories /></section>
  </>
  );
}

export default Home;