---
shaping: true
---

# All Valley Open 2026 Leaderboards — Shaping

## Requirements (R)

| ID | Requirement | Status |
|----|-------------|--------|
| R0 | Display individual athlete leaderboards by division (Men's Open, Women's Open) | Core goal |
| R1 | Display a "Fittest Gym" leaderboard aggregating athlete scores by registered affiliate | Core goal |
| R2 | Leaderboards update as scores are submitted during the competition window | Must-have |
| R3 | Gym score = sum of top 6 individual athlete totals per gym | Must-have |
| R4 | Works within existing MWFC Next.js site architecture | Must-have |
| R5 | Data sourced from PlanetScale DB (wodsmith production data) | Must-have |
| R6 | Gym leaderboard scoring method is transparent to viewers | Nice-to-have |
| R7 | Leaderboard is shareable / linkable (unique URL) | Undecided |

---

## CURRENT: Existing System

| Part | Mechanism |
|------|-----------|
| **C1** | Competition hosted on WODsmith Compete platform at wodsmith.com |
| **C2** | Standard leaderboard lives on Competition Corner (external link from MWFC nav) |
| **C3** | Scores stored in `scoresTable` with `sortKey` for ranking; `getCompetitionLeaderboard()` computes points (100/95/90/...) per event per division |
| **C4** | Athlete affiliate stored in `competitionRegistrationsTable.metadata.affiliateName` or `.metadata.affiliates[userId]` |
| **C5** | MWFC site is static export to Cloudflare Pages — no server-side rendering, no API routes |
| **C6** | Data fetching pattern: React Query polling external APIs (Competition Corner) with 1-min refetch |

---

## A: Next.js API Routes + Direct DB

| Part | Mechanism | Flag |
|------|-----------|:----:|
| **A1** | Remove `output: "export"` from next.config, deploy as server-rendered (Vercel/Node) | |
| **A2** | API route `/api/leaderboard/[competitionId]` queries PlanetScale directly using drizzle ORM | |
| **A3** | Reuse/port `getCompetitionLeaderboard()` logic from wodsmith-start for division leaderboards | |
| **A4** | New `getGymLeaderboard()` function: group athletes by affiliate from registration metadata, aggregate points per gym | |
| **A5** | New `/all-valley-open` page with tabs: Division view + Gym view | |
| **A6** | React Query polls API routes on interval for near-real-time updates | |

**Trade-offs:** Requires migrating off static export + Cloudflare Pages. Full control over data layer. Biggest infrastructure change.

---

## B: Cloudflare Worker API (Effect TS) + Static Frontend ← SELECTED

| Part | Mechanism | Flag |
|------|-----------|:----:|
| **B1** | Keep static export and Cloudflare Pages deployment | |
| **B2** | New Cloudflare Worker using Effect TS for service layer | |
| **B3** | DB access via `@planetscale/database` (HTTP driver, CF Worker compatible) + Drizzle ORM (`drizzle-orm/planetscale-serverless`) for type-safe queries | |
| **B4** | Division leaderboard: port scoring logic from `getCompetitionLeaderboard()` — rank athletes per event per division, assign points (100/95/90/...), sum across events | |
| **B5** | Gym leaderboard: group athletes by `registration.metadata.affiliateName`, compute individual totals, take top 6 per gym, sum | |
| **B6** | Worker exposes `GET /leaderboard/:competitionId?type=division|gym` returning JSON | |
| **B7** | Response cached at edge (e.g., `Cache-Control: max-age=60` or CF Cache API) so not recomputing on every request | |
| **B8** | Frontend `/all-valley-open` page fetches from Worker via React Query (same polling pattern as current Competition Corner integration) | |
| **B9** | New `/all-valley-open` page with tabs: Division view + Gym view | |

**Spike findings (Effect + PlanetScale on CF Workers):**
- `@effect/sql-mysql2` uses TCP — **won't work** on CF Workers
- `@planetscale/database` is HTTP-based — **works** on CF Workers
- `@effect/sql-drizzle` can bridge Drizzle into Effect's SQL layer
- Simplest path: Effect for services/error handling, Drizzle + `@planetscale/database` for DB
- All three libs are well-maintained and production-ready

---

## C: WODsmith API Endpoint + Static Frontend

| Part | Mechanism | Flag |
|------|-----------|:----:|
| **C1** | Keep static export and Cloudflare Pages deployment | |
| **C2** | Add new API endpoint in wodsmith-start app: `/api/competitions/[id]/leaderboard` returning division + gym leaderboard JSON | ⚠️ |
| **C3** | Endpoint reuses existing `getCompetitionLeaderboard()` for divisions, adds gym aggregation layer | |
| **C4** | Frontend leaderboard page fetches from wodsmith API via React Query | |
| **C5** | New `/all-valley-open` page with tabs: Division view + Gym view | |

**Trade-offs:** Least work on MWFC side. Depends on deploying changes to wodsmith-start. Natural place for leaderboard logic. CORS needed.

---

## Open Questions for User

### ~~Q1: Gym Score Aggregation Method~~ ✅ RESOLVED

**Decision:** Sum of top 6 individual athlete total points per gym. Caps contribution at 6, handles unequal rosters.

### ~~Q2: Minimum Gym Roster~~ ✅ RESOLVED

**Decision:** No minimum. Any gym with at least 1 registered athlete appears on the gym leaderboard. Controlled competition, not a concern.

### ~~Q3: Deployment Preference~~ ✅ RESOLVED

**Decision:** Shape B — Cloudflare Worker API with Effect TS. Keeps static frontend, adds Worker for data layer.

---

## Fit Check

| Req | Requirement | Status | A | B | C |
|-----|-------------|--------|---|---|---|
| R0 | Display individual athlete leaderboards by division | Core goal | ✅ | ✅ | ✅ |
| R1 | Display a "Fittest Gym" leaderboard aggregating athlete scores by registered affiliate | Core goal | ✅ | ✅ | ✅ |
| R2 | Leaderboards update as scores are submitted | Must-have | ✅ | ✅ | ✅ |
| R3 | Gym score = sum of top 6 individual athlete totals per gym | Must-have | ✅ | ✅ | ✅ |
| R4 | Works within existing MWFC Next.js site architecture | Must-have | ❌ | ✅ | ✅ |
| R5 | Data sourced from PlanetScale DB | Must-have | ✅ | ✅ | ✅ |
| R6 | Gym leaderboard scoring method transparent to viewers | Nice-to-have | ✅ | ✅ | ✅ |
| R7 | Leaderboard is shareable / linkable | Undecided | ✅ | ✅ | ✅ |

**Notes:**
- A fails R4: Requires removing static export, changing deployment from Cloudflare Pages to Vercel/Node
- 🟡 B selected: all ⚠️ flags resolved by spike (Effect + Drizzle + @planetscale/database over HTTP)
- R3 resolved: top 6 athletes per gym, summed
