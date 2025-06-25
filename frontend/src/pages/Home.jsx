import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../assets/Media/Image1.png';
import img2 from '../assets/Media/Image2.png';
import img3 from '../assets/Media/Image3.png';
import homebg1 from '../assets/Media/HomeBg1.jpg';
import homebg2 from '../assets/Media/HomeBg2.jpg';
import homebg3 from '../assets/Media/HomeBg3.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import debtSettlementVideo from '../assets/Media/Debtsettlement.mp4';


const Home = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef(null);

  // Toggle video sound
  const toggleSound = () => setIsMuted(!isMuted);

  // Toggle video play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  // Close the video
  const closeVideo = () => setIsVideoVisible(false);

  // SVG Icons
  const MuteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
    </svg>
  );

  const UnmuteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  const PlayIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
    </svg>
  );

  const PauseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
  );

  const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );

  return (
    <>
    {/* Hero Section Video */}
{isVideoVisible && (
  <div className="absolute top-1/2  md:right-20 transform -translate-y-1/2 z-20  md:w-[500px] md:h-[300px] rounded-lg overflow-hidden border-2 border-[#f7c948] shadow-2xl bg-black">
    <div className="relative h-full">
      <video 
        ref={videoRef}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="w-full h-full object-cover"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='169' viewBox='0 0 300 169'%3E%3Crect width='300' height='169' fill='%2316b477'/%3E%3Cpath d='M110 60 L190 84.5 L110 109 Z' fill='%23ffffff'/%3E%3C/svg%3E"
        aria-label="Client success stories"
      >
        <source src={debtSettlementVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video controls */}
      <div className="absolute top-0 left-0 right-0 flex justify-between p-1 sm:p-2 bg-gradient-to-b from-black/70 to-transparent">
        <button 
          className="bg-black/50 rounded-full p-1 sm:p-2 backdrop-blur-sm"
          onClick={togglePlay}
          aria-label={isVideoPlaying ? "Pause video" : "Play video"}
        >
          {isVideoPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        <button 
          className="bg-black/50 rounded-full p-1 sm:p-1.5 backdrop-blur-sm"
          onClick={closeVideo}
          aria-label="Close video"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* Sound toggle */}
      <button 
        className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-black/50 rounded-full p-1 sm:p-1.5 backdrop-blur-sm"
        onClick={toggleSound}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        )}
      </button>

      {/* Play prompt */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-1 sm:p-2 text-center">
        <p className="text-white text-[10px] sm:text-xs font-medium">
          Success Stories
        </p>
      </div>
    </div>
  </div>
)}


      {/* Fullscreen Hero Slider */}
      <div className="relative w-full h-[50vh] sm:h-[70vh] lg:h-screen">
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
        
        {/* Responsive overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 md:px-24 bg-black/40 text-center z-20">
        <div className="max-w-2xl transform translate-x-[-5%] sm:translate-x-[-7%] md:translate-x-[-40%]">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-2 sm:mb-4">
            Take Control of Your <span className="bg-gradient-to-r from-[#f7c948] to-orange-400 bg-clip-text text-transparent">Debt</span> Today
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-4 sm:mb-8">
            Reddington Global Debt Relief helps you find real solutions for your financial future. Start your journey to financial freedom with our expert team.
          </p>
          <button
            onClick={() => navigate('/Apply')}
            className="bg-[#16b477] text-white font-bold px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full shadow hover:bg-[#13a06b] transition"
          >
            Get Started
          </button>
        </div>
      </div>
      </div>

      {/* Responsive Grid Section */}
      <div className="max-w-7xl mx-auto py-10 sm:py-16 md:py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        {[
          // Item 1 - Text Block
          {
            type: 'text',
            content: (
              <div className="flex flex-col justify-center bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold sm:font-extrabold mb-3 sm:mb-4 md:mb-6">
                  Overcoming Key Challenges in Debt Relief Programs
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">
                  Many programs fail due to avoidable mistakes. Discover practical strategies to guide you toward debt-free living
                </p>
                <Link to="/apply" className="text-[#2563eb] font-bold hover:underline text-sm sm:text-base md:text-lg lg:text-xl">
                  Reset Your Finances &rarr;
                </Link>
              </div>
            )
          },
          
          // Item 2 - Image
          {
            type: 'image',
            content: (
              <img
                src={img1}
                alt="AI Cubes"
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl"
              />
            )
          },
          
          // Item 3 - Image
          {
            type: 'image',
            content: (
              <img
                src={img2}
                alt="Team Collaboration"
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl"
              />
            )
          },
          
          // Item 4 - Text Block
          {
            type: 'text',
            content: (
              <div className="flex flex-col justify-center bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold sm:font-extrabold mb-3 sm:mb-4 md:mb-6">
                  Tackle the Biggest Pitfalls in Debt Relief
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">
                  Many people enter debt relief with good intentions but fall into avoidable traps—like unrealistic repayment plans or lack of proper guidance. With the right strategies, you can avoid setbacks and build real financial stability.
                </p>
                <Link to="/Apply" className="text-[#2563eb] font-bold hover:underline text-sm sm:text-base md:text-lg lg:text-xl">
                  Rebuild with Confidence &rarr;
                </Link>
              </div>
            )
          },
          
          // Item 5 - Text Block
          {
            type: 'text',
            content: (
              <div className="flex flex-col justify-center bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold sm:font-extrabold mb-3 sm:mb-4 md:mb-6">
                  Why Debt Programs Fail—and How Yours Won't
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">
                  Hard experience has revealed common pitfalls in debt relief programs—and proven strategies that truly lead to lasting financial freedom.
                </p>
                <Link to="/Apply" className="text-[#2563eb] font-bold hover:underline text-sm sm:text-base md:text-lg lg:text-xl">
                  Begin Your Debt-Free Journey &rarr;
                </Link>
              </div>
            )
          },
          
          // Item 6 - Image
          {
            type: 'image',
            content: (
              <img
                src={img3}
                alt="Additional Visual"
                className="w-full h-auto max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-cover rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl"
              />
            )
          }
        ].map((item, index) => (
          <React.Fragment key={index}>
            {item.content}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

export default Home;