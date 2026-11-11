import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { Analytics } from '@vercel/analytics/react';

// Augment React's HTMLAttributes to support Declarative WebMCP attributes
declare module 'react' {
  interface FormHTMLAttributes<T> {
    toolname?: string;
    tooldescription?: string;
    toolautosubmit?: boolean | string;
  }
  interface InputHTMLAttributes<T> {
    toolparamdescription?: string;
  }
  interface SelectHTMLAttributes<T> {
    toolparamdescription?: string;
  }
  interface TextareaHTMLAttributes<T> {
    toolparamdescription?: string;
  }
}

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

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
}

// --- DATA ---
export const projectsData: Project[] = [
  {
    id: 1,
    slug: 'fface-gm-modular-decoy-luxury-paid-media-ecommerce',
    category: 'ppc',
    client: 'FFACE (GM Modular & Decoy Luxury Perfumes)',
    title: '₹6L+/Mo Meta & Google Ads Scaling at 4.0x ROAS + Shopify CRO',
    imageUrl: '/images/case-study-fface-roas.svg',
    keyResult: '₹6L+/Mo Spend • 4.0x ROAS',
    summary: 'Directed ₹6L+ monthly paid media budgets across Meta Ads and Google Ads at a sustained 4.0x ROAS while leading full-funnel Shopify e-commerce operations and GTM/GA4 server-side CAPI attribution.',
    tags: ['Meta Ads (CBO/ABO)', 'Google Ads (PMax)', 'Shopify CRO', 'Meta Pixel & CAPI', 'GA4 & GTM'],
    challenge: 'Scale profitable customer acquisition and repeat purchase velocity for Decoy Luxury Perfumes (D2C luxury fragrance) and GM Modular (high-intent retail/catalog products) while maintaining strict ROAS and CAC guardrails.',
    role: 'As Performance Marketing & E-commerce Specialist at FFACE (Kolkata), I own the ₹6L+ monthly paid media P&L, Shopify storefront merchandising & checkout CRO, creative hook testing, and GTM/GA4/CAPI tracking.',
    strategy: 'Paired full-funnel Meta Ads (CBO/ABO prospect testing + dynamic catalog retargeting) and Google Search/PMax with Shopify AOV boosters (discovery sets, tiered bundle offers) and server-side Conversions API (CAPI) signal recovery.',
    execution: 'Produced and iterated 3–5 weekly direct-response creative concepts (unboxing hooks, UGC angles, static carousels) to combat ad fatigue. Configured GTM custom purchase events, GA4 funnel attribution, and Meta CAPI to maximize algorithmic bidding accuracy.',
    results: [
      'Directed ₹6L+ monthly ad spend across Meta & Google Ads at a sustained 4.0x ROAS',
      'Led Decoy Luxury Shopify store ops, discovery sets & checkout CRO to lift AOV and conversion rate',
      'Executed GM Modular dynamic product catalog ads & localized dealer/retail demand capture',
      'Tested 3–5 weekly creative concepts (UGC hooks, unboxing videos, static carousels)',
      'Implemented GTM/GA4 custom purchase tracking and Meta Pixel + Conversions API (CAPI)'
    ],
    testimonial: 'Ayaz brought immediate structure to our paid media and Shopify funnel—scaling monthly spend past ₹6 Lakhs while holding a consistent 4.0x ROAS.',
    visuals: ['/images/case-study-fface-roas.svg'],
  },
  {
    id: 2,
    slug: 'jaffri-creations-ecommerce-ppc-seo',
    category: 'ecommerce',
    client: 'Jaffri Creations Fountain Decor Pvt. Ltd.',
    title: 'D2C WooCommerce & Amazon Growth (₹7.95L GMV at 4.5x ROAS)',
    imageUrl: '/images/case-study-jaffri-ecommerce.svg',
    keyResult: '₹7.95L GMV • 4.5x ROAS',
    summary: 'Scaled D2C WooCommerce and Amazon Seller Central storefronts to ₹7.95L in direct GMV while managing ₹2L/mo Google PMax & Meta campaigns at 4.5x ROAS.',
    tags: ['Amazon Seller Central', 'Google PMax & Shopping', 'WooCommerce', 'Technical SEO', 'A+ Content'],
    challenge: 'To establish a profitable multi-channel e-commerce presence across D2C WooCommerce and Amazon Seller Central while capturing high-intent commercial buyers via paid and organic search.',
    role: 'As Digital Marketing Executive (Growth & Operations), I owned end-to-end e-commerce operations, ₹2L/mo Google PMax & Meta Ads management, Amazon A+ catalog optimization, and technical SEO.',
    strategy: 'Built a three-pillar growth engine: (1) optimizing 100+ SKUs across WooCommerce and Amazon Seller Central, (2) running ₹2L/mo Google Performance Max, Search & Meta retargeting campaigns at 4.5x ROAS, and (3) scaling organic search visibility.',
    execution: 'Restructured Google PMax and Search campaigns with high-intent keyword segmentation and Merchant Center feed optimization. Overhauled Amazon product detail pages with enhanced A+ content and backend search terms. Executed on-page and technical SEO across product and category templates.',
    results: [
      'Drove ₹7.95 Lakhs in direct GMV across D2C WooCommerce & Amazon storefronts',
      'Managed ₹2L/mo in Google PMax & Meta retargeting campaigns at a 4.5x ROAS (34,900+ clicks)',
      'Boosted organic website traffic by +30% and Amazon listing discoverability by +40%',
      'Generated high-ticket B2B & D2C commercial orders valued between ₹5 Lakhs and ₹13 Lakhs',
      'Drove 1,465+ verified local buyer interactions via Google Business Profile'
    ],
    testimonial: 'Ayaz’s strategies were instrumental in our online growth. His expertise in both paid and organic channels delivered exceptional results.',
    visuals: [
      '/images/case-study-jaffri-ecommerce.svg',
      '/images/case-study-jaffri-ads.svg',
      '/images/case-study-jaffri-seo.svg'
    ],
  },
  {
    id: 3,
    slug: 'mtei-services-meta-ads-lead-generation',
    category: 'ppc',
    client: 'MTEI Services Pvt. Ltd.',
    title: 'High-Velocity Acquisition Funnel (9,452 Conversions & -35% CPA)',
    imageUrl: '/images/case-study-mtei-leads.svg',
    keyResult: '9,452 Acquisitions • -35% CPA',
    summary: 'Engineered full-funnel Meta & Google acquisition campaigns generating 9,452 qualified customer acquisitions, reducing CPA/CPL by 35% and lifting landing page CVR by 20%.',
    tags: ['Meta Ads', 'Google Ads', 'Landing Page CRO', 'A/B Testing', 'Lead Acquisition'],
    challenge: 'To generate a high volume of qualified customer/student acquisitions within strict cost-per-acquisition targets while eliminating landing page drop-offs.',
    role: 'Served as Performance Marketing & CRO Specialist (Contract) responsible for Meta & Google campaign architecture, multivariate creative testing, and landing page conversion rate optimization (CRO).',
    strategy: 'Built segmented full-funnel paid campaigns combining custom lookalike audiences, high-intent search capture, and streamlined mobile-first lead capture landing pages.',
    execution: 'Conducted rapid A/B testing across ad creatives, headlines, audience segments, and bidding strategies. Redesigned landing page layouts, trust signals, and form friction points to maximize submission velocity.',
    results: [
      'Generated 9,452 qualified customer acquisitions across paid social and search funnels',
      'Reduced Cost Per Acquisition / Cost Per Lead (CPA/CPL) by 35% (averaging ₹49.86 CPL)',
      'Lifted landing page conversion rates (CVR) by +20% and reduced bounce rates by 15%',
      'Managed ₹4.7 Lakhs in paid media spend with sustained positive ROI'
    ],
    testimonial: 'The acquisition campaigns and landing page CRO executed by Ayaz were a game-changer—delivering 9,452 qualified conversions while slashing our CPA by 35%.',
    visuals: ['/images/case-study-mtei-leads.svg'],
  },
  {
    id: 4,
    slug: 'jaffri-creations-youtube-seo-organic-growth',
    category: 'seo',
    client: 'Jaffri Creations Fountain Decor Pvt. Ltd.',
    title: 'YouTube Video SEO & Organic Discovery Engine (247K+ Views)',
    imageUrl: '/images/case-study-youtube-growth.svg',
    keyResult: '247,000+ Organic Views',
    summary: 'Scaled organic video discovery from scratch using YouTube Video SEO, keyword trend mapping, and high-retention short/long-form content structuring.',
    tags: ['YouTube Video SEO', 'Short-Form Hooks', 'Keyword Research', 'Organic Discovery', 'Brand Authority'],
    challenge: 'To build sustainable top-of-funnel product discovery and brand authority without relying on paid video advertising.',
    role: 'Managed end-to-end YouTube channel SEO, search trend analysis, metadata optimization, thumbnail CTR testing, and audience retention analytics.',
    strategy: 'Targeted high-search-volume, low-competition commercial product topics using Semrush and YouTube Search Trends, optimizing titles, descriptions, chapters, and tags for long-tail discovery.',
    execution: 'Published a consistent cadence of search-optimized product showcase and short-form videos, improving click-through rates (CTR) and average view duration to trigger algorithmic recommendations.',
    results: [
      'Accumulated 247,000+ organic YouTube views with zero paid video promotion',
      'Generated 5,200+ hours of high-retention organic watch time',
      'Established YouTube Search as a primary top-of-funnel D2C product discovery channel',
      'Assisted direct WooCommerce and Amazon store conversions'
    ],
    testimonial: "Ayaz's work on our YouTube channel has been phenomenal. He built it from the ground up into a significant source of organic discovery and assisted sales.",
    visuals: ['/images/case-study-youtube-growth.svg'],
  },
];

