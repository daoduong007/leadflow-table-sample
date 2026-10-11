// Creates original instructional cards, not a recording of a running UI or terminal.
// Requires the repository's existing sharp dependency and ffmpeg on PATH.
const fs = require('node:fs/promises');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const sharp = require('sharp');
const dest = path.resolve(process.argv[2] || 'D:/leadflow-releases/table-states');
const scenes = [
  { seconds: 6, title: 'An empty table needs a cause', label: 'FRONTEND BUILDS / GUIDE 03', lines: ['Loading, failed, empty and filtered', 'are four different table states.', 'Silent visual guide • React + TypeScript'], caption: 'An empty table needs a cause, not just a placeholder. Loading, failed, empty and filtered are four different states.' },
  { seconds: 8, title: '01 / Request pending', label: 'STATE: LOADING', lines: ['Message: Loading leads…', 'Action: wait.', 'Do not claim there are no records.'], footer: 'The temporary empty array is not a successful response.', caption: 'The request is still running. Show a loading message and wait. Do not claim there are no records.' },
  { seconds: 8, title: '02 / Request failed', label: 'STATE: ERROR', lines: ['Message: Could not load leads.', 'Action: Retry the request.', 'Clearing filters is not a fix.'], footer: 'Retry does not repair missing authorization or a bad contract.', caption: 'The request failed. Offer Retry for the request. Clearing filters is not a fix for a failed request.' },
  { seconds: 8, title: '03 / Empty response', label: 'STATE: SUCCESS WITH []', lines: ['Message: No leads returned by this request.', 'Action: explain the request scope.', 'Not an error, so no Retry button.'], footer: 'It describes this request, not every lead in a database.', caption: 'The request succeeded and returned no records in its scope. This is not an error, so there is no Retry action.' },
  { seconds: 8, title: '04 / No matches', label: 'STATE: LOADED, FILTERED TO ZERO', lines: ['Message: No leads match your search.', 'Action: Clear filters.', 'Records exist; the local filter hides them.'], footer: 'Derive visible rows; never overwrite the loaded records.', caption: 'Records exist, but the local filter excludes them. Clear the filter to show them again.' },
  { seconds: 7, title: 'Read the component, try the sample', label: 'LINKS IN THE DESCRIPTION', lines: ['Tutorial: complete TypeScript component', 'Free sample: table, search, status filter', 'Full UI Kit: $29 / one-time purchase'], caption: 'Read the component example and try the free table sample through the description. The separate full UI Kit costs 29 dollars once.' },
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
  ${scene.lines.map((line, i) => `<text x="158" y="${430 + i * 111}" fill="#E4EDF3" font-family="Arial" font-size="46">${escape(line)}</text>`).join('')}
  ${scene.footer ? `<text x="112" y="853" fill="#B9CBD8" font-family="Arial" font-size="35">${escape(scene.footer)}</text>` : ''}
  <text x="112" y="985" fill="#B9CBD8" font-family="Arial" font-size="28">DAO TUNG DUONG / FRONTEND BUILDS</text>
  <text x="1670" y="985" fill="#68E0CA" font-family="Arial" font-size="28">${String(index + 1).padStart(2, '0')} / ${String(scenes.length).padStart(2, '0')}</text>
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
  await fs.writeFile(path.join(dest, 'leadflow-table-states.en.srt'), captions.join('\n'));
  await fs.writeFile(path.join(dest, 'storyboard.json'), JSON.stringify({ duration, width: 1920, height: 1080, fps: 30, audio: false, scenes }, null, 2));
  await sharp(path.join(dest, 'scene-1.png')).resize(1280, 720).png().toFile(path.join(dest, 'thumbnail.png'));
  const result = spawnSync('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', 'frames.txt', '-t', String(duration), '-vf', 'fps=30', '-c:v', 'libx264', '-preset', 'fast', '-crf', '20', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', 'leadflow-table-states.mp4'], { cwd: dest, stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) throw new Error(`ffmpeg exited ${result.status}`);
  console.log(JSON.stringify({ dest, duration, scenes: scenes.length, bytes: (await fs.stat(path.join(dest, 'leadflow-table-states.mp4'))).size }));
})().catch(error => { console.error(error); process.exitCode = 1; });
