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

export interface LandingPageData {
  slug: string;
  navLabel: string;
  breadcrumbLabel: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  badge: string;
  metrics: { value: string; label: string }[];
  deliverablesTitle: string;
  deliverables: string[];
  workflowTitle: string;
  workflowSteps: { title: string; detail: string }[];
  localOrScopeTitle: string;
  localOrScopeBody: string;
  pricingTitle: string;
  pricingSummary: string;
  proofPoints: string[];
  relatedCaseStudyIds: number[];
  relatedServiceSlugs: string[];
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
    title: 'Google Ads & Meta Ads Freelancer India: ₹35L+/Mo Combined Ad Spend Managed at 4.0x–4.5x ROAS',
    metaTitle: 'Google Ads & Meta Ads Freelancer India (₹35L+/Mo Managed) | Ayaz Aftab',
    metaDescription: 'Work directly with a senior Google Ads freelancer and Meta Ads freelancer in India managing ₹35L+ monthly ad budgets at 4.0x–4.5x ROAS and 9,452+ leads at 35% lower CPA.',
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
    methodology: 'Paid ads only scale profitably when your store converts mobile visitors cleanly. I pair fast, trust-rich Shopify and WooCommerce product pages, discovery set bundles, and streamlined checkouts with keyword-indexed Amazon A+ content.',
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
    title: 'SEO Services in India: Page-1 Google Search, Local Maps (GBP) & YouTube Growth',
    metaTitle: 'SEO Freelancer & Services in India | Google Search, Local Maps & YouTube — Ayaz Aftab',
    metaDescription: 'Grow organic leads from Google Search, Google Maps, and YouTube. SEO specialist in India delivering +30% organic traffic, 247,000+ YouTube views, and 1,465+ local buyer actions.',
    heroSummary: 'Capture high-intent customers 24/7 without paying for every click. I execute clean, compounding Technical SEO, On-Page SEO, Google Business Profile (Local Maps) optimization, and YouTube Video SEO so your business wins top-page visibility when buyers across India search for your services.',
    keyMetricBadge: '+30% Organic Traffic • 247K+ YouTube Views',
    targetAudience: 'Designed for service businesses, D2C e-commerce brands, doctors & clinics, real estate firms, CA/financial practices, and multi-location businesses across India seeking compounding Google organic traffic.',
    deliverables: [
      'Complete Technical SEO Audit & 100/100 Core Web Vitals Speed Optimization',
      'Commercial Buyer Keyword Research & Competitor Gap Analysis via Semrush',
      'On-Page SEO for Service Landing Pages, City Pages & E-commerce Collections',
      'Google Business Profile (Local Maps SEO) Optimization for Direct Customer Calls',
      'Schema.org JSON-LD Rich Results & AI Answer Engine Optimization (ChatGPT, Perplexity, Google AI)',
      'YouTube Video SEO (Search Trend Mapping, Titles, Chapters, Thumbnail CTR & Shorts Strategy)'
    ],
    methodology: 'Modern organic visibility requires ranking across Google Web Search, Google Maps, AI Answer Engines, and YouTube together. I eliminate technical crawl bottlenecks first, deploy Schema.org structured data, and build clear service pages around commercial buyer searches.',
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
        a: 'Yes. Every website I optimize includes Schema.org JSON-LD graphs, pre-rendered semantic HTML, llms.txt, and Agentic Resource Discovery (ard.json) so both Google and AI search engines understand your business.'
      },
      {
        q: 'Can Local SEO help my business get more phone calls in my city?',
        a: 'Absolutely. Optimizing your Google Business Profile for local commercial searches helped drive 1,465+ direct customer calls, map direction requests, and website visits.'
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

export const dedicatedLandingPagesData: LandingPageData[] = [
  {
    slug: 'google-ads-freelancer-india',
    navLabel: 'Google Ads Freelancer India',
    breadcrumbLabel: 'Google Ads Freelancer India',
    eyebrow: 'GOOGLE ADS FREELANCER INDIA • SEARCH, PMAX & SHOPPING',
    h1: 'Google Ads Freelancer India — High-Intent Search, Performance Max & Shopping',
    subtitle: 'Work directly with a Google-certified Google Ads freelancer in India managing ₹35L+/mo combined ad spend across Search, Shopping, and Performance Max at 4.0x–4.5x ROAS—no agency markups, no junior handoffs.',
    badge: '4.5x PMax ROAS • 34,900+ Commercial Clicks',
    metrics: [
      { value: '4.0x–4.5x', label: 'Google Ads ROAS' },
      { value: '34,900+', label: 'Commercial Clicks' },
      { value: '₹7.95L+', label: 'WooCommerce / Amazon GMV' },
      { value: '₹0', label: 'Ad Spend Markup' }
    ],
    deliverablesTitle: '1. What You Get with My Google Ads Management in India',
    deliverables: [
      'Exact & Phrase Match Search Campaigns Built Around Buyer Intent + Negative Keyword Hygiene',
      'Performance Max (PMax) Asset Group Segmentation with Brand Exclusion Rules So PMax Hunts Net-New Buyers',
      'Google Merchant Center Feed Indexing, Custom Margin Labels & Shopping Bid Controls for Shopify / WooCommerce',
      'GA4 Custom Events, Google Tag Manager (GTM) & Enhanced Conversions Signal Setup Before Scaling Spend',
      'Call-Focused Local Search & Google Maps Ad Extensions for Clinics, Real Estate, Legal & Regional Retailers',
      'Live Looker Studio Dashboards Tracking Spend, CPL, ROAS & Search Term Quality 24/7'
    ],
    workflowTitle: '2. How I Audit & Scale Indian Google Ads Accounts',
    workflowSteps: [
      {
        title: 'Day 1–2: Wasted Spend & Tracking Audit (Free 24-Hour Review)',
        detail: 'Before spending another rupee, I inspect search terms, broad-match bleed, PMax brand cannibalization, and GTM/GA4 Enhanced Conversions so conversion signals reach Google Smart Bidding cleanly.'
      },
      {
        title: 'Week 1: Clean Intent Segmentation',
        detail: 'Separate high-intent commercial exact-match Search from branded campaigns, prune junk placements, and split Google Shopping feeds by product margin and bestsellers.'
      },
      {
        title: 'Ongoing Weekly Sprints: Landing Page CRO & Bid Scaling',
        detail: 'Pair ad copy refinement and extension testing with +20% landing page CRO improvements so higher click volume translates into lower CPL (as proven at ₹49.86 CPL) and 4.0x–4.5x ROAS.'
      }
    ],
    localOrScopeTitle: '3. Pan-India & International Google Ads Coverage',
    localOrScopeBody: 'Based in Kolkata, I manage Google Search, Shopping, Performance Max, and YouTube campaigns for D2C stores and lead-gen businesses across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, Ahmedabad, Jaipur, and international markets (UAE, UK, US). Certified in Google GA4, AI-Powered Performance Ads & Shopping.',
    pricingTitle: 'Transparent Monthly Retainers & Zero Ad Markup',
    pricingSummary: 'Monthly retainers for dedicated Google Ads management typically range from ₹35,000 to ₹75,000/month (or a performance-hybrid structure for qualifying D2C brands spending ₹2L+/mo). Media spend goes directly to Google from your own billing card with ₹0 markup and 100% account ownership.',
    proofPoints: [
      'Managed ₹2L/mo Google PMax & Search retargeting for Jaffri Creations at 4.5x ROAS across 34,900+ commercial clicks',
      'Co-managed ₹35L+ combined monthly paid media budgets (Meta + Google) including FFACE mandates (Decoy Luxury Perfumes & GM Modular) at 4.0x ROAS',
      'Delivered 9,452 verified acquisitions with -35% CPA reduction and +20% landing page CVR lift for MTEI Services'
    ],
    relatedCaseStudyIds: [1, 2, 3],
    relatedServiceSlugs: ['performance-marketing-meta-google-ads', 'ga4-gtm-capi-tracking-cro'],
    faqs: [
      {
        q: 'How do you stop Google Performance Max (PMax) from inflating ROAS on branded searches?',
        a: 'I isolate branded queries into a separate exact-match Search campaign, attach brand exclusion lists to Performance Max, and configure customer acquisition settings so PMax focuses on cold commercial buyers rather than people already typing your company name.'
      },
      {
        q: 'What is the ideal starting Google Ads budget in India?',
        a: 'For focused B2B or local city lead generation in India, ₹50,000/month is a clean floor for reliable conversion data. For competitive national D2C e-commerce (Search + Shopping + PMax), ₹1,00,000–₹1,50,000/month lets Smart Bidding exit the learning phase faster.'
      },
      {
        q: 'Do you set up Google Tag Manager and GA4 Enhanced Conversions?',
        a: 'Yes. Every Google Ads retainer begins with verifying GTM, GA4 custom purchase/lead events, and Enhanced Conversions so bidding algorithms optimize for verified buyers and qualified phone/WhatsApp leads.'
      },
      {
        q: 'How much does a Google Ads freelancer in India cost per month?',
        a: 'Retainers typically fall between ₹35,000 and ₹75,000/month depending on account complexity and SKU/location count, with zero percentage markup on your Google Ads bill.'
      }
    ]
  },
  {
    slug: 'meta-ads-freelancer-india',
    navLabel: 'Meta Ads Freelancer India',
    breadcrumbLabel: 'Meta Ads Freelancer India',
    eyebrow: 'META ADS FREELANCER INDIA • FACEBOOK & INSTAGRAM CBO/ABO',
    h1: 'Meta Ads Freelancer India — Profitable Facebook & Instagram CBO Scaling',
    subtitle: 'Hire a Meta-certified Meta Ads freelancer in India managing ₹35L+/mo combined spend with weekly creative hook sprints, Shopify catalog scaling, server-side Meta CAPI, and sustained 4.0x–4.5x ROAS.',
    badge: '9,452+ Leads at ₹49.86 CPL • 4.0x ROAS',
    metrics: [
      { value: '9,452+', label: 'Verified Meta Leads' },
      { value: '₹49.86', label: 'Average CPL (-35% CPA)' },
      { value: '3–5 / Wk', label: 'Creative Hook Tests' },
      { value: '4.0x+', label: 'Luxury & D2C ROAS' }
    ],
    deliverablesTitle: '1. Complete Facebook & Instagram (Meta Ads) Execution Scope',
    deliverables: [
      'Structured CBO Scaling & ABO Testing Architecture Across Prospecting, Lookalikes & Dynamic Product Catalogs',
      'Weekly Creative Sprints: 3–5 Ad Concepts Every Week (UGC Reels, Unboxing Hooks, Comparison Static Carousels)',
      'Server-Side Meta Conversions API (CAPI) + Browser Pixel Deduplication to Recover Lost iOS 14.5+ Signals',
      'Advantage+ Shopping & WhatsApp / Lead-Form Funnels Connected Directly to CRM Workflows',
      'Decoy / Bundle / Discovery-Set Merchandising Feedback for Shopify & WooCommerce AOV Lift (+20% CVR)',
      'Frequency Cap Monitoring & Thumb-Stop Ratio Optimization Before CPA Spikes'
    ],
    workflowTitle: '2. How I Scale Meta Ads Without Burning Creative Fatigue',
    workflowSteps: [
      {
        title: 'Signal Repair First (Pixel + Server-Side Meta CAPI)',
        detail: 'Standard browser pixels drop 25–35% of conversion events in India on iOS/ad-block browsers. I configure deduplicated CAPI so Meta sees real purchases and quality leads before raising budgets.'
      },
      {
        title: 'Weekly 3–5 Creative Concept Pipeline',
        detail: 'Creative is the primary targeting lever on Meta today. I script unboxing hooks, founder explainers, problem-solution carousels, and social-proof variations—rotating losers out before frequency inflates CPM.'
      },
      {
        title: 'Controlled CBO + Storefront Conversion Alignment',
        detail: 'Winning creatives graduate into consolidated CBO and Advantage+ Shopping campaigns paired with mobile-first landing pages and bundle offers for 4.0x+ sustained ROAS.'
      }
    ],
    localOrScopeTitle: '3. D2C E-commerce & High-Volume Lead Gen Across India',
    localOrScopeBody: 'From luxury fragrance and consumer electrical mandates at FFACE (₹6L+/mo flagship accounts inside a ₹35L+/mo combined portfolio) to 9,452 leads at ₹49.86 CPL for MTEI Services, every campaign is operated directly by Ayaz Aftab (Meta Certified Digital Marketing Associate) without junior delegation.',
    pricingTitle: 'Clear Retainer Pricing & 100% Business Manager Ownership',
    pricingSummary: 'Fixed monthly retainers range from ₹35,000 to ₹75,000/month (plus performance-hybrid structures for D2C brands spending ₹2L+/mo). Campaigns run exclusively inside your own Meta Business Manager, with full ad creative and audience history remaining yours permanently.',
    proofPoints: [
      'Generated 9,452 verified acquisitions at ₹49.86 CPL (-35% CPA reduction) and +20% landing page CVR for MTEI Services',
      'Directing flagship FFACE Meta & Google mandates (Decoy Luxury Perfumes & GM Modular) at sustained 4.0x ROAS',
      'Executed Shopify discovery-set offers and catalog dynamic ads driving repeat luxury orders and dealer demand'
    ],
    relatedCaseStudyIds: [1, 3, 2],
    relatedServiceSlugs: ['performance-marketing-meta-google-ads', 'ecommerce-growth-shopify-woocommerce-amazon'],
    faqs: [
      {
        q: 'Do you help script ad creatives or only click buttons in Meta Ads Manager?',
        a: 'Ad creative drives most of Meta Ads performance. I provide weekly creative direction—covering 3–5 hook scripts, UGC unboxing shot lists, static comparison layouts, and copy angles tailored to Indian buyers.'
      },
      {
        q: 'Why is Meta Conversions API (CAPI) necessary if we already installed the Meta Pixel?',
        a: 'Browser-only pixels miss 25–35% of events on iOS devices and strict mobile browsers. Server-side CAPI with event deduplication raises Event Match Quality so Meta delivery finds actual buyers rather than cheap accidental clickers.'
      },
      {
        q: 'Can you reduce junk leads on Instagram & Facebook Instant Forms?',
        a: 'Yes. Using higher-intent conditional questions, OTP/custom greeting flows on WhatsApp clicks, or fast mobile landing pages with server-side CAPI Lead feedback cuts low-intent inquiries—as seen across 9,452 leads at ₹49.86 CPL.'
      },
      {
        q: 'Do you own or touch our Meta Business Manager billing?',
        a: 'Never. You add my agency/partner seat inside your Business Manager and pay Meta directly with your corporate card—zero ad markup and total security.'
      }
    ]
  },
  {
    slug: 'digital-marketing-freelancer-in-kolkata',
    navLabel: 'Digital Marketing Freelancer in Kolkata',
    breadcrumbLabel: 'Digital Marketing Freelancer in Kolkata',
    eyebrow: 'KOLKATA HQ • PAN-INDIA PERFORMANCE & SEO PARTNER',
    h1: 'Digital Marketing Freelancer in Kolkata — Pan-India Performance & SEO Growth',
    subtitle: 'Based in Kolkata, West Bengal — helping Kolkata founders and pan-India D2C brands scale daily leads, Google Search/Maps rankings, Meta & Google Ads (₹35L+/mo managed at 4.0x–4.5x ROAS), and Shopify/Amazon revenue.',
    badge: 'Kolkata HQ • ₹35L+/Mo Managed • 1,465+ Local Actions',
    metrics: [
      { value: '5.5+ Yrs', label: 'Kolkata & Pan-India Exp' },
      { value: '1,465+', label: 'Local GBP Buyer Actions' },
      { value: '4.0x–4.5x', label: 'Multi-Channel ROAS' },
      { value: '< 2 Hrs', label: 'Direct Founder Support' }
    ],
    deliverablesTitle: '1. Full-Stack Digital Marketing Services in Kolkata & Pan-India',
    deliverables: [
      'Kolkata & Eastern India Local SEO: Google Business Profile Optimization, Map Pack Visibility & Phone/Direction Actions',
      'Google Ads (Search, PMax, Shopping) & Meta Ads (Facebook & Instagram CBO/ABO) Managed Hands-On at ₹35L+/Mo Scale',
      'D2C E-commerce Growth: Shopify, WooCommerce & Amazon Seller Central (₹7.95L+ Verified GMV & +40% Amazon Reach)',
      'Technical & On-Page SEO (+30% Website Organic Traffic) Plus YouTube Video SEO (247,000+ Organic Views)',
      'Server-Side GA4, Google Tag Manager & Meta CAPI Setup Plus +20% Landing Page Conversion Optimization',
      'In-Person Strategy Reviews in Kolkata (Salt Lake Sector V, Park Street, New Town) or Daily WhatsApp/Google Meet Remote'
    ],
    workflowTitle: '2. Why Kolkata Brands Choose a Senior Freelancer Over City Agencies',
    workflowSteps: [
      {
        title: 'Direct Senior Strategist — Never Handed Off to Interns',
        detail: 'Many local agencies win your retainer with a senior pitch and then delegate daily ad spend to junior trainees. In Kolkata and pan-India, I personally build, test, and report on your campaigns.'
      },
      {
        title: 'Local Commercial Fluency + National D2C Scale',
        detail: 'Whether driving patient/client phone calls across Salt Lake, Ballygunge, Park Street, and Howrah or scaling national D2C orders across Mumbai, Delhi NCR, and Bengaluru, campaigns match unit economics.'
      },
      {
        title: 'Transparent ₹35K–₹75K Retainer & Live Looker Studio Access',
        detail: 'Track every rupee spent, cost per lead, and net ROAS live. Media billing stays directly on your corporate card with ₹0 markup.'
      }
    ],
    localOrScopeTitle: '3. Serving Kolkata Commercial Hubs & Founders Across India',
    localOrScopeBody: 'Operating out of Kolkata, West Bengal (700001), I support clinics, real estate developers, coaching institutes, restaurants, B2B exporters, and D2C brands across Park Street, Salt Lake Sector V, New Town (Rajarhat), Ballygunge, Behala, and Howrah—alongside pan-India mandates (including FFACE in Kolkata, Jaffri Creations, MTEI Services, and HICO Tax Consultant) and global remote accounts in UAE, UK, and US.',
    pricingTitle: 'Flexible Retainers Built for Growing Kolkata & Pan-India Teams',
    pricingSummary: 'Monthly retainers range from ₹35,000 to ₹75,000/month depending on channel mix (Paid Ads, Local SEO, E-commerce Ops), with transparent 14-to-30 day notice terms and jurisdiction in Kolkata, West Bengal.',
    proofPoints: [
      'Performance Marketing & E-commerce Lead based in Kolkata currently directing ₹35L+ monthly ad spend at 4.0x–4.5x ROAS (FFACE — GM Modular & Decoy Luxury Perfumes)',
      'Generated 1,465+ verified local buyer interactions via Google Business Profile alongside +30% website organic traffic growth',
      'Scaled MTEI Services acquisition funnels to 9,452 leads at ₹49.86 CPL (-35% CPA) and built HICO Tax Consultant to +25% YoY SEO traffic'
    ],
    relatedCaseStudyIds: [1, 2, 3, 4],
    relatedServiceSlugs: ['seo-local-seo-youtube-growth', 'performance-marketing-meta-google-ads'],
    faqs: [
      {
        q: 'Can we meet in person in Kolkata to discuss our marketing audit and strategy?',
        a: 'Yes. Because I am based in Kolkata, West Bengal, we can schedule an initial strategy review around Park Street, Salt Lake Sector V, or New Town—or kick off immediately via WhatsApp (+91 9263588321) and Google Meet with a free 24-hour audit.'
      },
      {
        q: 'Do you only work with Kolkata businesses, or pan-India D2C brands too?',
        a: 'While my home base is Kolkata, West Bengal, most active mandates span pan-India e-commerce and lead-gen brands across Mumbai, Delhi NCR, Bengaluru, Hyderabad, Pune, Chennai, and international remote clients in the UAE, UK, and US.'
      },
      {
        q: 'How does Local SEO & Google Business Profile help Kolkata service businesses?',
        a: 'Optimizing GBP categories, local citations, service landing pages, and review velocity drives high-intent phone calls and direction clicks—like the 1,465+ verified buyer actions delivered in past client work.'
      },
      {
        q: 'What is included in your Free 24-Hour Growth Audit for Kolkata founders?',
        a: 'Send your website URL and goals via WhatsApp or the audit form below. Within 24 hours, I share concrete findings across your Google Business Profile, website CRO leaks, and Meta/Google Ads structure.'
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
    description: 'Structuring high-ROAS Meta Ads (CBO/ABO), Google Search, Shopping & Performance Max campaigns alongside commercial SEO landing pages targeting ready-to-buy customers across India.'
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
    description: 'End-to-end performance marketing and conversion rate optimization retainer for brands looking to cut acquisition costs by 35%, strengthen Google organic visibility, and scale monthly revenue.',
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
    badge: 'Local Maps Pack & Patient Calls',
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

export interface FAQItem {
  id: string;
  category: 'hiring' | 'meta-google' | 'seo-organic' | 'ecommerce' | 'analytics' | 'process';
  categoryLabel: string;
  question: string;
  answer: string;
}

const allFaqsData: FAQItem[] = [
  {
    id: 'faq-why-hire-freelancer',
    category: 'hiring',
    categoryLabel: 'Hiring & Retainers',
    question: 'Why hire Ayaz Aftab as a dedicated performance marketing freelancer in India instead of an agency?',
    answer: 'When you hire a traditional digital marketing agency in India, your ad account is almost invariably handed off to junior trainees or account managers juggling 15+ clients, while you pay hefty management overheads. As an independent senior performance marketing freelancer managing ₹35L+ in combined monthly ad spend at a sustained 4.0x–4.5x ROAS, I personally architect every Google & Meta campaign, test ad angles, configure server-side GA4/CAPI attribution, and communicate directly with founders via WhatsApp (+91 9263588321). You get senior-executive execution, zero agency bloat, and total transparency.'
  },
  {
    id: 'faq-pricing-retainer',
    category: 'hiring',
    categoryLabel: 'Hiring & Retainers',
    question: 'How much does a freelance performance marketer in India charge for ad management & SEO?',
    answer: 'Freelance retainers depend on your monthly ad spend, store scale, and scope of work. Monthly retainers for dedicated performance marketing typically range from ₹35,000 to ₹75,000/month, or a performance-hybrid model for qualifying D2C brands spending ₹2L+/month. Ad spend is paid directly to Google and Meta with zero percentage markups. Every engagement includes weekly strategy sprints, live Looker Studio reporting, and landing page CRO.'
  },
  {
    id: 'faq-zero-ad-markup',
    category: 'hiring',
    categoryLabel: 'Hiring & Retainers',
    question: 'Do you charge a percentage of ad spend or markup media fees?',
    answer: 'No. I maintain a strict Zero Media Markup Guarantee. All ad budgets on Google Ads, Meta Ads Manager, and Amazon Advertising are billed directly to your corporate payment card with zero intermediary fees. You pay a predictable, transparent monthly retainer for strategy and hands-on execution. This eliminates the conflict of interest where agencies push you to spend more just to inflate their cut.'
  },
  {
    id: 'faq-minimum-budget',
    category: 'hiring',
    categoryLabel: 'Hiring & Retainers',
    question: 'What is the minimum monthly ad budget required to work together?',
    answer: 'To achieve statistical significance for ad algorithm learning phases (Meta Advantage+ and Google Smart Bidding), I recommend a minimum monthly media budget of ₹50,000/month for high-intent B2B or local lead generation, and ₹1,00,000 to ₹1,50,000/month for D2C e-commerce brands. For brands currently spending ₹3L to ₹15L+/month, I implement advanced multi-campaign CBO/PMax architectures to maintain high ROAS while scaling volume.'
  },
  {
    id: 'faq-budget-roas',
    category: 'meta-google',
    categoryLabel: 'Meta & Google Ads',
    question: 'What scale of monthly ad budgets and ROAS results does Ayaz Aftab manage?',
    answer: 'I currently manage ₹35L+ in combined monthly paid media budgets across D2C e-commerce, retail, and high-velocity lead-generation portfolios in India (including FFACE — GM Modular & Decoy Luxury Perfumes) at a sustained 4.0x–4.5x ROAS. My verified track record includes 9,452+ customer leads at ₹49.86 CPL (-35% lower CPA), +20% store conversion lift, ₹7.95L+ direct WooCommerce/Amazon GMV, and 247,000+ organic YouTube views.'
  },
  {
    id: 'faq-creative-fatigue',
    category: 'meta-google',
    categoryLabel: 'Meta & Google Ads',
    question: 'How do you combat ad fatigue and rising CPAs on Meta and Google Ads?',
    answer: 'Ad fatigue occurs when target audiences repeatedly see identical creatives, dropping click-through rates (CTR) and driving up CPMs. I run weekly 3–5 creative testing sprints pairing high-contrast visual hooks, unboxing reels, founder direct-to-camera angles, customer review carousels, and problem-solution product comparisons. By constantly injecting validated hook concepts into CBO scaling campaigns, we sustain sub-₹50 CPLs and high 4.0x+ ROAS.'
  },
  {
    id: 'faq-pmax-search',
    category: 'meta-google',
    categoryLabel: 'Meta & Google Ads',
    question: 'How do you structure Google Performance Max (PMax) without cannibalizing branded Search?',
    answer: 'Unoptimized Google PMax campaigns frequently waste spend bidding on your own brand keywords rather than discovering incremental customers. I isolate brand terms into a dedicated high-intent Search campaign with exact matching, add negative brand keyword lists to PMax asset groups, and configure customer acquisition value rules so Google algorithms prioritize net-new buyers instead of existing customers.'
  },
  {
    id: 'faq-services-offered',
    category: 'seo-organic',
    categoryLabel: 'SEO & Organic Growth',
    question: 'What digital marketing and SEO services do you provide across India?',
    answer: 'I deliver full-stack, execution-first freelance growth services across all of India: (1) Google Ads & Meta Ads (Facebook/Instagram) management for daily leads and sales, (2) Technical SEO, Local SEO (Google Maps), and YouTube Video SEO for page-one Google visibility, (3) Shopify, WooCommerce, and Amazon Seller Central store scaling with catalog CRO, and (4) Website Conversion Rate Optimization (CRO) with server-side GA4, GTM, and Meta CAPI tracking.'
  },
  {
    id: 'faq-seo-timeline',
    category: 'seo-organic',
    categoryLabel: 'SEO & Organic Growth',
    question: 'How long does it take to rank on the first page of Google with SEO in India?',
    answer: 'SEO is a compounding organic investment. Initial technical fixes, Schema markup, and Google Search Console indexation take 2 to 4 weeks. Low-to-medium competition commercial keywords typically achieve page-one positions within 60 to 90 days. Competitive high-volume head terms (such as pan-India performance marketing or competitive e-commerce categories) require 4 to 6 months of authoritative content clustering, internal linking, and technical speed optimization.'
  },
  {
    id: 'faq-youtube-seo',
    category: 'seo-organic',
    categoryLabel: 'SEO & Organic Growth',
    question: 'How do you optimize YouTube channels for organic video discovery?',
    answer: 'YouTube operates as the world\'s second largest search engine. In my verified case study for Jaffri Creations, I generated 247,000+ organic views by optimizing video title search intent, designing high-CTR thumbnail hooks, crafting timestamped chapter metadata, structuring keyword tag clusters, and adding transcript closed captions that feed YouTube\'s recommendation algorithm.'
  },
  {
    id: 'faq-ecommerce-cvr',
    category: 'ecommerce',
    categoryLabel: 'E-commerce & Amazon',
    question: 'How do you lift conversion rates on Shopify and WooCommerce stores?',
    answer: 'Paid traffic can only perform if the destination converts. I audit and optimize every friction point: implementing sticky mobile Add-to-Cart buttons, single-page checkouts, trust badges near CTA buttons, bundle/discovery set pricing that lifts Average Order Value (AOV), and sub-2-second mobile load times. This methodology generated a documented +20% store conversion lift for client brands.'
  },
  {
    id: 'faq-amazon-growth',
    category: 'ecommerce',
    categoryLabel: 'E-commerce & Amazon',
    question: 'How do you optimize Amazon Seller Central listings and Sponsored Ads?',
    answer: 'Amazon scaling requires combining catalog search visibility with profitable PPC. I optimize backend search terms (250 bytes), write benefit-led bullet points, design visual A+ Content modules, and structure Sponsored Products/Brands campaigns segmented by exact brand, competitor conquesting, and category keywords while maintaining a Total Advertising Cost of Sale (TACoS) below 15%.'
  },
  {
    id: 'faq-signal-loss-capi',
    category: 'analytics',
    categoryLabel: 'Tracking & Analytics',
    question: 'How do you resolve iOS 14.5+ privacy updates, ad blockers, and lost conversion tracking?',
    answer: 'Standard browser-based pixels lose 25% to 35% of conversion events due to Safari ITP, Firefox tracking protection, and ad blockers. I deploy server-side Meta Conversions API (CAPI) alongside Google Tag Manager (GTM) server containers and GA4 custom events. Sending hashed first-party customer signals directly from the server bypasses browser blockers, restores attribution accuracy, and trains ad algorithms with verified purchasers.'
  },
  {
    id: 'faq-client-reporting',
    category: 'analytics',
    categoryLabel: 'Tracking & Analytics',
    question: 'What reporting dashboards and performance visibility do you provide?',
    answer: 'No monthly PDF surprises. Every client receives access to a live 24/7 Looker Studio executive dashboard syncing Google Ads, Meta Ads, and GA4 revenue data in real time. We track blended Marketing Efficiency Ratio (MER), platform ROAS, Customer Acquisition Cost (CAC), and daily spend pacing. Additionally, I send weekly WhatsApp audio/text summaries detailing what was tested, what won, and what is planned for the next sprint.'
  },
  {
    id: 'faq-cities-india',
    category: 'process',
    categoryLabel: 'Process & Onboarding',
    question: 'Which cities across India and global markets do you serve?',
    answer: 'I provide remote freelance performance marketing and SEO services to founders and enterprises across all major Indian commercial hubs: Kolkata, Mumbai, Delhi NCR (Gurugram/Noida), Bengaluru, Hyderabad, Pune, Chennai, Ahmedabad, Jaipur, Surat, Lucknow, and Chandigarh, as well as international brands in the UAE, UK, and US. Daily communication is handled directly via WhatsApp, Phone, and Google Meet.'
  },
  {
    id: 'faq-how-to-start',
    category: 'process',
    categoryLabel: 'Process & Onboarding',
    question: 'How can I hire you as our digital marketing freelancer or request a free growth audit in India?',
    answer: 'Getting started is straightforward: click "Chat on WhatsApp" (+91 9263588321) or submit your website and goals in the audit form below. I will personally review your existing Google Ads, Meta Ads accounts, or SEO rankings and provide an actionable growth roadmap within 24 hours.'
  },
  {
    id: 'faq-onboarding-timeline',
    category: 'process',
    categoryLabel: 'Process & Onboarding',
    question: 'What does the onboarding process look like in the first 7 to 14 days?',
    answer: 'Onboarding is structured into four rapid phases: Days 1–3: Account access via Meta Business Manager and Google Ads MCC, pixel & CAPI health audit, and historical data analysis. Days 4–7: Growth roadmap presentation, audience persona mapping, and creative brief delivery. Days 8–10: New campaign build, ad copy staging, and tracking verification. Days 11+: Campaign launch, daily budget pacing, and sprint reviews.'
  },
  {
    id: 'faq-contract-handover',
    category: 'process',
    categoryLabel: 'Process & Onboarding',
    question: 'How do contracts, notice periods, and account handover work?',
    answer: 'All engagements are structured with professional transparency. Retainers operate on month-to-month or quarterly sprints with a standard 14-to-30 day mutual written notice. There are zero restrictive lock-ins. You retain 100% legal ownership of your ad accounts, pixel history, Looker Studio dashboards, and creative assets at all times.'
  }
];

const faqData = allFaqsData.slice(0, 7);

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
    case 'file-text':
      return <svg {...props}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>;
    case 'shield':
      return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
    case 'home':
      return <svg {...props}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
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
  onToggleTheme,
  currentPath = '/'
}: {
  onMenuClick: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
  currentPath?: string;
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
          <a
            href="/"
            id="nav-link-home"
            className={`pill-nav-link ${currentPath === '/' ? 'active' : ''}`}
            aria-current={currentPath === '/' ? 'page' : undefined}
          >
            Home
          </a>
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

const OffCanvasMenu = ({
  isOpen,
  onClose,
  currentPath = '/'
}: {
  isOpen: boolean;
  onClose: () => void;
  currentPath?: string;
}) => {
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
      hidden={!isOpen}
    >
      <div
        className={`off-canvas-menu ${isOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="off-canvas-header">
          <a href="/" className="logo-container" onClick={onClose} tabIndex={isOpen ? 0 : -1}>
            <Logo />
            <span className="logo-text">Ayaz Aftab</span>
          </a>
          <button
            id="close-mobile-menu-btn"
            onClick={onClose}
            className="close-menu-btn"
            aria-label="Close menu"
            tabIndex={isOpen ? 0 : -1}
          >
            <Icon name="x" size={20} />
          </button>
        </div>
        <nav className="menu-links" aria-label="Mobile Navigation Links">
          <a
            href="/"
            id="mobile-nav-link-home"
            onClick={onClose}
            className={`menu-link ${currentPath === '/' ? 'active' : ''}`}
            aria-current={currentPath === '/' ? 'page' : undefined}
            tabIndex={isOpen ? 0 : -1}
          >
            <Icon name="home" size={18} /> Home
          </a>
          <a href="/#impact" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="bar-chart-2" size={18} /> ₹35L+/Mo Proven Impact</a>
          <a href="/#services" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="settings" size={18} /> Digital Marketing Services</a>
          <a href="/google-ads-freelancer-india" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="arrow-right" size={18} /> Google Ads Freelancer India</a>
          <a href="/meta-ads-freelancer-india" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="arrow-right" size={18} /> Meta Ads Freelancer India</a>
          <a href="/digital-marketing-freelancer-in-kolkata" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="arrow-right" size={18} /> Digital Marketing Kolkata</a>
          <a href="/#projects" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="star" size={18} /> Case Studies</a>
          <a href="/#india-freelancer" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="check-circle" size={18} /> Pan-India Industries</a>
          <a href="/#process" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="tool" size={18} /> 4-Step Growth System</a>
          <a href="/#experience" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="briefcase" size={18} /> 5.5+ Years Experience</a>
          <a href="/#skills" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="award" size={18} /> Skills &amp; Certifications</a>
          <a href="/resume" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="download" size={18} /> Online Master Resume</a>
          <a href="/faq" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="help-circle" size={18} /> FAQ Directory (18+ Answers)</a>
          <a href="/terms" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="file-text" size={18} /> Terms &amp; Conditions</a>
          <a href="/privacy" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="shield" size={18} /> Privacy Policy</a>
          <a href="/#contact" onClick={onClose} className="menu-link" tabIndex={isOpen ? 0 : -1}><Icon name="mail" size={18} /> Book a Consultation</a>
        </nav>
        <a
          href={WHATSAPP_URL}
          id="mobile-whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp menu-resume-btn"
          style={{ marginBottom: '0.65rem' }}
          tabIndex={isOpen ? 0 : -1}
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
          tabIndex={isOpen ? 0 : -1}
        >
          <Icon name="download" size={16} />
          <span>Download Master Resume (PDF)</span>
        </a>

        <div className="off-canvas-footer">
          <a href="mailto:ayazaftab9@gmail.com" className="social-link" aria-label="Email Ayaz Aftab" tabIndex={isOpen ? 0 : -1}>
            <Icon name="mail" size={16} />
          </a>
          <a href="tel:+919263588321" className="social-link" aria-label="Call Ayaz Aftab" tabIndex={isOpen ? 0 : -1}>
            <Icon name="phone" size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/ayazaftab"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Ayaz Aftab on LinkedIn"
            tabIndex={isOpen ? 0 : -1}
          >
            <Icon name="linkedin" size={16} />
          </a>
          <a
            href="https://github.com/ayazaftab9"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Ayaz Aftab on GitHub"
            tabIndex={isOpen ? 0 : -1}
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
          <span>Kolkata HQ • Pan-India • ₹35L+/Mo Managed</span>
        </div>

        <h1 className="hero-headline-centered">
          Ayaz Aftab — Performance Marketing &amp;<br />
          Digital Marketing Freelancer India
        </h1>

        <p className="hero-subtitle-lead">
          Direct-execution Google Ads freelancer India &amp; Meta Ads freelancer India (Kolkata HQ &amp; Pan-India) scaling 4.0x–4.5x ROAS, 9,452+ leads, and +20% conversion lift—request a free 24-hour growth audit.
        </p>

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
          <span>Kolkata, India (Pan-India)</span>
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
        <span className="section-eyebrow">02 — SERVICES • DIGITAL MARKETING FREELANCER IN INDIA</span>
        <h2 id="services-heading" className="section-title">Performance Marketing &amp; Digital Growth Services India</h2>
        <p className="section-subtitle">
          Direct founder collaboration with a senior performance marketing freelancer India and digital marketing freelancer India — delivering daily qualified leads, 4.0x–4.5x ROAS, and profitable store revenue without agency bloat.
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
        <span className="section-eyebrow">03 — PAN-INDIA COVERAGE &amp; SPECIALIZED CHANNEL HUBS</span>
        <h2 id="india-freelancer-heading" className="section-title">
          Digital Marketing Freelancer in Kolkata &amp; Pan-India Growth Hubs
        </h2>
        <p className="section-subtitle">
          Skip agency overhead and work directly with a performance marketing freelancer India &amp; digital marketing freelancer in Kolkata managing ₹35L+/mo across Kolkata, Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, Chennai, and Jaipur.
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

      <div className="dedicated-hubs-grid" aria-label="Specialized Channel &amp; Regional Growth Hubs">
        {dedicatedLandingPagesData.map((lp) => (
          <article key={lp.slug} className="dedicated-hub-card">
            <div>
              <span className="project-badge">{lp.badge}</span>
            </div>
            <h3 className="dedicated-hub-card-title">
              <a href={`/${lp.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                {lp.navLabel}
              </a>
            </h3>
            <p className="dedicated-hub-card-desc">{lp.subtitle}</p>
            <a
              id={`hub-cta-${lp.slug}`}
              href={`/${lp.slug}`}
              className="btn btn-primary service-card-btn"
            >
              <span>Explore {lp.slug === 'digital-marketing-freelancer-in-kolkata' ? 'Digital Marketing Kolkata' : lp.breadcrumbLabel}</span>
              <Icon name="arrow-right" size={15} />
            </a>
          </article>
        ))}
      </div>

      <div style={{ marginTop: '2rem', padding: '1.25rem', background: 'var(--glass-card-bg)', backdropFilter: 'blur(24px) saturate(180%)', WebkitBackdropFilter: 'blur(24px) saturate(180%)', border: 'var(--glass-card-border)', borderRadius: '14px', boxShadow: 'var(--glass-card-shadow)' }}>
        <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          Serving Founders, D2C Brands &amp; Growing Businesses Across All Major Hubs:
        </p>
        <div className="india-seo-pills" aria-label="Cities Served in India">
          {indiaCitiesList.map((city) =>
            city === 'Kolkata' ? (
              <a
                key={city}
                href="/digital-marketing-freelancer-in-kolkata"
                className="india-seo-pill india-seo-pill-link"
              >
                <span>Kolkata (HQ)</span>
                <Icon name="arrow-right" size={12} />
              </a>
            ) : (
              <span key={city} className="india-seo-pill">{city}</span>
            )
          )}
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
          <span className="section-eyebrow">01 — CASE STUDIES • PERFORMANCE MARKETING FREELANCER INDIA</span>
          <h2 id="projects-heading" className="section-title">Featured Performance Marketing &amp; E-commerce Case Studies</h2>
          <p className="section-subtitle">
            Detailed breakdowns of how a senior performance marketing freelancer in India scales Meta Ads, Google PMax, Shopify/WooCommerce CRO, Amazon, and YouTube SEO to ₹35L+/mo.
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
        <span className="section-eyebrow">04 — PERFORMANCE MARKETING FRAMEWORK</span>
        <h2 id="process-heading" className="section-title">How I Scale Leads &amp; ROAS as Your Dedicated Growth Partner</h2>
        <p className="section-subtitle">
          A transparent 4-stage operating system combining server-side tracking, buyer-intent targeting, weekly creative testing, and checkout conversion optimization.
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
        <span className="section-eyebrow">05 — 5.5+ YEARS DEDICATED FREELANCE EXPERIENCE</span>
        <h2 id="experience-heading" className="section-title">Career Track Record: Senior Performance Marketer in India</h2>
        <p className="section-subtitle">
          Over 5.5 years of hands-on execution managing ₹35L+ combined monthly ad budgets across active brand portfolios like FFACE (GM Modular &amp; Decoy Luxury Perfumes), Jaffri Creations, and MTEI Services.
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
        <span className="section-eyebrow">06 — CLIENT ENDORSEMENTS • INDIA &amp; GLOBAL</span>
        <h2 id="testimonials-heading" className="section-title">Trusted by Founders, Directors &amp; Growth Leaders Across India</h2>
        <p className="section-subtitle">
          Direct feedback on ROAS stability, lead quality, and transparent execution from leaders who hired Ayaz Aftab as their freelance growth partner.
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
        <span className="section-eyebrow">07 — CERTIFICATIONS &amp; TECHNICAL STACK</span>
        <h2 id="skills-heading" className="section-title">Official Google, Meta, HubSpot &amp; Amazon Certified Freelancer</h2>
        <p className="section-subtitle">
          Full-stack performance marketing, Shopify/WooCommerce store operations, and server-side analytics backed by Google, Meta, HubSpot, Amazon, and Semrush credentials.
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
        <span className="section-eyebrow">08 — FAQ • HIRING A FREELANCE DIGITAL MARKETER IN INDIA</span>
        <h2 id="faq-heading" className="section-title">Frequently Asked Questions About Freelance Performance Marketing in India</h2>
        <p className="section-subtitle">
          Direct, transparent answers on retainer models, expected ROAS, timelines, ad budgets, and pan-India remote collaboration.
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
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a href="/faq" className="btn btn-secondary">
          <span>Explore All 18+ FAQs &amp; Agency Comparisons</span>
          <Icon name="arrow-right" size={15} />
        </a>
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
            <span className="section-eyebrow">09 — HIRE A PERFORMANCE MARKETING FREELANCER IN INDIA</span>
            <h2 className="footer-title">Ready to Scale Your Brand with a Direct Growth Partner in India?</h2>
            <p className="footer-subtitle">
              Looking to scale your Google &amp; Meta Ads, grow page-one Google organic traffic, or hire an Executive Growth Lead managing ₹35L+/mo? Reach out directly on WhatsApp or submit your website for a free 24-hour audit.
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
              <li><a href="/faq" className="footer-seo-link">FAQ Directory (18+ Answers)</a></li>
              <li><a href="/terms" className="footer-seo-link">Terms &amp; Conditions</a></li>
              <li><a href="/privacy" className="footer-seo-link">Privacy Policy</a></li>
              <li><a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="footer-seo-link">Download Master Resume (PDF)</a></li>
              <li><a href="https://www.linkedin.com/in/ayazaftab" target="_blank" rel="noopener noreferrer" className="footer-seo-link">LinkedIn Profile (/in/ayazaftab)</a></li>
            </ul>
          </div>
          <div>
            <p className="footer-seo-title">Freelance Service Hubs India</p>
            <ul className="footer-seo-list">
              <li><a href="/google-ads-freelancer-india" className="footer-seo-link">Google Ads Freelancer India</a></li>
              <li><a href="/meta-ads-freelancer-india" className="footer-seo-link">Meta Ads Freelancer India</a></li>
              <li><a href="/digital-marketing-freelancer-in-kolkata" className="footer-seo-link">Digital Marketing Freelancer in Kolkata</a></li>
              <li><a href="/#india-freelancer" className="footer-seo-link">Performance Marketer in Delhi NCR &amp; Mumbai</a></li>
              <li><a href="/#india-freelancer" className="footer-seo-link">Performance Marketer Bengaluru &amp; Hyderabad</a></li>
              <li><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="footer-seo-link">WhatsApp Consultation: +91 9263588321</a></li>
            </ul>
          </div>
        </nav>

        <div className="footer-bottom">
          <a href="/" className="logo-container" aria-label="Back to home">
            <Logo />
            <span className="logo-text">Ayaz Aftab</span>
          </a>
          <nav className="footer-legal-links" aria-label="Legal &amp; Transparency Links">
            <a href="/privacy" className="footer-sublink">Privacy Policy</a>
            <span aria-hidden="true" className="footer-separator">•</span>
            <a href="/terms" className="footer-sublink">Terms &amp; Conditions</a>
            <span aria-hidden="true" className="footer-separator">•</span>
            <a href="/faq" className="footer-sublink">FAQ Directory</a>
          </nav>
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

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { key: 'all', label: 'All Questions (18)' },
    { key: 'hiring', label: 'Hiring & Retainers (4)' },
    { key: 'meta-google', label: 'Meta & Google Ads (3)' },
    { key: 'seo-organic', label: 'SEO & Organic Growth (3)' },
    { key: 'ecommerce', label: 'E-commerce & Amazon (2)' },
    { key: 'analytics', label: 'Tracking & Analytics (2)' },
    { key: 'process', label: 'Process & Onboarding (4)' }
  ];

  const filteredFaqs = allFaqsData.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="subpage-hero" aria-labelledby="faq-page-title">
        <AnimatedSection className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb-nav">
              <li><a href="/" className="breadcrumb-link">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="breadcrumb-current" aria-current="page">Frequently Asked Questions</li>
            </ol>
          </nav>

          <span className="hero-role-kicker">08 — TRANSPARENCY &amp; DUE DILIGENCE • PAN-INDIA &amp; REMOTE</span>
          <h1 id="faq-page-title" className="section-title" style={{ marginBottom: '0.65rem' }}>
            Frequently Asked Questions: Hiring a Performance Marketing &amp; Digital Marketing Freelancer in India
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '820px', marginBottom: '1.5rem' }}>
            Direct, candid answers regarding monthly retainers, ad budget scale (₹35L+/mo managed), sustained 4.0x–4.5x ROAS realities, 100% ad account ownership, tracking signal recovery (Meta CAPI / GA4), and pan-India remote collaboration.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <Icon name="whatsapp" size={16} />
              <span>Ask Ayaz on WhatsApp (+91 9263588321)</span>
            </a>
            <a href="/#contact" className="btn btn-primary">
              <Icon name="mail" size={15} />
              <span>Request Free 24h Growth Audit</span>
            </a>
            <a href="/" className="btn btn-ghost">
              <span>Back to Home</span>
            </a>
          </div>
        </AnimatedSection>
      </section>

      <section className="section" aria-labelledby="faq-directory-heading">
        <AnimatedSection className="container">
          <div className="faq-controls">
            <div className="faq-search-wrapper">
              <input
                type="search"
                className="form-input faq-search-input"
                placeholder="Search questions (e.g. pricing, ROAS, Meta CAPI, PMax, Amazon)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search frequently asked questions"
              />
            </div>
            <div className="faq-filter-pills" role="tablist" aria-label="FAQ Categories">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={selectedCategory === cat.key}
                  className={`faq-pill ${selectedCategory === cat.key ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="faq-list" style={{ marginTop: '2rem' }}>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((item, idx) => (
                <details key={item.id} id={item.id} className="faq-item" open={idx === 0}>
                  <summary className="faq-question">
                    <span style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', textAlign: 'left' }}>
                      <span className="faq-category-badge">{item.categoryLabel}</span>
                      <span style={{ fontWeight: 600 }}>{item.question}</span>
                    </span>
                    <span className="faq-icon">
                      <Icon name="chevron-down" size={18} />
                    </span>
                  </summary>
                  <div className="faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))
            ) : (
              <div className="empty-state-card" style={{ padding: '2.5rem', textAlign: 'center', background: 'var(--glass-card-bg)', border: 'var(--glass-card-border)', borderRadius: '12px' }}>
                <p style={{ fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>No questions matched your search query &quot;{searchQuery}&quot;.</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  Have a specific question about your brand&apos;s ad accounts, store CRO, or SEO?
                </p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                  <Icon name="whatsapp" size={16} />
                  <span>Chat Directly on WhatsApp (+91 9263588321)</span>
                </a>
              </div>
            )}
          </div>

          <div className="legal-callout-card" style={{ marginTop: '3rem' }}>
            <div className="callout-header">
              <Icon name="help-circle" size={20} />
              <h2 style={{ fontSize: '1.05rem', margin: 0 }}>Need Contractual or Legal Details?</h2>
            </div>
            <p style={{ margin: '0.5rem 0 1rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              Review our transparent client Master Services Agreement and privacy compliance standards before getting started.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="/terms" className="btn btn-secondary" style={{ fontSize: '0.84rem' }}>
                <Icon name="file-text" size={15} />
                <span>Terms &amp; Conditions (Client Agreement)</span>
              </a>
              <a href="/privacy" className="btn btn-ghost" style={{ fontSize: '0.84rem' }}>
                <Icon name="shield" size={15} />
                <span>Privacy Policy (DPDP Act Aligned)</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

const TermsPage = () => {
  return (
    <>
      <section className="subpage-hero" aria-labelledby="terms-page-title">
        <AnimatedSection className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb-nav">
              <li><a href="/" className="breadcrumb-link">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="breadcrumb-current" aria-current="page">Terms &amp; Conditions</li>
            </ol>
          </nav>

          <span className="hero-role-kicker">Legal Agreement • Professional Growth Services • Last Updated: November 2026</span>
          <h1 id="terms-page-title" className="section-title" style={{ marginBottom: '0.65rem' }}>
            Terms &amp; Conditions — Freelance Marketing &amp; Growth Consulting
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '820px', marginBottom: '1.5rem' }}>
            These terms govern freelance performance marketing, paid media architecture (Meta &amp; Google Ads), SEO, e-commerce optimization, and marketing advisory services provided by Ayaz Aftab to commercial clients in India and globally.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <Icon name="whatsapp" size={16} />
              <span>Discuss Terms on WhatsApp (+91 9263588321)</span>
            </a>
            <a href="mailto:ayazaftab9@gmail.com" className="btn btn-secondary">
              <Icon name="mail" size={15} />
              <span>Request Custom NDA / MSA</span>
            </a>
            <a href="/" className="btn btn-ghost">
              <span>Back to Home</span>
            </a>
          </div>
        </AnimatedSection>
      </section>

      <section className="section" aria-labelledby="terms-content-heading">
        <AnimatedSection className="container">
          <div className="legal-summary-box">
            <div className="legal-summary-badge">
              <Icon name="check-circle" size={18} />
              <span>Executive Plain-Language Summary</span>
            </div>
            <ul className="legal-summary-list">
              <li><strong>100% Client Ownership:</strong> You retain complete legal and administrative ownership of all your ad accounts, pixel data, catalogs, and analytics.</li>
              <li><strong>Zero Ad Markup Guarantee:</strong> Media spend is paid directly by your organization to Google, Meta, or Amazon. Zero hidden percentage surcharges.</li>
              <li><strong>Full Deliverable IP Transfer:</strong> All custom ad copy, creative briefs, tracking scripts, and dashboards created belong exclusively to you upon payment.</li>
              <li><strong>Zero Restrictive Lock-ins:</strong> Retainers operate on month-to-month or quarterly sprints with a standard 14-to-30 day mutual written notice period.</li>
            </ul>
          </div>

          <div className="legal-clauses-grid" style={{ marginTop: '2.5rem' }}>
            <article className="legal-clause-card">
              <span className="legal-clause-num">01</span>
              <h2 className="legal-clause-title">Scope of Services &amp; Advisory Capacity</h2>
              <p className="legal-clause-text">
                Ayaz Aftab operates as an independent senior performance marketing freelancer, growth consultant, and paid media architect. Services include, but are not limited to: Meta Ads (Facebook &amp; Instagram CBO/ABO), Google Ads (Search, Performance Max, Display, YouTube), Technical &amp; Local SEO, Shopify/WooCommerce store operations, Amazon Seller Central optimization, and server-side conversion tracking (GA4, GTM, Meta CAPI). Specific deliverables, targets, and milestones are outlined in individual project proposals or statements of work (SOW).
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">02</span>
              <h2 className="legal-clause-title">Ad Account Ownership &amp; Direct Billing</h2>
              <p className="legal-clause-text">
                All advertising accounts (Meta Ads Manager, Google Ads, Amazon Advertising, LinkedIn Campaign Manager) must be owned directly by the Client or created under the Client&apos;s Business Manager. Media spend is charged directly by the respective advertising platform to the Client&apos;s billing method (credit card, corporate bank card, or direct line of credit). Ayaz Aftab does not broker, handle, or apply percentage markups to third-party ad spend.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">03</span>
              <h2 className="legal-clause-title">Professional Retainers, Invoicing &amp; Taxes</h2>
              <p className="legal-clause-text">
                Professional fees are structured as fixed monthly retainers or approved performance-hybrid models billed in advance of each 30-day work cycle. Invoices are issued in Indian Rupees (INR) for Indian domestic entities (inclusive of applicable GST) and in USD/EUR/AED for international remote clients via wire transfer or PayPal. Invoices are payable within 7 business days of issuance. Work sprints commence upon receipt of the agreed retainer or milestone deposit.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">04</span>
              <h2 className="legal-clause-title">Intellectual Property &amp; Deliverables Transfer</h2>
              <p className="legal-clause-text">
                Upon full settlement of applicable professional fees, the Client acquires all rights, title, and interest in and to the custom deliverables created during the engagement, including ad copy, audience architectures, creative direction briefs, custom Looker Studio dashboards, and server-side tracking configurations. Pre-existing proprietary frameworks, audit templates, and internal scripts remain the intellectual property of Ayaz Aftab with a perpetual, non-exclusive license granted to the Client for internal operational use.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">05</span>
              <h2 className="legal-clause-title">Confidentiality &amp; Non-Disclosure (NDA)</h2>
              <p className="legal-clause-text">
                Both parties agree to treat all commercial, financial, technical, customer, and marketing information shared during the engagement as strictly confidential. Ayaz Aftab will not disclose the Client&apos;s trade secrets, customer databases, profit margins, product manufacturing costs, or proprietary campaign metrics to third parties without prior written consent. Mutual NDAs are readily executed upon request prior to audit kickoffs.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">06</span>
              <h2 className="legal-clause-title">Performance Realities, ROAS &amp; Advertising Disclaimers</h2>
              <p className="legal-clause-text">
                While Ayaz Aftab applies proven, data-backed frameworks managing ₹35L+ monthly spend at historical 4.0x–4.5x ROAS and -35% CPA reductions, digital advertising is inherently subject to external market dynamics, competitor bidding fluctuations, consumer demand cycles, website uptime, inventory availability, and third-party platform algorithm updates (Google, Meta, Amazon). Consequently, specific return on ad spend (ROAS), cost per lead (CPL), or search ranking guarantees cannot be legally warranted. Optimization is conducted with highest industry care, real-time testing, and data-driven discipline.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">07</span>
              <h2 className="legal-clause-title">Communication Cadence &amp; Response Times</h2>
              <p className="legal-clause-text">
                Day-to-day coordination is maintained through a dedicated WhatsApp channel, email (`ayazaftab9@gmail.com`), and scheduled Google Meet review sessions. Strategic sprint calls are held weekly or bi-weekly. Standard business hours are Monday through Saturday, 10:00 AM to 7:00 PM IST. Critical account escalations (e.g. ad account policy warnings or payment glitches) receive priority response within 2 to 4 business hours.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">08</span>
              <h2 className="legal-clause-title">Engagement Term, Pause &amp; Termination Notice</h2>
              <p className="legal-clause-text">
                Engagements operate on flexible monthly cycles. Either party may terminate or pause the engagement by providing fourteen (14) to thirty (30) days prior written notice via email or WhatsApp. In the event of termination, Ayaz Aftab provides an orderly, comprehensive handover of all active campaigns, Looker Studio dashboards, pixel configurations, and ad creative files. Fees paid for work already rendered during active cycles are non-refundable.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">09</span>
              <h2 className="legal-clause-title">Limitation of Liability</h2>
              <p className="legal-clause-text">
                To the maximum extent permitted by applicable law, neither party shall be liable for indirect, incidental, punitive, or consequential damages (including lost profits, lost revenues, or loss of business data) arising out of or related to this engagement. The aggregate cumulative liability of Ayaz Aftab for any claims arising under these terms shall not exceed the total professional fees actually paid by the Client in the thirty (30) days immediately preceding the event giving rise to liability.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">10</span>
              <h2 className="legal-clause-title">Governing Law &amp; Dispute Resolution</h2>
              <p className="legal-clause-text">
                These Terms and Conditions and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Republic of India. In the event of any disagreement, the parties shall first endeavor in good faith to resolve the matter amicably through executive consultation. Failing such resolution, the dispute shall be subject to the exclusive jurisdiction of the competent courts located in Kolkata, West Bengal, India.
              </p>
            </article>
          </div>

          <div className="legal-footer-cta" style={{ marginTop: '3rem', padding: '2rem', background: 'var(--glass-card-bg)', border: 'var(--glass-card-border)', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.45rem' }}>Have Questions Regarding These Terms or Need a Custom Agreement?</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              We regularly execute corporate Master Services Agreements (MSAs), custom SOWs, and mutual Non-Disclosure Agreements (NDAs) for enterprise brands and fast-scaling D2C companies.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <Icon name="whatsapp" size={16} />
                <span>Message on WhatsApp (+91 9263588321)</span>
              </a>
              <a href="mailto:ayazaftab9@gmail.com?subject=Contractual%20or%20Terms%20Inquiry" className="btn btn-secondary">
                <Icon name="mail" size={15} />
                <span>Email ayazaftab9@gmail.com</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <section className="subpage-hero" aria-labelledby="privacy-page-title">
        <AnimatedSection className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb-nav">
              <li><a href="/" className="breadcrumb-link">Home</a></li>
              <li aria-hidden="true">/</li>
              <li className="breadcrumb-current" aria-current="page">Privacy Policy</li>
            </ol>
          </nav>

          <span className="hero-role-kicker">Data Protection • DPDP Act 2023 &amp; GDPR Compliance • Last Updated: November 2026</span>
          <h1 id="privacy-page-title" className="section-title" style={{ marginBottom: '0.65rem' }}>
            Privacy Policy — Digital Personal Data Protection &amp; Practices
          </h1>
          <p className="section-subtitle" style={{ maxWidth: '820px', marginBottom: '1.5rem' }}>
            Ayaz Aftab is committed to protecting the privacy, confidentiality, and security of visitors to this portfolio website and business clients engaging our freelance performance marketing and e-commerce growth services.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <a href="mailto:ayazaftab9@gmail.com?subject=Privacy%20Inquiry" className="btn btn-secondary">
              <Icon name="mail" size={15} />
              <span>Contact Privacy Officer</span>
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              <Icon name="whatsapp" size={16} />
              <span>WhatsApp Inquiries (+91 9263588321)</span>
            </a>
            <a href="/" className="btn btn-ghost">
              <span>Back to Home</span>
            </a>
          </div>
        </AnimatedSection>
      </section>

      <section className="section" aria-labelledby="privacy-content-heading">
        <AnimatedSection className="container">
          <div className="legal-summary-box">
            <div className="legal-summary-badge">
              <Icon name="shield" size={18} />
              <span>Core Privacy Commitments</span>
            </div>
            <ul className="legal-summary-list">
              <li><strong>Zero Sale of Personal Data:</strong> We never sell, rent, monetize, or trade your contact details or business information with any third party.</li>
              <li><strong>Cookieless Site Analytics:</strong> This portfolio uses privacy-first Vercel Web Analytics without setting persistent tracking cookies or harvesting cross-site browsing history.</li>
              <li><strong>Client Data Isolation:</strong> In client consulting mandates, ad account and server-side tracking data (GA4/Meta CAPI) remains 100% siloed within client-owned infrastructure.</li>
              <li><strong>Full User Rights:</strong> You may request access to, correction of, or permanent deletion of your personal inquiry records at any time.</li>
            </ul>
          </div>

          <div className="legal-clauses-grid" style={{ marginTop: '2.5rem' }}>
            <article className="legal-clause-card">
              <span className="legal-clause-num">01</span>
              <h2 className="legal-clause-title">Data Fiduciary Identity &amp; Contact</h2>
              <p className="legal-clause-text">
                For the purposes of India&apos;s Digital Personal Data Protection Act, 2023 (DPDP Act) and international data protection laws (such as GDPR), the Data Fiduciary / Controller responsible for personal data collected through this website is:
              </p>
              <div style={{ marginTop: '0.75rem', padding: '0.85rem 1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '8px', fontSize: '0.88rem' }}>
                <p><strong>Name:</strong> Ayaz Aftab</p>
                <p><strong>Role:</strong> Performance Marketing &amp; E-commerce Growth Lead</p>
                <p><strong>Location:</strong> Kolkata, West Bengal, India (PIN 700001)</p>
                <p><strong>Official Email:</strong> ayazaftab9@gmail.com</p>
                <p><strong>Direct Telephone / WhatsApp:</strong> +91 9263588321</p>
              </div>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">02</span>
              <h2 className="legal-clause-title">Personal Information We Collect</h2>
              <p className="legal-clause-text">
                We collect personal information solely when you voluntarily provide it through direct business communications or website forms:
              </p>
              <ul className="legal-bullet-list">
                <li><strong>Inquiry &amp; Audit Form:</strong> Full Name, Work Email Address, Telephone / WhatsApp Number, Website URL, Monthly Ad Spend Estimate, and Project Description.</li>
                <li><strong>Direct Communications:</strong> Information shared when messaging via WhatsApp, calling via phone, emailing, or connecting via LinkedIn.</li>
                <li><strong>Client Mandates:</strong> Administrative access credentials (e.g. Meta Business Manager Partner access, Google Ads MCC links, read-only analytics access) granted under formal client agreement.</li>
              </ul>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">03</span>
              <h2 className="legal-clause-title">Purpose &amp; Lawful Basis for Processing</h2>
              <p className="legal-clause-text">
                We process your personal information strictly for legitimate commercial and professional purposes based on your explicit consent and pre-contractual requests:
              </p>
              <ul className="legal-bullet-list">
                <li>Evaluating your business goals and delivering a bespoke 24-hour growth audit.</li>
                <li>Communicating strategy roadmaps, campaign proposals, and retainer terms.</li>
                <li>Executing agreed freelance marketing services (ad management, SEO, CRO).</li>
                <li>Complying with statutory accounting, GST invoicing, and tax obligations under Indian law.</li>
              </ul>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">04</span>
              <h2 className="legal-clause-title">Cookieless &amp; Privacy-First Website Analytics</h2>
              <p className="legal-clause-text">
                We believe in web privacy. This portfolio website uses privacy-preserving Vercel Web Analytics. Unlike legacy tracking suites, Vercel Web Analytics does not store persistent cookies on your device, does not collect personal identifiers, does not track you across disparate websites, and anonymizes client IP addresses before aggregation. We collect only aggregated pageview counts, referral origins, and device form factors to ensure rapid site performance.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">05</span>
              <h2 className="legal-clause-title">Client Ad Accounts, GA4 &amp; Meta CAPI Data Safeguards</h2>
              <p className="legal-clause-text">
                In our professional client engagements, we implement Google Analytics 4 (GA4), Google Tag Manager (GTM), and Meta Conversions API (CAPI). We enforce strict data hygiene:
              </p>
              <ul className="legal-bullet-list">
                <li>All server containers and ad accounts reside within the Client&apos;s own Google Cloud Platform or cloud hosting infrastructure.</li>
                <li>Customer purchase signals (SHA-256 hashed emails/phones) are transmitted strictly between the Client&apos;s server and authorized ad APIs (Meta/Google).</li>
                <li>Client customer data is strictly isolated; we never aggregate, share, or cross-pollinate customer lists between different client portfolios.</li>
              </ul>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">06</span>
              <h2 className="legal-clause-title">Data Security, Access Controls &amp; Storage</h2>
              <p className="legal-clause-text">
                We implement robust administrative, organizational, and technical security safeguards to prevent unauthorized access, alteration, disclosure, or destruction of personal data. All web traffic is encrypted via HTTPS (TLS 1.3). Digital communications are maintained via end-to-end encrypted WhatsApp messaging or enterprise Google Workspace with multi-factor authentication (MFA) enabled.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">07</span>
              <h2 className="legal-clause-title">Data Retention Timeline</h2>
              <p className="legal-clause-text">
                Inquiry and audit request data is retained only for as long as necessary to facilitate ongoing communication or proposal evaluation (typically 12 months for inactive inquiries). Client engagement records and commercial invoices are retained for seven (7) years to comply with Indian Goods and Services Tax (GST) and Income Tax statutory archiving mandates.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">08</span>
              <h2 className="legal-clause-title">Your Rights as a Data Principal</h2>
              <p className="legal-clause-text">
                Under the DPDP Act 2023, GDPR, and relevant privacy regulations, you possess the following rights regarding your personal information:
              </p>
              <ul className="legal-bullet-list">
                <li><strong>Right to Access:</strong> Request a summary of the personal data we hold about you.</li>
                <li><strong>Right to Correction &amp; Erasure:</strong> Request the rectification of inaccurate data or the permanent deletion of your contact records.</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent for marketing inquiries at any time.</li>
                <li><strong>Right to Grievance Redressal:</strong> Submit a grievance regarding our data handling practices.</li>
              </ul>
              <p className="legal-clause-text" style={{ marginTop: '0.5rem' }}>
                To exercise any of these rights, simply email `ayazaftab9@gmail.com` with the subject &quot;Data Rights Request&quot;. We verify and respond to all verified requests within seven (7) business days.
              </p>
            </article>

            <article className="legal-clause-card">
              <span className="legal-clause-num">09</span>
              <h2 className="legal-clause-title">Grievance Redressal Officer &amp; Policy Revisions</h2>
              <p className="legal-clause-text">
                In compliance with Rule 3 of the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, and the DPDP Act 2023, the designated Grievance Officer is:
              </p>
              <div style={{ marginTop: '0.75rem', padding: '0.85rem 1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-subtle)', borderRadius: '8px', fontSize: '0.88rem' }}>
                <p><strong>Grievance Officer:</strong> Ayaz Aftab</p>
                <p><strong>Designation:</strong> Founder &amp; Lead Consultant</p>
                <p><strong>Address:</strong> Kolkata, West Bengal, India</p>
                <p><strong>Email:</strong> ayazaftab9@gmail.com</p>
                <p><strong>Response Turnaround:</strong> Within 7 business days</p>
              </div>
              <p className="legal-clause-text" style={{ marginTop: '0.75rem' }}>
                We may periodically update this Privacy Policy to reflect evolving regulatory frameworks or operational enhancements. Updates will be published on this page with a revised &quot;Last Updated&quot; date.
              </p>
            </article>
          </div>

          <div className="legal-footer-cta" style={{ marginTop: '3rem', padding: '2rem', background: 'var(--glass-card-bg)', border: 'var(--glass-card-border)', borderRadius: '12px' }}>
            <h3 style={{ fontSize: '1.15rem', marginBottom: '0.45rem' }}>Questions About How We Protect Your Data?</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
              We are fully transparent about our data handling, cookieless analytics, and client infrastructure boundaries. Reach out anytime.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="mailto:ayazaftab9@gmail.com?subject=Data%20Privacy%20Question" className="btn btn-primary">
                <Icon name="mail" size={15} />
                <span>Email Privacy Officer (ayazaftab9@gmail.com)</span>
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                <Icon name="whatsapp" size={16} />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
};

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

const DedicatedLandingPage = ({ page }: { page: LandingPageData }) => {
  const relatedStudies = projectsData.filter((p) => page.relatedCaseStudyIds.includes(p.id));
  const siblingPages = dedicatedLandingPagesData.filter((l) => l.slug !== page.slug);
  const relatedServices = servicePagesData.filter((s) => page.relatedServiceSlugs.includes(s.slug));

  return (
    <>
      <section className="subpage-hero" aria-labelledby="landing-page-title">
        <AnimatedSection className="container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb-nav">
              <li><a href="/" className="breadcrumb-link">Home</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/#india-freelancer" className="breadcrumb-link">Pan-India Hubs</a></li>
              <li aria-hidden="true">/</li>
              <li className="breadcrumb-current" aria-current="page">{page.breadcrumbLabel}</li>
            </ol>
          </nav>

          <span className="hero-role-kicker">{page.eyebrow}</span>
          <h1 id="landing-page-title" className="section-title" style={{ marginBottom: '0.85rem' }}>
            {page.h1}
          </h1>
          <p className="section-subtitle" style={{ marginBottom: '1.35rem', maxWidth: '820px' }}>
            {page.subtitle}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
            <span className="project-badge" style={{ fontSize: '0.84rem', padding: '0.35rem 0.9rem' }}>
              Verified Benchmark: {page.badge}
            </span>
            <a href="#contact" id={`landing-${page.slug}-audit-cta`} className="btn btn-primary">
              <span>Free 24-Hour Growth Audit</span>
              <Icon name="arrow-right" size={15} />
            </a>
            <a
              href={WHATSAPP_URL}
              id={`landing-${page.slug}-whatsapp-cta`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <Icon name="whatsapp" size={16} />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:+919263588321"
              id={`landing-${page.slug}-phone-cta`}
              className="btn btn-secondary"
            >
              <Icon name="phone" size={15} />
              <span>+91 9263588321</span>
            </a>
          </div>
        </AnimatedSection>
      </section>

      <section className="case-study-page-section">
        <AnimatedSection className="container">
          <div
            className="glass-metrics-grid"
            style={{ maxWidth: '100%', marginBottom: '2.25rem' }}
            aria-label="Key Performance Benchmarks"
          >
            {page.metrics.map((m) => (
              <div key={m.label} className="glass-metric-card">
                <div className="glass-metric-value">{m.value}</div>
                <div className="glass-metric-label">{m.label}</div>
              </div>
            ))}
          </div>

          <div className="modal-grid">
            <div className="modal-main-content">
              <div className="modal-section">
                <h2 className="modal-section-title">{page.deliverablesTitle}</h2>
                <ul className="service-list" style={{ marginTop: '0.85rem' }}>
                  {page.deliverables.map((item, idx) => (
                    <li key={idx} className="service-list-item">
                      <Icon name="check" size={17} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section">
                <h2 className="modal-section-title">{page.workflowTitle}</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginTop: '0.85rem' }}>
                  {page.workflowSteps.map((step, sIdx) => (
                    <div key={step.title} className="industry-cell">
                      <span className="process-step-num">Step 0{sIdx + 1}</span>
                      <h3 className="industry-cell-title">{step.title}</h3>
                      <p className="industry-cell-desc">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h2 className="modal-section-title">{page.localOrScopeTitle}</h2>
                <p>{page.localOrScopeBody}</p>
              </div>

              <div className="modal-section pricing-transparency-box">
                <div className="legal-summary-badge">
                  <Icon name="check-circle" size={15} />
                  <span>Zero Ad Spend Markup Guarantee</span>
                </div>
                <h2 className="modal-section-title" style={{ marginTop: '0.25rem' }}>{page.pricingTitle}</h2>
                <p style={{ margin: 0 }}>{page.pricingSummary}</p>
              </div>

              <div className="modal-section" style={{ marginBottom: 0 }}>
                <h2 className="modal-section-title">4. Frequently Asked Questions</h2>
                <div className="faq-list" style={{ marginTop: '1rem' }}>
                  {page.faqs.map((f, i) => (
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
                <h2 className="modal-section-title">Verified Track Record &amp; ROI</h2>
                <ul className="modal-results-list">
                  {page.proofPoints.map((pt, index) => (
                    <li key={index} className="modal-result-item">
                      <Icon name="check-circle" size={16} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%' }}>
                    <Icon name="whatsapp" size={16} />
                    <span>WhatsApp: +91 9263588321</span>
                  </a>
                  <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                    <span>Request Free 24h Audit</span>
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

      <section className="section-alt" aria-labelledby="landing-related-heading">
        <AnimatedSection className="container">
          <div className="section-header">
            <span className="section-eyebrow">Proven Execution &amp; Related Hubs</span>
            <h2 id="landing-related-heading" className="section-title">Related Case Studies &amp; Growth Hubs</h2>
          </div>

          <div className={`projects-grid ${relatedStudies.length === 3 ? 'projects-grid-3' : ''}`}>
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
            {siblingPages.map((sp) => (
              <article key={sp.slug} className="service-card">
                <div style={{ marginBottom: '0.5rem' }}>
                  <span className="project-badge">{sp.badge}</span>
                </div>
                <h3 className="service-card-title" style={{ fontSize: '1.15rem' }}>
                  <a href={`/${sp.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {sp.navLabel}
                  </a>
                </h3>
                <p className="service-card-description">{sp.subtitle}</p>
                <a href={`/${sp.slug}`} className="btn btn-secondary service-card-btn">
                  <span>Explore {sp.breadcrumbLabel}</span>
                  <Icon name="arrow-right" size={15} />
                </a>
              </article>
            ))}
            {relatedServices.map((rs) => (
              <article key={rs.slug} className="service-card">
                <div style={{ marginBottom: '0.5rem' }}>
                  <span className="project-badge">{rs.keyMetricBadge}</span>
                </div>
                <h3 className="service-card-title" style={{ fontSize: '1.15rem' }}>
                  <a href={`/services/${rs.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                    {rs.shortName}
                  </a>
                </h3>
                <p className="service-card-description">{rs.heroSummary}</p>
                <a href={`/services/${rs.slug}`} className="btn btn-secondary service-card-btn">
                  <span>Explore {rs.shortName}</span>
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

  const matchedLandingPage = dedicatedLandingPagesData.find((l) => `/${l.slug}` === currentPath);

  return (
    <>
      <Header
        onMenuClick={() => setIsMenuOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        currentPath={currentPath}
      />
      <OffCanvasMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        currentPath={currentPath}
      />
      <main id="main-content">
        {currentPath === '/resume' ? (
          <ResumePage />
        ) : currentPath === '/faq' ? (
          <FAQPage />
        ) : currentPath === '/terms' ? (
          <TermsPage />
        ) : currentPath === '/privacy' ? (
          <PrivacyPolicyPage />
        ) : matchedCaseStudy ? (
          <CaseStudyPage project={matchedCaseStudy} />
        ) : matchedService ? (
          <ServiceLandingPage service={matchedService} />
        ) : matchedLandingPage ? (
          <DedicatedLandingPage page={matchedLandingPage} />
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
