import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../assets/Media/Image1.jpg';
import img2 from '../assets/Media/Image2.avif';
import img3 from '../assets/Media/Image3.avif';
import HowITWorks from './HowItWorks';
import ClientStories from './ClientStories';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // Add Autoplay

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <main className="text-center py-16 px-4">
      {/* Hero Section Start */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#002855] mb-4">
          Take Control of Your Debt Today
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-2xl">
          Reddington Global Debt Relief helps you find real solutions for your financial future. Start your journey to financial freedom with our expert team.
        </p>
        <button
          onClick={() => navigate('/apply')}
          className="bg-[#16b477] text-white font-bold px-8 py-3 rounded-full shadow hover:bg-[#13a06b] transition text-lg"
        >
          Get Started
        </button>
      </section>
      {/* Hero Section End */}

      {/* Image Swiper Carousel */}
      <div className="py-12 max-w-5xl mx-auto"> {/* Increased max-w */}
        <Swiper
          modules={[Pagination, Autoplay]} // Add Autoplay module
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }} // Enable autoplay
        >
          <SwiperSlide>
            <img
              src={img1}
              alt="Slide 1"
              className="rounded-2xl shadow-lg border-4 border-[#16b477] w-full h-[650px] object-cover" // Increased height
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img2}
              alt="Slide 2"
              className="rounded-2xl shadow-lg border-4 border-[#2563eb] w-full h-[650px] object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={img3}
              alt="Slide 3"
              className="rounded-2xl shadow-lg border-4 border-[#fbbf24] w-full h-[650px] object-cover"
            />
          </SwiperSlide>
        </Swiper>
      </div>
          <section className="mt-16"><HowITWorks /></section>
          <section className="mt-16"><ClientStories /></section>
    </main>
  );
};

export default Home;