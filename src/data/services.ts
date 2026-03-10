export interface Service {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
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
    fullDescription:
      'As approved Karndean Design Flooring installers, RMD Flooring brings over 20 years of specialist fitting experience to every project. Karndean luxury vinyl flooring faithfully replicates the beauty of natural wood and stone, with the added benefits of being waterproof, warm underfoot and easy to maintain. We fit the full Karndean range — from Art Select and Da Vinci to Van Gogh and Knight Tile — in herringbone, parquet, plank and custom laying patterns. Every installation includes professional subfloor preparation and levelling to ensure a flawless, long-lasting finish across homes in Tamworth, Birmingham, Sutton Coldfield and the wider West Midlands.',
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
    fullDescription:
      'RMD Flooring are experienced Amtico installers, fitting the Signature, Form and Spacia collections across the West Midlands. Amtico luxury vinyl flooring is renowned for its design versatility — choose from hundreds of wood, stone and abstract finishes with custom borders, design strips and laying patterns to create a floor that is uniquely yours. Our expert fitting team ensures precision cutting and seamless joins on every project, whether it is a contemporary open-plan kitchen or a period hallway. We handle full subfloor preparation and offer a 2-year fitting guarantee on all Amtico installations.',
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
    fullDescription:
      'Luxury vinyl tile is one of the fastest-growing flooring choices for homeowners across the West Midlands, and for good reason. LVT combines stunning aesthetics with practical performance — waterproof, scratch-resistant, warm underfoot and compatible with underfloor heating. At RMD Flooring we install premium LVT brands including Invictus, Brampton Chase and Project Floors alongside Karndean and Amtico. Every installation begins with thorough subfloor assessment and preparation, including levelling compounds where needed, to ensure your new floor performs perfectly for years to come. We also specialise in wet room LVT for bathrooms and en-suites.',
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
    fullDescription:
      'Alongside our luxury vinyl flooring services, RMD Flooring offers professional carpet fitting and bespoke stair runner installation. Visit our Tamworth showroom to browse a wide selection of carpet styles, textures and colours from leading manufacturers. Our stair runners add character and protection to any staircase — choose from traditional, contemporary and geometric designs. We also offer an in-store tape binding and whipping service, giving your carpet or runner a beautifully finished edge. Whether you need wall-to-wall carpet in a bedroom or a statement runner for your hallway stairs, our fitting team delivers a neat, professional result every time.',
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
    fullDescription:
      'Wet rooms require specialist flooring knowledge to ensure a waterproof, safe and long-lasting finish. RMD Flooring provides expert wet room LVT installation, including full waterproof membrane preparation and non-slip safety flooring options. Luxury vinyl is the ideal choice for wet rooms — it is fully waterproof, easy to clean, warm underfoot and available in a wide range of contemporary designs. Our wet room installations are popular across bathrooms, en-suites and utility rooms in homes throughout Tamworth, Birmingham and the West Midlands. Every project includes a 2-year fitting guarantee for complete peace of mind.',
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
