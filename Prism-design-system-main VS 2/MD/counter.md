# Counter Component

**Design System:** UEMS Design System 3.0
**Figma Node:** `16445:468` (Component Set)
**Page:** Counter
**Total Variants:** 42

---

## Overview

The Counter is a compact numeric indicator used to display counts, badges, or notification numbers. Counters are pill-shaped elements that adapt their color and intensity based on semantic state. They appear in navigation items, table cells, tabs, and list rows.

---

## Anatomy

```
┌──────────┐
│  Number   │
└──────────┘
```

| Part | Node Type | Description |
|------|-----------|-------------|
| **Container** | Auto-layout Frame | Pill-shaped (border-radius: 9999px) background with centered content. Overflow clipped. Min-width ensures circular shape for single digits. |
| **Number Value** | Text | Numeric text content. Defaults to "57". Font: Zoho Puvi Medium, centered horizontally and vertically. |

---

## Variant Axes

| Property | Values | Description |
|----------|--------|-------------|
| **Style** | `Subtle`, `Intense` | Controls visual emphasis. Subtle = tinted background with colored text. Intense = solid fill with white text. |
| **Size** | `Small`, `Medium`, `Large` | Controls height, min-width, padding, and font size. |
| **State** | `Active`, `Critical`, `Moderate`, `Important`, `Success`, `Default`, `Acknowledge` | Semantic color mapping for status communication. |

### Variant Count Breakdown

2 (Style) x 3 (Size) x 7 (State) = **42 variants**

---

## Component Properties

These are overridable instance-level properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Number` | Text | `"57"` | The numeric value displayed inside the counter. |

---

## Variants (Color & Style Mapping)

### Subtle Style

Subtle counters use a light tinted background with semantically colored text.

| State | Background Token | Background Hex | Text Token | Text Hex |
|-------|-----------------|----------------|------------|----------|
| **Active** | `background/bg-accent-secondary` | `#D5E0F8` | `text/text-accent-tertiary` | `#1E52BB` |
| **Critical** | `background/bg-error-primary` | `#FDEBEB` | `text/text-error` | `#C1181B` |
| **Moderate** | `background/bg-alert-primary` | `#FEF8EB` | `text/text-alert` | `#956B11` |
| **Important** | `background/bg-warning-primary` | `#FFEEE5` | `text/text-warning` | `#BC4200` |
| **Success** | `background/bg-success-primary` | `#E7F3ED` | `text/text-success` | `#0A7138` |
| **Default** | `background/bg-secondary` | `#F0F2F5` | `text/text-secondary` | `#2A303D` |
| **Acknowledge** | `background/bg-acknowldege-primary` | `#F1EAF8` | `text/text-acknowledge` | `#663399` |

### Intense Style

Intense counters use a solid-color background with white text (except Moderate which uses black text for contrast).

| State | Background Token | Background Hex | Text Token | Text Hex |
|-------|-----------------|----------------|------------|----------|
| **Active** | `background/bg-accent-secondary-solid` | `#2C66DD` | `text/text-white` | `#FFFFFF` |
| **Critical** | `background/bg-error-solid` | `#E42527` | `text/text-white` | `#FFFFFF` |
| **Moderate** | `background/bg-alert-solid` | `#F9B21D` | `text/text-black` | `#000000` |
| **Important** | `background/bg-warning-solid` | `#E65100` | `text/text-white` | `#FFFFFF` |
| **Success** | `background/bg-success-solid` | `#0C8844` | `text/text-white` | `#FFFFFF` |
| **Default** | `background/bg-quaternary-solid` | `#5F6C89` | `text/text-white` | `#FFFFFF` |
| **Acknowledge** | `background/bg-acknowldege-solid` | `#663399` | `text/text-white` | `#FFFFFF` |

---

## Sizes

| Size | Height | Min Width | Padding (H) | Padding (V) | Font Size | Line Height | Typography Token |
|------|--------|-----------|-------------|-------------|-----------|-------------|------------------|
| **Small** | 16px | 16px | 4px | 4px | 10px | 14px | `body/XSmall/Medium` |
| **Medium** | 20px | 20px | 4px | 4px | 12px | 16px | `body/Small/Medium` |
| **Large** | 24px | 24px | 8px | 4px | 14px | 20px | `body/Default/Regular` |

### Layout

- **Layout mode:** Horizontal auto-layout
- **Alignment:** Center (both axes)
- **Sizing:** Hugs content horizontally, fixed height vertically
- **Border radius:** `9999px` (fully rounded pill)
- **Clips content:** Yes
- **Min-width:** Matches height to ensure circular shape for single digits

---

## Typography

