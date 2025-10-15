import React, { useEffect } from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
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

  const caseStudies = [
    {
      id: 1,
      title: "Empowering Women and Communities through Handcrafted Creations",
      location: "Runwal Elegante, Mumbai",
      year: "2024",
      image: "💫",
      challenge: "Limited livelihood opportunities for tribal women and individuals with physical challenges",
      solution: "Participated in an All-Women Entrepreneurs Exhibition, showcasing handcrafted Diwali diyas, decorative items, jute bags, incense sticks, masalas, and eco-friendly baskets — all made by marginalized artisans",
      impact: [
        "120 corporate diya orders received",
        "100% sales proceeds directed towards adolescent girls’ health & hygiene programs",
        "50+ women artisans gained sustainable income",
        "Strengthened self-reliance & community pride"
      ],
      testimonial: {
        quote: "My daughter can now read and write. This has changed our family's future forever.",
        author: "Rajesh Kumar, Parent"
      }
    },
    {
      id: 2,
      title: "Women's Empowerment Initiative",
      location: "Urban Slums, Delhi",
      year: "2023",
      image: "💪",
      challenge: "High unemployment rate among women leading to economic dependency",
      solution: "Vocational training programs in tailoring, handicrafts, and digital skills",
      impact: [
        "300+ women trained",
        "75% employment rate",
        "50+ self-help groups formed",
        "₹2.5 Cr income generated"
      ],
      testimonial: {
        quote: "I now run my own tailoring business and support my family. I am finally independent.",
        author: "Meera Devi, Graduate"
      }
    },
    {
      id: 3,
      title: "Healthcare Access Program",
      location: "Tribal Areas, Jharkhand",
      year: "2022-2023",
      image: "🏥",
      challenge: "No healthcare facilities within 50km for 10,000+ tribal population",
      solution: "Mobile health clinics and telemedicine centers with trained healthcare workers",
      impact: [
        "10,000+ patients treated",
        "15 health workers trained",
        "90% vaccination coverage",
        "50% reduction in preventable diseases"
      ],
      testimonial: {
        quote: "The mobile clinic saved my son's life. We are forever grateful to this organization.",
        author: "Soma Munda, Mother"
      }
    }
  ];

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title fade-in">Case Studies</h1>
          <p className="page-subtitle fade-in">
            Real stories of transformation and lasting impact in communities we serve
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="intro-content fade-in">
            <h2 className="section-heading centered">Stories of Change</h2>
            <p className="section-subheading centered">
              Every project we undertake is more than just numbers – it's about transforming lives, 
              empowering communities, and creating sustainable change. Here are some of our impactful journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section case-studies-section">
        <div className="container">
          {caseStudies.map((study, index) => (
            <div key={study.id} className={`case-study-card slide-up ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="case-study-header">
                <div className="case-study-icon">{study.image}</div>
                <div className="case-study-meta">
                  <h3 className="case-study-title">{study.title}</h3>
                  <div className="case-study-info">
                    <span className="location">📍 {study.location}</span>
                    <span className="year">📅 {study.year}</span>
                  </div>
                </div>
              </div>

              <div className="case-study-content">
                <div className="case-study-section">
                  <h4>The Challenge</h4>
                  <p>{study.challenge}</p>
                </div>

                <div className="case-study-section">
                  <h4>Our Solution</h4>
                  <p>{study.solution}</p>
                </div>

                <div className="case-study-section">
                  <h4>Impact Achieved</h4>
                  <ul className="impact-list">
                    {study.impact.map((item, idx) => (
                      <li key={idx}>
                        <span className="check-icon">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="case-study-testimonial">
                  <div className="quote-icon">"</div>
                  <p className="testimonial-quote">{study.testimonial.quote}</p>
                  <p className="testimonial-author">- {study.testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section stats-section">
        <div className="container">
          <h2 className="section-heading centered">Overall Impact</h2>
          <div className="stats-grid">
            <div className="stat-card fade-in">
              <div className="stat-number">10,800+</div>
              <div className="stat-label">Lives Impacted</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">6</div>
              <div className="stat-label">Major Projects</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">15</div>
              <div className="stat-label">Communities Served</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-number">₹5 Cr+</div>
              <div className="stat-label">Economic Impact</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Be Part of the Next Success Story</h2>
            <p>Your support can help us create more transformative stories like these</p>
            <a href="/contact" className="cta-button">Get Involved</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
