# Breadcrumb

Navigation breadcrumb trail that shows a user's current location within a hierarchy. Built from `_Breadcrumb Item` base components and supports 2–5 levels, overflow collapse, and RTL layouts.

**Figma source:** [UEMS — Design System 3.0](https://www.figma.com/design/DahIgbIJrSkzyP3OoHaDaG/UEMS---Design-System-3.0?node-id=16018-37918) · Node `16018:37918`

---

## Variants

The component set contains **12 variants** across three axes:

| Axis | Values | Description |
|------|--------|-------------|
| `Count` | `2`, `3`, `4`, `5` | Number of breadcrumb levels shown |
| `Overflow` | `False`, `True` | Collapses middle items into `···` (only applicable for Count 4 and 5) |
| `RTL` | `False`, `True` | Reverses item order with `‹` separators and Arabic text |

### Overflow behaviour

When `Overflow=True`, middle items are hidden and replaced with a `···` ellipsis token, keeping the first and last two items visible:

```
Level 1  ›  ···  ›  Level 3  ›  Level 2  ›  Current
```

---

## Component Properties

These text properties are exposed on the parent component for quick prototyping. For production use, select nested `_Breadcrumb Item` instances and edit their own `Label` property directly.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Item 1 Label` | Text | `"Level 1"` | First breadcrumb item text |
| `Item 2 Label` | Text | `"Level 2"` | Second breadcrumb item text |
| `Item 3 Label` | Text | `"Level 3"` | Third breadcrumb item text |
| `Item 4 Label` | Text | `"Level 4"` | Fourth breadcrumb item text |
| `Current Page Label` | Text | `"Current"` | Last/active page label |
| `Show Home Icon` | Boolean | `OFF` | Toggles a leading home icon on the first item |

---

## Sub-component: `_Breadcrumb Item`

Each item in the trail is an instance of `_Breadcrumb Item` (node `17960:740160`). It has three types: **Default**, **Current**, and **Collapsed**.

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Label` | Text | — | Item display text |
| `Show Label` | Boolean | `ON` | Toggles label visibility |
| `Show Icon` | Boolean | `OFF` | Toggles a leading icon |
| `Leading Icon` | Instance Swap | — | Icon placed before the label |
| `Show Separator` | Boolean | `ON` | Toggles the trailing separator chevron |
| `Separator` | Instance Swap | — | Swap the separator icon |

**Item types:**

- **Default** — an ancestor page; rendered as a link (lighter text)
- **Current** — the active page; rendered in bold, non-interactive
- **Collapsed** — the `···` overflow placeholder shown when `Overflow=True`

---

## Anatomy

```
[Home Icon?]  Label 1  ›  Label 2  ›  ···  ›  Label N  ›  Current Page
     ↑             ↑        ↑         ↑            ↑           ↑
  Optional    Default   Separator  Collapsed    Default      Current
  (Show Home  Item                 Item (when   Item         Item
   Icon=ON)                        Overflow=T)
```

---

## Visual Design

| Element | Style |
|---------|-------|
| Default item text | Light gray (`#8993A4` approx.), small/body size |
| Current item text | Dark / near-black (`#292A2E` approx.), **bold** |
| Separator | `›` chevron, same gray as default items |
| Overflow token | `···` (three middle dots), styled as default item |
| RTL separator | `‹` chevron; full layout is mirrored |

---

## Usage Guidelines

### When to use
- To show a user's position within a multi-level hierarchy (e.g. settings, category pages, admin dashboards).
- When users need a reliable way to navigate back to parent pages without using the browser back button.
- In deep navigation trees with 3 or more levels.

### When NOT to use
- For flat, single-level navigation — a back link or tab bar is more appropriate.
- When the path has only one level above the current page — a back link is sufficient.
- As a primary navigation mechanism; breadcrumbs are supplementary wayfinding.

### Do / Don't

| Do | Don't |
|----|-------|
| Reflect the real page hierarchy in the trail | Show the user's click history instead of the actual path |
| Mark only the last item as Current | Bold or highlight intermediate items |
| Use `Overflow=True` when space is constrained (4+ levels) | Truncate labels with `…` mid-word; abbreviate the label instead |
| Show the home icon (`Show Home Icon=ON`) for app root level entries | Place the home icon on every item |
| Use RTL variant for Arabic/Hebrew/RTL locales | Manually mirror LTR breadcrumbs with CSS transforms |

---

## Accessibility

| Concern | Guidance |
|---------|----------|
| Landmark | Wrap in `<nav aria-label="Breadcrumb">` |
| List structure | Render items as `<ol>` with `<li>` elements |
| Current page | Add `aria-current="page"` to the last (Current) item; do not make it a link |
| Overflow | The `···` token should have `aria-label="More items"` and be expandable if interactive |
| Keyboard | All Default items must be focusable links reachable by Tab; Current item is not interactive |
| Contrast | Ensure default item text meets WCAG AA (4.5:1 against background) |
| RTL | Set `dir="rtl"` on the `<nav>` wrapper; do not rely on CSS alone |

---

## All Variants Reference

| Variant | Node ID |
|---------|---------|
| Count=2, Overflow=False, RTL=False | `16018:37738` |
| Count=3, Overflow=False, RTL=False | `16018:37746` |
| Count=4, Overflow=False, RTL=False | `16018:37758` |
| Count=5, Overflow=False, RTL=False | `16018:37774` |
| Count=4, Overflow=True, RTL=False | `16018:37794` |
| Count=5, Overflow=True, RTL=False | `16018:37809` |
| Count=2, Overflow=False, RTL=True | `16018:37828` |
| Count=3, Overflow=False, RTL=True | `16018:37836` |
| Count=4, Overflow=False, RTL=True | `16018:37848` |
| Count=5, Overflow=False, RTL=True | `16018:37864` |
| Count=4, Overflow=True, RTL=True | `16018:37884` |
| Count=5, Overflow=True, RTL=True | `16018:37899` |

---

## Related Components

- **_Breadcrumb Item** (`17960:740160`) — the atomic unit composing every breadcrumb trail
- **Link** — standalone inline navigation link, used for similar anchor styling
- **Icon Button** — used when the home icon in the first item needs an interactive hit area

---

*Generated from UEMS Design System 3.0 · Figma node `16018:37918`*
