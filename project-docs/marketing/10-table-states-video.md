# Video #3 — table loading/error/empty states

Rendered and **published 11/10/2026**: https://youtu.be/H-nSNjv-F1g (Studio confirmed “Đã đăng video”, checks found no issues, playlist Frontend Builds, English, not made for kids, thumbnail applied). English captions verified on the public watch page 12/10/2026: caption tracks `en` (English) and `en-US` (English (United States)) are present. The first SRT uploads (video-language route) showed a success toast but produced no public track; the working route was Languages → Add language → English (United States) → Subtitles → Upload file → Publish. Original 45-second silent visual guide with six instructional cards, following the script in `09-empty-error-publication.md`. It is not a screen recording of a running UI, and no terminal output is shown. No music, synthetic narration or third-party footage.

## Deliverables

- Video: `D:/leadflow-releases/table-states/leadflow-table-states.mp4`
- English captions: `D:/leadflow-releases/table-states/leadflow-table-states.en.srt`
- Thumbnail: `D:/leadflow-releases/table-states/thumbnail.png`
- Editable SVG/PNG cards and `storyboard.json` in the same folder.
- Rebuild: `node project-docs/marketing/build-states-video.cjs [outputDir]`. Requires the existing `sharp` dependency and FFmpeg on PATH.

## Local QA

FFprobe: one H.264 stream, 1920×1080, 30 fps, yuv420p, 45 seconds, no audio. Cards 4 and 5 (longest text) inspected at full size; text sits within the frame. Six contiguous caption cues end at 0:45. Card copy matches the state table in `08-empty-error-states.md`.

## Publishing package (draft)

**Title:** React table states: loading vs error vs empty vs no matches

**Description:**

```text
An empty table needs a cause, not just a placeholder. This 45-second silent visual guide separates four states: request pending, request failed, empty response, and a filter with no matches. English captions are available. The cards are instructions, not a recording of a running UI.

Tutorial with the full TypeScript component:
https://daoduong007.hashnode.dev/react-table-loading-error-empty-states

Free LeadFlow table sample (table, search, status filter only):
https://leadflow-table-sample.daotungduong-photos2.chatgpt.site

Free sample source (MIT):
https://github.com/daoduong007/leadflow-table-sample

Separate full UI Kit — $29, paid once:
https://daoduong007.gumroad.com/l/leadflow-ui-kit
Fictional client-side data; no backend, authentication or persistence. Support for defects/setup: 14 days. Refund policy: 14 days.

Contact: daoduong.007@gmail.com

0:00 Why an empty table needs a cause
0:06 Request pending
0:14 Request failed
0:22 Empty response
0:30 No matches
0:38 Component and sample

#React #TypeScript #Nextjs
```

Suggested metadata: English, Science & Technology, not made for kids, playlist “Frontend Builds — UI Walkthroughs”, landscape (not a Short).

No views or sales measured.
