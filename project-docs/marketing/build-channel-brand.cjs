const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const dest = path.resolve(__dirname, '../sales/assets/youtube-channel');
const mark = `<rect width="800" height="800" rx="180" fill="#101B2C"/><path d="M228 276L132 400L228 524M572 276L668 400L572 524" fill="none" stroke="#68E0CA" stroke-width="32" stroke-linecap="round" stroke-linejoin="round"/><text x="400" y="457" text-anchor="middle" fill="#F7FAFC" font-family="Arial,sans-serif" font-size="168" font-weight="700" letter-spacing="-10">TD</text><rect x="334" y="572" width="132" height="12" rx="6" fill="#68E0CA"/>`;
const avatar = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">${mark}</svg>`;
const banner = `<svg xmlns="http://www.w3.org/2000/svg" width="2560" height="1440" viewBox="0 0 2560 1440">
<defs><linearGradient id="bg" x2="1" y2="1"><stop stop-color="#101B2C"/><stop offset="1" stop-color="#182C3F"/></linearGradient><pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse"><path d="M80 0H0V80" fill="none" stroke="#36536A" stroke-opacity=".22"/></pattern></defs>
<rect width="2560" height="1440" fill="url(#bg)"/><rect width="2560" height="1440" fill="url(#grid)"/>
<circle cx="2310" cy="240" r="470" fill="none" stroke="#68E0CA" stroke-width="2" opacity=".12"/><circle cx="200" cy="1280" r="450" fill="none" stroke="#68E0CA" stroke-width="2" opacity=".12"/>
<g transform="translate(580 620) scale(.24)">${mark}</g>
<text x="828" y="645" fill="#68E0CA" font-family="Arial,sans-serif" font-size="27" font-weight="700" letter-spacing="5">DAO TUNG DUONG</text>
<text x="824" y="737" fill="#F7FAFC" font-family="Arial,sans-serif" font-size="83" font-weight="700" letter-spacing="-3">Frontend Builds</text>
<text x="829" y="793" fill="#B9CBD8" font-family="Arial,sans-serif" font-size="32">React / Next.js / TypeScript</text>
<g transform="translate(1610 620)" fill="none" stroke="#68E0CA" stroke-width="2" opacity=".8"><rect width="310" height="186" rx="17"/><path d="M0 34H310M93 34V186M186 34V186"/><rect x="14" y="53" width="64" height="38" rx="7" fill="#68E0CA" fill-opacity=".2"/><rect x="108" y="108" width="62" height="38" rx="7" fill="#68E0CA" fill-opacity=".35"/><rect x="202" y="70" width="90" height="38" rx="7" fill="#68E0CA" fill-opacity=".16"/></g>
<text x="1615" y="857" fill="#B9CBD8" font-family="Arial,sans-serif" font-size="24" letter-spacing="2">UI WALKTHROUGHS</text>
</svg>`;
(async () => {
  await fs.mkdir(dest, { recursive: true });
  await fs.writeFile(path.join(dest, 'avatar-v1.svg'), avatar);
  await fs.writeFile(path.join(dest, 'banner-v1.svg'), banner);
  await sharp(Buffer.from(avatar)).png().toFile(path.join(dest, 'avatar-v1.png'));
  await sharp(Buffer.from(banner)).png().toFile(path.join(dest, 'banner-v1.png'));
  await sharp(Buffer.from(avatar)).resize(150,150).png().toFile(path.join(dest, 'watermark-v1.png'));
  await sharp(Buffer.from(banner)).extract({left:507,top:508,width:1546,height:423}).png().toFile(path.join(dest,'banner-mobile-safe-preview.png'));
  for (const name of ['avatar-v1.png','banner-v1.png','watermark-v1.png']) {
    console.log(name, await sharp(path.join(dest,name)).metadata().then(m=>({width:m.width,height:m.height})), (await fs.stat(path.join(dest,name))).size);
  }
})().catch(e=>{console.error(e);process.exitCode=1;});
