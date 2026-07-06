# Teaching Notes — Zero Architecture

## Learner profile
- Experienced Go developer. Do NOT explain Go syntax, goroutines, channels,
  interfaces, or modules. Explain *architectural decisions* and *why the code is
  shaped this way*.
- Git user on this machine: `smallnest`. Working dir: `/Users/chaoyuepan/ai/zero`.

## Workspace
- Teaching workspace is the SIBLING dir `/Users/chaoyuepan/ai/zero-learn`, kept
  out of the Zero git repo (learner chose this to avoid polluting a clean checkout).
- Lessons reference Zero source via relative path `../zero/...`.

## Teaching style for this mission
- Every architectural claim cites `file:line`. The learner values source-grounded
  accuracy over hand-waving.
- Keep lessons short; one architectural idea each. Prefer tracing real code paths
  over abstract diagrams.
- Reserve `learning-records/` for demonstrated understanding, not coverage.

## Preferences observed
- Lessons must be written in **Chinese (中文)**. Code, identifiers, and file:line
  citations stay as-is; prose/quizzes/callouts in Chinese. (Requested after
  Lesson 1 was first drafted in English.)
