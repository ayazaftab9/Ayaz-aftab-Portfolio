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

export interface ServicePageData {
  slug: string;
  shortName: string;
  eyebrow: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroSummary: string;
  keyMetricBadge: string;
  targetAudience: string;
  deliverables: string[];
  methodology: string;
  proofPoints: string[];
  relatedCaseStudyIds: number[];
  faqs: { q: string; a: string }[];
}

const WHATSAPP_URL =
  'https://wa.me/919263588321?text=Hi%20Ayaz%2C%20I%20visited%20your%20website%20and%20want%20to%20discuss%20digital%20marketing%20services%20to%20scale%20our%20leads%20and%20sales.';

// --- DATA ---
export const servicePagesData: ServicePageData[] = [
  {
    slug: 'performance-marketing-meta-google-ads',
    shortName: 'Google Ads & Meta Ads (Facebook/Instagram)',
    eyebrow: 'Paid Media & Daily Lead Generation Services India',
    title: 'Google Ads & Meta Ads Specialist in India: ₹35L+/Mo Combined Ad Spend Managed at 4.0x–4.5x ROAS',
    metaTitle: 'Google Ads & Meta Ads Freelancer India (₹35L+/Mo Managed) | Ayaz Aftab',
    metaDescription: 'Hire India’s trusted Google Ads & Facebook/Instagram Ads specialist. Currently managing ₹35L+ combined monthly ad budgets at 4.0x–4.5x ROAS and 9,452+ leads at 35% lower CPA.',
    heroSummary: 'Stop burning budget on clicks that never convert. I personally architect and scale high-converting Google Ads and Facebook/Instagram (Meta) Ads that deliver daily qualified leads, WhatsApp inquiries, and direct online orders—backed by ₹35L+ in combined monthly ad spend managed at a sustained 4.0x–4.5x ROAS.',
    keyMetricBadge: '₹35L+/Mo Combined • 4.0x–4.5x ROAS',
    targetAudience: 'Built for D2C brands, e-commerce stores, real estate developers, healthcare clinics, coaching institutes, and B2B enterprises across India (Kolkata, Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Chennai) and global markets seeking predictable paid growth.',
    deliverables: [
      'Meta Ads Manager Architecture (Facebook & Instagram CBO/ABO, Lookalikes, Dynamic Product Catalog Ads & Retargeting)',
      'Google Ads Full-Funnel Management (High-Intent Search, Performance Max Asset Groups, Shopping & YouTube)',
      'Google Merchant Center Setup, Feed Indexing & Custom Label Segmentation',
      'Weekly Direct-Response Creative Testing (3–5 Ad Concepts/Week: Unboxing Hooks, UGC Videos, Carousels)',
      'High-Volume Lead Generation Funnels Connected Directly to WhatsApp & HubSpot CRM',
      'Transparent Daily Budget Pacing & Live Looker Studio ROAS/CPL Dashboards'
    ],
    methodology: 'Every campaign is built on a simple, disciplined 3-step system: (1) Capture high-intent buyers actively searching on Google or scrolling on Instagram/Facebook, (2) Test 3–5 clear, thumb-stopping video and carousel ad hooks every week, and (3) Track every single call, WhatsApp lead, and purchase via server-side GA4 & Meta CAPI so budget flows strictly into profitable ads.',
    proofPoints: [
      'Currently managing ₹35L+ in combined monthly paid media budgets across multi-brand D2C, retail, and lead generation portfolios (including FFACE — GM Modular & Decoy Luxury Perfumes) at 4.0x–4.5x ROAS',
      'Scaled Google PMax, Search & Meta retargeting campaigns for Jaffri Creations at 4.5x ROAS (34,900+ commercial buyer clicks)',
      'Delivered 9,452 verified customer leads for MTEI Services while reducing cost-per-lead by 35% (₹49.86 CPL)'
    ],
    relatedCaseStudyIds: [1, 2, 3],
    faqs: [
      {
        q: 'What monthly ad budgets do you manage across Google Ads and Meta Ads?',
        a: 'I currently manage ₹35L+ in combined monthly ad spend across D2C, retail, and B2B client portfolios. Individual client budgets range from ₹25,000/month for focused local lead generation up to ₹6L–₹15L+/month for national e-commerce and multi-city scaling.'
      },
      {
        q: 'How quickly do leads and sales start once campaigns launch?',
        a: 'Once tracking and ad campaigns go live (within 48–72 hours), qualified inquiries, phone calls, WhatsApp messages, and orders begin immediately, while cost-per-lead and ROAS compound weekly through creative testing.'
      },
      {
        q: 'Why work directly with you instead of a traditional digital marketing agency?',
        a: 'Instead of paying heavy agency retainers to have a junior executive learn on your budget, your campaigns are personally managed by a Google & Meta Certified growth lead managing ₹35L+/mo—with direct WhatsApp access and full transparency.'
      }
    ]
  },
  {
    slug: 'ecommerce-growth-shopify-woocommerce-amazon',
    shortName: 'Shopify, WooCommerce & Amazon Growth',
    eyebrow: 'D2C Storefront & Marketplace Scaling Services India',
    title: 'Shopify, WooCommerce & Amazon Growth Specialist in India: Scale Your Online Store Revenue',
    metaTitle: 'Shopify, WooCommerce & Amazon Marketing Expert India | E-commerce Growth — Ayaz Aftab',
    metaDescription: 'Scale your D2C Shopify, WooCommerce, and Amazon Seller Central sales. Proven e-commerce specialist delivering ₹7.95L+ direct store GMV, +40% Amazon visibility, and +20% checkout CVR.',
    heroSummary: 'Turn your online store and marketplace listings into a high-margin sales engine. I help D2C founders and manufacturers across India optimize and scale their Shopify, WooCommerce, and Amazon Seller Central stores—lifting checkout conversions by +20% and growing repeat orders.',
    keyMetricBadge: '₹7.95L+ Direct GMV • +40% Amazon Reach',
    targetAudience: 'Ideal for D2C brands, luxury perfume & beauty labels, fashion & apparel stores, home decor manufacturers, and omnichannel sellers across Shopify, WooCommerce, and Amazon India/Global.',
    deliverables: [
      'End-to-End Shopify & WooCommerce Store Administration, Merchandising & Speed Optimization',
      'Average Order Value (AOV) Boosters: Discovery Sets, Tiered Bundles & Cross-Sell Flows',
      'Amazon Seller Central Management (100+ SKU Indexing, Backend Keywords, Pricing & Inventory)',
      'High-Converting Amazon A+ Content, Brand Storefront Design & Sponsored Ads (PPC)',
      'Product Page & Mobile Checkout CRO to Lift Conversion Rates by +20%',
      'Automated WhatsApp & Email Cart Recovery to Win Back Abandoned Checkouts'
    ],
    methodology: 'Paid ads only scale profitably when your store converts mobile visitors effortlessly. I pair fast, trust-rich Shopify and WooCommerce product pages, discovery set bundles, and streamlined checkouts with keyword-indexed Amazon A+ content.',
    proofPoints: [
      'Leading end-to-end Shopify e-commerce operations, discovery sets, and checkout CRO for Decoy Luxury Perfumes (FFACE)',
      'Generated ₹7.95 Lakhs in direct GMV across WooCommerce and Amazon Seller Central for Jaffri Creations across 100+ SKUs',
      'Increased Amazon marketplace listing discoverability by +40% and organic store traffic by +30%'
    ],
    relatedCaseStudyIds: [1, 2],
    faqs: [
      {
        q: 'Can you manage both our D2C website (Shopify/WooCommerce) and our Amazon Seller Central account?',
        a: 'Yes. I manage your D2C Shopify or WooCommerce storefront alongside your Amazon Seller Central catalog, A+ content, and Sponsored Ads so both channels grow profitably together.'
      },
      {
        q: 'How do you increase store sales without increasing ad spend?',
        a: 'By introducing discovery sets, tiered product bundles, clear trust signals, faster mobile product pages, simplified checkout steps, and automated WhatsApp cart recovery—lifting conversion rates by up to 20%.'
      },
      {
        q: 'Do you handle large catalogs with 100+ products?',
        a: 'Yes. I have hands-on experience optimizing 100+ SKU catalogs across Shopify, WooCommerce, Google Merchant Center, and Amazon Seller Central.'
      }
    ]
  },
  {
    slug: 'seo-local-seo-youtube-growth',
    shortName: 'SEO, Google Maps & YouTube Ranking',
    eyebrow: 'Organic Search, Local Maps & Video Discovery Services',
    title: 'SEO Services in India: Rank #1 on Google Search, Google Maps (Local SEO) & YouTube',
    metaTitle: 'Best SEO Freelancer & Services in India | Google Ranking, Local SEO & YouTube — Ayaz Aftab',
    metaDescription: 'Rank your business #1 on Google Search, Google Maps, and YouTube. Proven SEO specialist in India delivering +30% organic traffic, 247,000+ YouTube views, and 1,465+ local buyer actions.',
    heroSummary: 'Capture high-intent customers 24/7 without paying for every click. I execute clean, compounding Technical SEO, On-Page SEO, Google Business Profile (Local Maps) ranking, and YouTube Video SEO so your business ranks #1 when customers across India search for your services.',
    keyMetricBadge: '+30% Organic Traffic • 247K+ YouTube Views',
    targetAudience: 'Designed for service businesses, D2C e-commerce brands, doctors & clinics, real estate firms, CA/financial practices, and multi-location businesses across India seeking sustainable #1 Google rankings.',
    deliverables: [
      'Complete Technical SEO Audit & 100/100 Core Web Vitals Speed Optimization',
      'Commercial Buyer Keyword Research & Competitor Gap Analysis via Semrush',
      'On-Page SEO for Service Landing Pages, City Pages & E-commerce Collections',
      'Google Business Profile (Local Maps SEO) Optimization for Direct Customer Calls',
      'Schema.org JSON-LD Rich Results & AI Answer Engine Optimization (ChatGPT, Perplexity, Google AI)',
      'YouTube Video SEO (Search Trend Mapping, Titles, Chapters, Thumbnail CTR & Shorts Strategy)'
    ],
    methodology: 'Modern organic dominance requires ranking across Google Web Search, Google Maps, AI Answer Engines, and YouTube simultaneously. I eliminate technical crawl bottlenecks first, deploy rich Schema.org structured data, and build authoritative pages around high-intent buyer searches.',
    proofPoints: [
      'Boosted organic website search traffic by +30% and Amazon organic discoverability by +40% for Jaffri Creations',
      'Scaled Jaffri Creations YouTube channel from scratch to 247,000+ organic views and 5,200+ watch hours with zero paid video spend',
      'Delivered +25% YoY organic search traffic growth for HICO Tax Consultant and 1,465+ Google Business Profile customer interactions'
    ],
    relatedCaseStudyIds: [2, 4],
    faqs: [
      {
        q: 'How soon can we see ranking and traffic improvements from SEO?',
        a: 'Technical SEO fixes, indexing, Google Business Profile (Local SEO), and YouTube Video SEO typically generate measurable impression and call lifts within 3–6 weeks, while competitive national keywords compound over 3–6 months.'
      },
      {
        q: 'Do you optimize websites for AI search engines (ChatGPT, Perplexity, Google AI Overviews)?',
        a: 'Yes. Every website I optimize includes Schema.org JSON-LD graphs, pre-rendered semantic HTML, llms.txt, and Agentic Resource Discovery (ard.json) so both Google and AI search engines recommend your business.'
      },
      {
        q: 'Can Local SEO help my business get more phone calls in my city?',
        a: 'Absolutely. Optimizing your Google Business Profile for local commercial searches is proven to drive 1,465+ direct customer calls, map direction requests, and website visits.'
      }
    ]
  },
  {
    slug: 'ga4-gtm-capi-tracking-cro',
    shortName: 'Website CRO & Server-Side Ad Tracking',
    eyebrow: 'Conversion Rate Optimization & Full-Funnel Attribution',
    title: 'Website Conversion Optimization (CRO) & Server-Side Tracking (GA4, GTM, Meta CAPI)',
    metaTitle: 'Website CRO, GA4, Google Tag Manager & Meta CAPI Expert India | Ayaz Aftab',
    metaDescription: 'Turn 20% more website visitors into leads and sales. Expert setup for Landing Page CRO, Google Analytics 4 (GA4), Google Tag Manager (GTM), and Meta Pixel/CAPI in India.',
    heroSummary: 'Stop losing 30% of your ad attribution to browser privacy updates and leaky landing pages. I implement bulletproof GA4 custom events, Google Tag Manager (GTM), Meta Pixel + Conversions API (CAPI), Looker Studio dashboards, and landing page CRO that lifts conversions by +20%.',
    keyMetricBadge: '+20% Conversion Lift • 100% Attribution',
    targetAudience: 'Essential for D2C brands, performance marketing teams, and lead-generation businesses scaling ₹1L–₹35L+/mo ad budgets who need accurate tracking and higher landing page conversion rates.',
    deliverables: [
      'High-Converting Landing Page & Checkout CRO (+20% CVR Lift & -15% Bounce Rate)',
      'Google Analytics 4 (GA4) Custom Event Architecture (view_item, add_to_cart, purchase, generate_lead)',
      'Google Tag Manager (GTM) Web & Server-Side Trigger Configuration',
      'Meta Pixel & Conversions API (CAPI) Deduplicated Tracking for Maximum Event Match Quality',
      'Real-Time Looker Studio Executive Dashboards (Spend, ROAS, CPL & Organic Growth)',
      'HubSpot CRM, WhatsApp & Automated Email Lead Nurture Workflows'
    ],
    methodology: 'Meta and Google bidding algorithms are only as effective as the conversion signals you feed them. I repair every tracking signal across GTM, GA4, and Meta CAPI first, then run structured A/B tests on landing page headlines, trust proof, and lead/checkout forms.',
    proofPoints: [
      'Lifted landing page conversion rates by +20%, reduced bounce rates by 15%, and cut CPA/CPL by 35% across 9,452 acquisitions for MTEI Services',
      'Configured GTM/GA4 custom purchase events and Meta Pixel/CAPI tracking across ₹35L+/mo combined paid media portfolios',
      'Built automated HubSpot CRM lead segmentation and nurture workflows for HICO Tax Consultant'
    ],
    relatedCaseStudyIds: [1, 3],
    faqs: [
      {
        q: 'Why is Meta Conversions API (CAPI) and GA4 custom tracking essential before scaling ad spend?',
        a: 'Ad blockers and iOS privacy restrictions hide 25–35% of standard browser pixel conversions. Implementing Meta CAPI alongside GTM and GA4 restores lost purchase and lead signals so ad algorithms optimize for real buyers.'
      },
      {
        q: 'What does a Landing Page & Checkout CRO audit cover?',
        a: 'I diagnose visitor drop-off points in GA4, refine above-the-fold messaging, speed up mobile load times to 100/100 Core Web Vitals, and streamline WhatsApp, lead, and checkout flows.'
      },
      {
        q: 'Do you build live Looker Studio reporting dashboards?',
        a: 'Yes. I build clean Looker Studio dashboards combining Google Ads, Meta Ads, GA4, and Search Console so you can monitor spend, ROAS, and leads in real time.'
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    slug: 'fface-gm-modular-decoy-luxury-paid-media-ecommerce',
    category: 'ppc',
    client: 'FFACE (GM Modular & Decoy Luxury) & Multi-Brand Portfolio',
    title: '₹35L+/Mo Combined Meta & Google Ads Scaling at 4.0x ROAS + Shopify CRO',
    imageUrl: '/images/case-study-fface-roas.svg',
    keyResult: '₹35L+/Mo Combined • 4.0x ROAS',
    summary: 'Directing ₹35L+ in combined monthly paid media budgets across Meta Ads and Google Ads (including ₹6L+/mo flagship luxury & retail mandates at FFACE) at a sustained 4.0x ROAS alongside full-funnel Shopify CRO and GTM/GA4/CAPI attribution.',
    tags: ['₹35L+/Mo Paid Media', 'Meta Ads (CBO/ABO)', 'Google Ads (PMax)', 'Shopify CRO', 'GA4 & Meta CAPI'],
    challenge: 'Scale profitable customer acquisition, dealer demand, and repeat D2C orders across luxury fragrance (Decoy Luxury), retail electricals (GM Modular), and high-growth client portfolios while maintaining strict 4.0x+ ROAS guardrails.',
    role: 'As Performance Marketing & E-commerce Growth Lead (Kolkata), I oversee ₹35L+ in combined monthly paid media P&L across active mandates, Shopify storefront merchandising & checkout CRO, weekly creative testing, and server-side GA4/CAPI tracking.',
    strategy: 'Paired full-funnel Meta Ads (CBO/ABO prospect testing + dynamic catalog retargeting) and Google Search/PMax with Shopify AOV boosters (discovery sets, tiered bundle offers) and server-side Conversions API (CAPI) signal recovery.',
    execution: 'Produced and iterated 3–5 weekly direct-response creative concepts (unboxing hooks, UGC angles, static carousels) to prevent ad fatigue. Configured GTM custom purchase events, GA4 funnel attribution, and Meta CAPI to maximize algorithmic bidding accuracy.',
    results: [
      'Directing ₹35L+ combined monthly ad spend across Meta & Google Ads at a sustained 4.0x–4.5x ROAS',
      'Managing flagship ₹6L+/mo FFACE portfolio (Decoy Luxury Perfumes & GM Modular) at 4.0x ROAS',
      'Led Decoy Luxury Shopify store ops, discovery sets & checkout CRO to lift AOV and conversion rate',
      'Executed GM Modular dynamic product catalog ads & localized dealer/retail demand capture',
      'Implemented GTM/GA4 custom purchase tracking and Meta Pixel + Conversions API (CAPI)'
    ],
    testimonial: 'Ayaz brought immediate structure to our paid media and Shopify funnel—scaling monthly ad budgets with precision while holding a consistent 4.0x ROAS.',
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
    summary: 'Scaled D2C WooCommerce and Amazon Seller Central storefronts to ₹7.95L in direct GMV while managing Google PMax & Meta campaigns at 4.5x ROAS and +30% organic SEO growth.',
    tags: ['Amazon Seller Central', 'Google PMax & Shopping', 'WooCommerce', 'Technical SEO', 'A+ Content'],
    challenge: 'Establish a profitable multi-channel e-commerce engine across D2C WooCommerce and Amazon Seller Central while capturing high-intent commercial buyers via paid and organic search.',
    role: 'As Digital Marketing Executive (Growth & Operations), I owned end-to-end e-commerce operations, Google PMax & Meta Ads management, Amazon A+ catalog optimization, and technical SEO.',
    strategy: 'Built a three-pillar growth engine: (1) optimizing 100+ SKUs across WooCommerce and Amazon Seller Central, (2) running Google Performance Max, Search & Meta retargeting campaigns at 4.5x ROAS, and (3) scaling organic search visibility.',
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
    keyResult: '9,452 Leads • ₹49.86 CPL',
    summary: 'Engineered full-funnel Meta & Google acquisition campaigns generating 9,452 qualified customer leads, reducing CPA/CPL by 35% (₹49.86/lead) and lifting landing page CVR by 20%.',
    tags: ['Meta Ads', 'Google Ads', 'Landing Page CRO', 'A/B Testing', 'Lead Generation'],
    challenge: 'Generate a high daily volume of qualified customer and student acquisitions within strict cost-per-lead targets while eliminating mobile landing page drop-offs.',
    role: 'Served as Performance Marketing & CRO Specialist (Contract) responsible for Meta & Google campaign architecture, multivariate creative testing, and landing page conversion rate optimization (CRO).',
    strategy: 'Built segmented full-funnel paid campaigns combining custom lookalike audiences, high-intent search capture, and streamlined mobile-first lead capture landing pages.',
    execution: 'Conducted rapid A/B testing across ad creatives, headlines, audience segments, and bidding strategies. Redesigned landing page layouts, trust signals, and form friction points to maximize submission velocity.',
    results: [
      'Generated 9,452 qualified customer acquisitions across paid social and search funnels',
      'Reduced Cost Per Acquisition / Cost Per Lead (CPA/CPL) by 35% (averaging ₹49.86 CPL)',
      'Lifted landing page conversion rates (CVR) by +20% and reduced bounce rates by 15%',
      'Managed ₹4.7 Lakhs in campaign spend with sustained positive client ROI'
    ],
    testimonial: 'The acquisition campaigns and landing page CRO executed by Ayaz were a game-changer—delivering 9,452 qualified conversions while slashing our CPA by 35%.',
    visuals: ['/images/case-study-mtei-leads.svg'],
  },
  {
    id: 4,
    slug: 'jaffri-creations-youtube-seo-organic-growth',
    category: 'seo',
    client: 'Jaffri Creations Fountain Decor Pvt. Ltd.',
    title: 'YouTube Video SEO & Organic Discovery Engine (247,000+ Views)',
    imageUrl: '/images/case-study-youtube-growth.svg',
    keyResult: '247,000+ Organic Views',
    summary: 'Scaled organic video discovery from scratch to 247,000+ views and 5,200+ watch hours using YouTube Video SEO, keyword trend mapping, and high-retention content structuring.',
    tags: ['YouTube Video SEO', 'Short-Form Hooks', 'Keyword Research', 'Organic Discovery', 'Brand Authority'],
    challenge: 'Build sustainable top-of-funnel product discovery and brand authority without relying on paid video advertising.',
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
    role: 'Performance Marketing & E-commerce Specialist (Managing ₹35L+/Mo Combined Portfolio)',
    company: 'FFACE (GM Modular & Decoy Luxury Perfumes) & Growth Consulting Mandates',
    period: 'Nov 2025 – Present',
    location: 'Kolkata, West Bengal, India (Pan-India & Global)',
    bullets: [
      'Direct ₹35L+ in combined monthly paid media budgets across active D2C, retail, and growth consulting portfolios (including ₹6L+/mo flagship luxury & retail mandates for FFACE — GM Modular & Decoy Luxury Perfumes) at a sustained 4.0x–4.5x ROAS.',
      'Lead end-to-end Shopify e-commerce operations for Decoy Luxury, overseeing catalog merchandising, bundle/discovery set offers, and checkout CRO to grow AOV and repeat purchases.',
      'Execute multi-channel digital campaigns and dynamic product catalog ads for GM Modular to boost brand visibility, dealer inquiries, and localized retail demand.',
      'Partner with creative teams to test 3–5 weekly ad concepts (unboxing hooks, UGC angles, static carousels), combating ad fatigue and improving thumb-stop ratios.',
      'Manage GTM/GA4 custom purchase events and Meta Pixel/CAPI tracking to ensure accurate full-funnel attribution across all managed accounts.'
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
    step: '01 / Audit & Attribution',
    title: 'GA4, GTM & Meta CAPI Diagnostics',
    description: 'I audit your website speed, landing pages, and ad accounts first—configuring 100% accurate GA4 custom events, Google Tag Manager, and Meta CAPI so every lead and sale is tracked.'
  },
  {
    step: '02 / Buyer Architecture',
    title: 'High-Intent Google & Meta Funnels',
    description: 'Structuring high-ROAS Meta Ads (CBO/ABO), Google Search, Shopping & Performance Max campaigns alongside #1 Google SEO pages targeting ready-to-buy customers across India.'
  },
  {
    step: '03 / Creative & Store CRO',
    title: 'Weekly Ad Hooks & +20% Website CVR',
    description: 'Testing 3–5 fresh video and carousel ad concepts weekly while optimizing your Shopify, WooCommerce, Amazon, or lead landing pages to convert 20% more visitors.'
  },
  {
    step: '04 / Profitable Scale',
    title: '₹35L+/Mo Disciplined Budget Pacing',
    description: 'Scaling winning campaigns at a sustained 4.0x–4.5x ROAS and 35% lower cost-per-lead, backed by live Looker Studio reporting and automated WhatsApp/CRM follow-ups.'
  }
];

const servicesData = [
  {
    id: 'service-freelance',
    title: 'Hire Me as Your Growth & Ads Partner',
    description: 'Work directly with a senior specialist currently managing ₹35L+ in combined monthly ad spend. Ideal for businesses, startups, and D2C brands seeking daily leads and 4x sales without agency markups.',
    items: [
      'Google Ads & Meta Ads Management (4.0x–4.5x Sustained ROAS)',
      'Complete Website SEO, Local Google Maps SEO & YouTube Ranking',
      'Shopify, WooCommerce & Amazon Store Revenue Scaling',
      'Direct WhatsApp Access & Live Looker Studio Executive Dashboards'
    ],
    cta: 'Book a Consultation on WhatsApp',
    href: WHATSAPP_URL,
    icon: 'whatsapp',
    isWhatsapp: true
  },
  {
    id: 'service-consulting',
    title: 'Monthly Retainer & Full-Funnel CRO',
    description: 'End-to-end performance marketing and conversion rate optimization retainer for brands looking to cut acquisition costs by 35%, rank #1 on Google, and scale monthly revenue.',
    items: [
      'Full-Funnel Lead Generation & E-commerce P&L Scaling',
      'Landing Page & Checkout CRO (+20% Conversion Lift)',
      'GA4 Custom Events, GTM & Server-Side Meta CAPI Setup',
      'WhatsApp, Email & HubSpot CRM Automated Lead Workflows'
    ],
    cta: 'Request a Custom Growth Plan',
    href: '#contact',
    icon: 'arrow-right',
    isWhatsapp: false
  },
  {
    id: 'service-full-time',
    title: 'Executive Growth Lead / Head of Paid Media',
    description: 'Available for Senior Performance Marketing Manager, E-commerce Growth Lead, or Head of Digital roles (5.5+ years experience managing ₹35L+/mo combined ad budgets).',
    items: [
      '₹35L+/Mo Combined Meta & Google Ads (PMax/Shopping) Experience',
      'Shopify, WooCommerce & Amazon Seller Central Operations',
      'GA4, GTM, Meta CAPI & Full-Funnel Attribution Ownership',
      'High-Velocity Creative Testing & Cross-Functional Leadership'
    ],
    cta: 'Download Master Resume (PDF)',
    href: '/resume.pdf',
    icon: 'download',
    download: true,
    isWhatsapp: false
  }
];

const indiaIndustriesData = [
  {
    title: 'D2C Brands, Shopify & Amazon Sellers',
    badge: '4.0x–4.5x ROAS • ₹7.95L+ GMV',
    description: 'Scale daily online orders for luxury fragrances, fashion, beauty, electronics, and home decor using Meta Ads, Google Shopping/PMax, Shopify CRO, and Amazon A+ listings.'
  },
  {
    title: 'Real Estate, Interior Design & Architecture',
    badge: 'Qualified Site-Visit Leads',
    description: 'Generate verified high-ticket buyer inquiries and site-visit bookings via precision Google Search Ads, Meta Lead Forms, and fast mobile landing pages.'
  },
  {
    title: 'Healthcare Clinics, Doctors & Hospitals',
    badge: '#1 Google Maps & Patient Calls',
    description: 'Dominate local Google Search and Google Maps when patients search in your city, paired with call-focused Google Ads and WhatsApp appointment funnels.'
  },
  {
    title: 'EdTech, Coaching Institutes & Universities',
    badge: '9,452+ Leads at ₹49.86 CPL',
    description: 'Scale student admissions with proven acquisition funnels across Instagram, Facebook, YouTube, and Google Search at 35% lower cost per inquiry.'
  },
  {
    title: 'B2B Enterprises, Finance, CA & Legal Firms',
    badge: '+25% YoY Organic SEO Growth',
    description: 'Capture commercial decision-makers across India and global markets through Google Search Ads, LinkedIn B2B Ads, Technical SEO, and HubSpot CRM automation.'
  },
  {
    title: 'Retail Franchises & Multi-City Businesses',
    badge: '1,465+ Local Buyer Actions',
    description: 'Turn local search intent into store walk-ins, dealer inquiries, and WhatsApp orders via Google Business Profile optimization and hyper-local paid media.'
  }
];

const indiaCitiesList = [
  'Kolkata',
  'Mumbai',
  'Delhi NCR (Gurugram & Noida)',
  'Bengaluru',
  'Hyderabad',
  'Pune',
  'Chennai',
  'Ahmedabad',
  'Jaipur',
  'Surat',
  'Lucknow',
  'Chandigarh',
  'Indore',
  'Kochi',
  'UAE (Dubai)',
  'UK, US & Global Remote'
];

const faqData = [
  {
    id: 'faq-why-hire',
    question: 'What scale of monthly ad budgets and results does Ayaz Aftab manage?',
    answer: 'Ayaz Aftab is a Performance Marketing & E-commerce Growth Lead with 5.5+ years of experience currently managing ₹35L+ in combined monthly paid media budgets across D2C, retail, and lead-generation portfolios (including FFACE — GM Modular & Decoy Luxury Perfumes) at a sustained 4.0x–4.5x ROAS. His verified track record includes 9,452+ customer acquisitions at ₹49.86 CPL (-35% CPA), +20% store conversion lift, ₹7.95L+ direct WooCommerce/Amazon GMV, and 247,000+ organic YouTube views.'
  },
  {
    id: 'faq-services-offered',
    question: 'What digital marketing services do you offer for businesses across India?',
    answer: 'I provide four core growth services across India and global remote markets: (1) Google Ads & Meta Ads (Facebook/Instagram) management for daily leads and 4x e-commerce sales, (2) Technical SEO, Local SEO (Google Maps), and YouTube Video SEO to rank #1 organically, (3) Shopify, WooCommerce, and Amazon Seller Central store scaling, and (4) Website Conversion Rate Optimization (CRO) with server-side GA4, GTM, and Meta CAPI tracking.'
  },
  {
    id: 'faq-cities',
    question: 'Do you work with clients all over India and internationally?',
    answer: 'Yes. While based in Kolkata, I partner with founders, D2C brands, and enterprises across Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Chennai, Ahmedabad, Jaipur, and all over India, as well as international clients in the UAE, UK, and US—with direct WhatsApp communication (+91 9263588321) and live Looker Studio reporting.'
  },
  {
    id: 'faq-how-to-start',
    question: 'How can we book a consultation or request a free website and ads audit?',
    answer: 'Click "Book a Consultation" (WhatsApp +91 9263588321) or submit your website and goals in the audit form below. I will personally audit your ad accounts, tracking setup, and website conversion funnel and share a clear growth roadmap within 24 hours.'
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
      description: 'Retrieve structured profile, digital marketing services in India, verified ₹35L+/mo combined ad spend and ROAS metrics, work history, skills, certifications, and contact information for Ayaz Aftab.',
      inputSchema: {
        type: 'object',
        properties: {},
      },
      execute: async () => {
        return JSON.stringify({
          name: 'Ayaz Aftab',
          role: 'Performance Marketing & E-commerce Growth Lead | Digital Marketing Freelancer & Services India',
          experienceYears: '5.5+',
          location: 'Kolkata, West Bengal, India (Serving All Over India & Global Remote)',
          phone: '+91 9263588321',
          whatsapp: 'https://wa.me/919263588321',
          email: 'ayazaftab9@gmail.com',
          linkedin: 'https://www.linkedin.com/in/ayazaftab',
          resumeUrl: 'https://ayaz-aftab-portfolio.vercel.app/resume.pdf',
          metrics: {
            combinedMonthlyAdSpendManaged: 'INR 35,00,000+ (₹35L+/mo combined across portfolios)',
            sustainedROAS: '4.0x - 4.5x ROAS',
            qualifiedAcquisitions: '9,452+ Leads (-35% CPA/CPL at ₹49.86/lead)',
            conversionRateLift: '+20% Landing Page & Store CVR',
            ecommerceGMV: 'INR 7.95 Lakhs+ (WooCommerce & Amazon)',
            youtubeViews: '247,000+ Organic Views'
          },
          coreCompetencies: [
            'Google Ads (Search, Shopping & Performance Max)',
            'Meta Ads Manager (Facebook & Instagram CBO/ABO)',
            'Technical SEO, Local Google Maps SEO & YouTube Video SEO',
            'Shopify, WooCommerce & Amazon Seller Central',
            'GA4 Custom Events, GTM & Meta Pixel/CAPI',
            'Full-Funnel Landing Page & Checkout CRO'
          ]
        });
      }
    });

    mc.registerTool({
      name: 'list_case_studies',
      description: 'List and filter Ayaz Aftab digital marketing, performance marketing, SEO, and e-commerce case studies by channel category.',
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
    case 'whatsapp':
      return <svg {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>;
    case 'sun':
      return <svg {...props}><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>;
    case 'moon':
      return <svg {...props}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>;
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

const Header = ({
  onMenuClick,
  theme,
  onToggleTheme
}: {
  onMenuClick: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}) => (
  <header className="header">
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <div className="container header-container">
      <a href="/" id="nav-logo-link" className="logo-container">
        <Logo />
        <div className="logo-text-group">
          <span className="logo-text">Ayaz Aftab</span>
          <span className="logo-subtext">₹35L+/Mo Paid Media &amp; SEO</span>
        </div>
      </a>

      <nav className="nav" aria-label="Primary Navigation">
        <div className="nav-links-row">
          <a href="/#experience" id="nav-link-about" className="pill-nav-link">About</a>
          <a href="/#services" id="nav-link-services" className="pill-nav-link">Services</a>
          <a href="/#projects" id="nav-link-projects" className="pill-nav-link">Case Studies</a>
          <a href="/#contact" id="nav-link-contact" className="pill-nav-link">Contact</a>
        </div>
      </nav>

      <div className="header-actions">
        <button
          id="theme-toggle-btn"
          type="button"
          onClick={onToggleTheme}
          className="theme-toggle-btn"
          aria-label={theme === 'dark' ? 'Switch to Pearl Light Glass theme' : 'Switch to Obsidian Dark Glass theme'}
        >
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={14} />
          <span>{theme === 'dark' ? 'Pearl' : 'Obsidian'}</span>
        </button>
        <button
          id="open-mobile-menu-btn"
          onClick={onMenuClick}
          className="menu-icon"
          aria-label="Open navigation menu"
        >
          <Icon name="menu" size={20} />
        </button>
      </div>
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
          <a href="/#impact" onClick={onClose} className="menu-link"><Icon name="bar-chart-2" size={18} /> ₹35L+/Mo Proven Impact</a>
          <a href="/#services" onClick={onClose} className="menu-link"><Icon name="settings" size={18} /> Digital Marketing Services</a>
          <a href="/#projects" onClick={onClose} className="menu-link"><Icon name="star" size={18} /> Case Studies</a>
          <a href="/#india-freelancer" onClick={onClose} className="menu-link"><Icon name="check-circle" size={18} /> Pan-India Industries</a>
          <a href="/#process" onClick={onClose} className="menu-link"><Icon name="tool" size={18} /> 4-Step Growth System</a>
          <a href="/#experience" onClick={onClose} className="menu-link"><Icon name="briefcase" size={18} /> 5.5+ Years Experience</a>
          <a href="/#skills" onClick={onClose} className="menu-link"><Icon name="award" size={18} /> Skills &amp; Certifications</a>
          <a href="/resume" onClick={onClose} className="menu-link"><Icon name="download" size={18} /> Online Master Resume</a>
          <a href="/#faq" onClick={onClose} className="menu-link"><Icon name="help-circle" size={18} /> FAQ</a>
          <a href="/#contact" onClick={onClose} className="menu-link"><Icon name="mail" size={18} /> Book a Consultation</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          id="mobile-whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp menu-resume-btn"
          style={{ marginBottom: '0.65rem' }}
        >
          <Icon name="whatsapp" size={16} />
          <span>Book a Consultation (WhatsApp)</span>
        </a>
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
      <div className="hero-centered-layout">
        <div className="hero-kicker-glass">
          <span>₹35L+ Monthly Ad Budget Managed Combined</span>
        </div>

        <h1 className="hero-headline-centered">
          Ayaz Aftab — Scaling Brands<br />
          with Precision Paid Media &amp; SEO
        </h1>

        <div id="impact" className="glass-metrics-grid" aria-label="Audited Performance Metrics">
          <div className="glass-metric-card">
            <div className="glass-metric-value">₹35L+/Mo</div>
            <div className="glass-metric-label">Combined Ad Spend</div>
          </div>
          <div className="glass-metric-card">
            <div className="glass-metric-value">4.0x–4.5x</div>
            <div className="glass-metric-label">Sustained ROAS</div>
          </div>
          <div className="glass-metric-card">
            <div className="glass-metric-value">9,452+</div>
            <div className="glass-metric-label">Qualified Leads</div>
          </div>
          <div className="glass-metric-card">
            <div className="glass-metric-value">+20%</div>
            <div className="glass-metric-label">Store Conversion Lift</div>
          </div>
        </div>

        <div className="hero-centered-actions">
          <a href="#contact" id="hero-cta-audit" className="btn btn-primary">
            <span>Request Free Growth Audit</span>
            <Icon name="arrow-right" size={15} />
          </a>
          <a
            href={WHATSAPP_URL}
            id="hero-cta-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <Icon name="whatsapp" size={15} />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href="/resume.pdf"
            id="hero-cta-resume"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <Icon name="download" size={15} />
            <span>Master Resume (PDF)</span>
          </a>
        </div>

        <div className="hero-meta-strip">
          <span>Direct Founder Collaboration</span>
          <span>•</span>
          <span>Verified Ad Accounts</span>
          <span>•</span>
          <span>New Delhi, India</span>
          <span>•</span>
          <span>Response &lt; 2 Hours</span>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

const ProvenImpact = () => (
  <section id="impact" className="section-alt" aria-labelledby="impact-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Audited Portfolio Metrics</span>
        <h2 id="impact-heading" className="section-title">Executive Performance &amp; Revenue Impact</h2>
        <p className="section-subtitle">
          Verified results delivered across D2C e-commerce brands, retail leaders, and high-velocity lead generation funnels across India.
        </p>
      </div>
      <div className="impact-grid">
        <div className="info-card">
          <div>
            <p className="impact-metric">₹35L+/Mo</p>
            <p className="impact-label">Combined Ad Spend Managed</p>
          </div>
          <p className="impact-context">
            Directing high-velocity Meta Ads (CBO/ABO) &amp; Google PMax/Search budgets across active brand &amp; consulting portfolios.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">4.0x–4.5x</p>
            <p className="impact-label">Sustained Return on Ad Spend</p>
          </div>
          <p className="impact-context">
            Consistent multi-channel ROAS backed by ₹7.95L+ direct WooCommerce/Amazon GMV and weekly creative hook testing.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">9,452+</p>
            <p className="impact-label">Qualified Leads Generated</p>
          </div>
          <p className="impact-context">
            Compressed CPA/CPL by 35% (averaging ₹49.86/lead) across high-intent Google Search and Meta acquisition funnels.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">+20%</p>
            <p className="impact-label">Store &amp; Landing Page CVR Lift</p>
          </div>
          <p className="impact-context">
            Paired Shopify/WooCommerce CRO &amp; server-side GA4/CAPI tracking with 247,000+ free organic YouTube views.
          </p>
        </div>
      </div>
    </AnimatedSection>
  </section>
);

const Services = () => (
  <section id="services" aria-labelledby="services-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">02 — CAPABILITIES &amp; DELIVERABLES</span>
        <h2 id="services-heading" className="section-title">Growth Services Built for ROI &amp; Revenue</h2>
        <p className="section-subtitle">
          Execution-first digital marketing services delivering daily qualified leads, #1 Google rankings, and profitable store revenue.
        </p>
      </div>

      <div className="service-pillars-grid" aria-label="Core Digital Marketing Service Pillars">
        {servicePagesData.map((sp, idx) => (
          <article key={sp.slug} className="service-card">
            <div className="service-card-top">
              <span className="service-index">0{idx + 1} / 04</span>
              <span className="project-badge">{sp.keyMetricBadge}</span>
            </div>
            <h3 className="service-card-title">
              <a href={`/services/${sp.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {sp.shortName}
              </a>
            </h3>
            <p className="service-card-description">{sp.heroSummary}</p>
            <ul className="service-list">
              {sp.deliverables.slice(0, 3).map((del, dIdx) => (
                <li key={dIdx} className="service-list-item">
                  <Icon name="check" size={16} />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
            <a
              id={`service-pillar-${sp.slug}`}
              href={`/services/${sp.slug}`}
              className="btn btn-primary service-card-btn"
            >
              <span>Explore {sp.shortName}</span>
              <Icon name="arrow-right" size={15} />
            </a>
          </article>
        ))}
      </div>

      <div className="services-grid" aria-label="Engagement Models">
        {servicesData.map((service) => (
          <div className="service-card" key={service.id}>
            <h3 className="service-card-title">{service.title}</h3>
            <p className="service-card-description">{service.description}</p>
            <ul className="service-list">
              {service.items.map((item, i) => (
                <li key={i} className="service-list-item">
                  <Icon name="check" size={16} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              id={`${service.id}-cta`}
              href={service.href}
              className={`btn ${service.isWhatsapp ? 'btn-whatsapp' : 'btn-secondary'} service-card-btn`}
              {...((service.download || service.isWhatsapp) && {
                ...(service.download ? { download: true } : {}),
                target: '_blank',
                rel: 'noopener noreferrer'
              })}
            >
              <Icon name={service.icon} size={15} />
              <span>{service.cta}</span>
            </a>
          </div>
        ))}
      </div>
    </AnimatedSection>
  </section>
);

const IndiaFreelancerSection = () => (
  <section id="india-freelancer" className="section-alt" aria-labelledby="india-freelancer-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">03 — PAN-INDIA &amp; GLOBAL INDUSTRIES</span>
        <h2 id="india-freelancer-heading" className="section-title">
          Tailored Acquisition Systems by Vertical
        </h2>
        <p className="section-subtitle">
          Skip agency overhead and partner directly with a senior growth lead managing ₹35L+/mo in paid media across India&apos;s key markets.
        </p>
      </div>

      <div className="industry-matrix" aria-label="Industries Served Across India">
        {indiaIndustriesData.map((ind) => (
          <div key={ind.title} className="industry-cell">
            <span className="project-badge">{ind.badge}</span>
            <h3 className="industry-cell-title">{ind.title}</h3>
            <p className="industry-cell-desc">{ind.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'var(--bg-surface)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)' }}>
        <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          Serving Founders, D2C Brands &amp; Growing Businesses Across All Major Hubs:
        </p>
        <div className="india-seo-pills" aria-label="Cities Served in India">
          {indiaCitiesList.map((city) => (
            <span key={city} className="india-seo-pill">{city}</span>
          ))}
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
          <span className="section-eyebrow">01 — SELECTED WORK</span>
          <h2 id="projects-heading" className="section-title">Featured Performance &amp; E-commerce Case Studies</h2>
          <p className="section-subtitle">
            Detailed breakdowns of how I scale Meta Ads, Google PMax, Shopify/WooCommerce CRO, Amazon Seller Central, and YouTube SEO.
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
                    <Icon name="arrow-right" size={15} />
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
  <section id="process" className="section-alt" aria-labelledby="process-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">04 — METHODOLOGY</span>
        <h2 id="process-heading" className="section-title">How I Scale Leads &amp; Revenue Step-by-Step</h2>
        <p className="section-subtitle">
          A clear, 4-stage methodology combining server-side tracking, buyer-intent targeting, weekly creative testing, and conversion optimization.
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

const ExperienceSection = () => (
  <section id="experience" aria-labelledby="experience-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">05 — CAREER &amp; TRACK RECORD</span>
        <h2 id="experience-heading" className="section-title">Professional Experience &amp; Leadership</h2>
        <p className="section-subtitle">
          A proven history of owning ₹35L+/mo combined paid acquisition P&amp;Ls, Shopify and WooCommerce store operations, and B2B demand generation.
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

const Testimonials = ({ onProjectClick }: { onProjectClick: (project: Project) => void }) => (
  <section id="testimonials" className="section-alt" aria-labelledby="testimonials-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">06 — CLIENT ENDORSEMENTS</span>
        <h2 id="testimonials-heading" className="section-title">Trusted by Founders &amp; Growth Directors</h2>
        <p className="section-subtitle">
          Direct feedback from business leaders on ROAS consistency, lead quality, and e-commerce growth.
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
        <span className="section-eyebrow">07 — ATTRIBUTION &amp; STACK</span>
        <h2 id="skills-heading" className="section-title">Skills, Attribution Stack &amp; Certifications</h2>
        <p className="section-subtitle">
          Full-stack performance marketing, Shopify/WooCommerce store operations, and server-side analytics backed by Google, Meta, HubSpot, Amazon, and Semrush certifications.
        </p>
      </div>
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skills-header">
            <Icon name="star" size={19} />
            <h3 className="skills-title">Paid Media &amp; E-commerce Ops</h3>
          </div>
          <ul className="skills-list">
            {[
              'Meta Ads Manager (FB & IG CBO/ABO)',
              'Google Ads (Search & PMax)',
              'Google Shopping & Merchant Center',
              'LinkedIn Ads (B2B Demand Gen)',
              '₹35L+/Mo Budget Pacing & ROAS',
              'Shopify Store Administration',
              'WooCommerce Operations',
              'Amazon Seller Central & A+ Content',
              'Product Bundles & Discovery Sets',
              'Landing Page & Checkout CRO',
              'Technical & Local SEO (GBP)',
              'Semrush Keyword & Gap Analysis'
            ].map((s) => (
              <li key={s} className="skill-item">{s}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card">
          <div className="skills-header">
            <Icon name="tool" size={19} />
            <h3 className="skills-title">Tracking, Creative &amp; Retention</h3>
          </div>
          <ul className="skills-list">
            {[
              'Google Analytics 4 (GA4 Custom Events)',
              'Google Tag Manager (GTM)',
              'Meta Pixel & Conversions API (CAPI)',
              'Full-Funnel Attribution Modeling',
              'Looker Studio Executive Dashboards',
              'Short-Form Video & Hook Testing',
              'UGC & Static Carousel Direction',
              'YouTube Video SEO (247K+ Views)',
              'WhatsApp & Email Cart Recovery',
              'HubSpot CRM Lead Automation',
              'A/B Testing & Funnel Diagnostics',
              'Core Web Vitals Optimization'
            ].map((s) => (
              <li key={s} className="skill-item">{s}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card certifications-card">
          <div className="skills-header">
            <Icon name="award" size={19} />
            <h3 className="skills-title">Official Certifications</h3>
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
  <section id="faq" className="section-alt" aria-labelledby="faq-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">08 — FREQUENT QUESTIONS</span>
        <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Clear answers about my ₹35L+/mo paid media experience, digital marketing services across India, and how to get started.
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
    phone: '',
    email: '',
    inquiryType: 'Google Ads & Meta Ads Scaling (Leads & Sales)',
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

  const handleWhatsAppSend = () => {
    const text = `Hi Ayaz, I would like to book a consultation / growth audit.\nName: ${formData.name || 'Business Owner'}\nPhone: ${formData.phone || 'Not provided'}\nService: ${formData.inquiryType}\nDetails: ${formData.message || 'Please review our website/ads and share a growth plan.'}`;
    window.open(`https://wa.me/919263588321?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nativeEvent = e.nativeEvent as SubmitEvent & {
      agentInvoked?: boolean;
      respondWith?: (p: Promise<string>) => void;
    };

    if (!formData.name || !formData.email || !formData.message) {
      const errorMsg = 'Please fill out your name, email, and project details.';
      setStatusMessage(errorMsg);
      if (nativeEvent?.agentInvoked && typeof nativeEvent.respondWith === 'function') {
        nativeEvent.respondWith(Promise.resolve(`Validation failed: ${errorMsg}`));
      }
      setTimeout(() => setStatusMessage(''), 3000);
      return;
    }

    const subject = `[${formData.inquiryType}] Consultation Request from ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone / WhatsApp: ${formData.phone || 'Not provided'}\nEmail: ${formData.email}\nEngagement Type: ${formData.inquiryType}\n\nProject / Role Details:\n${formData.message}`;
    const mailtoLink = `mailto:ayazaftab9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    if (nativeEvent?.agentInvoked && typeof nativeEvent.respondWith === 'function') {
      nativeEvent.respondWith(
        Promise.resolve(
          `Inquiry prepared for Ayaz Aftab (ayazaftab9@gmail.com / +91 9263588321) with subject "${subject}".`
        )
      );
    } else {
      window.location.href = mailtoLink;
    }

    setStatusMessage('Opening your email client—or click WhatsApp for an instant response.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      inquiryType: 'Google Ads & Meta Ads Scaling (Leads & Sales)',
      message: ''
    });
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <footer id="contact" className="footer">
      <AnimatedSection className="container">
        <div className="footer-split">
          <div className="footer-left">
            <span className="section-eyebrow">09 — GET IN TOUCH</span>
            <h2 className="footer-title">Let&apos;s Build a High-ROI Acquisition Engine.</h2>
            <p className="footer-subtitle">
              Looking to scale your Google &amp; Meta Ads, rank #1 on Google, or hire an Executive Growth Lead managing ₹35L+/mo? Reach out directly on WhatsApp or submit your website for a free 24-hour audit.
            </p>

            <div className="contact-direct-bar">
              <a
                href={WHATSAPP_URL}
                id="footer-whatsapp-direct"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ padding: '0.55rem 1.15rem', fontSize: '0.84rem' }}
              >
                <Icon name="whatsapp" size={16} />
                <span>WhatsApp: +91 9263588321</span>
              </a>
              <a
                href="tel:+919263588321"
                id="footer-phone-direct"
                className="social-link"
              >
                <Icon name="phone" size={15} />
                <span>Call: +91 9263588321</span>
              </a>
              <button
                id="copy-email-btn"
                type="button"
                onClick={handleCopyEmail}
                className="social-link"
              >
                <Icon name={copiedEmail ? 'check' : 'copy'} size={15} />
                <span>{copiedEmail ? 'Copied: ayazaftab9@gmail.com' : 'ayazaftab9@gmail.com'}</span>
              </button>
            </div>
          </div>

          <div className="footer-right">
            <form
              id="contact-form"
              className="contact-form"
              toolname="send_marketing_inquiry"
              tooldescription="Request a digital marketing consultation, free Google/Meta Ads & SEO audit, Shopify/Amazon growth proposal, or full-time growth lead inquiry from Ayaz Aftab"
              onSubmit={handleSubmit}
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    title="Full name of the business owner, founder, or recruiter"
                    className="form-input"
                    placeholder="e.g., Rahul Sharma"
                    toolparamdescription="Full name of the person or business owner reaching out, e.g., Rahul Sharma"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    title="Phone or WhatsApp number for consultation or audit callback"
                    className="form-input"
                    placeholder="e.g., +91 98765 43210"
                    toolparamdescription="Phone or WhatsApp number of the sender in India or internationally"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Work Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    title="Reply email address of the sender"
                    className="form-input"
                    placeholder="e.g., rahul@company.com"
                    toolparamdescription="Contact email address for sending the audit or proposal"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inquiryType" className="form-label">How Can We Work Together?</label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    title="Type of digital marketing service or role opportunity"
                    className="form-select"
                    toolparamdescription="Digital marketing service needed (Google/Meta Ads, SEO, Shopify/Amazon, Website CRO, or Full-Time Role)"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                  >
                    <option value="Google Ads & Meta Ads Scaling (Leads & Sales)">Google Ads &amp; Meta Ads Scaling (Leads &amp; Sales)</option>
                    <option value="SEO, Local Google Maps & YouTube Ranking">SEO, Local Google Maps &amp; YouTube Ranking</option>
                    <option value="Shopify, WooCommerce & Amazon Revenue Growth">Shopify, WooCommerce &amp; Amazon Revenue Growth</option>
                    <option value="Website CRO & GA4 / GTM / Meta CAPI Setup">Website CRO &amp; GA4 / GTM / Meta CAPI Setup</option>
                    <option value="Executive Growth Lead / Full-Time Opportunity">Executive Growth Lead / Full-Time Opportunity</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Website URL, Monthly Budget &amp; Goals *</label>
                <textarea
                  id="message"
                  name="message"
                  title="Detailed message describing your business, website URL, monthly ad budget, or growth goals"
                  className="form-textarea"
                  placeholder="Share your website URL, current monthly ad spend, target ROAS/CPL, or role details..."
                  toolparamdescription="Business details, website URL for free audit, monthly ad budget, or role details"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
                <button id="contact-submit-btn" type="submit" className="btn btn-primary form-submit-btn">
                  <span>Request Growth Audit</span>
                  <Icon name="arrow-right" size={15} />
                </button>
                <button
                  id="contact-whatsapp-submit-btn"
                  type="button"
                  onClick={handleWhatsAppSend}
                  className="btn btn-whatsapp form-submit-btn"
                >
                  <Icon name="whatsapp" size={16} />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
              {statusMessage && <p className="form-status-message" role="status">{statusMessage}</p>}
            </form>
          </div>
        </div>

        <nav className="footer-seo-directory" aria-label="Digital Marketing Services & Case Studies Directory">
          <div>
            <p className="footer-seo-title">Digital Marketing Services India</p>
            <ul className="footer-seo-list">
              {servicePagesData.map((sp) => (
                <li key={sp.slug}>
                  <a href={`/services/${sp.slug}`} className="footer-seo-link">
                    {sp.shortName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-seo-title">Verified Case Studies</p>
            <ul className="footer-seo-list">
              {projectsData.map((proj) => (
                <li key={proj.id}>
                  <a href={`/case-studies/${proj.slug}`} className="footer-seo-link">
                    {proj.client} ({proj.keyResult})
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="footer-seo-title">Credentials &amp; Resume</p>
            <ul className="footer-seo-list">
              <li><a href="/" className="footer-seo-link">Portfolio Overview (₹35L+/Mo Managed)</a></li>
              <li><a href="/resume" className="footer-seo-link">Online Master Resume</a></li>
              <li><a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="footer-seo-link">Download Master Resume (PDF)</a></li>
              <li><a href="https://www.linkedin.com/in/ayazaftab" target="_blank" rel="noopener noreferrer" className="footer-seo-link">LinkedIn Profile (/in/ayazaftab)</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-seo-title">Pan-India &amp; Global Service Areas</p>
            <ul className="footer-seo-list">
              <li className="footer-seo-link">Kolkata, Mumbai, Delhi NCR &amp; Bengaluru</li>
              <li className="footer-seo-link">Hyderabad, Pune, Chennai, Ahmedabad &amp; Jaipur</li>
              <li className="footer-seo-link">All India &amp; Global Remote (UAE, UK, US)</li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-seo-link">WhatsApp / Call: +91 9263588321</a></li>
            </ul>
          </div>
        </nav>

        <div className="footer-bottom">
          <a href="/" className="logo-container" aria-label="Back to home">
            <Logo />
            <span className="logo-text">Ayaz Aftab</span>
          </a>
          <p className="copyright">
            &copy; {new Date().getFullYear()} Ayaz Aftab — Performance Marketing &amp; E-commerce Growth Lead (₹35L+/Mo Combined Ad Spend). All rights reserved.
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

                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                    style={{ width: '100%' }}
                  >
                    <Icon name="whatsapp" size={16} />
                    <span>Book a Consultation</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <span>Discuss a Similar Campaign</span>
                    <Icon name="arrow-right" size={15} />
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

          <span className="hero-role-kicker">{project.client} • Verified Performance Case Study</span>
          <h1 id="case-study-page-title" className="section-title" style={{ marginBottom: '0.85rem' }}>
            {project.title}
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '1.35rem', maxWidth: '760px' }}>
            {project.summary}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center' }}>
            <span className="project-badge" style={{ fontSize: '0.84rem', padding: '0.35rem 0.9rem' }}>
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
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%' }}>
                    <Icon name="whatsapp" size={16} />
                    <span>Book a Consultation</span>
                  </a>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Request Growth Audit</span>
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: '100%' }}>
                    <Icon name="download" size={15} />
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
            <h2 id="related-studies-heading" className="section-title">Other Client Case Studies</h2>
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
                    <Icon name="arrow-right" size={15} />
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

        <span className="hero-role-kicker">Kolkata, India • ₹35L+/Mo Combined Ad Spend • +91 9263588321</span>
        <h1 id="resume-page-title" className="section-title" style={{ marginBottom: '0.65rem' }}>
          Ayaz Aftab — Performance Marketing &amp; E-commerce Growth Lead
        </h1>
        <p className="section-subtitle" style={{ maxWidth: '820px', marginBottom: '1.5rem' }}>
          Performance Marketing &amp; E-commerce Specialist with 5.5+ years of experience scaling D2C, B2B, and marketplace brands across India. Proven track record of directing ₹35L+ in combined monthly paid ad spend across Meta and Google at a sustained 4.0x–4.5x ROAS, driving 9,452+ qualified acquisitions, and lifting store conversions by 20%. Deep proficiency in Shopify/WooCommerce operations, Google Merchant Center feeds, GA4 custom event tracking, and direct-response creative testing.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Icon name="download" size={15} />
            <span>Download Master Resume (PDF)</span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <Icon name="whatsapp" size={16} />
            <span>Book a Consultation</span>
          </a>
          <a href="https://www.linkedin.com/in/ayazaftab" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Icon name="linkedin" size={15} />
            <span>LinkedIn Profile</span>
          </a>
          <a href="/" className="btn btn-ghost">
            <span>Back to Home</span>
          </a>
        </div>
      </AnimatedSection>
    </section>

    <ProvenImpact />
    <ExperienceSection />
    <Skills />
  </>
);

const ServiceLandingPage = ({ service }: { service: ServicePageData }) => {
  const relatedStudies = projectsData.filter((p) => service.relatedCaseStudyIds.includes(p.id));
  const otherServices = servicePagesData.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="subpage-hero" aria-labelledby="service-page-title">
        <AnimatedSection className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb-nav">
              <li><a href="/" className="breadcrumb-link">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/#services" className="breadcrumb-link">Digital Marketing Services India</a></li>
              <li aria-hidden="true">/</li>
              <li className="breadcrumb-current" aria-current="page">{service.shortName}</li>
            </ol>
          </nav>

          <span className="hero-role-kicker">{service.eyebrow} • All India &amp; Global Remote</span>
          <h1 id="service-page-title" className="section-title" style={{ marginBottom: '0.85rem' }}>
            {service.title}
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '1.35rem', maxWidth: '800px' }}>
            {service.heroSummary}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <span className="project-badge" style={{ fontSize: '0.84rem', padding: '0.35rem 0.9rem' }}>
              Proven Track Record: {service.keyMetricBadge}
            </span>
            <a href="#contact" className="btn btn-primary">
              <span>Request a Free Audit</span>
              <Icon name="arrow-right" size={15} />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <Icon name="whatsapp" size={16} />
              <span>Book a Consultation</span>
            </a>
            <a href="tel:+919263588321" className="btn btn-secondary">
              <Icon name="phone" size={15} />
              <span>+91 9263588321</span>
            </a>
          </div>
        </AnimatedSection>
      </section>

      <section className="case-study-page-section">
        <AnimatedSection className="container">
          <div className="modal-grid">
            <div className="modal-main-content">
              <div className="modal-section">
                <h2 className="modal-section-title">1. Complete Scope of Deliverables</h2>
                <ul className="service-list" style={{ marginTop: '0.85rem' }}>
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="service-list-item">
                      <Icon name="check" size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h2 className="modal-section-title">2. How I Execute &amp; Scale Results</h2>
                <p>{service.methodology}</p>
              </div>

              <div className="modal-section">
                <h2 className="modal-section-title">3. Who This Service Is Built For</h2>
                <p>{service.targetAudience}</p>
              </div>

              <div className="modal-section" style={{ marginBottom: 0 }}>
                <h2 className="modal-section-title">4. Service-Specific FAQs</h2>
                <div className="faq-list" style={{ marginTop: '1rem' }}>
                  {service.faqs.map((f, i) => (
                    <details key={i} className="faq-item" open={i === 0}>
                      <summary className="faq-question">
                        <span>{f.q}</span>
                        <span className="faq-icon">
                          <Icon name="chevron-down" size={18} />
                        </span>
                      </summary>
                      <div className="faq-answer">
                        <p>{f.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            <aside className="modal-sidebar" aria-label="Verified Client Proof Points">
              <div className="modal-sidebar-box">
                <h2 className="modal-section-title">Verified Results &amp; ROI</h2>
                <ul className="modal-results-list">
                  {service.proofPoints.map((pt, index) => (
                    <li key={index} className="modal-result-item">
                      <Icon name="check-circle" size={16} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%' }}>
                    <Icon name="whatsapp" size={16} />
                    <span>Book a Consultation</span>
                  </a>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Request Custom Proposal</span>
                    <Icon name="arrow-right" size={15} />
                  </a>
                  <a href="/resume" className="btn btn-secondary" style={{ width: '100%' }}>
                    <span>View Online Master Resume</span>
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </AnimatedSection>
      </section>

      <section className="section-alt" aria-labelledby="service-related-studies-heading">
        <AnimatedSection className="container">
          <div className="section-header">
            <span className="section-eyebrow">Proven Execution</span>
            <h2 id="service-related-studies-heading" className="section-title">Related Case Studies &amp; Other Services</h2>
          </div>
          <div className="projects-grid">
            {relatedStudies.map((rel) => (
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
                    <span>Read Full Case Study</span>
                    <Icon name="arrow-right" size={15} />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="service-pillars-grid" style={{ marginTop: '2.5rem', marginBottom: 0 }}>
            {otherServices.map((os) => (
              <article key={os.slug} className="service-card">
                <div style={{ marginBottom: '0.5rem' }}>
                  <span className="project-badge">{os.keyMetricBadge}</span>
                </div>
                <h3 className="service-card-title" style={{ fontSize: '1.15rem' }}>
                  <a href={`/services/${os.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {os.shortName}
                  </a>
                </h3>
                <p className="service-card-description">{os.heroSummary}</p>
                <a href={`/services/${os.slug}`} className="btn btn-secondary service-card-btn">
                  <span>Explore {os.shortName}</span>
                  <Icon name="arrow-right" size={15} />
                </a>
              </article>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

export const App = ({ initialPath }: { initialPath?: string } = {}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof document !== 'undefined') {
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const urlTheme = urlParams.get('theme');
        if (urlTheme === 'dark' || urlTheme === 'light') {
          document.documentElement.setAttribute('data-theme', urlTheme);
          return urlTheme;
        }
      } catch {
        // ignore
      }
      const attr = document.documentElement.getAttribute('data-theme');
      if (attr === 'dark' || attr === 'light') return attr;
      try {
        const saved = window.localStorage.getItem('ayaz-glass-theme');
        if (saved === 'dark' || saved === 'light') return saved;
      } catch {
        // ignore
      }
    }
    return 'light';
  });

  const rawPath = initialPath || (typeof window !== 'undefined' ? window.location.pathname : '/');
  const currentPath = rawPath.length > 1 ? rawPath.replace(/\/+$/, '') : '/';

  useEffect(() => {
    registerWebMCPTools();
    try {
      const saved = window.localStorage.getItem('ayaz-glass-theme');
      if (saved === 'dark' || saved === 'light') {
        setTheme(saved);
        document.documentElement.setAttribute('data-theme', saved);
      }
    } catch {
      // ignore storage restrictions
    }
  }, []);

  const handleToggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next);
      try {
        window.localStorage.setItem('ayaz-glass-theme', next);
      } catch {
        // ignore
      }
    }
  };

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

  const matchedService = currentPath.startsWith('/services/')
    ? servicePagesData.find((s) => `/services/${s.slug}` === currentPath)
    : undefined;

  return (
    <>
      <Header
        onMenuClick={() => setIsMenuOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />
      <OffCanvasMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <main id="main-content">
        {currentPath === '/resume' ? (
          <ResumePage />
        ) : matchedCaseStudy ? (
          <CaseStudyPage project={matchedCaseStudy} />
        ) : matchedService ? (
          <ServiceLandingPage service={matchedService} />
        ) : (
          <>
            <Hero />
            <FeaturedProjects onProjectClick={handleProjectClick} />
            <Services />
            <IndiaFreelancerSection />
            <GrowthProcess />
            <ExperienceSection />
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
