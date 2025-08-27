import { Project, Testimonial, Service } from '../types/types';

export const projectsData: Project[] = [
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

export const testimonialsData: Testimonial[] = [
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

export const servicesData: Service[] = [
  {
    title: 'Full-Time Roles',
    description: 'Seeking a permanent position as a Digital Marketing Manager or eCommerce Strategist. I integrate seamlessly into teams to drive long-term growth, manage diverse digital marketing channels, and own the entire marketing campaign lifecycle from go-to-market strategy to execution and reporting for your target audience.',
    items: ['Go-to-Market Strategy', 'eCommerce Management', 'Team Leadership & Collaboration', 'Data-driven Roadmapping'],
    cta: 'View My Resume',
    href: 'resume.pdf',
    icon: 'download',
    download: true,
  },
  {
    title: 'Freelance Projects',
    description: 'Available for project-based work, I offer expert management of your marketing campaign across various digital marketing channels. Whether you need an expert to run a Google Ads campaign, a local SEO audit, or a full-funnel e-commerce strategy, I can help. See my detailed services below.',
    items: ['PPC Campaign Setup & Management', 'Local & Technical SEO Audits', 'Conversion Rate Optimization (CRO)', 'Full-Funnel eCommerce Growth'],
    cta: 'Discuss a Project',
    href: '#contact',
    icon: 'arrow-right'
  },
  {
    title: 'Consulting & Retainers',
    description: 'Offering strategic guidance to help you navigate the digital landscape. I help businesses refine their marketing strategies and achieve sustainable growth through ongoing collaboration, performance analysis, and targeting the right potential customers.',
    items: ['Monthly Growth Strategy Sessions', 'Performance Analysis & Reporting', 'Ad Spend Optimization', 'Team Training & Upskilling'],
    cta: 'Book an Introductory Call',
    href: '#contact',
    icon: 'arrow-right'
  }
];
