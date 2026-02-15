---
shaping: true
---

# All Valley Open 2026 Leaderboards — Slices

## Detail B: Breadboard

### Places

| # | Place | Description |
|---|-------|-------------|
| P1 | Leaderboard Page | MWFC frontend `/all-valley-open` — tabs for Division and Gym views |
| P2 | CF Worker API | Cloudflare Worker (Effect TS) — computes and serves leaderboard JSON |
| P3 | PlanetScale DB | Data store — competitions, registrations, scores |

### UI Affordances

| # | Place | Component | Affordance | Control | Wires Out | Returns To |
|---|-------|-----------|------------|---------|-----------|------------|
| U1 | P1 | leaderboard-page | "Division" tab | click | → N1 | — |
| U2 | P1 | leaderboard-page | "Gym" tab | click | → N1 | — |
| U3 | P1 | division-leaderboard | division selector (Men's Open / Women's Open) | click | → N2 | — |
| U4 | P1 | division-leaderboard | athlete table (rank, name, affiliate, per-event pts, total) | render | — | — |
| U5 | P1 | division-leaderboard | event column headers (26.1, 26.2, 26.3) | render | — | — |
| U6 | P1 | gym-leaderboard | gym table (rank, gym name, athlete count, top-6 total) | render | — | — |
| U7 | P1 | gym-leaderboard | expandable gym row → shows contributing athletes | click | → N3 | — |
| U8 | P1 | leaderboard-page | loading spinner | render | — | — |
| U9 | P1 | leaderboard-page | scoring explainer ("Top 6 athletes per gym, points: 100/95/90...") | render | — | — |

### Code Affordances

| # | Place | Component | Affordance | Control | Wires Out | Returns To |
|---|-------|-----------|------------|---------|-----------|------------|
| N1 | P1 | leaderboard-page | `activeTab` state | write | store | → U4, U6 |
| N2 | P1 | division-leaderboard | `selectedDivision` state | write | store | → N5 |
| N3 | P1 | gym-leaderboard | `expandedGym` state | write | store | → U7 |
| N4 | P1 | leaderboard-page | React Query `useLeaderboard(competitionId)` | call | → N10 | → S10 |
| N5 | P1 | division-leaderboard | filter `S10.divisions` by `selectedDivision` | read | — | → U4, U5 |
| N6 | P1 | gym-leaderboard | read `S10.gyms` | read | — | → U6 |
| N10 | P2 | worker | `GET /leaderboard/:competitionId` handler | call | → N11 | → N4 |
| N11 | P2 | worker | `LeaderboardService.getLeaderboard()` (Effect) | call | → N12, → N13, → N14, → N15, → N16, → N17 | → N10 |
| N12 | P2 | worker | query registrations: athletes + affiliate from `metadata.affiliateName` | call | → S1, S2 | → N15 |
| N13 | P2 | worker | query scores: all scores for competition events | call | → S3, S4 | → N15 |
| N14 | P2 | worker | query divisions: scaling levels for this competition | call | → S5 | → N15 |
| N15 | P2 | worker | `computeDivisionLeaderboard()`: per event rank by sortKey → assign pts (100/95/90) → sum across events → tiebreak | call | — | → N16, N11 |
| N16 | P2 | worker | `computeGymLeaderboard()`: group athletes by affiliate → take top 6 totals per gym → sum → rank | call | — | → N11 |
| N17 | P2 | worker | Edge cache: `Cache-Control: s-maxage=60` | write | — | — |

### Data Stores

| # | Place | Store | Description |
|---|-------|-------|-------------|
| S1 | P3 | `competitions` | Competition record (id, settings, scoringConfig) |
| S2 | P3 | `competitionRegistrations` | Athlete registrations (userId, divisionId, `metadata.affiliateName`) |
| S3 | P3 | `scores` | Per-event scores (userId, workoutId, scoreValue, sortKey, status) |
| S4 | P3 | `competitionEvents` | Events for this competition (workoutId, pointsMultiplier) |
| S5 | P3 | `scalingLevels` | Divisions (id, label — "Men's Open", "Women's Open") |
| S10 | P1 | `leaderboardData` | React Query cache: `{ divisions: [...], gyms: [...] }` |

---

## Slicing

### Slice Summary

