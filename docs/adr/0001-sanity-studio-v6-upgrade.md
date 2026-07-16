# Upgrade Sanity Studio v3 to v6 now, not deferred

Backend deps (Sanity Studio, its plugins, React, TypeScript, ESLint) were 2+ major versions behind. A prior security-only pass explicitly deferred the v3→v6 jump as needing its own review, since it's a breaking upgrade (config/plugin API, some renamed APIs like desk structure). Revisited and decided to do it now rather than keep deferring, since the codebase has no custom React/JSX schema components (`react`/`react-dom` are purely internal to Studio's own runtime), which removes the main source of expected breakage.

Done on a throwaway branch, sequenced in three stages (Sanity core + React, then plugins, then tooling) so a failure is attributable to a specific stage. Verified via `sanity build` (compile-time check only — no headless browser available in this environment); manual click-through in the Studio UI is the user's responsibility before merging.
