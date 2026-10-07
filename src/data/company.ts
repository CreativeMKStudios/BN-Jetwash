export const siteUrl = 'https://bnjetwashes.co.uk';

export const company = {
  name: 'BN JetWashes',
  legalName: 'BN JetWashes',
  tagline: 'Bring your outdoor space back to life!',
  hook: 'Dirty? Stained? Slippery?',
  description:
    'Local jet washing for driveways, patios, decking and more across Daventry and the surrounding areas. We do the hard work so you can enjoy the results.',
  shortDescription:
    'Professional jet washing in Daventry and nearby towns. Driveways, patios, decking, paths, walls and more.',
  phones: [
    { display: '07305 958661', tel: '+447305958661' },
    { display: '07423 274109', tel: '+447423274109' },
  ],
  email: 'brownebailey44@gmail.com',
  areaServedPrimary: 'Daventry',
  areaServedLabel: 'Daventry & surrounding areas',
  promo: '10% OFF your first clean!',
  promoNote: 'Mention this leaflet or website to get 10% off your first clean.',
  address: {
    addressLocality: 'Daventry',
    addressRegion: 'Northamptonshire',
    addressCountry: 'GB',
  },
  geo: {
    // Town centre of Daventry – service-area business, no public shopfront
    latitude: 52.2573,
    longitude: -1.1637,
  },
  sameAs: [] as string[],
  openingHours: ['Mo-Sa 08:00-18:00'],
  priceRange: '££',
  foundingNote:
    'BN JetWashes is a local jet washing team based in Daventry, Northamptonshire.',
} as const;

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: 'driveways-block-paving',
    title: 'Driveways & block paving',
    short: 'Lift moss, algae and dirt so your driveway looks fresh again.',
    body: 'Block paving and concrete driveways collect moss, weeds and dark stains. We jet wash them carefully so the colour comes back and the surface is safer underfoot.',
    keywords: ['driveway cleaning Daventry', 'block paving jet wash'],
  },
  {
    slug: 'patios-paving',
    title: 'Patios & paving',
    short: 'Clear green slime and black spots from patio slabs.',
    body: 'A clean patio makes outdoor seating feel inviting again. We remove algae, lichen and dirt from stone, concrete and paving slabs without leaving a mess behind.',
    keywords: ['patio cleaning Daventry', 'paving jet wash'],
  },
  {
    slug: 'paths-walkways',
    title: 'Paths & walkways',
    short: 'Make paths safer and brighter with a deep clean.',
    body: 'Slippery paths are a hazard in wet weather. We clean garden paths, side alleys and walkways so they look better and feel safer to use.',
    keywords: ['path cleaning Daventry', 'walkway jet wash'],
  },
  {
    slug: 'walls-fences',
    title: 'Walls & fences',
    short: 'Wash down brick, render and fencing that has gone green.',
    body: 'North-facing walls and fences often grow moss and algae. We jet wash them to brighten the look of your home or garden boundary.',
    keywords: ['wall cleaning Daventry', 'fence jet wash'],
  },
  {
    slug: 'garden-areas',
    title: 'Garden areas',
    short: 'Tidy outdoor spaces so the whole garden feels cared for.',
    body: 'From seating corners to courtyard slabs, we clean the hard surfaces around your garden so the whole space looks looked-after.',
    keywords: ['garden jet wash Daventry'],
  },
  {
    slug: 'decking',
    title: 'Decking',
    short: 'Restore tired timber decking and cut the slip risk.',
    body: 'Wooden decking picks up algae fast. We clean it thoroughly so the boards look warmer again and are less slippery when wet.',
    keywords: ['decking cleaning Daventry', 'deck jet wash'],
  },
  {
    slug: 'moss-algae-dirt-removal',
    title: 'Moss, algae & dirt removal',
    short: 'Target the green growth and grime that make surfaces look old.',
    body: 'Moss and algae make outdoor surfaces look neglected and become slippery. We remove the build-up so hard surfaces last longer and look cleaner.',
    keywords: ['moss removal Daventry', 'algae cleaning'],
  },
  {
    slug: 'homes-businesses',
    title: 'Homes & businesses',
    short: 'Domestic and small commercial jet washing, quoted up front.',
    body: 'We clean for homeowners and local businesses. Tell us what needs doing and we will give a clear price before we start.',
    keywords: ['commercial jet wash Daventry', 'domestic pressure washing'],
  },
];

export const whyChooseUs = [
  'Friendly & reliable',
  'Great prices',
  'Quality results',
  'Local, careful service',
  'Free quotes',
] as const;

