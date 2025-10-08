import React, { useEffect } from 'react';
import './About.css';

const About = () => {
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
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title fade-in">About Us</h1>
          <p className="page-subtitle fade-in">
            Dedicated to creating positive change through compassion and action
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="content-grid">
            <div className="content-text slide-up">
              <h2 className="section-heading">Our Story</h2>
              <p>
                Founded with a vision to create meaningful change, our organization has grown from 
                a small group of passionate individuals into a dynamic force for good. We believe 
                that every person deserves access to opportunities that enable them to thrive.
              </p>
              <p>
                Over the years, we have expanded our reach and deepened our impact, working 
                alongside communities to address their most pressing challenges. Our approach 
                combines grassroots engagement with strategic partnerships to create sustainable 
                solutions.
              </p>
              <p>
                Today, we continue to be driven by the same core values that inspired our 
                founding: compassion, integrity, collaboration, and a commitment to lasting change.
              </p>
            </div>
            <div className="content-image slide-up">
              <div className="image-box">
                <span className="image-icon">📖</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card slide-up">
              <div className="vm-icon">🎯</div>
              <h2>Our Vision</h2>
              <p>
                A world where every individual has the opportunity to reach their full potential, 
                where communities thrive together, and where social equity and justice are not 
                just ideals but lived realities.
              </p>
              <p>
                We envision sustainable development that preserves our planet for future generations 
                while ensuring dignity and prosperity for all.
              </p>
            </div>
            <div className="vm-card slide-up">
              <div className="vm-icon">🚀</div>
              <h2>Our Mission</h2>
              <p>
                To empower underserved communities through innovative programs in education, 
                healthcare, environmental conservation, and economic development.
              </p>
              <p>
                We strive to create lasting impact by building local capacity, fostering 
                partnerships, and implementing evidence-based solutions that address root causes 
                of inequality and injustice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading centered">Our Core Values</h2>
          <p className="section-subheading centered">
            The principles that guide everything we do
          </p>
          <div className="values-grid">
            <div className="value-card slide-up">
              <div className="value-icon">💙</div>
              <h3>Compassion</h3>
              <p>We approach every situation with empathy and understanding, putting people first.</p>
            </div>
            <div className="value-card slide-up">
              <div className="value-icon">🤝</div>
              <h3>Integrity</h3>
              <p>We operate with transparency, accountability, and ethical practices in all we do.</p>
            </div>
            <div className="value-card slide-up">
              <div className="value-icon">🌟</div>
              <h3>Excellence</h3>
              <p>We strive for the highest standards in program delivery and impact measurement.</p>
            </div>
            <div className="value-card slide-up">
              <div className="value-icon">🔗</div>
              <h3>Collaboration</h3>
              <p>We believe in the power of partnerships and collective action for greater impact.</p>
            </div>
            <div className="value-card slide-up">
              <div className="value-icon">♻️</div>
              <h3>Sustainability</h3>
              <p>We create solutions that endure, building long-term capacity within communities.</p>
            </div>
            <div className="value-card slide-up">
              <div className="value-icon">✨</div>
              <h3>Innovation</h3>
              <p>We embrace creative approaches and continuously adapt to serve communities better.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section team-section">
        <div className="container">
          <h2 className="section-heading centered">Our Leadership</h2>
          <p className="section-subheading centered">
            Experienced professionals committed to social change
          </p>
          <div className="team-grid">
            <div className="team-card slide-up">
              <div className="team-photo">👤</div>
              <h3>Jane Doe</h3>
              <p className="team-role">Executive Director</p>
              <p className="team-bio">
                15+ years of experience in nonprofit management and community development.
              </p>
            </div>
            <div className="team-card slide-up">
              <div className="team-photo">👤</div>
              <h3>John Smith</h3>
              <p className="team-role">Program Director</p>
              <p className="team-bio">
                Expert in program design and implementation with a focus on education initiatives.
              </p>
            </div>
            <div className="team-card slide-up">
              <div className="team-photo">👤</div>
              <h3>Sarah Johnson</h3>
              <p className="team-role">Partnerships Manager</p>
              <p className="team-bio">
                Specializes in building strategic alliances and corporate partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="impact-statement">
        <div className="container">
          <div className="statement-content slide-up">
            <h2>Together, We Create Change</h2>
            <p>
              Every achievement, every life touched, and every community transformed is a testament 
              to the power of collective action. Join us in building a better future for all.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