const experienceData: ExperienceItem[] = [
  {
    id: 'exp-fface',
    role: 'Performance Marketing & E-commerce Specialist',
    company: 'FFACE (GM Modular & Decoy Luxury Perfumes)',
    period: 'Nov 2025 – Present',
    location: 'Kolkata, West Bengal, India',
    bullets: [
      'Direct ₹6L+ in monthly paid media budgets across Meta Ads and Google Ads for luxury D2C fragrance and retail brands, maintaining a sustained 4.0x ROAS.',
      'Lead end-to-end Shopify e-commerce operations for Decoy Luxury, overseeing catalog merchandising, bundle/discovery set offers, and checkout CRO to grow AOV and repeat purchases.',
      'Execute multi-channel digital campaigns and dynamic product catalog ads for GM Modular to boost brand visibility, dealer inquiries, and localized retail demand.',
      'Partner with creative teams to test 3–5 weekly ad concepts (unboxing hooks, UGC angles, static carousels), combating ad fatigue and improving thumb-stop ratios.',
      'Manage GTM/GA4 custom purchase events and Meta Pixel/CAPI tracking to ensure accurate full-funnel attribution.'
    ]
  },
  {
    id: 'exp-jaffri',
    role: 'Digital Marketing Executive (Growth & Operations)',
    company: 'Jaffri Creations Fountain Decor Pvt. Ltd.',
    period: 'Oct 2023 – Sep 2025',
    location: 'India',
    bullets: [
      'Scaled D2C WooCommerce and Amazon storefronts, optimizing 100+ SKUs, pricing, and inventory to generate ₹7.95L in direct GMV.',
      'Managed ₹2L/mo in Google PMax, Search, and Meta retargeting campaigns at a 4.5x ROAS, driving 34,900+ high-intent clicks.',
      'Overhauled on-page SEO, technical site structure, and Amazon A+ listings, boosting website organic traffic by 30% and marketplace discoverability by 40%.',
      'Spearheaded YouTube SEO and short-form video distribution, generating 247K+ organic views to support top-of-funnel product discovery.'
    ]
  },
  {
    id: 'exp-mtei',
    role: 'Performance Marketing & CRO Specialist (Contract)',
    company: 'MTEI Services Pvt. Ltd.',
    period: 'Jun 2023 – Oct 2023',
    location: 'India',
    bullets: [
      'Engineered full-funnel Meta and Google acquisition campaigns that delivered 9,452 qualified customer acquisitions.',
      'Reduced CPA/CPL by 35% through rapid A/B testing of ad creatives, audience segments, and bidding strategies.',
      'Redesigned landing page layouts and checkout/lead flows, lifting conversion rates by 20% and reducing bounce rates by 15%.'
    ]
  },
  {
    id: 'exp-hico',
    role: 'Digital Marketing Specialist',
    company: 'HICO Tax Consultant (Financial & Professional Services)',
    period: 'Jul 2021 – Jun 2023',
    location: 'India',
    bullets: [
      'Managed Google Search and LinkedIn Ads targeting high-intent commercial decision-makers, improving lead-to-consultation conversion rates.',
      'Automated email nurture workflows and lead segmentation in HubSpot CRM to shorten the B2B sales cycle.',
      'Directed technical SEO and content marketing initiatives, achieving 25% YoY organic traffic growth.'
    ]
  }
];

