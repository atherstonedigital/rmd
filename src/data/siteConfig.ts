export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  address: {
    street: string;
    locality: string;
    town: string;
    postcode: string;
    region: string;
    country: string;
  };
  phone: {
    showroom: string;
    mobile: string;
  };
  email: string;
  openingHours: {
    label: string;
    hours: string;
  }[];
  serviceArea: string[];
  social: {
    facebook: string;
    instagram: string;
    google: string;
  };
  founders: string[];
  yearsExperience: string;
  guarantee: string;
}

export const siteConfig: SiteConfig = {
  name: 'RMD Flooring',
  legalName: 'RMD Flooring Ltd',
  tagline: 'Bespoke Luxury Flooring, West Midlands',
  description:
    'Premium luxury flooring installation across the West Midlands. Approved Karndean, Amtico and LVT installers with 20+ years experience. Based in Tamworth.',
  url: 'https://rmdflooring.co.uk',
  address: {
    street: '37 Shirrall Drive',
    locality: 'Drayton Bassett',
    town: 'Tamworth',
    postcode: 'B78 3EQ',
    region: 'West Midlands',
    country: 'GB',
  },
  phone: {
    showroom: '01827 936233',
    mobile: '07731 304083',
  },
  email: 'info@rmdflooring.co.uk',
  openingHours: [
    { label: 'Monday–Friday', hours: '10am–4pm (by appointment)' },
    { label: 'Saturday', hours: 'Open to public' },
    { label: 'Sunday', hours: 'Closed' },
  ],
  serviceArea: [
    'Tamworth',
    'Birmingham',
    'Sutton Coldfield',
    'Lichfield',
    'Solihull',
    'Coventry',
    'West Midlands',
  ],
  social: {
    facebook: '',
    instagram: '',
    google: '',
  },
  founders: ['Ryan', 'Kerry'],
  yearsExperience: '20+',
  guarantee: '2-Year Fitting Guarantee',
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Karndean', href: '/karndean-flooring/' },
  { label: 'Amtico', href: '/amtico-flooring/' },
  { label: 'LVT Flooring', href: '/lvt-flooring/' },
  { label: 'Carpets & Runners', href: '/carpets-and-stair-runners/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'Testimonials', href: '/testimonials/' },
  { label: 'Contact', href: '/contact/' },
] as const;
