const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const portoDir = path.join(__dirname, '..', 'public', 'porto');

const categories = {
  wedding: [
    {
      name: 'wedding-01.jpg',
      title: 'AN ETERNAL VOW',
      subtitle: 'Banjarmasin • 2026',
      desc: 'Cinematic intimate garden celebration',
      width: 1600,
      height: 1067,
      bg: ['#12100e', '#241b17', '#080706'],
      accent: '#c5a880',
      iso: 'ISO 400 • 35mm f/1.4',
    },
    {
      name: 'wedding-02.jpg',
      title: 'VEIL OF LIGHT',
      subtitle: 'Editorial Bride Series',
      desc: 'Natural window chiaroscuro portrait',
      width: 1200,
      height: 1500,
      bg: ['#151413', '#1e1b18', '#0c0b0a'],
      accent: '#dfd2c0',
      iso: 'ISO 200 • 85mm f/1.2',
    },
    {
      name: 'wedding-03.jpg',
      title: 'THE DUSK EMBRACE',
      subtitle: 'Reception & First Dance',
      desc: 'Atmospheric tungsten warmth & motion blur',
      width: 1600,
      height: 1067,
      bg: ['#19120e', '#291e14', '#0d0a07'],
      accent: '#e69a56',
      iso: 'ISO 1600 • 50mm f/1.2',
    }
  ],
  event: [
    {
      name: 'event-01.jpg',
      title: 'SYMPHONY OF LIGHT',
      subtitle: 'Contemporary Art Gala',
      desc: 'Architectural documentation & live stage acoustics',
      width: 1600,
      height: 900,
      bg: ['#0a0b12', '#141829', '#05060a'],
      accent: '#7f9cf5',
      iso: 'ISO 2500 • 24-70mm f/2.8',
    },
    {
      name: 'event-02.jpg',
      title: 'CREATIVE SUMMIT',
      subtitle: 'Keynote & Executive Panels',
      desc: 'Clean corporate documentary visual identity',
      width: 1400,
      height: 1400,
      bg: ['#0d0f11', '#171b1f', '#070809'],
      accent: '#a0aec0',
      iso: 'ISO 800 • 70-200mm f/2.8',
    },
    {
      name: 'event-03.jpg',
      title: 'NOCTURNAL BEAT',
      subtitle: 'Electronic Music Showcase',
      desc: 'Strobe sync & crowd perspective cinematography',
      width: 1600,
      height: 1067,
      bg: ['#0f0a14', '#23112b', '#08050a'],
      accent: '#d53f8c',
      iso: 'ISO 3200 • 16-35mm f/2.8',
    }
  ],
  commercial: [
    {
      name: 'commercial-01.jpg',
      title: 'MONOLITH WATCHES',
      subtitle: 'Global Heritage Commercial',
      desc: 'Precision motion control & macroscopic timepiece capture',
      width: 1600,
      height: 900,
      bg: ['#090909', '#1a1a1a', '#050505'],
      accent: '#e2e8f0',
      iso: 'RED V-RAPTOR • Master Prime 50mm',
    },
    {
      name: 'commercial-02.jpg',
      title: 'AERODYNE AUTOMOTIVE',
      subtitle: 'Electric Hypercar Reveal Film',
      desc: 'High speed tracking & dramatic tunnel rim lighting',
      width: 1600,
      height: 1067,
      bg: ['#060d14', '#0d1d2b', '#03060a'],
      accent: '#63b3ed',
      iso: 'ARRI Alexa Mini LF • Cooke Anamorphic',
    },
    {
      name: 'commercial-03.jpg',
      title: 'AVANT ARCHITECTURE',
      subtitle: 'Modernist Concrete Residence',
      desc: 'Geometric shadows & dawn twilight architectural photography',
      width: 1200,
      height: 1500,
      bg: ['#141312', '#22201d', '#0a0909'],
      accent: '#cbd5e0',
      iso: 'Hasselblad H6D-100c • 28mm f/4',
    }
  ],
  portrait: [
    {
      name: 'portrait-01.jpg',
      title: 'SILHOUETTE & SHADOW',
      subtitle: 'Editorial Fashion Cover',
      desc: 'Sculptural black and white studio lighting study',
      width: 1200,
      height: 1500,
      bg: ['#080808', '#1c1c1c', '#000000'],
      accent: '#ffffff',
      iso: 'Phase One IQ4 • 110mm f/2.8',
    },
    {
      name: 'portrait-02.jpg',
      title: 'THE DIRECTORS CUT',
      subtitle: 'Filmmaker Portrait Series',
      desc: 'Intimate character study in 35mm film grain',
      width: 1200,
      height: 1500,
      bg: ['#120e0c', '#201814', '#070504'],
      accent: '#ed8936',
      iso: 'Leica M11-P • Summilux 50mm',
    },
    {
      name: 'portrait-03.jpg',
      title: 'CHROMATIC MUSE',
      subtitle: 'Avant-Garde Beauty Editorial',
      desc: 'Subtle neon back-gel and soft diffuse skin texture',
      width: 1400,
      height: 1400,
      bg: ['#140a12', '#261223', '#080307'],
      accent: '#f687b3',
      iso: 'Sony FX3 • G Master 85mm f/1.4',
    }
  ],
  product: [
    {
      name: 'product-01.jpg',
      title: 'OBSIDIAN NOIR FRAGRANCE',
      subtitle: 'Luxury Perfume Still Life',
      desc: 'Liquid smoke reflection & matte glass refraction',
      width: 1200,
      height: 1500,
      bg: ['#070707', '#171717', '#020202'],
      accent: '#e2e8f0',
      iso: 'Fujifilm GFX 100 II • GF 120mm Macro',
    },
    {
      name: 'product-02.jpg',
      title: 'KAIROS CHRONOGRAPH',
      subtitle: 'Haute Horlogerie Focus',
      desc: 'Dial bevel detailing under polarized studio light',
      width: 1400,
      height: 1400,
      bg: ['#0b0c0e', '#191d24', '#050608'],
      accent: '#90cdf4',
      iso: 'Macro Stacking • 90mm f/2.8',
    },
    {
      name: 'product-03.jpg',
      title: 'RAW ORGANICS',
      subtitle: 'Minimalist Skincare Range',
      desc: 'Earthy travertine stone backdrop & organic shadows',
      width: 1600,
      height: 1067,
      bg: ['#141310', '#25231e', '#0a0a08'],
      accent: '#d69e2e',
      iso: 'Canon R5 C • RF 100mm f/2.8L Macro',
    }
  ],
  campaign: [
    {
      name: 'campaign-01.jpg',
      title: 'URBAN NOMAD SS26',
      subtitle: 'Global Streetwear Campaign',
      desc: 'Tokyo nightscape cinematics & fast shutter freeze',
      width: 1600,
      height: 900,
      bg: ['#080a0e', '#111924', '#040507'],
      accent: '#4fd1c5',
      iso: 'Sony A1 • 35mm f/1.4 GM',
    },
    {
      name: 'campaign-02.jpg',
      title: 'TERRA INCOGNITA',
      subtitle: 'Sustainable Outdoor Label',
      desc: 'Volcanic mist, rugged terrain, and aerial topography',
      width: 1600,
      height: 1067,
      bg: ['#11120f', '#1d211b', '#090a08'],
      accent: '#68d391',
      iso: 'DJI Ronin 4D • 24mm f/2.8',
    },
    {
      name: 'campaign-03.jpg',
      title: 'THE SILENT ECHO',
      subtitle: 'Contemporary Fashion Film',
      desc: 'Brutalist concrete architecture & cinematic pacing',
      width: 1200,
      height: 1500,
      bg: ['#0f0f10', '#1c1d20', '#080809'],
      accent: '#e2e8f0',
      iso: 'ARRI Amira • Zeiss Supreme Prime',
    }
  ]
};