| # | Slice | Parts | Affordances | Demo |
|---|-------|-------|-------------|------|
| V1 | Worker serves division leaderboard | B2, B3, B4 | N10–N15, N17, S1–S5 | `curl /leaderboard/:id` → JSON with ranked athletes per division |
| V2 | Worker serves gym leaderboard | B5 | N16 | `curl /leaderboard/:id` → JSON includes gym rankings (top 6 summed) |
| V3 | Division leaderboard page | B8, B9 | U1, U3–U5, U8, N1, N2, N4, N5, S10 | Open `/all-valley-open`, see athlete table with scores by division |
| V4 | Gym leaderboard page | B9 | U2, U6, U7, U9, N3, N6 | Click "Gym" tab, see gym rankings with expandable rows |

---

### V1: Worker serves division leaderboard

**Demo:** `curl https://api.mwfc.com/leaderboard/comp_xxx` returns JSON with ranked athletes per division, per-event points, and totals.

| # | Place | Component | Affordance | Control | Wires Out | Returns To |
|---|-------|-----------|------------|---------|-----------|------------|
| N10 | P2 | worker | `GET /leaderboard/:competitionId` handler | call | → N11 | → caller |
| N11 | P2 | worker | `LeaderboardService.getLeaderboard()` | call | → N12, N13, N14, N15, N17 | → N10 |
| N12 | P2 | worker | query registrations | call | → S1, S2 | → N15 |
| N13 | P2 | worker | query scores | call | → S3, S4 | → N15 |
| N14 | P2 | worker | query divisions | call | → S5 | → N15 |
| N15 | P2 | worker | `computeDivisionLeaderboard()` | call | — | → N11 |
| N17 | P2 | worker | edge cache 60s | write | — | — |

**What this sets up:**
- Cloudflare Worker project with Effect TS
- Drizzle ORM + `@planetscale/database` connection
- Scoring algorithm ported from `getCompetitionLeaderboard()`
- Deployed and callable

---

### V2: Worker serves gym leaderboard

**Demo:** Same `curl` now also returns `gyms: [{ name, athleteCount, top6Total, athletes: [...] }]` ranked.

| # | Place | Component | Affordance | Control | Wires Out | Returns To |
|---|-------|-----------|------------|---------|-----------|------------|
| N16 | P2 | worker | `computeGymLeaderboard()` | call | — | → N11 |

**What this adds:**
- Takes division leaderboard output from V1
- Groups athletes by `affiliateName`
- Per gym: sort athletes by total pts descending, take top 6, sum
- Rank gyms by total
- Appends `gyms` array to response

---

### V3: Division leaderboard page

**Demo:** Open `/all-valley-open` on MWFC site. See athlete table for Men's Open. Toggle to Women's Open. Loading state while fetching.

| # | Place | Component | Affordance | Control | Wires Out | Returns To |
|---|-------|-----------|------------|---------|-----------|------------|
| U1 | P1 | leaderboard-page | "Division" tab | click | → N1 | — |
| U3 | P1 | division-leaderboard | division selector | click | → N2 | — |
| U4 | P1 | division-leaderboard | athlete table | render | — | — |
| U5 | P1 | division-leaderboard | event column headers | render | — | — |
| U8 | P1 | leaderboard-page | loading spinner | render | — | — |
| N1 | P1 | leaderboard-page | `activeTab` state | write | store | → U4 |
| N2 | P1 | division-leaderboard | `selectedDivision` state | write | store | → N5 |
| N4 | P1 | leaderboard-page | `useLeaderboard()` | call | → N10 | → S10 |
| N5 | P1 | division-leaderboard | filter by division | read | — | → U4, U5 |
| S10 | P1 | — | leaderboardData cache | — | — | → N5, N6 |

---

### V4: Gym leaderboard page

**Demo:** Click "Gym" tab. See ranked gym table. Click a gym row to expand and see the 6 contributing athletes. Scoring explainer visible.

| # | Place | Component | Affordance | Control | Wires Out | Returns To |
|---|-------|-----------|------------|---------|-----------|------------|
| U2 | P1 | leaderboard-page | "Gym" tab | click | → N1 | — |
| U6 | P1 | gym-leaderboard | gym table | render | — | — |
| U7 | P1 | gym-leaderboard | expandable gym row | click | → N3 | — |
| U9 | P1 | leaderboard-page | scoring explainer | render | — | — |
| N3 | P1 | gym-leaderboard | `expandedGym` state | write | store | → U7 |
| N6 | P1 | gym-leaderboard | read `S10.gyms` | read | — | → U6 |
