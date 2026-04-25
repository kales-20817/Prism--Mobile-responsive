# Status Indicator Component

**Design System:** UEMS Design System 3.0
**Figma Node:** `16447:1049` (Component Set)
**Page:** Status indicator
**Total Variants:** 45

---

## Overview

The Status Indicator displays system states, health conditions, or operational statuses using a colored dot, optional icon, and optional text label. It is used in table cells, device lists, monitoring dashboards, system health views, and activity timelines to convey status information at a glance.

---

## Anatomy

```
┌──────────────────────┐
│  ●  [Icon]  Label     │
└──────────────────────┘
```

| Part | Node Type | Description |
|------|-----------|-------------|
| **Container** | Auto-layout Frame | Horizontal layout with 4px padding and 4px gap. No background fill (transparent). Border radius: 6px. |
| **Status Dot** | Frame | Small colored circle (border-radius: 9999px). Color changes per status. Size scales with component size. |
| **Icon** | Instance Swap | Optional icon element. Hidden by default. Toggled via `Show Icon` boolean. |
| **Label** | Text | Optional text label. Visible by default. Defaults to "Status". Toggled via `Show Label` boolean. |

---

## Variant Axes

| Property | Values | Description |
|----------|--------|-------------|
| **Status** | `Neutral`, `Success`, `Warning`, `Critical`, `Info` | Controls the semantic color of the status dot. |
| **Size** | `Small`, `Medium`, `Large` | Controls overall dimensions, dot size, icon size, and font size. |
| **State** | `Default`, `Hover`, `Disabled` | Interaction state of the component. |

### Variant Count Breakdown

5 (Status) x 3 (Size) x 3 (State) = **45 variants**

---

## Component Properties

These are overridable instance-level properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Label` | Text | `"Status"` | The text label displayed next to the status dot. |
| `Show Label` | Boolean | `true` | Toggles the label text visibility. When off, only the dot (and optional icon) is shown. |
| `Show Icon` | Boolean | `false` | Toggles the icon visibility between the dot and label. |
| `Icon` | Instance Swap | Default icon | Swappable icon instance. Only visible when `Show Icon` is on. |

---

## Status Colors & Tokens

### Dot Color by Status and State

| Status | Default (Dot) | Hover (Dot) | Disabled (Dot) |
|--------|--------------|-------------|----------------|
| **Neutral** | `background/bg-quaternary-solid` (`#5F6C89`) | `background/bg-quaternary-solid` (`#5F6C89`) | `background/bg-disabled` (`#E1E4EB`) |
| **Success** | `background/bg-success-solid` (`#0C8844`) | `background/bg-success-solid` (`#0C8844`) | `background/bg-success-secondary` (`#CEE7DA`) |
| **Warning** | `background/bg-warning-solid` (`#E65100`) | `background/bg-warning-solid` (`#E65100`) | `background/bg-warning-secondary` (`#FFDECC`) |
| **Critical** | `text/text-error` (`#C1181B`) | `text/text-error` (`#C1181B`) | `background/bg-error-secondary` (`#FAD7D8`) |
| **Info** | `background/bg-accent-secondary-solid` (`#2C66DD`) | `background/bg-accent-secondary-solid` (`#2C66DD`) | `background/bg-accent-secondary` (`#D5E0F8`) |

### Hover Background by Status

| Status | Hover Background Token | Hover Background Hex |
|--------|----------------------|---------------------|
| **Neutral** | `background/bg-secondary` | `#F0F2F5` |
| **Success** | `background/bg-success-primary` | `#E7F3ED` |
| **Warning** | `background/bg-warning-primary` | `#FFEEE5` |
| **Critical** | `background/bg-error-primary` | `#FDEBEB` |
| **Info** | `background/bg-accent-primary` | `#EAF0FC` |

### Text Color

| State | Token | Value |
|-------|-------|-------|
| **Default / Hover** | `text/text-secondary` | `#2A303D` |
| **Disabled** | `text/text-disabled` | `#8893AD` |

---

## Sizes

| Size | Dot | Icon | Font Size | Line Height | Padding | Gap | Typography Token |
|------|-----|------|-----------|-------------|---------|-----|------------------|
| **Small** | 6 x 6 px | 12 x 12 px | 10px | 14px | 4px | 4px | `body/XSmall/Medium` |
| **Medium** | 6 x 6 px | 14 x 14 px | 12px | 16px | 4px | 4px | `body/Small/Regular` |
| **Large** | 8 x 8 px | 16 x 16 px | 14px | 20px | 4px | 4px | `body/Default/Regular` |

### Layout

- **Layout mode:** Horizontal auto-layout
- **Alignment:** Center (counter-axis)
- **Sizing:** Hugs content (both axes)
- **Border radius:** 6px (via `VariableID:16450:7508`)
- **Item spacing:** 4px
- **Padding:** 4px (all sides)
- All fills and text colors are **token-bound** — zero hardcoded values

---

## States

### Default
Standard resting state. Transparent background with visible dot and label.

### Hover
- Background fill appears (subtle tint, status-specific — see Hover Background table above)
- Provides visual feedback for interactive status indicators
- Dot and text colors remain unchanged

### Disabled
- Dot color shifts to a faded/secondary variant
- Label text color changes to `text/text-disabled` (`#8893AD`)
- No pointer interaction (`cursor: not-allowed`)

---

## Typography

| Size | Font Family | Font Weight | Font Size | Line Height | Text Align |
|------|-------------|-------------|-----------|-------------|------------|
| Small | Zoho Puvi | 500 (Medium) | 10px | 14px | Left (H), Center (V) |
| Medium | Zoho Puvi | 400 (Regular) | 12px | 16px | Left (H), Center (V) |
| Large | Zoho Puvi | 400 (Regular) | 14px | 20px | Left (H), Center (V) |

