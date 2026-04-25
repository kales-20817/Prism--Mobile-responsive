# Toast

A Toast is a brief, non-blocking notification that appears temporarily to inform users about the result of an action or system event. It supports four status types, two visual styles (Subtle and Filled), an optional auto-dismiss progress bar, CTA link, and close button.

**Figma source:** [UEMS Design System 3.0 — Toast message page](https://www.figma.com/design/DahIgbIJrSkzyP3OoHaDaG/UEMS---Design-System-3.0?node-id=15938-44865)  
**Component node:** `15938:44865` (Toast component set)  
**Last updated:** 2026-04-14

---

## Anatomy

```
┌─────────────────────────────────────────────────────────┐
│  ⓘ  Toast title here              View Details    ✕    │
│     Supporting description for the toast notification.  │
├─────────────────────────────────────────────────────────┤
│████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ │  ← Timeout Bar
└─────────────────────────────────────────────────────────┘
```

| Part | Description |
|---|---|
| **Status Icon** | 20 × 20 px icon that communicates the toast type. Icon colour changes per status; geometry is consistent. Instance-swappable. |
| **Title** | Short summary of the notification. Semibold 13 px. |
| **Description** | Supporting detail. Regular 12 px. Toggleable via `Show Description`. |
| **CTA** | Action link (e.g. "View Details"). Medium 12 px. Toggleable via `Show CTA`. |
| **Close Button** | 16 × 16 px `✕` icon to dismiss the toast. Toggleable via `Show Close`. |
| **Timeout Bar** | 4 px progress bar at the bottom of the toast indicating auto-dismiss countdown. Always present in the design layer. |

---

## Variants

### Style

| Value | Description |
|---|---|
| `Subtle` | Light background (`Background/BG-Secondary_subtle`) with a coloured left/bottom border. Status communicated through border + icon colour. Text uses standard dark/secondary colour tokens. Default. |
| `Filled` | Full solid background colour per status. All text, icons, and close button render in white (`Text/Text-White`). Hover state supported with a dedicated darker background token. |

### Status

| Status | Subtle border | Subtle icon | Filled background | Filled hover |
|---|---|---|---|---|
| `Info` | `Border/Border-Accent` | `Text/Text-Accent-Primary` (blue) | `Background/BG-Button-Primary` | `Background/BG-Button-Primary-Hover` |
| `Success` | `Border/Border-Success` | `Text/Text-Success` (green) | `Background/BG-Success-Solid` | `Background/BG-Success-Solid-Hover` |
| `Warning` | `Border/Border-Warning` | `Text/Text-Warning` (amber) | `Background/BG-Warning-Solid` | `Background/BG-Warning-Solid-Hover` |
| `Error` | `Border/Border-Error` | `Text/Text-Error` (red) | `Background/BG-Error-Solid` | `Background/BG-Error-Solid-Hover` |

> In **Subtle** style, the background is identical across all four statuses — only the border colour and icon colour communicate status.  
> In **Filled** style, the entire background changes per status and all foreground elements are white.

### State

| Value | Description |
|---|---|
| `Default` | Resting state. |
| `Hover` | Darker background (Filled only). Subtle variant has no token-level hover change in the design. |

### Direction

| Value | Description |
|---|---|
| `RTL = False` | Left-to-right: Status Icon → Text Content → CTA → Close (default). |
| `RTL = True` | Right-to-left: Close → CTA → Text Content → Status Icon. Arabic default text properties provided. |

---

## Variant Matrix

- **2 styles** × **4 statuses** × **2 states** × **2 directions** = **32 Toast variants**

---

## Props / API

| Prop | Type | Default | Description |
|---|---|---|---|
| `style` | `'Subtle' \| 'Filled'` | `'Subtle'` | Visual style — light with border or solid colour fill. |
| `status` | `'Info' \| 'Success' \| 'Warning' \| 'Error'` | `'Info'` | Semantic type; drives colour, icon, and border. |
| `title` | `string` | `"Toast title here"` | Primary message text. Keep to one line. |
| `description` | `string` | `"Supporting description for the toast notification."` | Secondary detail text. |
| `showDescription` | `boolean` | `true` | Shows or hides the description line. |
| `ctaText` | `string` | `"View Details"` | CTA link label. |
| `showCTA` | `boolean` | `true` | Shows or hides the CTA link. |
| `showClose` | `boolean` | `true` | Shows or hides the close (dismiss) button. |
| `statusIcon` | `ReactNode` | Info circle icon | Instance-swap slot for the status icon. |
| `closeIcon` | `ReactNode` | X icon | Instance-swap slot for the close icon. |
| `rtl` | `boolean` | `false` | Switches to right-to-left layout. |
| `duration` | `number` | `5000` | Auto-dismiss duration in milliseconds. Set to `0` to disable auto-dismiss. |
| `showTimeoutBar` | `boolean` | `true` | Shows the 4 px progress bar indicating time remaining. |
| `onClose` | `() => void` | — | Callback fired when the toast is dismissed (by timer or close button). |
| `onCTAClick` | `() => void` | — | Callback fired when the CTA link is clicked. |

---

## Design Tokens

### Backgrounds

| Token | Usage |
|---|---|
| `Background/BG-Secondary_subtle` | Subtle style — all status backgrounds |
| `Background/BG-Button-Primary` | Filled Info background |
| `Background/BG-Button-Primary-Hover` | Filled Info hover background |
| `Background/BG-Success-Solid` | Filled Success background |
| `Background/BG-Success-Solid-Hover` | Filled Success hover background |
| `Background/BG-Warning-Solid` | Filled Warning background |
| `Background/BG-Warning-Solid-Hover` | Filled Warning hover background |
| `Background/BG-Error-Solid` | Filled Error background |
| `Background/BG-Error-Solid-Hover` | Filled Error hover background |

### Borders

| Token | Usage |
|---|---|
| `Border/Border-Accent` | Subtle Info container border |
| `Border/Border-Success` | Subtle Success container border |
| `Border/Border-Warning` | Subtle Warning container border |
| `Border/Border-Error` | Subtle Error container border |
| `Border/Border-Secondary` | Timeout Bar track (Subtle) |

### Text & Icons

| Token | Usage |
|---|---|
| `Text/Text-Primary` | Title text (Subtle) |
| `Text/Text-Secondary` | Description text (Subtle) |
| `Text/Text-Accent-Primary` | CTA text (Subtle all statuses); Info icon (Subtle) |
| `Text/Text-Success` | Success icon stroke (Subtle) |
| `Text/Text-Warning` | Warning icon stroke (Subtle) |
| `Text/Text-Error` | Error icon stroke (Subtle) |
| `Text/Text-White` | All text + icons (Filled style) |
| `Border/Icon/Icon-Tertiary` | Close icon (Subtle Info, Default state) |
| `Border/Icon/Icon-Subtle` | Close icon (Subtle non-Info or Hover) |
| `Border/Border-Accent-subtle` | Close icon (Filled Info) |
| `Border/Border-Success-subtle` | Close icon (Filled Success) |
| `Border/Border-Warning-subtle` | Close icon (Filled Warning) |
| `Border/Border-Error-subtle` | Close icon (Filled Error) |
| `Border/Border-Accent` | Timeout Bar progress fill (Subtle) |

---

## Typography

| Element | Font | Size | Weight | Line Height | Token |
|---|---|---|---|---|---|
| Title | Zoho Puvi | 13 px | Medium (500) | 20 px | `body/Small/Medium`, `Font-size/13px` |
| Description | Zoho Puvi | 12 px | Regular (400) | — | `body/Small/Default` |
| CTA | Zoho Puvi | 12 px | Medium (500) | — | `body/Small/Medium` |

---

## Sizing Reference

| Property | Value |
|---|---|
| Width | 400 px (fixed) |
| Height | 84 px (fixed) |
| Corner radius | 8 px |
| Content padding (H) | 16 px left / right |
| Content padding (V) | 12 px top / bottom |
| Gap between Content children | 12 px |
| Gap between Title and Description | 4 px |
| Status icon size | 20 × 20 px |
| Close icon size | 16 × 16 px |
| Timeout Bar height | 4 px |
| Timeout Bar width | 400 px (full width) |

---

## Timeout Bar

The Timeout Bar is a 4 px strip at the bottom of every Toast variant. It acts as a **visual auto-dismiss countdown indicator** — the inner `Progress` frame shrinks from full width to zero as the timer counts down.

| Layer | Token (Subtle) | Notes |
|---|---|---|
| `Timeout Bar` (track) | `Border/Border-Secondary` | Always full 400 px wide |
| `Progress` (fill) | `Border/Border-Accent` | Animates width from 100% → 0% over `duration` ms |

> In Filled variants, the Timeout Bar is present but the progress fill uses a raw colour rather than a semantic token — use the closest status-appropriate contrast colour in code.

**Implementation guidance:**
```css
.toast-timeout-bar-progress {
  animation: toast-countdown linear forwards;
  animation-duration: var(--toast-duration, 5000ms);
}

@keyframes toast-countdown {
  from { width: 100%; }
  to   { width: 0%; }
}
```

---

## Usage

### When to use

- To confirm that a **user-triggered action succeeded** (e.g. "File saved", "Record deleted").
- To surface a **system event** the user should be aware of but doesn't need to act on immediately.
- When the notification is **temporary and non-blocking** — the user can continue working.
- Use `Info` for neutral announcements, `Success` for confirmations, `Warning` for cautionary notices, `Error` for failures.

### When not to use

- **Critical errors that block the user** → use an [Alert Box](./alert-box.md) or [Inline Message](./inline-message.md) inline in the page.
- **Confirmations that require a decision** → use a [Dialog Box](./dialog-box.md).
- **Persistent status** the user needs to reference → use an [Inline Message](./inline-message.md) or [Alert Box](./alert-box.md).
- **Multiple simultaneous toasts** → stack them, but limit to 3 at a time maximum.

### Do / Don't

| Do | Don't |
|---|---|
| Keep the title to one short line (≤ 8 words) | Write a full paragraph as the title |
| Use `Success` to confirm user actions positively | Use `Info` for everything — reserve statuses semantically |
| Use `Filled` style for high-visibility or prominent alerts | Use `Filled` in dense, content-heavy pages where it competes visually |
| Show `showCTA` for actions that are reversible or need follow-up | Use CTA for navigation to unrelated pages |
| Use `duration=0` for Error toasts that need user acknowledgement | Auto-dismiss Error toasts — users may not read them in time |
| Show the Timeout Bar when `duration` is set | Hide the Timeout Bar on auto-dismissing toasts — it aids orientation |
| Position toasts consistently (top-right or bottom-center) | Move toast position between sessions |
| Animate toasts in/out with fade or slide | Flash toasts in instantly with no transition — this feels jarring |
| Limit the stack to 3 toasts simultaneously | Let toasts pile up without a queue limit |

### Placement guidelines

Toasts are typically **positioned absolutely or fixed** relative to the viewport:

| Position | Recommended for |
|---|---|
| Top right | Desktop dashboards — away from primary action areas |
| Bottom center | Mobile / touch interfaces — above the thumb zone |
| Bottom right | Side-panel heavy UIs |

---

## Accessibility

| Concern | Requirement |
|---|---|
| **ARIA live region** | Wrap the toast container in `aria-live="polite"` (Info/Success/Warning) or `aria-live="assertive"` (Error) so screen readers announce new toasts |
| **Role** | Use `role="status"` for polite announcements or `role="alert"` for assertive (Error) toasts |
| **Auto-dismiss** | Do not auto-dismiss Error toasts. For other statuses, ensure `duration ≥ 5000ms` so users have time to read. Pause timer on hover/focus. |
| **Close button** | Provide `aria-label="Dismiss notification"` on the close button |
| **Keyboard** | The toast must be reachable via keyboard (`Tab`). Close button must be activatable with `Enter` / `Space`. |
| **Focus management** | Do not steal focus when a toast appears. If the toast contains a CTA, ensure it is reachable without disrupting the user's current flow. |
| **Contrast** | Subtle style: `Text/Text-Primary` on `BG-Secondary_subtle` must meet WCAG AA 4.5:1. Filled style: `Text/Text-White` on all solid backgrounds must meet AA. |
| **Motion** | Respect `prefers-reduced-motion` — replace slide/fade animations with instant show/hide. |
| **RTL** | Set `dir="rtl"` on the toast container. The component's child order already mirrors for RTL. |

---

## Code Examples

### Info toast (Subtle, default)

```tsx
<Toast
  status="Info"
  title="Update available"
  description="A new version of the app is ready to install."
  ctaText="Install now"
  onCTAClick={() => triggerUpdate()}
  onClose={() => dismissToast()}
/>
```

### Success toast

```tsx
<Toast
  status="Success"
  title="Changes saved"
  description="Your profile has been updated successfully."
  showCTA={false}
  duration={4000}
/>
```

### Error toast (no auto-dismiss)

```tsx
<Toast
  status="Error"
  style="Filled"
  title="Upload failed"
  description="The file could not be uploaded. Please try again."
  ctaText="Retry"
  onCTAClick={() => retryUpload()}
  duration={0}
  showTimeoutBar={false}
/>
```

### Warning toast (Filled style)

```tsx
<Toast
  status="Warning"
  style="Filled"
  title="Session expiring soon"
  description="You will be logged out in 5 minutes."
  ctaText="Stay logged in"
  onCTAClick={() => extendSession()}
  duration={0}
/>
```

### Minimal — title only

```tsx
<Toast
  status="Success"
  title="Copied to clipboard"
  showDescription={false}
  showCTA={false}
  duration={2500}
/>
```

### RTL

```tsx
<Toast
  status="Info"
  title="رسالة التنبيه"
  description="وصف تفصيلي لرسالة التنبيه مع معلومات إضافية."
  ctaText="عرض التفاصيل"
  rtl
/>
```

### Toast queue (multiple)

```tsx
// Render at most 3 toasts at a time; older ones are dismissed first
<ToastProvider maxToasts={3} position="top-right">
  {toasts.map((t) => (
    <Toast key={t.id} {...t} onClose={() => removeToast(t.id)} />
  ))}
</ToastProvider>
```

---

## Related Components

| Component | When to use instead |
|---|---|
| [Alert Box](./alert-box.md) | Persistent page-level alerts that don't auto-dismiss |
| [Inline Message](./inline-message.md) | Contextual feedback embedded within a form or content area |
| [Dialog Box](./dialog-box.md) | Confirmations or decisions that require user input |
| [Message Banner](./message-banner.md) | Full-width system-level notices (maintenance, deprecation) |
