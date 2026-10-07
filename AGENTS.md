<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep timer, end-session, and weekly progress in distinct TanStack routes inside one shared notebook shell, so navigation preserves session state.
- Use a shared React provider and browser-local persistence for this explicitly local-only prototype; never introduce authentication or a database for this scope.
- Measure count-up time from timestamps, persisting elapsed and running state, so tab throttling and refresh do not lose work time.
- Use local Monday-based calendar weeks for metrics, sticker eligibility, and pinned sticker visibility, so all weekly resets stay aligned.
- Treat only explicit Yes responses as on track; exclude first sessions without a previous intention from the follow-through denominator.
- Keep the progressive plant illustration and sticker artwork in shared components with palette roles in the global design system for consistent notebook visuals.
