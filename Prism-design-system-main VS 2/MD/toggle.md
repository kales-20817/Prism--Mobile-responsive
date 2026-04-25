# Toggle Component

**Design System:** UEMS Design System 3.0
**Figma Node:** `15898:21879` (Component Set)
**Page:** Toggle
**Total Variants:** 96

---

## Overview

The Toggle is a binary switch control that allows users to turn a setting or feature on or off. It represents an immediate, persistent state change — unlike a checkbox, which is typically submitted as part of a form. Toggles are commonly used in settings panels, preference screens, feature flags, and inline controls where the effect takes place instantly upon interaction.

---

## Anatomy

### Without Text (`Show Text = False`)

```
  ┌──────────────┐
  │  ●           │   <- Off state (thumb on the left)
  └──────────────┘

  ┌──────────────┐
  │           ●  │   <- On state (thumb on the right)
  └──────────────┘
```

### With Text (`Show Text = True`)

```
  ┌──────────────┐
  │ Off  ●       │   <- Off state with text label inside track
  └──────────────┘

  ┌──────────────┐
  │       ● On   │   <- On state with text label inside track
  └──────────────┘
```

### Parts

| Part | Description |
|------|-------------|
| **Track** | The pill-shaped background container. Color changes based on `Toggled` state — active color when On, muted when Off. |
| **Thumb** | The circular handle that slides within the track. Positioned on the right when On, left when Off. Mirrors for RTL. |
| **Text Label** | Optional inline text inside the track indicating the current state (e.g., "On" / "Off"). Toggled via `Show Text`. |

---

## Variant Axes

| Property | Values | Description |
|----------|--------|-------------|
| **Size** | `Small`, `Medium`, `Large` | Controls the overall dimensions of the track and thumb. |
| **Toggled** | `On`, `Off` | Represents the current boolean value of the toggle. |
| **State** | `Default`, `Hover`, `Focus`, `Disabled` | Interaction state of the toggle. |
| **Show Text** | `False`, `True` | Shows or hides the inline text label ("On" / "Off") inside the track. |
| **RTL** | `False`, `True` | Mirrors the thumb position and layout direction for right-to-left languages. |

### Variant Count Breakdown

3 (Size) × 2 (Toggled) × 4 (State) × 2 (Show Text) × 2 (RTL) = **96 variants**

---

## Toggled States

| Value | Visual | Meaning |
|-------|--------|---------|
| **On** | Thumb on the right, track filled with active/brand color | The setting or feature is **enabled** |
| **Off** | Thumb on the left, track in muted/neutral color | The setting or feature is **disabled** |

---

## Interaction States

| State | Behavior |
|-------|----------|
| **Default** | Resting state. Track and thumb display their standard On/Off colors. |
| **Hover** | Subtle visual feedback (e.g., slight track color shift or thumb shadow) on mouse hover. Cursor changes to pointer. |
| **Focus** | Visible focus ring around the track for keyboard navigation. Meets WCAG 2.1 focus indicator requirements. |
| **Disabled** | Reduced opacity. Non-interactive. Neither click nor keyboard interaction changes the toggled state. |

---

## Sizes

| Size | Typical Use |
|------|-------------|
| **Small** | Compact settings panels, data-dense views, inline controls in tables |
| **Medium** | Default size. General-purpose settings forms and preference screens |
| **Large** | Prominent settings, touch-friendly mobile views, accessible interfaces |

---

## Show Text

When `Show Text = True`, a short label ("On" or "Off") appears inside the track alongside the thumb to reinforce the current state in text, in addition to the visual position of the thumb.

| Show Text | Use Case |
|-----------|----------|
| **False** (default) | Standard toggle. State is communicated via thumb position and track color. Suitable for most contexts. |
| **True** | Use when additional clarity is needed — e.g., for users less familiar with toggle conventions, in accessibility-sensitive contexts, or when the toggle is large enough to accommodate the text comfortably. |

---

## RTL Support

When `RTL = True`:
- The thumb is positioned on the **left** when On and the **right** when Off (mirrored from LTR)
- Track layout direction is fully reversed
- Text label alignment adjusts accordingly

---

## Usage Guidelines

### Do
- Use toggles for settings that take **immediate effect** without requiring form submission
- Pair each toggle with a clear, descriptive label outside the component explaining what it controls
- Use `Show Text = True` when the interface audience may be unfamiliar with toggle conventions
- Use the `Large` size for touch-first or accessibility-sensitive interfaces
- Reflect the toggled state immediately on interaction (optimistic UI)
- Maintain consistent toggle sizing within the same settings group

### Don't
- Don't use a toggle when the action requires a **form submit** to take effect — use a Checkbox instead
- Don't use a toggle for multi-value or non-binary choices — use a Select or Radio Group instead
- Don't rely solely on track color to communicate state — ensure thumb position is always a clear indicator
- Don't disable a toggle without communicating why it is unavailable
- Don't use toggles for destructive actions without a confirmation step (e.g., "Delete all data")
- Don't place a toggle label inside the component as the sole description — always provide an external label in the UI

---

## Toggle vs Checkbox

| Aspect | Toggle | Checkbox |
|--------|--------|----------|
| **Effect timing** | Immediate — changes take effect on click | Deferred — changes apply on form submit |
| **Value type** | Binary on/off setting | Boolean selection within a form |
| **Common use** | Settings, preferences, feature flags | Forms, multi-select lists, option groups |
| **Label** | External label + optional inline text | Label adjacent to the checkbox |

---

## Accessibility

| Aspect | Implementation |
|--------|---------------|
| **Role** | Use `role="switch"` with `aria-checked="true/false"` to communicate state to screen readers. |
| **Keyboard Navigation** | Focusable via Tab. `Space` or `Enter` toggles the value. Focus state shows a visible ring. |
| **Screen Reader** | The external label (not the inline "On/Off" text) should be the primary accessible name via `aria-label` or `<label>` association. Screen readers announce the switch role and checked state. |
| **Color & Contrast** | State must not be communicated by color alone — thumb position is the primary indicator. Colors meet WCAG 2.1 AA contrast. |
| **Disabled State** | Disabled toggles use `disabled` attribute or `aria-disabled="true"` and are excluded from tab order. |
| **RTL** | Full RTL layout support. Screen readers are not affected by visual mirroring. |

---

## Related Components

| Component | Relationship |
|-----------|-------------|
| **Checkbox** | Use Checkbox for form-based binary inputs that require submission. Use Toggle for immediate-effect settings. |
| **Radio Group** | Use Radio Group when the user must choose one option from several mutually exclusive values. |
| **Select / Dropdown** | Use Select when there are more than two choices or the option values are not binary. |

---

## Figma Usage

```
Component Set: Toggle
Node ID: 15898:21879
File: UEMS - Design System 3.0

Example variant string:
Size=Medium, Toggled=On, State=Default, Show Text=False, RTL=False
```

### Instance Overrides
1. Select the Toggle instance
2. Set **Toggled** to `On` or `Off` to reflect the current value
3. Set **Size** based on the density and context of the surrounding UI
4. Toggle **Show Text** to `True` for contexts requiring explicit "On/Off" label clarity
5. Set **RTL** to `True` for right-to-left language layouts
6. Use **State** variants (`Hover`, `Focus`, `Disabled`) for prototype interactions or spec documentation