const testimonialsData = [
  {
    projectId: 2,
    logoUrl: '/images/logo-jaffri.svg',
    quote: 'Ayaz’s strategies were instrumental in our online growth. His expertise in both paid and organic channels delivered exceptional results, helping us achieve ₹7.95L in direct GMV and 4.5x ROAS.',
    author: 'Jaffri',
    title: 'Founder, Jaffri Creations Fountain Decor Pvt. Ltd.'
  },
  {
    projectId: 3,
    logoUrl: '/images/logo-mtei.svg',
    quote: 'The acquisition campaigns and landing page CRO run by Ayaz were a game-changer—delivering 9,452 qualified conversions while reducing our CPA/CPL by 35%.',
    author: 'Admissions & Growth Director',
    title: 'MTEI Services Pvt. Ltd.'
  }
];

const processStepsData = [
  {
    step: '01 / Tracking & Audit',
    title: 'GA4, GTM & Meta CAPI Diagnostics',
    description: 'Auditing GA4 custom purchase events, Google Tag Manager triggers, Meta Pixel & Conversions API (CAPI) signal quality, Merchant Center feeds, and checkout funnel drop-offs.'
  },
  {
    step: '02 / Full-Funnel Architecture',
    title: 'Meta CBO/ABO & Google PMax Roadmapping',
    description: 'Structuring high-ROAS Meta Ads testing/scaling campaigns, Google Search, Shopping & Performance Max asset groups, and Shopify/WooCommerce/Amazon catalog merchandising.'
  },
  {
    step: '03 / Creative & Store CRO',
    title: 'Weekly Hook Testing & Checkout Optimization',
    description: 'Shipping 3–5 weekly direct-response creative concepts (unboxing hooks, UGC angles, static carousels) paired with discovery sets, bundle offers, and landing page A/B tests.'
  },
  {
    step: '04 / Attribution & Scale',
    title: '4.0x–4.5x ROAS Budget Pacing',
    description: 'Scaling monthly paid media budgets (₹6L+/mo) via disciplined CBO/ABO bidding, negative keyword sculpting, Looker Studio cohort reporting, and WhatsApp/email retention flows.'
  }
];

const servicesData = [
  {
    id: 'service-full-time',
    title: 'Full-Time Growth Lead Roles',
    description: 'Available for Performance Marketing Manager, E-commerce Growth Lead, or Paid Media Specialist roles. 5.5+ years scaling D2C Shopify/WooCommerce and marketplace brands with ₹6L+/mo ad budgets.',
    items: [
      '₹6L+/Mo Meta Ads & Google Ads (PMax/Shopping) P&L Ownership',
      'Shopify, WooCommerce & Amazon Seller Central Operations',
      'GA4 Custom Events, GTM & Server-Side Meta Pixel/CAPI Setup',
      'Weekly Direct-Response Creative Testing & Full-Funnel CRO'
    ],
    cta: 'Download Master Resume (PDF)',
    href: '/resume.pdf',
    icon: 'download',
    download: true,
  },
  {
    id: 'service-freelance',
    title: 'Paid Media & CRO Projects',
    description: 'High-impact project engagements for D2C and B2B brands looking to scale Meta & Google Ads at 4.0x–4.5x ROAS, overhaul Shopify/WooCommerce conversion rates, or fix broken GA4/CAPI tracking.',
    items: [
      'Meta Ads (CBO/ABO) & Google PMax / Shopping Architecture',
      'Shopify & WooCommerce Landing Page / Checkout CRO (+20% CVR)',
      'GA4, GTM, Meta CAPI & Looker Studio Attribution Setup',
      'Amazon Seller Central A+ Cataloging & Technical SEO'
    ],
    cta: 'Discuss a Growth Project',
    href: '#contact',
    icon: 'arrow-right'
  },
  {
    id: 'service-consulting',
    title: 'Growth Advisory & Audits',
    description: 'Ongoing strategic retainers for founders and marketing teams looking to compress CPA/CPL by up to 35%, scale ROAS, and build compounding YouTube & Google organic search engines.',
    items: [
      'Full-Funnel Paid Media & Creative Hook Audits',
      'Merchant Center Feed & Dynamic Catalog Ads Optimization',
      'WhatsApp, Email & HubSpot CRM Retention Workflows',
      'YouTube Video SEO (247K+ Views Framework) & Organic Search'
    ],
    cta: 'Book a Strategy Audit',
    href: '#contact',
    icon: 'arrow-right'
  }
];

