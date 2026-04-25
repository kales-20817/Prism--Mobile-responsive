# Sidebar Navigation — Level 2

A contextual secondary navigation panel that appears alongside the Level 1 sidebar. It displays the full navigation tree for the currently selected Level 1 section, organised into collapsible groups with a search bar at the top.

**Figma source:** [UEMS — Design System 3.0](https://www.figma.com/design/DahIgbIJrSkzyP3OoHaDaG/UEMS---Design-System-3.0?node-id=18095-1709034) · Frame `18095:1709034`

---

## Overview

Each Level 1 product section (e.g. Configurations, Threats, Patches) has a dedicated Level 2 sidebar panel. Some products that have only a few second-level destinations use a single panel; others with rich sub-navigation (e.g. Threats & Patches, Browsers) expose multiple side-by-side panels — one per Level 1 item selection.

The frame contains **21 sidebar configurations** across all product modules:

| Product Module | Panel Count | Frame Node |
|----------------|:-----------:|------------|
| Configurations | 1 | `16948:800505` |
| Software Deployment | 2 | `16854:220981`, `16948:804996` |
| Inventory | 2 | `16856:422674`, `16948:809173` |
| OS Deployment | 2 | `16860:598498`, `16948:813988` |
| MDM | 1 | `16860:598597` |
| Agent | 2 | `16861:599550`, `16948:817543` |
| Admin | 1 | `16862:602103` |
| Browsers | 1 (3 cols) | `16862:603167` |
| Application Control | 2 | `16862:603763`, `16948:821071` |
| Endpoint DLP | 2 | `16862:604920`, `16948:820755` |
| BitLocker Management | 2 | `16862:605739`, `16948:826684` |
| Reports | 1 | `16862:607019` |
| Device Control | 1 | `16862:606274` |
| Threats & Patches | 1 (5 cols) | `16859:533392` |

---

## Anatomy

```
┌────────────────────────────────┐
│  🔍 Search...                  │  ← Search bar (full width)
├────────────────────────────────┤
│  ˅ Group Header                │  ← Collapsible group title (accent blue)
│      Nav Item                  │  ← Level 2 nav item (text link)
│      Nav Item               →  │  ← Item with sub-menu chevron
│      Nav Item              81  │  ← Item with count badge
├────────────────────────────────┤
│  ˅ Group Header                │
│      Nav Item                  │
│      Nav Item                  │
│      ...                       │
│  ˅ Group Header                │
│      Nav Item                  │
│      ...                       │
│                                │
│  [scrollbar — thin, right]     │
└────────────────────────────────┘
```

### Sub-components

| Sub-component | Node ID | Description |
|---------------|---------|-------------|
| **Nav Group** | `16826:115644` (Expanded) | Collapsible group with title header + items container |
| **Nav Group** | `16826:115578` (Collapsed) | Group title only, items hidden |
| **Search bar** | — | Standard UEMS text input with leading search icon |

---

## Nav Group States

Each sidebar is composed of **Group** slots (up to 8 per panel). Each group has two states:

### Expanded

```
˅  Group Header              ← Chevron-down + section label in accent blue
   Nav Item                  ← Items visible, indented under header
   Nav Item
   Nav Item
```

- Chevron points **down** (`˅`)
- `Items Container` frame is visible
- Group label: `Text/Text-Accent-Link` (`#006AFF`)
- Children: Title instance + Items Container frame

### Collapsed

```
›  Group Header              ← Chevron-right + section label
```

- Chevron points **right** (`›`)
- `Items Container` is hidden
- Label text uses the same accent style — clicking re-expands

---

## Nav Item Types

Within a group's `Items Container`, each row is a navigation item. Three visual variations exist:

| Type | Visual | Usage |
|------|--------|-------|
| **Plain item** | Text only | Standard page destination |
| **Item with count badge** | Text + gray pill counter on right | Shows live record count (e.g. "Installed Patches 81") |
| **Item with sub-menu** | Text + `›` chevron on right | Opens a tertiary flyout or nested sub-section |

```
  Nav Item                          ← Plain
  Nav Item with Count        81     ← Count badge
  Nav Item with Sub          ›      ← Sub-menu indicator
```

---

## Component Properties

### Per-panel (e.g. Configurations component set — `16948:800507`)

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `Group 1` | Boolean | `ON` | Show/hide group slot 1 |
| `Group 2` | Boolean | `ON` | Show/hide group slot 2 |
| `Group 3` | Boolean | `ON` | Show/hide group slot 3 |
| `Group 4` | Boolean | `ON` | Show/hide group slot 4 |
| `Group 5` | Boolean | `OFF` | Show/hide group slot 5 (hidden by default) |
| `Group 6` | Boolean | `OFF` | Show/hide group slot 6 |
| `Group 7` | Boolean | `OFF` | Show/hide group slot 7 |
| `Group 8` | Boolean | `OFF` | Show/hide group slot 8 |
| `Group 1 Swap` | Instance Swap | Expanded group | Swap group 1 to any Nav Group variant (Expanded / Collapsed) |
| `Group 2–8 Swap` | Instance Swap | Expanded group | Swap groups 2–8 independently |
| `Property 1` | Variant | `Default` | Currently only `Default` variant exists at the panel level |

---

## Structure & Spacing

| Property | Value |
|----------|-------|
| Panel width (single) | `~280px` |
| Panel height | `~931px` (design canvas; actual runtime = full viewport height) |
| Background | `BG-Base-White` / `#FFFFFF` |
| Padding (top) | `12px` |
| Padding (sides) | `12px` left / `12px` right |
| Search bar | Full panel width minus padding |
| Group header height | `~32px` |
| Nav item height | `~36px` |
| Item indent | `~16px` left (indented under group header) |
| Scrollbar | Thin, right edge, auto-hide |

---

## Design Tokens

### Panel container

| Element | Token | Resolves (Light mode) |
|---------|-------|----------------------|
| Background | `Background/BG-Base-White` | `#FFFFFF` |
| Right border (divider) | `Border/Border-Secondary` | `#C3C9D6` |

### Search bar

| Element | Token | Resolves (Light mode) |
|---------|-------|----------------------|
| Background | `Background/BG-Secondary-alt` | `#F0F2F5` |
| Placeholder text | `Text/Text-Placeholder` | `#8893AD` |
| Icon | `Border/Icon/Icon-Secondary` | `#2A303D` |
| Border | `Border/Border-Secondary` | `#C3C9D6` |
| Border radius | `Radius/radius-6` | `6px` |

### Group header

| Element | Token | Resolves (Light mode) |
|---------|-------|----------------------|
| Label text | `Text/Text-Accent-Link` | `#006AFF` |
| Chevron icon | `Border/Icon/Icon-Accent` | `#006AFF` |
| Font size | — | `12px` |
| Font weight | — | Medium (500) |

### Nav item — Default

| Element | Token | Resolves (Light mode) |
|---------|-------|----------------------|
| Label text | `Text/Text-Primary` | `#15181E` |
| Background | none | — |
| Font size | — | `13px` |

### Nav item — Hover

| Element | Token | Resolves (Light mode) |
|---------|-------|----------------------|
| Background | `Background/BG-Secondary-alt` | `#F0F2F5` |
| Label text | `Text/Text-Primary` | `#15181E` |
| Border radius | `Radius/radius-4` | `4px` |

### Nav item — Active / Selected

| Element | Token | Resolves (Light mode) |
|---------|-------|----------------------|
| Background | `Background/BG-Accent-Subtle` | `~#E8F0FE` |
| Label text | `Text/Text-Accent-Link` | `#006AFF` |
| Border radius | `Radius/radius-4` | `4px` |

### Count badge

| Element | Token | Resolves (Light mode) |
|---------|-------|----------------------|
| Background | `Background/BG-Secondary-alt` | `#F0F2F5` |
| Text | `Text/Text-Secondary` | `#2A303D` |
| Border radius | `Radius/radius-full` | Pill |
| Font size | — | `11px` |

### Sub-menu chevron

| Element | Token | Resolves (Light mode) |
|---------|-------|----------------------|
| Icon | `Border/Icon/Icon-Secondary` | `#2A303D` |

---

## Product Navigation Content Reference

### Configurations

**Panel:** 1 (`16948:800505`)

| Group | Items |
|-------|-------|
| Add Configurations | Configuration →, Templates, Collection → |
| Views | Nav Item, Trash |
| Reports | USB Reports, Script Repository |
| Settings | Configuration Settings, Script Repository |

---

### Software Deployment

**Panels:** 2 (Packages section `16854:220981` · Settings section `16948:804996`)

| Group | Items |
|-------|-------|
| Package creation | Packages, Templates |
| Deployment | Install/Uninstall Software →, View Configurations, User-defined Templates, Trash, Self Service Portal |
| Reports | Self Service Portal Reports, SSP Usage Reports |
| Settings | Software Repository, Script Repository, Auto-update Templates, Proxy Settings, Deployment Policies, Package Cleanup Settings, Self Service Portal Settings, Red Hat Linux Settings |

---

### Threats & Patches

**Panels:** 5 side-by-side (`16859:533392`) — one per sub-section

**Threats panel:**
| Group | Items |
|-------|-------|
| Threats | Vulnerabilities, Zero-day Vulnerabilities, System Misconfigurations, High Risk Software, Web Server Misconfigurations, Port Audit, Manage Exceptions |

**Patches panel:**
| Group | Items |
|-------|-------|
| Patches | Missing Patches, Installed Patches `81`, Applicable Patches `397`, Top-Priority Patches, Supported Patches `554K`, Latest Patches `78K`, Detailed View, Downloaded Patches, Decline Patch |
| Attention Required | Upload Pending `1` |

**Systems panel:**
| Group | Items |
|-------|-------|
| Health Summary | Highly Vulnerable Systems, Vulnerable Systems `1`, Healthy Systems `8`, System Health Policy |
| Managed Systems | Scan Systems `678`, By Patches `659`, By Vulnerabilities `3`, By Misconfigurations `5`, By Web Server Misconfigurations `2`, By High Risk Software `14` |
| Attention Required | BIOS Mapping Status `2`, EOL Systems, Zero day found, Systems without Agent, Reboot Pending, macOS patching unavailable, Patch Deployment Failed, Failed Security Configurations, Software Uninstallation Failed |

**Deployment panel:**
| Group | Items |
|-------|-------|
| Deployment | Manual Deployment, Test and Approve, Automate Patch Deployment, Disable Automatic Update, Security Configurations, Software Uninstallation, Deployment Policies, Script Repository, Trash |
| Tools | Remote Shutdown, Wake on LAN |

**Compliance panel:**
| Group | Items |
|-------|-------|
| Compliance | Policy Groups, Map and Audit Targets, System Quarantine Policy |

---

### Inventory

**Panels:** 2 (`16856:422674`, `16948:809173`)

Inventory management and asset tracking navigation tree including hardware, software, and system inventory views.

---

### OS Deployment

**Panels:** 2 (`16860:598498`, `16948:813988`)

OS imaging, deployment templates, and task sequence navigation.

---

### MDM

**Panel:** 1 (`16860:598597`)

Mobile device management, enrollment, profiles, and compliance navigation.

---

### Agent

**Panels:** 2 (`16861:599550`, `16948:817543`)

Agent management, remote tools, and system monitoring navigation.

---

### Browsers

**Panel:** 1 with 3 columns (`16862:603167`)

| Group | Items |
|-------|-------|
| Manage | Groups & Computers, Website Group, Extension Repository |
| Policies | Add-on Management, File Activity Restriction, Threat Prevention, Data Leakage Prevention, Browser Customization, Browser Router, Browser Lockdown, Java Manager, Web Filter, Web Isolation, Browser Restriction |
| Insights | Dashboard, Browsers, Browser Add-ons, Computers, Web Activity, Scan Computers, Schedule Scan |

---

### Application Control

**Panels:** 2 (`16862:603763`, `16948:821071`)

Application allow/block list management, policies, privilege management, and compliance reporting.

---

### Endpoint DLP

**Panels:** 2 (`16862:604920`, `16948:820755`)

Data classification, policy creation, policy deployment, and recovery navigation.

---

### BitLocker Management

**Panels:** 2 (`16862:605739`, `16948:826684`)

BitLocker policy creation, deployment, and recovery key management navigation.

---

### Device Control

**Panel:** 1 (`16862:606274`)

Device policy management, sensor monitoring, and deployment navigation.

---

### Reports

**Panel:** 1 (`16862:607019`)

Centralised reporting navigation across all product modules.

---

### Admin

**Panel:** 1 (`16862:602103`)

System administration settings, user management, and configuration navigation.

---

## Usage Guidelines

### When to use

- Always display the Level 2 sidebar alongside the Level 1 sidebar when a user has selected a Level 1 section that has sub-navigation.
- Use the panel that corresponds to the active Level 1 item — do not mix panels across products.
- Show collapsed groups when the content list is very long and only the most relevant group needs immediate visibility.
- Maintain the active item highlight to indicate the current page within the Level 2 tree.

### When NOT to use

- Do not show a Level 2 sidebar for Level 1 sections that are single-destination pages (e.g. Dashboard, Settings with no sub-sections).
- Do not duplicate Level 2 navigation in a top tab bar on the same page — choose one pattern consistently.
- Do not nest a third level of navigation within this sidebar — use breadcrumbs or in-page tabs for tertiary navigation instead.

### Group expand/collapse behaviour

| Scenario | Recommended behaviour |
|----------|----------------------|
| First load for a section | Expand all groups with ≤ 5 items; collapse groups with many items |
| User is on a page within a group | Always keep that group expanded regardless of other groups |
| All groups collapsed | Never allowed — at least one group must always be expanded |
| User navigates away from section | Persist expand/collapse state per user session |

### Count badges

Count badges surface live data counts next to nav items. Follow these rules:

| Count range | Display |
|-------------|---------|
| 0 | Hide badge (no empty `0` badge) |
| 1 – 999 | Show exact number |
| 1,000 – 999,999 | Abbreviate: `78K`, `554K` |
| 1,000,000+ | Abbreviate: `1M` |

### Do / Don't

| Do | Don't |
|----|-------|
| Show the search bar at the top of every panel — it filters across all groups | Remove the search bar even for panels with few items |
| Truncate long item labels with `…` at a consistent max width | Wrap nav item text to two lines |
| Mark the current page with the Active state | Leave all items in Default state — users need a clear location indicator |
| Use `Group N Swap` to set individual groups to Collapsed if that section is not the user's current context | Collapse all groups simultaneously |
| Show count badges only for items that represent filtered views of live data | Add count badges to every item regardless of meaning |

---

## Keyboard Behaviour

| Key | Action |
|-----|--------|
| `Tab` / `Shift+Tab` | Move focus between search bar, group headers, and nav items |
| `Enter` / `Space` | Navigate to focused item, or toggle group expand/collapse when on a header |
| `↑` / `↓` | Move between nav items within a group |
| `←` | Collapse the focused group (when on a group header) |
| `→` | Expand the focused group (when on a collapsed group header) |
| `Home` | Jump to first item in the current group |
| `End` | Jump to last item in the current group |
| Search bar `Escape` | Clear search and restore full tree |

---

## Developer Handoff

### HTML structure

```html
<nav
  class="sidebar-nav-l2"
  aria-label="Configurations navigation"
>
  <!-- Search -->
  <div class="sidebar-l2__search">
    <svg class="search-icon" aria-hidden="true"><!-- magnifier --></svg>
    <input
      type="search"
      placeholder="Search..."
      aria-label="Search navigation"
    />
  </div>

  <!-- Nav tree -->
  <ul class="sidebar-l2__tree" role="list">

    <!-- Expanded group -->
    <li class="nav-group nav-group--expanded">
      <button
        class="nav-group__header"
        aria-expanded="true"
        aria-controls="group-add-config"
      >
        <svg class="nav-group__chevron" aria-hidden="true"><!-- chevron-down --></svg>
        Add Configurations
      </button>
      <ul id="group-add-config" class="nav-group__items" role="list">
        <li>
          <a href="/config/configuration" class="nav-item nav-item--sub">
            Configuration
            <svg class="nav-item__chevron" aria-hidden="true"><!-- chevron-right --></svg>
          </a>
        </li>
        <li>
          <a href="/config/templates" class="nav-item">Templates</a>
        </li>
        <li>
          <a href="/config/collection" class="nav-item nav-item--active" aria-current="page">
            Collection
            <svg class="nav-item__chevron" aria-hidden="true"><!-- chevron-right --></svg>
          </a>
        </li>
      </ul>
    </li>

    <!-- Collapsed group -->
    <li class="nav-group nav-group--collapsed">
      <button
        class="nav-group__header"
        aria-expanded="false"
        aria-controls="group-reports"
      >
        <svg class="nav-group__chevron" aria-hidden="true"><!-- chevron-right --></svg>
        Reports
      </button>
      <ul id="group-reports" class="nav-group__items" role="list" hidden>
        <!-- items hidden when collapsed -->
      </ul>
    </li>

    <!-- Item with count badge -->
    <li>
      <a href="/patches/installed" class="nav-item">
        Installed Patches
        <span class="nav-item__badge" aria-label="81 items">81</span>
      </a>
    </li>

  </ul>
</nav>
```

### CSS

```css
/* Panel */
.sidebar-nav-l2 {
  width: 280px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #C3C9D6;
  display: flex;
  flex-direction: column;
  padding: 12px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #E1E4EB transparent;
}

/* Search bar */
.sidebar-l2__search {
  position: relative;
  margin-bottom: 12px;
}
.sidebar-l2__search input {
  width: 100%;
  padding: 6px 8px 6px 32px;
  background: #F0F2F5;
  border: 1px solid #C3C9D6;
  border-radius: 6px;
  font-size: 13px;
  color: #15181E;
}
.sidebar-l2__search input::placeholder { color: #8893AD; }

/* Group header */
.nav-group__header {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  padding: 6px 4px;
  background: none;
  border: none;
  cursor: pointer;
  color: #006AFF;
  font-size: 12px;
  font-weight: 500;
  text-align: left;
}

/* Group items */
.nav-group__items {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Nav item */
.nav-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 8px 20px; /* 20px = indent under group */
  border-radius: 4px;
  color: #15181E;
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
}
.nav-item:hover {
  background: #F0F2F5;
}
.nav-item--active {
  background: #E8F0FE;
  color: #006AFF;
}

/* Count badge */
.nav-item__badge {
  font-size: 11px;
  font-weight: 500;
  color: #2A303D;
  background: #F0F2F5;
  border-radius: 9999px;
  padding: 1px 6px;
  white-space: nowrap;
}
```

### Group toggle pattern

```js
document.querySelectorAll('.nav-group__header').forEach(header => {
  header.addEventListener('click', () => {
    const group = header.closest('.nav-group');
    const items = group.querySelector('.nav-group__items');
    const isExpanded = header.getAttribute('aria-expanded') === 'true';

    header.setAttribute('aria-expanded', String(!isExpanded));
    items.hidden = isExpanded;
    group.classList.toggle('nav-group--expanded', !isExpanded);
    group.classList.toggle('nav-group--collapsed', isExpanded);
  });
});
```

---

## Accessibility

| Concern | Guidance |
|---------|----------|
| **Landmark** | Wrap in `<nav>` with a descriptive `aria-label` (e.g. `"Configurations navigation"`) |
| **Current page** | Set `aria-current="page"` on the active nav item `<a>` |
| **Group toggle** | Use `<button>` for group headers with `aria-expanded` (`true`/`false`) and `aria-controls` pointing to the items `<ul>` |
| **Collapsed items** | Add `hidden` attribute (not just `display: none`) to the items container so screen readers skip hidden items |
| **Count badges** | Provide `aria-label` on badges with full context: `aria-label="81 installed patches"` rather than just `"81"` |
| **Sub-menu chevron** | The `›` icon should be `aria-hidden="true"` — the item label itself communicates the destination |
| **Search** | Input must have `aria-label="Search navigation"` since there is no visible label element |
| **Focus order** | Tab order: search bar → group 1 header → group 1 items → group 2 header → group 2 items… |
| **Keyboard** | Group headers must be keyboard-activatable (use `<button>`, not `<div>`) |
| **Contrast** | Group header blue (`#006AFF`) on white — meets WCAG AA. Nav item text (`#15181E`) on white — meets WCAG AAA |

---

## Related Components

- **Sidebar Navigation Level 1** — The icon sidebar that drives which Level 2 panel is shown; node `16780:88270`
- **Header Navigation** — The top navigation bar; works in combination with both sidebar levels
- **Breadcrumb** — Use alongside Level 2 navigation to surface the full path when users navigate deep into sub-sections
- **Tooltip** — Use to reveal the full label of truncated nav items on hover

---

*Generated from UEMS Design System 3.0 · Figma frame `18095:1709034`*
