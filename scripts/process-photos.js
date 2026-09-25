const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const fotoDir = path.join(__dirname, '../public/Foto');
const portoDir = path.join(__dirname, '../public/porto');
const gradDir = path.join(portoDir, 'graduation');
const portraitDir = path.join(portoDir, 'portrait');
const eventDir = path.join(portoDir, 'event');
const campaignDir = path.join(portoDir, 'campaign');

// Ensure destination directories exist
[gradDir, portraitDir, eventDir, campaignDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

async function processImage(srcFile, destFile, maxDimension, quality = 88) {
  const inputPath = path.join(fotoDir, srcFile);
  if (!fs.existsSync(inputPath)) {
    console.error(`Missing source: ${srcFile}`);
    return;
  }
  
  const image = sharp(inputPath);
  const metadata = await image.metadata();
  
  let resizeOpts = {};
  if (metadata.width >= metadata.height) {
    if (metadata.width > maxDimension) {
      resizeOpts.width = maxDimension;
    }
  } else {
    if (metadata.height > maxDimension) {
      resizeOpts.height = maxDimension;
    }
  }

  await image
    .resize(resizeOpts.width || null, resizeOpts.height || null, {
      fit: 'inside',
      withoutEnlargement: true
    })
    .jpeg({ quality, mozjpeg: true })
    .toFile(destFile);

  const stats = fs.statSync(destFile);
  console.log(`Processed: ${path.relative(portoDir, destFile)} (${(stats.size / 1024).toFixed(1)} KB)`);
}

async function run() {
  console.log('Starting image processing...');

  // 1. Hero image (Futri wide architectural stairs)
  await processImage('DSC09732.jpg.jpeg', path.join(portoDir, 'hero-cinematic.jpg'), 2560, 90);

  // 2. Graduation folder
  const gradMap = [
    // Futri series
    { src: 'DSC09732.jpg.jpeg', dest: 'futri-hero.jpg', max: 2400 },
    { src: 'DSC09738.jpg.jpeg', dest: 'futri-01.jpg', max: 1800 },
    { src: 'DSC09733.jpg.jpeg', dest: 'futri-02.jpg', max: 1800 },
    { src: 'DSC09735.jpg.jpeg', dest: 'futri-03.jpg', max: 1800 },
    { src: 'DSC09739.jpg.jpeg', dest: 'futri-04.jpg', max: 1800 },
    { src: 'DSC09740.jpg.jpeg', dest: 'futri-05.jpg', max: 1800 },
    { src: 'DSC09821.jpg.jpeg', dest: 'futri-06.jpg', max: 1800 },
    // Duo series
    { src: 'DSC02056.jpg.jpeg', dest: 'duo-hero.jpg', max: 2400 },
    { src: 'DSC01928.jpg.jpeg', dest: 'duo-01.jpg', max: 1800 },
    { src: 'DSC01973.jpg.jpeg', dest: 'duo-02.jpg', max: 1800 },
    { src: 'DSC02054.jpg.jpeg', dest: 'duo-03.jpg', max: 1800 },
    // Group series
    { src: 'DSC00071.jpg.jpeg', dest: 'group-hero.jpg', max: 2400 },
    { src: 'DSC09994.jpg.jpeg', dest: 'group-01.jpg', max: 2400 },
    { src: 'DSC09950.jpg.jpeg', dest: 'group-02.jpg', max: 2400 },
    { src: 'DSC09976.jpg.jpeg', dest: 'group-03.jpg', max: 2400 },
    { src: 'DSC09957.jpg.jpeg', dest: 'group-04.jpg', max: 2400 },
  ];

  for (const item of gradMap) {
    await processImage(item.src, path.join(gradDir, item.dest), item.max);
  }

  // 3. Update portrait folder with real photos
  const portraitMap = [
    { src: 'DSC09738.jpg.jpeg', dest: 'portrait-01.jpg', max: 1800 },
    { src: 'DSC09733.jpg.jpeg', dest: 'portrait-02.jpg', max: 1800 },
    { src: 'DSC09735.jpg.jpeg', dest: 'portrait-03.jpg', max: 1800 },
    { src: 'DSC01928.jpg.jpeg', dest: 'portrait-04.jpg', max: 1800 },
    { src: 'DSC02054.jpg.jpeg', dest: 'portrait-05.jpg', max: 1800 },
    { src: 'DSC09821.jpg.jpeg', dest: 'portrait-06.jpg', max: 1800 },
  ];
  for (const item of portraitMap) {
    await processImage(item.src, path.join(portraitDir, item.dest), item.max);
  }

  // 4. Update event folder with group celebration shots
  const eventMap = [
    { src: 'DSC00071.jpg.jpeg', dest: 'event-01.jpg', max: 2400 },
    { src: 'DSC09994.jpg.jpeg', dest: 'event-02.jpg', max: 2400 },
    { src: 'DSC09950.jpg.jpeg', dest: 'event-03.jpg', max: 2400 },
  ];
  for (const item of eventMap) {
    await processImage(item.src, path.join(eventDir, item.dest), item.max);
  }

  // 5. Update campaign folder with nocturnal and architectural shots
  const campaignMap = [
    { src: 'DSC02056.jpg.jpeg', dest: 'campaign-01.jpg', max: 2400 },
    { src: 'DSC09732.jpg.jpeg', dest: 'campaign-02.jpg', max: 2400 },
    { src: 'DSC09976.jpg.jpeg', dest: 'campaign-03.jpg', max: 2400 },
  ];
  for (const item of campaignMap) {
    await processImage(item.src, path.join(campaignDir, item.dest), item.max);
  }

  console.log('All images processed and optimized successfully!');
}

run().catch(err => {
  console.error('Error processing images:', err);
  process.exit(1);
});
