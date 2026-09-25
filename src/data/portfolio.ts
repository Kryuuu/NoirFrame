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
    title: 'Futri Risqi Cahyani — Wisuda Arsitektural',
    category: 'Graduation',
    serviceType: 'Photography',
    year: '2026',
    location: 'Banjarmasin (Fasad Arsitektur ULM)',
    client: 'Futri Risqi Cahyani, S.Pi',
    coverImage: '/porto/graduation/futri-hero.jpg',
    description: 'Monograf visual wisuda sinematik yang memadukan fasad arsitektur kaca modern dengan portraiture chiaroscuro.',
    story: 'Dibuat khusus untuk memperingati pencapaian akademis di Universitas Lambung Mangkurat, arahan visual kami keluar dari pakem studio konvensional. Kami memanfaatkan geometri fasad kaca modern, tangga beton minimalis, dan gradasi bayangan alami yang dramatis untuk menampilkan Futri dalam nuansa editorial berkelas abadi.',
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
    deliverables: ['Album Wisuda Editorial', 'Koleksi Arsip Resolusi Penuh (24MP)', 'Cetak Fine Art Master Berbingkai'],
    credits: [
      { role: 'Fotografer Utama', name: 'NOIR FRAME' },
      { role: 'Pengarah Tata Cahaya', name: 'Studio Lead' },
      { role: 'Subjek', name: 'Futri Risqi Cahyani, S.Pi' }
    ],
    cameraSpecs: 'Sony Alpha 7 Series • FE 85mm f/1.4 GM • FE 35mm f/1.4 GM'
  },
  {
    id: 'graduation-nocturnal-cohort',
    slug: 'nocturnal-cohort-2026',
    title: 'Nocturnal Cohort ’26 — Fakultas Perikanan & Kelautan',
    category: 'Graduation',
    serviceType: 'Event Documentation',
    year: '2026',
    location: 'Banjarmasin',
    client: 'Annisa, Julia, Rusma, Normelian & Ermalia',
    coverImage: '/porto/graduation/group-hero.jpg',
    description: 'Sesi wisuda nokturnal penuh energi yang dipadukan dengan estetika direct flash, refleksi aspal, dan selebrasi kebersamaan.',
    story: 'Mendokumentasikan kelulusan lima wisudawati dari Fakultas Perikanan dan Kelautan. Alih-alih foto siang hari kampus yang standar, sesi ini mengeksplorasi estetika malam: direct flash eksternal, bayangan terarah yang tegas, komposisi jalanan, dan kehangatan persahabatan yang merayakan perjuangan bersama.',
    images: [
      '/porto/graduation/group-hero.jpg',
      '/porto/graduation/group-01.jpg',
      '/porto/graduation/group-02.jpg',
      '/porto/graduation/group-03.jpg',
      '/porto/graduation/group-04.jpg'
    ],
    aspectRatio: 'landscape',
    featured: true,
    deliverables: ['Seri Master Grup Nokturnal', 'Galeri Arsip Dokumentasi', 'Foto Sorotan Media Sosial Resolusi Tinggi'],
    credits: [
      { role: 'Spesialis Pencahayaan', name: 'NOIR FRAME' },
      { role: 'Colorist', name: 'NOIR Color Lab' },
      { role: 'Kelompok Wisuda', name: 'Fakultas Perikanan & Kelautan 2026' }
    ],
    cameraSpecs: 'Sony Alpha 7 Series • Off-Camera Strobe Rig • FE 24-70mm f/2.8 GM'
  },
  {
    id: 'portrait-sri-suci-duo',
    slug: 'sri-and-suci-milestone',
    title: 'Sri & Suci — Dua Sahabat Wisuda',
    category: 'Portrait',
    serviceType: 'Visual Storytelling',
    year: '2026',
    location: 'Banjarmasin',
    client: 'Sri Nor Fatimah, S.Pi & Suci Rizqi Cahyani, S.Pi',
    coverImage: '/porto/graduation/duo-hero.jpg',
    description: 'Monograf dua sahabat yang melintasi hangatnya langit senja ke lanskap arsitektur malam berkontras tinggi.',
    story: 'Dialog visual antara persahabatan, perjalanan akademis bersama, dan permainan cahaya atmosferik. Dimulai dari senja langit terbuka dengan kehangatan tawa natural, sesi berlanjut ke tangga arsitektur modern saat malam tiba di mana sorotan lampu strobe memahat siluet tajam berlatar kegelapan elegan.',
    images: [
      '/porto/graduation/duo-hero.jpg',
      '/porto/graduation/duo-01.jpg',
      '/porto/graduation/duo-02.jpg',
      '/porto/graduation/duo-03.jpg'
    ],
    aspectRatio: 'landscape',
    featured: true,
    deliverables: ['Seri Cetak Dua Sahabat', 'File Lengkap Color Graded', 'Galeri Mini Dokumenter'],
    credits: [
      { role: 'Fotografer & Pengarah Artistik', name: 'NOIR FRAME' },
      { role: 'Subjek', name: 'Sri Nor Fatimah & Suci Rizqi Cahyani' }
    ],
    cameraSpecs: 'Sony Alpha 7 Series • FE 50mm f/1.2 GM • FE 85mm f/1.4 GM'
  },
  {
    id: 'portrait-editorial-archive',
    slug: 'editorial-portrait-archive',
    title: 'Arsip Portrait Editorial',
    category: 'Portrait',
    serviceType: 'Photography',
    year: '2026',
    location: 'Banjarmasin',
    client: 'Editorial Archive',
    coverImage: '/porto/portrait/portrait-01.jpg',
    description: 'Karya seni fotografi portrait yang mengeksplorasi gestur manusia, mikroekspresi wajah, dan gradasi chiaroscuro yang mendalam.',
    story: 'Menghilangkan elemen yang tidak perlu menyisakan postur tubuh, tekstur kulit, dan getaran emosi yang murni. Disinari dengan pencahayaan terarah yang fokus, arsip berkelanjutan ini merayakan keanggunan kehadiran subjek yang jujur.',
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
    deliverables: ['Edisi Cetak Fine Art', 'File Master Pameran Resolusi Penuh'],
    credits: [
      { role: 'Fotografer Utama', name: 'NOIR FRAME' },
      { role: 'Spesialis Pencahayaan', name: 'Studio Associate' }
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
    description: 'Sinematografi presisi tinggi dan dokumentasi makro yang merayakan teknik arloji mekanik serta geometri arsitektur gelap.',
    story: 'Dibuat untuk peluncuran arloji titanium flagship Monolith, tujuan kami adalah menggambarkan keahlian mekanis melalui pencahayaan chiaroscuro ekstrem, gerakan kamera halus, dan tekstur logam yang tegas. Setiap frame dikalibrasi untuk menghargai presisi detik demi detik.',
    images: [
      '/porto/commercial/commercial-01.jpg',
      '/porto/product/product-02.jpg',
      '/porto/commercial/commercial-03.jpg'
    ],
    aspectRatio: 'landscape',
    featured: false,
    deliverables: ['Film Komersial (60 Detik)', 'Koleksi Foto Editorial (12 Frame)', 'Potongan Media Sosial (9:16)'],
    credits: [
      { role: 'Director of Photography', name: 'NOIR FRAME Studio' },
      { role: 'Pengarah Tata Cahaya', name: 'Studio Lead' },
      { role: 'Pascaproduksi & Color Grading', name: 'NOIR Color Lab' }
    ],
    cameraSpecs: 'RED V-RAPTOR 8K • Master Prime 50mm • Probe Macro'
  },
  {
    id: 'wedding-eternal-vow',
    slug: 'an-eternal-vow',
    title: 'Janji Suci Abadi',
    category: 'Wedding',
    serviceType: 'Photography',
    year: '2026',
    location: 'Banjarmasin',
    client: 'Arya & Bianca',
    coverImage: '/porto/wedding/wedding-01.jpg',
    description: 'Dokumentasi pernikahan intim dan sinematik yang menangkap nuansa emosi, janji suci sakral, dan kenangan resepsi senja.',
    story: 'Berlatar di pavilion tepi sungai Banjarmasin, narasi visual ini menghindari pose yang kaku dan mengutamakan pendekatan fotojurnalistik dokumenter. Kami memanfaatkan gradasi senja alami dan hangatnya nyala lilin untuk membangun warisan kenangan keluarga yang abadi.',
    images: [
      '/porto/wedding/wedding-01.jpg',
      '/porto/wedding/wedding-02.jpg',
      '/porto/wedding/wedding-03.jpg'
    ],
    aspectRatio: 'landscape',
    featured: false,
    deliverables: ['Album Kulit Editorial (80 Halaman)', 'Video Highlight Sinematik (4K)', 'Galeri Lengkap Terkurasi (450 Foto)'],
    credits: [
      { role: 'Fotografer Utama', name: 'NOIR FRAME' },
      { role: 'Fotografer Unit Kedua', name: 'Mitra Kreatif' },
      { role: 'Colorist', name: 'NOIR Post' }
    ],
    cameraSpecs: 'Sony A1 & Leica M11 • 35mm f/1.4 GM • 85mm f/1.2'
  },
  {
    id: 'campaign-urban-nomad',
    slug: 'urban-nomad-ss26',
    title: 'Studi Nokturnal Urban Nomad',
    category: 'Campaign',
    serviceType: 'Creative Production',
    year: '2026',
    location: 'Banjarmasin / Jakarta',
    client: 'Nomad Division Studio',
    coverImage: '/porto/campaign/campaign-01.jpg',
    description: 'Eksplorasi nokturnal yang mendokumentasikan siluet arsitektur modern, pantulan aspal basah, dan portrait flash sinematik.',
    story: 'Dirancang sebagai penghormatan terhadap denyut kota dan kesunyian malam, rangkaian ini menangkap subjek di lingkungan arsitektur redup. Kami memadukan kecepatan rana tinggi, lampu kilat strobe terarah, dan sudut pengambilan gambar rendah.',
    images: [
      '/porto/campaign/campaign-01.jpg',
      '/porto/campaign/campaign-02.jpg',
      '/porto/campaign/campaign-03.jpg'
    ],
    aspectRatio: 'landscape',
    featured: false,
    deliverables: ['Foto Lookbook Global', 'Teaser Kampanye (30 Detik)', 'Materi Billboard Digital'],
    credits: [
      { role: 'Pengarah Kreatif', name: 'NOIR FRAME Studio' },
      { role: 'Penata Gaya & Produser', name: 'Mitra Eksternal' },
      { role: 'Sinematografi', name: 'Kru Video NOIR' }
    ],
    cameraSpecs: 'Sony Alpha 7 Series • FE 24-70mm f/2.8 GM • FE 85mm f/1.4 GM'
  },
  {
    id: 'product-obsidian-noir',
    slug: 'obsidian-noir-fragrance',
    title: 'Parfum Obsidian Noir',
    category: 'Product',
    serviceType: 'Commercial Photography',
    year: '2026',
    location: 'Banjarmasin / Jakarta',
    client: 'Maison D’Ombre Parfums',
    coverImage: '/porto/product/product-01.jpg',
    description: 'Studi komersial still-life yang mengeksplorasi refraksi botol kaca gelap, bulir cairan melayang, dan batu basal hitam.',
    story: 'Merancang visual untuk wewangian membutuhkan kemampuan membangkitkan bobot sensori yang tak kasat mata. Kami menggunakan durasi flash berkecepatan tinggi untuk membekukan uap aroma di sekitar botol kaca, diapit bebatuan obsidian vulkanik dan celah cahaya horizontal yang tajam.',
    images: [
      '/porto/product/product-01.jpg',
      '/porto/product/product-03.jpg',
      '/porto/commercial/commercial-03.jpg'
    ],
    aspectRatio: 'portrait',
    featured: false,
    deliverables: ['Aset Utama E-Commerce', 'Iklan Majalah Cetak (Ukuran A4)', 'Animasi Reel Media Sosial'],
    credits: [
      { role: 'Pengarah Tabletop', name: 'NOIR FRAME' },
      { role: 'Penata Properti', name: 'Tim Properti Studio' }
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
