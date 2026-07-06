# Zero Coding Agent — Architecture Resources

## Knowledge (primary source: the repo itself)

- [Zero source — `internal/agent/loop.go`](../zero/internal/agent/loop.go)
  The heart of the agent: the `Run` turn loop (line 107). Single most important
  file. Use for: turn lifecycle, completion gate, tool dispatch, compaction hooks.
- [Zero source — `internal/agent/loop.go:774` `executeToolCall`](../zero/internal/agent/loop.go)
  Tool dispatch + permission + sandbox retry logic. Use for: how one tool call runs.
- [Zero source — `internal/agent/guardrails.go`](../zero/internal/agent/guardrails.go)
  Runaway/empty-turn/repeated-failure guards. Use for: how the loop stays bounded.
- [Zero source — `internal/agent/compaction.go`](../zero/internal/agent/compaction.go)
  Proactive + reactive context compaction. Use for: staying under the window.
- [Zero source — `internal/agent/system_prompt.go` / `.md`](../zero/internal/agent/system_prompt.go)
  How the system prompt is assembled. Use for: prompt construction.
- [Zero source — `internal/zeroruntime/types.go:209` `Provider`](../zero/internal/zeroruntime/types.go)
  The `Provider` interface — the seam between the loop and any LLM. Use for:
  understanding the core abstraction.
- [Zero source — `internal/tools/`](../zero/internal/tools/)
  Tool implementations + `Registry`. Use for: what a tool is, how it's registered.
- [Zero README](../zero/README.md) and [AGENTS.MD](../zero/AGENTS.MD)
  Project overview + agent behavior contract. Use for: the big picture.

## Wisdom (Communities)
- Not yet identified. The agent-building space lives on GitHub, HN, and the
  Charm/Bubble Tea Discord (Zero's TUI is built on Bubble Tea). Surface concrete
  links in a later session when the user wants to test ideas against others.

## Gaps
- No high-level architecture doc in the repo yet (no ARCHITECTURE.md). Lessons
  will reconstruct it from source — this is expected for an internals study.
