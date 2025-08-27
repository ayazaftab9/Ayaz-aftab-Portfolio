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
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=JC',
    keyResult: '₹7.95 Lakhs Revenue',
    challenge: 'To establish a strong eCommerce presence and generate revenue through multiple online channels including Amazon and direct-to-consumer.',
    role: 'As the lead Digital Marketing Executive, I was responsible for end-to-end eCommerce strategy, PPC campaign management, and SEO.',
    strategy: 'A multi-pronged approach was developed focusing on (1) optimizing Amazon listings for visibility, (2) running targeted Google Ads to capture high-intent buyers, and (3) building organic traffic through content marketing.',
    execution: 'Launched and managed Google Ads campaigns with a focus on ROAS. Optimized product pages on Amazon with A+ content. Executed a content strategy that led to a 30% increase in organic traffic.',
    results: [
      'Drove ₹7.95 Lakhs in Amazon Sales',
      'Generated 34,900+ Clicks from Google Ads',
      'Increased organic website traffic by 30%',
      'Grew YouTube channel to 247,000+ views'
    ],
    testimonial: 'Ayaz’s strategies were instrumental in our online growth. His expertise in both paid and organic channels delivered exceptional results.',
    visuals: [
        'https://placehold.co/800x450/000000/FFFFFF/png?text=Dashboard',
        'https://placehold.co/800x450/000000/FFFFFF/png?text=Ad+Creative',
        'https://placehold.co/800x450/000000/FFFFFF/png?text=Analytics'
    ],
    liveLink: '#',
  },
  {
    id: 2,
    client: 'MTEI Services',
    title: 'High-Volume Lead Generation Engine',
    imageUrl: 'https://placehold.co/600x400/000000/FFFFFF/png?text=MTEI',
    keyResult: '9,452 Qualified Leads',
    challenge: 'The primary goal was to generate a high volume of qualified leads for student admissions at a low Cost Per Lead (CPL).',
    role: 'I served as a Freelance Digital Marketing Specialist, focusing on Meta Ads and content strategy.',
    strategy: 'Utilized Meta Ads with precise audience targeting and compelling ad creatives. A/B tested various ad formats and landing pages to optimize for conversions.',
    execution: 'Managed a significant ad budget on Meta platforms, continuously monitoring and optimizing campaigns. Developed lead magnets and content funnels to nurture potential leads.',
    results: [
      'Generated 9,452 qualified student leads',
      'Achieved a low ₹49.86 Cost Per Lead',
      'Optimized ad creatives for higher engagement',
      'Improved landing page conversion rates'
    ],
    testimonial: 'The lead generation campaigns run by Ayaz were a game-changer for our admissions cycle. The volume and quality of leads exceeded our expectations.',
    visuals: ['https://placehold.co/800x450/000000/FFFFFF/png?text=Meta+Ads+Manager'],
    liveLink: '#',
  },
];

const testimonialsData = [
    {
        projectId: 1,
        logoUrl: 'https://placehold.co/100x40/000000/FFFFFF/png?text=Jaffri',
        quote: 'Ayaz’s strategies were instrumental in our online growth. His expertise in both paid and organic channels delivered exceptional results, helping us achieve significant revenue milestones and expand our digital footprint.',
        author: 'Jaffri',
        title: 'Founder, Jaffri Creations'
    }
];

// --- UTILITY COMPONENTS ---