const faqData = [
  {
    id: 'faq-channels',
    question: 'What paid media and e-commerce channels does Ayaz Aftab specialize in?',
    answer: 'Ayaz is a Performance Marketing & E-commerce Growth Lead with 5.5+ years of experience specializing in Meta Ads Manager (Facebook & Instagram CBO/ABO, Dynamic Catalog Ads), Google Ads (Search, Shopping, Performance Max), LinkedIn Ads, Shopify & WooCommerce store operations, Amazon Seller Central (A+ Content), Full-Funnel CRO, GA4/GTM/Meta CAPI attribution, and YouTube Video SEO.'
  },
  {
    id: 'faq-results',
    question: 'What verified ROAS, revenue, and acquisition results has Ayaz delivered?',
    answer: 'Ayaz currently directs ₹6L+ in monthly paid media budgets across Meta and Google Ads for FFACE (GM Modular & Decoy Luxury Perfumes) at a sustained 4.0x ROAS. Previously, he scaled Jaffri Creations across WooCommerce & Amazon to ₹7.95L GMV at a 4.5x ROAS (plus +30% organic traffic and 247K+ organic YouTube views), and engineered acquisition funnels for MTEI Services that delivered 9,452 qualified conversions while reducing CPA/CPL by 35% and lifting landing page CVR by 20%.'
  },
  {
    id: 'faq-availability',
    question: 'Where is Ayaz Aftab based and is he available for full-time or consulting roles?',
    answer: 'Ayaz is based in Kolkata, West Bengal, India (+91 9263588321 • ayazaftab9@gmail.com) and is open to Senior Performance Marketing, E-commerce Growth Lead, and Paid Media Manager opportunities (on-site, hybrid, or remote), as well as high-impact D2C/B2B growth consulting.'
  },
  {
    id: 'faq-tools',
    question: 'What tracking, attribution, and e-commerce tech stack does Ayaz use?',
    answer: 'Ayaz works daily with Meta Ads Manager, Google Ads & Merchant Center, Shopify, WooCommerce, Amazon Seller Central, Google Analytics 4 (GA4 Custom Events), Google Tag Manager (GTM), Meta Pixel & Conversions API (CAPI), Looker Studio, HubSpot CRM, and Semrush.'
  },
  {
    id: 'faq-education',
    question: 'What are Ayaz Aftab’s academic qualifications and industry certifications?',
    answer: 'Ayaz holds a Bachelor of Business Administration (BBA) from Manipal University Jaipur and a Diploma in Computer Science & Engineering from Arka Jain University. He is certified across Google (GA4, AI-Powered Performance Ads & Shopping), Meta (Certified Digital Marketing Associate), HubSpot (Inbound Marketing & CRM Automation), and Amazon & Semrush (Sponsored Ads & SEO Toolkit).'
  }
];

// --- WEBMCP IMPERATIVE TOOL REGISTRATION ---
function registerWebMCPTools() {
  if (typeof window === 'undefined') return;
  const mc = (document as any).modelContext || (navigator as any).modelContext;
  if (!mc || typeof mc.registerTool !== 'function') return;

  try {
    mc.registerTool({
      name: 'get_specialist_summary',
      description: 'Retrieve structured profile, verified ROAS and revenue metrics, work history, skills, certifications, and contact information for Ayaz Aftab, Performance Marketing & E-commerce Growth Lead.',
      inputSchema: {
        type: 'object',
        properties: {},
      },
      execute: async () => {
        return JSON.stringify({
          name: 'Ayaz Aftab',
          role: 'Performance Marketing & E-commerce Growth Lead | Meta Ads, Google Ads & Full-Funnel CRO',
          experienceYears: '5.5+',
          location: 'Kolkata, West Bengal, India',
          phone: '+91 9263588321',
          email: 'ayazaftab9@gmail.com',
          linkedin: 'https://www.linkedin.com/in/ayazaftab',
          resumeUrl: 'https://ayaz-aftab-portfolio.vercel.app/resume.pdf',
          metrics: {
            monthlyAdSpendManaged: 'INR 6,00,000+ (₹6L+/mo)',
            sustainedROAS: '4.0x - 4.5x ROAS',
            qualifiedAcquisitions: '9,452+ (-35% CPA/CPL)',
            conversionRateLift: '+20% Landing Page & Store CVR',
            ecommerceGMV: 'INR 7.95 Lakhs+ (WooCommerce & Amazon)',
            youtubeViews: '247,000+ Organic Views'
          },
          coreCompetencies: [
            'Meta Ads Manager (Facebook & Instagram CBO/ABO)',
            'Google Ads (Search, Shopping & Performance Max)',
            'Shopify, WooCommerce & Amazon Seller Central',
            'GA4 Custom Events, GTM & Meta Pixel/CAPI',
            'Full-Funnel Landing Page & Checkout CRO',
            'YouTube Video SEO & HubSpot CRM Automation'
          ]
        });
      }
    });

    mc.registerTool({
      name: 'list_case_studies',
      description: 'List and filter Ayaz Aftab performance marketing and e-commerce case studies by channel category.',
      inputSchema: {
        type: 'object',
        properties: {
          category: {
            type: 'string',
            enum: ['all', 'ecommerce', 'ppc', 'seo'],
            description: 'Filter case studies by channel (all, ecommerce, ppc, or seo)'
          }
        }
      },
      execute: async (input: { category?: string }) => {
        const cat = input?.category || 'all';
        const matches = cat === 'all'
          ? projectsData
          : projectsData.filter((p) => p.category === cat);
        return JSON.stringify(matches);
      }
    });
  } catch {
    // Ignore duplicate registration or experimental browser API variations
  }
}

// Register immediately at module evaluation time so Lighthouse snapshot captures WebMCP tools
registerWebMCPTools();

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
    case 'phone':
      return <svg {...props}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
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

const AnimatedSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`fade-in-section is-visible ${className}`}>
    {children}
  </div>
);

// --- CORE SECTIONS ---

