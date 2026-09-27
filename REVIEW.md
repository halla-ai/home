# Review instructions

Read by the required OCR delegation reviewer (Claude Code, Codex, or Kimi Code),
additional `/codex:review` or `/code-review` passes, and human reviewers alike.

## Passes

Run these passes and tag every finding with its pass:

- Bugs: logic errors, broken edge cases, regressions.
- Security: injection, auth gaps, secrets or PII in logs and diffs.
- Compliance: the change matches the issue spec and the approved plan.
  Workflow changes (`.github/workflows/`) are checked for timeouts, concurrency,
  and one build per commit.
- Instruction prose (changes to AGENTS.md, SKILL.md, or prompts): for each "do not X", would
  "do Y" alone keep the force and the boundary? Keep it for safety, permission, and contract
  boundaries. Would the principle generalize better without an example? Keep examples that fix
  a format or a high-failure behavior. Is a chain of cases standing in for a judgment? Does a new
  directive name the failure it prevents? Nits unless runtime behavior changes.

## Repo focus

Content rules from `AGENTS.md` and `README.md` that the Compliance pass checks:

- Bilingual parity: content and pages land in both `ko/` and `en/` with the same filename,
  and every Korean page has its English mirror under `src/pages/en/`.
- The English university name is "Cheju Halla University", never "Jeju Halla University".
- A research project is registered only with a named supervising professor or principal
  investigator, and its page ends with the Research Information section.
- Images under `astro/public/images/` are at most 1920px wide, and file names contain no
  Korean characters.

## Findings

Each finding carries its pass, severity, evidence (`file:line` or a reproduction), and provenance:
introduced by this change, pre-existing, or indeterminate. Pre-existing findings go to a follow-up
issue instead of widening the change. Report what was reviewed and what was not reached.

## Re-review

Give the reviewer the diff, the spec, and this file only: no fix-status claims, earlier dispositions,
or do-not-reflag notes. Judge recurrence by the violated invariant, not by wording.

## What Important means here

Reserve Important for findings that break behavior, leak data, or breach a policy.
Style and naming are nits.

## Cap the nits

Report at most 5 nits per review; summarize the rest as a count.

## Do not report

- Generated paths: `astro/pnpm-lock.yaml`, `astro/dist/`, `astro/.astro/`, and the
  architecture blueprint outputs `docs/halla-ai-rendered.html` and
  `docs/halla-ai-rendered.visual-check.*` (rendered from `docs/halla-ai.architecture.json`)
- Anything CI already enforces: nothing runs on pull requests. `.github/workflows/deploy.yaml`
  runs `pnpm install --frozen-lockfile` and `pnpm build` in `astro/` only on push to `main`,
  so a build or content-schema break is still in scope on a PR.

## Feedback into AGENTS.md

When the same finding appears twice, the correction goes into `AGENTS.md` in the same PR.

---

Findings require evidence-based disposition. Merge gates and review routing follow the
owner's development lifecycle.
