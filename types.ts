export type Language = 'en' | 'ar';

export interface NavItem {
  id: string;
  label: string;
}

export interface Service {
  id: number;
  icon: 'mobile' | 'web' | 'ai' | 'design' | 'devops';
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

export interface Content {
  nav: NavItem[];
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    items: Service[];
  };
  whyUs: {
    title: string;
    items: { title: string; desc: string }[];
  };
  process: {
    title: string;
    steps: ProcessStep[];
  };
  stats: Stat[];
  caseStudies: {
    title: string;
    items: CaseStudy[];
  };
  testimonials: {
    title: string;
    items: Testimonial[];
  };
  contact: {
    title: string;
    subtitle: string;
    info: {
      emailLabel: string;
      phoneLabel: string;
      whatsappLabel: string;
      addressLabel: string;
      address: string;
    };
    form: {
      name: string;
      email: string;
      projectDesc: string;
      // Budget removed
      submit: string;
    };
  };
  footer: {
    rights: string;
    links: string[];
    description: string;
  };
}