const Icon = ({ name, size = 24 }: { name: string; size?: number }) => (
    <i data-feather={name} width={size} height={size}></i>
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
                    <span className="logo-icon">A</span>
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
    if (!isOpen) return null;
    return (
        <div className="off-canvas-menu-overlay" onClick={onClose}>
            <div className={`off-canvas-menu ${isOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button onClick={onClose} className="close-menu-btn" aria-label="Close menu">
                    <Icon name="x" />
                </button>
                <nav className="menu-links">
                    <a href="#projects" onClick={onClose} className="menu-link">Projects</a>
                    <a href="#skills" onClick={onClose} className="menu-link">Skills</a>
                    <a href="#contact" onClick={onClose} className="menu-link">Contact</a>
                </nav>
                <a href="#" className="btn btn-primary menu-resume-btn">Download Resume</a>
            </div>
        </div>
    );
};

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const specializations = ['SEO Strategy', 'PPC Campaigns', 'eCommerce Management', 'Lead Generation'];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delay = 2000;

    useEffect(() => {
        let specIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        // Fix: Use ReturnType<typeof setTimeout> for timeout ID type, as NodeJS.Timeout is not available in browser environments.
        let timeoutId: ReturnType<typeof setTimeout>;

        const type = () => {
            const currentSpec = specializations[specIndex];
            if (isDeleting) {
                setTypedText(currentSpec.substring(0, charIndex - 1));
                charIndex--;
                if (charIndex === 0) {
                    isDeleting = false;
                    specIndex = (specIndex + 1) % specializations.length;
                }
            } else {
                setTypedText(currentSpec.substring(0, charIndex + 1));
                charIndex++;
                if (charIndex === currentSpec.length) {
                    isDeleting = true;
                    timeoutId = setTimeout(() => type(), delay);
                    return;
                }
            }
            timeoutId = setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        };
        timeoutId = setTimeout(type, typingSpeed);
        return () => clearTimeout(timeoutId);
    }, []);
    
    return (
        <section className="hero">
            <AnimatedSection className="container">
                <span className="hero-tag">5+ Years of Experience</span>
                <h1 className="hero-headline">Ayaz Aftab</h1>
                <h2 className="hero-subheadline">
                    I specialize in {typedText}
                    <span className="typing-cursor"></span>
                </h2>
                <p className="hero-summary">
                    I architect and execute full-funnel strategies that generate leads, boost sales, and enhance brand authority across multiple digital marketing channels.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                </div>
                <div className="hero-socials">
                    <a href="mailto:ayazaftab9@gmail.com" className="social-link"><Icon name="mail" /></a>
                    <a href="https://www.linkedin.com/in/ayaz-aftab-dm" target="_blank" rel="noopener noreferrer" className="social-link"><Icon name="linkedin" /></a>
                    <a href="#" className="social-link"><Icon name="twitter" /></a>
                    <a href="#" className="social-link"><Icon name="github" /></a>
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
                <div className="impact-card">
                    <Icon name="users" size={32} />
                    <p className="impact-metric">15,000+</p>
                    <p className="impact-label">Leads Generated</p>
                </div>
                <div className="impact-card">
                    <p className="impact-metric">₹7.95 L+</p>
                    <p className="impact-label">eCommerce Revenue</p>
                </div>
                <div className="impact-card">
                     <Icon name="trending-up" size={32} />
                    <p className="impact-metric">+20%</p>
                    <p className="impact-label">Avg. Client Acquisition</p>
                </div>
                <div className="impact-card">
                    <Icon name="map-pin" size={32} />
                    <p className="impact-metric">1,300+</p>
                    <p className="impact-label">Local Customer Actions</p>
                </div>
            </div>
        </AnimatedSection>
    </section>
);

const FeaturedProjects = ({ onProjectClick }: { onProjectClick: (project: any) => void }) => (
    <section id="projects">
        <AnimatedSection className="container">
            <div className="projects-header">
                <h2 className="projects-title">Featured Projects</h2>
                <a href="#" className="view-all-link">View All Case Studies &rarr;</a>
            </div>
            <div className="projects-grid">
                {projectsData.map(project => (
                    <div className="project-card" key={project.id} onClick={() => onProjectClick(project)}>
                        <img src={project.imageUrl} alt={project.title} className="project-image" />
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
                            <img src={testimonial.logoUrl} alt="Client Logo" className="testimonial-logo" />
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
                            <a href="#" onClick={(e) => { e.preventDefault(); onProjectClick(projectsData.find(p => p.id === testimonial.projectId));}} className="view-all-link">
                                View Project &rarr;
                            </a>
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
            <div className="section-header">
                <h2 className="section-title">Skills & Certifications</h2>
            </div>
            <div className="skills-grid">
                <div className="skills-category">
                    <div className="skills-header"><Icon name="star" /> <h3 className="skills-title">Core Competencies</h3></div>
                    <ul className="skills-list">
                        {['Digital Marketing Strategy', 'PPC Campaigns', 'eCommerce Management', 'SEO', 'Lead Generation', 'CRO', 'Data Analysis'].map(s => <li key={s} className="skill-item">{s}</li>)}
                    </ul>
                </div>
                <div className="skills-category">
                     <div className="skills-header"><Icon name="tool" /> <h3 className="skills-title">Technical Stack</h3></div>
                    <ul className="skills-list">
                        {['Google Ads', 'Meta Ads', 'Amazon Seller Central', 'SEMrush/Ahrefs/Moz', 'Google Analytics (GA4)', 'Google Tag Manager', 'Shopify', 'CRM (HubSpot, Zoho)'].map(s => <li key={s} className="skill-item">{s}</li>)}
                    </ul>
                </div>
                <div className="skills-category">
                    <div className="skills-header"><Icon name="award" /> <h3 className="skills-title">Certifications</h3></div>
                    <ul className="skills-list">
                        {['Google Ads Certified', 'Google Analytics IQ Certified', 'HubSpot Inbound Marketing', 'Meta Certified', 'SEMrush SEO Toolkit', 'Shopify Product Fundamentals'].map(s => <li key={s} className="skill-item">{s}</li>)}
                    </ul>
                </div>
            </div>
        </AnimatedSection>
    </section>
);

const Footer = () => (
    <footer id="contact" className="footer">
         <AnimatedSection className="container">
            <div className="section-header">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Have a project in mind or a full-time role to discuss? Let's connect. <br/> The fastest way to get in touch is to book a call.</p>
            </div>
            <a href="#" className="btn btn-primary">Book an Introductory Call</a>
            <div className="hero-socials footer-socials">
                <a href="mailto:ayazaftab9@gmail.com" className="social-link"><Icon name="mail" /></a>
                <a href="https://www.linkedin.com/in/ayaz-aftab-dm" target="_blank" rel="noopener noreferrer" className="social-link"><Icon name="linkedin" /></a>
                <a href="#" className="social-link"><Icon name="twitter" /></a>
                <a href="#" className="social-link"><Icon name="github" /></a>
            </div>
            <p className="copyright">&copy; {new Date().getFullYear()} Ayaz Aftab Portfolio</p>
         </AnimatedSection>
    </footer>
);

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

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose} aria-label="Close project details"><Icon name="x" /></button>
                <img src={project.imageUrl} alt={project.title} className="modal-header-image" />
                <div className="modal-body">
                    <h2 className="section-title">{project.title}</h2>
                    <p className="section-subtitle">{project.client}</p>
                    
                    <div className="modal-section">
                        <h3 className="modal-section-title">The Challenge</h3>
                        <p className="text-secondary">{project.challenge}</p>
                    </div>
                     <div className="modal-section">
                        <h3 className="modal-section-title">My Role</h3>
                        <p className="text-secondary">{project.role}</p>
                    </div>
                     <div className="modal-section">
                        <h3 className="modal-section-title">Strategy & Execution</h3>
                        <p className="text-secondary">{project.strategy}</p>
                        <br/>
                        <p className="text-secondary">{project.execution}</p>
                    </div>
                     <div className="modal-section">
                        <h3 className="modal-section-title">Results</h3>
                        <ul className="modal-results-list">
                            {project.results.map((result: string) => (
                                <li key={result} className="modal-result-item"><Icon name="check-circle" size={20} /> <span>{result}</span></li>
                            ))}
                        </ul>
                    </div>
                     <div className="modal-section">
                        <h3 className="modal-section-title">Client Testimonial</h3>
                        <p className="testimonial-quote">"{project.testimonial}"</p>
                    </div>
                     <div className="modal-section">
                        <h3 className="modal-section-title">Visual Proof</h3>
                        <div className="carousel">
                           <img src={project.visuals[currentImageIndex]} alt="Project visual" className="carousel-image"/>
                           {project.visuals.length > 1 && <>
                                <button className="carousel-btn prev" onClick={prevImage}><Icon name="chevron-left" /></button>
                                <button className="carousel-btn next" onClick={nextImage}><Icon name="chevron-right" /></button>
                           </>}
                        </div>
                    </div>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Live Project</a>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        (window as any).feather?.replace();
    }, [isMenuOpen, selectedProject]);

    return (
        <>
            <Header onMenuClick={() => setIsMenuOpen(true)} />
            <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <main>
                <Hero />
                <ProvenImpact />
                <FeaturedProjects onProjectClick={setSelectedProject} />
                <Testimonials onProjectClick={setSelectedProject} />
                <Skills />
            </main>
            <Footer />
            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </>
    );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
