import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Partner.css';

const Partner = () => {
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
    <div className="partner-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title fade-in">Partner With Us</h1>
          <p className="page-subtitle fade-in">
            Together, we can create lasting change and build stronger communities
          </p>
        </div>
      </section>

      {/* Why Partner */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading centered">Why Partner With Us?</h2>
          <p className="section-subheading centered">
            Join a mission-driven organization committed to transparency and impact
          </p>
          <div className="reasons-grid">
            <div className="reason-card slide-up">
              <div className="reason-icon">🎯</div>
              <h3>Proven Impact</h3>
              <p>Our programs have transformed thousands of lives with measurable, sustainable results.</p>
            </div>
            <div className="reason-card slide-up">
              <div className="reason-icon">🔍</div>
              <h3>Transparency</h3>
              <p>We maintain complete transparency in our operations and regularly share impact reports.</p>
            </div>
            <div className="reason-card slide-up">
              <div className="reason-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>We work closely with partners to align initiatives with your organizational values.</p>
            </div>
            <div className="reason-card slide-up">
              <div className="reason-icon">📊</div>
              <h3>Data-Driven</h3>
              <p>Our approach is grounded in research and evidence-based practices for maximum effectiveness.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Options */}
      <section className="section partnership-section">
        <div className="container">
          <h2 className="section-heading centered">Ways to Partner</h2>
          <p className="section-subheading centered">
            Choose the partnership model that aligns with your goals
          </p>
          <div className="partnership-grid">
            <div className="partnership-card slide-up">
              <div className="partnership-header">
                <div className="partnership-icon">💰</div>
                <h3>Financial Support</h3>
              </div>
              <p className="partnership-description">
                Contribute to specific projects or provide general funding to support our mission. 
                Every donation directly impacts communities in need.
              </p>
              <ul className="partnership-benefits">
                <li>✓ Tax benefits</li>
                <li>✓ Regular impact reports</li>
                <li>✓ Recognition on website</li>
                <li>✓ Quarterly updates</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Donate Now</Link>
            </div>

            <div className="partnership-card slide-up featured">
              <div className="featured-badge">Popular</div>
              <div className="partnership-header">
                <div className="partnership-icon">🏢</div>
                <h3>Corporate Partnership</h3>
              </div>
              <p className="partnership-description">
                Engage your organization in meaningful CSR activities. We offer customized programs 
                that align with your corporate values and goals.
              </p>
              <ul className="partnership-benefits">
                <li>✓ Customized programs</li>
                <li>✓ Employee engagement</li>
                <li>✓ Brand visibility</li>
                <li>✓ Impact measurement</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
            </div>

            <div className="partnership-card slide-up">
              <div className="partnership-header">
                <div className="partnership-icon">👥</div>
                <h3>Volunteer Partnership</h3>
              </div>
              <p className="partnership-description">
                Contribute your time, skills, and expertise. We welcome individuals and groups 
                who want to make hands-on contributions.
              </p>
              <ul className="partnership-benefits">
                <li>✓ Flexible schedules</li>
                <li>✓ Skill-based opportunities</li>
                <li>✓ Team building</li>
                <li>✓ Direct community impact</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Join Us</Link>
            </div>

            <div className="partnership-card slide-up">
              <div className="partnership-header">
                <div className="partnership-icon">🎁</div>
                <h3>In-Kind Donations</h3>
              </div>
              <p className="partnership-description">
                Donate goods, services, or resources that support our programs. From educational 
                materials to medical supplies, every contribution helps.
              </p>
              <ul className="partnership-benefits">
                <li>✓ Direct program support</li>
                <li>✓ Efficient resource use</li>
                <li>✓ Community impact</li>
                <li>✓ Recognition opportunities</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Contribute</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Partners */}
      <section className="section partners-showcase">
        <div className="container">
          <h2 className="section-heading centered">Our Partners</h2>
          <p className="section-subheading centered">
            Proud to collaborate with organizations that share our vision
          </p>
          <div className="partners-logos slide-up">
            <div className="partner-logo">
              <div className="logo-placeholder">Partner 1</div>
            </div>
            <div className="partner-logo">
              <div className="logo-placeholder">Partner 2</div>
            </div>
            <div className="partner-logo">
              <div className="logo-placeholder">Partner 3</div>
            </div>
            <div className="partner-logo">
              <div className="logo-placeholder">Partner 4</div>
            </div>
            <div className="partner-logo">
              <div className="logo-placeholder">Partner 5</div>
            </div>
            <div className="partner-logo">
              <div className="logo-placeholder">Partner 6</div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories */}
      <section className="section impact-stories">
        <div className="container">
          <h2 className="section-heading centered">Partnership Success Stories</h2>
          <div className="stories-grid">
            <div className="story-card slide-up">
              <div className="story-quote">"</div>
              <p className="story-text">
                Our partnership has enabled us to make a real difference in education. 
                The transparency and professionalism of the team made collaboration seamless.
              </p>
              <div className="story-author">
                <strong>Tech Solutions Inc.</strong>
                <span>Corporate Partner since 2022</span>
              </div>
            </div>
            <div className="story-card slide-up">
              <div className="story-quote">"</div>
              <p className="story-text">
                Volunteering with this organization has been incredibly rewarding. 
                The impact we've made together in healthcare initiatives is remarkable.
              </p>
              <div className="story-author">
                <strong>Healthcare Volunteers Group</strong>
                <span>Volunteer Partner since 2021</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partner-cta-section">
        <div className="container">
          <div className="cta-content slide-up">
            <h2>Ready to Make an Impact?</h2>
            <p>
              Let's work together to create positive change. Reach out to discuss how we can 
              collaborate to achieve shared goals and make a lasting difference.
            </p>
            <Link to="/contact" className="btn btn-primary-inverse btn-large">Start a Partnership</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
