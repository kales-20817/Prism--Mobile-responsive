# Avatar Component

**Design System:** UEMS Design System 3.0
**Figma Node:** `16021:26134` (Component Set)
**Page:** Avatar
**Total Variants:** 24

---

## Overview

The Avatar is a compact visual representation of a user or entity. It displays a profile photo, user initials, or a generic placeholder icon when no personal image is available. An interactive hover variant supports editable avatar contexts such as profile picture upload. Avatars are used in navigation headers, user lists, comment threads, activity feeds, and profile pages.

---

## Anatomy

### Image Type

```
  ┌─────────────┐
  │   [Photo]   │   <- Circular frame with user's profile photo
  └─────────────┘
```

### Initials Type

```
  ┌─────────────┐
  │     JD      │   <- Circular frame with user's initials on tinted background
  └─────────────┘
```

### Placeholder Icon Type

```
  ┌─────────────┐
  │    [👤]     │   <- Circular frame with generic person icon on neutral background
  └─────────────┘
```

### Hover Type

```
  ┌─────────────┐
  │  [Photo]    │
  │  ┌───────┐  │   <- Overlay with camera/edit icon, indicating the avatar is editable
  │  │  [📷] │  │
  │  └───────┘  │
  └─────────────┘
```

### Parts

| Part | Description |
|------|-------------|
| **Container** | Circular frame that clips content. Size determines the diameter. |
| **Image** | User's profile photo, clipped to the circular container. Used when `Type = Image`. |
| **Initials Text** | 1–2 character text (user's initials) centered in the circle on a tinted background. Used when `Type = Initials`. |
| **Placeholder Icon** | A generic person/silhouette icon on a neutral background. Used when `Type = Placeholder Icon` (fallback when no image or initials are available). |
| **Hover Overlay** | A semi-transparent overlay with a camera or edit icon that appears on hover. Used when `Type = Hover` to indicate the avatar is interactive/editable. |

---

## Variant Axes

| Property | Values | Description |
|----------|--------|-------------|
| **Size** | `Small`, `Medium`, `Large` | Controls the diameter of the avatar circle and the scale of the inner content. |
| **Type** | `Image`, `Initials`, `Placeholder Icon`, `Hover` | Controls what content is displayed inside the avatar circle. |
| **State** | `Default`, `Disabled` | Interaction state. Disabled reduces opacity and removes interactivity. |

### Variant Count Breakdown

3 (Size) × 4 (Type) × 2 (State) = **24 variants**

---

## Types

| Type | When to Use |
|------|-------------|
| **Image** | The user has a profile photo available. Always prefer this over other types when an image exists. |
| **Initials** | No profile photo is available, but the user's name is known. Renders the first letter(s) of the user's name on a tinted background. |
| **Placeholder Icon** | Neither a photo nor a name is available, or the entity is anonymous/generic. Uses a standard person silhouette icon. |
| **Hover** | The avatar is interactive and editable — e.g., on a profile settings page where the user can upload or change their photo. Renders a camera/edit overlay to signal editability. |

### Type Fallback Order

When rendering an avatar programmatically, use this priority chain:

```
Image  →  Initials  →  Placeholder Icon
```

Show `Hover` type only on interactive/editable avatar surfaces.

---

## Sizes

| Size | Typical Use |
|------|-------------|
| **Small** | Compact lists, table rows, comment threads, activity feeds, inline mentions |
| **Medium** | Navigation headers, user cards, default avatar in most UI contexts |
| **Large** | Profile pages, user detail panels, settings screens, confirmation dialogs |

---

## States

| State | Behavior |
|-------|----------|
| **Default** | Fully visible and interactive at standard opacity. |
| **Disabled** | Reduced opacity. Non-interactive. No hover or focus feedback. Typically used when an account is inactive, suspended, or the avatar action is unavailable. |

---

## Usage Guidelines

### Do
- Always provide an accessible text alternative (e.g., `alt="Jane Doe"` or `aria-label="Jane Doe"`) for the avatar image
- Use the `Image` type whenever a profile photo is available
- Fall back gracefully: Image → Initials → Placeholder Icon
- Use `Hover` type only on surfaces where the avatar is explicitly editable (e.g., profile settings)
- Use consistent avatar sizes within the same context (e.g., all avatars in a list should be the same size)
- Use `Disabled` state when the user account is inactive or the avatar action is unavailable

### Don't
- Don't use the `Hover` type as a default or in read-only list views
- Don't use initials with more than 2 characters — keep it to 1 or 2 letters
- Don't stretch or deform images — always clip to the circular frame
- Don't use avatars as the sole means of identifying a user in critical contexts — always pair with a name or label where space allows
- Don't display avatars without a fallback strategy for missing images

---

## Initials Generation

When `Type = Initials`, derive the initials from the user's display name using this convention:

| Name Format | Initials |
|-------------|----------|
| First + Last name (e.g., "Jane Doe") | `JD` |
| Single name (e.g., "Javier") | `J` |
| Display name with more than two words (e.g., "Jane Marie Doe") | `JD` (first + last only) |
| Unknown / empty | Fall back to `Placeholder Icon` type |

---

## Accessibility

| Aspect | Implementation |
|--------|---------------|
| **Alt Text** | Provide `alt="[User's full name]"` for image avatars. For initials/placeholder, use `aria-label="[User's name] avatar"` or equivalent. |
| **Decorative Avatars** | If the avatar appears alongside a visible name label and is purely decorative, use `alt=""` or `aria-hidden="true"` to avoid redundant announcements. |
| **Disabled State** | Disabled avatars should use `aria-disabled="true"` if they are focusable. Remove from tab order if purely visual. |
| **Hover / Editable** | The editable (`Hover` type) avatar must be keyboard accessible. Provide an accessible label like `aria-label="Change profile photo"`. |
| **Color Contrast** | Initials text on tinted backgrounds must meet WCAG 2.1 AA contrast ratio (4.5:1). Placeholder icon on neutral background must also meet contrast requirements. |
| **Focus** | Editable avatars should display a visible focus ring when focused via keyboard. |

---

## Related Components

| Component | Relationship |
|-----------|-------------|
| **Avatar Group** | Displays a stack of overlapping avatars for showing multiple users (e.g., "+3 more"). Built using the Avatar component. |
| **Badge** | Can be combined with Avatar to show status (e.g., online/offline indicator overlaid on the avatar). |
| **User Card / Profile Card** | Larger surface that uses Avatar as a key element alongside user name, role, and actions. |

---

## Figma Usage

```
Component Set: Avatar
Node ID: 16021:26134
File: UEMS - Design System 3.0

Example variant string:
Size=Medium, Type=Image, State=Default
```

### Instance Overrides
1. Select the Avatar instance
2. Set **Type** to match the available user data: `Image` if a photo exists, `Initials` if name is known, `Placeholder Icon` as fallback
3. Set **Size** based on the surrounding UI density and context
4. Use **Type = Hover** only on profile settings or editable avatar surfaces
5. Set **State = Disabled** for inactive or suspended user accounts
