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
  'https://wa.me/919263588321?text=Hi%20Ayaz%2C%20I%20visited%20your%20website%20and%20want%20digital%20marketing%20services%20to%20get%20more%20leads%20and%20sales.';

// --- DATA ---
export const servicePagesData: ServicePageData[] = [
  {
    slug: 'performance-marketing-meta-google-ads',
    shortName: 'Google Ads & Facebook/Instagram Ads',
    eyebrow: 'Paid Ads & Daily Lead Generation Services in India',
    title: 'Google Ads & Facebook/Instagram Ads Freelancer in India: Get Daily Leads & 4x Sales',
    metaTitle: 'Google Ads & Facebook Ads Freelancer India | Performance Marketing Services — Ayaz Aftab',
    metaDescription: 'Hire India’s trusted Google Ads & Facebook/Instagram Ads freelancer. Managing ₹6L+/mo ad budgets with 4.0x–4.5x ROAS and 9,452+ customer leads at 35% lower cost.',
    heroSummary: 'Stop wasting money on ads that only bring likes or empty clicks. I set up and manage high-converting Google Ads and Facebook/Instagram (Meta) Ads that bring you daily phone calls, WhatsApp inquiries, and direct online orders—proven across ₹6L+/month ad budgets at 4.0x–4.5x return.',
    keyMetricBadge: '₹6L+/Mo Managed • 4.0x–4.5x Return',
    targetAudience: 'Built for business owners, D2C online stores, real estate builders, clinics, coaching institutes, and B2B companies across India (Kolkata, Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Chennai) and worldwide who want profitable leads and sales every day.',
    deliverables: [
      'Facebook & Instagram Ads (Meta Ads) Setup for Daily WhatsApp Leads, Website Leads & Online Orders',
      'Google Search Ads, Performance Max (PMax) & Google Shopping Ads to Capture Ready-to-Buy Customers',
      'Google Merchant Center Setup & Product Feed Optimization for Online Stores',
      'Weekly New Ad Creatives (3–5 Ad Videos/Images Every Week to Keep Ad Costs Low)',
      'B2B Lead Generation via Google Search & LinkedIn Ads Connected to Your CRM / WhatsApp',
      'Clear Daily & Weekly Reports Showing Exact Ad Spend, Leads Generated, and Sales Profit'
    ],
    methodology: 'I use a simple 3-step formula that works: (1) Target people who are actively searching for or interested in your product, (2) Show them clear, thumb-stopping video and image ads that build instant trust, and (3) Track every single call, WhatsApp chat, and purchase using GA4 and Meta CAPI so your ad budget only goes toward ads that make you money.',
    proofPoints: [
      'Managing ₹6L+ monthly Google & Facebook/Instagram ad budgets for FFACE (GM Modular & Decoy Luxury Perfumes) with a steady 4.0x Return on Ad Spend (ROAS)',
      'Scaled ₹2L/mo Google Ads & Meta retargeting campaigns for Jaffri Creations at 4.5x return (34,900+ buyer clicks)',
      'Generated 9,452 verified customer leads for MTEI Services while cutting cost-per-lead by 35% (just ₹49.86 per lead)'
    ],
    relatedCaseStudyIds: [1, 2, 3],
    faqs: [
      {
        q: 'What monthly ad budget do I need to start Google Ads or Facebook Ads?',
        a: 'You can start with a small test budget of ₹15,000–₹30,000/month for local lead generation, or scale up to ₹1L–₹6L+/month for pan-India e-commerce and multi-city campaigns. Every rupee is tracked for return on investment.'
      },
      {
        q: 'How fast will I start getting leads or orders from paid ads?',
        a: 'Once your tracking and ads go live (usually within 48–72 hours), qualified leads, phone calls, WhatsApp messages, and orders begin coming in from day one, and costs improve each week as we test 3–5 new ad creatives.'
      },
      {
        q: 'Why hire you as a digital marketing freelancer instead of a traditional agency?',
        a: 'At most agencies, a senior salesperson pitches you and a junior intern runs your ads. When you work with me, your account is personally managed by a Google & Meta Certified specialist with 5.5+ years of experience—with direct WhatsApp access and no heavy agency markups.'
      }
    ]
  },
  {
    slug: 'ecommerce-growth-shopify-woocommerce-amazon',
    shortName: 'Shopify, WooCommerce & Amazon Sales Growth',
    eyebrow: 'Online Store & Marketplace Growth Services India',
    title: 'Shopify, WooCommerce & Amazon Growth Specialist in India: Scale Your Online Store Sales',
    metaTitle: 'Shopify, WooCommerce & Amazon Marketing Expert India | E-commerce Growth — Ayaz Aftab',
    metaDescription: 'Grow your Shopify, WooCommerce, and Amazon India sales. Proven e-commerce freelancer delivering ₹7.95L+ direct store GMV, +40% Amazon visibility, and +20% checkout sales.',
    heroSummary: 'Want more people to buy from your website or Amazon store? I help D2C brands and manufacturers across India set up, optimize, and scale their Shopify, WooCommerce, and Amazon Seller Central stores—turning casual website visitors into repeat paying customers.',
    keyMetricBadge: '₹7.95L+ Store Sales • +40% Amazon Reach',
    targetAudience: 'Ideal for D2C brand founders, clothing/fashion labels, perfume & beauty brands, home decor manufacturers, and retail sellers looking to grow online orders on Shopify, WooCommerce, and Amazon.',
    deliverables: [
      'Complete Shopify & WooCommerce Store Management, Product Page Design & Speed Optimization',
      'Smart Combo Offers, Discovery Sets & Bundles to Increase Average Order Value (AOV)',
      'Amazon Seller Central Management (100+ Product Listings, Keywords, Pricing & Inventory)',
      'High-Converting Amazon A+ Content, Brand Store Design & Amazon Sponsored Ads (PPC)',
      'Checkout & Cart Page Improvements to Boost Sales Conversion Rate by +20%',
      'Automated WhatsApp & Email Abandoned Cart Recovery to Win Back Lost Buyers'
    ],
    methodology: 'Getting traffic is only half the battle—your store must look trustworthy and make buying effortless on mobile phones. I combine fast, clean Shopify/WooCommerce product pages and irresistible bundle offers with keyword-rich Amazon A+ listings so customers buy more and return often.',
    proofPoints: [
      'Leading complete Shopify store operations, discovery sets, and checkout optimization for Decoy Luxury Perfumes (FFACE)',
      'Generated ₹7.95 Lakhs in direct sales across WooCommerce and Amazon Seller Central for Jaffri Creations across 100+ products',
      'Increased Amazon product visibility by +40% and free organic website traffic by +30%'
    ],
    relatedCaseStudyIds: [1, 2],
    faqs: [
      {
        q: 'Can you manage both our Shopify/WooCommerce website and our Amazon Seller account?',
        a: 'Yes! I manage your own website (Shopify or WooCommerce) and your Amazon Seller Central account together so you get maximum sales from both channels.'
      },
      {
        q: 'How do you increase sales without increasing our ad budget?',
        a: 'By improving your product pages, adding customer reviews, creating value bundles/discovery sets, simplifying mobile checkout, and setting up WhatsApp cart recovery—which lifts store conversion rates by up to 20%.'
      },
      {
        q: 'Can you handle large product catalogs with 100+ items?',
        a: 'Yes. I have hands-on experience managing and optimizing 100+ product SKUs across Shopify, WooCommerce, Google Merchant Center, and Amazon Seller Central.'
      }
    ]
  },
  {
    slug: 'seo-local-seo-youtube-growth',
    shortName: 'SEO, Google Maps & YouTube Ranking',
    eyebrow: 'Rank #1 on Google Search, Google Maps & YouTube',
    title: 'SEO Services in India: Rank #1 on Google Search, Google Maps (Local SEO) & YouTube',
    metaTitle: 'Best SEO Freelancer & Services in India | Google Ranking, Local SEO & YouTube — Ayaz Aftab',
    metaDescription: 'Rank your website #1 on Google Search, Google Maps, and YouTube. Proven SEO expert in India delivering +30% free organic traffic, 247,000+ YouTube views, and 1,465+ local customer calls.',
    heroSummary: 'Get free, high-intent customers every day from Google Search, Google Maps, and YouTube—without paying for every click. I use simple, proven SEO strategies to rank your business at the top when customers across India search for your services or products.',
    keyMetricBadge: '+30% Free Google Traffic • 247K+ YouTube Views',
    targetAudience: 'Perfect for service businesses, doctors/clinics, real estate, lawyers/CA firms, local shops, e-commerce stores, and startups across India that want long-term free leads from Google and YouTube.',
    deliverables: [
      'Complete Website SEO Audit & Fast Mobile Speed Optimization (100/100 Google Core Web Vitals)',
      'Buyer Keyword Research (Finding the Exact Words Customers Type Into Google Before Buying)',
      'On-Page SEO for Service Pages, City Landing Pages, Product Pages & Blog Content',
      'Google Business Profile (Google Maps / Local SEO) Ranking to Get Direct Local Customer Calls',
      'Rich Google Schema Markup & AI Search Optimization (Rank on Google AI, ChatGPT & Perplexity)',
      'YouTube Video SEO (Titles, Tags, Thumbnails & Shorts Strategy to Get Free Organic Views)'
    ],
    methodology: 'Ranking #1 on Google is not about stuffing random keywords. First, I make your website ultra-fast and easy for Google to index. Next, I create clear, helpful service and product pages targeting the exact phrases Indian buyers search for—paired with Google Business Profile optimization and YouTube video SEO.',
    proofPoints: [
      'Increased free Google organic website traffic by +30% and Amazon search visibility by +40% for Jaffri Creations',
      'Grew Jaffri Creations YouTube channel from zero to 247,000+ free organic views and 5,200+ watch hours with ₹0 ad spend',
      'Delivered +25% yearly organic Google traffic growth for HICO Tax Consultant and 1,465+ direct customer actions on Google Business Profile'
    ],
    relatedCaseStudyIds: [2, 4],
    faqs: [
      {
        q: 'How long does SEO take to rank my website on Google?',
        a: 'Technical SEO fixes, Google indexing, Google Maps (Local SEO), and YouTube SEO usually show noticeable traffic and call growth within 3 to 6 weeks, while competitive national keywords build strong top-page rankings over 3 to 6 months.'
      },
      {
        q: 'Will my business also show up on AI search tools like ChatGPT and Google AI Overviews?',
        a: 'Yes! I set up structured Schema.org data, fast pre-rendered pages, and AI discovery files (llms.txt and ard.json) so both Google Search and AI assistants recommend your business first.'
      },
      {
        q: 'Can you help my local business rank on Google Maps in my city?',
        a: 'Absolutely. I optimize your Google Business Profile (GBP) with local keywords, categories, photos, and review strategies—proven to drive 1,465+ direct local customer calls, direction requests, and website clicks.'
      }
    ]
  },
  {
    slug: 'ga4-gtm-capi-tracking-cro',
    shortName: 'Website Conversion (CRO) & Ad Tracking Setup',
    eyebrow: 'Turn More Website Visitors Into Leads & Buyers',
    title: 'Website Conversion Optimization (CRO) & Accurate Ad Tracking (GA4, GTM, Meta CAPI)',
    metaTitle: 'Website CRO, GA4, Google Tag Manager & Meta CAPI Expert India | Ayaz Aftab',
    metaDescription: 'Turn 20% more website visitors into leads and sales. Expert setup for Landing Page CRO, Google Analytics 4 (GA4), Google Tag Manager (GTM), and Meta Pixel/CAPI in India.',
    heroSummary: 'Are people visiting your website but leaving without calling or buying? I fix leaky landing pages so 20% more visitors turn into real leads, and set up 100% accurate tracking (GA4, Google Tag Manager, and Meta Conversions API) so you know exactly which ad brings you profit.',
    keyMetricBadge: '+20% More Conversions • 100% Accurate Tracking',
    targetAudience: 'Essential for any business running Google or Facebook ads, e-commerce brands losing sales at checkout, and companies that want clear, honest dashboards showing where their leads come from.',
    deliverables: [
      'High-Converting Landing Page Redesign (Clear Headlines, WhatsApp Buttons & Fast Mobile Forms)',
      'Google Analytics 4 (GA4) Custom Tracking for Leads, Phone Calls, WhatsApp Clicks & Purchases',
      'Google Tag Manager (GTM) & Server-Side Meta Pixel + Conversions API (CAPI) Setup',
      'Live Looker Studio Dashboards Showing Daily Ad Spend, Leads & Return on Investment',
      'A/B Testing of Offers, Headlines & Checkout Steps to Cut Cost-Per-Lead by 35%',
      'HubSpot CRM, WhatsApp & Email Automation to Follow Up With Every Lead Instantly'
    ],
    methodology: 'Most businesses lose 30% of their ad results because of broken tracking and confusing mobile pages. I repair your tracking signals first so Google and Facebook algorithms find better buyers, then simplify your landing pages with clear trust badges, fast load speeds, and one-click WhatsApp/lead forms.',
    proofPoints: [
      'Increased landing page conversion rates by +20%, lowered bounce rates by 15%, and cut cost-per-lead by 35% across 9,452 leads for MTEI Services',
      'Set up complete GTM, GA4 custom purchase events, and Meta CAPI tracking for FFACE’s ₹6L+/mo ad accounts',
      'Built automated HubSpot CRM lead follow-up systems for HICO Tax Consultant to close B2B clients faster'
    ],
    relatedCaseStudyIds: [1, 3],
    faqs: [
      {
        q: 'Why do I need Meta Conversions API (CAPI) and GA4 tracking?',
        a: 'Because iPhones, ad blockers, and browser privacy settings hide up to 30% of your sales and leads. Setting up Meta CAPI and GA4 custom tracking recovers that data so your ads perform better and cost less.'
      },
      {
        q: 'How do you make a website convert more visitors into leads?',
        a: 'I use simple, clear headlines that speak to your customer’s problem, showcase real proof and reviews, make the page load in under 1 second on mobile, and add friction-free WhatsApp and callback forms.'
      },
      {
        q: 'Will I get a simple dashboard to see my daily results?',
        a: 'Yes! I create a clean, easy-to-read Looker Studio report where you can check your daily ad spend, leads, calls, and sales anytime from your phone.'
      }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: 1,
    slug: 'fface-gm-modular-decoy-luxury-paid-media-ecommerce',
    category: 'ppc',
    client: 'FFACE (GM Modular & Decoy Luxury Perfumes)',
    title: '₹6L+/Mo Meta & Google Ads Scaling at 4.0x ROAS + Shopify CRO',
    imageUrl: '/images/case-study-fface-roas.svg',
    keyResult: '₹6L+/Mo Spend • 4.0x Return',
    summary: 'Managed ₹6L+ monthly Google Ads and Facebook/Instagram Ads with a steady 4.0x return on ad spend while growing Shopify online orders and setting up GTM/GA4/CAPI tracking.',
    tags: ['Meta Ads (FB/IG)', 'Google Ads (PMax)', 'Shopify Sales Growth', 'Meta Pixel & CAPI', 'GA4 & GTM'],
    challenge: 'Scale daily online perfume orders for Decoy Luxury Perfumes and grow dealer/retail demand for GM Modular while keeping ad return consistently at 4.0x or higher.',
    role: 'As Performance Marketing & E-commerce Specialist at FFACE (Kolkata), I manage the ₹6L+ monthly ad budget, Shopify store sales optimization, weekly video/image ad testing, and GA4/CAPI tracking.',
    strategy: 'Combined targeted Facebook/Instagram Ads and Google Search/Shopping (PMax) campaigns with irresistible Shopify combo/discovery set offers and server-side conversion tracking.',
    execution: 'Tested 3–5 new video and image ad concepts every week (unboxing videos, customer reviews, catalog carousels) so ads stayed fresh and profitable. Set up GTM, GA4, and Meta CAPI for 100% accurate sales tracking.',
    results: [
      'Directed ₹6L+ monthly ad spend across Meta & Google Ads at a sustained 4.0x ROAS (Return on Ad Spend)',
      'Led Decoy Luxury Shopify store operations, discovery sets & checkout improvements to boost order value',
      'Ran GM Modular dynamic product catalog ads & localized dealer/retail lead campaigns',
      'Tested 3–5 weekly ad concepts (UGC videos, unboxing hooks, static carousels) to keep ad costs low',
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
    title: 'D2C WooCommerce & Amazon Growth (₹7.95L Sales at 4.5x ROAS)',
    imageUrl: '/images/case-study-jaffri-ecommerce.svg',
    keyResult: '₹7.95L Sales • 4.5x Return',
    summary: 'Grew WooCommerce website and Amazon India stores to ₹7.95L in direct sales while managing ₹2L/mo Google & Meta ads at 4.5x return and +30% free Google SEO traffic.',
    tags: ['Amazon Seller Central', 'Google PMax & Shopping', 'WooCommerce Store', 'Google SEO', 'Amazon A+ Content'],
    challenge: 'Build a profitable online sales engine across the company’s own WooCommerce website and Amazon Seller Central while ranking #1 on Google for high-value fountain and decor buyers.',
    role: 'As Digital Marketing Executive (Growth & Operations), I managed all website and Amazon store operations, ₹2L/mo Google & Meta ads, Amazon A+ listings, and Google SEO.',
    strategy: 'Focused on three simple growth pillars: (1) optimizing 100+ products on WooCommerce and Amazon, (2) running ₹2L/mo Google Shopping/PMax and Meta retargeting ads at 4.5x return, and (3) ranking product pages on Google Search & Maps.',
    execution: 'Structured Google Performance Max and Search campaigns around ready-to-buy keywords. Upgraded 100+ Amazon listings with rich A+ visuals and backend search keywords. Improved website speed and on-page SEO.',
    results: [
      'Generated ₹7.95 Lakhs in direct sales across WooCommerce website & Amazon India storefronts',
      'Managed ₹2L/mo in Google PMax & Meta retargeting ads at a 4.5x return (34,900+ buyer clicks)',
      'Increased free Google organic website traffic by +30% and Amazon product visibility by +40%',
      'Generated high-value B2B & commercial orders worth ₹5 Lakhs to ₹13 Lakhs',
      'Drove 1,465+ direct local customer calls and inquiries via Google Business Profile (Google Maps)'
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
    title: 'High-Volume Lead Generation Funnel (9,452 Leads & -35% Cost)',
    imageUrl: '/images/case-study-mtei-leads.svg',
    keyResult: '9,452 Leads • ₹49.86/Lead',
    summary: 'Built Facebook/Instagram and Google lead generation campaigns that delivered 9,452 verified customer leads, cutting cost-per-lead by 35% and boosting page conversions by 20%.',
    tags: ['Facebook & Instagram Ads', 'Google Lead Ads', 'Landing Page CRO', 'A/B Testing', 'Lead Generation'],
    challenge: 'Generate a high daily volume of genuine student and customer leads across India while keeping cost per lead as low as possible.',
    role: 'Served as Performance Marketing & CRO Specialist (Contract) managing Facebook/Instagram & Google Ads, creative testing, and mobile landing page conversion optimization.',
    strategy: 'Combined targeted Facebook/Instagram lookalike audiences and high-intent Google Search ads with fast, easy-to-fill mobile landing pages.',
    execution: 'Tested multiple ad headlines, regional hooks, and audience segments every week. Redesigned the landing page with clear trust badges and a simple lead form to stop visitor drop-offs.',
    results: [
      'Generated 9,452 verified customer leads across Facebook, Instagram, and Google Search ads',
      'Cut Cost Per Lead (CPL) by 35% — averaging just ₹49.86 per qualified lead',
      'Increased landing page conversion rate by +20% and reduced visitor bounce rate by 15%',
      'Managed ₹4.7 Lakhs in ad spend with strong, profitable client ROI'
    ],
    testimonial: 'The acquisition campaigns and landing page CRO executed by Ayaz were a game-changer—delivering 9,452 qualified conversions while slashing our CPA by 35%.',
    visuals: ['/images/case-study-mtei-leads.svg'],
  },
  {
    id: 4,
    slug: 'jaffri-creations-youtube-seo-organic-growth',
    category: 'seo',
    client: 'Jaffri Creations Fountain Decor Pvt. Ltd.',
    title: 'YouTube Video SEO & Free Organic Growth (247,000+ Views)',
    imageUrl: '/images/case-study-youtube-growth.svg',
    keyResult: '247,000+ Free Views',
    summary: 'Grew a brand YouTube channel from zero to 247,000+ free organic views and 5,200+ watch hours using YouTube SEO and high-retention product videos—with ₹0 ad spend.',
    tags: ['YouTube Video SEO', 'YouTube Shorts', 'Keyword Research', 'Free Organic Traffic', 'Brand Trust'],
    challenge: 'Bring thousands of new buyers to discover the brand’s products every month without spending extra money on video ads.',
    role: 'Managed complete YouTube channel SEO, keyword research, video titles/descriptions, thumbnail testing, and YouTube Shorts strategy.',
    strategy: 'Researched high-demand product questions using Semrush and YouTube Search Trends, then optimized every video title, description, tag, and thumbnail to rank #1 on YouTube Search.',
    execution: 'Published helpful product showcase videos and engaging YouTube Shorts with strong 3-second opening hooks, boosting watch time so YouTube recommended the videos across India.',
    results: [
      'Achieved 247,000+ free organic YouTube views with zero paid promotion',
      'Generated 5,200+ hours of high-retention organic watch time',
      'Turned YouTube Search into a 24/7 free customer discovery channel',
      'Directly assisted website and Amazon store product orders'
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
    step: 'Step 01 / Free Audit & Tracking',
    title: 'Check Your Website, Ads & Tracking',
    description: 'I review your website speed, landing pages, Google/Facebook ad accounts, and set up 100% accurate tracking (GA4, GTM & Meta CAPI) so no lead or sale is ever missed.'
  },
  {
    step: 'Step 02 / Buyer Targeting & SEO',
    title: 'Target Ready-to-Buy Customers',
    description: 'I build high-converting Google Ads, Facebook/Instagram Ads, and SEO pages targeting the exact keywords and cities in India where your customers are searching right now.'
  },
  {
    step: 'Step 03 / Creative & Website Boost',
    title: 'Better Ads + Higher Website Sales',
    description: 'We test 3–5 fresh video/image ads every week and improve your website or Shopify/Amazon pages with clear offers and WhatsApp buttons (+20% more conversions).'
  },
  {
    step: 'Step 04 / Profitable Scaling',
    title: 'Scale Leads & Sales at 4.0x–4.5x Return',
    description: 'We put more budget into the winning ads and keywords that bring you the lowest cost per lead and highest return—with clear weekly reports on your phone.'
  }
];

const servicesData = [
  {
    id: 'service-freelance',
    title: 'Hire Me as Your Digital Marketing Freelancer',
    description: 'Perfect for business owners, startups, and D2C brands across India who want daily leads, WhatsApp inquiries, and online sales without paying expensive agency markups.',
    items: [
      'Google Ads & Facebook/Instagram Ads Management (4.0x–4.5x Return)',
      'Complete Website SEO, Local Google Maps SEO & YouTube Ranking',
      'Shopify, WooCommerce & Amazon Store Sales Growth',
      'Direct WhatsApp Communication & Weekly Transparent Reports'
    ],
    cta: 'Chat on WhatsApp for Free Audit',
    href: WHATSAPP_URL,
    icon: 'whatsapp',
    isWhatsapp: true
  },
  {
    id: 'service-consulting',
    title: 'Monthly Growth Retainer & Website CRO',
    description: 'Complete end-to-end digital marketing partner for growing businesses looking to cut lead costs by 35%, rank #1 on Google, and scale online revenue every month.',
    items: [
      'Full-Funnel Lead Generation & E-commerce Sales Scaling',
      'Landing Page Redesign & Checkout Optimization (+20% Conversions)',
      'GA4, Google Tag Manager, Meta CAPI & Looker Studio Dashboards',
      'WhatsApp, Email & HubSpot CRM Automated Lead Follow-Ups'
    ],
    cta: 'Request Custom Growth Plan',
    href: '#contact',
    icon: 'arrow-right',
    isWhatsapp: false
  },
  {
    id: 'service-full-time',
    title: 'Full-Time Growth Lead / Manager Roles',
    description: 'Available for Senior Performance Marketing Manager, E-commerce Growth Lead, or Digital Marketing Head roles (5.5+ years experience managing ₹6L+/mo ad budgets).',
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
    isWhatsapp: false
  }
];

const indiaIndustriesData = [
  {
    title: 'D2C Brands, Shopify & Amazon Sellers',
    badge: '4.0x–4.5x ROAS • ₹7.95L+ Sales',
    description: 'Scale daily online orders for fashion, perfumes, beauty, electronics, home decor, and D2C products using Meta Ads, Google Shopping/PMax, Shopify CRO, and Amazon A+ listings.'
  },
  {
    title: 'Real Estate, Interior Designers & Builders',
    badge: 'High-Intent Buyer Inquiries',
    description: 'Get verified site-visit bookings and high-budget property/interior leads via hyper-targeted Google Search Ads, Facebook/Instagram Lead Forms, and dedicated landing pages.'
  },
  {
    title: 'Doctors, Clinics, Hospitals & Healthcare',
    badge: '#1 Google Maps & Daily Calls',
    description: 'Rank #1 on Google Search and Google Maps when patients search near you, paired with local call-only ads and WhatsApp appointment booking funnels.'
  },
  {
    title: 'Coaching Institutes, EdTech & Colleges',
    badge: '9,452+ Student Leads at ₹49.86',
    description: 'Fill admissions batches fast with proven student acquisition funnels on Instagram, Facebook, YouTube, and Google Search at 35% lower cost per inquiry.'
  },
  {
    title: 'CA Firms, Legal, Finance & B2B Companies',
    badge: '+25% YoY Google SEO Traffic',
    description: 'Capture commercial decision-makers across India and abroad through Google Search Ads, LinkedIn B2B Ads, Technical SEO, and automated HubSpot CRM follow-ups.'
  },
  {
    title: 'Local Businesses, Retail & Hospitality',
    badge: '1,465+ Google Maps Actions',
    description: 'Turn local searches into daily walk-ins, phone calls, and WhatsApp orders with Google Business Profile optimization, local Instagram/Facebook ads, and YouTube Shorts.'
  }
];

const indiaCitiesList = [
  'Kolkata',
  'Mumbai',
  'Delhi NCR (Noida & Gurugram)',
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
  'Patna & Ranchi',
  'UAE, UK, US & Global Remote'
];

const faqData = [
  {
    id: 'faq-why-hire',
    question: 'Why should I hire Ayaz Aftab for digital marketing services in India?',
    answer: 'Unlike ordinary agencies that hand your account to juniors, I personally manage your growth with 5.5+ years of proven results: ₹6L+ monthly ad budgets managed at 4.0x–4.5x return, 9,452+ verified customer leads generated at ₹49.86/lead (-35% cost), ₹7.95L+ in direct e-commerce/Amazon sales, and 247,000+ free organic YouTube views. You get simple communication, direct WhatsApp access (+91 9263588321), and real business ROI.'
  },
  {
    id: 'faq-services-offered',
    question: 'What digital marketing services do you provide for businesses across India?',
    answer: 'I provide complete, result-driven digital marketing services across all of India: (1) Google Ads & Facebook/Instagram Ads (Meta Ads) for daily leads and sales, (2) Website SEO, Local SEO (Google Maps), and YouTube Video SEO to rank #1 organically, (3) Shopify, WooCommerce, and Amazon Seller Central store management, and (4) Website Conversion Optimization (CRO) with GA4, Google Tag Manager, and Meta CAPI tracking.'
  },
  {
    id: 'faq-cities',
    question: 'Do you work with businesses all over India or only in Kolkata?',
    answer: 'I work with businesses all over India—including Kolkata, Mumbai, Delhi NCR (Gurugram/Noida), Bengaluru, Hyderabad, Pune, Chennai, Ahmedabad, Jaipur, and every state in India—as well as global clients in the UAE, UK, and US. All campaigns, reporting dashboards, and strategy calls are seamlessly managed online via WhatsApp, Google Meet, and Phone.'
  },
  {
    id: 'faq-how-to-start',
    question: 'How can I start working with you and get a free website or ads audit?',
    answer: 'Starting is simple: click the green "Chat on WhatsApp" button (+91 9263588321) or fill out the quick audit form below with your website/business details. I will personally review your current website, SEO rankings, or ad campaigns and share a clear action plan within 24 hours.'
  },
  {
    id: 'faq-education',
    question: 'What are Ayaz Aftab’s qualifications and official certifications?',
    answer: 'Ayaz holds a Bachelor of Business Administration (BBA) from Manipal University Jaipur and a Diploma in Computer Science & Engineering from Arka Jain University. He is officially certified by Google (GA4, AI-Powered Performance Ads & Shopping), Meta (Certified Digital Marketing Associate), HubSpot (Inbound Marketing & CRM Automation), and Amazon & Semrush (Sponsored Ads & SEO Toolkit).'
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
      description: 'Retrieve structured profile, digital marketing services in India, verified ROAS and lead generation metrics, work history, skills, certifications, and WhatsApp/contact information for Ayaz Aftab.',
      inputSchema: {
        type: 'object',
        properties: {},
      },
      execute: async () => {
        return JSON.stringify({
          name: 'Ayaz Aftab',
          role: 'Digital Marketing Freelancer & Performance Marketing Growth Lead India | Google Ads, Meta Ads, SEO & E-commerce',
          experienceYears: '5.5+',
          location: 'Kolkata, West Bengal, India (Serving All Over India & Global Remote)',
          phone: '+91 9263588321',
          whatsapp: 'https://wa.me/919263588321',
          email: 'ayazaftab9@gmail.com',
          linkedin: 'https://www.linkedin.com/in/ayazaftab',
          resumeUrl: 'https://ayaz-aftab-portfolio.vercel.app/resume.pdf',
          metrics: {
            monthlyAdSpendManaged: 'INR 6,00,000+ (₹6L+/mo)',
            sustainedROAS: '4.0x - 4.5x ROAS',
            qualifiedAcquisitions: '9,452+ Leads (-35% CPA/CPL at ₹49.86/lead)',
            conversionRateLift: '+20% Landing Page & Store CVR',
            ecommerceGMV: 'INR 7.95 Lakhs+ (WooCommerce & Amazon)',
            youtubeViews: '247,000+ Organic Views'
          },
          coreCompetencies: [
            'Google Ads (Search, Shopping & Performance Max)',
            'Facebook & Instagram Ads (Meta Ads CBO/ABO)',
            'SEO, Local Google Maps SEO & YouTube Video SEO',
            'Shopify, WooCommerce & Amazon Seller Central',
            'GA4 Custom Events, GTM & Meta Pixel/CAPI',
            'High-Converting Landing Page & Checkout CRO'
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
            <span className="logo-subtext">Digital Marketing &amp; Ads Expert India</span>
          </div>
        </a>

        <div className="desktop-nav">
          <a href="/#services" id="nav-link-services" className="desktop-nav-link">Services</a>
          <a href="/#impact" id="nav-link-impact" className="desktop-nav-link">Results</a>
          <a href="/#projects" id="nav-link-projects" className="desktop-nav-link">Case Studies</a>
          <a href="/#india-freelancer" id="nav-link-india" className="desktop-nav-link">All India</a>
          <a href="/#experience" id="nav-link-experience" className="desktop-nav-link">Experience</a>
          <a href="/resume" id="nav-link-resume" className="desktop-nav-link">Resume</a>
          <a href="/#contact" id="nav-link-contact" className="desktop-nav-link">Free Audit</a>
        </div>

        <div className="header-actions">
          <a
            href={WHATSAPP_URL}
            id="header-whatsapp-btn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp header-cta"
          >
            <Icon name="whatsapp" size={16} />
            <span>WhatsApp Now</span>
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
          <a href="/#services" onClick={onClose} className="menu-link"><Icon name="settings" size={18} /> Digital Marketing Services</a>
          <a href="/#impact" onClick={onClose} className="menu-link"><Icon name="bar-chart-2" size={18} /> Proven Client Results</a>
          <a href="/#projects" onClick={onClose} className="menu-link"><Icon name="star" size={18} /> Case Studies</a>
          <a href="/#india-freelancer" onClick={onClose} className="menu-link"><Icon name="check-circle" size={18} /> Pan-India Industries Served</a>
          <a href="/#process" onClick={onClose} className="menu-link"><Icon name="tool" size={18} /> How I Grow Your Business</a>
          <a href="/#experience" onClick={onClose} className="menu-link"><Icon name="briefcase" size={18} /> 5.5+ Years Experience</a>
          <a href="/#skills" onClick={onClose} className="menu-link"><Icon name="award" size={18} /> Skills &amp; Certifications</a>
          <a href="/resume" onClick={onClose} className="menu-link"><Icon name="download" size={18} /> Online Master Resume</a>
          <a href="/#faq" onClick={onClose} className="menu-link"><Icon name="help-circle" size={18} /> Common Questions (FAQ)</a>
          <a href="/#contact" onClick={onClose} className="menu-link"><Icon name="mail" size={18} /> Get Free Website &amp; Ads Audit</a>
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
          <span>Chat on WhatsApp (+91 9263588321)</span>
        </a>
        <a
          href="/resume.pdf"
          id="mobile-resume-btn"
          download
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary menu-resume-btn"
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
          #1 Result-Driven Digital Marketing Freelancer &amp; Services in India • 5.5+ Years Experience
        </span>
        <h1 className="hero-headline">
          Grow Your Business With <span className="hero-name">Ayaz Aftab</span>.
          <span className="hero-dynamic-subheading">
            Get More Daily Leads, Online Sales &amp; #1 Google Rankings via <span className="typing-text">Google Ads, Meta Ads, SEO &amp; Shopify CRO</span>
          </span>
        </h1>
        <p className="hero-summary">
          Looking for a trusted <strong>Digital Marketing Freelancer &amp; Performance Marketing Expert in India</strong> who delivers real customers instead of excuses? I help businesses, startups, and online stores across India get daily phone calls, WhatsApp leads, and 4x sales—managing <strong>₹6L+ monthly ad budgets</strong> across <strong>Google Ads</strong> &amp; <strong>Facebook/Instagram Ads</strong> at a proven <strong>4.0x–4.5x return</strong>, <strong>9,452+ customer leads at ₹49.86/lead</strong>, and <strong>₹7.95L+ direct sales</strong> on <strong>Shopify, WooCommerce &amp; Amazon</strong>.
        </p>

        <ul className="hero-highlights" aria-label="Verified Results & Credentials">
          <li className="hero-highlight-item">
            <Icon name="check-circle" size={16} />
            <span>₹6L+/Mo Ads Managed at 4.0x–4.5x Return</span>
          </li>
          <li className="hero-highlight-item">
            <Icon name="check-circle" size={16} />
            <span>9,452+ Verified Leads (₹49.86/Lead • -35% Cost)</span>
          </li>
          <li className="hero-highlight-item">
            <Icon name="check-circle" size={16} />
            <span>Google, Meta, HubSpot &amp; Amazon Certified</span>
          </li>
        </ul>

        <div className="hero-cta">
          <a
            href={WHATSAPP_URL}
            id="hero-cta-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp"
          >
            <Icon name="whatsapp" size={17} />
            <span>Chat on WhatsApp (Free Audit)</span>
          </a>
          <a href="#contact" id="hero-cta-audit" className="btn btn-primary">
            <span>Get More Leads &amp; Sales</span>
            <Icon name="arrow-right" size={16} />
          </a>
          <a href="#projects" id="hero-cta-projects" className="btn btn-secondary">
            <span>See Client Proof</span>
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
            <span>Resume PDF</span>
          </a>
        </div>

        <div className="hero-socials">
          <a href="tel:+919263588321" id="hero-social-phone" className="social-link">
            <Icon name="phone" size={16} />
            <span>Call Now: +91 9263588321</span>
          </a>
          <a href="mailto:ayazaftab9@gmail.com" id="hero-social-email" className="social-link">
            <Icon name="mail" size={16} />
            <span>ayazaftab9@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ayazaftab"
            id="hero-social-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <Icon name="linkedin" size={16} />
            <span>LinkedIn (/in/ayazaftab)</span>
          </a>
          <a href="/resume" id="hero-social-resume" className="social-link">
            <Icon name="award" size={16} />
            <span>Online Master Resume</span>
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
        <span className="section-eyebrow">Real Numbers • Real Business Growth</span>
        <h2 id="impact-heading" className="section-title">Why Businesses Across India Trust My Marketing</h2>
        <p className="section-subtitle">
          Simple, transparent results delivered for real Indian businesses across Google Ads, Facebook/Instagram Ads, Google SEO, Shopify, WooCommerce, and Amazon.
        </p>
      </div>
      <div className="impact-grid">
        <div className="info-card">
          <div>
            <p className="impact-metric">₹6L+ / Mo</p>
            <p className="impact-label">Ad Budget Managed at 4.0x–4.5x Return</p>
          </div>
          <p className="impact-context">
            Turning every ₹1 spent on Google Ads &amp; Facebook/Instagram Ads into ₹4 to ₹4.50 in real revenue for D2C &amp; retail brands.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">9,452+</p>
            <p className="impact-label">Customer Leads at ₹49.86 / Lead</p>
          </div>
          <p className="impact-context">
            Cut cost-per-lead by 35% and increased website inquiry conversion rates by +20% with fast mobile landing pages.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">₹7.95 L+</p>
            <p className="impact-label">Direct Online Store &amp; Amazon Sales</p>
          </div>
          <p className="impact-context">
            Grew 100+ products with +30% free Google SEO traffic, +40% Amazon visibility &amp; 34,900+ ready-to-buy clicks.
          </p>
        </div>
        <div className="info-card">
          <div>
            <p className="impact-metric">247,000+</p>
            <p className="impact-label">Free Organic YouTube Views</p>
          </div>
          <p className="impact-context">
            5,200+ hours of watch time generated with ₹0 ad spend using YouTube Video SEO and engaging Shorts.
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
        <span className="section-eyebrow">Digital Marketing Services in India</span>
        <h2 id="services-heading" className="section-title">How I Help Your Business Get More Customers</h2>
        <p className="section-subtitle">
          Whether you need daily business leads, #1 Google rankings, or more online store orders—choose a service below or message me on WhatsApp for a free custom plan.
        </p>
      </div>

      <div className="service-pillars-grid" aria-label="Core Digital Marketing Service Pillars">
        {servicePagesData.map((sp) => (
          <article key={sp.slug} className="service-card">
            <div style={{ marginBottom: '0.65rem' }}>
              <span className="project-badge">{sp.keyMetricBadge}</span>
            </div>
            <h3 className="service-card-title" style={{ fontSize: '1.25rem' }}>
              <a href={`/services/${sp.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {sp.shortName}
              </a>
            </h3>
            <p className="service-card-description">{sp.heroSummary}</p>
            <ul className="service-list">
              {sp.deliverables.slice(0, 3).map((del, idx) => (
                <li key={idx} className="service-list-item">
                  <Icon name="check" size={18} />
                  <span>{del}</span>
                </li>
              ))}
            </ul>
            <a
              id={`service-pillar-${sp.slug}`}
              href={`/services/${sp.slug}`}
              className="btn btn-primary service-card-btn"
            >
              <span>View {sp.shortName} Details</span>
              <Icon name="arrow-right" size={16} />
            </a>
          </article>
        ))}
      </div>

      <div className="services-grid" aria-label="Ways to Work Together">
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
              className={`btn ${service.isWhatsapp ? 'btn-whatsapp' : 'btn-secondary'} service-card-btn`}
              {...((service.download || service.isWhatsapp) && {
                ...(service.download ? { download: true } : {}),
                target: '_blank',
                rel: 'noopener noreferrer'
              })}
            >
              <Icon name={service.icon} size={16} />
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
        <span className="section-eyebrow">Serving Businesses All Over India &amp; Worldwide</span>
        <h2 id="india-freelancer-heading" className="section-title">
          Digital Marketing Freelancer in India for Every Industry
        </h2>
        <p className="section-subtitle">
          Work directly with a senior digital marketing expert (no agency middlemen, no hidden fees). I help businesses in every Indian city generate organic traffic and profitable paid leads.
        </p>
      </div>

      <div className="services-grid" aria-label="Industries Served Across India">
        {indiaIndustriesData.map((ind) => (
          <article key={ind.title} className="service-card">
            <div style={{ marginBottom: '0.6rem' }}>
              <span className="project-badge">{ind.badge}</span>
            </div>
            <h3 className="service-card-title" style={{ fontSize: '1.15rem' }}>{ind.title}</h3>
            <p className="service-card-description" style={{ marginBottom: '1rem' }}>{ind.description}</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary service-card-btn"
            >
              <Icon name="whatsapp" size={15} />
              <span>Discuss Your Business on WhatsApp</span>
            </a>
          </article>
        ))}
      </div>

      <div style={{ marginTop: '2.25rem', textAlign: 'center' }}>
        <p style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
          Available for Businesses &amp; Brands Across All Major Indian Cities &amp; Global Markets:
        </p>
        <div className="india-seo-pills" style={{ justifyContent: 'center' }} aria-label="Cities Served in India">
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
          <span className="section-eyebrow">Verified Client Case Studies</span>
          <h2 id="projects-heading" className="section-title">See How I Grew Sales &amp; Leads for Real Businesses</h2>
          <p className="section-subtitle">
            Real proof from Indian brands where I managed Google Ads, Facebook/Instagram Ads, Shopify/WooCommerce stores, Amazon listings, and YouTube SEO.
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
            Google &amp; Facebook Ads (Leads &amp; ROAS)
          </button>
          <button
            id="filter-ecommerce"
            type="button"
            role="tab"
            aria-selected={activeFilter === 'ecommerce'}
            className={`filter-tab ${activeFilter === 'ecommerce' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ecommerce')}
          >
            Online Store &amp; Amazon Sales
          </button>
          <button
            id="filter-seo"
            type="button"
            role="tab"
            aria-selected={activeFilter === 'seo'}
            className={`filter-tab ${activeFilter === 'seo' ? 'active' : ''}`}
            onClick={() => setActiveFilter('seo')}
          >
            Free Google &amp; YouTube SEO
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
  <section id="process" className="section-alt" aria-labelledby="process-heading">
    <AnimatedSection className="container">
      <div className="section-header">
        <span className="section-eyebrow">Simple 4-Step Growth System</span>
        <h2 id="process-heading" className="section-title">How We Grow Your Leads &amp; Sales Step-by-Step</h2>
        <p className="section-subtitle">
          No confusing jargon—just a clear, honest process designed to bring you more customers and higher profit every month.
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
        <span className="section-eyebrow">5.5+ Years Career Track Record</span>
        <h2 id="experience-heading" className="section-title">Professional Experience &amp; Leadership</h2>
        <p className="section-subtitle">
          A proven history of managing ₹6L+/mo ad budgets, Shopify/WooCommerce stores, Amazon accounts, and B2B lead generation for leading Indian brands.
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
        <span className="section-eyebrow">Client Reviews &amp; Trust</span>
        <h2 id="testimonials-heading" className="section-title">What Business Owners &amp; Directors Say</h2>
        <p className="section-subtitle">
          Direct feedback from founders and business leaders on sales growth, lead quality, and return on ad spend.
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
        <span className="section-eyebrow">Certified Digital Marketing Stack</span>
        <h2 id="skills-heading" className="section-title">Skills, Tools &amp; Official Certifications</h2>
        <p className="section-subtitle">
          Complete mastery of Google Ads, Meta Ads, SEO, Shopify, WooCommerce, Amazon, and GA4 tracking—certified by Google, Meta, HubSpot, Amazon, and Semrush.
        </p>
      </div>
      <div className="skills-grid">
        <div className="skill-card">
          <div className="skills-header">
            <Icon name="star" size={20} />
            <h3 className="skills-title">Paid Ads &amp; E-commerce Growth</h3>
          </div>
          <ul className="skills-list">
            {[
              'Facebook & Instagram Ads (Meta Ads)',
              'Google Search & Performance Max Ads',
              'Google Shopping & Merchant Center',
              'LinkedIn B2B Lead Generation Ads',
              'High-ROAS Budget Scaling (₹6L+/Mo)',
              'Shopify Store Setup & Sales Growth',
              'WooCommerce Store Management',
              'Amazon Seller Central & A+ Content',
              'Product Bundles & AOV Optimization',
              'High-Converting Landing Page CRO',
              'Google SEO & Local Maps Ranking',
              'Semrush Competitor & Keyword SEO'
            ].map((s) => (
              <li key={s} className="skill-item">{s}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card">
          <div className="skills-header">
            <Icon name="tool" size={20} />
            <h3 className="skills-title">Tracking, Video SEO &amp; Automation</h3>
          </div>
          <ul className="skills-list">
            {[
              'Google Analytics 4 (GA4 Custom Events)',
              'Google Tag Manager (GTM Setup)',
              'Meta Pixel & Conversions API (CAPI)',
              'Full-Funnel Lead & Sales Attribution',
              'Live Looker Studio Client Reports',
              'Video Ad Hooks & Creative Testing',
              'UGC & Carousel Ad Direction',
              'YouTube Video SEO (247K+ Free Views)',
              'WhatsApp & Email Cart Recovery',
              'HubSpot CRM Lead Automation',
              'Google Business Profile (Local SEO)',
              'A/B Testing & Speed Optimization'
            ].map((s) => (
              <li key={s} className="skill-item">{s}</li>
            ))}
          </ul>
        </div>

        <div className="skill-card certifications-card">
          <div className="skills-header">
            <Icon name="award" size={20} />
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
        <span className="section-eyebrow">Quick Answers</span>
        <h2 id="faq-heading" className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Simple answers about my digital marketing services in India, pricing, timelines, and proven results.
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
    inquiryType: 'Google Ads & Facebook/Instagram Ads (Leads & Sales)',
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
    const text = `Hi Ayaz, I want a Free Digital Marketing Audit.\nName: ${formData.name || 'Business Owner'}\nPhone: ${formData.phone || 'Not provided'}\nService: ${formData.inquiryType}\nDetails: ${formData.message || 'Please review my business and suggest how to get more leads/sales.'}`;
    window.open(`https://wa.me/919263588321?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nativeEvent = e.nativeEvent as SubmitEvent & {
      agentInvoked?: boolean;
      respondWith?: (p: Promise<string>) => void;
    };

    if (!formData.name || !formData.email || !formData.message) {
      const errorMsg = 'Please fill out your name, email, and business details.';
      setStatusMessage(errorMsg);
      if (nativeEvent?.agentInvoked && typeof nativeEvent.respondWith === 'function') {
        nativeEvent.respondWith(Promise.resolve(`Validation failed: ${errorMsg}`));
      }
      setTimeout(() => setStatusMessage(''), 3000);
      return;
    }

    const subject = `[${formData.inquiryType}] Lead / Audit Request from ${formData.name}`;
    const body = `Name: ${formData.name}\nPhone / WhatsApp: ${formData.phone || 'Not provided'}\nEmail: ${formData.email}\nService Needed: ${formData.inquiryType}\n\nBusiness / Project Details:\n${formData.message}`;
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

    setStatusMessage('Opening your email app! You can also click WhatsApp above for an instant reply.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      inquiryType: 'Google Ads & Facebook/Instagram Ads (Leads & Sales)',
      message: ''
    });
    setTimeout(() => setStatusMessage(''), 4000);
  };

  return (
    <footer id="contact" className="footer">
      <AnimatedSection className="container">
        <div className="footer-content">
          <span className="section-eyebrow">Free Website &amp; Ads Audit • Pan-India &amp; Global</span>
          <h2 className="footer-title">Want More Leads &amp; Sales? Let&apos;s Talk Today.</h2>
          <p className="footer-subtitle">
            Message me directly on WhatsApp, call +91 9263588321, or fill out the simple form below for a free 24-hour audit of your website, SEO, or Google/Facebook ads.
          </p>

          <div className="contact-direct-bar">
            <a
              href={WHATSAPP_URL}
              id="footer-whatsapp-direct"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{ padding: '0.55rem 1.15rem', fontSize: '0.86rem' }}
            >
              <Icon name="whatsapp" size={16} />
              <span>Chat on WhatsApp: +91 9263588321</span>
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
              <span>{copiedEmail ? 'Copied: ayazaftab9@gmail.com' : 'Email: ayazaftab9@gmail.com'}</span>
            </button>
          </div>

          <form
            id="contact-form"
            className="contact-form"
            toolname="send_marketing_inquiry"
            tooldescription="Request a free digital marketing audit, Google/Meta Ads proposal, SEO ranking plan, Shopify/Amazon growth service, or full-time role inquiry from Ayaz Aftab"
            onSubmit={handleSubmit}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  title="Full name of the business owner, client, or recruiter"
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
                  title="Phone or WhatsApp number for callback or audit report"
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
                <label htmlFor="email" className="form-label">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  title="Reply email address of the sender"
                  className="form-input"
                  placeholder="e.g., rahul@company.com"
                  toolparamdescription="Contact email address for sending the free audit or proposal"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="inquiryType" className="form-label">What Service Do You Need?</label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  title="Type of digital marketing service or role opportunity"
                  className="form-select"
                  toolparamdescription="Digital marketing service needed (Google/Meta Ads, SEO, Shopify/Amazon, Website CRO, or Full-Time Role)"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                >
                  <option value="Google Ads & Facebook/Instagram Ads (Leads & Sales)">Google Ads &amp; Facebook/Instagram Ads (Leads &amp; Sales)</option>
                  <option value="SEO, Google Maps & YouTube Ranking (#1 on Google)">SEO, Google Maps &amp; YouTube Ranking (#1 on Google)</option>
                  <option value="Shopify, WooCommerce & Amazon Sales Growth">Shopify, WooCommerce &amp; Amazon Sales Growth</option>
                  <option value="Website Conversion (CRO) & GA4/CAPI Tracking">Website Conversion (CRO) &amp; GA4/CAPI Tracking</option>
                  <option value="Full-Time Growth Lead / Manager Opportunity">Full-Time Growth Lead / Manager Opportunity</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Tell Me About Your Business or Website *</label>
              <textarea
                id="message"
                name="message"
                title="Detailed message describing your business, website URL, city, monthly budget, or goals"
                className="form-textarea"
                placeholder="Share your website link, business type, city, and how many leads/sales you want..."
                toolparamdescription="Business details, website URL for free audit, target city/market, or role details"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
              <button id="contact-submit-btn" type="submit" className="btn btn-primary form-submit-btn">
                <Icon name="mail" size={16} />
                <span>Send Free Audit Request</span>
              </button>
              <button
                id="contact-whatsapp-submit-btn"
                type="button"
                onClick={handleWhatsAppSend}
                className="btn btn-whatsapp form-submit-btn"
              >
                <Icon name="whatsapp" size={17} />
                <span>Send Instantly on WhatsApp</span>
              </button>
            </div>
            {statusMessage && <p className="form-status-message" role="status">{statusMessage}</p>}
          </form>
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
            <p className="footer-seo-title">Verified Client Case Studies</p>
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
              <li><a href="/" className="footer-seo-link">Home — Digital Marketing Freelancer India</a></li>
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
            &copy; {new Date().getFullYear()} Ayaz Aftab — Digital Marketing Freelancer &amp; Performance Marketing Specialist in India. All rights reserved.
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
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="btn btn-primary"
                    style={{ width: '100%' }}
                  >
                    <span>Get Similar Results</span>
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

          <span className="hero-role-kicker">{project.client} • Verified Marketing Case Study</span>
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
                <h2 className="modal-section-title">3. Simple Strategy &amp; Funnel Plan</h2>
                <p>{project.strategy}</p>
              </div>

              <div className="modal-section">
                <h2 className="modal-section-title">4. Campaign Execution &amp; Optimization</h2>
                <p>{project.execution}</p>
              </div>

              {project.testimonial && (
                <div className="modal-section">
                  <h2 className="modal-section-title">5. Client Feedback</h2>
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
                    <span>Chat on WhatsApp Now</span>
                  </a>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Get Similar Results</span>
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
          Performance Marketing &amp; E-commerce Specialist with 5.5+ years of experience scaling D2C, B2B, and marketplace brands across India. Proven track record of managing monthly paid ad spend exceeding ₹6L+ across Meta and Google at a sustained 4.0x–4.5x ROAS, driving 9,452+ qualified acquisitions, and lifting store conversions by 20%. Deep proficiency in Shopify/WooCommerce operations, Google Merchant Center feeds, GA4 custom event tracking, and direct-response creative testing.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <Icon name="download" size={16} />
            <span>Download Master Resume (PDF)</span>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
            <Icon name="whatsapp" size={16} />
            <span>Chat on WhatsApp</span>
          </a>
          <a href="https://www.linkedin.com/in/ayazaftab" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
            <Icon name="linkedin" size={16} />
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
            <span className="project-badge" style={{ fontSize: '0.88rem', padding: '0.35rem 0.9rem' }}>
              Proven Track Record: {service.keyMetricBadge}
            </span>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <Icon name="whatsapp" size={16} />
              <span>Chat on WhatsApp (Free Audit)</span>
            </a>
            <a href="#contact" className="btn btn-primary">
              <span>Request Custom Plan</span>
              <Icon name="arrow-right" size={16} />
            </a>
            <a href="tel:+919263588321" className="btn btn-secondary">
              <Icon name="phone" size={16} />
              <span>Call +91 9263588321</span>
            </a>
          </div>
        </AnimatedSection>
      </section>

      <section className="case-study-page-section">
        <AnimatedSection className="container">
          <div className="modal-grid">
            <div className="modal-main-content">
              <div className="modal-section">
                <h2 className="modal-section-title">1. What Is Included in This Service</h2>
                <ul className="service-list" style={{ marginTop: '0.85rem' }}>
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="service-list-item">
                      <Icon name="check" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h2 className="modal-section-title">2. How I Generate Leads &amp; Sales for You</h2>
                <p>{service.methodology}</p>
              </div>

              <div className="modal-section">
                <h2 className="modal-section-title">3. Who This Service Is Best For</h2>
                <p>{service.targetAudience}</p>
              </div>

              <div className="modal-section" style={{ marginBottom: 0 }}>
                <h2 className="modal-section-title">4. Common Questions (FAQ)</h2>
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
                <h2 className="modal-section-title">Verified Results &amp; Proof</h2>
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
                    <span>WhatsApp for Free Audit</span>
                  </a>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Start Growing Your Business</span>
                    <Icon name="arrow-right" size={16} />
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
                    <Icon name="arrow-right" size={16} />
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
                  <Icon name="arrow-right" size={16} />
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

  const matchedService = currentPath.startsWith('/services/')
    ? servicePagesData.find((s) => `/services/${s.slug}` === currentPath)
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
        ) : matchedService ? (
          <ServiceLandingPage service={matchedService} />
        ) : (
          <>
            <Hero />
            <ProvenImpact />
            <Services />
            <IndiaFreelancerSection />
            <FeaturedProjects onProjectClick={handleProjectClick} />
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