async function generateAll() {
  console.log('Generating high-end cinematic assets for NOIR FRAME...');
  
  for (const [cat, items] of Object.entries(categories)) {
    const dir = path.join(portoDir, cat);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    for (const item of items) {
      const outPath = path.join(dir, item.name);
      const safeTitle = item.title.replace(/&/g, '+');
      const safeSubtitle = item.subtitle.replace(/&/g, '+');
      const safeDesc = item.desc.replace(/&/g, '+');
      const safeIso = item.iso.replace(/&/g, '+');
      
      const svg = `
      <svg width="${item.width}" height="${item.height}" viewBox="0 0 ${item.width} ${item.height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stop-color="${item.bg[1]}" stop-opacity="0.85"/>
            <stop offset="60%" stop-color="${item.bg[0]}" stop-opacity="0.95"/>
            <stop offset="100%" stop-color="${item.bg[2]}" stop-opacity="1"/>
          </radialGradient>
          <linearGradient id="filmGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${item.accent}" stop-opacity="0.12"/>
            <stop offset="50%" stop-color="#ffffff" stop-opacity="0.02"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0.8"/>
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.02)" stroke-width="1"/>
          </pattern>
        </defs>

        <!-- Base Background -->
        <rect width="${item.width}" height="${item.height}" fill="${item.bg[2]}"/>
        <rect width="${item.width}" height="${item.height}" fill="url(#vignette)"/>
        <rect width="${item.width}" height="${item.height}" fill="url(#filmGradient)"/>
        <rect width="${item.width}" height="${item.height}" fill="url(#grid)"/>

        <!-- Atmospheric Film Geometry & Frame Lines -->
        <rect x="40" y="40" width="${item.width - 80}" height="${item.height - 80}" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>
        <rect x="52" y="52" width="${item.width - 104}" height="${item.height - 104}" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1" stroke-dasharray="4 8"/>

        <!-- Camera Framing Crosshairs & Corner Marks -->
        <!-- Top Left -->
        <path d="M 32 60 L 32 32 L 60 32" fill="none" stroke="${item.accent}" stroke-width="2" opacity="0.7"/>
        <!-- Top Right -->
        <path d="M ${item.width - 60} 32 L ${item.width - 32} 32 L ${item.width - 32} 60" fill="none" stroke="${item.accent}" stroke-width="2" opacity="0.7"/>
        <!-- Bottom Left -->
        <path d="M 32 ${item.height - 60} L 32 ${item.height - 32} L 60 ${item.height - 32}" fill="none" stroke="${item.accent}" stroke-width="2" opacity="0.7"/>
        <!-- Bottom Right -->
        <path d="M ${item.width - 60} ${item.height - 32} L ${item.width - 32} ${item.height - 32} L ${item.width - 32} ${item.height - 60}" fill="none" stroke="${item.accent}" stroke-width="2" opacity="0.7"/>

        <!-- Center Viewfinder Reticle -->
        <circle cx="${item.width / 2}" cy="${item.height / 2}" r="80" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1"/>
        <circle cx="${item.width / 2}" cy="${item.height / 2}" r="4" fill="${item.accent}" opacity="0.6"/>
        <line x1="${item.width / 2 - 100}" y1="${item.height / 2}" x2="${item.width / 2 - 20}" y2="${item.height / 2}" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
        <line x1="${item.width / 2 + 20}" y1="${item.height / 2}" x2="${item.width / 2 + 100}" y2="${item.height / 2}" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
        <line x1="${item.width / 2}" y1="${item.height / 2 - 100}" x2="${item.width / 2}" y2="${item.height / 2 - 20}" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
        <line x1="${item.width / 2}" y1="${item.height / 2 + 20}" x2="${item.width / 2}" y2="${item.height / 2 + 100}" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>

        <!-- Top Metadata Strip -->
        <text x="70" y="80" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="14" letter-spacing="4" fill="rgba(255, 255, 255, 0.4)" font-weight="600">NOIR FRAME // ARCHIVE ${safeSubtitle.toUpperCase()}</text>
        <text x="${item.width - 70}" y="80" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" letter-spacing="2" fill="${item.accent}" opacity="0.85" font-weight="500">${safeIso}</text>

        <!-- Dynamic Studio Art Silhouette Abstract Centerpiece -->
        <g transform="translate(${item.width / 2}, ${item.height / 2 - 30}) scale(${item.width / 1600})">
          <rect x="-240" y="-120" width="480" height="240" fill="rgba(255, 255, 255, 0.015)" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>
          <line x1="-280" y1="0" x2="280" y2="0" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1" stroke-dasharray="6 6"/>
          <circle cx="0" cy="0" r="140" fill="none" stroke="${item.accent}" stroke-width="1" opacity="0.25"/>
          <circle cx="0" cy="0" r="160" fill="none" stroke="rgba(255, 255, 255, 0.04)" stroke-width="1"/>
          
          <!-- Inner Framing Shapes -->
          <polygon points="-120,60 0,-100 120,60" fill="none" stroke="rgba(255, 255, 255, 0.07)" stroke-width="1.5"/>
          <rect x="-70" y="-70" width="140" height="140" fill="none" stroke="${item.accent}" stroke-width="1" opacity="0.3" transform="rotate(45)"/>
        </g>

        <!-- Bottom Typography & Editorial Labels -->
        <g transform="translate(80, ${item.height - 120})">
          <text x="0" y="-45" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="12" letter-spacing="6" fill="${item.accent}" font-weight="700">PROJECT DIRECTION // 0${items.indexOf(item) + 1}</text>
          <text x="0" y="0" font-family="'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" font-size="34" letter-spacing="3" fill="#f8f9fa" font-weight="800">${safeTitle}</text>
          <text x="0" y="30" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" letter-spacing="1" fill="rgba(255, 255, 255, 0.6)">${safeDesc}</text>
        </g>

        <!-- Watermark / Brand Badge -->
        <text x="${item.width - 80}" y="${item.height - 90}" text-anchor="end" font-family="'Helvetica Neue', -apple-system, sans-serif" font-size="14" letter-spacing="8" fill="rgba(255, 255, 255, 0.35)" font-weight="700">NOIR FRAME</text>
        <text x="${item.width - 80}" y="${item.height - 68}" text-anchor="end" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="11" letter-spacing="3" fill="rgba(255, 255, 255, 0.2)">STUDIO PRODUCTION • RAW NEGATIVE</text>
      </svg>
      `;

      await sharp(Buffer.from(svg))
        .jpeg({ quality: 92 })
        .toFile(outPath);
      
      console.log(`Generated: /public/porto/${cat}/${item.name}`);
    }
  }

  // Also generate a hero background image
  const heroSvg = `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="heroGlow" cx="50%" cy="45%" r="65%">
        <stop offset="0%" stop-color="#1e1c1a" stop-opacity="0.9"/>
        <stop offset="50%" stop-color="#0e0e0e" stop-opacity="0.98"/>
        <stop offset="100%" stop-color="#050505" stop-opacity="1"/>
      </radialGradient>
      <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.05"/>
        <stop offset="50%" stop-color="#c5a880" stop-opacity="0.03"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.9"/>
      </linearGradient>
    </defs>
    <rect width="1920" height="1080" fill="#050505"/>
    <rect width="1920" height="1080" fill="url(#heroGlow)"/>
    <rect width="1920" height="1080" fill="url(#beam)"/>

    <!-- Subtle framing lines -->
    <rect x="60" y="60" width="1800" height="960" fill="none" stroke="rgba(255, 255, 255, 0.06)" stroke-width="1"/>
    
    <!-- Viewfinder crop marks -->
    <path d="M 45 90 L 45 45 L 90 45" fill="none" stroke="#c5a880" stroke-width="2" opacity="0.6"/>
    <path d="M 1830 45 L 1875 45 L 1875 90" fill="none" stroke="#c5a880" stroke-width="2" opacity="0.6"/>
    <path d="M 45 990 L 45 1035 L 90 1035" fill="none" stroke="#c5a880" stroke-width="2" opacity="0.6"/>
    <path d="M 1830 1035 L 1875 1035 L 1875 990" fill="none" stroke="#c5a880" stroke-width="2" opacity="0.6"/>

    <!-- Center Reticle -->
    <circle cx="960" cy="540" r="160" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
    <circle cx="960" cy="540" r="6" fill="#c5a880" opacity="0.4"/>
    <line x1="840" y1="540" x2="940" y2="540" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <line x1="980" y1="540" x2="1080" y2="540" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <line x1="960" y1="420" x2="960" y2="520" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
    <line x1="960" y1="560" x2="960" y2="660" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
  </svg>
  `;

  await sharp(Buffer.from(heroSvg))
    .jpeg({ quality: 94 })
    .toFile(path.join(portoDir, 'hero-cinematic.jpg'));
  
  console.log('Generated: /public/porto/hero-cinematic.jpg');
  console.log('All portfolio assets created successfully!');
}

generateAll().catch(console.error);
