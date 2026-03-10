export interface Service {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  heroImage: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'karndean',
    name: 'Karndean Flooring',
    slug: 'karndean-flooring',
    tagline: 'Approved Karndean Design Flooring Installers',
    shortDescription:
      'Approved Karndean installers offering the full range of luxury vinyl tile and plank flooring with realistic wood and stone effects.',
    heroImage: '/images/gallery/karndean-hero.jpg',
    icon: 'Layers',
    features: [
      'Full Karndean range available',
      'Approved installer status',
      'Herringbone, parquet and plank layouts',
      'Wood and stone effect designs',
      'Subfloor preparation included',
    ],
  },
  {
    id: 'amtico',
    name: 'Amtico Flooring',
    slug: 'amtico-flooring',
    tagline: 'Expert Amtico Fitting Across the West Midlands',
    shortDescription:
      'Expert Amtico fitting across the West Midlands. Signature, Form and Spacia ranges available with bespoke laying patterns.',
    heroImage: '/images/gallery/amtico-hero.jpg',
    icon: 'LayoutGrid',
    features: [
      'Signature, Form and Spacia ranges',
      'Bespoke laying patterns',
      'Custom borders and design strips',
      'Commercial and residential fitting',
      'Full colour and material consultation',
    ],
  },
  {
    id: 'lvt',
    name: 'LVT Flooring',
    slug: 'lvt-flooring',
    tagline: 'Premium Luxury Vinyl Tile Installation',
    shortDescription:
      'Luxury vinyl tile installation including Invictus, Brampton Chase and Project Floors. Subfloor preparation and wet room flooring available.',
    heroImage: '/images/gallery/lvt-hero.jpg',
    icon: 'Hammer',
    features: [
      'Invictus, Brampton Chase and Project Floors',
      'Subfloor levelling and preparation',
      'Wet room flooring specialist',
      'Waterproof and scratch-resistant options',
      'Suitable for underfloor heating',
    ],
  },
  {
    id: 'carpets',
    name: 'Carpets & Stair Runners',
    slug: 'carpets-and-stair-runners',
    tagline: 'Quality Carpet Fitting and Bespoke Stair Runners',
    shortDescription:
      'Quality carpet fitting and bespoke stair runners. In-store tape binding and whipping service for a perfect finish.',
    heroImage: '/images/gallery/carpets-hero.jpg',
    icon: 'Scissors',
    features: [
      'Full carpet fitting service',
      'Bespoke stair runner installation',
      'In-store tape binding and whipping',
      'Wide range of styles and materials',
      'Measuring and consultation included',
    ],
  },
  {
    id: 'wet-rooms',
    name: 'Wet Room Flooring',
    slug: 'lvt-flooring',
    tagline: 'Specialist Wet Room LVT Installation',
    shortDescription:
      'Specialist wet room LVT installation with waterproof subfloor preparation. Ideal for bathrooms and en-suites.',
    heroImage: '/images/gallery/wet-room-hero.jpg',
    icon: 'Droplets',
    features: [
      'Waterproof subfloor preparation',
      'Non-slip safety flooring options',
      'Seamless finish for wet areas',
      'Bathroom and en-suite specialist',
      'Compatible with underfloor heating',
    ],
  },
];
