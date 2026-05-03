# PVD Mayor 2026

Independent analytical resource on the 2026 Providence mayoral race.

## Stack

- **Astro** — static site generator with native Markdown support
- **Vercel** — deployment (auto-deploys on push to `main`)
- **GitHub** — content version history

## Local dev

```bash
npm install
npm run dev
```

## Deployment

Push to `main` → Vercel auto-deploys. Takes ~60 seconds.

---

## How to update content

### Adding or editing an issue

All issues live in `src/content/issues/`. Each is a Markdown file with YAML frontmatter.

**To edit a position, action, or argument:**
Open the relevant `.md` file and edit the frontmatter fields directly.

**To add a new issue:**
Copy `housing.md` to a new file (e.g., `transportation.md`), update all fields, set `order` to control homepage position.

**Frontmatter schema:**

```yaml
---
title: Issue Title
summary: One-sentence summary shown on homepage card.
order: 3                          # homepage sort order
updated: "2026-05-01"            # shown as "Last updated"
context: >
  1–2 paragraph background. Optional but recommended.

smiley:
  position: "One paragraph on their stance."
  actions:
    - "Specific documented action, with date if known"
    - "Another action"
  args_for:
    - "Best argument in favor of their position"
  args_against:
    - "Best argument against their position"

morales:
  position: "..."
  actions:
    - "..."
  args_for:
    - "..."
  args_against:
    - "..."

sources:
  - label: "Source name — publication (date)"
    url: "https://..."
  - label: "Source with no link"
---

Extended analysis goes here as regular Markdown prose.
This appears below the comparison table on the issue page.
```

**Always update the `updated` date when you change an issue.**

---

## Issues to add

- [ ] Public schools & education
- [ ] Transportation & infrastructure  
- [ ] Immigration & sanctuary city policy
- [ ] Public safety & police accountability
- [ ] Food security & SNAP
- [ ] Arts & culture infrastructure
- [ ] Climate & environment

## Content principles

1. Every claim in frontmatter must be sourceable. Add to `sources`.
2. `args_for` and `args_against` are about the *position*, not the candidate personally.
3. Analysis prose (below frontmatter) is where editorial judgment lives. Be direct.
4. If a candidate has not stated a position, write: "No stated position as of [date]."
5. Flag internal polls as such.
