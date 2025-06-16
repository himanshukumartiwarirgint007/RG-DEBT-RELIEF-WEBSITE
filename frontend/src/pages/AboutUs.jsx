import React, { useEffect, useRef, useState } from "react";
import teamPhoto from "../assets/Media/AboutUsImage/team photo.jpg";
import debtRelief from "../assets/Media/AboutUsImage/debt relief.jpg";
import vishalBora from "../assets/Media/AboutUsImage/Vishal Bora.jpg";
import jyotsanaBora from "../assets/Media/AboutUsImage/Jyotsana Bora.jpeg";
import humanApproach from "../assets/Media/AboutUsImage/human approch.png";
import movingForward from "../assets/Media/AboutUsImage/moving forword.png";
import person from "../assets/Media/AboutUsImage/person.png";
import smrt from "../assets/Media/AboutUsImage/smrt.png";
import certificate from "../assets/Media/AboutUsImage/certificate.jpg";
import certificate2 from "../assets/Media/AboutUsImage/certificate2.png";
import c1 from "../assets/Media/AboutUsImage/c1.jpg";
import c2 from "../assets/Media/AboutUsImage/c2.jpg";
import c3 from "../assets/Media/AboutUsImage/c3.jpg";
import ayushi from "../assets/Media/AboutUsImage/Ayushi.jpg";
import sd1 from "../assets/Media/AboutUsImage/sd1.jpg";
import sd2 from "../assets/Media/AboutUsImage/sd2.jpg";
import sd3 from "../assets/Media/AboutUsImage/sd3.jpg";
import sd4 from "../assets/Media/AboutUsImage/sd4.jpg";
import sd5 from "../assets/Media/AboutUsImage/sd5.jpg";