const Header = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <header className="header">
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <div className="container">
      <nav className="nav" aria-label="Primary Navigation">
        <a href="/" id="nav-logo-link" className="logo-container">
          <Logo />
          <div className="logo-text-group">
            <span className="logo-text">Ayaz Aftab</span>
            <span className="logo-subtext">Performance Marketing &amp; E-commerce</span>
          </div>
        </a>

        <div className="desktop-nav">
          <a href="/#impact" id="nav-link-impact" className="desktop-nav-link">Impact</a>
          <a href="/#experience" id="nav-link-experience" className="desktop-nav-link">Experience</a>
          <a href="/#projects" id="nav-link-projects" className="desktop-nav-link">Case Studies</a>
          <a href="/#services" id="nav-link-services" className="desktop-nav-link">Services</a>
          <a href="/#skills" id="nav-link-skills" className="desktop-nav-link">Skills</a>
          <a href="/resume" id="nav-link-resume" className="desktop-nav-link">Resume</a>
          <a href="/#contact" id="nav-link-contact" className="desktop-nav-link">Contact</a>
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
          <a href="/" className="logo-container" onClick={onClose}>
            <Logo />
            <span className="logo-text">Ayaz Aftab</span>
          </a>
          <button id="close-mobile-menu-btn" onClick={onClose} className="close-menu-btn" aria-label="Close menu">
            <Icon name="x" size={20} />
          </button>
        </div>
        <nav className="menu-links" aria-label="Mobile Navigation Links">
          <a href="/#impact" onClick={onClose} className="menu-link"><Icon name="bar-chart-2" size={18} /> Proven Impact</a>
          <a href="/#experience" onClick={onClose} className="menu-link"><Icon name="briefcase" size={18} /> Experience</a>
          <a href="/#projects" onClick={onClose} className="menu-link"><Icon name="star" size={18} /> Case Studies</a>
          <a href="/#process" onClick={onClose} className="menu-link"><Icon name="tool" size={18} /> Growth Process</a>
          <a href="/#services" onClick={onClose} className="menu-link"><Icon name="settings" size={18} /> Services</a>
          <a href="/#skills" onClick={onClose} className="menu-link"><Icon name="award" size={18} /> Skills &amp; Certifications</a>
          <a href="/resume" onClick={onClose} className="menu-link"><Icon name="check-circle" size={18} /> Online Master Resume</a>
          <a href="/#faq" onClick={onClose} className="menu-link"><Icon name="help-circle" size={18} /> FAQ</a>
          <a href="/#contact" onClick={onClose} className="menu-link"><Icon name="mail" size={18} /> Contact</a>
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
          <span>Download Master Resume (PDF)</span>
        </a>

        <div className="off-canvas-footer">
          <a href="mailto:ayazaftab9@gmail.com" className="social-link" aria-label="Email Ayaz Aftab">
            <Icon name="mail" size={16} />
          </a>
          <a href="tel:+919263588321" className="social-link" aria-label="Call Ayaz Aftab">
            <Icon name="phone" size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayazaftab"
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

