import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// --- DATA ---
const projectsData = [
  {
    title: 'Multi-Platform Revenue Generation',
    company: 'Jaffri Creations',
    metric: 'Drove ₹7.95 Lakhs in Amazon Sales & 34,900+ Clicks from Google Ads.',
    tags: ['eCommerce', 'Google Ads', 'SEO', 'Performance Marketing'],
  },
  {
    title: 'High-Volume Lead Generation Engine',
    company: 'MTEI Services',
    metric: 'Generated 9,452 Qualified Student Leads with a ₹49.86 Cost Per Lead.',
    tags: ['Meta Ads', 'Lead Generation', 'Content Strategy'],
  },
  {
    title: 'Organic Growth & Brand Building',
    company: 'Jaffri Creations',
    metric: 'Grew a YouTube Channel to 247,000+ Views & 5,200+ Watch Hours.',
    tags: ['YouTube SEO', 'Video Marketing', 'Brand Authority'],
  },
];

const skillsData = {
  Specializations: ['SEO', 'PPC', 'SEM', 'Performance Marketing', 'eCommerce Management', 'Content Strategy', 'CRO'],
  Tools: ['Google Analytics', 'Google Tag Manager', 'Semrush', 'Google Ads', 'Meta Ads'],
  Platforms: ['WordPress', 'WooCommerce', 'Amazon Seller Central', 'Google Business Profile'],
  Technical: ['JavaScript', 'HTML', 'CSS'],
};

const experienceData = [
    {
        role: 'Digital Marketing Executive',
        company: 'Jaffri Creations',
        date: 'Oct 2023 - Present',
    },
    {
        role: 'Digital Marketing Specialist',
        company: 'HICO Tax Consultant',
        date: 'Jul 2021 - Jun 2023',
    },
    {
        role: 'Freelance Digital Marketing Specialist',
        company: 'MTEI Services Pvt. Ltd.',
        date: 'Ongoing',
    }
];


// --- COMPONENTS ---

// FIX: Added explicit type definition for props to resolve TypeScript errors about missing 'children' property.
const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode; className?: string; }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};


const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);
    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav">
                <a href="#" className="nav-logo">AA</a>
                <div className="nav-links">
                    <a href="#projects" className="nav-link">Projects</a>
                    <a href="#skills" className="nav-link">Skills</a>
                    <a href="#contact" className="nav-link">Contact</a>
                </div>
            </nav>
        </header>
    );
};

const Hero = () => (
    <section className="hero">
        <AnimatedSection>
            <h1 className="hero-headline">Ayaz Aftab</h1>
            <h2 className="hero-subheadline">Digital Marketing & eCommerce Specialist</h2>
            <p className="hero-summary">
                Results-driven Digital Marketing Specialist with 5+ years of experience specializing in SEO, PPC, and full-funnel eCommerce management. Proven expertise in generating over 15,000 leads, driving ₹7.95 Lakhs in Amazon sales, and increasing organic website traffic by 30% through comprehensive content and SEO strategies.
            </p>
            <div className="hero-cta-container">
                <a href="#projects" className="btn btn-primary">View Projects</a>
                <a href="#contact" className="btn btn-secondary">Get in Touch</a>
            </div>
        </AnimatedSection>
    </section>
);

const Achievements = () => (
    <AnimatedSection className="container">
      <div className="achievements-grid">
        <div className="achievement-item">
          <div className="value">15,000+</div>
          <div className="label">Leads Generated</div>
        </div>
        <div className="achievement-item">
          <div className="value">₹7.95 Lakhs</div>
          <div className="label">in Amazon Sales</div>
        </div>
        <div className="achievement-item">
          <div className="value">30%</div>
          <div className="label">Increase in Organic Traffic</div>
        </div>
        <div className="achievement-item">
          <div className="value">247,000+</div>
          <div className="label">YouTube Views</div>
        </div>
      </div>
    </AnimatedSection>
);

const Projects = () => (
    <section id="projects">
        <AnimatedSection className="container">
            <h2 className="section-heading">Projects & Case Studies</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="project-card glass-effect" key={index}>
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-metric">{project.metric}</p>
                        <div className="project-tags">
                            {project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    </section>
);

const Skills = () => (
    <section id="skills">
        <AnimatedSection className="container">
            <h2 className="section-heading">Skills & Expertise</h2>
            <div className="skills-grid">
                {Object.entries(skillsData).map(([category, skills]) => (
                    <div className="skills-category" key={category}>
                        <h3 className="skills-category-title">{category}</h3>
                        <ul className="skills-list">
                            {skills.map(skill => <li key={skill} className="skill-item">{skill}</li>)}
                        </ul>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    </section>
);

const Experience = () => (
    <section id="experience">
        <AnimatedSection className="container">
            <h2 className="section-heading">Professional Experience</h2>
            <div className="timeline">
                {experienceData.map((job, index) => (
                    <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                        <div className="timeline-content glass-effect">
                           <h3>{job.role}</h3>
                           <h4>{job.company}</h4>
                           <p>{job.date}</p>
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    </section>
);

const Contact = () => (
    <section id="contact" className="contact-section">
        <AnimatedSection className="container">
            <h2 className="section-heading">Get in Touch</h2>
            <div className="contact-links">
                <a href="mailto:ayazaftab9@gmail.com" className="contact-link">
                    <i data-feather="mail"></i> ayazaftab9@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/ayaz-aftab-dm" target="_blank" rel="noopener noreferrer" className="contact-link">
                    <i data-feather="linkedin"></i> LinkedIn Profile
                </a>
            </div>
        </AnimatedSection>
    </section>
);

const Footer = () => (
    <footer>
        <div className="container">
            <p>&copy; {new Date().getFullYear()} Ayaz Aftab. All rights reserved.</p>
        </div>
    </footer>
);

const App = () => {
    useEffect(() => {
        // FIX: Use type assertion for window.feather to prevent TypeScript errors,
        // as 'feather' is loaded from an external script and not in the default Window type.
        if ((window as any).feather) {
            (window as any).feather.replace();
        }
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Achievements />
                <Projects />
                <Skills />
                <Experience />
                <Contact />
            </main>
            <Footer />
        </>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);