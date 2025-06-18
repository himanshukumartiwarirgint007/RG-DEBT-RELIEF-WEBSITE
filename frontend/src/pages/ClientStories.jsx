import React, { useEffect } from "react";
import FAQ from '../components/FAQ';

// Chart.js CDN for React (via window.Chart)
const loadChartJs = () => {
  if (!window.Chart) {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js";
    script.async = true;
    document.body.appendChild(script);
  }
};

const ClientStories = () => {
  useEffect(() => {
    loadChartJs();

    // Wait for Chart.js to load
    const interval = setInterval(() => {
      if (window.Chart) {
        // Pie Chart 1: Client Satisfaction
        new window.Chart(document.getElementById('pieChartSatisfaction').getContext('2d'), {
          type: 'doughnut',
          data: {
            labels: ['Satisfied', 'Other'],
            datasets: [{
              data: [95, 5],
              backgroundColor: ['#f7c948', '#e2e8f0'],
              borderWidth: 3,
              borderColor: '#fff',
              hoverOffset: 10
            }]
          },
          options: {
            animation: {
              animateRotate: true,
              animateScale: true,
              duration: 1800,
              easing: 'easeOutBounce'
            },
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return context.label + ': ' + context.raw + '%';
                  }
                }
              }
            }
          }
        });

        // Pie Chart 2: Debt Resolved
        new window.Chart(document.getElementById('pieChartDebt').getContext('2d'), {
          type: 'doughnut',
          data: {
            labels: ['Debt Resolved', 'Remaining'],
            datasets: [{
              data: [42, 8],
              backgroundColor: ['#003e7e', '#f7c94833'],
              borderWidth: 3,
              borderColor: '#fff',
              hoverOffset: 10
            }]
          },
          options: {
            animation: {
              animateRotate: true,
              animateScale: true,
              duration: 1800,
              easing: 'easeOutBounce'
            },
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return context.label === 'Debt Resolved' ? 'Debt Resolved: $42M+' : 'Remaining: $8M';
                  }
                }
              }
            }
          }
        });

        // Pie Chart 3: Average Rating
        new window.Chart(document.getElementById('pieChartRating').getContext('2d'), {
          type: 'doughnut',
          data: {
            labels: ['Rating', 'Max'],
            datasets: [{
              data: [4.9, 0.1],
              backgroundColor: ['#10b981', '#e2e8f0'],
              borderWidth: 3,
              borderColor: '#fff',
              hoverOffset: 10
            }]
          },
          options: {
            animation: {
              animateRotate: true,
              animateScale: true,
              duration: 1800,
              easing: 'easeOutBounce'
            },
            responsive: true,
            maintainAspectRatio: false,
            cutout: '65%',
            plugins: {
              legend: { display: false },
              tooltip: {
                callbacks: {
                  label: function(context) {
                    return context.label === 'Rating' ? 'Average Rating: 4.9/5' : '';
                  }
                }
              }
            }
          }
        });

        clearInterval(interval);
      }
    }, 200);

    // Animate on scroll (show/hide based on visibility)
    const animateOnScroll = () => {
      document.querySelectorAll('.animate').forEach(element => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (rect.top < windowHeight - 100 && rect.bottom > 0) {
          // Element is in viewport: fade in
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          element.style.pointerEvents = 'auto';
        } else {
          // Element is out of viewport: fade out
          element.style.opacity = '0';
          element.style.transform = 'translateY(30px)';
          element.style.pointerEvents = 'none';
        }
      });
    };

    // Set initial state for all .animate elements
    document.querySelectorAll('.animate').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.pointerEvents = 'none';
    });

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    // Call once on mount to show elements in view
    animateOnScroll();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });

    // Button ripple effect
    document.querySelectorAll('.btn-read-more').forEach(button => {
      button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        this.appendChild(ripple);
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.addEventListener('animationend', () => {
          ripple.remove();
        });
      });
    });

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
      window.removeEventListener('load', animateOnScroll);
    };
  }, []);

  return (
    <div>
      <style>{`
        :root {
          --primary: #002856;
          --primary-light: #003e7e;
          --secondary: #f7c948;
          --accent: #f7c948;
          --dark: #1e293b;
          --darker: #002856;
          --light: #f8fafc;
          --white: #ffffff;
          --gray: #64748b;
          --light-gray: #e2e8f0;
          --success: #10b981;
          --shadow: 0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.04);
          --shadow-hover: 0 20px 25px -5px rgba(0,0,0,0.08), 0 10px 10px -5px rgba(0,0,0,0.03);
          --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        body {
          font-family: 'Roboto', sans-serif;
          line-height: 1.6;
          color: var(--dark);
          background-color: var(--light);
          overflow-x: hidden;
        }
        h1, h2, h3, h4 {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          color: var(--primary);
        }
        .header {
          background: linear-gradient(135deg, var(--primary), var(--primary-light));
          color: var(--white);
          padding: 6rem 0 4rem;
          position: relative;
          overflow: hidden;
          text-align: center;
          z-index: 2;
        }
        .header::before {
          content: "";
          position: absolute;
          top: -50%;
          left: -50%;
          right: -50%;
          bottom: -50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.08) 100%);
          transform: rotate(30deg);
          animation: shine 8s infinite linear;
          z-index: 1;
        }
        .header-content {
          position: relative;
          z-index: 2;
        }
        .header h1 {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          margin-bottom: 1.5rem;
          line-height: 1.2;
          text-shadow: 0 2px 4px rgba(0,0,0,0.08);
          color: var(--secondary);
        }
        .header p {
          font-size: clamp(1rem, 2vw, 1.25rem);
          max-width: 700px;
          margin: 0 auto 2rem;
          opacity: 0.95;
          color: var(--white);
        }
        .header .icon {
          font-size: 2.5rem;
          color: var(--secondary);
          margin-bottom: 1rem;
          animation: bounceIn 1.2s;
        }
        .stats-section {
          background: linear-gradient(120deg, #f8fafc 60%, #f7c94811 100%);
          position: relative;
          z-index: 1;
          overflow: hidden;
          padding: 3rem 0;
          border-radius: 12px 12px 0 0;
          box-shadow: var(--shadow);
        }
        .stats-section::before {
          content: "";
          position: absolute;
          top: -60px;
          left: -80px;
          width: 220px;
          height: 220px;
          background: radial-gradient(circle, #f7c94833 0%, transparent 80%);
          z-index: 0;
          animation: floatBlob1 7s infinite alternate;
        }
        .stats-section::after {
          content: "";
          position: absolute;
          bottom: -80px;
          right: -100px;
          width: 260px;
          height: 260px;
          background: radial-gradient(circle, #003e7e22 0%, transparent 80%);
          z-index: 0;
          animation: floatBlob2 9s infinite alternate;
        }
        @keyframes floatBlob1 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(30px) scale(1.08); }
        }
        @keyframes floatBlob2 {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-30px) scale(1.12); }
        }
        .stat-card {
          text-align: center;
          padding: 1.5rem;
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--primary);
          margin-bottom: 0.5rem;
          font-family: 'Poppins', sans-serif;
        }
        .stat-label {
          color: var(--gray);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .chart-container {
          background: linear-gradient(135deg, #f7c94822 0%, #003e7e11 100%);
          border-radius: 50%;
          box-shadow: 0 4px 16px rgba(0,40,86,0.08);
          padding: 18px;
          margin: 0 auto;
          min-width: 140px;
          min-height: 140px;
          max-width: 220px;
          max-height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: visible;
          transition: box-shadow 0.4s;
        }
        .chart-container:hover {
          box-shadow: 0 8px 32px rgba(0,40,86,0.18), 0 2px 8px #f7c94844;
          transform: scale(1.04) rotate(-2deg);
        }
        .chart-label {
          position: absolute;
          bottom: -2.2rem;
          left: 50%;
          transform: translateX(-50%);
          font-weight: 600;
          color: var(--primary);
          font-size: 1rem;
          letter-spacing: 0.5px;
          opacity: 0.92;
          text-shadow: 0 1px 4px #fff8;
          pointer-events: none;
        }
        .chart-bg-1 {
          background: radial-gradient(circle at 70% 30%, #f7c94833 0%, #fff 100%);
          animation: chartPulse1 3s infinite alternate;
        }
        .chart-bg-2 {
          background: radial-gradient(circle at 30% 70%, #003e7e22 0%, #fff 100%);
          animation: chartPulse2 3s 0.5s infinite alternate;
        }
        .chart-bg-3 {
          background: radial-gradient(circle at 50% 50%, #10b98122 0%, #fff 100%);
          animation: chartPulse3 3s 1s infinite alternate;
        }
        @keyframes chartPulse1 {
          0% { box-shadow: 0 0 24px #f7c94844; }
          100% { box-shadow: 0 0 48px #f7c94888; }
        }
        @keyframes chartPulse2 {
          0% { box-shadow: 0 0 24px #003e7e33; }
          100% { box-shadow: 0 0 48px #003e7e77; }
        }
        @keyframes chartPulse3 {
          0% { box-shadow: 0 0 24px #10b98133; }
          100% { box-shadow: 0 0 48px #10b98177; }
        }
        @media (max-width: 576px) {
          .chart-container {
            max-width: 140px;
            max-height: 140px;
            padding: 8px;
          }
          .chart-label {
            font-size: 0.95rem;
            bottom: -1.6rem;
          }
        }
        .case-studies-intro {
          max-width: 700px;
          margin: 2rem auto 3rem;
          text-align: center;
          color: var(--primary);
          font-size: 1.1rem;
          animation: fadeIn 1.2s;
        }
        .stories-section {
          padding: 4rem 0;
          background-color: var(--light);
        }
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          position: relative;
        }
        .section-title h2 {
          font-size: 2rem;
          color: var(--primary);
          display: inline-block;
          padding-bottom: 0.5rem;
        }
        .section-title h2::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 2px;
        }
        .client-story {
          background: var(--white);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: var(--shadow);
          transition: var(--transition);
          height: 100%;
          margin-bottom: 1.5rem;
          position: relative;
          padding: 2rem;
          border: 1.5px solid var(--light-gray);
        }
        .client-story:hover {
          transform: translateY(-5px) scale(1.02);
          box-shadow: var(--shadow-hover);
          border-color: var(--secondary);
        }
        .client-story .badge {
          background: var(--secondary);
          color: var(--primary);
          font-size: 0.95rem;
          padding: 0.4rem 1rem;
          border-radius: 50px;
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          letter-spacing: 1px;
          font-weight: 600;
        }
        .client-img {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid var(--secondary);
          margin-bottom: 1rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }
        .client-title {
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          color: var(--primary);
        }
        .amount {
          color: var(--primary-light);
          font-weight: 500;
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }
        .quote {
          font-size: 1.05rem;
          color: #555;
          margin-bottom: 1rem;
          font-style: italic;
        }
        .result {
          margin-top: 1rem;
          color: var(--primary);
          font-weight: 500;
        }
        .fa-quote-left, .fa-quote-right {
          color: var(--secondary);
        }
        .progress-container {
          margin: 1rem 0;
        }
        .progress-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.25rem;
          font-size: 0.8rem;
          color: var(--gray);
        }
        .progress {
          height: 8px;
          border-radius: 4px;
          background-color: var(--light-gray);
        }
        .progress-bar {
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          border-radius: 4px;
        }
        .btn-read-more {
          background: linear-gradient(90deg, var(--primary), var(--secondary));
          color: var(--white);
          border: none;
          border-radius: 50px;
          padding: 0.5rem 1.5rem;
          font-weight: 500;
          margin-top: 1rem;
          transition: var(--transition);
          position: relative;
          overflow: hidden;
        }
        .btn-read-more:hover {
          background: linear-gradient(90deg, var(--secondary), var(--primary));
          box-shadow: 0 4px 16px rgba(0,0,0,0.12);
          transform: scale(1.05);
          color: var(--primary);
        }
        .btn-read-more:focus {
          outline: 2px solid var(--secondary);
        }
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple-effect 0.6s linear;
          background: rgba(255,255,255,0.7);
          pointer-events: none;
        }
        @keyframes ripple-effect {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        .animate {
          animation: fadeIn 1s ease-in-out;
        }
        .delay-1 {
          animation-delay: 0.2s;
        }
        .delay-2 {
          animation-delay: 0.4s;
        }
        .delay-3 {
          animation-delay: 0.6s;
        }
        .mt-n3 {
          margin-top: 0 !important;
        }
        @keyframes shine {
          0% { transform: rotate(30deg) translate(-30%, -30%); }
          100% { transform: rotate(30deg) translate(30%, 30%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceIn {
          0% { transform: scale(0.5); }
          60% { transform: scale(1.2); }
          80% { transform: scale(0.95); }
          100% { transform: scale(1); }
        }
      `}</style>
      
      {/* Header with Hero Section */}
      <header className="header">
        <div className="container header-content">
          <div className="icon animate"><i className="fas fa-hand-holding-usd"></i></div>
          <h1 className="animate delay-1">Debt Relief Success Stories</h1>
          <p className="animate delay-2">Real journeys. Real results. See how we've helped clients achieve financial freedom.</p>
        </div>
        {/* Stats Section */}
        <section className="stats-section mt-n3">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-3 col-6 stat-card animate">
                <div className="stat-number">95%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
              <div className="col-md-3 col-6 stat-card animate delay-1">
                <div className="stat-number">$42M+</div>
                <div className="stat-label">Debt Resolved</div>
              </div>
              <div className="col-md-3 col-6 stat-card animate delay-2">
                <div className="stat-number">4.9/5</div>
                <div className="stat-label">Average Rating</div>
              </div>
              <div className="col-md-3 col-6 stat-card animate delay-3">
                <div className="stat-number">2,300+</div>
                <div className="stat-label">Clients Helped</div>
              </div>
            </div>
            {/* Pie Charts Row */}
            <div className="row justify-content-center mt-4 g-4">
              <div className="col-12 col-sm-6 col-md-4 d-flex flex-column align-items-center">
                <div className="chart-container chart-bg-1 position-relative mb-2">
                  <canvas id="pieChartSatisfaction" height="180" aria-label="Client Satisfaction Pie Chart"></canvas>
                  <div className="chart-label">Client Satisfaction</div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex flex-column align-items-center">
                <div className="chart-container chart-bg-2 position-relative mb-2">
                  <canvas id="pieChartDebt" height="180" aria-label="Debt Resolved Pie Chart"></canvas>
                  <div className="chart-label">Debt Resolved</div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex flex-column align-items-center">
                <div className="chart-container chart-bg-3 position-relative mb-2">
                  <canvas id="pieChartRating" height="180" aria-label="Average Rating Pie Chart"></canvas>
                  <div className="chart-label">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      {/* Intro Text */}
      <div className="case-studies-intro animate">
        <p>Our mission is to help individuals and families overcome debt challenges with compassion, expertise, and proven solutions. Here are a few of our recent success stories from clients who regained control of their finances and started fresh.</p>
      </div>

      {/* Client Stories Section */}
      <section className="stories-section" id="stories">
        <div className="container">
          <div className="section-title animate">
            <h2>Featured Success Stories</h2>
          </div>
          <div className="row">
            {/* Story 1 */}
            <div className="col-lg-4 col-md-6 mb-4 animate">
              <div className="client-story">
                <span className="badge">Credit Card Debt</span>
                <img src="https://randomuser.me/api/portraits/women/44.jpg" className="client-img" alt="Client: Sarah P." />
                <h3 className="client-title">Sarah P.</h3>
                <div className="amount">Total Debt: $25,000</div>
                <div className="quote"><i className="fas fa-quote-left"></i> I was overwhelmed by credit card bills. With your team's help, I settled my debt and can finally breathe again. <i className="fas fa-quote-right"></i></div>
                <div className="progress-container">
                  <div className="progress-label">
                    <span>Client Satisfaction</span>
                    <span>98%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="result">Settled for $9,000 in 18 months</div>
                <button className="btn-read-more" aria-label="Read more about Sarah's story">Read More <i className="fas fa-arrow-right ms-2"></i></button>
              </div>
            </div>
            {/* Story 2 */}
            <div className="col-lg-4 col-md-6 mb-4 animate delay-1">
              <div className="client-story">
                <span className="badge">Medical Debt</span>
                <img src="https://randomuser.me/api/portraits/men/32.jpg" className="client-img" alt="Client: James R." />
                <h3 className="client-title">James R.</h3>
                <div className="amount">Total Debt: $14,500</div>
                <div className="quote"><i className="fas fa-quote-left"></i> Medical bills kept piling up after my surgery. Your consultants negotiated with my creditors and gave me my life back. <i className="fas fa-quote-right"></i></div>
                <div className="progress-container">
                  <div className="progress-label">
                    <span>Client Satisfaction</span>
                    <span>94%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "94%" }} aria-valuenow="94" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="result">Reduced to $5,200 in 12 months</div>
                <button className="btn-read-more" aria-label="Read more about James's story">Read More <i className="fas fa-arrow-right ms-2"></i></button>
              </div>
            </div>
            {/* Story 3 */}
            <div className="col-lg-4 col-md-6 mb-4 animate delay-2">
              <div className="client-story">
                <span className="badge">Personal Loan</span>
                <img src="https://randomuser.me/api/portraits/women/65.jpg" className="client-img" alt="Client: Maria L." />
                <h3 className="client-title">Maria L.</h3>
                <div className="amount">Total Debt: $8,800</div>
                <div className="quote"><i className="fas fa-quote-left"></i> I never thought I'd see the end of my loan. You made it possible for me to start over. Thank you! <i className="fas fa-quote-right"></i></div>
                <div className="progress-container">
                  <div className="progress-label">
                    <span>Client Satisfaction</span>
                    <span>97%</span>
                  </div>
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "97%" }} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="result">Paid off in 10 months</div>
                <button className="btn-read-more" aria-label="Read more about Maria's story">Read More <i className="fas fa-arrow-right ms-2"></i></button>
              </div>
            </div>
          </div>
          <div className="text-center mt-5 animate delay-3">
            <a href="#" className="btn btn-primary btn-lg">
              View All Success Stories <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Bootstrap JS */}
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <section className="mt-16"><FAQ /></section>
    </div>
  );
};

export default ClientStories;