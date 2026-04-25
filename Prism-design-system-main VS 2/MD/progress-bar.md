# Progress Bar

A Progress Bar communicates the completion status of an operation or task as a percentage fill along a horizontal track. It supports four semantic colour variants, three sizes, determinate and indeterminate modes, a disabled state, and toggleable label/value text.

**Figma source:** [UEMS Design System 3.0 — Progress loader page](https://www.figma.com/design/DahIgbIJrSkzyP3OoHaDaG/UEMS---Design-System-3.0?node-id=17012-973360)  
**Component node:** `17012:973360` (Progress Bar component set)  
**Last updated:** 2026-04-14

---

## Anatomy

**Determinate (with label row)**
```
┌─ Progress Bar ─────────────────────────────────────────┐
│  Progress                                          25%  │
│  ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└────────────────────────────────────────────────────────┘
```

**Indeterminate (animated sweep)**
```
┌─ Progress Bar ─────────────────────────────────────────┐
│  Progress                                           —   │
│  ░░░░░████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │
└────────────────────────────────────────────────────────┘
```

**Label hidden**
```
  ██████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
```

| Part | Description |
|---|---|
| **Label** | Left-aligned descriptive text. Toggled via `Show Label`. Driven by the `Label` text property (default `"Progress"`). |
| **Percentage** | Right-aligned current value (e.g. `"25%"`). Driven by the `Progress` text property. Shows `"—"` in Indeterminate mode. |
| **Track** | Full-width pill-shaped background rail. Colour communicates semantic variant. `border-radius: 9999`. |
| **Fill** | Pill-shaped foreground bar inside the track. Width is proportional to the current percentage value. |

---

## Variants

### Variant (colour / semantic type)

| Value | Track token | Fill token | Fill colour | Use case |
|---|---|---|---|---|
| `Default` | `Background/BG-Accent-Secondary` | `Background/BG-Button-Primary` | Blue | General progress, uploads, processing |
| `Success` | `Background/BG-Success-Secondary` | `Background/BG-Success-Solid` | Green | Completed goals, passed checks |
| `Warning` | `Background/BG-Warning-Secondary` | `Background/BG-Warning-Solid` | Orange | Near-capacity, approaching limits |
| `Error` | `Background/BG-Error-Secondary` | `Background/BG-Error-Solid` | Red | Failed operation, exceeded threshold |
| `Indeterminate` | `Background/BG-Accent-Secondary` | `Background/BG-Button-Primary` | Blue | Unknown duration — animating sweep |

### Size

| Value | Track height | Label font | Percentage font | Vertical gap | Component height |
|---|---|---|---|---|---|
| `Small` | 4 px | 10 px | 10 px | 4 px | 24 px |
| `Medium` | 6 px | 12 px | 12 px | 6 px | 28 px |
| `Large` | 8 px | 14 px | 14 px | 8 px | 32 px |

### State

| Value | Description |
|---|---|
| `Default` | Interactive / live state. |
| `Disabled` | Non-interactive. Track uses `Background/BG-Disabled_subtle`, fill uses `Background/BG-Disabled`, both text labels use `Text/Text-Disabled`. |

### Fill %

Design-time fill percentage for static representations. At runtime, width is set dynamically via code.

| Value | Fill width (of 280 px track) |
|---|---|
| `0` | 2 px |
| `25` | 70 px (25%) |
| `50` | 140 px (50%) |
| `75` | 210 px (75%) |
| `100` | 280 px (100%) |
| `N/A` | 92 px fixed stub (Indeterminate only) |

---

## Variant Matrix

- **4 determinate variants** × **2 states** × **5 fill levels** × **3 sizes** = 120 variants
- **1 indeterminate variant** × **2 states** × **3 sizes** = 6 variants
- **Total: 126 variants**

---

## Props / API

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'Default' \| 'Success' \| 'Warning' \| 'Error' \| 'Indeterminate'` | `'Default'` | Semantic colour and mode. Use `Indeterminate` when duration is unknown. |
| `size` | `'Small' \| 'Medium' \| 'Large'` | `'Small'` | Controls track height and typography scale. |
| `value` | `number` | `25` | Current progress value (0–100). Ignored when `variant='Indeterminate'`. |
| `max` | `number` | `100` | Maximum value. Used to compute fill percentage: `(value / max) * 100`. |
| `label` | `string` | `"Progress"` | Left-side descriptive label text. |
| `showLabel` | `boolean` | `true` | Shows or hides the entire label row (both label and percentage text). |
| `valueLabel` | `string` | `"25%"` | Right-side value display string. Defaults to `"—"` when `variant='Indeterminate'`. Override to show custom strings (e.g. `"3 of 12 tasks"`). |
| `disabled` | `boolean` | `false` | Applies the disabled visual state. |

---

## Design Tokens

### Track and fill colours

| Variant | Track token | Fill token |
|---|---|---|
| `Default` | `Background/BG-Accent-Secondary` | `Background/BG-Button-Primary` |
| `Success` | `Background/BG-Success-Secondary` | `Background/BG-Success-Solid` |
| `Warning` | `Background/BG-Warning-Secondary` | `Background/BG-Warning-Solid` |
| `Error` | `Background/BG-Error-Secondary` | `Background/BG-Error-Solid` |
| `Indeterminate` | `Background/BG-Accent-Secondary` | `Background/BG-Button-Primary` |
| Disabled (all) | `Background/BG-Disabled_subtle` | `Background/BG-Disabled` |

### Text colours

| Variant | Label token | Percentage token |
|---|---|---|
| `Default` / `Indeterminate` | `Text/Text-Primary` | `Text/Text-Accent-Primary` |
| `Success` | `Text/Text-Primary` | `Text/Text-Success` |
| `Warning` | `Text/Text-Primary` | `Text/Text-Warning` |
| `Error` | `Text/Text-Primary` | `Text/Text-Error` |
| Disabled (all) | `Text/Text-Disabled` | `Text/Text-Disabled` |

---

## Typography

All text uses **Zoho Puvi** at Medium weight (500).

| Size | Label / Percentage | Font size | Line height | Tokens |
|---|---|---|---|---|
| `Small` | Both | 10 px | 14 px | `body/Xsmall/Default`, `Font-weight/Medium` |
| `Medium` | Both | 12 px | 16 px | `body/Small/Medium` |
| `Large` | Both | 14 px | 20 px | `body/Default/Medium` |

> Label and Percentage text share the same size scale per size variant. They are part of the same `Label Row` frame and toggle together via `Show Label`.

---

## Sizing Reference

| Property | Value |
|---|---|
| Component width | 280 px (design canvas; use `width: 100%` in code) |
| Track corner radius | 9999 px (pill) |
| Fill corner radius | 9999 px (pill) |
| Label Row justification | Space between (label left-pinned, percentage right-pinned) |
| Label ↔ Percentage gap | 8 px |
| Label Row ↔ Track gap | 4 px (S) / 6 px (M) / 8 px (L) |

---

## Indeterminate Mode

When the total duration or steps of an operation are unknown, use `variant="Indeterminate"`. The fill stub is a fixed-width segment (~33% of the track) that sweeps from left to right in a continuous animation.

**CSS implementation:**

```css
.progress-bar--indeterminate .progress-bar__fill {
  width: 33%;
  animation: indeterminate-sweep 1.5s ease-in-out infinite;
}

@keyframes indeterminate-sweep {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(350%); }
}
```

> Apply `overflow: hidden` on the Track element so the fill clips at the track boundaries.

**Value label:** Render `"—"` (em dash) or omit it entirely. Do not show `"0%"` — that implies 0% is known, which contradicts the indeterminate state.

---

## Usage

### When to use

- To show **measurable progress** toward a known completion point (file upload, form completion, steps completed).
- To communicate **system status** during a background operation (syncing, processing, building).
- When the user benefits from knowing **how much remains**, not just that something is happening.
- Use `Indeterminate` when the duration or percentage cannot be calculated.
- Use `Success` / `Warning` / `Error` variants when the completion state carries a semantic outcome (e.g. passing a threshold, exceeding a limit, or a failed job).

### When not to use

- **Step-by-step workflows** → use a [Wizard](./wizard.md) — progress bars don't communicate discrete steps clearly.
- **Circular loading** → use [Progress Loader](./progress-loader.md) for spinners inside buttons or inline loaders.
- **Binary complete / incomplete** → use a Checkbox or a simple status indicator.
- **Page-level loading** → use a top-of-page slim bar (e.g. NProgress pattern), not a full-width labelled progress bar.

### Do / Don't

| Do | Don't |
|---|---|
| Use `Large` for prominent page-level progress; `Small` for dense lists or tables | Use `Large` inside a compact list item |
| Keep the label concise (2–4 words: "Upload progress", "Storage used") | Write a full sentence as the label |
| Show the `%` value alongside the bar so users can read the exact number | Rely on bar width alone for precision — perception is inaccurate |
| Use `variant="Indeterminate"` when duration cannot be computed | Show `0%` or a frozen bar while waiting — it implies the operation is stuck |
| Transition to `Success` variant at 100% completion | Leave the bar in the `Default` state after completion |
| Transition to `Error` variant when an operation fails mid-progress | Reset to 0% on error without feedback |
| Use `Warning` when a resource is filling up (e.g. storage at 80%) | Use `Warning` for purely in-progress states |
| Set `width: 100%` in code so the bar fills its container | Hard-code the 280 px canvas width |
| Animate fill width with `transition: width 300ms ease` | Jump fill width instantly without easing |
| Respect `prefers-reduced-motion` — use instant updates instead of animations | Force animations regardless of user preference |

---

## Accessibility

| Concern | Requirement |
|---|---|
| **Role** | Use `role="progressbar"` on the track element |
| **Value attributes** | Set `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"` dynamically |
| **Indeterminate** | Omit `aria-valuenow` when `variant="Indeterminate"` — its absence signals the value is unknown |
| **Label** | Provide `aria-label` or `aria-labelledby` referencing the label text. e.g. `aria-label="File upload progress"` |
| **Value text** | Use `aria-valuetext` when the visual label is non-numeric (e.g. `"Step 3 of 8"`) |
| **Live updates** | Wrap in `aria-live="polite"` to announce progress changes to screen readers. Throttle announcements to avoid flooding. |
| **Disabled state** | Set `aria-disabled="true"` on the container; visually greyed tokens already applied |
| **Contrast** | Fill colour on track background must be distinguishable. All four `Solid` fill tokens meet sufficient contrast against their `Secondary` track tokens in UEMS Light theme. |
| **Motion** | `Indeterminate` animation must pause when `prefers-reduced-motion: reduce` is set |
| **RTL** | No RTL axis exists in the Figma component. Implement RTL by mirroring the fill direction in CSS: `direction: rtl` or `transform: scaleX(-1)` on the track. |

