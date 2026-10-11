# Sample purchase CTA — 10/10/2026

- Added paid kit section below the free lead table, explaining connected views, source/docs and mock-data limitations.
- CTA: “View full UI Kit — $29”, pointing to https://daoduong007.gumroad.com/l/leadflow-ui-kit.
- Updated public GitHub README with kit scope, price, policy and independent free sample. Pushed commit `7ef89df` to main; only README, component and stylesheet were committed.
- Restored original Sites source to `D:/leadflow-site-update`; preserved download asset and existing public audience.
- Site source commit: `2e5ac0fda21db3f3051da9f6961fd2d857e910a7`. Saved version 2 and deployed successfully at https://leadflow-table-sample.daotungduong-photos2.chatgpt.site.
- Typecheck and Next production build passed. Browser QA covered desktop and mobile 390x844; document scroll width did not exceed viewport. Verified CTA href and actual navigation to Gumroad.
- Sites Windows helper build/package wrappers failed due npm/bash path handling. Used npm.cmd for successful build and original package-site.sh through Git Bash with POSIX paths; saved the resulting archive from the pushed source.
- Public screenshot: `../sales/assets/v0.1.1/sample-purchase-cta.png`.
- The free v0.1.0 download remains the original archive; it has not been repackaged. No paid source was added to the public repository.
- Next: finalize connected-views article and select distribution channels. No social posts or messages were sent.
