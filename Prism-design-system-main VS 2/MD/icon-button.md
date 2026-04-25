# Icon Button Component

**Design System:** UEMS Design System 3.0
**Figma Node:** `16456:29077` (Component Set)
**File:** UEMS - Design System 3.0
**Total Variants:** 240

---

## Overview

A compact button that displays only an icon, used for toolbar actions, inline controls, and space-constrained interfaces where a text label is unnecessary. Unlike the standard Button, the Icon Button has no visible label and requires an `aria-label` for accessibility.

---

## Anatomy

```
┌───────────┐
│   [Icon]   │
└───────────┘
```

| Part | Node Type | Description |
|------|-----------|-------------|
| **Container** | Auto-layout Frame | Square or circular container with centered content. Background and border change per type and state. |
| **Icon** | Instance (Swap) | Single icon instance, centered within the container. Scales with size. |

---

## Variant Axes

| Property | Values | Description |
|----------|--------|-------------|
| **Shape** | `Square`, `Circle` | Controls the border-radius of the container. Square uses 4px radius; Circle is fully rounded. |
| **Type** | `Primary`, `Secondary`, `Tertiary`, `Outline`, `Danger`, `Tertiary Grey` | Controls the visual style and semantic meaning. |
| **Size** | `XL`, `Large`, `Small`, `XSmall` | Controls the container and icon dimensions. |
| **State** | `Default`, `Hover`, `Active`, `Focus`, `Disabled` | Interaction state of the button. |

### Variant Count Breakdown

2 (Shape) x 6 (Type) x 4 (Size) x 5 (State) = **240 variants**

---

## Types (Color & Style Mapping)

### Primary

| Property | Token / Variable ID | Value |
|----------|---------------------|-------|
| Background (Default) | `VariableID:3341:16499` | `#006AFF` |
| Background (Hover) | `VariableID:3348:16507` | `#1E52BB` |
| Background (Active) | — | `#2B66DE` |
| Icon Color | `VariableID:3368:5358` | `#FFFFFF` (white) |

### Secondary

| Property | Token / Variable ID | Value |
|----------|---------------------|-------|
| Background (Default) | `VariableID:5640:605` | `#EAF0FC` |
| Background (Hover) | — | `#D6E4F9` |
| Icon Color | `VariableID:15281:27467` | `#1E52BB` |

### Tertiary

| Property | Token / Variable ID | Value |
|----------|---------------------|-------|
| Background (Default) | — | Transparent (no fill) |
| Background (Hover) | — | `#F0F4FF` |
| Icon Color | `VariableID:15281:27467` | `#1E52BB` |

### Outline

| Property | Token / Variable ID | Value |
|----------|---------------------|-------|
| Background (Default) | `VariableID:5176:32904` | `#FFFFFF` |
| Border | `VariableID:3331:16407` | `1px solid #C3C9D6` |
| Background (Hover) | — | `#F4F5F7` |
| Icon Color | `VariableID:3402:19911` | `#2A303D` |

### Danger

| Property | Token / Variable ID | Value |
|----------|---------------------|-------|
| Background (Default) | `VariableID:3331:16437` | `#E42527` |
| Background (Hover) | — | `#C21E20` |
| Background (Active) | — | `#A81A1C` |
| Icon Color | `VariableID:3368:5358` | `#FFFFFF` (white) |

### Tertiary Grey

| Property | Token / Variable ID | Value |
|----------|---------------------|-------|
| Background (Default) | — | Transparent (no fill) |
| Background (Hover) | — | `#F4F5F7` |
| Icon Color | `VariableID:15281:27462` | `#55607A` |

---

## Sizes

| Size | Container | Icon | Border Radius (Square) | Border Radius (Circle) |
|------|-----------|------|------------------------|------------------------|
| **XL** | 40 x 40 px | 20 x 20 px | 4px | 50% |
| **Large** | 36 x 36 px | 18 x 18 px | 4px | 50% |
| **Small** | 28 x 28 px | 16 x 16 px | 4px | 50% |
| **XSmall** | 24 x 24 px | 14 x 14 px | 4px | 50% |

---

## States

### Default
Standard resting state with type-specific background, border, and icon colors.

