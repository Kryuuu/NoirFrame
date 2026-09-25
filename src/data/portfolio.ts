export interface Credit {
  role: string;
  name: string;
}

export type ProjectCategory =
  | 'Graduation'
  | 'Portrait'
  | 'Editorial'
  | 'Commercial'
  | 'Wedding'
  | 'Campaign'
  | 'Product'
  | 'Event'
  | 'Videography';

export type ServiceType =
  | 'Photography'
  | 'Videography'
  | 'Creative Production'
  | 'Brand Visuals'
  | 'Commercial Photography'
  | 'Commercial Videography'
  | 'Event Documentation'
  | 'Visual Storytelling';

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  serviceType: ServiceType;
  year: string;
  location: string;
  client: string;
  coverImage: string;
  description: string;
  story?: string;
  images: string[];
  aspectRatio?: 'landscape' | 'portrait' | 'square';
  featured?: boolean;
  deliverables?: string[];
  credits?: Credit[];
  cameraSpecs?: string;
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'graduation-futri',
    slug: 'futri-risqi-cahyani-editorial',
    title: 'Futri Risqi Cahyani — Architectural Graduation',
    category: 'Graduation',
    serviceType: 'Photography',
    year: '2026',
    location: 'Banjarmasin (ULM Architectural Facade)',
    client: 'Futri Risqi Cahyani, S.Pi',
    coverImage: '/porto/graduation/futri-hero.jpg',
    description: 'A cinematic graduation visual monograph fusing modernist glass architectural facades with chiaroscuro portraiture.',
    story: 'Commissioned to commemorate academic milestone at Universitas Lambung Mangkurat, our direction broke away from generic studio templates. We utilized the angular geometry of modern tinted glass facades, concrete staircases, and dramatic natural shadow gradations to present Futri in a timeless, high-fashion editorial light.',
    images: [
      '/porto/graduation/futri-hero.jpg',
      '/porto/graduation/futri-01.jpg',
      '/porto/graduation/futri-02.jpg',
      '/porto/graduation/futri-03.jpg',
      '/porto/graduation/futri-04.jpg',
      '/porto/graduation/futri-05.jpg',
      '/porto/graduation/futri-06.jpg'
    ],
    aspectRatio: 'landscape',
    featured: true,
    deliverables: ['Editorial Graduation Album', 'Full High-Res Archival Series (24MP)', 'Framed Fine Art Master Prints'],
    credits: [
      { role: 'Principal Photographer', name: 'NOIR FRAME' },
      { role: 'Lighting Director', name: 'Studio Lead' },
      { role: 'Subject', name: 'Futri Risqi Cahyani, S.Pi' }
    ],
    cameraSpecs: 'Sony Alpha 7 Series • FE 85mm f/1.4 GM • FE 35mm f/1.4 GM'
  },
  {
    id: 'graduation-nocturnal-cohort',
    slug: 'nocturnal-cohort-2026',
    title: 'Nocturnal Cohort ’26 — Faculty of Fisheries & Marine',
    category: 'Graduation',
    serviceType: 'Event Documentation',
    year: '2026',
    location: 'Banjarmasin',
    client: 'Annisa, Julia, Rusma, Normelian & Ermalia',
    coverImage: '/porto/graduation/group-hero.jpg',
    description: 'High-impact nocturnal graduation session driven by direct flash aesthetics, asphalt reflections, and collective milestone celebration.',
    story: 'Documenting the graduation of five scholars from the Faculty of Fisheries & Marine Science. Rather than conventional daylight campus shots, this session embraced the mystique of night: direct off-camera flash, hard directional shadows, street-level compositions, and uninhibited camaraderie celebrating shared perseverance.',
    images: [
      '/porto/graduation/group-hero.jpg',
      '/porto/graduation/group-01.jpg',
      '/porto/graduation/group-02.jpg',
      '/porto/graduation/group-03.jpg',
      '/porto/graduation/group-04.jpg'
    ],
    aspectRatio: 'landscape',
    featured: true,
    deliverables: ['Nocturnal Group Master Series', 'Commemorative Archival Gallery', 'Social High-Impact Highlights'],
    credits: [
      { role: 'Strobe Specialist', name: 'NOIR FRAME' },
      { role: 'Colorist', name: 'NOIR Color Lab' },
      { role: 'Cohort', name: 'Fisheries & Marine Class of 2026' }
    ],
    cameraSpecs: 'Sony Alpha 7 Series • Off-Camera Strobe Rig • FE 24-70mm f/2.8 GM'
  },
  {
    id: 'portrait-sri-suci-duo',
    slug: 'sri-and-suci-milestone',
    title: 'Sri & Suci — The Milestone Duo',
    category: 'Portrait',
    serviceType: 'Visual Storytelling',
    year: '2026',
    location: 'Banjarmasin',
    client: 'Sri Nor Fatimah, S.Pi & Suci Rizqi Cahyani, S.Pi',
    coverImage: '/porto/graduation/duo-hero.jpg',
    description: 'Dual milestone monograph traversing golden hour skylines into high-contrast nocturnal architectural scapes.',
    story: 'A dialogue between friendship, parallel academic journeys, and atmospheric light. Starting in open-sky dusk with natural warmth and candid laughter, the monograph culminated on modern architectural steps at night where intense strobe highlights sculpted silhouettes against deep nocturnal blacks.',
    images: [
      '/porto/graduation/duo-hero.jpg',
      '/porto/graduation/duo-01.jpg',
      '/porto/graduation/duo-02.jpg',
      '/porto/graduation/duo-03.jpg'
    ],
    aspectRatio: 'landscape',
    featured: true,
    deliverables: ['Milestone Duo Print Series', 'Color-Graded Full Archival Stills', 'Mini Documentary Gallery'],
    credits: [
      { role: 'Photographer & Art Director', name: 'NOIR FRAME' },
      { role: 'Subjects', name: 'Sri Nor Fatimah & Suci Rizqi Cahyani' }
    ],
    cameraSpecs: 'Sony Alpha 7 Series • FE 50mm f/1.2 GM • FE 85mm f/1.4 GM'
  },
  {
    id: 'portrait-editorial-archive',
    slug: 'editorial-portrait-archive',
    title: 'Editorial Portrait Archive',
    category: 'Portrait',
    serviceType: 'Photography',
    year: '2026',
    location: 'Banjarmasin',
    client: 'Editorial Archive',
    coverImage: '/porto/portrait/portrait-01.jpg',
    description: 'Fine art portraiture investigating human form, facial micro-expressions, and deep chiaroscuro tonal gradations.',
    story: 'Stripping away excess leaves only posture, skin texture, and pure emotional resonance. Lit with focused directional lighting, this continuing archive celebrates the raw elegance of unadorned presence.',
    images: [
      '/porto/portrait/portrait-01.jpg',
      '/porto/portrait/portrait-02.jpg',
      '/porto/portrait/portrait-03.jpg',
      '/porto/portrait/portrait-04.jpg',
      '/porto/portrait/portrait-05.jpg',
      '/porto/portrait/portrait-06.jpg'
    ],
    aspectRatio: 'portrait',
    featured: false,
    deliverables: ['Fine Art Print Edition', 'High-Res Exhibition Files'],
    credits: [
      { role: 'Principal Artist', name: 'NOIR FRAME' },
      { role: 'Lighting Specialist', name: 'Studio Associate' }
    ],
    cameraSpecs: 'Sony Alpha 7 Series • FE 85mm f/1.4 GM'
  },
  {
    id: 'commercial-monolith',
    slug: 'monolith-timepieces',
    title: 'Monolith Heritage Chronograph',
    category: 'Commercial',
    serviceType: 'Brand Visuals',
    year: '2026',
    location: 'Jakarta',
    client: 'Monolith Horology Co.',
    coverImage: '/porto/commercial/commercial-01.jpg',
    description: 'High-precision cinematography and macro documentation celebrating Swiss horological engineering and dark architectural geometry.',
    story: 'Commissioned to unveil Monolith’s titanium flagship timepiece, our objective was to portray mechanical mastery through extreme chiaroscuro illumination, slow-speed motion control, and raw metallic texturing. Every frame was calibrated to honor the precision of seconds.',
    images: [
      '/porto/commercial/commercial-01.jpg',
      '/porto/product/product-02.jpg',
      '/porto/commercial/commercial-03.jpg'
    ],
    aspectRatio: 'landscape',
    featured: false,
    deliverables: ['Commercial Film (60s)', 'Editorial Still Series (12 Frames)', 'Social Media Cutdowns (9:16)'],
    credits: [
      { role: 'Director of Photography', name: 'NOIR FRAME Studio' },
      { role: 'Lighting Director', name: 'Studio Lead' },
      { role: 'Post Production & Grade', name: 'NOIR Color Lab' }
    ],
    cameraSpecs: 'RED V-RAPTOR 8K • Master Prime 50mm • Probe Macro'
  },
  {
    id: 'wedding-eternal-vow',
    slug: 'an-eternal-vow',
    title: 'An Eternal Vow',
    category: 'Wedding',
    serviceType: 'Photography',
    year: '2026',
    location: 'Banjarmasin',
    client: 'Arya & Bianca',
    coverImage: '/porto/wedding/wedding-01.jpg',
    description: 'Cinematic and intimate wedding documentation capturing atmospheric emotional nuances, sacred vows, and dusk reception memories.',
    story: 'Set amidst an open-air riverfront pavilion in Banjarmasin, this visual narrative avoided forced posing in favor of fly-on-the-wall photojournalism. We embraced natural dusk gradients and candlelight warmth to construct an honest, timeless family heirloom.',
    images: [
      '/porto/wedding/wedding-01.jpg',
      '/porto/wedding/wedding-02.jpg',
      '/porto/wedding/wedding-03.jpg'
    ],
    aspectRatio: 'landscape',
    featured: false,
    deliverables: ['Editorial Leather Album (80p)', 'Cinematic Highlight Film (4K)', 'Raw Curated Gallery (450 Frames)'],
    credits: [
      { role: 'Lead Photographer', name: 'NOIR FRAME' },
      { role: 'Second Unit Lead', name: 'Creative Partner' },
      { role: 'Colorist', name: 'NOIR Post' }
    ],
    cameraSpecs: 'Sony A1 & Leica M11 • 35mm f/1.4 GM • 85mm f/1.2'
  },
  {
    id: 'campaign-urban-nomad',
    slug: 'urban-nomad-ss26',
    title: 'Urban Nomad Nocturnal Study',
    category: 'Campaign',
    serviceType: 'Creative Production',
    year: '2026',
    location: 'Banjarmasin / Jakarta',
    client: 'Nomad Division Studio',
    coverImage: '/porto/campaign/campaign-01.jpg',
    description: 'A dark nocturnal study documenting modern architectural silhouettes, pavement reflections, and cinematic flash portraits.',
    story: 'Constructed as an ode to metropolitan speed and nocturnal solitude, this series captures subjects in low-light architectural environments. We integrated fast shutter freezes, directional strobe flashes, and low-angle perspective framing.',
    images: [
      '/porto/campaign/campaign-01.jpg',
      '/porto/campaign/campaign-02.jpg',
      '/porto/campaign/campaign-03.jpg'
    ],
    aspectRatio: 'landscape',
    featured: false,
    deliverables: ['Global Lookbook Stills', 'Campaign Teaser (30s)', 'Digital Billboard Deliverables'],
    credits: [
      { role: 'Creative Direction', name: 'NOIR FRAME Studio' },
      { role: 'Stylist & Producer', name: 'External Partner' },
      { role: 'Cinematography', name: 'NOIR Video Crew' }
    ],
    cameraSpecs: 'Sony Alpha 7 Series • FE 24-70mm f/2.8 GM • FE 85mm f/1.4 GM'
  },
  {
    id: 'product-obsidian-noir',
    slug: 'obsidian-noir-fragrance',
    title: 'Obsidian Noir Fragrance',
    category: 'Product',
    serviceType: 'Commercial Photography',
    year: '2026',
    location: 'Banjarmasin / Jakarta',
    client: 'Maison D’Ombre Parfums',
    coverImage: '/porto/product/product-01.jpg',
    description: 'Still-life commercial study exploring smoked glass refractions, suspended liquid droplets, and mineral black basalt.',
    story: 'Designing visuals for scent requires evoking invisible sensory weight. We utilized high-speed flash duration to suspend vapor mist around the flacon, flanked by volcanic obsidian stones and sharp horizontal light slits.',
    images: [
      '/porto/product/product-01.jpg',
      '/porto/product/product-03.jpg',
      '/porto/commercial/commercial-03.jpg'
    ],
    aspectRatio: 'portrait',
    featured: false,
    deliverables: ['E-Commerce Hero Assets', 'Magazine Print Ad (A4 Spread)', 'Social Reel Animations'],
    credits: [
      { role: 'Tabletop Director', name: 'NOIR FRAME' },
      { role: 'Set Stylist', name: 'Studio Prop Team' }
    ],
    cameraSpecs: 'Fujifilm GFX 100 II • GF 120mm f/4 Macro R LM OIS WR'
  }
];

export function getAllProjects(): Project[] {
  return PORTFOLIO_PROJECTS;
}

export function getFeaturedProjects(): Project[] {
  return PORTFOLIO_PROJECTS.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PORTFOLIO_PROJECTS.find((p) => p.slug === slug || p.id === slug);
}

export function getProjectsByCategory(category: string): Project[] {
  if (!category || category.toLowerCase() === 'all') {
    return PORTFOLIO_PROJECTS;
  }
  return PORTFOLIO_PROJECTS.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase() || p.serviceType.toLowerCase().includes(category.toLowerCase())
  );
}

export function getNextProject(currentSlug: string): Project {
  const index = PORTFOLIO_PROJECTS.findIndex((p) => p.slug === currentSlug || p.id === currentSlug);
  if (index === -1 || index === PORTFOLIO_PROJECTS.length - 1) {
    return PORTFOLIO_PROJECTS[0];
  }
  return PORTFOLIO_PROJECTS[index + 1];
}
