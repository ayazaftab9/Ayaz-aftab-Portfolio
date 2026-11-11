import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';

// --- TYPES ---
interface Project {
  id: number;
  slug: string;
  category: 'ecommerce' | 'ppc' | 'seo';
  client: string;
  title: string;
  imageUrl: string;
  keyResult: string;
  summary: string;
  tags: string[];
  challenge: string;
  role: string;
  strategy: string;
  execution: string;
  results: string[];
  testimonial: string;
  visuals: string[];
}

// --- DATA ---
const projectsData: Project[] = [
  {
    id: 1,
    slug: 'jaffri-creations-ecommerce-ppc-seo',
    category: 'ecommerce',
    client: 'Jaffri Creations',
    title: 'Multi-Platform eCommerce & Google Ads Revenue Growth',
    imageUrl: '/images/case-study-jaffri-ecommerce.svg',
    keyResult: '₹7.95 Lakhs Revenue',
    summary: 'Scaled multi-channel eCommerce revenue across Amazon Seller Central, high-intent Google Search & Shopping Ads, and Technical/Local SEO.',
    tags: ['Amazon Seller Central', 'Google Ads (PPC)', 'Technical SEO', 'Local SEO (GBP)', 'A+ Content'],
    challenge: 'To establish a profitable multi-channel eCommerce presence and capture high-intent commercial buyers across both Amazon Marketplace and direct-to-consumer search.',
    role: 'As the Lead Digital Marketing Executive, I owned end-to-end eCommerce growth strategy, Amazon catalog optimization, Google Ads PPC management, and organic search acquisition.',
    strategy: 'Developed a three-pillar growth engine: (1) optimizing Amazon Seller Central product listings with keyword-indexed A+ content, (2) running ROAS-focused Google Search & Shopping Ads to capture commercial intent, and (3) scaling non-paid search visibility via on-page and Local SEO.',
    execution: 'Restructured Google Ads campaigns with exact/phrase match keyword segmentation and negative keyword sculpting. Overhauled Amazon product detail pages with enhanced brand visuals and backend search terms. Executed a technical and content SEO roadmap alongside Google Business Profile optimization.',
    results: [
      'Drove ₹7.95 Lakhs in verified Amazon Marketplace sales',
      'Generated 34,900+ high-intent commercial clicks via Google Ads',
      'Increased organic website search traffic by +30%',
      'Converted high-ticket B2B & D2C leads valued between ₹5 Lakhs and ₹13 Lakhs',
      'Generated 1,465+ verified local customer interactions via Google Business Profile'
    ],
    testimonial: 'Ayaz’s strategies were instrumental in our online growth. His expertise in both paid and organic channels delivered exceptional results.',
    visuals: [
      '/images/case-study-jaffri-ecommerce.svg',
      '/images/case-study-jaffri-ads.svg',
      '/images/case-study-jaffri-seo.svg'
    ],
  },
  {
    id: 2,
    slug: 'mtei-services-meta-ads-lead-generation',
    category: 'ppc',
    client: 'MTEI Services',
    title: 'High-Volume Meta Ads Lead Generation Engine',
    imageUrl: '/images/case-study-mtei-leads.svg',
    keyResult: '9,452 Qualified Leads',
    summary: 'Engineered a full-funnel paid social lead acquisition system on Meta Ads, delivering 9,452 student admissions leads at an ultra-low ₹49.86 CPL.',
    tags: ['Meta Ads', 'Lead Generation', 'Conversion Rate Optimization', 'A/B Testing', 'Audience Funnel'],
    challenge: 'To generate a high volume of qualified student admissions inquiries within strict cost-per-acquisition targets during peak enrollment cycles.',
    role: 'Served as Freelance Performance Marketing Specialist responsible for Meta Ads campaign architecture, creative testing, and landing page conversion rate optimization (CRO).',
    strategy: 'Built segmented Meta Ads campaigns combining custom lookalike audiences, regional demographic targeting, and high-converting instant forms paired with optimized landing pages.',
    execution: 'Managed ₹4.7 Lakhs in paid social ad spend across a 7-month campaign window. Conducted continuous multivariate testing on ad hooks, video/static creatives, and lead capture forms to minimize lead fatigue and compress CPL.',
    results: [
      'Generated 9,452 qualified student admissions leads',
      'Achieved an industry-leading ₹49.86 average Cost Per Lead (CPL)',
      'Managed ₹4.7 Lakhs in Meta Ads spend with positive ROI over 7 months',
      'Lifted landing page lead-submission conversion rates via iterative CRO'
    ],
    testimonial: 'The lead generation campaigns run by Ayaz were a game-changer for our admissions cycle. The volume and quality of leads exceeded our expectations.',
    visuals: ['/images/case-study-mtei-leads.svg'],
  },
  {
    id: 3,
    slug: 'jaffri-creations-youtube-seo-organic-growth',
    category: 'seo',
    client: 'Jaffri Creations',
    title: 'YouTube SEO & Organic Brand Authority Growth',
    imageUrl: '/images/case-study-youtube-growth.svg',
    keyResult: '247,000+ Organic Views',
    summary: 'Built an organic video search engine from scratch using YouTube SEO, keyword trend mapping, and retention-focused content structuring.',
    tags: ['YouTube SEO', 'Video Content Strategy', 'Keyword Research', 'Organic Discovery', 'Brand Authority'],
    challenge: 'To build sustainable top-of-funnel brand authority and product discovery without relying on paid video advertising.',
    role: 'Managed end-to-end YouTube channel growth, search trend analysis, metadata optimization, thumbnail CTR testing, and audience retention analytics.',
    strategy: 'Targeted high-search-volume, low-competition commercial video topics using Semrush and YouTube Search Trends, optimizing titles, descriptions, chapters, and tags for long-tail discovery.',
    execution: 'Published a consistent cadence of search-optimized product and educational videos, improving click-through rates (CTR) and average view duration to trigger algorithmic recommendations.',
    results: [
      'Accumulated 247,000+ organic video views with zero paid promotion',
      'Generated 5,200+ hours of high-retention organic watch time',
      'Established YouTube Search as a primary top-of-funnel brand discovery channel',
      'Strengthened brand trust and assisted direct eCommerce conversions'
    ],
    testimonial: "Ayaz's work on our YouTube channel has been phenomenal. He built it from the ground up into a significant source of brand discovery for us.",
    visuals: ['/images/case-study-youtube-growth.svg'],
  },
];

