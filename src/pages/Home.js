import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import sssLogo from '../assets/images/SSS_LOGO-removebg-preview.png';
import './Home.css';

const Home = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in, .slide-up');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title fade-in">
            Helping People,<br /> 
            <span className="highlight">Changing Lives</span>
          </h1>
          <p className="hero-subtitle fade-in">
            Join us in making a lasting impact through compassion, dedication, and meaningful action.
          </p>
          <div className="hero-buttons fade-in">
            <Link to="/Contact" className="btn btn-primary">Get Involved</Link>
            <Link to="/What-We-Do" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="stats-section" ref={statsRef}>
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card slide-up">
              <div className="stat-number">15K+</div>
              <div className="stat-label">Lives Impacted</div>
            </div>
            <div className="stat-card slide-up">
              <div className="stat-number">50+</div>
              <div className="stat-label">Active Projects</div>
            </div>
            <div className="stat-card slide-up">
              <div className="stat-number">200+</div>
              <div className="stat-label">Volunteers</div>
            </div>
            <div className="stat-card slide-up">
              <div className="stat-number">30+</div>
              <div className="stat-label">Communities Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="about-preview">
        <div className="container">
          <div className="section-grid">
            <div className="section-image slide-up">
              <div className="image-placeholder">
                <img src={sssLogo} alt="SSS Logo" className="image-icon" />
              </div>
            </div>
            <div className="section-content slide-up">
              <h2 className="section-title">Who We Are</h2>
              <p className="section-text">
                Selfless Serving Society was founded out of a conviction that basic health and hygiene awareness is one of the most powerful tools for uplifting communities. In many underserved areas, a lack of knowledge about simple hygienic practices, limited access to essential health supplies, and infrequent outreach mean that preventable illnesses continue to take heavy tolls — especially among women, children, and the elderly.
              </p>
              <p className="section-text">
                We are a non-governmental, non-profit organisation dedicated to closing this gap. Through outreach programs, workshops, seminars, talks, and distribution of health-related products, we strive to empower people with knowledge, tools, and habits that help them live healthier, more dignified lives.
              </p>
              <Link to="/About" className="btn btn-link">
                Learn About Us →
              </Link>
            
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="featured-work">
        <div className="container">
          <h2 className="section-title centered">Our Impact Areas</h2>
          <p className="section-subtitle centered">
            Making a difference across multiple sectors
          </p>
          
          <div className="work-grid">
            <div className="work-card slide-up">
              <div className="work-icon">📚</div>
              <h3>Education</h3>
              <p>Providing quality education and learning opportunities to children in underserved areas.</p>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>Ensuring access to essential healthcare services and promoting wellness in communities.</p>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">🌱</div>
              <h3>Environment</h3>
              <p>Promoting sustainable practices and environmental conservation for future generations.</p>
            </div>
            <div className="work-card slide-up">
              <div className="work-icon">💼</div>
              <h3>Livelihood</h3>
              <p>Creating economic opportunities through skill development and entrepreneurship programs.</p>
            </div>
          </div>

          <div className="centered">
            <Link to="/case-studies" className="btn btn-primary">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Make a Difference?</h2>
            <p className="cta-text">
              Your support can transform lives. Join us in our mission to create lasting change.
            </p>
            <div className="cta-buttons">
              <Link to="/partner" className="btn btn-primary-inverse">Become a Partner</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
