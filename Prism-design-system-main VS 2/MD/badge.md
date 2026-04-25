# Badge Component

**Design System:** UEMS Design System 3.0
**Figma Node:** `16484:122065` (Component Set)
**Page:** ❖ Badge
**Total Variants:** 168

---

## Overview

The Badge is a compact label component used to indicate status, category, or metadata. Badges appear in table cells, list items, navigation elements, and detail views to convey semantic meaning through color and style.

---

## Anatomy

```
┌──────────────────────┐
│  [Icon]  Label Text   │
└──────────────────────┘
```

| Part | Node Type | Description |
|------|-----------|-------------|
| **Container** | Auto-layout Frame | Horizontal layout with padding. Shape determines border radius. |
| **Icon** | Instance Swap | Optional leading icon. Toggled via `Show Icon` boolean. |
| **Label** | Text | The badge text content. Defaults to "Badge". |

---

## Variant Axes

| Property | Values | Description |
|----------|--------|-------------|
| **Style** | `Intense`, `Subtle` | Controls visual emphasis. Intense = solid fill. Subtle = tinted/light background. |
| **Size** | `Small`, `Medium`, `Large` | Controls height, padding, font size, and icon size. |
| **State** | `Active`, `Critical`, `Moderate`, `Important`, `Success`, `Default`, `Acknowledge` | Semantic color mapping for status communication. |
| **RTL** | `On`, `Off` | Mirrors layout for right-to-left languages. |
| **Shape** | `Pill`, `Rounded` | Pill = fully rounded ends. Rounded = moderate corner radius. |

### Variant Count Breakdown

2 (Style) x 3 (Size) x 7 (State) x 2 (RTL) x 2 (Shape) = **168 variants**

---

## Component Properties

These are overridable instance-level properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Show Icon` | Boolean | `true` | Toggles the leading icon visibility. |
| `Icon` | Instance Swap | Default icon node | Swappable icon instance. Only visible when Show Icon is on. |
| `Label` | Text | `"Badge"` | The display text of the badge. |

---

## Semantic States (Color Mapping)

Each state maps to a semantic color hue used consistently across the design system:

| State | Hue | Usage |
|-------|-----|-------|
| **Active** | Blue | Active items, in-progress states, selected filters |
| **Critical** | Red | Errors, failures, high-severity alerts |
| **Moderate** | Yellow | Warnings, attention-needed states |
| **Important** | Orange | High-priority items, urgent but non-critical |
| **Success** | Green | Completed, approved, healthy states |
| **Default** | Grey/Neutral | Inactive, neutral, informational |
| **Acknowledge** | Purple | Acknowledged, reviewed, noted states |

### Style Behavior

- **Intense:** Solid background fill with contrasting (typically white) text and icon. Use for high-emphasis status indicators that need to stand out.
- **Subtle:** Light tinted background with colored text and icon matching the state hue. Use for low-emphasis metadata, secondary status, or when multiple badges appear in proximity.

---

## Sizes

| Size | Typical Use |
|------|-------------|
| **Small** | Table cells, compact lists, inline metadata |
| **Medium** | Default size for most contexts |
| **Large** | Page headers, detail views, standalone emphasis |

---

## Shape

| Shape | Border Radius | Use Case |
|-------|---------------|----------|
| **Pill** | Fully rounded (height / 2) | Default shape. Softer appearance, works well standalone. |
| **Rounded** | Moderate radius (~4px) | Rectangular appearance, better for tight layouts and tables. |

---

## RTL Support

When `RTL = On`:
- Layout direction is mirrored (icon moves to trailing position)
- Text alignment adjusts accordingly
- All spacing and padding values are mirrored

---

## Usage Guidelines

### Do
- Use badges to communicate status at a glance
- Keep label text short (1-2 words)
- Use consistent state colors across related views
- Use Subtle style when multiple badges appear together to avoid visual noise
- Use Intense style for the most important status in a view

### Don't
- Don't use more than one badge per item in a list row
- Don't use badges for interactive/clickable elements (use Tags instead)
- Don't mix Intense and Subtle styles within the same grouping
- Don't use long text strings that cause the badge to stretch excessively

---

## Related Components

| Component | Relationship |
|-----------|-------------|
| **Tag** | Interactive label with dismiss/click actions. Use Tag when the user can interact with the label. |
| **Counter** | Numeric count indicator. Use Counter for pure numeric values. |
| **Status Indicator** | Dot + label for status. Shares the same semantic color system. Use when a minimal dot indicator is sufficient. |

---

## Figma Usage

```
Component Set: Badge
Node ID: 16484:122065
Page: ❖ Badge

Example variant string:
Style=Intense, Size=Medium, State=Active, RTL=Off, Shape=Pill
```

### Instance Overrides
1. Select the badge instance
2. In the properties panel, toggle **Show Icon** on/off
3. Swap the **Icon** to any icon from the icon library
4. Edit the **Label** text directly
