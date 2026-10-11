// Creates original instructional cards, not a recording of terminal execution.
// Requires the repository's existing sharp dependency and ffmpeg on PATH.
const fs = require('node:fs/promises');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const sharp = require('sharp');
const dest = path.resolve(process.argv[2] || 'D:/leadflow-releases/setup-customization');
const scenes = [
  { seconds: 7, title: 'LeadFlow: setup + customization', label: 'FRONTEND BUILDS / GUIDE 02', lines: ['A Next.js + TypeScript UI starter', 'Table / detail / pipeline', 'Silent guide • fictional data • v0.1.2'], caption: 'Set up LeadFlow UI Kit and find the files to customize. This is a silent visual guide for version 0.1.2.' },
  { seconds: 14, title: '01 / Extract the ZIP', label: 'PREREQUISITES', lines: ['Install Node.js 20.9+ and npm.', 'Open the inner leadflow-ui-kit folder.', 'Look for package.json + package-lock.json.'], caption: 'Install Node.js 20.9 or later and npm. Extract the purchased ZIP. Open the inner leadflow-ui-kit folder containing package.json and package-lock.json.' },
  { seconds: 12, title: '02 / Run locally', label: 'COMMAND REFERENCE / WINDOWS POWERSHELL', code: true, lines: ['npm.cmd ci', 'npm.cmd run dev -- --port 4322'], footer: 'Wait for Ready, then open http://127.0.0.1:4322', caption: 'In PowerShell, run npm.cmd ci, then npm.cmd run dev -- --port 4322. Wait for Ready and open http://127.0.0.1:4322. Keep the terminal running.' },
  { seconds: 12, title: '03 / Find the shared records', label: 'CUSTOMIZATION MAP', lines: ['src/lib/sample-data.ts → base contacts', 'src/lib/model.ts → initialLeads + owners', 'src/components/workspace.tsx → shared state'], caption: 'Base fictional contacts live in src/lib/sample-data.ts. Extended initialLeads and owners live in src/lib/model.ts. Workspace owns the shared state for table, detail and pipeline.' },
  { seconds: 12, title: '04 / Start with the theme', label: 'STYLING / src/app/globals.css', lines: ['Edit root colors and related CSS rules.', 'Keep text contrast and focus styles visible.', 'Check table + pipeline scrolling on mobile.'], caption: 'Edit root colors and related rules in src/app/globals.css. Keep text contrast and keyboard focus visible. Check that table and pipeline scroll within their containers on mobile.' },
  { seconds: 12, title: '05 / Verify after each change', label: 'LOCAL CHECKS', code: true, lines: ['npm.cmd test', 'npm.cmd run typecheck', 'npm.cmd run build'], footer: 'Also check shared edits, filters and keyboard movement.', caption: 'After customization, run npm.cmd test, npm.cmd run typecheck and npm.cmd run build. Manually check shared edits, filters and keyboard movement. Demo state controls simulate loading, error and empty screens.' },
  { seconds: 12, title: '06 / Know the API boundary', label: 'FRONTEND DEMO', lines: ['Refresh resets edits. No backend or auth.', 'Your app implements fetching + saving.', 'Pipeline uses status controls, not drag-and-drop.'], caption: 'Refresh resets edits. This kit contains no backend, authentication or persistence. Your application implements fetching and saving. Pipeline movement uses status controls rather than drag-and-drop.' },
  { seconds: 9, title: 'Try the free table sample', label: 'LINKS IN THE DESCRIPTION', lines: ['Free sample: table, search and status filter', 'Full UI Kit: $29 / one-time purchase', 'Setup docs included • support/refund: 14 days'], caption: 'Try the free table sample through the description. The separate full UI Kit costs 29 dollars once, with setup documentation and 14-day defect/setup support and refund policy.' },
];
const escape = s => s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const stamp = seconds => `${String(Math.floor(seconds / 3600)).padStart(2, '0')}:${String(Math.floor(seconds / 60) % 60).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')},000`;
function wrapCaption(text) {
  const lines = [''];
  for (const word of text.split(' ')) {
    const i = lines.length - 1;
    if (lines[i] && lines[i].length + word.length + 1 > 80) lines.push(word);
    else lines[i] += `${lines[i] ? ' ' : ''}${word}`;
  }
  return lines.join('\n');
}
function card(scene, index) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080">
  <rect width="1920" height="1080" fill="#101B2C"/>
  <rect x="0" y="0" width="16" height="1080" fill="#68E0CA"/>
  <text x="112" y="125" fill="#68E0CA" font-family="Arial" font-size="30" font-weight="700" letter-spacing="3">${escape(scene.label)}</text>
  <text x="108" y="268" fill="#F7FAFC" font-family="Arial" font-size="72" font-weight="700">${escape(scene.title)}</text>
  <rect x="110" y="329" width="1700" height="451" rx="26" fill="#182C3F"/>
  ${scene.lines.map((line, i) => `<text x="158" y="${430 + i * 111}" fill="${scene.code ? '#68E0CA' : '#E4EDF3'}" font-family="${scene.code ? 'Consolas,monospace' : 'Arial'}" font-size="${scene.code ? 58 : 43}">${escape(line)}</text>`).join('')}
  ${scene.footer ? `<text x="112" y="853" fill="#B9CBD8" font-family="Arial" font-size="35">${escape(scene.footer)}</text>` : ''}
  <text x="112" y="985" fill="#B9CBD8" font-family="Arial" font-size="28">DAO TUNG DUONG / FRONTEND BUILDS</text>
  <text x="1670" y="985" fill="#68E0CA" font-family="Arial" font-size="28">${String(index + 1).padStart(2, '0')} / 08</text>
  <rect x="112" y="1025" width="${1698 * (index + 1) / scenes.length}" height="6" fill="#68E0CA"/>
  </svg>`;
}
(async () => {
  await fs.mkdir(dest, { recursive: true });
  let duration = 0;
  const playlist = [], captions = [];
  for (const [i, scene] of scenes.entries()) {
    const name = `scene-${i + 1}`;
    const svg = card(scene, i);
    await fs.writeFile(path.join(dest, `${name}.svg`), svg);
    await sharp(Buffer.from(svg)).png().toFile(path.join(dest, `${name}.png`));
    playlist.push(`file '${name}.png'`, `duration ${scene.seconds}`);
    captions.push(`${i + 1}\n${stamp(duration)} --> ${stamp(duration + scene.seconds)}\n${wrapCaption(scene.caption)}\n`);
    duration += scene.seconds;
  }
  playlist.push(`file 'scene-${scenes.length}.png'`);
  await fs.writeFile(path.join(dest, 'frames.txt'), playlist.join('\n'));
  await fs.writeFile(path.join(dest, 'leadflow-setup-customization.en.srt'), captions.join('\n'));
  await fs.writeFile(path.join(dest, 'storyboard.json'), JSON.stringify({ duration, width: 1920, height: 1080, fps: 30, audio: false, scenes }, null, 2));
  await sharp(path.join(dest, 'scene-1.png')).resize(1280, 720).png().toFile(path.join(dest, 'thumbnail.png'));
  const result = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', 'frames.txt', '-t', String(duration), '-vf', 'fps=30', '-c:v', 'libx264', '-preset', 'fast', '-crf', '20', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', 'leadflow-setup-customization.mp4'], { cwd: dest, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`ffmpeg exited ${result.status}`);
  console.log(JSON.stringify({ dest, duration, scenes: scenes.length, bytes: (await fs.stat(path.join(dest, 'leadflow-setup-customization.mp4'))).size }));
})().catch(error => { console.error(error); process.exitCode = 1; });