const testimonialsData = [
  {
    projectId: 1,
    logoUrl: '/images/logo-jaffri.svg',
    quote: 'Ayaz’s strategies were instrumental in our online growth. His expertise in both paid and organic channels delivered exceptional results, helping us achieve significant revenue milestones and expand our digital footprint.',
    author: 'Jaffri',
    title: 'Founder, Jaffri Creations'
  },
  {
    projectId: 2,
    logoUrl: '/images/logo-mtei.svg',
    quote: 'The lead generation campaigns run by Ayaz were a game-changer. The sheer volume and quality of qualified leads exceeded our expectations, all while maintaining an impressively low cost-per-lead.',
    author: 'Admissions Director',
    title: 'MTEI Services'
  }
];

const processStepsData = [
  {
    step: '01 / Audit & Intelligence',
    title: 'Technical SEO & Funnel Diagnostics',
    description: 'Deep-dive audit of search visibility, competitor keyword gaps (Semrush), GA4 & Google Tag Manager event tracking, and conversion bottlenecks.'
  },
  {
    step: '02 / Strategy & Architecture',
    title: 'Full-Funnel Channel Roadmapping',
    description: 'Structuring high-intent Google Search/Shopping campaigns, Meta Ads audience funnels, and Amazon Seller Central catalog architecture.'
  },
  {
    step: '03 / Execution & CRO',
    title: 'High-Velocity Campaign & Page Optimization',
    description: 'Launching A/B tested ad creatives, keyword-indexed landing pages, Amazon A+ content, and technical on-page SEO improvements.'
  },
  {
    step: '04 / Attribution & Scale',
    title: 'ROAS & CPL Performance Scaling',
    description: 'Continuous bid optimization, negative keyword sculpting, and transparent reporting tied directly to qualified pipeline and revenue.'
  }
];

const servicesData = [
  {
    id: 'service-full-time',
    title: 'Full-Time Roles',
    description: 'Seeking a permanent role as a Digital Marketing Manager, Performance Marketing Specialist, or eCommerce Strategist. I integrate seamlessly with product and sales teams to own full-funnel acquisition, SEO, PPC, and marketplace revenue.',
    items: [
      'End-to-End Go-to-Market & Growth Strategy',
      'Amazon Seller Central & D2C eCommerce Management',
      'Multi-Channel Paid Media (Google & Meta Ads)',
      'GA4 Attribution, Reporting & Team Collaboration'
    ],
    cta: 'Download Resume (PDF)',
    href: '/resume.pdf',
    icon: 'download',
    download: true,
  },
  {
    id: 'service-freelance',
    title: 'Freelance Projects',
    description: 'Available for high-impact project engagements. Whether you need a high-converting Google Ads or Meta Ads funnel, a comprehensive Technical & Local SEO audit, or Amazon listing optimization, I deliver measurable ROI.',
    items: [
      'Google Ads & Meta Ads Setup & Management',
      'Technical, On-Page & Local SEO (GBP) Audits',
      'Conversion Rate Optimization (CRO) & Landing Pages',
      'Amazon A+ Listing & Marketplace Growth'
    ],
    cta: 'Discuss a Project',
    href: '#contact',
    icon: 'arrow-right'
  },
  {
    id: 'service-consulting',
    title: 'Consulting & Retainers',
    description: 'Ongoing strategic advisory for founders and marketing teams looking to lower their Cost Per Lead (CPL), scale Return on Ad Spend (ROAS), and build compounding organic search traffic.',
    items: [
      'Monthly Growth & Channel Strategy Audits',
      'Ad Spend Efficiency & Bid Optimization',
      'Search Console, GA4 & Tag Manager Setup',
      'YouTube SEO & Content Funnel Architecture'
    ],
    cta: 'Book a Strategy Call',
    href: '#contact',
    icon: 'arrow-right'
  }
];

