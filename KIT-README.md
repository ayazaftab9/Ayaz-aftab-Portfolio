# Antigravity Web Developer Kit

Drop these into the root of your website project folder, then open that folder in Google Antigravity.

```
your-project/
├── AGENTS.md            always-on rules: the senior developer persona and standards
├── BRIEF.md             fill this in for each project
└── .agents/
    └── skills/
        ├── website-discovery/SKILL.md
        ├── design-system/SKILL.md
        ├── human-copywriting/SKILL.md
        ├── frontend-build/SKILL.md
        ├── seo-setup/SKILL.md
        ├── quality-audit/SKILL.md
        └── launch-checklist/SKILL.md
```

The `.agents` folder starts with a dot, so it may be hidden in your file manager. Turn on "show hidden files" if you cannot see it.

## How to use

1. Fill in `BRIEF.md`.
2. Paste this into the Antigravity agent:

```
Read BRIEF.md and follow AGENTS.md. Use the website-discovery skill to produce an implementation plan: strategy summary, sitemap, a section-by-section outline of every page, and your recommended tech stack with reasons. Ask me up to five questions if anything important is missing. Stop after the plan and wait for my approval before writing any code.
```

3. After you approve the plan, continue with:

```
Plan approved. Create the design system, then build the home page first. Check it in the browser at mobile and desktop widths, show me screenshots, and wait for my feedback before building the other pages.
```

4. When all pages are built:

```
Run the quality-audit skill on the whole site, fix what you find, then give me the launch checklist.
```

The agent picks up skills on its own when a task matches. To force one, name it in your message or type `/` followed by the skill name.

To reuse the skills in every project, copy the skill folders to `~/.gemini/config/skills/` instead.