const AboutUs = () => {
  // Refs for testimonials carousel
  const carouselTrackRef = useRef(null);
  const carouselDotsRef = useRef([]);
  const carouselIndexRef = useRef(0);
  const autoPlayIntervalRef = useRef(null);
  
  // State for interactive elements
  const [isVisible, setIsVisible] = useState({});
  const [activePrinciple, setActivePrinciple] = useState(null);
  const [photoIdx, setPhotoIdx] = useState(0);
  
  // Slides data for the hero section
  const slides = [
    {
      img: teamPhoto,
      h1: "Guiding You Toward Financial Freedom",
      p: "We're here to support you every step of the way on your journey to a debt-free life—committed to helping you find peace of mind and lasting relief.",
    },
    {
      img: debtRelief,
      h1: "You're Not Alone on the Road to Recovery Freedom",
      p: "Facing debt can feel isolating, but with us by your side, you're never alone on the path to financial freedom.",
    },
    {
      img: teamPhoto,
      h1: "Guiding You Toward Financial Freedom",
      p: "We're devoted to supporting you on your journey to a debt-free life. From your very first step to your final milestone, our dedicated team stands by your side—working relentlessly to achieve the peace of mind and relief you deserve. We'll be with you every step of the way.",
    }
  ];

  // Helper for carousel
  const updateCarousel = (index) => {
    const track = carouselTrackRef.current;
    const dots = carouselDotsRef.current;
    if (!track) return;
    track.style.transition = "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      if (dot) dot.classList.toggle("active", i === index);
    });
  };

  // Carousel logic
  useEffect(() => {
    updateCarousel(carouselIndexRef.current);
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  // Autoplay for carousel
  const startAutoplay = () => {
    stopAutoplay();
    autoPlayIntervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };
  
  const stopAutoplay = () => {
    if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
  };

  // Carousel navigation
  const nextSlide = () => {
    carouselIndexRef.current = (carouselIndexRef.current + 1) % 3;
    updateCarousel(carouselIndexRef.current);
  };
  
  const prevSlide = () => {
    carouselIndexRef.current = (carouselIndexRef.current - 1 + 3) % 3;
    updateCarousel(carouselIndexRef.current);
  };

  // Photo navigation
 const nextPhoto = () => {
    setPhotoIdx((prev) => (prev + 1) % slides.length);
  };
  
  const prevPhoto = () => {
    setPhotoIdx((prev) => (prev - 1 + slides.length) % slides.length);
  };
  
  // Touch swipe for carousel
  useEffect(() => {
    const track = carouselTrackRef.current;
    if (!track) return;
    
    let startX = 0;
    let isSwiping = false;
    
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      isSwiping = true;
      stopAutoplay();
    };
    
    const handleTouchEnd = (e) => {
      if (!isSwiping) return;
      const endX = e.changedTouches[0].clientX;
      const diffX = endX - startX;
      
      if (Math.abs(diffX) > 50) {
        if (diffX < 0) nextSlide();
        else prevSlide();
      }
      
      isSwiping = false;
      startAutoplay();
    };
    
    track.addEventListener("touchstart", handleTouchStart);
    track.addEventListener("touchend", handleTouchEnd);
    
    return () => {
      track.removeEventListener("touchstart", handleTouchStart);
      track.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Scroll animations with Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));
    
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Styles
  const styles = `
  /* ===== Root Variables ===== */
  :root {
    --primary: #2563eb;
    --primary-light: #60a5fa;
    --primary-dark: #1e40af;
    --accent: #e0eaff;
    --text-main: #1a1a1a;
    --text-light: #fff;
    --bg-main: #fff;
    --bg-section: #f5faff;
    --border: #bcd2fa;
    --shadow: 0 10px 25px rgba(37, 99, 235, 0.15);
    --transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --glow: 0 0 20px rgba(37, 99, 235, 0.3);
  }

  /* ===== Global Styles ===== */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body, .aboutus-root {
    font-family: 'Inter', sans-serif;
    background-color: var(--bg-main);
    color: var(--text-main);
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  /* ===== Hero Section ===== */
  .hero {
    text-align: center;
    padding: 0;
    background-color: var(--bg-section);
    position: relative;
    height: 80vh;
    min-height: 600px;
    overflow: hidden;
    perspective: 1200px;
  }

  .hero h1 {
    font-size: 2.8rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    text-shadow: 0 2px 10px rgba(0,0,0,0.1);
    font-weight: 800;
    letter-spacing: -0.5px;
  }

  .hero p {
    color: #444;
    font-size: 1.1rem;
    max-width: 600px;
    margin: 0 auto 2rem;
    line-height: 1.7;
  }

  /* ===== Team Photo Carousel ===== */
  .RG-team-photo {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }

  .photo-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    perspective: 1200px;
  }

  .photo-track {
    display: flex;
    transition: transform 0.7s cubic-bezier(0.165, 0.84, 0.44, 1);
    height: 100%;
    width: 100%;
  }

  .photos-container {
    flex: 0 0 100%;
    position: relative;
    text-align: center;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }

  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translateZ(0);
    transition: transform 0.5s ease;
    filter: brightness(0.9);
  }

  .photos-container.active .photo {
    animation: subtleZoom 15s ease-in-out infinite;
  }

  @keyframes subtleZoom {
    0%, 100% { transform: scale(1) translateZ(0); }
    50% { transform: scale(1.05) translateZ(20px); }
  }

  .hover-text {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%) translateZ(50px);
    text-align: center;
    color: var(--primary-dark);
    background: rgba(255, 255, 255, 0.92);
    padding: 1.5rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
    width: 85%;
    max-width: 700px;
    box-shadow: var(--shadow);
    z-index: 10;
    transition: all 0.5s ease;
    border: 1px solid rgba(255,255,255,0.3);
  }

  .photos-container:hover .hover-text {
    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.25);
    transform: translateX(-50%) translateZ(60px);
  }

  .photo-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.95);
    color: var(--primary);
    border: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 100;
    padding: 0.8rem 1.2rem;
    border-radius: 50%;
    transition: var(--transition);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    transform-style: preserve-3d;
    transform: translateY(-50%) translateZ(30px);
  }

  .photo-btn:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-50%) scale(1.1) translateZ(40px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4), var(--glow);
  }

  .photo-btn.prev { left: 20px; }
  .photo-btn.next { right: 20px; }

  .hover-btn {
    margin-top: 1.5rem;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--text-light);
    border: none;
    padding: 0.8rem 1.8rem;
    font-size: 1rem;
    border-radius: 30px;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.4);
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    animation: pulse 2s infinite;
    transform: translateZ(0);
    transform-style: preserve-3d;
  }

  .hover-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    z-index: -1;
    transition: 0.6s;
  }

  .hover-btn:hover {
    transform: translateY(-3px) translateZ(10px);
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.5), var(--glow);
  }

  .hover-btn:hover::before {
    left: 100%;
  }

  @keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.4); }
    70% { box-shadow: 0 0 0 15px rgba(37, 99, 235, 0); }
    100% { box-shadow: 0 0 0 0 rgba(37, 99, 235, 0); }
  }

  /* ===== Origin Section ===== */
  .origin {
    background: linear-gradient(135deg, var(--accent), var(--bg-section));
    padding: 5rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    transform-style: preserve-3d;
  }
  
  .origin::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
    transform: rotate(30deg);
    z-index: 0;
    animation: rotateBackground 40s linear infinite;
  }
  
  .origin h2 {
    color: var(--primary);
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    z-index: 1;
    text-shadow: 0 2px 5px rgba(0,0,0,0.1);
    transform: translateZ(20px);
  }
  
  .origin p {
    color: var(--primary-dark);
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.8;
    font-weight: 400;
    position: relative;
    z-index: 1;
    transform: translateZ(30px);
  }

  @keyframes rotateBackground {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* ===== Principles Section ===== */
  .principles-section {
    text-align: center;
    padding: 5rem 2rem;
    background-color: var(--bg-section);
    position: relative;
    overflow: hidden;
    perspective: 1000px;
  }
  
  .principles-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%2360a5fa' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.3;
    animation: float 20s linear infinite;
  }
  
  .principles-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary);
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;
    transform: translateZ(30px);
  }
  
  .principles-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary);
    border-radius: 2px;
  }
  
  .principles-description {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 3rem;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    transform: translateZ(20px);
  }
  
  .principles-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
    perspective: 1000px;
  }
  
  .principle-item {
    text-align: center;
    max-width: 300px;
    perspective: 1000px;
    position: relative;
    z-index: 1;
  }
  
  .principle-card {
    background: white;
    border-radius: 20px;
    padding: 2rem 1.5rem;
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.1);
    transition: var(--transition);
    transform: translateZ(0) rotateY(0deg);
    position: relative;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    transform-style: preserve-3d;
    will-change: transform;
    backface-visibility: hidden;
  }
  
  .principle-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary), var(--primary-light));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease;
  }
  
  .principle-item:hover .principle-card::before {
    transform: scaleX(1);
  }
  
  .principle-item:hover .principle-card {
    transform: translateY(-15px) translateZ(20px) rotateY(5deg);
    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.2), var(--glow);
  }
  
  .principle-icon {
    width: 100px;
    height: 100px;
    margin-bottom: 1.5rem;
    border-radius: 50%;
    background: var(--accent);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: var(--transition);
    box-shadow: 0 5px 15px rgba(37, 99, 235, 0.2);
    transform: translateZ(30px);
  }
  
  .principle-item:hover .principle-icon {
    transform: scale(1.1) translateZ(40px);
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  }
  
  .principle-icon img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    transition: var(--transition);
  }
  
  .principle-item:hover .principle-icon img {
    filter: invert(1) brightness(2);
  }
  
  .principle-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    transition: var(--transition);
    transform: translateZ(20px);
  }
  
  .principle-item:hover .principle-title {
    color: var(--primary);
  }
  
  .principle-text {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
    transform: translateZ(10px);
  }

  /* ===== Transforming Lives Section ===== */
  .transforming-lives {
    background: linear-gradient(135deg, var(--bg-section), var(--accent));
    padding: 5rem 2rem;
    text-align: center;
    position: relative;
    overflow: hidden;
    perspective: 1000px;
  }
  
  .transforming-lives::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, var(--primary-light) 0%, transparent 70%);
    opacity: 0.1;
    z-index: 0;
    animation: pulseGlow 6s ease-in-out infinite;
  }
  
  .transforming-lives h2 {
    color: var(--primary-dark);
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
    transform: translateZ(30px);
  }
  
  .transforming-lives p {
    color: #444;
    max-width: 800px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
    line-height: 1.8;
    position: relative;
    z-index: 1;
    transform: translateZ(20px);
  }
  
  /* Centered Certificates */
  .certificates-center {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 3rem auto;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
    perspective: 1000px;
  }
  
  .certificates-center img {
    width: 300px;
    height: auto;
    border-radius: 18px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.15);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    transform: perspective(1000px) rotateY(0deg) translateZ(0);
    transform-style: preserve-3d;
    backface-visibility: hidden;
  }
  
  .certificates-center img:hover {
    transform: perspective(1000px) rotateY(10deg) translateY(-10px) translateZ(30px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2), var(--glow);
  }
  
  .cta-btn {
    margin: 2rem auto;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--text-light);
    font-weight: bold;
    border: none;
    border-radius: 30px;
    padding: 1rem 2.5rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
    z-index: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    animation: pulse 2s infinite;
    transform: translateZ(0);
    transform-style: preserve-3d;
  }
  
  .cta-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: 0.5s;
    z-index: -1;
  }
  
  .cta-btn:hover {
    transform: translateY(-5px) translateZ(20px);
    box-shadow: 0 12px 30px rgba(37, 99, 235, 0.5), var(--glow);
  }
  
  .cta-btn:hover::before {
    left: 100%;
  }
  
  @keyframes pulseGlow {
    0%, 100% { opacity: 0.1; box-shadow: 0 0 0 0 rgba(37, 99, 235, 0.1); }
    50% { opacity: 0.3; box-shadow: 0 0 40px 20px rgba(37, 99, 235, 0.1); }
  }

  /* ===== Testimonials Carousel ===== */
  .testimonials-carousel {
    width: 100%;
    padding: 5rem 0;
    background: var(--bg-main);
    text-align: center;
    position: relative;
    overflow: hidden;
    perspective: 1500px;
  }
  
  .testimonials-carousel::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%232563eb' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.5;
    animation: floatReverse 25s linear infinite;
  }
  
  .carousel-container {
    position: relative;
    max-width: 960px;
    margin: 0 auto;
    overflow: hidden;
    perspective: 1200px;
  }
  
  .carousel-track {
    display: flex;
    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  
  .testimonial-card {
    flex: 0 0 100%;
    padding: 30px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  
  .testimonial-card-inner {
    position: relative;
    width: 100%;
    max-width: 600px;
    padding: 40px 30px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    transition: var(--transition);
    transform-style: preserve-3d;
    transform: translateZ(0) rotateY(0deg);
    will-change: transform;
  }
  
  .testimonial-card:hover .testimonial-card-inner {
    transform: translateY(-10px) translateZ(30px) rotateY(5deg);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15), var(--glow);
  }
  
  .testimonial-img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    margin: 0 auto 20px;
    border: 4px solid var(--primary-light);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: var(--transition);
    transform: translateZ(30px);
  }
  
  .testimonial-card:hover .testimonial-img {
    transform: scale(1.1) translateZ(40px);
    border-color: var(--primary);
  }
  
  .testimonial-meta {
    font-weight: bold;
    margin-bottom: 15px;
    font-size: 1.3rem;
    color: var(--primary-dark);
    transform: translateZ(20px);
  }
  
  .testimonial-quote {
    font-style: italic;
    font-size: 1.1rem;
    color: #555;
    line-height: 1.7;
    position: relative;
    padding: 0 20px;
    transform: translateZ(10px);
  }
  
  .testimonial-quote::before,
  .testimonial-quote::after {
    content: '"';
    font-size: 3rem;
    color: var(--primary-light);
    position: absolute;
    opacity: 0.3;
  }
  
  .testimonial-quote::before {
    top: -20px;
    left: -10px;
  }
  
  .testimonial-quote::after {
    bottom: -40px;
    right: -10px;
  }
  
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.9);
    border: none;
    font-size: 32px;
    cursor: pointer;
    color: var(--primary);
    z-index: 10;
    border-radius: 50%;
    padding: 0.5em 0.7em;
    transition: var(--transition);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    transform-style: preserve-3d;
    transform: translateY(-50%) translateZ(30px);
  }
  
  .carousel-btn:hover {
    background: var(--primary);
    color: white;
    transform: translateY(-50%) scale(1.1) translateZ(40px);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.4), var(--glow);
  }
  
  .carousel-btn.prev { left: 10px; }
  .carousel-btn.next { right: 10px; }
  
  .carousel-dots {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 10px;
    transform-style: preserve-3d;
    transform: translateZ(20px);
  }
  
  .dot {
    display: inline-block;
    height: 14px;
    width: 14px;
    background-color: var(--primary-light);
    border-radius: 50%;
    cursor: pointer;
    transition: var(--transition);
    transform: translateZ(0);
  }
  
  .dot.active {
    background-color: var(--primary-dark);
    transform: scale(1.2) translateZ(10px);
    box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
  }
  
  .dot:hover {
    transform: scale(1.2) translateZ(10px);
  }

  /* ===== CTA Section ===== */
  .cta-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 0;
    background: var(--bg-main);
    position: relative;
    overflow: hidden;
    perspective: 1000px;
  }
  
  .cta-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, transparent, var(--accent), transparent);
    opacity: 0.3;
    z-index: 0;
    animation: float 30s linear infinite;
  }

  /* ===== Headline Section ===== */
  .headline-section {
    background: var(--bg-main);
    padding: 4rem 2rem;
    text-align: center;
    border-radius: 25px;
    max-width: 900px;
    margin: 4rem auto;
    border: 1px solid var(--border);
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
    position: relative;
    overflow: hidden;
    z-index: 1;
    transform-style: preserve-3d;
    perspective: 1000px;
  }
  
  .headline-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, rgba(224,234,255,0.2) 0%, transparent 70%);
    z-index: -1;
    animation: float 25s linear infinite;
  }
  
  .headline-section h2 {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary);
    margin-bottom: 1.5rem;
    line-height: 1.3;
    transform: translateZ(30px);
  }
  
  .headline-section p {
    font-size: 1.1rem;
    color: #333;
    max-width: 700px;
    margin: 0 auto 3rem;
    line-height: 1.7;
    transform: translateZ(20px);
  }

  /* ===== Signature Block ===== */
  .signature-block {
    display: flex;
    justify-content: center;
    gap: 4rem;
    align-items: center;
    margin-top: 2rem;
    flex-wrap: wrap;
    perspective: 1000px;
  }
  
  .signature-item {
    text-align: center;
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  
  .portrait-container {
    position: relative;
    display: inline-block;
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  
  .portrait {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary-light);
    margin-bottom: 1rem;
    transition: var(--transition);
    box-shadow: 0 10px 30px rgba(37, 99, 235, 0.2);
    transform: translateZ(0);
    transform-style: preserve-3d;
  }
  
  .portrait-container:hover .portrait {
    transform: rotateY(15deg) scale(1.05) translateZ(30px);
    box-shadow: 0 15px 40px rgba(37, 99, 235, 0.3), var(--glow);
  }
  
  .signature-name {
    font-weight: bold;
    font-size: 1.3rem;
    color: var(--primary);
    margin-top: 0.5rem;
    transition: var(--transition);
    transform: translateZ(20px);
  }
  
  .signature-item:hover .signature-name {
    color: var(--primary-dark);
  }
  
  .signature-name a {
    text-decoration: none;
    color: inherit;
    position: relative;
  }
  
  .signature-name a::after {
    content: '';
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--primary);
    transition: width 0.3s ease;
  }
  
  .signature-name a:hover::after {
    width: 100%;
  }
  
  .team-role {
    font-size: 1rem;
    color: var(--primary-dark);
    margin-top: 0.3rem;
    transform: translateZ(10px);
  }

  /* ===== Developer Section ===== */
  .developer-section {
    padding: 5rem 1rem;
    text-align: center;
    background: linear-gradient(135deg, var(--accent), var(--bg-section));
    border-radius: 25px;
    max-width: 1000px;
    margin: 4rem auto;
    box-shadow: 0 20px 40px rgba(37, 99, 235, 0.1);
    position: relative;
    overflow: hidden;
    z-index: 1;
    perspective: 1000px;
  }
  
  .developer-section::before {
    content: '';
    position: absolute;
    top: -50px;
    right: -50px;
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, var(--primary-light) 0%, transparent 70%);
    opacity: 0.1;
    z-index: -1;
    animation: pulseGlow 8s ease-in-out infinite;
  }
  
  .developer-section h2 {
    font-size: 2.2rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 3rem;
    position: relative;
    transform: translateZ(30px);
  }
  
  .developer-section h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: var(--primary);
    border-radius: 2px;
  }
  
  .developer-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2.5rem;
    perspective: 1000px;
  }
  
  .developer-card {
    text-align: center;
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  
  .developer-gallery img {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary-light);
    transition: var(--transition);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2);
    transform: translateZ(0);
    transform-style: preserve-3d;
  }
  
  .developer-card:hover img {
    transform: scale(1.1) rotate(5deg) translateZ(30px);
    border-color: var(--primary);
    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3), var(--glow);
  }
  
  .developer-card .signature-name {
    margin-top: 1rem;
    font-size: 1.1rem;
    transform: translateZ(20px);
  }

  /* ===== Our Team Section ===== */
  .our-team {
    text-align: center;
    padding: 5rem 2rem;
    background-color: var(--bg-section);
    position: relative;
    overflow: hidden;
    perspective: 1000px;
  }
  
  .our-team::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 70%);
    z-index: 0;
    animation: float 30s linear infinite;
  }
  
  .our-team h2 {
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 3rem;
    position: relative;
    z-index: 1;
    transform: translateZ(30px);
  }
  
  .team-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 2.5rem;
    justify-items: center;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
    perspective: 1000px;
  }
  
  .team-member {
    text-align: center;
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  
  .team-photo-container {
    position: relative;
    display: inline-block;
    perspective: 1000px;
    transform-style: preserve-3d;
  }
  
  .team-photo {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--primary-light);
    transition: var(--transition);
    box-shadow: 0 10px 25px rgba(37, 99, 235, 0.2);
    transform: translateZ(0);
    transform-style: preserve-3d;
  }
  
  .team-photo-container:hover .team-photo {
    transform: rotateY(20deg) scale(1.1) translateZ(30px);
    border-color: var(--primary);
    box-shadow: 0 15px 35px rgba(37, 99, 235, 0.3), var(--glow);
  }
  
  .team-name {
    font-weight: bold;
    font-size: 1.1rem;
    color: var(--primary);
    margin-top: 1rem;
    transition: var(--transition);
    transform: translateZ(20px);
  }
  
  .team-member:hover .team-name {
    color: var(--primary-dark);
  }
  
  .team-role {
    font-size: 0.9rem;
    color: var(--primary-dark);
    transform: translateZ(10px);
  }

  /* ===== Animation Classes ===== */
  [data-animate] {
    opacity: 0;
    transform: translateY(30px) translateZ(0);
    transition: opacity 0.8s ease, transform 0.8s ease;
  }
  
  [data-animate].visible {
    opacity: 1;
    transform: translateY(0) translateZ(0);
  }

  @keyframes float {
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(5px, -5px) rotate(2deg); }
    50% { transform: translate(0, -10px) rotate(0deg); }
    75% { transform: translate(-5px, -5px) rotate(-2deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }

  @keyframes floatReverse {
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(-5px, 5px) rotate(-2deg); }
    50% { transform: translate(0, 10px) rotate(0deg); }
    75% { transform: translate(5px, 5px) rotate(2deg); }
    100% { transform: translate(0, 0) rotate(0deg); }
  }

  /* ===== Responsive Styles ===== */
  @media (max-width: 1200px) {
    .hero h1 {
      font-size: 2.5rem;
    }
    
    .origin h2, .principles-title {
      font-size: 2.3rem;
    }
    
    .headline-section h2 {
      font-size: 2.2rem;
    }
  }
  
  @media (max-width: 992px) {
    .hero {
      height: 70vh;
      min-height: 500px;
    }
    
    .hero h1 {
      font-size: 2.2rem;
    }
    
    .origin h2, .principles-title {
      font-size: 2rem;
    }
    
    .headline-section h2 {
      font-size: 2rem;
    }
    
    .signature-block {
      gap: 3rem;
    }
    
    .portrait {
      width: 220px;
      height: 220px;
    }
    
    .certificates-center {
      gap: 2rem;
    }
  }
  
  @media (max-width: 768px) {
    .hero {
      height: 60vh;
      min-height: 450px;
    }
    
    .hero h1 {
      font-size: 1.8rem;
    }
    
    .hero p {
      font-size: 1rem;
    }
    
    .origin, .principles-section, .transforming-lives, .our-team {
      padding: 4rem 1.5rem;
    }
    
    .origin h2, .principles-title {
      font-size: 1.8rem;
    }
    
    .origin p {
      font-size: 1rem;
    }
    
    .headline-section {
      padding: 3rem 1.5rem;
      margin: 3rem 1.5rem;
    }
    
    .headline-section h2 {
      font-size: 1.8rem;
    }
    
    .signature-block {
      flex-direction: column;
      gap: 3rem;
    }
    
    .certificates-center img {
      width: 100%;
      max-width: 300px;
    }
    
    .team-container, .developer-gallery {
      gap: 2rem;
    }
    
    .carousel-btn, .photo-btn {
      width: 50px;
      height: 50px;
      font-size: 24px;
    }
    
    .testimonial-card-inner {
      padding: 30px 20px;
    }
  }
  
  @media (max-width: 576px) {
    .hero {
      height: 50vh;
      min-height: 400px;
    }
    
    .photo-btn {
      width: 45px;
      height: 45px;
      font-size: 1.4rem;
    }
    
    .hover-text {
      padding: 1rem;
      width: 95%;
      bottom: 5%;
    }
    
    .hover-text h1 {
      font-size: 1.5rem;
    }
    
    .principles-container {
      gap: 1.5rem;
    }
    
    .testimonial-img {
      width: 90px;
      height: 90px;
    }
    
    .portrait {
      width: 180px;
      height: 180px;
    }
    
    .developer-gallery img, .team-photo {
      width: 120px;
      height: 120px;
    }
    
    .cta-btn, .hover-btn {
      padding: 0.7rem 1.5rem;
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 400px) {
    .hero {
      min-height: 350px;
    }
    
    .hero h1 {
      font-size: 1.5rem;
    }
    
    .hero p {
      font-size: 0.9rem;
    }
    
    .origin h2, .principles-title {
      font-size: 1.6rem;
    }
    
    .headline-section h2 {
      font-size: 1.5rem;
    }
    
    .portrait {
      width: 150px;
      height: 150px;
    }
  }
`;

  // JSX
   return (
    <div className="aboutus-root">
      <style>{styles}</style>

      {/* Fixed Hero Section */}
      <section className="hero">
        <div className="RG-team-photo">
          <div className="photo-container">
            <button
              className="photo-btn prev"
              aria-label="Previous Slide"
              onClick={prevPhoto}
            >
              &#10094;
            </button>
            
            <div 
              className="photo-track"
              style={{ transform: `translateX(-${photoIdx * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div
                  className={`photos-container ${i === photoIdx ? 'active' : ''}`}
                  key={i}
                >
                  <img 
                    src={slide.img} 
                    alt={`Team Slide ${i + 1}`} 
                    className="photo" 
                  />
                  <div className="hover-text">
                    <h1>{slide.h1}</h1>
                    <p>{slide.p}</p>
                    <button
                      className="hover-btn"
                      onClick={() => window.open("https://forms.gle/your-form-link", "_blank")}
                    >
                      Fill The Form To Start
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button
              className="photo-btn next"
              aria-label="Next Slide"
              onClick={nextPhoto}
            >
              &#10095;
            </button>
          </div>
        </div>
      </section>

      {/* Our Origin Section */}
      <section
        className={isVisible['origin-section'] ? "origin visible" : "origin"}
        id="origin-section"
        data-animate
      >
        <h2>Our Origin</h2>
        <p>
          Our journey began with a simple mission: to empower individuals and families to break free from the burden of debt. Founded by a group of passionate financial experts, we saw firsthand the challenges people face when seeking financial relief. Inspired by real stories and driven by a desire to make a difference, we built a team dedicated to providing guidance, support, and hope. Today, our commitment remains stronger than ever—to help you achieve lasting financial freedom.
        </p>
      </section>

      {/* Headline Section */}
      <section
        className={isVisible['headline-section'] ? "headline-section visible" : "headline-section"}
        id="headline-section"
        data-animate
      >
        <h2>From Debt to Hope — Transforming Lives Nationwide</h2>
        <p>
          We are proud to have helped clients across the nation, guiding them from the depths of debt to a brighter, more hopeful future. Our commitment to transforming lives is unwavering, and we continue to strive for excellence in every step of our journey.
        </p>
        <div className="signature-block">
          <div className="signature-item">
            <a
              href="https://in.linkedin.com/in/vishal-bora-8681468?trk=public_post_feed-actor-name"
              target="_blank"
              rel="noopener noreferrer"
              className="portrait-container"
            >
              <img
                src={vishalBora}
                alt="Portrait of Vishal Bora"
                className="portrait"
              />
            </a>
            <div className="signature-name">
              <a
                href="https://in.linkedin.com/in/vishal-bora-8681468?trk=public_post_feed-actor-name"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vishal Bora
              </a>
            </div>
            <div className="team-role">CEO & Founder</div>
          </div>
          <div className="signature-item">
            <a
              href="https://in.linkedin.com/in/jyotsana-bora-637457163"
              target="_blank"
              rel="noopener noreferrer"
              className="portrait-container"
            >
              <img
                src={jyotsanaBora}
                alt="Portrait of Jyotsana Bora"
                className="portrait"
              />
            </a>
            <div className="signature-name">
              <a
                href="https://in.linkedin.com/in/jyotsana-bora-63745716"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jyotsana Bora
              </a>
            </div>
            <div className="team-role">CHIEF HUMAN RESOURCES OFFICERS</div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section
        className={isVisible['principles-section'] ? "principles-section visible" : "principles-section"}
        id="principles-section"
        data-animate
      >
        <h2 className="principles-title">What you can count on</h2>
        <p className="principles-description">
          Here’s how we resolve your debt using the principles we stand behind:
        </p>
        <div className="principles-container">
          <div
            className="principle-item"
            onMouseEnter={() => setActivePrinciple(0)}
            onMouseLeave={() => setActivePrinciple(null)}
          >
            <div className="principle-card">
              <div className="principle-icon">
                <img
                  src={humanApproach}
                  alt="A human approach icon"
                />
              </div>
              <h3 className="principle-title">A human approach</h3>
              <p className="principle-text">
                No matter your situation, we’ll listen to you and treat you with respect, empathy, and understanding.
              </p>
            </div>
          </div>
          <div
            className="principle-item"
            onMouseEnter={() => setActivePrinciple(1)}
            onMouseLeave={() => setActivePrinciple(null)}
          >
            <div className="principle-card">
              <div className="principle-icon">
                <img
                  src={movingForward}
                  alt="Moving you forward icon"
                />
              </div>
              <h3 className="principle-title">Moving you forward</h3>
              <p className="principle-text">
                When you meet a goal, we’re here to help with the next. Every day, we’ll work together to push your finances in a better direction.
              </p>
            </div>
          </div>
          <div
            className="principle-item"
            onMouseEnter={() => setActivePrinciple(2)}
            onMouseLeave={() => setActivePrinciple(null)}
          >
            <div className="principle-card">
              <div className="principle-icon">
                <img
                  src={person}
                  alt="Personalized solutions icon"
                />
              </div>
              <h3 className="principle-title">Personalized solutions</h3>
              <p className="principle-text">
                We’ll work with you to customize a solution to resolve debt so that it fits your life today, and gets you where you want to be in the future.
              </p>
            </div>
          </div>
          <div
            className="principle-item"
            onMouseEnter={() => setActivePrinciple(3)}
            onMouseLeave={() => setActivePrinciple(null)}
          >
            <div className="principle-card">
              <div className="principle-icon">
                <img
                  src={smrt}
                  alt="Financially smarter icon"
                />
              </div>
              <h3 className="principle-title">Financially smarter</h3>
              <p className="principle-text">
                We’ll teach you how to manage your money with confidence and transform how you think about your financial future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Lives Section */}
      <section
        className={isVisible['transforming-section'] ? "transforming-lives visible" : "transforming-lives"}
        id="transforming-section"
        data-animate
      >
        <h2>Transforming Lives, One Client at a Time</h2>
        <p>
          Since our inception in 2021, Reddington Global Consultancy has been dedicated to delivering exceptional value to clients through guaranteed cost reduction and enhanced quality assurance. Our commitment to integrity and excellence has enabled us to build trust among customers, candidates, and society at large.
          <br />
          <br />
          Our passionate team specializes in Recruitment Solutions, Contact Center Solutions, Retail Requirements, and Management Consultancy. We take pride in connecting the right individuals with the right opportunities, ensuring a personalized and efficient recruitment experience.
          <br />
          <br />
          With a focus on strategic initiatives that directly contribute value to both clients and their shareholders, we've become a valuable partner in our clients' talent acquisition endeavors.
        </p>
        <div className="certificates-center">
          <img
            src={certificate}
            alt="Quality Control Certification."
            style={{
              borderRadius: "18px",
            }}
          />
          <img
            src={certificate2}
            alt="Employee Recognition Programs"
            style={{
              borderRadius: "18px",
            }}
          />
        </div>
        <br />
        <button className="cta-btn">Fill The Form To <br />Start Now</button>
      </section>

      {/* Testimonials Carousel Section */}
      <section
        className={isVisible['testimonials-section'] ? "testimonials-carousel visible" : "testimonials-carousel"}
        id="testimonials-section"
        data-animate
      >
        <div className="carousel-container">
          <button
            className="carousel-btn prev"
            onClick={() => {
              stopAutoplay();
              prevSlide();
              startAutoplay();
            }}
          >
            &#10094;
          </button>
          <div className="carousel-track" ref={carouselTrackRef}>
            {[
              {
                img: c1,
                name: "Client Name 1",
                quote:
                  "“Our life started to get less complicated because the burden of debt is hard to carry.”",
              },
              {
                img: c2,
                name: "Client Name 2",
                quote:
                  "“I had my team. I had my support structure to push myself forward.”",
              },
              {
                img: c3,
                name: "Client Name 3",
                quote:
                  "“Being able to trust them to do their job allows you to take care of what’s important in your life.”",
              },
            ].map((card, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-card-inner">
                  <img src={card.img} alt={`Client ${i + 1}`} className="testimonial-img" />
                  <div className="testimonial-meta">{card.name}</div>
                  <div className="testimonial-quote">{card.quote}</div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-btn next"
            onClick={() => {
              stopAutoplay();
              nextSlide();
              startAutoplay();
            }}
          >
            &#10095;
          </button>
        </div>
        <div className="carousel-dots">
          {[0, 1, 2].map((i) => (
            <span
              className={`dot${i === 0 ? " active" : ""}`}
              key={i}
              ref={(el) => (carouselDotsRef.current[i] = el)}
              onClick={() => {
                stopAutoplay();
                carouselIndexRef.current = i;
                updateCarousel(i);
                startAutoplay();
              }}
            ></span>
          ))}
        </div>
      </section>

      {/* Our Team Section */}
      <section
        className={isVisible['team-section'] ? "our-team visible" : "our-team"}
        id="team-section"
        data-animate
      >
        <h2>Leadership Team</h2>
        
        {/* First Row */}
        <div className="team-container">
          {/* Ayushi Srivastava */}
          <div className="team-member">
            <a
              href="https://in.linkedin.com/in/ayushi-srivastava-49711521b"
              target="_blank"
              rel="noopener noreferrer"
              className="team-photo-container"
            >
              <img
                src={ayushi}
                alt="Ayushi Srivastava"
                className="team-photo"
              />
              <div className="team-name">Ayushi Srivastava</div>
              <div className="team-role">HR</div>
            </a>
          </div>

          {/* Team Member 2 */}
          <div className="team-member">
            <div className="team-photo-container">
              <img
                src={sd1}  // Using developer image 1 as placeholder
                alt="Team Member 2"
                className="team-photo"
              />
              <div className="team-name">th</div>
              <div className="team-role">or</div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="team-member">
            <div className="team-photo-container">
              <img
                src={sd2}  // Using developer image 2 as placeholder
                alt="Team Member 3"
                className="team-photo"
              />
              <div className="team-name">n</div>
              <div className="team-role">d</div>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="team-member">
            <div className="team-photo-container">
              <img
                src={sd3}  // Using developer image 3 as placeholder
                alt="Team Member 4"
                className="team-photo"
              />
              <div className="team-name">n</div>
              <div className="team-role">er</div>
            </div>
          </div>

          {/* Team Member 5 */}
          <div className="team-member">
            <div className="team-photo-container">
              <img
                src={sd4}  // Using developer image 4 as placeholder
                alt="Team Member 5"
                className="team-photo"
              />
              <div className="team-name">s</div>
              <div className="team-role">r</div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="team-container">
          {/* Mohd Anas Ansari */}
          <div className="team-member">
            <a
              href="https://in.linkedin.com/in/mohd-anas-ansari-904002257"
              target="_blank"
              rel="noopener noreferrer"
              className="team-photo-container"
            >
              <img
                src={c1}
                alt="i"
                className="team-photo"
              />
              <div className="team-name">i</div>
              <div className="team-role">r</div>
            </a>
          </div>

          {/* Team Member 7 */}
          <div className="team-member">
            <div className="team-photo-container">
              <img
                src={sd5}  // Using developer image 5 as placeholder
                alt="Team Member 7"
                className="team-photo"
              />
              <div className="team-name">n</div>
              <div className="team-role">r</div>
            </div>
          </div>

          {/* Team Member 8 */}
          <div className="team-member">
            <div className="team-photo-container">
              <img
                src={teamPhoto}  // Using team photo as placeholder
                alt="Team Member 8"
                className="team-photo"
              />
              <div className="team-name">z</div>
              <div className="team-role">s</div>
            </div>
          </div>

          {/* Team Member 9 */}
          <div className="team-member">
            <div className="team-photo-container">
              <img
                src={debtRelief}  // Using debt relief image as placeholder
                alt="Team Member 9"
                className="team-img"
              />
              <div className="team-name">n</div>
              <div className="team-role">or</div>
            </div>
          </div>

          {/* Team Member 10 */}
          <div className="team-member">
            <div className="team-photo-container">
              <img
                src={vishalBora}  // Using Vishal Bora image as placeholder
                alt="Team Member 10"
                className="team-photo"
              />
              <div className="team-name">ee</div>
              <div className="team-role">r</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <button className="cta-btn">Fill The Form To <br />Start Now</button>
      </section>

      {/* Developer Section */}
      <section
        className={isVisible['developer-section'] ? "developer-section visible" : "developer-section"}
        id="developer-section"
        data-animate
      >
        <h2>Meet Our Developers</h2>
        <div className="developer-gallery">
          {[
            { img: sd1, name: "Dheeraj Kumar" },
            { img: sd2, name: "Prince Kushwaha" },
            { img: sd3, name: "Prashant Pandey" },
            { img: sd4, name: "Himanshu Tiwari" },
            { img: sd5, name: "Aryan Arya" },
          ].map((dev, i) => (
            <div className="developer-card" key={i}>
              <img src={dev.img} alt={`Developer ${i + 1}`} />
              <div className="signature-name">{dev.name}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;