const faqData = [
  {
    id: 'faq-channels',
    question: 'What digital marketing and eCommerce channels does Ayaz Aftab specialize in?',
    answer: 'Ayaz specializes in full-funnel Digital Marketing and eCommerce growth, including Technical & On-Page SEO, Local SEO (Google Business Profile), Google Ads (Search, Shopping, Performance Max), Meta Ads (Facebook & Instagram lead generation), Amazon Seller Central (catalog management & A+ Content), YouTube SEO, and Conversion Rate Optimization (CRO).'
  },
  {
    id: 'faq-results',
    question: 'What measurable results and ROI has Ayaz achieved for clients?',
    answer: 'Across 5+ years of hands-on execution, Ayaz has generated over 15,000+ qualified leads (including 9,452 student admissions leads at a ₹49.86 CPL for MTEI Services), driven ₹7.95 Lakhs+ in Amazon Marketplace revenue and 34,900+ Google Ads clicks for Jaffri Creations, increased organic search traffic by +30%, and scaled organic YouTube channels to 247,000+ views.'
  },
  {
    id: 'faq-availability',
    question: 'Is Ayaz Aftab available for full-time roles, freelance projects, or consulting?',
    answer: 'Yes. Ayaz is actively open to full-time Digital Marketing & eCommerce Specialist roles (remote, hybrid, or on-site), as well as project-based freelance engagements and monthly growth retainers for SEO, Google Ads, Meta Ads, and Amazon eCommerce scaling.'
  },
  {
    id: 'faq-tools',
    question: 'What technical stack and analytics tools does Ayaz use?',
    answer: 'Ayaz works daily with Google Analytics 4 (GA4), Google Tag Manager (GTM), Google Search Console, Google Ads Editor, Meta Ads Manager, Semrush, Amazon Seller Central, WordPress, WooCommerce, and front-end web technologies (HTML5, CSS3, JavaScript) for technical SEO and landing page optimization.'
  },
  {
    id: 'faq-seo-methodology',
    question: 'How does Ayaz approach SEO to make websites rank on Google?',
    answer: 'Ayaz combines Technical SEO (crawlability, XML sitemaps, Schema.org JSON-LD structured data, Core Web Vitals, canonicalization), high-intent keyword research via Semrush, semantic content architecture, and Local SEO (Google Business Profile optimization) to capture both commercial buyer queries and long-tail organic search traffic.'
  }
];

