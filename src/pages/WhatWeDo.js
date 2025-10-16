import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './WhatWeDo.css';

gsap.registerPlugin(TextPlugin, ScrollTrigger);

const WhatWeDo = () => {
  const pageTitleRef = useRef(null);
  const sectionTitlesRef = useRef([]);

  useEffect(() => {
    // Page title - Wave animation
    const pageTitle = pageTitleRef.current;
    if (pageTitle) {
      const text = pageTitle.textContent;
      pageTitle.innerHTML = text
        .split('')
        .map((char, i) => `<span class="char" style="display: inline-block;">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join('');

      gsap.from(pageTitle.querySelectorAll('.char'), {
        duration: 0.8,
        opacity: 0,
        y: -100,
        rotationZ: 360,
        scale: 0.5,
        ease: 'elastic.out(1, 0.6)',
        stagger: {
          each: 0.04,
          from: 'center',
        },
      });
    }

    // Section titles - Glitch effect style
    sectionTitlesRef.current.forEach((title) => {
      if (title) {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          duration: 0.6,
          opacity: 0,
          x: -100,
          skewX: -10,
          ease: 'power4.out',
        });

        // Add glowing effect on scroll
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          textShadow: '0 0 20px rgba(255, 210, 63, 0.8)',
          duration: 0.5,
          yoyo: true,
          repeat: 1,
        });
      }
    });

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

    const elements = document.querySelectorAll('.fade-in, .slide-up, .slide-left, .slide-right');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const programs = [
    {
      id: 1,
      icon: "📚",
      title: "Education & Literacy",
      description: "Empowering communities through quality education and literacy programs",
      initiatives: [
        "Community Learning Centers",
        "Digital Literacy Programs",
        "Adult Education Classes",
        "Scholarship Programs",
        "Teacher Training Workshops"
      ],
      impact: "5,000+ students educated annually"
    },
    {
      id: 2,
      icon: "🏥",
      title: "Healthcare Services",
      description: "Providing accessible healthcare to underserved communities",
      initiatives: [
        "Mobile Health Clinics",
        "Free Medical Camps",
        "Maternal & Child Health",
        "Vaccination Drives",
        "Health Awareness Campaigns"
      ],
      impact: "10,000+ patients treated yearly"
    },
    {
      id: 3,
      icon: "💼",
      title: "Livelihood & Skill Development",
      description: "Creating sustainable livelihoods through skill training and employment",
      initiatives: [
        "Vocational Training Programs",
        "Entrepreneurship Development",
        "Women Self-Help Groups",
        "Microfinance Support",
        "Job Placement Assistance"
      ],
      impact: "3,000+ individuals trained"
    },
    {
      id: 4,
      icon: "👧",
      title: "Women Empowerment",
      description: "Promoting gender equality and empowering women to lead",
      initiatives: [
        "Leadership Training",
        "Legal Awareness Programs",
        "Financial Literacy",
        "Self-Defense Workshops",
        "Gender Sensitization"
      ],
      impact: "2,500+ women empowered"
    },
    {
      id: 5,
      icon: "🌱",
      title: "Environmental Conservation",
      description: "Protecting our planet through sustainable environmental practices",
      initiatives: [
        "Tree Plantation Drives",
        "Waste Management Programs",
        "Water Conservation Projects",
        "Renewable Energy Promotion",
        "Climate Change Awareness"
      ],
      impact: "50,000+ trees planted"
    },
    {
      id: 6,
      icon: "🤝",
      title: "Community Development",
      description: "Building resilient and self-sufficient communities",
      initiatives: [
        "Infrastructure Development",
        "Sanitation Programs",
        "Community Centers",
        "Youth Development Programs",
        "Cultural Preservation"
      ],
      impact: "100+ villages transformed"
    }
  ];

  const approach = [
    {
      step: "1",
      title: "Community Engagement",
      description: "We work closely with local communities to understand their unique needs and challenges",
      icon: "👥"
    },
    {
      step: "2",
      title: "Strategic Planning",
      description: "Develop comprehensive plans with measurable goals and sustainable outcomes",
      icon: "📋"
    },
    {
      step: "3",
      title: "Implementation",
      description: "Execute programs with dedicated teams and local partnerships",
      icon: "⚙️"
    },
    {
      step: "4",
      title: "Monitoring & Evaluation",
      description: "Regular assessment to ensure effectiveness and continuous improvement",
      icon: "📊"
    }
  ];

  return (
    <div className="what-we-do-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title fade-in" ref={pageTitleRef}>What We Do</h1>
          <p className="page-subtitle fade-in">
            Transforming lives through comprehensive programs focused on education, health, and sustainable development
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section intro-section">
        <div className="container">
          <div className="intro-content fade-in">
            <h2 className="section-heading centered" ref={el => sectionTitlesRef.current[0] = el}>Our Mission in Action</h2>
            <p className="intro-text">
              At Selfless Serving Society, we believe in creating lasting change through holistic community development. 
              Our programs are designed to address the root causes of poverty and inequality, empowering individuals 
              and communities to build better futures for themselves and generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section programs-section">
        <div className="container">
          <h2 className="section-heading centered" ref={el => sectionTitlesRef.current[1] = el}>Our Core Programs</h2>
          <p className="section-subheading centered">
            Comprehensive initiatives addressing critical needs across multiple sectors
          </p>
          
          <div className="programs-grid">
            {programs.map((program, index) => (
              <div key={program.id} className="program-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="program-icon">{program.icon}</div>
                <h3 className="program-title">{program.title}</h3>
                <p className="program-description">{program.description}</p>
                
                <div className="program-initiatives">
                  <h4>Key Initiatives:</h4>
                  <ul>
                    {program.initiatives.map((initiative, idx) => (
                      <li key={idx}>
                        <span className="bullet">•</span>
                        {initiative}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="program-impact">
                  <span className="impact-icon">📈</span>
                  <span className="impact-text">{program.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section approach-section">
        <div className="container">
          <h2 className="section-heading centered" ref={el => sectionTitlesRef.current[2] = el}>Our Approach</h2>
          <p className="section-subheading centered">
            A systematic and sustainable methodology that ensures lasting impact
          </p>
          
          <div className="approach-timeline">
            {approach.map((item, index) => (
              <div key={index} className={`approach-item slide-${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="approach-number">{item.step}</div>
                <div className="approach-content">
                  <div className="approach-icon">{item.icon}</div>
                  <h3 className="approach-title">{item.title}</h3>
                  <p className="approach-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="section stats-section">
        <div className="container">
          <h2 className="section-heading centered white" ref={el => sectionTitlesRef.current[3] = el}>Collective Impact</h2>
          <div className="stats-grid">
            <div className="stat-card fade-in">
              <div className="stat-icon">👨‍👩‍👧‍👦</div>
              <div className="stat-number">20,000+</div>
              <div className="stat-label">Lives Touched</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-icon">🎯</div>
              <div className="stat-number">15+</div>
              <div className="stat-label">Active Programs</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-icon">🏘️</div>
              <div className="stat-number">100+</div>
              <div className="stat-label">Communities Served</div>
            </div>
            <div className="stat-card fade-in">
              <div className="stat-icon">🤝</div>
              <div className="stat-number">50+</div>
              <div className="stat-label">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-heading centered" ref={el => sectionTitlesRef.current[4] = el}>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card slide-up">
              <div className="value-icon">💫</div>
              <h3>Integrity</h3>
              <p>Maintaining transparency and accountability in all our actions</p>
            </div>
            <div className="value-card slide-up">
              <div className="value-icon">❤️</div>
              <h3>Compassion</h3>
              <p>Serving with empathy and understanding the needs of others</p>
            </div>
            <div className="value-card slide-up">
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>Striving for the highest quality in everything we do</p>
            </div>
            <div className="value-card slide-up">
              <div className="value-icon">🔄</div>
              <h3>Sustainability</h3>
              <p>Creating long-term solutions that empower communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Join Us in Making a Difference</h2>
            <p>Your support enables us to expand our reach and create more impact</p>
            <div className="cta-buttons">
              <a href="/contact" className="cta-button primary">Get Involved</a>
              <a href="/case-studies" className="cta-button secondary">View Impact Stories</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
