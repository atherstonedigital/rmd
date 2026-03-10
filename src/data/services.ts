export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  heroImage: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 'karndean',
    name: 'Karndean Flooring',
    slug: 'karndean-flooring',
    shortDescription:
      'Approved Karndean installers offering the full range of luxury vinyl tile and plank flooring with realistic wood and stone effects.',
    heroImage: '/images/gallery/karndean-hero.jpg',
    icon: 'Layers',
  },
  {
    id: 'amtico',
    name: 'Amtico Flooring',
    slug: 'amtico-flooring',
    shortDescription:
      'Expert Amtico fitting across the West Midlands. Signature, Form and Spacia ranges available with bespoke laying patterns.',
    heroImage: '/images/gallery/amtico-hero.jpg',
    icon: 'LayoutGrid',
  },
  {
    id: 'lvt',
    name: 'LVT Flooring',
    slug: 'lvt-flooring',
    shortDescription:
      'Luxury vinyl tile installation including Invictus, Brampton Chase and Project Floors. Subfloor preparation and wet room flooring available.',
    heroImage: '/images/gallery/lvt-hero.jpg',
    icon: 'Hammer',
  },
  {
    id: 'carpets',
    name: 'Carpets & Stair Runners',
    slug: 'carpets-and-stair-runners',
    shortDescription:
      'Quality carpet fitting and bespoke stair runners. In-store tape binding and whipping service for a perfect finish.',
    heroImage: '/images/gallery/carpets-hero.jpg',
    icon: 'Scissors',
  },
  {
    id: 'wet-rooms',
    name: 'Wet Room Flooring',
    slug: 'lvt-flooring',
    shortDescription:
      'Specialist wet room LVT installation with waterproof subfloor preparation. Ideal for bathrooms and en-suites.',
    heroImage: '/images/gallery/wet-room-hero.jpg',
    icon: 'Droplets',
  },
];
