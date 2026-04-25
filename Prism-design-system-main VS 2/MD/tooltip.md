# Tooltip

A lightweight informational popover that appears on hover or focus to provide additional context about an element. Supports 9 arrow positions, 3 themes, and full RTL (Arabic) text.

**Figma source:** [UEMS — Design System 3.0](https://www.figma.com/design/DahIgbIJrSkzyP3OoHaDaG/UEMS---Design-System-3.0?node-id=18063-833552) · Node `18063:833552`

---

## Variants

The component set contains **54 variants** across three axes:

| Axis | Values | Count |
|------|--------|------:|
| `Position` | `right`, `left`, `up center`, `up left`, `up right`, `down center`, `down left`, `down right`, `without arrow` | 9 |
| `Theme` | `dark`, `light`, `red` | 3 |
| `RTL` | `false`, `true` | 2 |

**Total:** 9 × 3 × 2 = **54 variants**

---

## Anatomy

```
┌──────────────────────────────────────────────────┐
│  ⓘ  This is a helpful tooltip that provides      │ ← Tooltip Body
│     additional context about this element.       │   (240px fixed width)
└──────────────────────────────────────────────────┘▶
 ▲
 Icon (20×20)   Text content (FILL)          Arrow (6×12 or 12×6)
```

| Part | Description |
|------|-------------|
| **Tooltip Body** | 240px fixed width, `radius-4` corners, `padding: 4px 8px`, text wraps to multiple lines |
| **Icon** | 20×20px instance (default: info-circle), toggleable via `Show Icon`. Sits to the left of the text |
| **Text** | FILL width, auto-resize height; wraps within the 240px body |
| **Arrow** | Vector triangle — 12×6px for up/down positions, 6×12px for left/right. Omitted in `without arrow` |

Arrow alignment mirrors the position name:

| Position name | Arrow side | Alignment on that side |
|---------------|-----------|------------------------|
| `up left` | Top edge | MIN (left-aligned) |
| `up center` | Top edge | CENTER |
| `up right` | Top edge | MAX (right-aligned) |
| `down left` | Bottom edge | MIN |
| `down center` | Bottom edge | CENTER |
| `down right` | Bottom edge | MAX |
| `left` | Left edge | CENTER |
| `right` | Right edge | CENTER |
| `without arrow` | — | No arrow |

---

## Themes

### Dark (default)

Dark navy/slate body with white text. Use in most UI surfaces where the tooltip sits above light or mid-tone backgrounds.

```
┌──────────────────────────────────────────────────────┐
│  ⓘ  This is a helpful tooltip that provides          │
│     additional context about this element.           │
└──────────────────────────────────────────────────────┘▶
```

- Background: `Background/BG-Overlay-Dark` (~`#2A2E3F`)
- Text: `Text/Text-White` (`#FFFFFF`)
- Arrow: same fill as body background

### Light

White body with a subtle border and drop shadow. Use when the surrounding context is a dark panel or when the tooltip must remain visually distinct on mid-tone backgrounds.

```
╔══════════════════════════════════════════════════════╗
║  ⓘ  This is a helpful tooltip that provides          ║
║     additional context about this element.           ║
╚══════════════════════════════════════════════════════╝▶
```

- Background: `Background/BG-Base-White` (`#FFFFFF`)
- Border: `Border/Border-Secondary` (`#C3C9D6`)
- Text: `Text/Text-Primary` (`#15181E`)
- Shadow: `0 2px 8px rgba(0,0,0,0.12)`

### Red

Light pink body with red text and icon. Use for error or destructive-action tooltips — e.g. explaining why an action is blocked, or surfacing a validation error on hover.

```
┌──────────────────────────────────────────────────────┐
│  ⓘ  This is a helpful tooltip that provides          │
│     additional context about this element.           │
└──────────────────────────────────────────────────────┘▶
(pink body, red icon and text)
```

- Background: `Background/BG-Error-Subtle` (~`#FFEBE9`)
- Text: `Text/Text-Error` (`#E42527`)
- Icon: `Border/Icon/Icon-Error` (`#E42527`)
- Arrow: same fill as body background

---

## Positions

All 9 positions with arrow orientation. Combine with Theme and RTL freely.

```
           [up left]  [up center]  [up right]
               ▼           ▼            ▼
    [left] ▶ ╔══════ Tooltip Body ══════╗ ◀ [right]
              ║  ⓘ  Tooltip text here   ║
              ╚═════════════════════════╝
               ▲           ▲            ▲
         [down left] [down center] [down right]

    [without arrow] — body only, no arrow element
```

### Positioning rules for implementation

| Position | Arrow placed on | Tooltip rendered relative to trigger |
|----------|----------------|--------------------------------------|
| `right` | Right edge of body | Tooltip to the right of trigger |
| `left` | Left edge of body | Tooltip to the left of trigger |
| `up center` | Top edge, center | Tooltip above trigger, centered |
| `up left` | Top edge, left | Tooltip above trigger, left-aligned |
| `up right` | Top edge, right | Tooltip above trigger, right-aligned |
| `down center` | Bottom edge, center | Tooltip below trigger, centered |
| `down left` | Bottom edge, left | Tooltip below trigger, left-aligned |
| `down right` | Bottom edge, right | Tooltip below trigger, right-aligned |
| `without arrow` | None | Floating; position managed by consumer |

---

## RTL Support

When `RTL=true`, the tooltip renders Arabic text right-aligned. The icon remains on the left of the layout direction (i.e. visually on the right of the text for RTL, following the natural reading flow).

```
┌──────────────────────────────────────────────────────┐
│  هذا تلميح مفيد يوفر سياقًا إضافيًا حول هذا العنصر  ⓘ │
│                              للمستخدم.               │
└──────────────────────────────────────────────────────┘◀
```

- RTL content uses the `Tooltip Label RTL` text property (independent of LTR content)
- The arrow flips horizontally for `left`/`right` positions to maintain directional consistency

---

## Component Properties

| Property | Type | Default | Scope | Description |
|----------|------|---------|-------|-------------|
| `Show Icon` | Boolean | `ON` | All variants | Toggles the leading info icon. When OFF, text starts at the left edge of the body padding |
| `Icon` | Instance Swap | `info-circle` | All variants | Swap the 20×20 icon instance. Use a contextually appropriate icon for non-info tooltips |
| `Tooltip Label` | Text | `"This is a helpful tooltip…"` | RTL=false | Content text for LTR layouts |
| `Tooltip Label RTL` | Text | Arabic string | RTL=true | Content text for RTL layouts; independent of `Tooltip Label` |

---

## Design Tokens

### Body

| Element | Theme | Token | Resolves (Light mode) |
|---------|-------|-------|----------------------|
| Background | `dark` | `Background/BG-Overlay-Dark` | `#2A2E3F` |
| Background | `light` | `Background/BG-Base-White` | `#FFFFFF` |
| Background | `red` | `Background/BG-Error-Subtle` | `#FFEBE9` |
| Border | `light` only | `Border/Border-Secondary` | `#C3C9D6` |
| Drop shadow | `light` only | — | `0 2px 8px rgba(0,0,0,0.12)` |
| Border radius | All | `Radius/radius-4` | `4px` |
| Width | All | — | `240px` fixed |
| Padding | All | — | `4px` top/bottom, `8px` left/right |

### Text

| Theme | Token | Resolves (Light mode) |
|-------|-------|----------------------|
| `dark` | `Text/Text-White` | `#FFFFFF` |
| `light` | `Text/Text-Primary` | `#15181E` |
| `red` | `Text/Text-Error` | `#E42527` |

### Icon

| Theme | Token | Resolves (Light mode) |
|-------|-------|----------------------|
| `dark` | `Border/Icon/Icon-Inverse` | `#FFFFFF` |
| `light` | `Border/Icon/Icon-Secondary` | `#2A303D` |
| `red` | `Border/Icon/Icon-Error` | `#E42527` |

### Arrow

| Theme | Fill |
|-------|------|
| `dark` | Same as body background — `#2A2E3F` |
| `light` | Same as body background — `#FFFFFF` |
| `red` | Same as body background — `#FFEBE9` |

---

## Usage Guidelines

### When to use

- To clarify the purpose of icon-only buttons, controls, or form labels where space doesn't allow inline text.
- To surface secondary, supplementary information that shouldn't permanently occupy space in the layout.
- To explain why a control is disabled (use `red` theme for destructive or error context).
- For keyboard and screen reader users as an accessible label for non-text interactive elements.

### When NOT to use

- For interactive content (links, buttons inside the tooltip) — use a **Popover** instead.
- For lengthy explanations (> 2–3 lines) — consider an inline help text or a modal.
- As the sole label for a control — the underlying element must still have an `aria-label` or visible label.
- For error messages on form fields — use an **inline validation message** below the field instead; reserve `red` tooltip for hover-state additional context only.

### Choosing a theme

| Scenario | Theme |
|----------|-------|
| General informational context on a light UI surface | `dark` |
| UI surface is dark or mid-tone (e.g. dark sidebar, header) | `light` |
| Explaining an error, destructive action, or blocked state | `red` |

### Choosing a position

- Prefer **`up center`** or **`down center`** for most inline triggers — they are the most predictable.
- Use **`right`** or **`left`** when the trigger is at the top/bottom edge of the viewport.
- Use **`without arrow`** only when the tooltip is positioned by a layout constraint and the visual connection to the trigger is already clear.
- Avoid **`up left`** / **`up right`** unless you need to anchor to a specific corner of a wide trigger.

### Do / Don't

| Do | Don't |
|----|-------|
| Keep tooltip text concise — 1–2 short sentences maximum | Use a tooltip to display data tables, images, or interactive elements |
| Use `Show Icon=OFF` when the icon is redundant with the trigger icon | Show the icon when it adds no meaning beyond the text |
| Set the correct `Position` so the arrow always points at the trigger | Use `without arrow` in contexts where the tooltip appears far from the trigger |
| Use `RTL=true` for Arabic/Hebrew content | Use the LTR label for RTL text — it will be left-aligned and feel incorrect |
| Dismiss on `Escape` and when focus leaves the trigger | Keep the tooltip visible after the user interacts with another element |

---

## Keyboard Behaviour

| Trigger | Tooltip action |
|---------|---------------|
| `Tab` / focus enters the trigger | Tooltip appears |
| `Escape` | Tooltip dismisses immediately |
| Focus leaves trigger (blur) | Tooltip dismisses with delay (300ms recommended) |
| Hover on trigger | Tooltip appears (200ms delay recommended) |
| Hover leaves trigger | Tooltip dismisses (150ms delay recommended) |

> Tooltips triggered by hover **must also** be triggerable by keyboard focus — they are not mutually exclusive.

---

## Developer Handoff

### HTML structure

```html
<!-- Trigger element -->
<button
  type="button"
  aria-describedby="tooltip-1"
  aria-label="More information"
>
  <svg><!-- icon --></svg>
</button>

<!-- Tooltip -->
<div
  id="tooltip-1"
  role="tooltip"
  class="tooltip tooltip--dark tooltip--up-center"
  aria-hidden="true"
>
  <div class="tooltip__body">
    <!-- Icon (optional) -->
    <svg class="tooltip__icon" aria-hidden="true" width="20" height="20"><!-- info-circle --></svg>
    <!-- Text -->
    <span class="tooltip__text">
      This is a helpful tooltip that provides additional context about this element.
    </span>
  </div>
  <div class="tooltip__arrow" aria-hidden="true"></div>
</div>
```

### CSS custom properties

```css
/* Dark theme */
.tooltip--dark {
  --tooltip-bg: #2A2E3F;
  --tooltip-text: #ffffff;
  --tooltip-border: transparent;
  --tooltip-shadow: none;
}

/* Light theme */
.tooltip--light {
  --tooltip-bg: #ffffff;
  --tooltip-text: #15181E;
  --tooltip-border: #C3C9D6;
  --tooltip-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
}

/* Red theme */
.tooltip--red {
  --tooltip-bg: #FFEBE9;
  --tooltip-text: #E42527;
  --tooltip-border: transparent;
  --tooltip-shadow: none;
}

/* Shared body */
.tooltip__body {
  display: flex;
  align-items: flex-start;
  gap: 6px;
  width: 240px;
  max-width: 240px;
  padding: 4px 8px;
  border-radius: 4px;
  background: var(--tooltip-bg);
  border: 1px solid var(--tooltip-border);
  box-shadow: var(--tooltip-shadow);
  color: var(--tooltip-text);
  font-size: 12px;
  line-height: 1.5;
}
```

### Visibility state

```css
/* Hidden by default */
[role="tooltip"] {
  position: absolute;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
  transition: opacity 150ms ease;
}

/* Shown via JS */
[role="tooltip"].is-visible {
  opacity: 1;
}
```

### Positioning pattern (JavaScript)

```js
function showTooltip(trigger, tooltip, position = 'up-center') {
  const triggerRect = trigger.getBoundingClientRect();
  const tooltipRect = tooltip.getBoundingClientRect();
  const gap = 8; // px between arrow tip and trigger edge

  // Example: up-center
  const top = triggerRect.top - tooltipRect.height - gap;
  const left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;

  tooltip.style.top = `${top + window.scrollY}px`;
  tooltip.style.left = `${left + window.scrollX}px`;
  tooltip.setAttribute('aria-hidden', 'false');
  tooltip.classList.add('is-visible');
}
```

> Use a dedicated positioning library (Floating UI / Popper.js) for production — they handle viewport clipping, scroll containers, and automatic flip/shift.

---

## Accessibility

| Concern | Guidance |
|---------|----------|
| **Role** | Always use `role="tooltip"` on the tooltip container |
| **Association** | Connect trigger to tooltip via `aria-describedby="[tooltip-id]"`. Use `aria-label` or `aria-labelledby` on the trigger if it has no visible text |
| **Hidden state** | Set `aria-hidden="true"` when the tooltip is not visible; `"false"` when shown |
| **Keyboard trigger** | Tooltip must appear on `:focus` — not hover only |
| **Escape** | `Escape` key must dismiss the tooltip without moving focus |
| **Hover delay** | Add ≥ 200ms show delay to avoid accidental trigger; dismissal can be faster (150ms) |
| **Persistent on hover** | The tooltip itself must be hoverable (pointer-events) so users can copy text or reach a scrollbar |
| **Contrast — dark** | White text on `#2A2E3F` exceeds WCAG AA (7:1+) |
| **Contrast — light** | `#15181E` on `#FFFFFF` exceeds WCAG AAA |
| **Contrast — red** | `#E42527` on `#FFEBE9` — verify contrast ratio; supplement with icon so colour is not the sole indicator |
| **RTL** | Set `dir="rtl"` on the tooltip container (or a parent) for Arabic/Hebrew content |
| **Icon** | Icon must be `aria-hidden="true"` — the text already conveys the full meaning |
| **No interactive content** | Do not place buttons, links, or inputs inside a `role="tooltip"` — use a Popover for interactive overlays |

---

## All Variants Reference

### Dark theme

| Variant | Node ID |
|---------|---------|
| Position=right, Theme=dark, RTL=false | `18063:833210` |
| Position=left, Theme=dark, RTL=false | `18063:833216` |
| Position=up center, Theme=dark, RTL=false | `18063:833222` |
| Position=up left, Theme=dark, RTL=false | `18063:833228` |
| Position=up right, Theme=dark, RTL=false | `18063:833235` |
| Position=down center, Theme=dark, RTL=false | `18063:833242` |
| Position=down left, Theme=dark, RTL=false | `18063:833248` |
| Position=down right, Theme=dark, RTL=false | `18063:833255` |
| Position=without arrow, Theme=dark, RTL=false | `18063:833262` |
| Position=right, Theme=dark, RTL=true | `18063:833267` |
| Position=left, Theme=dark, RTL=true | `18063:833273` |
| Position=up center, Theme=dark, RTL=true | `18063:833279` |
| Position=up left, Theme=dark, RTL=true | `18063:833285` |
| Position=up right, Theme=dark, RTL=true | `18063:833292` |
| Position=down center, Theme=dark, RTL=true | `18063:833299` |
| Position=down left, Theme=dark, RTL=true | `18063:833305` |
| Position=down right, Theme=dark, RTL=true | `18063:833312` |
| Position=without arrow, Theme=dark, RTL=true | `18063:833319` |

### Light theme

| Variant | Node ID |
|---------|---------|
| Position=right, Theme=light, RTL=false | `18063:833324` |
| Position=left, Theme=light, RTL=false | `18063:833330` |
| Position=up center, Theme=light, RTL=false | `18063:833336` |
| Position=up left, Theme=light, RTL=false | `18063:833342` |
| Position=up right, Theme=light, RTL=false | `18063:833349` |
| Position=down center, Theme=light, RTL=false | `18063:833356` |
| Position=down left, Theme=light, RTL=false | `18063:833362` |
| Position=down right, Theme=light, RTL=false | `18063:833369` |
| Position=without arrow, Theme=light, RTL=false | `18063:833376` |
| Position=right, Theme=light, RTL=true | `18063:833381` |
| Position=left, Theme=light, RTL=true | `18063:833387` |
| Position=up center, Theme=light, RTL=true | `18063:833393` |
| Position=up left, Theme=light, RTL=true | `18063:833399` |
| Position=up right, Theme=light, RTL=true | `18063:833406` |
| Position=down center, Theme=light, RTL=true | `18063:833413` |
| Position=down left, Theme=light, RTL=true | `18063:833419` |
| Position=down right, Theme=light, RTL=true | `18063:833426` |
| Position=without arrow, Theme=light, RTL=true | `18063:833433` |

### Red theme

| Variant | Node ID |
|---------|---------|
| Position=right, Theme=red, RTL=false | `18063:833438` |
| Position=left, Theme=red, RTL=false | `18063:833444` |
| Position=up center, Theme=red, RTL=false | `18063:833450` |
| Position=up left, Theme=red, RTL=false | `18063:833456` |
| Position=up right, Theme=red, RTL=false | `18063:833463` |
| Position=down center, Theme=red, RTL=false | `18063:833470` |
| Position=down left, Theme=red, RTL=false | `18063:833476` |
| Position=down right, Theme=red, RTL=false | `18063:833483` |
| Position=without arrow, Theme=red, RTL=false | `18063:833490` |
| Position=right, Theme=red, RTL=true | `18063:833495` |
| Position=left, Theme=red, RTL=true | `18063:833501` |
| Position=up center, Theme=red, RTL=true | `18063:833507` |
| Position=up left, Theme=red, RTL=true | `18063:833513` |
| Position=up right, Theme=red, RTL=true | `18063:833520` |
| Position=down center, Theme=red, RTL=true | `18063:833527` |
| Position=down left, Theme=red, RTL=true | `18063:833533` |
| Position=down right, Theme=red, RTL=true | `18063:833540` |
| Position=without arrow, Theme=red, RTL=true | `18063:833547` |

---

## Related Components

- **Popover** — use when the overlay needs interactive content (buttons, links, forms)
- **Badge** — inline status indicator that doesn't require hover; prefer for always-visible metadata
- **Dropdown Menu** — use when the hover trigger should open a list of actionable options
- **Form Field Helper Row** — use for persistent inline help text below form fields; do not use a tooltip as the only way to discover field requirements

---

*Generated from UEMS Design System 3.0 · Figma node `18063:833552`*
