# Review Before Publishing

This file is a reviewer aid. It is safe to keep in the repo or delete after launch.
Work through every item before announcing the site (mirrors Part 8 of the setup guide).

## Things you must fill in or confirm
- [ ] **Contact email** — replace the placeholder note in `docs/contact.html` with a
      real institutional/lab inbox approved for public display (avoid personal emails).
- [ ] **Team names** — in `docs/team.html`, add individual student/collaborator names
      ONLY after each person approves being listed publicly. Otherwise keep role-based
      descriptions and delete the reminder note.
- [ ] **License** — confirm CC BY 4.0 (in `LICENSE`) is the intended reuse term, or swap it.
- [ ] **CITATION.cff** — add ORCIDs, approved co-authors, and the real repo `url`.
- [ ] **Owner name in URL** — your published URL will be
      `https://YOUR-OWNER-NAME.github.io/m2-blaipi-public/`.

## Safety checks (nothing private should appear anywhere public)
- [ ] No patient, cohort, or restricted data.
- [ ] No credentials, tokens, API keys, cloud paths, or passwords.
- [ ] No internal notes, mentor feedback, grading materials, or student performance info.
- [ ] No private GitHub links (Issues, Discussions, Wiki, Project boards, private files).
- [ ] No phone numbers or personal emails (the source documents contain several — keep them out).
- [ ] No preliminary result presented as an established conclusion. The current site
      describes aims and planned analyses only; it does NOT report findings. Do not add
      a pathway signature map, model performance numbers, or directionality calls until
      those results are reviewed and approved for public release.

## Functionality checks
- [ ] Homepage loads.
- [ ] Every nav link works (`research.html`, `methods.html`, `team.html`, `updates.html`, `contact.html`).
- [ ] CSS loads (file is at `docs/assets/css/style.css`; HTML references `assets/css/style.css`).
- [ ] Any downloadable PDF added later is intended for public distribution.
- [ ] Test once in a private/incognito window before announcing.

## Enabling GitHub Pages (after committing these files)
Settings → Pages → Build and deployment:
- Source: **Deploy from a branch**
- Branch: **main**
- Folder: **/docs**
- Save, then use **Visit site** once deployment finishes.
