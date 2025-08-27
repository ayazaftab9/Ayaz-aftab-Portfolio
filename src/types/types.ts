export interface Project {
  id: number;
  client: string;
  title: string;
  imageUrl: string;
  keyResult: string;
  challenge: string;
  role: string;
  strategy: string;
  execution: string;
  results: string[];
  testimonial: string;
  visuals: string[];
  liveLink: string;
}

export interface Testimonial {
  projectId: number;
  logoUrl: string;
  quote: string;
  author: string;
  title: string;
}

export interface Service {
    title: string;
    description: string;
    items: string[];
    cta: string;
    href: string;
    icon: string;
    download?: boolean;
}
