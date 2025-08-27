
import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// Fix: Augment React's HTMLAttributes to include width and height props.
// This is necessary for the feather-icons library which expects these attributes on the host element.
declare module 'react' {
    interface HTMLAttributes<T> {
        width?: string | number;
        height?: string | number;
    }
}

// --- DATA ---
const projectsData = [
  {
    id: 1,
    client: 'Jaffri Creations',
    title: 'Multi-Platform Revenue Generation',
    imageUrl: 'https://picsum.photos/seed/jc-project/600/400',
    keyResult: '₹7.95 Lakhs Revenue',
    challenge: 'To establish a strong eCommerce presence and generate revenue through multiple online channels including Amazon and direct-to-consumer.',
    role: 'As the lead Digital Marketing Executive, I was responsible for end-to-end eCommerce strategy, PPC campaign management, and SEO.',
    strategy: 'A multi-pronged approach was developed focusing on (1) optimizing Amazon listings for visibility, (2) running targeted Google Ads to capture high-intent buyers, and (3) building organic traffic through content marketing.',
    execution: 'Launched and managed Google Ads campaigns with a focus on ROAS. Optimized product pages on Amazon with A+ content. Executed a content strategy that led to a 30% increase in organic traffic.',
    results: [
      'Drove ₹7.95 Lakhs in Amazon Sales',
      'Generated 34,900+ Clicks from Google Ads',
      'Increased organic website traffic by 30%',
      'Converted high-intent leads into sales valued from ₹5 Lakhs to ₹13 Lakhs'
    ],
    testimonial: 'Ayaz’s strategies were instrumental in our online growth. His expertise in both paid and organic channels delivered exceptional results.',
    visuals: [
        'https://picsum.photos/seed/jc-dashboard/800/450',
        'https://picsum.photos/seed/jc-ad/800/450',
        'https://picsum.photos/seed/jc-analytics/800/450'
    ],
    liveLink: '#',
  },
  {
    id: 2,
    client: 'MTEI Services',
    title: 'High-Volume Lead Generation Engine',
    imageUrl: 'https://picsum.photos/seed/mtei-project/600/400',
    keyResult: '9,452 Qualified Leads',
    challenge: 'The primary goal was to generate a high volume of qualified leads for student admissions at a low Cost Per Lead (CPL).',
    role: 'I served as a Freelance Digital Marketing Specialist, focusing on Meta Ads and content strategy.',
    strategy: 'Utilized Meta Ads with precise audience targeting and compelling ad creatives. A/B tested various ad formats and landing pages to optimize for conversions.',
    execution: 'Managed a significant ad budget on Meta platforms, continuously monitoring and optimizing campaigns. Developed lead magnets and content funnels to nurture potential leads.',
    results: [
      'Generated 9,452 qualified student leads',
      'Achieved a low ₹49.86 Cost Per Lead',
      'Managed a total ad spend of ₹4.7 Lakhs over 7 months',
      'Improved landing page conversion rates'
    ],
    testimonial: 'The lead generation campaigns run by Ayaz were a game-changer for our admissions cycle. The volume and quality of leads exceeded our expectations.',
    visuals: ['https://picsum.photos/seed/mtei-ads/800/450'],
    liveLink: '#',
  },
  {
    id: 3,
    client: 'Jaffri Creations',
    title: 'Organic Growth & Brand Building',
    imageUrl: 'https://picsum.photos/seed/youtube-project/600/400',
    keyResult: '247,000+ YouTube Views',
    challenge: 'To build brand authority and top-of-funnel awareness through organic video content.',
    role: 'I managed the end-to-end YouTube strategy, from content planning to channel growth and optimization.',
    strategy: 'Focused on creating valuable content for the target audience, optimizing videos for YouTube search (YouTube SEO), and engaging with the community to foster growth.',
    execution: 'Grew the channel by consistently publishing optimized video content, resulting in significant increases in views and watch time. This strategy was key in driving brand awareness.',
    results: [
      'Accumulated over 247,000 views',
      'Achieved 5,200+ hours of watch time',
      'Played a key role in building brand authority',
      'Drove top-of-funnel awareness'
    ],
    testimonial: "Ayaz's work on our YouTube channel has been phenomenal. He built it from the ground up into a significant source of brand discovery for us.",
    visuals: ['https://picsum.photos/seed/youtube-analytics/800/450'],
    liveLink: '#',
  },
];

