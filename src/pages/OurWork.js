import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './OurWork.css';

const OurWork = () => {
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

  const projects = [
    {
      id: 1,
      category: 'Education',
      title: 'Learning Centers Initiative',
      description: 'Establishing community learning centers in rural areas to provide quality education and digital literacy programs.',
      impact: '2,500+ students enrolled',
      icon: '📚'
    },
    {
      id: 2,
      category: 'Education',
      title: 'Scholarship Program',
      description: 'Providing financial support to underprivileged students pursuing higher education.',
      impact: '500+ scholarships awarded',
      icon: '🎓'
    },
    {
      id: 3,
      category: 'Healthcare',
      title: 'Mobile Health Clinics',
      description: 'Bringing essential healthcare services to remote communities through mobile medical units.',
      impact: '10,000+ patients treated',
      icon: '🏥'
    },
    {
      id: 4,
      category: 'Healthcare',
      title: 'Maternal Health Program',
      description: 'Providing prenatal and postnatal care to expectant mothers in underserved areas.',
      impact: '1,200+ mothers supported',
      icon: '👶'
    },
    {
      id: 5,
      category: 'Environment',
      title: 'Green Communities',
      description: 'Promoting sustainable practices through tree plantation drives and waste management programs.',
      impact: '50,000+ trees planted',
      icon: '🌱'
    },
    {
      id: 6,
      category: 'Environment',
      title: 'Clean Water Initiative',
      description: 'Installing water purification systems and promoting water conservation in communities.',
      impact: '20+ communities benefited',
      icon: '💧'
    },
    {
      id: 7,
      category: 'Livelihood',
      title: 'Skill Development Program',
      description: 'Offering vocational training in various trades to enhance employability.',
      impact: '800+ individuals trained',
      icon: '💼'
    },
    {
      id: 8,
      category: 'Livelihood',
      title: 'Women Entrepreneurship',
      description: 'Supporting women-led small businesses through microfinance and mentorship.',
      impact: '300+ businesses launched',
      icon: '👩‍💼'
    }
  ];

  return (
    <div className="our-work-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title fade-in">Our Work</h1>
          <p className="page-subtitle fade-in">
            Creating sustainable impact through innovative programs and community partnerships
          </p>
        </div>
      </section>

      {/* Impact Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-heading centered">Our Impact</h2>
          <p className="section-subheading centered">
            Transforming lives across multiple sectors
          </p>
          <div className="impact-grid">
            <div className="impact-item slide-up">
              <div className="impact-icon">📚</div>
              <h3>Education</h3>
              <p>Empowering through knowledge and skills development for a brighter future.</p>
            </div>
            <div className="impact-item slide-up">
              <div className="impact-icon">🏥</div>
              <h3>Healthcare</h3>
              <p>Ensuring access to quality healthcare services for all community members.</p>
            </div>
            <div className="impact-item slide-up">
              <div className="impact-icon">🌱</div>
              <h3>Environment</h3>
              <p>Protecting our planet through sustainable practices and conservation efforts.</p>
            </div>
            <div className="impact-item slide-up">
              <div className="impact-icon">💼</div>
              <h3>Livelihood</h3>
              <p>Creating economic opportunities and fostering financial independence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects-section">
        <div className="container">
          <h2 className="section-heading centered">Our Projects</h2>
          <p className="section-subheading centered">
            Discover the initiatives making a real difference
          </p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={project.id} className="project-card slide-up">
                <div className="project-header">
                  <span className="project-category">{project.category}</span>
                  <div className="project-icon">{project.icon}</div>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-footer">
                  <span className="project-impact">{project.impact}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section success-section">
        <div className="container">
          <h2 className="section-heading centered">Success Stories</h2>
          <p className="section-subheading centered">
            Real stories from the communities we serve
          </p>
          <div className="stories-grid">
            <div className="story-card slide-up">
              <div className="story-image">
                <span className="story-icon">🌟</span>
              </div>
              <div className="story-content">
                <h3>From Student to Teacher</h3>
                <p>
                  "Thanks to the scholarship program, I completed my education and now teach in 
                  my village's learning center, giving back to my community."
                </p>
                <span className="story-author">- Priya, Learning Center Teacher</span>
              </div>
            </div>
            <div className="story-card slide-up">
              <div className="story-image">
                <span className="story-icon">💪</span>
              </div>
              <div className="story-content">
                <h3>Building My Business</h3>
                <p>
                  "The entrepreneurship program gave me the skills and confidence to start my 
                  own tailoring business. Now I employ three other women from my community."
                </p>
                <span className="story-author">- Anjali, Entrepreneur</span>
              </div>
            </div>
            <div className="story-card slide-up">
              <div className="story-image">
                <span className="story-icon">❤️</span>
              </div>
              <div className="story-content">
                <h3>Healthcare When Needed</h3>
                <p>
                  "The mobile clinic visits saved my mother's life. We now have access to 
                  regular health checkups and medicines that we couldn't afford before."
                </p>
                <span className="story-author">- Rahul, Community Member</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="work-cta-section">
        <div className="container">
          <div className="cta-content slide-up">
            <h2>Be Part of the Change</h2>
            <p>
              Your support enables us to expand our reach and deepen our impact. 
              Join us in transforming lives and building stronger communities.
            </p>
            <div className="cta-buttons">
              <Link to="/partner" className="btn btn-primary-inverse">Support Our Work</Link>
              <Link to="/contact" className="btn btn-outline">Get Involved</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWork;