// --- INLINE SVG ICON COMPONENT (Zero External Network Requests) ---
const Icon = ({ name, size = 20 }: { name: string; size?: number }) => {
  const props = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true
  };

  switch (name) {
    case 'menu':
      return <svg {...props}><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>;
    case 'x':
      return <svg {...props}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>;
    case 'check':
      return <svg {...props}><polyline points="20 6 9 17 4 12" /></svg>;
    case 'check-circle':
      return <svg {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>;
    case 'arrow-right':
      return <svg {...props}><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>;
    case 'download':
      return <svg {...props}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>;
    case 'mail':
      return <svg {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>;
    case 'linkedin':
      return <svg {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case 'github':
      return <svg {...props}><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>;
    case 'briefcase':
      return <svg {...props}><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>;
    case 'settings':
      return <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>;
    case 'bar-chart-2':
      return <svg {...props}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>;
    case 'star':
      return <svg {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>;
    case 'tool':
      return <svg {...props}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>;
    case 'award':
      return <svg {...props}><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>;
    case 'chevron-left':
      return <svg {...props}><polyline points="15 18 9 12 15 6" /></svg>;
    case 'chevron-right':
      return <svg {...props}><polyline points="9 18 15 12 9 6" /></svg>;
    case 'chevron-down':
      return <svg {...props}><polyline points="6 9 12 15 18 9" /></svg>;
    case 'help-circle':
      return <svg {...props}><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>;
    case 'copy':
      return <svg {...props}><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>;
    default:
      return null;
  }
};

const Logo = () => (
  <div className="logo-icon" aria-hidden="true">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M50 4 L0 100 H19 L50 40 L81 100 H100 L50 4 Z M50 67 L25 100 H75 L50 67 Z" />
      <path d="M50 33 L44 43 L50 53 L56 43 Z" />
    </svg>
  </div>
);

const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
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

// --- CORE SECTIONS ---

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <header className="header">
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <div className="container">
      <nav className="nav" aria-label="Primary Navigation">
        <a href="#top" id="nav-logo-link" className="logo-container">
          <Logo />
          <div className="logo-text-group">
            <span className="logo-text">Ayaz Aftab</span>
            <span className="logo-subtext">Digital Marketing &amp; eCommerce</span>
          </div>
        </a>

        <div className="desktop-nav">
          <a href="#impact" id="nav-link-impact" className="desktop-nav-link">Impact</a>
          <a href="#projects" id="nav-link-projects" className="desktop-nav-link">Case Studies</a>
          <a href="#process" id="nav-link-process" className="desktop-nav-link">Process</a>
          <a href="#services" id="nav-link-services" className="desktop-nav-link">Services</a>
          <a href="#skills" id="nav-link-skills" className="desktop-nav-link">Skills</a>
          <a href="#faq" id="nav-link-faq" className="desktop-nav-link">FAQ</a>
          <a href="#contact" id="nav-link-contact" className="desktop-nav-link">Contact</a>
        </div>

        <div className="header-actions">
          <a
            href="/resume.pdf"
            id="header-resume-btn"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary header-cta"
          >
            <Icon name="download" size={16} />
            <span>Resume PDF</span>
          </a>
          <button
            id="open-mobile-menu-btn"
            onClick={onMenuClick}
            className="menu-icon"
            aria-label="Open navigation menu"
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </nav>
    </div>
  </header>
);

const OffCanvasMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  return (
    <div
      className={`off-canvas-menu-overlay ${isOpen ? 'open' : ''}`}
      onClick={onClose}
      aria-hidden={!isOpen}
    >
      <div
        className={`off-canvas-menu ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="off-canvas-header">
          <a href="#top" className="logo-container" onClick={onClose}>
            <Logo />
            <span className="logo-text">Ayaz Aftab</span>
          </a>
          <button id="close-mobile-menu-btn" onClick={onClose} className="close-menu-btn" aria-label="Close menu">
            <Icon name="x" size={20} />
          </button>
        </div>
        <nav className="menu-links" aria-label="Mobile Navigation Links">
          <a href="#impact" onClick={onClose} className="menu-link"><Icon name="bar-chart-2" size={18} /> Proven Impact</a>
          <a href="#projects" onClick={onClose} className="menu-link"><Icon name="briefcase" size={18} /> Case Studies</a>
          <a href="#process" onClick={onClose} className="menu-link"><Icon name="tool" size={18} /> Growth Process</a>
          <a href="#services" onClick={onClose} className="menu-link"><Icon name="settings" size={18} /> Services</a>
          <a href="#skills" onClick={onClose} className="menu-link"><Icon name="award" size={18} /> Skills &amp; Certifications</a>
          <a href="#faq" onClick={onClose} className="menu-link"><Icon name="help-circle" size={18} /> FAQ</a>
          <a href="#contact" onClick={onClose} className="menu-link"><Icon name="mail" size={18} /> Contact</a>
        </nav>
        <a
          href="/resume.pdf"
          id="mobile-resume-btn"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary menu-resume-btn"
        >
          <Icon name="download" size={16} />
          <span>Download Resume (PDF)</span>
        </a>

        <div className="off-canvas-footer">
          <a href="mailto:ayazaftab9@gmail.com" className="social-link" aria-label="Email Ayaz Aftab">
            <Icon name="mail" size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayaz-aftab-digital-marketing-specialist"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Ayaz Aftab on LinkedIn"
          >
            <Icon name="linkedin" size={16} />
          </a>
          <a
            href="https://github.com/ayazaftab9"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Ayaz Aftab on GitHub"
          >
            <Icon name="github" size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const specializations = useRef([
    'SEO & Organic Search Growth',
    'Google Ads & High-ROAS PPC',
    'Amazon Seller Central & eCommerce',
    'Meta Ads Lead Generation Funnels',
    'YouTube SEO & Video Discovery',
    'Conversion Rate Optimization (CRO)'
  ]).current;

  const [index, setIndex] = useState(0);
  // Start with the first specialization fully visible for immediate SEO & LCP clarity
  const [subIndex, setSubIndex] = useState(specializations[0].length);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 75;
  const deletingSpeed = 40;
  const delay = 2400;

  useEffect(() => {
    if (subIndex === specializations[index].length && !isDeleting) {
      const timer = setTimeout(() => setIsDeleting(true), delay);
      return () => clearTimeout(timer);
    }

    if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % specializations.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prevSubIndex) => prevSubIndex + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, specializations]);

  const displayText = specializations[index].substring(0, subIndex);

  return (
    <section id="top" className="hero">
      <AnimatedSection className="container">
        <div className="hero-layout">
          <span className="hero-role-kicker">
            Digital Marketing &amp; eCommerce Growth Specialist • 5+ Years Experience
          </span>
          <h1 className="hero-headline">
            Hi, I&apos;m <span className="hero-name">Ayaz Aftab</span>.
            <span className="hero-dynamic-subheading">
              I scale revenue with <span className="typing-text">{displayText}</span>
              <span className="cursor" aria-hidden="true"></span>
            </span>
          </h1>
          <p className="hero-summary">
            Results-driven Digital Marketing &amp; eCommerce Specialist helping brands capture high-intent search traffic, lower Cost Per Lead (CPL), and scale marketplace sales across <strong>Google Ads</strong>, <strong>Meta Ads</strong>, <strong>Technical SEO</strong>, and <strong>Amazon Seller Central</strong>.
          </p>

          <ul className="hero-highlights" aria-label="Key Credentials">
            <li className="hero-highlight-item">
              <Icon name="check-circle" size={16} />
              <span>Google &amp; Semrush Certified</span>
            </li>
            <li className="hero-highlight-item">
              <Icon name="check-circle" size={16} />
              <span>15,000+ Verified Leads Generated</span>
            </li>
            <li className="hero-highlight-item">
              <Icon name="check-circle" size={16} />
              <span>₹7.95L+ Amazon Marketplace Sales</span>
            </li>
          </ul>

          <div className="hero-cta">
            <a href="#projects" id="hero-cta-projects" className="btn btn-primary">
              <span>Explore Case Studies</span>
              <Icon name="arrow-right" size={16} />
            </a>
            <a href="#contact" id="hero-cta-contact" className="btn btn-secondary">
              <span>Request a Growth Audit</span>
            </a>
            <a
              href="/resume.pdf"
              id="hero-cta-resume"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              <Icon name="download" size={16} />
              <span>Download Resume</span>
            </a>
          </div>

          <div className="hero-socials">
            <a href="mailto:ayazaftab9@gmail.com" id="hero-social-email" className="social-link">
              <Icon name="mail" size={16} />
              <span>ayazaftab9@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ayaz-aftab-digital-marketing-specialist"
              id="hero-social-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Icon name="linkedin" size={16} />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://github.com/ayazaftab9"
              id="hero-social-github"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Icon name="github" size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

const ProvenImpact = () => (
  <section id="impact" className="section-alt" aria-labelledby="impact-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Verified Performance Metrics</span>
        <h2 id="impact-heading" className="section-title">Proven Marketing &amp; Revenue Impact</h2>
        <p className="section-subtitle">
          Measurable business outcomes delivered across paid acquisition, marketplace optimization, and organic search.
        </p>
      </div>
      <div className="impact-grid">
        <div className="info-card">
          <div>
            <p className="impact-metric">15,000+</p>
            <p className="impact-label">Qualified Leads Generated</p>
          </div>
          <p className="impact-context">
            Includes 9,452 student admissions leads at ₹49.86 CPL via Meta Ads funnels.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">₹7.95 L+</p>
            <p className="impact-label">Amazon Marketplace Sales</p>
          </div>
          <p className="impact-context">
            Driven through Seller Central catalog optimization, A+ content &amp; targeted PPC.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">+30%</p>
            <p className="impact-label">Organic Search Traffic Growth</p>
          </div>
          <p className="impact-context">
            Backed by 34,900+ Google Ads clicks &amp; 1,465+ Google Business Profile actions.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">247,000+</p>
            <p className="impact-label">Organic YouTube Views</p>
          </div>
          <p className="impact-context">
            5,200+ hours of watch time built from scratch through YouTube search SEO.
          </p>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

const FeaturedProjects = ({ onProjectClick }: { onProjectClick: (project: Project) => void }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ecommerce' | 'ppc' | 'seo'>('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <AnimatedSection className="container">
        <div className="section-header">
          <span className="section-eyebrow">Portfolio &amp; Case Studies</span>
          <h2 id="projects-heading" className="section-title">Featured Digital Marketing Case Studies</h2>
          <p className="section-subtitle">
            Explore how I architect and execute multi-channel SEO, Google Ads, Meta Ads, and Amazon eCommerce strategies that turn ad spend and search intent into revenue.
          </p>
        </div>

        <div className="filter-tabs" role="tablist" aria-label="Filter case studies by channel">
          <button
            id="filter-all"
            type="button"
            role="tab"
            aria-selected={activeFilter === 'all'}
            className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Case Studies ({projectsData.length})
          </button>
          <button
            id="filter-ecommerce"
            type="button"
            role="tab"
            aria-selected={activeFilter === 'ecommerce'}
            className={`filter-tab ${activeFilter === 'ecommerce' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ecommerce')}
          >
            eCommerce &amp; Amazon
          </button>
          <button
            id="filter-ppc"
            type="button"
            role="tab"
            aria-selected={activeFilter === 'ppc'}
            className={`filter-tab ${activeFilter === 'ppc' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ppc')}
          >
            Paid Acquisition (PPC)
          </button>
          <button
            id="filter-seo"
            type="button"
            role="tab"
            aria-selected={activeFilter === 'seo'}
            className={`filter-tab ${activeFilter === 'seo' ? 'active' : ''}`}
            onClick={() => setActiveFilter('seo')}
          >
            Organic &amp; YouTube SEO
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article
              id={`case-study-${project.id}`}
              className="project-card"
              key={project.id}
            >
              <div className="project-image-container">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} — ${project.client} (${project.keyResult})`}
                  className="project-image"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </div>
              <div className="project-content">
                <div className="project-meta-row">
                  <span className="project-client">{project.client}</span>
                  <span className="project-badge">{project.keyResult}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <ul className="project-highlights" aria-label={`Key results for ${project.title}`}>
                  {project.results.slice(0, 3).map((res, idx) => (
                    <li key={idx} className="project-highlight-item">
                      <Icon name="check" size={15} />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>

                <button
                  id={`open-case-study-${project.id}`}
                  type="button"
                  onClick={() => onProjectClick(project)}
                  className="btn btn-secondary project-card-btn"
                >
                  <span>Read Full Case Study</span>
                  <Icon name="arrow-right" size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

const GrowthProcess = () => (
  <section id="process" className="section-alt" aria-labelledby="process-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Methodology &amp; Execution</span>
        <h2 id="process-heading" className="section-title">How I Scale Search Rankings &amp; Paid ROI</h2>
        <p className="section-subtitle">
          A systematic, data-backed framework designed to compound organic search authority while maximizing immediate return on ad spend.
        </p>
      </div>
      <div className="process-grid">
        {processStepsData.map((item) => (
          <div className="process-card" key={item.step}>
            <span className="process-step-num">{item.step}</span>
            <h3 className="process-title">{item.title}</h3>
            <p className="process-description">{item.description}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </section>
);

const Services = () => (
  <section id="services" aria-labelledby="services-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Services &amp; Engagement Models</span>
        <h2 id="services-heading" className="section-title">Digital Marketing &amp; eCommerce Services</h2>
        <p className="section-subtitle">
          Whether you are hiring a dedicated full-time Digital Marketing Specialist or need a high-converting SEO, PPC, or Amazon growth partner, here is how we can work together.
        </p>
      </div>
      <div className="services-grid">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
            <ul className="service-list">
              {service.items.map((item, i) => (
                <li key={i} className="service-list-item">
                  <Icon name="check" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              id={`${service.id}-cta`}
              href={service.href}
              className="btn btn-secondary service-card-btn"
              {...(service.download && { download: true, target: '_blank', rel: 'noopener noreferrer' })}
            >
              <span>{service.cta}</span>
              <Icon name={service.icon} size={16} />
            </a>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </section>
);

const Testimonials = ({ onProjectClick }: { onProjectClick: (project: Project) => void }) => (
  <section id="testimonials" className="section-alt" aria-labelledby="testimonials-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Client Endorsements</span>
        <h2 id="testimonials-heading" className="section-title">What Clients &amp; Partners Say</h2>
        <p className="section-subtitle">
          Feedback from founders and admissions leaders on revenue generation, lead quality, and execution speed.
        </p>
      </div>
      <div className="testimonials-list">
        {testimonialsData.map((testimonial) => {
          const linkedProject = projectsData.find((p) => p.id === testimonial.projectId);
          return (
            <div className="testimonial-card" key={testimonial.projectId}>
              <div>
                <div className="testimonial-header">
                  <img
                    src={testimonial.logoUrl}
                    alt={`${testimonial.author} — ${testimonial.title}`}
                    className="testimonial-logo"
                    width="160"
                    height="40"
                    loading="lazy"
                  />
                  <div className="stars" aria-label="5 out of 5 stars">
                    ★★★★★
                  </div>
                </div>
                <p className="testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
              <div className="testimonial-footer">
                <div>
                  <p className="testimonial-author-name">{testimonial.author}</p>
                  <p className="testimonial-author-title">{testimonial.title}</p>
                </div>
                {linkedProject && (
                  <button
                    id={`testimonial-view-project-${testimonial.projectId}`}
                    type="button"
                    onClick={() => onProjectClick(linkedProject)}
                    className="view-project-link"
                  >
                    <span>View Case Study</span>
                    <Icon name="arrow-right" size={14} />
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  </section>
);

const Skills = () => (
  <section id="skills" aria-labelledby="skills-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Capabilities &amp; Credentials</span>
        <h2 id="skills-heading" className="section-title">Skills, Tech Stack &amp; Certifications</h2>
        <p className="section-subtitle">
          Combining certified digital marketing expertise with technical web &amp; analytics implementation.
        </p>
      </div>
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skills-header">
            <Icon name="star" size={20} />
            <h3 className="skills-title">Core Marketing Competencies</h3>
          </div>
          <ul className="skills-list">
            {[
              'Technical & On-Page SEO',
              'Local SEO (GBP)',
              'Google Ads (Search & Shopping)',
              'Meta Ads (Facebook & Instagram)',
              'Performance Marketing',
              'eCommerce Management',
              'Amazon Seller Central & A+ Content',
              'YouTube SEO & Video Marketing',
              'Conversion Rate Optimization (CRO)',
              'Content Strategy',
              'CRM & Lead Funnel Integration',
              'SEM & Keyword Research'
            ].map((s) => (
              <li key={s} className="skill-item">{s}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card">
          <div className="skills-header">
            <Icon name="tool" size={20} />
            <h3 className="skills-title">Analytics &amp; Technical Stack</h3>
          </div>
          <ul className="skills-list">
            {[
              'Google Analytics 4 (GA4)',
              'Google Tag Manager (GTM)',
              'Google Search Console',
              'Semrush SEO Suite',
              'Amazon Seller Central',
              'Google Business Profile',
              'WordPress & WooCommerce',
              'HTML5 & Semantic Markup',
              'CSS3 & Responsive UI',
              'JavaScript',
              'Schema.org JSON-LD',
              'A/B Testing & Heatmaps'
            ].map((s) => (
              <li key={s} className="skill-item">{s}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card certifications-card">
          <div className="skills-header">
            <Icon name="award" size={20} />
            <h3 className="skills-title">Verified Certifications</h3>
          </div>
          <div className="certifications-list">
            <p className="certification-group">
              <strong>Google Certified:</strong> The Fundamentals of Digital Marketing, Google Ads, Google Analytics, AI-Powered Performance Ads, AI-Powered Shopping Ads, Conversion Optimization.
            </p>
            <p className="certification-group">
              <strong>Semrush Academy:</strong> Semrush SEO Certification, Mastering YouTube Search Trends &amp; SEO Strategies.
            </p>
            <p className="certification-group">
              <strong>YouTube Certified:</strong> YouTube Music Certification, YouTube Music Rights Management.
            </p>
            <p className="certification-group">
              <strong>Udacity:</strong> Foundation of Digital Marketing (Nanodegree).
            </p>
          </div>
        </div>
      </div>

      <div id="education" className="education-card">
        <div>
          <h3 className="education-degree">Diploma in Computer Science and Engineering</h3>
          <p className="education-university">Arka Jain University • Jamshedpur, Jharkhand, India</p>
        </div>
        <span className="education-date">Graduated: July 2021</span>
      </div>
    </AnimatedSection>
  </section>
);

const FAQSection = () => (
  <section id="faq" className="section-alt" aria-labelledby="faq-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Common Questions</span>
        <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Answers to common questions about my SEO, PPC, and eCommerce consulting services, tools, and availability.
        </p>
      </div>
      <div className="faq-list">
        {faqData.map((item, idx) => (
          <details key={item.id} id={item.id} className="faq-item" open={idx === 0}>
            <summary className="faq-question">
              <span>{item.question}</span>
              <span className="faq-icon">
                <Icon name="chevron-down" size={18} />
              </span>
            </summary>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </AnimatedSection>
  </section>
);

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Freelance SEO / PPC Project',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('ayazaftab9@gmail.com');
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage('Please fill out all required fields.');
      setTimeout(() => setStatusMessage(''), 3000);
      return;
    }

    const subject = `[${formData.inquiryType}] New Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:ayazaftab9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    setStatusMessage('Opening your email client with your pre-filled message!');
    setFormData({ name: '', email: '', inquiryType: 'Freelance SEO / PPC Project', message: '' });
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <footer id="contact" className="footer">
      <AnimatedSection className="container">
        <div className="footer-content">
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="footer-title">Let&apos;s Scale Your Traffic &amp; Revenue.</h2>
          <p className="footer-subtitle">
            Looking to hire a Digital Marketing &amp; eCommerce Specialist or need an SEO/PPC audit? Send a message below or reach out directly.
          </p>

          <div className="contact-direct-bar">
            <button
              id="copy-email-btn"
              type="button"
              onClick={handleCopyEmail}
              className="social-link"
            >
              <Icon name={copiedEmail ? 'check' : 'copy'} size={15} />
              <span>{copiedEmail ? 'Copied: ayazaftab9@gmail.com' : 'Copy Email: ayazaftab9@gmail.com'}</span>
            </button>
            <a
              href="https://www.linkedin.com/in/ayaz-aftab-digital-marketing-specialist"
              id="footer-linkedin-direct"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Icon name="linkedin" size={15} />
              <span>Connect on LinkedIn</span>
            </a>
          </div>

          <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="e.g., Rahul Sharma"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="e.g., rahul@company.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="inquiryType" className="form-label">How Can We Work Together?</label>
              <select
                id="inquiryType"
                name="inquiryType"
                className="form-select"
                value={formData.inquiryType}
                onChange={handleInputChange}
              >
                <option value="Full-Time Role Opportunity">Full-Time Role Opportunity</option>
                <option value="Freelance SEO / PPC Project">Freelance SEO / PPC Project</option>
                <option value="Amazon & eCommerce Scaling">Amazon &amp; eCommerce Scaling</option>
                <option value="Monthly Growth Consulting / Audit">Monthly Growth Consulting / Audit</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Project or Role Details *</label>
              <textarea
                id="message"
                name="message"
                className="form-textarea"
                placeholder="Share your website URL, target goals, or role details..."
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button id="contact-submit-btn" type="submit" className="btn btn-primary form-submit-btn">
              <span>Send Message</span>
              <Icon name="arrow-right" size={16} />
            </button>
            {statusMessage && <p className="form-status-message" role="status">{statusMessage}</p>}
          </form>
        </div>

        <div className="footer-bottom">
          <a href="#top" className="logo-container" aria-label="Back to top">
            <Logo />
            <span className="logo-text">Ayaz Aftab</span>
          </a>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Ayaz Aftab — Digital Marketing &amp; eCommerce Growth Specialist. All rights reserved.
          </p>
        </div>
      </AnimatedSection>
    </footer>
  );
};

const ProjectModal = ({ project, onClose }: { project: Project | null; onClose: () => void }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!project) return null;

  const nextImage = () => setCurrentImageIndex((i) => (i + 1) % project.visuals.length);
  const prevImage = () => setCurrentImageIndex((i) => (i - 1 + project.visuals.length) % project.visuals.length);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="modal-close-button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close case study details"
        >
          <Icon name="x" size={18} />
        </button>
        <div className="modal-body">
          <div className="modal-header">
            <span className="project-client">{project.client} • Case Study</span>
            <h2 id="modal-title" className="section-title" style={{ marginTop: '0.35rem', marginBottom: '0.5rem' }}>
              {project.title}
            </h2>
            <span className="project-badge">{project.keyResult}</span>
          </div>

          <div className="modal-grid">
            <div className="modal-main-content">
              <div className="modal-section">
                <h3 className="modal-section-title">The Challenge</h3>
                <p>{project.challenge}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">My Role</h3>
                <p>{project.role}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Strategy &amp; Architecture</h3>
                <p>{project.strategy}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Execution</h3>
                <p>{project.execution}</p>
              </div>

              {project.testimonial && (
                <div className="modal-section">
                  <h3 className="modal-section-title">Client Endorsement</h3>
                  <blockquote className="testimonial-quote" style={{ marginBottom: 0 }}>
                    &ldquo;{project.testimonial}&rdquo;
                  </blockquote>
                </div>
              )}
            </div>

            <div className="modal-sidebar">
              <div className="modal-sidebar-box">
                <h3 className="modal-section-title">Verified Key Results</h3>
                <ul className="modal-results-list">
                  {project.results.map((result, index) => (
                    <li key={index} className="modal-result-item">
                      <Icon name="check-circle" size={16} />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <span>Discuss a Similar Campaign</span>
                    <Icon name="arrow-right" size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {project.visuals && project.visuals.length > 0 && (
            <div className="modal-section" style={{ marginBottom: 0 }}>
              <h3 className="modal-section-title">
                Campaign Performance Breakdown ({currentImageIndex + 1} of {project.visuals.length})
              </h3>
              <div className="carousel">
                <img
                  src={project.visuals[currentImageIndex]}
                  alt={`Performance visual ${currentImageIndex + 1} for ${project.title}`}
                  className="carousel-image"
                  width="800"
                  height="450"
                />
                {project.visuals.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      className="carousel-btn prev"
                      aria-label="Previous performance slide"
                    >
                      <Icon name="chevron-left" size={20} />
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      className="carousel-btn next"
                      aria-label="Next performance slide"
                    >
                      <Icon name="chevron-right" size={20} />
                    </button>
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

export const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (isMenuOpen || selectedProject) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isMenuOpen, selectedProject]);

  const handleProjectClick = (project: Project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <>
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main id="main-content">
        <Hero />
        <ProvenImpact />
        <FeaturedProjects onProjectClick={handleProjectClick} />
        <GrowthProcess />
        <Services />
        <Testimonials onProjectClick={handleProjectClick} />
        <Skills />
        <FAQSection />
      </main>
      <Footer />
      {selectedProject && <ProjectModal project={selectedProject} onClose={handleCloseModal} />}
      <Analytics />
    </>
  );
};

if (typeof document !== 'undefined') {
  const container = document.getElementById('root');
  if (container) {
    const root = createRoot(container);
    root.render(<App />);
  }
}

