# Mission: Understand the architecture of the Zero coding agent

## Why
I want to deeply understand how a modern terminal coding agent is designed —
the turn loop, tool dispatch, permission/sandbox model, context management, and
TUI — by reading Zero's real source (`github.com/Gitlawb/zero`, ~68 internal
packages). The goal is a working mental model of "how a coding agent actually
works" from the inside, not a surface tour.

## Success looks like
- I can trace a single user prompt end-to-end: prompt → provider stream → tool
  calls → tool results → next turn → final answer, naming the concrete Zero
  functions at each step.
- I can explain how Zero decides whether a turn is "done" vs. needs another turn.
- I can explain the permission/sandbox decision path for a dangerous tool call.
- I can explain how context stays under the model's window (proactive vs.
  reactive compaction).
- I could sketch the minimal architecture of a comparable agent myself.

## Constraints
- Experienced Go developer — assume goroutines, interfaces, channels, modules.
  Explain the *design decisions*, not the language.
- Study by reading Zero's real code; every claim ties to a file:line.
- Short, self-contained lessons; one architectural idea each.

## Out of scope (for now)
- Contributing PRs / fixing bugs (this is study, not contribution).
- Provider-specific API wire formats (OpenAI vs Anthropic encoding details).
- Build/release tooling, npm wrapper, installers.