All counter labels use **Zoho Puvi** font family.

| Size | Font Family | Font Weight | Font Size | Line Height | Text Align |
|------|-------------|-------------|-----------|-------------|------------|
| Small | Zoho Puvi | 500 (Medium) | 10px | 14px | Center (H + V) |
| Medium | Zoho Puvi | 500 (Medium) | 12px | 16px | Center (H + V) |
| Large | Zoho Puvi | 400 (Regular) | 14px | 20px | Center (H + V) |

### Typography Tokens

| Size | Font Family Token | Font Size Token | Line Height Token | Font Weight Token |
|------|-------------------|-----------------|-------------------|-------------------|
| Small | `body/xsmall/default/font-family` | `body/xsmall/default/font-size` (10px) | `body/xsmall/default/line-height` (14px) | `font-weight/medium` (500) |
| Medium | `body/small/medium/font-family` | `body/small/medium/font-size` (12px) | `body/small/medium/line-height` (16px) | `body/small/medium/font-weight` (500) |
| Large | `body/default/regular/font-family` | `body/default/regular/font-size` (14px) | `body/default/regular/line-height` (20px) | `body/default/regular/font-weight` (400) |

---

## Variant Matrix

|  | Active | Critical | Moderate | Important | Success | Default | Acknowledge |
|--|--------|----------|----------|-----------|---------|---------|-------------|
| **Subtle / Small** | Blue tint | Red tint | Yellow tint | Orange tint | Green tint | Gray tint | Purple tint |
| **Subtle / Medium** | Blue tint | Red tint | Yellow tint | Orange tint | Green tint | Gray tint | Purple tint |
| **Subtle / Large** | Blue tint | Red tint | Yellow tint | Orange tint | Green tint | Gray tint | Purple tint |
| **Intense / Small** | Blue solid | Red solid | Yellow solid | Orange solid | Green solid | Gray solid | Purple solid |
| **Intense / Medium** | Blue solid | Red solid | Yellow solid | Orange solid | Green solid | Gray solid | Purple solid |
| **Intense / Large** | Blue solid | Red solid | Yellow solid | Orange solid | Green solid | Gray solid | Purple solid |

---

## Usage Guidelines

### When to Use

- Display unread notification counts on navigation items or icons
- Show item counts in tabs, filters, or category labels
- Indicate quantity in list rows or table cells
- Display status-grouped counts in dashboards

### Do

- Keep numeric values short (1-3 digits ideally; show "99+" for large numbers)
- Use **Subtle** style for inline contexts where the counter shouldn't dominate
- Use **Intense** style for high-visibility counts (e.g., unread notifications)
- Match the state color to the semantic meaning of the count
- Use consistent sizing within the same context
- Use semantic states consistently:
  - **Active** — Primary/informational counts (e.g., unread items)
  - **Critical** — Error or failure counts
  - **Moderate** — Warning/alert counts
  - **Important** — Urgent but non-critical counts
  - **Success** — Completed or positive counts
  - **Default** — Neutral/secondary counts
  - **Acknowledge** — Acknowledged or informational-secondary counts

### Don't

- Don't use counters for non-numeric content (use Badge instead)
- Don't use the counter as a standalone status indicator (use Status Indicator instead)
- Don't mix Subtle and Intense styles in the same row or group
- Don't use very large numbers without truncation
- Don't rely solely on color to communicate meaning — pair with contextual labels

---

## Accessibility

| Criterion | Requirement |
|-----------|-------------|
| **aria-label** | Provide context for the count (e.g., "5 unread messages" not just "5"). |
| **Contrast** | All style/state combinations meet WCAG 2.1 AA contrast ratio. Intense style uses white text on solid backgrounds. Moderate/Intense uses black text on yellow for contrast. |
| **Screen reader** | Count value should be announced with context from the parent element. |
| **Color independence** | Don't rely solely on color to communicate status — pair with contextual labels or icons. |

---

## Related Components

| Component | Relationship |
|-----------|-------------|
| **Badge** | Text-based status label with semantic colors. Use Badge when you need a text label, Counter when you need a number. |
| **Status Indicator** | Dot + label for status communication. Use for qualitative status, not numeric counts. |
| **Tag** | Interactive label for categorization. Not for counts or notifications. |

---

## Figma Usage

```
Component Set: Counter
Node ID: 16445:468
File: UEMS - Design System 3.0

Example variant string:
Style=Subtle, Size=Small, State=Active
```

### Instance Overrides
1. Select the counter instance
2. Change **Style** to `Subtle` or `Intense`
3. Change **Size** to match layout requirements
4. Change **State** to set the semantic color
5. Edit the **Number** text property to set the displayed value