### Typography Tokens

| Size | Font Family Token | Font Size Token | Line Height Token | Font Weight |
|------|-------------------|-----------------|-------------------|-------------|
| Small | `body/xsmall/default/font-family` | `body/xsmall/default/font-size` (10px) | `body/xsmall/default/line-height` (14px) | 500 (Medium) |
| Medium | `body/small/default/font-family` | `body/small/default/font-size` (12px) | `body/small/default/line-height` (16px) | 400 (Regular) |
| Large | `body/default/regular/font-family` | `body/default/regular/font-size` (14px) | `body/default/regular/line-height` (20px) | 400 (Regular) |

---

## Variant Matrix

|  | Default | Hover | Disabled |
|--|---------|-------|----------|
| **Neutral / Small** | Gray dot, transparent bg | Gray dot, gray tint bg | Light gray dot, muted text |
| **Neutral / Medium** | Gray dot, transparent bg | Gray dot, gray tint bg | Light gray dot, muted text |
| **Neutral / Large** | Gray dot, transparent bg | Gray dot, gray tint bg | Light gray dot, muted text |
| **Success / Small** | Green dot, transparent bg | Green dot, green tint bg | Light green dot, muted text |
| **Success / Medium** | Green dot, transparent bg | Green dot, green tint bg | Light green dot, muted text |
| **Success / Large** | Green dot, transparent bg | Green dot, green tint bg | Light green dot, muted text |
| **Warning / Small** | Orange dot, transparent bg | Orange dot, orange tint bg | Light orange dot, muted text |
| **Warning / Medium** | Orange dot, transparent bg | Orange dot, orange tint bg | Light orange dot, muted text |
| **Warning / Large** | Orange dot, transparent bg | Orange dot, orange tint bg | Light orange dot, muted text |
| **Critical / Small** | Red dot, transparent bg | Red dot, red tint bg | Light red dot, muted text |
| **Critical / Medium** | Red dot, transparent bg | Red dot, red tint bg | Light red dot, muted text |
| **Critical / Large** | Red dot, transparent bg | Red dot, red tint bg | Light red dot, muted text |
| **Info / Small** | Blue dot, transparent bg | Blue dot, blue tint bg | Light blue dot, muted text |
| **Info / Medium** | Blue dot, transparent bg | Blue dot, blue tint bg | Light blue dot, muted text |
| **Info / Large** | Blue dot, transparent bg | Blue dot, blue tint bg | Light blue dot, muted text |

---

## Usage Guidelines

### When to Use

- Display the current status of a record in a data table row
- Show connection or availability status (online, offline, away)
- Indicate workflow state (draft, in review, approved, rejected)
- Communicate system health in dashboards or monitoring views
- Show process status in list items or detail panels

### Do

- Use consistent status-to-color mapping throughout the application
- Always include a text label when the status meaning isn't obvious from context
- Use `Show Icon` to add a secondary visual cue for complex statuses
- Use the **Small** size for dense layouts (tables, lists)
- Use the **Large** size for detail views or prominent status displays
- Use semantic statuses consistently:
  - **Neutral** — Inactive, idle, or unknown
  - **Success** — Healthy, online, completed, positive
  - **Warning** — Degraded, at-risk, attention-needed
  - **Critical** — Error, offline, failed, urgent
  - **Info** — Informational, in-progress, active

### Don't

- Don't use more than 5 status types in a single view — it creates cognitive overload
- Don't rely solely on the dot color to communicate status — always include the label for accessibility
- Don't use Status Indicator for numeric counts (use Counter instead)
- Don't use Status Indicator for category labels (use Badge or Tag instead)
- Don't use the hover state if the indicator is not interactive
- Don't mix sizes within the same table or list column

---

## Accessibility

| Criterion | Requirement |
|-----------|-------------|
| **Label** | Always show the text label (`Show Label = true`) for screen readers. If hidden, provide `aria-label` on the container. |
| **Contrast** | All dot colors meet WCAG 2.1 AA contrast ratio against the white background. |
| **Color independence** | The text label communicates the status meaning — the dot color is supplementary, not the sole indicator. |
| **Screen reader** | Announced as the label text. If interactive (hover state), wrap in a focusable element with role and label. |
| **Keyboard** | If interactive, ensure the component is focusable via `Tab` and has visible focus styling. |

---

## Related Components

| Component | Relationship |
|-----------|-------------|
| **Badge** | Text-based label with semantic background colors. Use Badge for category/status labels with more visual weight. |
| **Counter** | Numeric pill badge. Use Counter for quantity/count display, Status Indicator for qualitative status. |
| **Tag** | Interactive label with dismiss action. Use Tag for user-applied categories, not system status. |
| **Tooltip** | Pair with Status Indicator to provide additional context on hover. |

---

## Figma Usage

```
Component Set: Status Indicator
Node ID: 16447:1049
File: UEMS - Design System 3.0

Example variant string:
Status=Neutral, Size=Small, State=Default
```

### Instance Overrides
1. Select the status indicator instance
2. Change **Status** to set the semantic color (Neutral, Success, Warning, Critical, Info)
3. Change **Size** to match layout requirements
4. Change **State** for prototyping interactions
5. Edit the **Label** text property to set the displayed status text
6. Toggle **Show Label** to hide/show the text label
7. Toggle **Show Icon** to add an icon between the dot and label
8. Swap the **Icon** instance to any icon from the icon library