---

## Code Examples

### Default — 25% progress

```tsx
<ProgressBar
  label="Uploading"
  value={25}
  max={100}
/>
```

### Success at 100%

```tsx
<ProgressBar
  variant="Success"
  label="Analysis complete"
  value={100}
  max={100}
  valueLabel="Done"
/>
```

### Warning — storage near capacity

```tsx
<ProgressBar
  variant="Warning"
  label="Storage used"
  value={82}
  max={100}
  size="Medium"
/>
```

### Error — operation failed mid-way

```tsx
<ProgressBar
  variant="Error"
  label="Sync failed"
  value={43}
  max={100}
  valueLabel="Failed at 43%"
/>
```

### Indeterminate — unknown duration

```tsx
<ProgressBar
  variant="Indeterminate"
  label="Processing…"
  size="Medium"
/>
```

### Without label row (track only)

```tsx
<ProgressBar
  value={60}
  showLabel={false}
  size="Small"
  aria-label="Profile completion"
/>
```

### Custom value label — steps

```tsx
<ProgressBar
  label="Onboarding"
  value={3}
  max={8}
  valueLabel="Step 3 of 8"
  size="Large"
/>
```

### Disabled

```tsx
<ProgressBar
  label="Quota"
  value={50}
  disabled
  size="Medium"
/>
```

### Responsive fill (CSS)

```css
.progress-bar {
  width: 100%; /* fills container */
}

.progress-bar__fill {
  width: calc(var(--progress-value, 0) * 1%);
  transition: width 300ms ease;
}

@media (prefers-reduced-motion: reduce) {
  .progress-bar__fill {
    transition: none;
  }
  .progress-bar--indeterminate .progress-bar__fill {
    animation: none;
    width: 33%;
  }
}
```

---

## Related Components

| Component | When to use instead |
|---|---|
| [Progress Loader](./progress-loader.md) | Circular spinner / inline loading indicator |
| [Skeleton Loader](./skeleton-loader.md) | Placeholder for content loading — no known percentage |
| [Slider](./slider.md) | User-controlled value input along a track — not read-only progress |
| [Wizard](./wizard.md) | Multi-step process where each step needs its own label and state |
| [Toast](./toast.md) | Auto-dismissing notification after a process completes |
