import React, { useEffect, useRef } from "react";
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
import ayushi from "../assets/Media/AboutUsImage/Ayushi Srivastava.jpg";
import anas from "../assets/Media/AboutUsImage/Mohd Anas Ansari.jpg";
import sd1 from "../assets/Media/AboutUsImage/sd1.jpg";
import sd2 from "../assets/Media/AboutUsImage/sd2.jpg";
import sd3 from "../assets/Media/AboutUsImage/sd3.jpg";
import sd4 from "../assets/Media/AboutUsImage/sd4.jpg";
import sd5 from "../assets/Media/AboutUsImage/sd5.jpg";

const AboutUs = () => {
  // Refs for photo section
  const photoTrackRef = useRef(null);
  const photoSlidesRef = useRef([]);
  const photoIndexRef = useRef(0);

  // Refs for testimonials carousel
  const carouselTrackRef = useRef(null);
  const carouselDotsRef = useRef([]);
  const carouselIndexRef = useRef(0);
  const autoPlayIntervalRef = useRef(null);

  // Helper for photo section
  const updatePhoto = (index) => {
    const photoTrack = photoTrackRef.current;
    const photoSlides = photoSlidesRef.current;
    if (!photoTrack || !photoSlides.length) return;
    photoTrack.style.transition = "transform 0.5s ease-in-out";
    photoTrack.style.transform = `translateX(-${index * 100}%)`;
    photoSlides.forEach((slide, i) => {
      if (slide) slide.classList.toggle("active", i === index);
    });
  };

  // Helper for carousel
  const updateCarousel = (index) => {
    const track = carouselTrackRef.current;
    const dots = carouselDotsRef.current;
    if (!track) return;
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      if (dot) dot.classList.toggle("active", i === index);
    });
  };

  // Photo section logic
  useEffect(() => {
    updatePhoto(photoIndexRef.current);
    if (photoSlidesRef.current[0]) {
      photoSlidesRef.current[0].classList.add("active");
    }
  }, []);

  // Carousel logic
  useEffect(() => {
    updateCarousel(carouselIndexRef.current);
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line
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
    carouselIndexRef.current =
      (carouselIndexRef.current + 1) % 3; // 3 testimonials
    updateCarousel(carouselIndexRef.current);
  };
  const prevSlide = () => {
    carouselIndexRef.current =
      (carouselIndexRef.current - 1 + 3) % 3;
    updateCarousel(carouselIndexRef.current);
  };

  // Photo navigation
  const nextPhoto = () => {
    photoIndexRef.current =
      (photoIndexRef.current + 1) % 3; // 3 slides
    updatePhoto(photoIndexRef.current);
  };
  const prevPhoto = () => {
    photoIndexRef.current =
      (photoIndexRef.current - 1 + 3) % 3;
    updatePhoto(photoIndexRef.current);
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
    // eslint-disable-next-line
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
  }

  /* ===== Hero Section ===== */
  .hero {
    text-align: center;
    padding: 4rem 2rem;
    background-color: var(--bg-section);
  }
  .hero h1 {
    font-size: 2.5rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
  }
  .hero p {
    color: #666;
    font-size: 1rem;
    max-width: 600px;
    margin: 0 auto 2rem;
  }
  .hero button {
    background-color: var(--primary);
    color: var(--text-light);
    border: none;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    border-radius: 20px;
    cursor: pointer;
    transition: background 0.2s;
  }
  .hero button:hover {
    background-color: var(--primary-light);
  }

  /* ===== Origin Section ===== */
  .origin {
    background: var(--accent);
    padding: 3rem 2rem;
    text-align: center;
  }
  .origin h2 {
    color: var(--primary);
    font-size: 2.8rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .origin p {
    color: var(--primary-dark);
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.2rem;
    line-height: 1.8;
    font-weight: 400;
  }

  /* ===== Team Photo Carousel ===== */
  .RG-team-photo {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .photo-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .photo-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
  }
  .photos-container {
    flex: 0 0 100%;
    position: relative;
    text-align: center;
    height: 100%;
  }
  .photo {
    width: 100%;
    height: 100%;
    object-fit: cover;
    animation: zoomInOut 10s infinite;
  }
  .photos-container.active .photo {
    animation: zoomInOutCurrent 10s infinite;
  }
  .photos-container .photo {
    animation: none;
  }
  @keyframes zoomInOutCurrent {
    0% { transform: scale(1);}
    50% { transform: scale(1.05);}
    100% { transform: scale(1);}
  }
  .hover-text {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: var(--primary-dark);
    background-color: rgba(255,255,255,0.8);
    padding: 1rem;
    border-radius: 10px;
    opacity: 1;
    transition: opacity 0.4s ease-in-out;
  }
  .photos-container:hover .hover-text {
    opacity: 1;
  }
  .photo-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--primary);
    color: var(--text-light);
    border: none;
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background 0.2s;
  }
  .photo-btn:hover {
    background-color: var(--primary-light);
  }
  .photo-btn.prev { left: 10px; }
  .photo-btn.next { right: 10px; }
  .hover-btn {
    margin-top: 1rem;
    background-color: var(--primary);
    color: var(--text-light);
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
  }
  .hover-btn:hover {
    background-color: var(--primary-dark);
    transform: scale(1.1);
  }

  /* ===== Principles Section ===== */
  .principles-section {
    text-align: center;
    padding: 3rem 2rem;
    background-color: var(--bg-section);
  }
  .principles-title {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--primary);
    margin-bottom: 1rem;
  }
  .principles-description {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }
  .principles-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  }
  .principle-item {
    text-align: center;
    max-width: 300px;
  }
  .principle-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
    border-radius: 18px;
    border: 2px solid var(--primary-light);
    background: var(--accent);
  }
  .principle-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 0.5rem;
  }
  .principle-text {
    font-size: 1rem;
    color: #666;
    line-height: 1.6;
  }

  /* ===== Transforming Lives Section ===== */
  .transforming-lives {
    background: var(--bg-section);
    padding: 3rem 2rem;
    text-align: center;
  }
  .transforming-lives h2 {
    color: var(--primary-dark);
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .transforming-lives p {
    color: #444;
    max-width: 700px;
    margin: 0 auto;
    font-size: 1.1rem;
  }
  /* Centered Certificates */
  .certificates-center {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    margin-top: 2rem;
    flex-wrap: wrap;
  }

  /* ===== Testimonials Carousel ===== */
  .testimonials-carousel {
    width: 100%;
    padding: 40px 0;
    background: var(--bg-main);
    text-align: center;
    position: relative;
  }
  .carousel-container {
    position: relative;
    max-width: 960px;
    margin: 0 auto;
    overflow: hidden;
  }
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  .testimonial-card {
    flex: 0 0 100%;
    padding: 20px;
    box-sizing: border-box;
  }
  .testimonial-img {
    width: 100px;
    height: 100px;
    border-radius: 100%;
    object-fit: cover;
    margin: 0 auto 20px;
    border: 3px solid var(--primary-light);
  }
  .testimonial-meta {
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 18px;
    color: var(--primary-dark);
  }
  .testimonial-quote {
    font-style: italic;
    font-size: 16px;
    color: #555;
  }
  .carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: var(--primary);
    border: none;
    font-size: 32px;
    cursor: pointer;
    color: var(--text-light);
    z-index: 10;
    border-radius: 50%;
    padding: 0.2em 0.6em;
    transition: background 0.2s;
  }
  .carousel-btn:hover {
    background: var(--primary-light);
  }
  .carousel-btn.prev { left: 10px; }
  .carousel-btn.next { right: 10px; }
  .carousel-dots {
    margin-top: 20px;
  }
  .dot {
    display: inline-block;
    height: 12px;
    width: 12px;
    margin: 0 6px;
    background-color: var(--primary-light);
    border-radius: 50%;
    cursor: pointer;
    transition: background 0.2s;
  }
  .dot.active {
    background-color: var(--primary-dark);
  }

  /* ===== CTA Section ===== */
  .cta-section {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 0;
    background: var(--bg-main);
  }
  .cta-btn {
    background: var(--primary);
    color: var(--text-light);
    font-weight: bold;
    border: none;
    border-radius: 24px;
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
    cursor: pointer;
    transition: background 0.2s;
  }
  .cta-btn:hover {
    background: var(--primary-light);
  }

  /* ===== Headline Section ===== */
  .headline-section {
    background: var(--bg-main);
    padding: 3rem 1rem;
    text-align: center;
    border-radius: 18px;
    max-width: 900px;
    margin: 2rem auto;
    border: 1px solid var(--border);
  }
  .headline-section h2 {
    font-size: 2.2rem;
    font-weight: 800;
    color: var(--primary);
    margin-bottom: 1rem;
  }
  .headline-section p {
    font-size: 1.05rem;
    color: #333;
    max-width: 700px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }

  /* ===== Signature Block ===== */
  .signature-block {
    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    margin-top: 1rem;
  }
  .signature-item {
    text-align: center;
  }
  .portrait {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--primary-light);
    margin-bottom: 0.5rem;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .portrait:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.15);
  }
  .signature-name {
    font-weight: bold;
    font-size: 1.1rem;
    color: var(--primary);
  }
  .signature-img {
    width: 80px;
    margin-top: 0.3rem;
  }

  /* ===== Developer Section ===== */
  .developer-section {
    padding: 3rem 1rem;
    text-align: center;
    background-color: var(--accent);
    border-radius: 18px;
    max-width: 1000px;
    margin: 2rem auto;
  }
  .developer-section h2 {
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 2rem;
  }
  .developer-gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
  .developer-gallery img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--primary-light);
    transition: transform 0.3s;
  }
  .developer-gallery img:hover {
    transform: scale(1.05);
  }

  /* ===== Our Team Section ===== */
  .our-team {
    text-align: center;
    padding: 2rem;
    background-color: var(--bg-section);
  }
  .our-team h2 {
    color: var(--primary-light);
    font-size: 2.5rem;
  }
  .team-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    justify-items: center;
  }
  .team-member {
    text-align: center;
  }
  .team-photo {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid var(--primary-light);
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .team-photo:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(37, 99, 235, 0.15);
  }
  .team-name {
    font-weight: bold;
    font-size: 1.1rem;
    color: var(--primary);
    margin-top: 0.5rem;
  }
  .team-role {
    font-size: 0.9rem;
    color: var(--primary-dark);
  }
