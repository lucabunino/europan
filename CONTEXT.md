# Europan

Sanity-backed SvelteKit site for the Europan architecture competition. Competitions have editions, results (winning projects), jury, and sites.

## Language

**Attachment**:
A downloadable file of any type (not just PDF) with an editor-set title, attached to a document. Stored as an array field `{attachmentTitle, attachmentFile}` — pattern shared across `page`, `news`, and (new) `competition` documents. On competition results pages, each attachment renders as a black/gray-hover button grid item, positioned before the project results.
_Avoid_: File, download, asset (these refer to the raw Sanity file object, not the editorial unit)

**CTA text**:
The visible label on an attachment button. Sourced directly from `attachmentTitle` — no separate label field.

**Featured project**:
A submitted competition entry that placed (winner/finalist/special mention), shown in the results grid. Fetched via `*[_type == "project" && references(^._id)]`, not a field on `competition` itself.
_Avoid_: Entry, submission

**Results grid**:
The 2-column grid of featured projects shown on a competition's results page (`/competitions/[slug]/results`, or consolidated on one page for archived editions at `/archive/[slug]`). Attachments render as additional grid items, first in order, sized to match the project image box (`.project-img-container`).

**Menu-featured competition**:
A competition with `displayInMenu = true`. Multiple competitions can be menu-featured at once — no enforced singleton. The newest menu-featured competition (highest edition) is always the [[nested competition]]; any older menu-featured competitions each get their own top-level nav pill (e.g. "E17"), listed after "Competitions".
_Avoid_: Active competition, current competition (editorial visibility is independent of edition recency)

**Nested competition**:
The one competition whose topic/process/sites/jury/results links are nested directly under the generic "Competitions" menu item, rather than getting a top-level pill of their own. This is the newest menu-featured competition; if none are menu-featured, it falls back to the site's true latest competition (same links, same nesting). There is always exactly one nested competition, never zero.
_Avoid_: Fallback competition (fallback is only the zero-flagged special case of this — the nesting rule is unconditional, not just a fallback)

**Edition sub-page**:
One of topic/process/sites/jury/results — content scoped to a single competition edition, always addressed via `/competitions/[slug]/{section}`. Distinct from the two edition-independent pages under "Competitions" (what-is-europan, promoter).