export type Area = {
  slug: string;
  name: string;
  blurb: string;
};

export const areas: Area[] = [
  {
    slug: 'daventry',
    name: 'Daventry',
    blurb:
      'Based in Daventry, we clean driveways, patios and decking across town — including Ashby Fields, Middlemore, Monksmoor and the town centre.',
  },
  {
    slug: 'long-buckby',
    name: 'Long Buckby',
    blurb:
      'Jet washing for homes in Long Buckby and nearby villages. Driveways, paths and patios cleaned with care.',
  },
  {
    slug: 'weedon-bec',
    name: 'Weedon Bec',
    blurb:
      'Local jet wash cover for Weedon Bec. Free quotes for driveway, patio and decking cleans.',
  },
  {
    slug: 'braunston',
    name: 'Braunston',
    blurb:
      'Serving Braunston with professional outdoor cleaning. We remove moss, algae and dirt from hard surfaces.',
  },
  {
    slug: 'badby',
    name: 'Badby',
    blurb:
      'Jet washing in Badby and the surrounding countryside homes. Clear quotes and tidy work.',
  },
  {
    slug: 'flore',
    name: 'Flore',
    blurb:
      'Driveway and patio cleaning for Flore residents. Call or text for a free quote.',
  },
  {
    slug: 'norton',
    name: 'Norton',
    blurb:
      'BN JetWashes covers Norton near Daventry for paths, paving and garden hard surfaces.',
  },
  {
    slug: 'newnham',
    name: 'Newnham',
    blurb:
      'Jet wash services for Newnham homes. We bring outdoor spaces back to life.',
  },
  {
    slug: 'byfield',
    name: 'Byfield',
    blurb:
      'Patio, driveway and decking cleans in Byfield. Friendly local service and free quotes.',
  },
  {
    slug: 'woodford-halse',
    name: 'Woodford Halse',
    blurb:
      'Outdoor cleaning across Woodford Halse. Moss, algae and dirt removed from hard surfaces.',
  },
  {
    slug: 'kilsby',
    name: 'Kilsby',
    blurb:
      'Jet washing for Kilsby driveways, paths and patios. Mention the website for 10% off your first clean.',
  },
  {
    slug: 'crick',
    name: 'Crick',
    blurb:
      'We cover Crick and nearby homes for pressure washing and outdoor surface cleaning.',
  },
  {
    slug: 'barby',
    name: 'Barby',
    blurb:
      'Local jet wash cover in Barby. Free quotes for driveways, paving and decking.',
  },
  {
    slug: 'everdon',
    name: 'Everdon',
    blurb:
      'Careful jet washing for Everdon properties. We leave surfaces clean and safe.',
  },
  {
    slug: 'rugby',
    name: 'Rugby',
    blurb:
      'Also covering parts of Rugby close to Daventry. Ask us if we reach your street — most nearby areas yes.',
  },
];

export type Project = {
  slug: string;
  title: string;
  location: string;
  summary: string;
  image: string;
  imageAlt: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: 'block-paving-driveway',
    title: 'Block paving driveway refresh',
    location: 'Daventry area',
    summary:
      'Heavy moss and algae stripped from block paving. Colour and grip restored across the full drive.',
    image: '/images/project-driveway.jpg',
    imageAlt:
      'Before and after of a block paving driveway cleaned by jet washing',
    tags: ['Driveway', 'Block paving'],
  },
  {
    slug: 'patio-deep-clean',
    title: 'Patio deep clean',
    location: 'Daventry & surrounding areas',
    summary:
      'Green growth and black spots cleared from patio slabs so the seating area looked bright again.',
    image: '/images/project-patio.jpg',
    imageAlt: 'Before and after of a patio cleaned with a pressure washer',
    tags: ['Patio', 'Paving'],
  },
  {
    slug: 'decking-restore',
    title: 'Decking restore',
    location: 'Daventry area',
    summary:
      'Slippery algae removed from timber decking. Boards left clean and ready to enjoy again.',
    image: '/images/project-decking.jpg',
    imageAlt: 'Before and after of wooden decking after jet washing',
    tags: ['Decking'],
  },
];

/**
 * No public Google Business Profile reviews were found for BN JetWashes at build time.
 * Keep this list empty until real customer reviews (with permission) can be added.
 * Do not invent testimonials.
 */
export const reviews: {
  author: string;
  rating: number;
  text: string;
  source: string;
  datePublished?: string;
}[] = [];
