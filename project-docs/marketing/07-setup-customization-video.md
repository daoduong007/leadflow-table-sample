# Video #2 — setup and customization

Prepared and **published 10/10/2026** for the day-31 task in the plan, following the user's instruction: https://youtu.be/NhiFp3-CdOs. Studio confirmed publication; initial copyright/community checks completed with no issues detected. Public watch page shows the correct channel/title, 1:30 duration, captions and CTA links. This is an original 90-second silent visual guide with eight instructional cards. It is not a new screen recording of installation, terminal output or customization. No music, synthetic narration or third-party footage is used.

## Deliverables

- Video: `D:/leadflow-releases/setup-customization/leadflow-setup-customization.mp4`
- English captions: `D:/leadflow-releases/setup-customization/leadflow-setup-customization.en.srt`
- Thumbnail: `D:/leadflow-releases/setup-customization/thumbnail.png`
- Editable SVG cards, PNG cards and `storyboard.json` in the same folder.
- Rebuild: `node project-docs/marketing/build-setup-video.cjs` from the sample repo. Requires the existing `sharp` dependency and FFmpeg on PATH. Optional first argument selects the output directory.

Media is outside the public sample repo. The build script contains original instructional copy and file paths, not paid source. References were checked against the local v0.1.2 README, customization guide and actual file paths. The install/check commands are instructions; the cards do not represent newly executed commands or certify a buyer's environment.

## Publishing package

**Title:** Set up and customize a Next.js dashboard UI kit | LeadFlow

**Thumbnail:** LeadFlow: setup + customization

**Description:**

```text
Set up LeadFlow UI Kit v0.1.2 locally and find the files for data, shared state and styling. This is a 90-second silent visual guide; English captions are available. The command cards are instructions, not a recording of terminal execution.

The separate full kit includes connected table, detail and pipeline views. It uses fictional client-side data. Refresh resets edits. No backend, authentication or persistence is included. Pipeline movement uses status controls rather than drag-and-drop.

Try the free sample — table, search and status filtering only:
https://leadflow-table-sample.daotungduong-photos2.chatgpt.site

Free sample source:
https://github.com/daoduong007/leadflow-table-sample

Full UI Kit — $29, paid once:
https://daoduong007.gumroad.com/l/leadflow-ui-kit

Includes source and setup/customization docs. Support for defects/setup: 14 days. Refund policy: 14 days. Custom implementation and backend integration are outside that support scope.

Read about sharing records between table, detail and pipeline:
https://daoduong007.hashnode.dev/keep-a-lead-table-detail-view-and-kanban-board-in-sync-with-react

Contact: daoduong.007@gmail.com

0:00 What this guide covers
0:07 Extract the ZIP and check prerequisites
0:21 Install and run locally
0:33 Find the shared records
0:45 Customize the theme
0:57 Verify your changes
1:09 Understand the API boundary
1:21 Free sample and full kit

#Nextjs #React #TypeScript
```

Suggested metadata: English title/description and captions; Science & Technology; the existing “Frontend Builds — UI Walkthroughs” playlist. It is a regular landscape video, not a vertical Short. Audience must reflect the actual intended audience (developer education); no automatic setting is implied by this document.

## Verification before publication

Local QA completed: FFprobe reports one H.264 video stream, 1920×1080, 30 fps, yuv420p, exactly 90 seconds and no audio stream. Eight frames extracted from the encoded MP4 were inspected together: titles, paths, commands and footer copy are within frame. The subtitle file has eight contiguous cues ending at 1:30. English SRT imported and saved in Studio; caption preview and first cue on the public watch page verified. Thumbnail uploaded and video assigned to “Frontend Builds — UI Walkthroughs”. Video language English, Science & Technology, not made for kids; no paid sponsorship or realistic altered content depicted. Screenshots saved outside the repo at `D:/leadflow-releases/distribution-proof/`.

1. Inspect the rendered cards at full size and confirm all paths and commands are readable; scrub each transition in the MP4 preview.
2. Confirm duration 90 seconds, 1920×1080, 30 fps, H.264/yuv420p and no audio stream. Confirm all eight caption intervals fall within the video and end at 1:30.
3. Upload captions separately, preview wrapping and match timing to the cards. The video itself has readable instructions even if captions are off.
4. Preview the title, description links and thumbnail in Studio. Preserve existing videos and branding. Record a new public URL only after publication and opening the actual watch page.

Do not mark this as published based on a local render or an upload draft. Publication status and any views/sales require separate evidence in `distribution-log.md`.