const testimonialsData = [
    {
        projectId: 1,
        logoUrl: 'https://picsum.photos/seed/jaffri-logo/100/40',
        quote: 'Ayaz’s strategies were instrumental in our online growth. His expertise in both paid and organic channels delivered exceptional results, helping us achieve significant revenue milestones and expand our digital footprint.',
        author: 'Jaffri',
        title: 'Founder, Jaffri Creations'
    },
    {
        projectId: 2,
        logoUrl: 'https://picsum.photos/seed/mtei-logo/100/40',
        quote: 'The lead generation campaigns run by Ayaz were a game-changer. The sheer volume and quality of qualified leads exceeded our expectations, all while maintaining an impressively low cost-per-lead.',
        author: 'MTEI Services',
        title: 'Admissions Director, MTEI'
    }
];

// --- UTILITY COMPONENTS ---

const Icon = ({ name, size = 24 }: { name: string; size?: number }) => (
    <i data-feather={name} width={size} height={size}></i>
);

const Logo = () => (
    <div className="logo-icon">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
           <path fillRule="evenodd" clipRule="evenodd" d="M50 4 L0 100 H19 L50 40 L81 100 H100 L50 4 Z M50 67 L25 100 H75 L50 67 Z" />
           <path d="M50 33 L44 43 L50 53 L56 43 Z" />
        </svg>
    </div>
);


const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div ref={ref} className={`fade-in-section ${isVisible ? 'is-visible' : ''} ${className}`}>
            {children}
        </div>
    );
};

// --- CORE COMPONENTS ---

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => (
    <header className="header">
        <div className="container">
            <nav className="nav">
                <a href="#" className="logo-container">
                    <Logo />
                    <span className="logo-text">Ayaz Aftab</span>
                </a>
                <button onClick={onMenuClick} className="menu-icon" aria-label="Open menu">
                    <Icon name="menu" />
                </button>
            </nav>
        </div>
    </header>
);

const OffCanvasMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    // This outer div handles the overlay click to close
    return (
        <div className={`off-canvas-menu-overlay ${isOpen ? 'open' : ''}`} onClick={onClose}>
            {/* This inner div is the menu itself, stopping click propagation */}
            <div className={`off-canvas-menu ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="off-canvas-header">
                     <a href="#" className="logo-container" onClick={onClose}>
                        <Logo />
                        <span className="logo-text">Ayaz Aftab</span>
                    </a>
                    <button onClick={onClose} className="close-menu-btn" aria-label="Close menu">
                        <Icon name="x" />
                    </button>
                </div>
                <nav className="menu-links">
                    <a href="#projects" onClick={onClose} className="menu-link"><Icon name="briefcase" size={20}/> Projects</a>
                    <a href="#skills" onClick={onClose} className="menu-link"><Icon name="bar-chart-2" size={20}/> Skills</a>
                    <a href="#contact" onClick={onClose} className="menu-link"><Icon name="mail" size={20}/> Contact</a>
                </nav>
                 <a href="#" className="btn btn-primary menu-resume-btn">Download Resume</a>

                <div className="off-canvas-footer">
                    <a href="https://www.linkedin.com/in/ayaz-aftab-digital-marketing-specialist" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                    <a href="#" className="social-link" aria-label="Twitter"><Icon name="twitter" /></a>
                    <a href="#" className="social-link" aria-label="Github"><Icon name="github" /></a>
                </div>
            </div>
        </div>
    );
};


const Hero = () => {
    const specializations = useRef(['SEO', 'PPC', 'eCommerce Growth', 'Performance Marketing', 'Social Media Marketing', 'Content Strategy', 'CRO', 'SEM']).current;
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delay = 2000;

    useEffect(() => {
        // End of typing: pause then start deleting
        if (subIndex === specializations[index].length && !isDeleting) {
            const timer = setTimeout(() => {
                setIsDeleting(true);
            }, delay);
            return () => clearTimeout(timer);
        }

        // End of deleting: move to next word
        if (subIndex === 0 && isDeleting) {
            setIsDeleting(false);
            setIndex(prevIndex => (prevIndex + 1) % specializations.length);
            return; // Return to avoid setting another timeout
        }

        // Typing/deleting interval
        const timeout = setTimeout(() => {
            setSubIndex(prevSubIndex => prevSubIndex + (isDeleting ? -1 : 1));
        }, isDeleting ? deletingSpeed : typingSpeed);
        
        return () => clearTimeout(timeout);

    }, [subIndex, index, isDeleting, specializations, delay, deletingSpeed, typingSpeed]);

    const displayText = specializations[index].substring(0, subIndex);

    return (
        <section className="hero">
            <AnimatedSection className="container">
                <h1 className="hero-headline">
                    Hi, I'm <span className="gradient-text">Ayaz Aftab</span>.
                    <br />
                    <span className="hero-dynamic-subheading">I specialise in <span className="typing-text">{displayText}</span><span className="cursor"></span></span>
                </h1>
                <p className="hero-summary">
                    Results-driven specialist with 5+ years of experience in SEO, PPC, and full-funnel eCommerce management. I help businesses drive revenue growth through data-driven strategies that generate leads, boost sales, and increase organic traffic.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                </div>
                <div className="hero-socials">
                    <a href="mailto:ayazaftab9@gmail.com" className="social-link" aria-label="Email"><Icon name="mail" /></a>
                    <a href="https://www.linkedin.com/in/ayaz-aftab-digital-marketing-specialist" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                    <a href="#" className="social-link" aria-label="Twitter"><Icon name="twitter" /></a>
                    <a href="#" className="social-link" aria-label="Github"><Icon name="github" /></a>
                </div>
            </AnimatedSection>
        </section>
    );
};

const ProvenImpact = () => (
    <section>
        <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">Proven Impact</h2>
                <p className="section-subtitle">Career highlights at a glance.</p>
            </div>
            <div className="impact-grid">
                <div className="info-card">
                    <p className="impact-metric">15,000+</p>
                    <p className="impact-label">Leads Generated</p>
                </div>
                <div className="info-card">
                    <p className="impact-metric">₹7.95 L+</p>
                    <p className="impact-label">Amazon Sales</p>
                </div>
                <div className="info-card">
                    <p className="impact-metric">+30%</p>
                    <p className="impact-label">Organic Traffic Growth</p>
                </div>
                <div className="info-card">
                    <p className="impact-metric">1,465+</p>
                    <p className="impact-label">Local Customer Interactions</p>
                </div>
            </div>
        </AnimatedSection>
    </section>
);

const FeaturedProjects = ({ onProjectClick }: { onProjectClick: (project: any) => void }) => (
    <section id="projects">
        <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">Featured Projects</h2>
                 <p className="section-subtitle">A selection of my recent work.</p>
            </div>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <div className="project-card" key={project.id} onClick={() => onProjectClick(project)}>
                        <div className="project-image-container">
                            <img 
                                src={project.imageUrl} 
                                alt={`${project.title} for ${project.client}`} 
                                className="project-image"
                                loading="lazy"
                                width="600"
                                height="400"
                            />
                        </div>
                        <div className="project-content">
                            <p className="project-client">{project.client}</p>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-result">{project.keyResult}</p>
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    </section>
);

const Testimonials = ({ onProjectClick }: { onProjectClick: (project: any) => void }) => (
    <section>
        <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">What My Clients Say</h2>
            </div>
            <div className="testimonials-list">
                {testimonialsData.map(testimonial => (
                    <div className="testimonial-card" key={testimonial.projectId}>
                        <div className="testimonial-header">
                            <img src={testimonial.logoUrl} alt={`${testimonial.author} Logo`} className="testimonial-logo" />
                            <div className="stars">
                                ★★★★★
                            </div>
                        </div>
                        <p className="testimonial-quote">"{testimonial.quote}"</p>
                        <div className="testimonial-footer">
                            <div>
                                <p className="testimonial-author-name">{testimonial.author}</p>
                                <p className="testimonial-author-title">{testimonial.title}</p>
                            </div>
                            <a href="#" onClick={(e) => { e.preventDefault(); onProjectClick(projectsData.find(p => p.id === testimonial.projectId));}} className="view-project-link">
                                View Project &rarr;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </AnimatedSection>
    </section>
);

const Education = () => (
    <section id="education">
        <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">Education</h2>
            </div>
            <div className="info-card education-item">
                <h3 className="education-degree">Diploma in Computer Science and Engineering</h3>
                <p className="education-university">Arka Jain University | Jamshedpur, Jharkhand</p>
                <p className="education-date">Completed: Jul 2021</p>
            </div>
        </AnimatedSection>
    </section>
);

const Skills = () => (
    <section id="skills">
        <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">Skills & Certifications</h2>
            </div>
            <div className="skills-grid">
                <div className="skill-card">
                    <div className="skills-header"><Icon name="star" size={20} /> <h3 className="skills-title">Core Competencies</h3></div>
                    <ul className="skills-list">
                        {['SEO', 'PPC', 'SEM', 'Performance Marketing', 'eCommerce Management', 'Content Strategy', 'Video Marketing & YouTube SEO', 'CRM Integration', 'Google Ads', 'Meta Ads', 'UI/UX Design', 'CRO'].map(s => <li key={s} className="skill-item">{s}</li>)}
                    </ul>
                </div>
                <div className="skill-card">
                     <div className="skills-header"><Icon name="tool" size={20} /> <h3 className="skills-title">Technical Stack</h3></div>
                    <ul className="skills-list">
                        {['JavaScript', 'HTML', 'CSS', 'Google Analytics', 'Google Tag Manager', 'Semrush', 'WordPress', 'WooCommerce', 'Amazon Seller Central', 'Google Business Profile'].map(s => <li key={s} className="skill-item">{s}</li>)}
                    </ul>
                </div>
                <div className="skill-card certifications-card">
                    <div className="skills-header"><Icon name="award" size={20} /> <h3 className="skills-title">Certifications</h3></div>
                    <div className="certifications-list">
                        <p className="certification-group">
                            <strong>Google:</strong> The Fundamentals of Digital Marketing, Google Ads, Google Analytics, AI-Powered Performance Ads, AI-Powered Shopping Ads, Conversion Optimization.
                        </p>
                        <p className="certification-group">
                            <strong>Semrush:</strong> Semrush SEO Certification, Mastering YouTube Search Trends & SEO Strategies.
                        </p>
                         <p className="certification-group">
                            <strong>YouTube:</strong> YouTube Music Certification, YouTube Music Rights Management.
                        </p>
                         <p className="certification-group">
                            <strong>Udacity:</strong> Foundation of Digital Marketing (Nanodegree).
                        </p>
                    </div>
                </div>
            </div>
        </AnimatedSection>
    </section>
);

const Footer = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [statusMessage, setStatusMessage] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            setStatusMessage('Please fill out all fields.');
            setTimeout(() => setStatusMessage(''), 3000);
            return;
        }

        const subject = `New Message from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:ayazaftab9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        setStatusMessage('Your message is ready to send!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatusMessage(''), 4000);
    };

    return (
        <footer id="contact" className="footer">
             <AnimatedSection className="container">
                <div className="footer-content">
                    <h2 className="footer-title">Let's build together.</h2>
                    <p className="footer-subtitle">Have a project in mind or a role to discuss? Let's connect.</p>
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                             <div className="form-group">
                                <label htmlFor="name" className="form-label">Your Name</label>
                                <input 
                                    type="text" 
                                    id="name"
                                    name="name" 
                                    className="form-input" 
                                    placeholder="e.g., John Doe" 
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">Your Email</label>
                                <input 
                                    type="email" 
                                    id="email"
                                    name="email" 
                                    className="form-input" 
                                    placeholder="e.g., john.doe@example.com"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required 
                                />
                            </div>
                        </div>
                        <div className="form-group">
                             <label htmlFor="message" className="form-label">Message</label>
                            <textarea 
                                id="message"
                                name="message" 
                                className="form-textarea" 
                                placeholder="Tell me about your project..."
                                rows={5}
                                value={formData.message}
                                onChange={handleInputChange}
                                required>
                            </textarea>
                        </div>
                        <button type="submit" className="btn btn-primary form-submit-btn">Send Message</button>
                        {statusMessage && <p className="form-status-message">{statusMessage}</p>}
                    </form>

                    <div className="hero-socials footer-socials">
                        <a href="https://www.linkedin.com/in/ayaz-aftab-digital-marketing-specialist" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                        <a href="#" className="social-link" aria-label="Twitter"><Icon name="twitter" /></a>
                        <a href="#" className="social-link" aria-label="Github"><Icon name="github" /></a>
                    </div>
                </div>
                <div className="footer-bottom">
                     <a href="#" className="logo-container" aria-label="Back to top">
                        <Logo />
                    </a>
                    <p className="copyright">&copy; {new Date().getFullYear()} Ayaz Aftab</p>
                </div>
             </AnimatedSection>
        </footer>
    );
};

const ProjectModal = ({ project, onClose }: { project: any; onClose: () => void }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => setCurrentImageIndex((i) => (i + 1) % project.visuals.length);
    const prevImage = () => setCurrentImageIndex((i) => (i - 1 + project.visuals.length) % project.visuals.length);

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
           if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose} aria-label="Close project details"><Icon name="x" /></button>
                <div className="modal-body">
                     <div className="modal-header">
                        <h2 className="section-title">{project.title}</h2>
                        <p className="project-client">{project.client}</p>
                    </div>

                    <div className="modal-grid">
                        <div className="modal-main-content">
                            <div className="modal-section">
                                <h3 className="modal-section-title">Challenge</h3>
                                <p>{project.challenge}</p>
                            </div>

                             <div className="modal-section">
                                <h3 className="modal-section-title">My Role</h3>
                                <p>{project.role}</p>
                            </div>

                             <div className="modal-section">
                                <h3 className="modal-section-title">Strategy</h3>
                                <p>{project.strategy}</p>
                            </div>

                            <div className="modal-section">
                                <h3 className="modal-section-title">Execution</h3>
                                <p>{project.execution}</p>
                            </div>
                             {project.testimonial && (
                                 <div className="modal-section">
                                    <h3 className="modal-section-title">Testimonial</h3>
                                    <blockquote className="testimonial-quote">"{project.testimonial}"</blockquote>
                                </div>
                            )}
                        </div>
                        <div className="modal-sidebar">
                             <div className="modal-section">
                                <h3 className="modal-section-title">Key Results</h3>
                                <ul className="modal-results-list">
                                    {project.results.map((result: string, index: number) => (
                                        <li key={index} className="modal-result-item">
                                            <Icon name="check-circle" size={16} />
                                            <span>{result}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                              {project.liveLink && project.liveLink !== '#' && (
                                <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View Live Project</a>
                            )}
                        </div>
                    </div>
                    
                    {project.visuals && project.visuals.length > 0 && (
                        <div className="modal-section">
                            <h3 className="modal-section-title">Visuals</h3>
                            <div className="carousel">
                                <img 
                                    src={project.visuals[currentImageIndex]} 
                                    alt={`Visual for ${project.title} - ${currentImageIndex + 1}`} 
                                    className="carousel-image"
                                    loading="lazy"
                                    width="800"
                                    height="450"
                                />
                                {project.visuals.length > 1 && (
                                    <>
                                        <button onClick={prevImage} className="carousel-btn prev" aria-label="Previous image"><Icon name="chevron-left" /></button>
                                        <button onClick={nextImage} className="carousel-btn next" aria-label="Next image"><Icon name="chevron-right" /></button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};


const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        // @ts-ignore
        if (window.feather) {
            // @ts-ignore
            feather.replace();
        }
    });

    useEffect(() => {
        if (isMenuOpen || selectedProject) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        
        // Cleanup function
        return () => document.body.classList.remove('no-scroll');

    }, [isMenuOpen, selectedProject]);

    const handleProjectClick = (project: any) => setSelectedProject(project);
    const handleCloseModal = () => setSelectedProject(null);

    return (
        <>
            <Header onMenuClick={() => setIsMenuOpen(true)} />
            <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <main>
                <Hero />
                <ProvenImpact />
                <FeaturedProjects onProjectClick={handleProjectClick} />
                <Testimonials onProjectClick={handleProjectClick} />
                <Education />
                <Skills />
            </main>
            <Footer />
            {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
        </>
    );
};

const container = document.getElementById('root');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}