### Hover
- **Primary:** Background darkens to `#1E52BB`
- **Secondary:** Background darkens to `#D6E4F9`
- **Tertiary / Tertiary Grey:** Light background fill appears on hover
- **Outline:** Background fills with `#F4F5F7`
- **Danger:** Background darkens to `#C21E20`

### Active
- Background shifts further from hover state
- **Square shape only:** Border radius increases from 4px to 6px (via `VariableID:15884:78582`)
- Circle shape retains 50% radius

### Focus
- **2px solid focus ring** offset by 2px from the container edge
- Focus ring color: `#0C66E4` (brand blue)
- Background retains the Default state color
- Container may be slightly larger to accommodate the ring (e.g., XL: 32x32 focus wrapper)

### Disabled
All types share the same disabled appearance:
- Background: `#E1E4EB` (`VariableID:3331:16443`)
- Icon color: `#889DAD` (`VariableID:5203:11441`)
- No pointer interaction (`cursor: not-allowed`)

---

## Usage Guidelines

### When to Use

- Toolbar actions where space is limited and icons are universally understood (edit, delete, close)
- Inline controls alongside other elements (close button on a tag or card)
- Toggle or secondary actions that don't require a text label
- Repeated actions in data tables or list rows (row-level edit, delete)
- Floating action triggers (plus button to add an item)

### Do

- Always provide an `aria-label` that describes the action
- Use universally recognized icons (close, add, edit, delete)
- Use tooltips to show the action label on hover
- Match icon button type to the Button type used nearby for consistency
- Use the `circle` shape for FAB-style (floating action button) actions

### Don't

- Don't use icon buttons for ambiguous or uncommon actions without a tooltip
- Don't use when the action needs a text label for clarity — use a Button instead
- Don't mix square and circle shapes in the same toolbar
- Don't use `danger` type for non-destructive actions
- Don't disable without providing a reason via tooltip

---

## Type Selection Guide

| Type | Use for | Example |
|------|---------|---------|
| **Primary** | High-emphasis primary actions | FAB add button, main CTA icon |
| **Secondary** | Medium-emphasis supportive actions | Edit action in a card header |
| **Tertiary** | Low-emphasis actions discoverable on hover | Toolbar icons in a rich text editor |
| **Outline** | Actions that need a clear clickable boundary | Filter toggle, sort controls |
| **Danger** | Destructive actions | Delete row, remove item |
| **Tertiary Grey** | Lowest-emphasis neutral actions | Close dialog, dismiss notification |

---

## Accessibility

| Criterion | Requirement |
|-----------|-------------|
| **aria-label** | Required on every icon button. Must describe the action, not the icon (e.g., "Delete item" not "Trash icon"). |
| **Contrast** | All type/state combinations meet WCAG 2.1 AA contrast ratio (4.5:1 for icon on background). |
| **Keyboard** | Focusable via `Tab`, activated with `Enter` or `Space`. Focus ring is visible (2px offset, brand color). |
| **Screen reader** | Announced as "button" role with the `aria-label` text. Disabled state communicated via `aria-disabled`. |
| **Touch target** | Minimum 24 x 24 px (XSmall meets this). Recommend 40 x 40 px (XL) for mobile. |
| **Tooltip** | Show a text tooltip on hover/focus to make the action discoverable for sighted users. |

---

## Related Components

| Component | Relationship |
|-----------|-------------|
| **Button** | Full button with text label and optional icons. Use when the action needs a visible label for clarity. |
| **Tooltip** | Text popup on hover. Recommended companion for every icon button to surface the action name. |
| **Badge** | Status indicator for counts and labels. Can be overlaid on icon buttons for notification counts. |
| **Action Dropdown** | Dropdown menu for multiple actions. An icon button can serve as the trigger. |

---

## Figma Usage

```
Component Set: Icon Button
Node ID: 16456:29077
File: UEMS - Design System 3.0

Example variant string:
Shape=Square, Type=Primary, Size=XL, State=Default
```

### Instance Overrides
1. Select the icon button instance
2. Change **Shape** to `Square` or `Circle`
3. Change **Type** to set the visual style (Primary, Secondary, etc.)
4. Change **Size** to match layout requirements
5. Swap the **Icon** instance to any icon from the icon library
6. Set the appropriate **State** for prototyping interactions
