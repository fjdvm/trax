<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project structure

```
app/
  layout.tsx, globals.css        root layout, fonts, design tokens (@theme)
  icon.svg                       favicon, the Trax mark
  (marketing)/                   public landing page, served at /
    page.tsx                     composes the sections, nothing else
    _components/                 sections and helpers used only by this route
components/
  ui/                            shared primitives with no page knowledge
                                 (button, badge, asset, reveal, section-heading)
public/
  landing/                       SVGs exported from Figma for the landing page
```

- Put code next to the route that uses it in a private `_components/` folder. Move it to `components/ui/` only when a second route needs it and it knows nothing about either page.
- New product areas get their own route group, such as `app/(board)/`, with the same `page.tsx` plus `_components/` shape. The Figma file has frames for the listings board, listing detail, deadline calendar, For You, and add listing.
- Import across folders with the `@/` alias, and inside one folder with `./`.
- One component per file, named in kebab-case after the component.
- Colours come from the `@theme` tokens in `globals.css`, never hex values in components.
- Export design assets into `public/<area>/` and never link temporary Figma asset URLs.

# Working in worktrees

Build every feature, fix or other change in its own git worktree, never directly in the main checkout. Create it before you write any code (Claude Code: `EnterWorktree`; otherwise `git worktree add .claude/worktrees/<name> -b <branch>`), run `npm ci` there, and do all edits, commits and checks from inside it. Leave the main checkout on its current branch, untouched.

A fresh worktree may branch from `origin/main` or the initial commit and miss commits that only exist on your current local branch. Check `git log` after creating it and fast-forward or merge the branch you meant to build on.
