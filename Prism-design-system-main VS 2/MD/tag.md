# Tag Component

**Design System:** UEMS Design System 3.0
**Figma Node:** `16462:101691` (Component Set)
**Page:** Tag
**Total Variants:** 432

---

## Overview

The Tag is a compact, interactive label component used to categorize, filter, or represent metadata that users can act upon. Tags support dismissal (close), leading elements (icons or status indicators), and multiple semantic color variants. They are commonly used in filter bars, form fields, data tables, and multi-select inputs.

---

## Anatomy

```
┌─────────────────────────────────────┐
│  [Leading Element]  Label  [Close]  │
└─────────────────────────────────────┘
```

| Part | Node Type | Description |
|------|-----------|-------------|
| **Container** | Auto-layout Frame | Horizontal layout with padding and border radius. Background color varies by variant. |
| **Leading Element** | Instance Swap | Optional. Can be a Status Indicator dot or an Icon. Controlled by `Leading Element` variant axis. |
| **Label** | Text | The tag text content. Defaults to "Tag". RTL version defaults to "وسم". |
| **Close Button** | Boolean toggle | Optional close/dismiss icon. Toggled via `Show Close` boolean property. |

---

## Variant Axes

| Property | Values | Description |
|----------|--------|-------------|
| **Variant** | `Neutral`, `Primary`, `Success`, `Warning`, `Error`, `Outline` | Controls the semantic color scheme of the tag. |
| **Size** | `Small`, `Medium`, `Large` | Controls height, padding, font size, and icon size. |
| **State** | `Default`, `Hover`, `Focus`, `Disabled` | Interaction state of the tag. |
| **RTL** | `False`, `True` | Mirrors layout direction for right-to-left languages. |
| **Leading Element** | `None`, `Status Indicator`, `Icon` | Controls the optional leading element before the label. |

### Variant Count Breakdown

6 (Variant) x 3 (Size) x 4 (State) x 2 (RTL) x 3 (Leading Element) = **432 variants**

---

## Component Properties

These are overridable instance-level properties:

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Show Close` | Boolean | `true` | Toggles the close/dismiss button visibility. |
| `Label` | Text | `"Tag"` | The display text of the tag (LTR). |
| `RTL Label` | Text | `"وسم"` | The display text of the tag (RTL). |
| `Status Indicator` | Instance Swap | Default indicator | Swappable status indicator instance. Only visible when Leading Element = Status Indicator. |
| `Leading Icon` | Instance Swap | Default icon | Swappable icon instance. Only visible when Leading Element = Icon. |

---

## Semantic Variants (Color Mapping)

Each variant maps to a semantic color used consistently across the design system:

| Variant | Hue | Usage |
|---------|-----|-------|
| **Neutral** | Grey | Default tags, general-purpose categorization, inactive filters |
| **Primary** | Blue | Selected filters, active categories, primary actions |
| **Success** | Green | Completed items, approved tags, positive status |
| **Warning** | Yellow/Amber | Attention-needed items, expiring tags, caution states |
| **Error** | Red | Failed items, rejected tags, critical/error status |
| **Outline** | Border-only | Low-emphasis tags, ghost style with no background fill. Relies on border for definition. |

### Variant Style Behavior

- **Filled variants** (Neutral, Primary, Success, Warning, Error): Tinted background with matching text/icon color. Provides moderate visual emphasis.
- **Outline variant**: Transparent background with a visible border. Use for minimal-emphasis tags or when tags appear over colored backgrounds.

---

## Sizes

| Size | Typical Use |
|------|-------------|
| **Small** | Compact layouts, table cells, inline metadata, filter chips |
| **Medium** | Default size for most contexts, form fields, toolbars |
| **Large** | Standalone tags, page headers, prominent filter selections |

---

## States

| State | Behavior |
|-------|----------|
| **Default** | Resting state with standard colors and no visual feedback. |
| **Hover** | Slight background shift or border change on mouse hover. Indicates interactivity. |
| **Focus** | Visible focus ring or border for keyboard navigation. Meets WCAG focus indicator requirements. |
| **Disabled** | Reduced opacity or muted colors. Non-interactive; close button and click actions are inactive. |

---

## Leading Element

| Leading Element | Description |
|-----------------|-------------|
| **None** | No leading element. Only label and optional close button. |
| **Status Indicator** | A small colored dot (status indicator) before the label. Useful for showing inline status alongside the tag text. |
| **Icon** | A swappable icon before the label. Useful for adding visual context (e.g., category icon, file type icon). |

---

## RTL Support

When `RTL = True`:
- Layout direction is mirrored (leading element moves to trailing position, close button moves to leading)
- Text alignment adjusts accordingly
- All spacing and padding values are mirrored
- RTL Label property is used instead of Label

---

## Usage Guidelines

### Do
- Use tags for user-generated or user-selectable labels (filters, categories, selections)
- Keep label text short (1-3 words)
- Use `Show Close` for dismissible tags in multi-select fields or filter bars
- Use consistent semantic variants across the application for the same meaning
- Use the Outline variant when tags appear over colored or patterned backgrounds
- Use Status Indicator as the leading element to combine status communication with labeling

### Don't
- Don't use tags for non-interactive status display (use Badge instead)
- Don't use more than 2-3 words in a tag label
- Don't mix semantic variant colors arbitrarily within the same context
- Don't disable the close button while keeping the tag interactive; disable the entire tag instead
- Don't use tags as primary navigation elements

---

## Accessibility

| Aspect | Implementation |
|--------|---------------|
| **Color Contrast** | All filled variants meet WCAG 2.1 AA contrast ratio (4.5:1 for text). |
| **Keyboard Navigation** | Tags are focusable via Tab. Close button is independently focusable. Focus state provides visible indicator. |
| **Screen Reader** | Tag label is read as text. Close button should have an accessible label like "Remove [tag name]". |
| **RTL** | Full RTL support with mirrored layout and localized label. |
| **Disabled State** | Disabled tags are excluded from tab order and convey disabled state to assistive technology. |

---

## Related Components

| Component | Relationship |
|-----------|-------------|
| **Badge** | Non-interactive label for status display. Use Badge when the user cannot interact with the label. |
| **Counter** | Numeric count indicator. Use Counter for pure numeric values. |
| **Status Indicator** | Dot + label for minimal status display. Can also appear as a leading element within the Tag. |
| **Button** | Use Button for actions. Tags represent objects/values, not actions. |

---

## Figma Usage

```
Component Set: Tag
Node ID: 16462:101691
File: UEMS - Design System 3.0

Example variant string:
Variant=Primary, Size=Medium, State=Default, RTL=False, Leading Element=Icon
```

### Instance Overrides
1. Select the Tag instance
2. In the properties panel, toggle **Show Close** on/off
3. Edit the **Label** text directly
4. Change **Leading Element** variant to add an icon or status indicator
5. Swap the **Leading Icon** or **Status Indicator** to customize the leading element
6. Toggle **RTL** variant for right-to-left language support
