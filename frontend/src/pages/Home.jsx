import React from 'react';
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
import FAQSection from '../components/FAQ';

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
        className="bg-[#16b477] text-white font-bold px-6 py-3 text-base rounded-full shadow hover:bg-[#13a06b] transition"
      >
        Get Started
      </button>
    </div>

    {/* Right Video */}
    <div className="w-full md:w-1/2 flex justify-center pointer-events-auto">
      <div className="w-full max-w-[480px] aspect-video rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.youtube.com/embed/oQjdOMSUZpA?autoplay=1&mute=1&loop=1&playlist=oQjdOMSUZpA"
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
</div>
      {/* Responsive Grid Section */}
      <div className="max-w-7xl mx-auto py-10 sm:py-16 md:py-20 px-4 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
        {[
          {
            type: 'text',
            content: (
              <div className="flex flex-col justify-center bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold sm:font-extrabold mb-3 sm:mb-4 md:mb-6">
                  Overcoming Key Challenges in Debt Relief Programs
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">
                  Many programs fail due to avoidable mistakes. Discover
                  practical strategies to guide you toward debt-free living
                </p>
                <Link
                  to="/apply"
                  className="text-[#2563eb] font-bold hover:underline text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Reset Your Finances &rarr;
                </Link>
              </div>
            )
          },
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
          {
            type: 'text',
            content: (
              <div className="flex flex-col justify-center bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold sm:font-extrabold mb-3 sm:mb-4 md:mb-6">
                  Tackle the Biggest Pitfalls in Debt Relief
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">
                  Many people enter debt relief with good intentions but fall
                  into avoidable traps—like unrealistic repayment plans or lack
                  of proper guidance. With the right strategies, you can avoid
                  setbacks and build real financial stability.
                </p>
                <Link
                  to="/Apply"
                  className="text-[#2563eb] font-bold hover:underline text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Rebuild with Confidence &rarr;
                </Link>
              </div>
            )
          },
          {
            type: 'text',
            content: (
              <div className="flex flex-col justify-center bg-white p-4 sm:p-6 md:p-8 lg:p-12 rounded-2xl md:rounded-3xl shadow-lg md:shadow-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold sm:font-extrabold mb-3 sm:mb-4 md:mb-6">
                  Why Debt Programs Fail—and How Yours Won’t
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 sm:mb-6 md:mb-8">
                  Hard experience has revealed common pitfalls in debt relief
                  programs—and proven strategies that truly lead to lasting
                  financial freedom.
                </p>
                <Link
                  to="/Apply"
                  className="text-[#2563eb] font-bold hover:underline text-sm sm:text-base md:text-lg lg:text-xl"
                >
                  Begin Your Debt-Free Journey &rarr;
                </Link>
              </div>
            )
          },
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
          <React.Fragment key={index}>{item.content}</React.Fragment>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="mt-8 sm:mt-12 md:mt-16">
        <FAQSection />
      </section>
    </>
  );
};

export default Home;