# Intentional Spark

# Prompt for AI Coding Agent — Pikup Prototype (v2: Intentionality Pivot)

## Product description
A lightweight web app (built mobile-responsive, with an eye toward an eventual desktop companion) for solo developers working on one personal passion project, whether coding, game dev, or AI-assisted work. It is not a task manager and does not replace one. Its one job: at the end of each work session, the user names ONE thing they intend to work on next. At the start of the following session, the app asks them to honestly judge whether they actually did that. Deep work hours are tracked alongside this, but the emotional core of the app is a sense of **intentional, trustworthy progress**, not raw hours or speed of getting started.

## Need, Persona, Capability, Value
- **Need:** Solo developers, especially those moving fast with AI assistance, can produce a large volume of output without a reliable way to know if it was the *right* output. By the time a session goes sideways, the hours are already spent, and there's no habit of checking afterward whether the work actually matched what was intended.
- **Persona:** Solo developers (coders, game devs, AI-assisted builders) working on one personal project in short, scattered sessions around other commitments. Likely already uses some task manager (Trello, Notion, etc.) for their full backlog, this app is not meant to replace that.
- **Capability:** State one intended next step at the end of a session, see it again at the start of the next one, and self-report (yes / partially / no) whether the actual work matched it.
- **Fundamental value (lead with this): Intentionality.** The payoff is confidence that limited hours went toward what actually mattered, not just toward *something*. This replaces "instant momentum" as the headline value, momentum/friction-reduction is still a mechanism (the timer, the visible last note), but it is in service of intentionality, not the point itself.

**Affordance sentence the first-time user must get immediately:** *"Know you're working on the right thing."*

## Platform
Build as a responsive web app first (works well on both desktop browser and mobile browser). Do not build native desktop packaging in this prototype, just keep the layout and interactions clean enough that a future desktop wrapper would be trivial.

## Visual style
Keep the sketchbook / hand-drawn, personal notebook aesthetic (tape accents, dashed borders, warm off-white background, handwritten-style type) from the earlier version, this is a personal tool, not corporate software. Layer in a Finch/Habitica-style visual growth element: a doodled plant that grows over the week (see Screen 3 below), rendered in the SAME hand-drawn style, not a generic game-asset style, it should look like it was sketched into the same notebook as the rest of the app, not pasted in from a different app.

## Scope constraints (explicit, do not exceed)
- Single project only. No multi-project switching, no project creation flow, assume one ongoing project.
- No task list, backlog, or to-do structure of any kind. The "next intention" field is ONE short freeform text entry, not a list.
- No AI-generated suggestions for what to work on next. The intention must always be written by the user. This is a deliberate, load-bearing design constraint, do not add any "suggest a next step" feature.
- No integration with Trello/Notion/other PM tools. Plain text only, the user can paste a reference into it if they want, but no linking/API.
- Mock/local data is fine for this prototype. No auth, no backend database required.

## The three screens

### 1. Main Timer Screen (landing)
- Shows the note from the last session: what was worked on, and the stated "next intention", displayed prominently, in the dashed-border sticky-note style from before.
- Large count-up stopwatch below it (not a countdown), with a single prominent Start button.
- Once running: Pause/End Session controls, visually secondary to the timer. Timer should be collapsible/hideable once running, since users found a visible running timer distracting.
- For a first-time user with no prior session: show a placeholder note explaining that their first note appears after their first session.
- Small, unobtrusive link to the Weekly Progress screen.

### 2. End-of-Session Screen
This screen now has TWO parts, in this order:
1. **Follow-through check (new):** Show the user their own "next intention" from last session verbatim, and ask: *"Did you work on this?"* with three simple options: Yes / Partially / No. This must be a direct self-report, not inferred or AI-judged.
2. **New note prompts:** Two short fields, same as before:
   - What did you work on this session?
   - What's the one thing you plan to work on next time? (Emphasize ONE thing, this is a deliberate narrowing exercise, not a list.)
- Keep this screen fast, under 30 seconds to complete. No optional extra fields.

### 3. Weekly Progress Screen
- Two headline metrics shown with EQUAL visual weight, side by side: total deep work hours this week, and follow-through rate this week (e.g., "6.5 hrs" next to "4 of 5 sessions: on track"). Neither should be styled as primary/secondary, they're a pair.
- Visual growth element: a doodled, hand-drawn plant that visibly grows (new leaves, height, maybe a small bloom at higher milestones) as the week progresses. Growth should track consistent follow-through (not just hours logged). It should read as "my project is coming along," not "I used the app a lot."
- Unlockable stickers: tied to follow-through milestones within the week (e.g., "3 sessions in a row on track"). Stickers are WEEKLY: the set of unlocked stickers resets at the start of each new week, so the user is always working toward fresh unlocks, not a permanently accumulating collection.
- When the user taps/selects an unlocked sticker, it gets pinned onto the Main Timer Screen (e.g., visually placed near the note or timer, like a sticker stuck onto a notebook page). This is the main payoff loop: earn it here, see it decorating your main screen.
- Clear link back to the Main Timer Screen.

## Navigation
All three screens must have obvious, consistent navigation back to the Main Timer Screen.

## Tone reminders for the agent
- The follow-through check must never feel punitive or guilt-inducing (avoid red "failure" styling for "No", frame it neutrally, e.g., a soft, non-judgmental visual treatment for all three options).
- The visual growth element should feel like quiet encouragement, not a competitive leaderboard or RPG battle mechanic.
- Everything should look like it belongs in the same hand-drawn notebook, consistent typography, color palette, and line style across all three screens.





a few adjustments to that:

i actually would like to show deep work hours alongside the follow-through rates. both should be equal importance on the weekly summary screen. stickers shluld be unlockable each week, resetting on the next week. also include the fact that the stickers are pinned to the main timer screen when you select them.
also let's go with a doodled plant growing to show the progress

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/67ce6bcc-f12a-48a5-993a-b0383463a3ed).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
