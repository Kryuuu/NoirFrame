const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function buildAllIcons() {
  const logoPath = path.join(__dirname, '..', 'public', 'porto', 'Logo', 'Desain tanpa judul (13).png');
  const appDir = path.join(__dirname, '..', 'src', 'app');
  const publicDir = path.join(__dirname, '..', 'public');
  const logoDir = path.join(__dirname, '..', 'public', 'porto', 'Logo');

  // Remove temporary test files
  const toDelete = [
    'test_emblem.png',
    'test_full_mark.png',
    'test_uncropped.png',
    'test_emblem_square.png',
    'test_emblem_circle.png',
  ];
  for (const f of toDelete) {
    const p = path.join(logoDir, f);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  }

  // Extract the exact symbol mark from Desain tanpa judul (13).png
  // Symbol coordinates in original 354x472 image:
  // minX: 160, maxX: 192 (w: 32)
  // minY: 199, maxY: 228 (h: 29)
  const symbolBuffer = await sharp(logoPath)
    .extract({ left: 158, top: 197, width: 36, height: 33 })
    .toBuffer();

  // Generator for circular badge icon
  async function generateCircleBadge(size) {
    const symbolWidth = Math.round(size * 0.58);
    const symbolHeight = Math.round(symbolWidth * (33 / 36));
    const r = size / 2;

    const circleSvg = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${r}" cy="${r}" r="${r - 1}" fill="#080808" stroke="#2a2a2a" stroke-width="${Math.max(1, Math.round(size * 0.025))}"/>
    </svg>`;

    const resizedSymbol = await sharp(symbolBuffer)
      .resize(symbolWidth, symbolHeight, { fit: 'contain' })
      .toBuffer();

    return sharp(Buffer.from(circleSvg))
      .composite([{ input: resizedSymbol, gravity: 'center' }])
      .png()
      .toBuffer();
  }

  // 1. Generate PNGs at various sizes
  const png16 = await generateCircleBadge(16);
  const png32 = await generateCircleBadge(32);
  const png48 = await generateCircleBadge(48);
  const png64 = await generateCircleBadge(64);
  const png128 = await generateCircleBadge(128);
  const png180 = await generateCircleBadge(180);
  const png192 = await generateCircleBadge(192);
  const png256 = await generateCircleBadge(256);
  const png512 = await generateCircleBadge(512);

  // 2. Build multi-frame ICO file (16, 32, 48, 64, 128, 256)
  const icoFrames = [
    { size: 16, buf: png16 },
    { size: 32, buf: png32 },
    { size: 48, buf: png48 },
    { size: 64, buf: png64 },
    { size: 128, buf: png128 },
    { size: 256, buf: png256 }
  ];

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // 1 = ICO
  header.writeUInt16LE(icoFrames.length, 4);

  let offset = 6 + icoFrames.length * 16;
  const entries = [];
  for (const frame of icoFrames) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(frame.size === 256 ? 0 : frame.size, 0); // width: 0 means 256
    entry.writeUInt8(frame.size === 256 ? 0 : frame.size, 1); // height: 0 means 256
    entry.writeUInt8(0, 2); // Color palette
    entry.writeUInt8(0, 3); // Reserved
    entry.writeUInt16LE(1, 4); // Color planes
    entry.writeUInt16LE(32, 6); // Bits per pixel
    entry.writeUInt32LE(frame.buf.length, 8); // Image size in bytes
    entry.writeUInt32LE(offset, 12); // Offset of image data
    entries.push(entry);
    offset += frame.buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...icoFrames.map(f => f.buf)]);

  // Save to src/app/favicon.ico and public/favicon.ico
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

  // Save Next.js app icons
  fs.writeFileSync(path.join(appDir, 'icon.png'), png32);
  fs.writeFileSync(path.join(appDir, 'apple-icon.png'), png180);

  // Save public logo copies
  fs.writeFileSync(path.join(logoDir, 'noir-emblem-circle.png'), png512);
  fs.writeFileSync(path.join(logoDir, 'noir-emblem-circle-192.png'), png192);

  console.log('Successfully generated all icons!');
}

buildAllIcons().catch(err => {
  console.error(err);
  process.exit(1);
});
