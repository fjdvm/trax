<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Working in worktrees

Build every feature, fix or other change in its own git worktree, never directly in the main checkout. Create it before you write any code (Claude Code: `EnterWorktree`; otherwise `git worktree add .claude/worktrees/<name> -b <branch>`), run `npm ci` there, and do all edits, commits and checks from inside it. Leave the main checkout on its current branch, untouched.

A fresh worktree may branch from `origin/main` or the initial commit and miss commits that only exist on your current local branch. Check `git log` after creating it and fast-forward or merge the branch you meant to build on.