const Hero = () => (
  <section id="top" className="hero">
    <AnimatedSection className="container">
      <div className="hero-layout">
        <span className="hero-role-kicker">
          Performance Marketing &amp; E-commerce Growth Lead • 5.5+ Years Experience • Kolkata, India
        </span>
        <h1 className="hero-headline">
          Hi, I&apos;m <span className="hero-name">Ayaz Aftab</span>.
          <span className="hero-dynamic-subheading">
            I scale D2C &amp; marketplace brands via <span className="typing-text">Meta Ads, Google Ads &amp; Full-Funnel CRO</span>
          </span>
        </h1>
        <p className="hero-summary">
          Performance Marketing &amp; E-commerce Specialist with 5.5+ years of experience scaling D2C, B2B, and marketplace brands. Proven track record of managing <strong>₹6L+ monthly paid ad spend</strong> across <strong>Meta Ads</strong> and <strong>Google Ads</strong> at a sustained <strong>4.0x–4.5x ROAS</strong>, driving <strong>9,452+ qualified acquisitions</strong>, and lifting store conversions by <strong>20%</strong> across <strong>Shopify</strong>, <strong>WooCommerce</strong>, and <strong>Amazon Seller Central</strong>.
        </p>

        <ul className="hero-highlights" aria-label="Key Credentials">
          <li className="hero-highlight-item">
            <Icon name="check-circle" size={16} />
            <span>₹6L+/Mo Ad Spend at 4.0x–4.5x ROAS</span>
          </li>
          <li className="hero-highlight-item">
            <Icon name="check-circle" size={16} />
            <span>9,452+ Acquisitions (-35% CPA/CPL)</span>
          </li>
          <li className="hero-highlight-item">
            <Icon name="check-circle" size={16} />
            <span>Google, Meta, HubSpot &amp; Semrush Certified</span>
          </li>
        </ul>

        <div className="hero-cta">
          <a href="#projects" id="hero-cta-projects" className="btn btn-primary">
            <span>Explore Case Studies</span>
            <Icon name="arrow-right" size={16} />
          </a>
          <a href="/resume" id="hero-cta-online-resume" className="btn btn-secondary">
            <span>View Full Resume</span>
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
            <span>Download PDF</span>
          </a>
        </div>

        <div className="hero-socials">
          <a href="mailto:ayazaftab9@gmail.com" id="hero-social-email" className="social-link">
            <Icon name="mail" size={16} />
            <span>ayazaftab9@gmail.com</span>
          </a>
          <a href="tel:+919263588321" id="hero-social-phone" className="social-link">
            <Icon name="phone" size={16} />
            <span>+91 9263588321</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ayazaftab"
            id="hero-social-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Icon name="linkedin" size={16} />
            <span>linkedin.com/in/ayazaftab</span>
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

const ProvenImpact = () => (
  <section id="impact" className="section-alt" aria-labelledby="impact-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Verified Performance Metrics</span>
        <h2 id="impact-heading" className="section-title">Proven Paid Media &amp; E-commerce Impact</h2>
        <p className="section-subtitle">
          Audited revenue, ROAS, and acquisition outcomes delivered across D2C Shopify/WooCommerce stores, Amazon Seller Central, and full-funnel paid media.
        </p>
      </div>
      <div className="impact-grid">
        <div className="info-card">
          <div>
            <p className="impact-metric">₹6L+ / Mo</p>
            <p className="impact-label">Paid Media Spend at 4.0x–4.5x ROAS</p>
          </div>
          <p className="impact-context">
            Managing high-velocity Meta Ads (CBO/ABO) &amp; Google PMax/Search budgets for luxury D2C &amp; retail brands.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">9,452+</p>
            <p className="impact-label">Qualified Customer Acquisitions</p>
          </div>
          <p className="impact-context">
            Reduced CPA/CPL by 35% (₹49.86 CPL) and lifted landing page conversion rates by +20% via iterative CRO.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">₹7.95 L+</p>
            <p className="impact-label">WooCommerce &amp; Amazon Direct GMV</p>
          </div>
          <p className="impact-context">
            Scaled 100+ SKUs with +30% organic search growth, +40% Amazon discoverability &amp; 34,900+ paid clicks.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">247,000+</p>
            <p className="impact-label">Organic YouTube Views</p>
          </div>
          <p className="impact-context">
            5,200+ watch hours generated through YouTube Video SEO and short-form hook distribution.
          </p>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" aria-labelledby="experience-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">5.5+ Years Career Progression</span>
        <h2 id="experience-heading" className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          A track record of owning paid acquisition P&amp;Ls, Shopify and WooCommerce store operations, and full-funnel attribution across D2C, marketplace, and B2B brands.
        </p>
      </div>
      <div className="experience-list">
        {experienceData.map((exp) => (
          <article key={exp.id} id={exp.id} className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
              </div>
              <span className="experience-period">{exp.period} | {exp.location}</span>
            </div>
            <ul className="experience-bullets">
              {exp.bullets.map((bullet, idx) => (
                <li key={idx} className="experience-bullet">
                  <Icon name="check-circle" size={16} />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
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
    <section id="projects" className="section-alt" aria-labelledby="projects-heading">
      <AnimatedSection className="container">
        <div className="section-header">
          <span className="section-eyebrow">Portfolio &amp; Case Studies</span>
          <h2 id="projects-heading" className="section-title">Featured Performance &amp; E-commerce Case Studies</h2>
          <p className="section-subtitle">
            Explore how I architect and scale Meta Ads, Google PMax, Shopify/WooCommerce CRO, and Amazon Seller Central funnels that turn ad spend and search intent into profitable GMV.
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
            id="filter-ppc"
            type="button"
            role="tab"
            aria-selected={activeFilter === 'ppc'}
            className={`filter-tab ${activeFilter === 'ppc' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ppc')}
          >
            Paid Media &amp; CRO (Meta / Google)
          </button>
          <button
            id="filter-ecommerce"
            type="button"
            role="tab"
            aria-selected={activeFilter === 'ecommerce'}
            className={`filter-tab ${activeFilter === 'ecommerce' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ecommerce')}
          >
            E-commerce &amp; Amazon
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
              <a href={`/case-studies/${project.slug}`} className="project-image-container" aria-label={`View ${project.title} case study`}>
                <img
                  src={project.imageUrl}
                  alt={`${project.title} — ${project.client} (${project.keyResult})`}
                  className="project-image"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </a>
              <div className="project-content">
                <div className="project-meta-row">
                  <span className="project-client">{project.client}</span>
                  <span className="project-badge">{project.keyResult}</span>
                </div>
                <h3 className="project-title">
                  <a href={`/case-studies/${project.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {project.title}
                  </a>
                </h3>
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

                <div className="project-card-actions">
                  <a
                    id={`link-case-study-${project.id}`}
                    href={`/case-studies/${project.slug}`}
                    className="btn btn-primary project-card-btn"
                  >
                    <span>Full Case Study</span>
                    <Icon name="arrow-right" size={16} />
                  </a>
                  <button
                    id={`open-case-study-${project.id}`}
                    type="button"
                    onClick={() => onProjectClick(project)}
                    className="btn btn-secondary project-card-btn"
                  >
                    <span>Quick Preview</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};

const GrowthProcess = () => (
  <section id="process" aria-labelledby="process-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Methodology &amp; Execution</span>
        <h2 id="process-heading" className="section-title">How I Scale Paid ROAS &amp; Store Conversions</h2>
        <p className="section-subtitle">
          A disciplined, full-funnel operating system combining server-side attribution, high-velocity creative testing, and storefront CRO.
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
  <section id="services" className="section-alt" aria-labelledby="services-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Services &amp; Engagement Models</span>
        <h2 id="services-heading" className="section-title">Performance Marketing &amp; E-commerce Services</h2>
        <p className="section-subtitle">
          Whether you are hiring a full-time Performance Marketing &amp; E-commerce Growth Lead or need a high-converting Meta/Google Ads &amp; Shopify CRO partner, here is how we can work together.
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
  <section id="testimonials" aria-labelledby="testimonials-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Client Endorsements</span>
        <h2 id="testimonials-heading" className="section-title">What Founders &amp; Leaders Say</h2>
        <p className="section-subtitle">
          Feedback from brand founders and growth leaders on ROAS consistency, acquisition volume, and store operations.
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
  <section id="skills" className="section-alt" aria-labelledby="skills-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Core Competencies &amp; Credentials</span>
        <h2 id="skills-heading" className="section-title">Skills, Attribution Stack &amp; Certifications</h2>
        <p className="section-subtitle">
          Full-stack performance marketing, Shopify/WooCommerce store operations, and server-side analytics backed by industry certifications.
        </p>
      </div>
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skills-header">
            <Icon name="star" size={20} />
            <h3 className="skills-title">Paid Media &amp; E-commerce Ops</h3>
          </div>
          <ul className="skills-list">
            {[
              'Meta Ads Manager (FB & IG)',
              'Google Ads (Search & PMax)',
              'Google Shopping & Merchant Center',
              'LinkedIn Ads (B2B)',
              'CBO / ABO Bidding & Budget Pacing',
              'Shopify Administration',
              'WooCommerce Operations',
              'Amazon Seller Central & A+ Content',
              'Product Catalog Merchandising',
              'Landing Page & Checkout CRO',
              'Offer & Bundle Testing',
              'Technical & On-Page SEO'
            ].map((s) => (
              <li key={s} className="skill-item">{s}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card">
          <div className="skills-header">
            <Icon name="tool" size={20} />
            <h3 className="skills-title">Tracking, Creative &amp; Retention</h3>
          </div>
          <ul className="skills-list">
            {[
              'Google Analytics 4 (GA4 Custom Events)',
              'Google Tag Manager (GTM)',
              'Meta Pixel & Conversions API (CAPI)',
              'UTM Taxonomy & Attribution',
              'Looker Studio Dashboards',
              'Short-Form Video & Hook Testing',
              'UGC & Static Carousel Direction',
              'YouTube Video SEO (247K+ Views)',
              'WhatsApp & Email Retention Flows',
              'HubSpot CRM Automation',
              'Semrush SEO & Keyword Research',
              'A/B Testing & Funnel Diagnostics'
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
              <strong>Google:</strong> GA4, AI-Powered Performance Ads &amp; Shopping Ads Certified.
            </p>
            <p className="certification-group">
              <strong>Meta:</strong> Certified Digital Marketing Associate.
            </p>
            <p className="certification-group">
              <strong>HubSpot:</strong> Inbound Marketing &amp; CRM Automation Certified.
            </p>
            <p className="certification-group">
              <strong>Amazon &amp; Semrush:</strong> Sponsored Ads &amp; SEO Toolkit Certified.
            </p>
          </div>
        </div>
      </div>

      <div id="education" className="education-grid">
        <div className="education-card">
          <div>
            <h3 className="education-degree">Bachelor of Business Administration (BBA)</h3>
            <p className="education-university">Manipal University Jaipur</p>
          </div>
          <span className="education-date">Business Administration &amp; Marketing</span>
        </div>
        <div className="education-card">
          <div>
            <h3 className="education-degree">Diploma in Computer Science &amp; Engineering</h3>
            <p className="education-university">Arka Jain University</p>
          </div>
          <span className="education-date">Computer Science &amp; Web Technologies</span>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

const FAQSection = () => (
  <section id="faq" aria-labelledby="faq-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Common Questions</span>
        <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Answers to common questions about my paid media experience, ROAS benchmarks, e-commerce stack, and availability.
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
    inquiryType: 'Full-Time Role Opportunity',
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nativeEvent = e.nativeEvent as SubmitEvent & {
      agentInvoked?: boolean;
      respondWith?: (p: Promise<string>) => void;
    };

    if (!formData.name || !formData.email || !formData.message) {
      const errorMsg = 'Please fill out all required fields (name, email, and message).';
      setStatusMessage(errorMsg);
      if (nativeEvent?.agentInvoked && typeof nativeEvent.respondWith === 'function') {
        nativeEvent.respondWith(Promise.resolve(`Validation failed: ${errorMsg}`));
      }
      setTimeout(() => setStatusMessage(''), 3000);
      return;
    }

    const subject = `[${formData.inquiryType}] New Inquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:ayazaftab9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (nativeEvent?.agentInvoked && typeof nativeEvent.respondWith === 'function') {
      nativeEvent.respondWith(
        Promise.resolve(
          `Inquiry prepared for Ayaz Aftab (ayazaftab9@gmail.com) with subject "${subject}".`
        )
      );
    } else {
      window.location.href = mailtoLink;
    }

    setStatusMessage('Opening your email client with your pre-filled message!');
    setFormData({ name: '', email: '', inquiryType: 'Full-Time Role Opportunity', message: '' });
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <footer id="contact" className="footer">
      <AnimatedSection className="container">
        <div className="footer-content">
          <span className="section-eyebrow">Get In Touch • Kolkata, India</span>
          <h2 className="footer-title">Let&apos;s Scale Your Paid ROAS &amp; Store Revenue.</h2>
          <p className="footer-subtitle">
            Hiring a Performance Marketing &amp; E-commerce Growth Lead or need a Meta/Google Ads &amp; CRO audit? Send a message below or reach out directly.
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
              href="tel:+919263588321"
              id="footer-phone-direct"
              className="social-link"
            >
              <Icon name="phone" size={15} />
              <span>Call: +91 9263588321</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ayazaftab"
              id="footer-linkedin-direct"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <Icon name="linkedin" size={15} />
              <span>LinkedIn: /in/ayazaftab</span>
            </a>
          </div>

          <form
            id="contact-form"
            className="contact-form"
            toolname="send_marketing_inquiry"
            tooldescription="Send a performance marketing role opportunity, Meta/Google Ads project inquiry, or e-commerce CRO audit request to Ayaz Aftab"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  title="Full name of the sender or recruiter"
                  className="form-input"
                  placeholder="e.g., Rahul Sharma"
                  toolparamdescription="Full name of the person or recruiter reaching out, e.g., Rahul Sharma"
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
                  title="Reply email address of the sender"
                  className="form-input"
                  placeholder="e.g., rahul@company.com"
                  toolparamdescription="Contact email address for reply, e.g., rahul@company.com"
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
                title="Category of marketing engagement or role opportunity"
                className="form-select"
                toolparamdescription="Category of engagement requested"
                value={formData.inquiryType}
                onChange={handleInputChange}
              >
                <option value="Full-Time Role Opportunity">Full-Time Role Opportunity</option>
                <option value="Freelance Meta / Google Ads Project">Freelance Meta / Google Ads Project</option>
                <option value="Shopify / WooCommerce / Amazon Scaling">Shopify / WooCommerce / Amazon Scaling</option>
                <option value="Monthly Growth Consulting / CRO Audit">Monthly Growth Consulting / CRO Audit</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Project or Role Details *</label>
              <textarea
                id="message"
                name="message"
                title="Detailed message describing the role, website URL, monthly ad budget, or growth goals"
                className="form-textarea"
                placeholder="Share your store URL, monthly ad spend, target ROAS, or role details..."
                toolparamdescription="Project goals, website URL for audit, monthly ad budget, or role details"
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
            &copy; {new Date().getFullYear()} Ayaz Aftab — Performance Marketing &amp; E-commerce Growth Lead (Kolkata, India). All rights reserved.
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

const CaseStudyPage = ({ project }: { project: Project }) => {
  const relatedProjects = projectsData.filter((p) => p.id !== project.id);

  return (
    <>
      <section className="subpage-hero" aria-labelledby="case-study-page-title">
        <AnimatedSection className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb-nav">
              <li><a href="/" className="breadcrumb-link">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/#projects" className="breadcrumb-link">Case Studies</a></li>
              <li aria-hidden="true">/</li>
              <li className="breadcrumb-current" aria-current="page">{project.client}</li>
            </ol>
          </nav>

          <span className="hero-role-kicker">{project.client} • Performance &amp; E-commerce Case Study</span>
          <h1 id="case-study-page-title" className="section-title" style={{ marginBottom: '0.85rem' }}>
            {project.title}
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '1.35rem', maxWidth: '760px' }}>
            {project.summary}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <span className="project-badge" style={{ fontSize: '0.88rem', padding: '0.35rem 0.9rem' }}>
              Verified Impact: {project.keyResult}
            </span>
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        </AnimatedSection>
      </section>

      <section className="case-study-page-section">
        <AnimatedSection className="container">
          <div className="modal-grid">
            <div className="modal-main-content">
              <div className="modal-section">
                <h2 className="modal-section-title">1. The Business Challenge</h2>
                <p>{project.challenge}</p>
              </div>

              <div className="modal-section">
                <h2 className="modal-section-title">2. My Role &amp; Ownership</h2>
                <p>{project.role}</p>
              </div>

              <div className="modal-section">
                <h2 className="modal-section-title">3. Full-Funnel Strategy &amp; Architecture</h2>
                <p>{project.strategy}</p>
              </div>

              <div className="modal-section">
                <h2 className="modal-section-title">4. Campaign Execution &amp; CRO</h2>
                <p>{project.execution}</p>
              </div>

              {project.testimonial && (
                <div className="modal-section">
                  <h2 className="modal-section-title">5. Client Endorsement</h2>
                  <blockquote className="testimonial-quote" style={{ marginBottom: 0 }}>
                    &ldquo;{project.testimonial}&rdquo;
                  </blockquote>
                </div>
              )}

              <div className="modal-section" style={{ marginTop: '2rem', marginBottom: 0 }}>
                <h2 className="modal-section-title">6. Campaign Performance Visuals</h2>
                <div className="visuals-stack">
                  {project.visuals.map((vis, idx) => (
                    <img
                      key={vis}
                      src={vis}
                      alt={`${project.title} — Performance Breakdown ${idx + 1}`}
                      className="carousel-image"
                      width="800"
                      height="450"
                      loading={idx === 0 ? 'eager' : 'lazy'}
                    />
                  ))}
                </div>
              </div>
            </div>

            <aside className="modal-sidebar" aria-label="Verified Key Results">
              <div className="modal-sidebar-box">
                <h2 className="modal-section-title">Verified Key Results</h2>
                <ul className="modal-results-list">
                  {project.results.map((result, index) => (
                    <li key={index} className="modal-result-item">
                      <Icon name="check-circle" size={16} />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Discuss a Similar Campaign</span>
                    <Icon name="arrow-right" size={16} />
                  </a>
                  <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%' }}>
                    <Icon name="download" size={16} />
                    <span>Download Master Resume</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-alt" aria-labelledby="related-studies-heading">
        <AnimatedSection className="container">
          <div className="section-header">
            <span className="section-eyebrow">Explore More Proven Results</span>
            <h2 id="related-studies-heading" className="section-title">Other Performance &amp; E-commerce Case Studies</h2>
          </div>
          <div className="projects-grid">
            {relatedProjects.map((rel) => (
              <article key={rel.id} className="project-card">
                <a href={`/case-studies/${rel.slug}`} className="project-image-container">
                  <img
                    src={rel.imageUrl}
                    alt={`${rel.title} — ${rel.client}`}
                    className="project-image"
                    loading="lazy"
                    width="800"
                    height="450"
                  />
                </a>
                <div className="project-content">
                  <div className="project-meta-row">
                    <span className="project-client">{rel.client}</span>
                    <span className="project-badge">{rel.keyResult}</span>
                  </div>
                  <h3 className="project-title">
                    <a href={`/case-studies/${rel.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                      {rel.title}
                    </a>
                  </h3>
                  <p className="project-summary">{rel.summary}</p>
                  <a href={`/case-studies/${rel.slug}`} className="btn btn-secondary project-card-btn">
                    <span>Read Case Study</span>
                    <Icon name="arrow-right" size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

const ResumePage = () => (
  <>
    <section className="subpage-hero" aria-labelledby="resume-page-title">
      <AnimatedSection className="container">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb-nav">
            <li><a href="/" className="breadcrumb-link">Home</a></li>
            <li aria-hidden="true">/</li>
            <li className="breadcrumb-current" aria-current="page">Master Resume</li>
          </ol>
        </nav>

        <span className="hero-role-kicker">Kolkata, West Bengal, India • +91 9263588321 • ayazaftab9@gmail.com</span>
        <h1 id="resume-page-title" className="section-title" style={{ marginBottom: '0.65rem' }}>
          Ayaz Aftab — Performance Marketing &amp; E-commerce Growth Lead
        </h1>
        <p className="section-subtitle" style={{ maxWidth: '820px', marginBottom: '1.5rem' }}>
          Performance Marketing &amp; E-commerce Specialist with 5.5+ years of experience scaling D2C, B2B, and marketplace brands. Proven track record of managing monthly paid ad spend exceeding ₹6L+ across Meta and Google at a sustained 4.0x–4.5x ROAS, driving 9,452+ qualified acquisitions, and lifting store conversions by 20%. Deep proficiency in Shopify/WooCommerce operations, Google Merchant Center feeds, GA4 custom event tracking, and direct-response creative testing.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Icon name="download" size={16} />
            <span>Download Master Resume (PDF)</span>
          </a>
          <a href="https://www.linkedin.com/in/ayazaftab" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Icon name="linkedin" size={16} />
            <span>LinkedIn Profile</span>
          </a>
          <a href="/" className="btn btn-ghost">
            <span>Back to Portfolio Overview</span>
          </a>
        </div>
      </AnimatedSection>
    </section>

    <ProvenImpact />
    <ExperienceSection />
    <Skills />
  </>
);

export const App = ({ initialPath }: { initialPath?: string } = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const rawPath = initialPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const currentPath = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : '/';

  useEffect(() => {
    registerWebMCPTools();
  }, []);

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

  const matchedCaseStudy = currentPath.startsWith('/case-studies/')
    ? projectsData.find((p) => `/case-studies/${p.slug}` === currentPath)
    : undefined;

  return (
    <>
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main id="main-content">
        {currentPath === '/resume' ? (
          <ResumePage />
        ) : matchedCaseStudy ? (
          <CaseStudyPage project={matchedCaseStudy} />
        ) : (
          <>
            <Hero />
            <ProvenImpact />
            <ExperienceSection />
            <FeaturedProjects onProjectClick={handleProjectClick} />
            <GrowthProcess />
            <Services />
            <Testimonials onProjectClick={handleProjectClick} />
            <Skills />
            <FAQSection />
          </>
        )}
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

