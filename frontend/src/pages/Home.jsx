import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../assets/Media/Image1 (2).png';
import img2 from '../assets/Media/Image2 (2).png';
import img3 from '../assets/Media/Image3 (2).png';
import homebg1 from '../assets/Media/HomeBg1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import FAQSection from '../components/FAQ';
import HomeAboutSection from '../ExtraPages/HomeAboutSection';
import DebtCalculator from '../ExtraPages/DebtCalculator';

const Home = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [color, setColor] = useState("#ffffff");

  return (
    <>
      {/* Video Popup Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <div className="relative w-full max-w-4xl px-4">
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="top-12 right-0 text-white text-3xl z-50 hover:text-[#FF624D] transition"
            >
              &times;
            </button>
            <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/VMLdA44sdtA?autoplay=1&mute=0"
                title="YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}

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
          {[homebg1].map((bg, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={bg}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay: text + play button */}
        <div className="absolute inset-0 flex flex-row items-end justify-between gap-6 px-4 sm:px-8 md:px-24 pb-24 z-10 pointer-events-none">
          {/* Left Text */}
          <div className="w-full md:w-1/2 text-left pointer-events-auto mb-8">
            <div className="bg-black bg-opacity-60 p-6 rounded-xl max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-white">
                Take Control of Your <span className="bg-gradient-to-r from-[#f7c948] to-orange-400 bg-clip-text text-transparent">Debt</span> Today
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 text-white">
                Reddington Global Debt Relief helps you find real solutions for your financial future. Start your journey to financial freedom with our expert team.
              </p>
              <button
                onClick={() => navigate('/Apply')}
                className="bg-[#FF624D] text-white font-bold px-6 py-3 text-base rounded-full shadow hover:bg-[#13a06b] transition"
              >
                Get Free Consultancy
              </button>
            </div>
          </div>
                
    
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
              content: (
                <div className="relative w-full">
                  <img 
                    src={img1} 
                    alt="AI Cubes" 
                    className="w-full h-auto rounded-xl shadow-lg" 
                  />
                  
                  {/* Play Button in Lower Right Corner - Original UI */}
                   {/* Play Button with Glass Effect */}
      <div className="absolute bottom-4 right-4 z-20 pointer-events-auto">
        <div
          className="relative w-32 h-32 cursor-pointer group"
          onClick={() => setIsVideoOpen(true)}
          aria-label="Watch video"
        >
                      {/* Outer Circle with Pulsing Animation */}
                      <div
                        className="absolute inset-0 rounded-full opacity-30 group-hover:opacity-50 animate-ping-slow group-hover:animate-none"
                        style={{ backgroundColor: color || "#ffffffff" }}
                      ></div>

                      {/* Middle Circle */}
                      <div
                        className="absolute inset-4 rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-3000"
                        style={{ backgroundColor: color || "#ffffffff" }}
                      ></div>

                      {/* Play Icon - Original Flaticon Style */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-20 h-20"
                        >
                          <circle cx="32" cy="32" r="32" fill="#66B3FF"/>
                          <polygon points="26,20 26,44 46,32" fill="#fff"/>
                        </svg>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 rounded-full border-4 border-white opacity-0 group-hover:opacity-100 transition-all duration-3000 scale-90 group-hover:scale-100"></div>
                    </div>
                  </div>
                </div>
              )
            },
            // ... rest of your grid items remain unchanged ...
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
      
      {/* FAQ Section */}
      <section className="mt-8 sm:mt-12 md:mt-16"> <FAQSection /> </section>
    </>
  );
};

export default Home;