`;

  // JSX
  return (
    <div className="aboutus-root">
      <style>{styles}</style>
      {/* Hero Section */}
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
            <div className="photo-track" ref={photoTrackRef}>
              {[
                {
                  img: teamPhoto,
                  h1: "Guiding You Toward Financial Freedom",
                  p: "We're here to support you every step of the way on your journey to a debt-free life—committed to helping you find peace of mind and lasting relief.",
                },
                {
                  img: debtRelief,
                  h1: "You’re Not Alone on the Road to Recovery Freedom",
                  p: "Facing debt can feel isolating, but with us by your side, you’re never alone on the path to financial freedom.",
                },
                {
                  img: teamPhoto,
                  h1: "Guiding You Toward Financial Freedom",
                  p: "We’re devoted to supporting you on your journey to a debt-free life. From your very first step to your final milestone, our dedicated team stands by your side—working relentlessly to achieve the peace of mind and relief you deserve. We’ll be with you every step of the way.",
                },
              ].map((slide, i) => (
                <div
                  className="photos-container"
                  key={i}
                  ref={(el) => (photoSlidesRef.current[i] = el)}
                >
                  <img src={slide.img} alt={`Team Slide ${i + 1}`} className="photo" />
                  <div className="hover-text">
                    <h1>{slide.h1}</h1>
                    <p>{slide.p}</p>
                    <button
                      className="hover-btn"
                      onClick={() =>
                        window.open("https://forms.gle/your-form-link", "_blank")
                      }
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
      <section className="origin">
        <h2>Our Origin</h2>
        <p>
          Our journey began with a simple mission: to empower individuals and families to break free from the burden of debt. Founded by a group of passionate financial experts, we saw firsthand the challenges people face when seeking financial relief. Inspired by real stories and driven by a desire to make a difference, we built a team dedicated to providing guidance, support, and hope. Today, our commitment remains stronger than ever—to help you achieve lasting financial freedom.
        </p>
      </section>

      {/* Headline Section */}
      <section className="headline-section">
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
                style={{ textDecoration: "none", color: "#7195f3" }}
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
                style={{ textDecoration: "none", color: "#7195f3" }}
              >
                Jyotsana Bora
              </a>
            </div>
            <div className="team-role">CHIEF HUMAN RESOURCES OFFICERS</div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="principles-section">
        <h2 className="principles-title">What you can count on</h2>
        <p className="principles-description">
          Here’s how we resolve your debt using the principles we stand behind:
        </p>
        <div className="principles-container">
          <div className="principle-item">
            <img
              src={humanApproach}
              alt="A human approach icon"
              className="principle-icon"
            />
            <h3 className="principle-title">A human approach</h3>
            <p className="principle-text">
              No matter your situation, we’ll listen to you and treat you with respect, empathy, and understanding.
            </p>
          </div>
          <div className="principle-item">
            <img
              src={movingForward}
              alt="Moving you forward icon"
              className="principle-icon"
            />
            <h3 className="principle-title">Moving you forward</h3>
            <p className="principle-text">
              When you meet a goal, we’re here to help with the next. Every day, we’ll work together to push your finances in a better direction.
            </p>
          </div>
          <div className="principle-item">
            <img
              src={person}
              alt="Personalized solutions icon"
              className="principle-icon"
            />
            <h3 className="principle-title">Personalized solutions</h3>
            <p className="principle-text">
              We’ll work with you to customize a solution to resolve debt so that it fits your life today, and gets you where you want to be in the future.
            </p>
          </div>
          <div className="principle-item">
            <img
              src={smrt}
              alt="Financially smarter icon"
              className="principle-icon"
            />
            <h3 className="principle-title">Financially smarter</h3>
            <p className="principle-text">
              We’ll teach you how to manage your money with confidence and transform how you think about your financial future.
            </p>
          </div>
        </div>
      </section>

      {/* Transforming Lives Section */}
      <section className="transforming-lives">
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
        width: "300px",
        height: "auto",
        borderRadius: "18px",
        marginTop: "1rem",
      }}
    />
    <img
      src={certificate2}
      alt="Employee Recognition Programs"
      style={{
        width: "300px",
        height: "auto",
        borderRadius: "18px",
        marginTop: "1rem",
      }}
    />
  </div>
  <br />
  <button className="cta-btn">Fill The Form To <br />Start Now</button>
</section>

      {/* Testimonials Carousel Section */}
      <section className="testimonials-carousel">
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
                <img src={card.img} alt={`Client ${i + 1}`} className="testimonial-img" />
                <div className="testimonial-meta">{card.name}</div>
                <div className="testimonial-quote">{card.quote}</div>
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
      <section className="our-team">
        <h2>Our Team</h2>
        <section className="our-team">
          <h2>Leadership Team</h2>
          <div className="team-container">
            <div className="team-member">
              <a
                href="https://in.linkedin.com/in/ayushi-srivastava-49711521b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ayushi}
                  alt="Ayushi Srivastava"
                  className="team-photo"
                />
                <div className="team-name">Ayushi Srivastava</div>
              </a>
            </div>
            {[...Array(5)].map((_, i) => (
              <div className="team-member" key={i}>
                <img
                  src={ayushi}
                  alt="............"
                  className="team-photo"
                />
                <div className="team-name">............</div>
                <div className="team-role">............</div>
              </div>
            ))}
          </div>
          <div className="team-container">
            <div className="team-member">
              <a
                href="https://in.linkedin.com/in/mohd-anas-ansari-904002257"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={anas}
                  alt="Mohd Anas Ansari"
                  className="team-photo"
                />
                <div className="team-name">Mohd Anas Ansari</div>
              </a>
              <div className="team-role">............</div>
            </div>
            {[...Array(5)].map((_, i) => (
              <div className="team-member" key={i}>
                <img
                  src={anas}
                  alt="............"
                  className="team-photo"
                />
                <div className="team-name">............</div>
                <div className="team-role">............</div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <button className="cta-btn">Fill The Form To <br />Start Now</button>
      </section>

      {/* Developer Section */}
      <section className="developer-section">
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