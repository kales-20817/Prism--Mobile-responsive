# UEMS Theme Tokens

Semantic design tokens for the UEMS Design System. This collection acts as the **theming layer** — each token maps to a primitive from `Primitive colors`, `style Primitivies`, or base values, and resolves to a different hex value depending on the active theme mode.

**Figma source:** [UEMS — Design System 3.0](https://www.figma.com/design/DahIgbIJrSkzyP3OoHaDaG/UEMS---Design-System-3.0) · Collection ID `VariableCollectionId:69:22`

---

## Themes (Modes)

The collection supports **4 modes**. Every color token in this collection resolves differently per mode; spacing, radius, and font-size tokens are theme-invariant.

| Mode | Description |
|------|-------------|
| **Light theme** | Default. White surfaces, dark text, Cobalt blue accent |
| **Dark theme** | Dark charcoal surfaces, light text, lighter Cobalt blue accent |
| **Night theme** | True dark (near-black) surfaces; Error/Warning map to Charoite (purple) palette |
| **Green accent** | Same dark surfaces as Night theme; primary action color switches to Fern green |

> **Night theme note:** In Night and Green accent modes, the semantic Error color role is remapped to the **Charoite** (purple) palette, and Warning stays on Persimmon (orange). This is an intentional divergence for accessibility in very dark environments.

---

## Token Architecture

```
Primitive colors  ──►  UEMS Theme Tokens  ──►  Components
  (raw hex)               (semantic)               (apply token)
  
  e.g.                  e.g.                    e.g.
  Cobalt/Cobalt-500     Background/BG-Button-   <Button bg>
  #2C66DD               Primary
```

---

## 1. Text Color Tokens

> **Reading the table:** Values shown as `hex (Primitive alias)`. All 4 modes listed left to right.

### 4.1 Neutral Text

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Text/Text-Primary` | `#15181E` (Grey Modern 900) | `#E1E4EB` (Grey Modern 100) | `#E7E7E7` (Grey 100) | `#E1E4EB` (Grey Modern 100) |
| `Text/Text-Secondary` | `#2A303D` (Grey Modern 800) | `#C3C9D6` (Grey Modern 200) | `#B5B5B6` (Grey 300) | `#A5AEC1` (Grey Modern 300) |
| `Text/Text-Tertiary` | `#40485B` (Grey Modern 700) | `#A5AEC1` (Grey Modern 300) | `#ABABAB` (Grey 350) | `#ABABAB` (Grey 350) |
| `Text/Text-Quaternary` | `#55607A` (Grey Modern 600) | `#8893AD` (Grey Modern 400) | `#B5B5B6` (Grey 300) | `#B5B5B6` (Grey 300) |
| `Text/Text-Disabled` | `#8893AD` (Grey Modern 400) | `#55607A` (Grey Modern 600) | `#7A7A7A` (Grey 550) | `#838485` (Grey 500) |
| `Text/Text-White` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| `Text/Text-Black` | `#000000` | `#000000` | `#000000` | `#000000` |
| `Text/Text-Placeholder` | `#8893AD` (Grey Modern 400) | `#55607A` (Grey Modern 600) | `#ABABAB` (Grey 350) | `#ABABAB` (Grey 350) |
| `Text/Text-Placeholder_subtle` | `#A5AEC1` (Grey Modern 300) | `#40485B` (Grey Modern 700) | `#626262` (Grey 650) | `#626262` (Grey 650) |

### 4.2 Semantic Text

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Text/Text-Error` | `#C1181B` (Cardinal 600) | `#E94D4F` (Cardinal 400) | `#7648A3` (Charoite 400) | `#7648A3` (Charoite 400) |
| `Text/Text-Alert` | `#956B11` (Sunshine 750) | `#E0A01A` (Sunshine 600) | `#C78E17` (Sunshine 650) | `#FAC248` (Sunshine 400) |
| `Text/Text-Success` | `#0A7138` (Fern 600) | `#55AC7C` (Fern 300) | `#249457` (Fern 400) | `#86C4A2` (Fern 200) |
| `Text/Text-Warning` | `#BC4200` (Persimmon 600) | `#FF6A1A` (Persimmon 400) | `#E65100` (Persimmon 500) | `#FF6A1A` (Persimmon 400) |
| `Text/Text-Acknowledge` | `#663399` (Charoite 500) | `#9471B8` (Charoite 300) | `#C78E17` (Sunshine 650) | `#FAC248` (Sunshine 400) |

### 4.3 Accent Text

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Text/Text-Accent-Link` | `#006AFF` (Hyperlink) | `#00A6FF` (Hyperlink dark) | `#00A6FF` | `#006AFF` |
| `Text/Text-Accent-Primary` | `#0E2553` (Cobalt 850) | `#96B3EE` (Cobalt 200) | `#4276E0` (Cobalt 400) | `#4276E0` (Cobalt 400) |
| `Text/Text-Accent-Secondary` | `#184091` (Cobalt 700) | `#6B94E7` (Cobalt 300) | `#4276E0` (Cobalt 400) | `#4276E0` (Cobalt 400) |
| `Text/Text-Accent-Tertiary` | `#1E52BB` (Cobalt 600) | `#80A3EB` (Cobalt 250) | `#4276E0` (Cobalt 400) | `#4276E0` (Cobalt 400) |

---

## 5. Background Color Tokens

### 5.1 Base Surfaces

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Background/BG-Base` | `#FFFFFF` | `#0A0B0F` (Grey Modern 950) | `#0C0C0C` (Grey 1050) | `#FFFFFF` |
| `Background/Background` | `#EBF4FF` (Cobalt 15) | `#0A0B0F` (Grey Modern 950) | `#0C0C0C` (Grey 1050) | `#FFFFFF` |
| `Background/BG-Base-White` | `#FFFFFF` | `#F9FAFB` (Grey Modern 25) | `#FFFFFF` | `#FFFFFF` |
| `Background/BG-Base-Black` | `#000000` | `#000000` | `#000000` | `#000000` |

### 5.2 Neutral Surfaces (Layered Hierarchy)

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Background/BG-Primary` | `#FFFFFF` | `#15181E` (Grey Modern 900) | `#181818` (Grey 950) | `#181818` |
| `Background/BG-Primary-alt` | `#FFFFFF` | `#20242E` (Grey Modern 850) | `#202123` (Grey 900) | `#202123` |
| `Background/BG-Secondary` | `#F0F2F5` (Grey Modern 50) | `#20242E` (Grey Modern 850) | `#202123` (Grey 900) | `#202123` |
| `Background/BG-Secondary-alt` | `#F0F2F5` | `#15181E` (Grey Modern 900) | `#313131` (Grey 850) | `#313131` |
| `Background/BG-Secondary_subtle` | `#F9FAFB` (Grey Modern 25) | `#15181E` | `#39393B` (Grey 800) | `#39393B` |
| `Background/BG-Tertiary` | `#E1E4EB` (Grey Modern 100) | `#2A303D` (Grey Modern 800) | `#39393B` (Grey 800) | `#39393B` |
| `Background/BG-Quaternary` | `#D2D7E0` (Grey Modern 150) | `#40485B` (Grey Modern 700) | `#525354` (Grey 700) | `#525354` |

### 5.3 Neutral Solid Surfaces (for dark overlays / sticky elements)

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Background/BG-Primary-Solid` | `#15181E` | `#20242E` | `#2A303D` | `#2A303D` |
| `Background/BG-Secondary-Solid` | `#313746` | `#313746` | `#313746` | `#313746` |
| `Background/BG-Tertiary-Solid` | `#4A546B` | `#4A546B` | `#40485B` | `#40485B` |
| `Background/BG-Quaternary-Solid` | `#5F6C89` | `#55607A` | `#4A546B` | `#4A546B` |

### 5.4 Interactive / State Surfaces

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Background/BG-Primary-hover` | `#F0F2F5` | `#2A303D` | `#39393B` | `#39393B` |
| `Background/BG-Secondary-hover` | `#E1E4EB` | `#313746` | `#39393B` | `#39393B` |
| `Background/BG-Active` | `#F0F2F5` | `#313746` | `#4A546B` | `#4A546B` |
| `Background/BG-Disabled` | `#E1E4EB` | `#2A303D` | `#39393B` | `#39393B` |
| `Background/BG-Disabled_subtle` | `#F0F2F5` | `#15181E` | `#202123` | `#202123` |
| `Background/BG-Overlay` | `#0B0C0E` (60% opacity) | `#2A303D` | `#313746` | `#313746` |
| `Background/BG-Icon-Fill` | `#15181E` | `#C3C9D6` | `#C3C9D6` | `#2A303D` |

### 5.5 Accent (Brand / Action) Surfaces

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Background/BG-Button-Primary` | `#006AFF` | `#00A6FF` | `#2C66DD` (Cobalt 500) | `#0C8844` (Fern 500) |
| `Background/BG-Button-Primary-Hover` | `#1E52BB` (Cobalt 600) | `#006AFF` | `#1E52BB` | `#2C66DD` |
| `Background/BG-Button-Primary-Pressed` | `#184091` (Cobalt 700) | `#4276E0` (Cobalt 400) | `#5685E4` (Cobalt 350) | `#2C66DD` |
| `Background/BG-Accent-Primary` | `#EAF0FC` (Cobalt 25) | `#071229` (Cobalt 950) | `#071229` | `#071229` |
| `Background/BG-Accent-Primary_alt` | `#EAF0FC` | `#0E2553` (Cobalt 850) | `#0E2553` | `#0E2553` |
| `Background/BG-Accent-Primary_subtle` | `#F0F4FD` (Cobalt 05) | `#15181E` | `#071229` | `#071229` |
| `Background/BG-Accent-Primary_action` | `#EAF0FC` | `#15181E` | `#071229` | `#071229` |
| `Background/BG-Accent-Primary-Hover` | `#D5E0F8` (Cobalt 50) | `#112E68` (Cobalt 800) | `#112E68` | `#0E2553` |
| `Background/BG-Accent-Secondary` | `#D5E0F8` (Cobalt 50) | `#0A1B3E` (Cobalt 900) | `#0A1B3E` | `#1E52BB` |
| `Background/BG-Accent-Secondary-Solid` | `#2C66DD` | `#1E52BB` | `#1E52BB` | `#1E52BB` |
| `Background/BG-Accent-Secondary_action` | `#D5E0F8` | `#20242E` | `#0A1B3E` | `#1E52BB` |

### 5.6 Success Surfaces

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Background/BG-Success-Primary` | `#E7F3ED` (Fern 25) | `#02170B` (Fern 1000) | `#02170B` | `#02170B` |
| `Background/BG-Success-Secondary` | `#CEE7DA` (Fern 50) | `#054422` (Fern 800) | `#054422` | `#054422` |
| `Background/BG-Success-Solid` | `#0C8844` (Fern 500) | `#096633` (Fern 650) | `#0C8844` | `#0C8844` |
| `Background/BG-Success-Solid-Hover` | `#0A7138` (Fern 600) | `#0A7138` | `#0A7138` | `#0A7138` |
| `Background/BG-Success-Solid-Pressed` | `#074F28` (Fern 750) | `#3DA069` (Fern 350) | `#3DA069` | `#0A7138` |
| `Background/BG-Success-Disabled` | `#55AC7C` (Fern 300) | `#054422` (Fern 800) | `#054422` | `#054422` |

### 5.7 Error Surfaces

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Background/BG-Error-Primary` | `#FDEBEB` (Cardinal 25) | `#150303` (Cardinal 1000) | `#140A1F` (Charoite 950) | `#140A1F` |
| `Background/BG-Error-Secondary` | `#FAD7D8` (Cardinal 50) | `#6B0D0F` (Cardinal 800) | `#33194C` (Charoite 800) | `#5C2E89` (Charoite 600) |
| `Background/BG-Error-Solid` | `#E42527` (Cardinal 500) | `#961315` (Cardinal 700) | `#663399` (Charoite 500) | `#663399` |
| `Background/BG-Error-Solid-Hover` | `#C1181B` (Cardinal 600) | `#C1181B` | `#5C2E89` (Charoite 600) | `#5C2E89` |
| `Background/BG-Error-Solid-Pressed` | `#811012` (Cardinal 750) | `#EB6163` (Cardinal 350) | `#855CAD` (Charoite 350) | `#5C2E89` |
| `Background/BG-Error-Disabled` | `#EE7476` (Cardinal 300) | `#6B0D0F` (Cardinal 800) | `#33194C` (Charoite 800) | `#33194C` |

### 5.8 Alert Surfaces

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Background/BG-Alert-Primary` | `#FEF8EB` (Sunshine 25) | `#181103` (Sunshine 1000) | `#181103` | `#181103` |
| `Background/BG-Alert-Secondary` | `#FEF1D6` (Sunshine 50) | `#7C590E` (Sunshine 800) | `#7C590E` | `#E0A01A` (Sunshine 600) |
| `Background/BG-Alert-Solid` | `#F9B21D` (Sunshine 500) | `#E0A01A` (Sunshine 600) | `#F9B21D` | `#F9B21D` |
| `Background/BG-Alert-Solid-Hover` | `#E0A01A` | `#E0A01A` | `#E0A01A` | `#E0A01A` |
| `Background/BG-Alert-Solid-Pressed` | `#AE7C14` (Sunshine 700) | `#FBC95C` (Sunshine 350) | `#FBC95C` | `#E0A01A` |
| `Background/BG-Alert-Disabled` | `#FBCF71` (Sunshine 300) | `#7C590E` (Sunshine 800) | `#7C590E` | `#7C590E` |

### 5.9 Warning Surfaces

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Background/BG-Warning-Primary` | `#FFEEE5` (Persimmon 25) | `#150700` (Persimmon 1000) | `#2A0F00` (Persimmon 950) | `#3F1600` (Persimmon 900) |
| `Background/BG-Warning-Secondary` | `#FFDECC` (Persimmon 50) | `#682500` (Persimmon 800) | `#682500` | `#D14900` (Persimmon 550) |
| `Background/BG-Warning-Solid` | `#E65100` (Persimmon 500) | `#A73A00` (Persimmon 650) | `#D14900` (Persimmon 550) | `#D14900` |
| `Background/BG-Warning-Solid-Hover` | `#BC4200` (Persimmon 600) | `#BC4200` | `#D14900` | `#D14900` |
| `Background/BG-Warning-Solid-Pressed` | `#933300` (Persimmon 700) | `#FF7A33` (Persimmon 350) | `#D14900` | `#D14900` |

### 5.10 Acknowledge Surfaces

"Acknowledge" is a special semantic state (Charoite/purple in Light, mapped to Sunshine in Night/Green accent).

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Background/BG-Acknowldege-Primary` | `#F1EAF8` (Charoite 25) | `#1E0F2E` (Charoite 900) | `#4A3509` (Sunshine 900) | `#181103` (Sunshine 1000) |
| `Background/BG-Acknowldege-Secondary` | `#E3D5F1` (Charoite 50) | `#33194C` (Charoite 800) | `#7C590E` (Sunshine 800) | `#181103` (Sunshine 1000) |
| `Background/BG-Acknowldege-Solid` | `#663399` (Charoite 500) | `#5C2E89` (Charoite 600) | `#181103` (Sunshine 1000) | `#181103` |

---

## 6. Border Color Tokens

### 6.1 Neutral Borders

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Border/Border-Primary` | `#B4BBCC` (Grey Modern 250) | `#40485B` (Grey Modern 700) | `#6A6B6C` (Grey 600) | `#6A6B6C` |
| `Border/Border-Secondary` | `#C3C9D6` (Grey Modern 200) | `#2A303D` (Grey Modern 800) | `#39393B` (Grey 800) | `#39393B` |
| `Border/Border-Tertiary` | `#E1E4EB` (Grey Modern 100) | `#2A303D` | `#202123` (Grey 900) | `#39393B` |
| `Border/Border-Quaternary` | `#F0F2F5` (Grey Modern 50) | `#20242E` (Grey Modern 850) | `#202123` | `#39393B` |
| `Border/Border-Disabled` | `#E1E4EB` | `#2A303D` | `#39393B` | `#39393B` |
| `Border/Border-Disabled_subtle` | `#F0F2F5` | `#20242E` | `#39393B` | `#39393B` |

### 6.2 Accent Borders

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Border/Border-Accent` | `#006AFF` | `#00A6FF` | `#1E52BB` (Cobalt 600) | `#1E52BB` |
| `Border/Border-Accent-subtle` | `#C0D1F5` (Cobalt 100) | `#0E2553` (Cobalt 850) | `#112E68` (Cobalt 800) | `#112E68` |
| `Border/Border-Accent-Secondary` | `#6B94E7` (Cobalt 300) | `#184091` (Cobalt 700) | `#184091` | `#184091` |
| `Border/Border-Accent-Disabled` | `#ABC2F1` (Cobalt 150) | `#112E68` (Cobalt 800) | `#112E68` | `#112E68` |
| `Border/Border-Accent-Focus` | `#006AFF` | `#00A6FF` | `#006AFF` | — |

### 6.3 Success Borders

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Border/Border-Success` | `#0C8844` (Fern 500) | `#249457` (Fern 400) | `#0A7138` (Fern 600) | `#0A7138` |
| `Border/Border-Success-subtle` | `#B7DCC7` (Fern 100) | `#054422` (Fern 800) | `#054422` | `#054422` |
| `Border/Border-Success-Secondary` | `#55AC7C` (Fern 300) | `#085B2D` (Fern 700) | `#085B2D` | `#085B2D` |

### 6.4 Error Borders

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Border/Border-Error` | `#E42527` (Cardinal 500) | `#C1181B` (Cardinal 600) | `#5C2E89` (Charoite 600) | `#5C2E89` |
| `Border/Border-Error-subtle` | `#F8C4C4` (Cardinal 100) | `#6B0D0F` (Cardinal 800) | `#33194C` (Charoite 800) | `#33194C` |
| `Border/Border-Error-Secondary` | `#EE7476` (Cardinal 300) | `#961315` (Cardinal 700) | `#47246B` (Charoite 700) | `#47246B` |

### 6.5 Alert Borders

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Border/Border-Alert` | `#F9B21D` (Sunshine 500) | `#FAC248` (Sunshine 400) | `#E0A01A` (Sunshine 600) | `#E0A01A` |
| `Border/Border-Alert-subtle` | `#FDEBC2` (Sunshine 100) | `#4A3509` (Sunshine 900) | `#4A3509` | `#4A3509` |
| `Border/Border-Alert-Secondary` | `#FBCF71` (Sunshine 300) | `#AE7C14` (Sunshine 700) | `#AE7C14` | `#AE7C14` |

### 6.6 Warning Borders

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Border/Border-Warning` | `#E65100` (Persimmon 500) | `#FF6A1A` (Persimmon 400) | `#BC4200` (Persimmon 600) | `#E0A01A` (Sunshine 600) |
| `Border/Border-Warning-subtle` | `#FFCEB3` (Persimmon 100) | `#682500` (Persimmon 800) | `#3F1600` (Persimmon 900) | `#4A3509` (Sunshine 900) |
| `Border/Border-Warning-Secondary` | `#FF8B4D` (Persimmon 300) | `#933300` (Persimmon 700) | `#933300` | `#AE7C14` (Sunshine 700) |

---

## 7. Icon Color Tokens (`Border/Icon/`)

Icon tokens share the `Border/Icon/` namespace. Despite the namespace name, these control **icon fill/stroke color**, not element borders.

### 7.1 Neutral Icons

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Border/Icon/Icon-Primary` | `#15181E` | `#E1E4EB` | `#E9E9E9` (Grey 50) | `#E9E9E9` |
| `Border/Icon/Icon-Secondary` | `#2A303D` | `#C3C9D6` | `#C4C4C4` (Grey 250) | `#C4C4C4` |
| `Border/Icon/Icon-Tertiary` | `#55607A` | `#8893AD` | `#C4C4C4` | `#C4C4C4` |
| `Border/Icon/Icon-Subtle` | `#96A0B7` (Grey Modern 350) | `#40485B` | `#C4C4C4` | `#C4C4C4` |
| `Border/Icon/Icon-Disabled` | `#8893AD` | `#55607A` | `#6A6B6C` (Grey 600) | `#8893AD` |
| `Border/Icon/Icon-White` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` | `#FFFFFF` |
| `Border/Icon/Icon-Black` | `#000000` | `#000000` | `#000000` | `#000000` |

### 7.2 Semantic Icons

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Border/Icon/Icon-Error` | `#C1181B` | `#E94D4F` | `#663399` (Charoite 500) | `#663399` |
| `Border/Icon/Icon-Error-Secondary` | `#E94D4F` | `#C1181B` | `#663399` | `#663399` |
| `Border/Icon/Icon-Alert` | `#956B11` | `#FABB34` (Sunshine 450) | `#C78E17` (Sunshine 650) | `#FAC248` |
| `Border/Icon/Icon-Alert-Secondary` | `#E0A01A` | `#C78E17` | `#C78E17` | `#FAC248` |
| `Border/Icon/Icon-Success` | `#0A7138` | `#249457` | `#0C8844` | `#0C8844` |
| `Border/Icon/Icon-Success-Secondary` | `#249457` | `#0A7138` | `#0C8844` | `#0C8844` |
| `Border/Icon/Icon-warning` | `#BC4200` | `#FF5900` (Persimmon 450) | `#E65100` | `#E65100` |
| `Border/Icon/Icon-warning-Secondary` | `#FF5900` | `#D14900` | `#E65100` | `#E65100` |
| `Border/Icon/Icon-Acknowledge` | `#5C2E89` (Charoite 600) | `#9471B8` (Charoite 300) | `#C78E17` | `#FAC248` |

### 7.3 Accent Icons

| Token | Light | Dark | Night | Green accent |
|-------|-------|------|-------|--------------|
| `Border/Icon/Icon-Accent` | `#1E52BB` | `#80A3EB` (Cobalt 250) | `#112E68` | `#112E68` |
| `Border/Icon/Icon-Accent-Button` | `#006AFF` | `#00A6FF` | `#00A6FF` | `#FFFFFF` |
| `Border/Icon/Icon-Accent-disabled` | `#96B3EE` (Cobalt 200) | `#112E68` | `#112E68` | `#112E68` |

---

## 8. Chart Color Tokens

Chart tokens are semantic palette slots for data visualisation. Each color family has 6 levels (Primary → Senary) that lighten toward Senary in Light mode and darken toward Senary in Dark mode.

### 8.1 Blue (Cobalt)

| Token | Light | Dark |
|-------|-------|------|
| `Chart/BG-Chart-Blue-Primary` | `#2C66DD` | `#4276E0` |
| `Chart/BG-Chart-Blue-Secondary` | `#4276E0` | `#2C66DD` |
| `Chart/BG-Chart-Blue-Tertiary` | `#6B94E7` | `#1E52BB` |
| `Chart/BG-Chart-Blue-Quaternary` | `#96B3EE` | `#184091` |
| `Chart/BG-Chart-Blue-Quinary` | `#C0D1F5` | `#112E68` |
| `Chart/BG-Chart-Blue-Senary` | `#EAF0FC` | `#0A1B3E` |

### 8.2 Red (Cardinal / Charoite in Night)

| Token | Light | Dark | Night / Green accent |
|-------|-------|------|---------------------|
| `Chart/BG-Chart-Red-Primary` | `#E42527` | `#E94D4F` | `#663399` (Charoite 500) |
| `Chart/BG-Chart-Red-Secondary` | `#E94D4F` | `#E42527` | `#7648A3` (Charoite 400) |
| `Chart/BG-Chart-Red-Tertiary` | `#EE7476` | `#C1181B` | `#9471B8` |
| `Chart/BG-Chart-Red-Quaternary` | `#F39C9D` | `#961315` | `#B399CD` |
| `Chart/BG-Chart-Red-Quinary` | `#F8C4C4` | `#6B0D0F` | `#D5C0EA` (Charoite 100) |
| `Chart/BG-Chart-Red-Senary` | `#FDEBEB` | `#400809` | `#F1EAF8` (Charoite 25) |

### 8.3 Orange (Persimmon)

| Token | Light | Dark |
|-------|-------|------|
| `Chart/BG-Chart-Orange-Primary` | `#E65100` | `#FF6A1A` |
| `Chart/BG-Chart-Orange-Secondary` | `#FF6A1A` | `#E65100` |
| `Chart/BG-Chart-Orange-Tertiary` | `#FF8B4D` | `#BC4200` |
| `Chart/BG-Chart-Orange-Quaternary` | `#FFAC80` | `#933300` |
| `Chart/BG-Chart-Orange-Quinary` | `#FFCEB3` | `#682500` |
| `Chart/BG-Chart-Orange-Senary` | `#FFEEE5` | `#3F1600` |

### 8.4 Yellow (Sunshine)

| Token | Light | Dark |
|-------|-------|------|
| `Chart/BG-Chart-Yellow-Primary` | `#F9B21D` | `#FAC248` |
| `Chart/BG-Chart-Yellow-Secondary` | `#FAC248` | `#F9B21D` |
| `Chart/BG-Chart-Yellow-Tertiary` | `#FBCF71` | `#E0A01A` |
| `Chart/BG-Chart-Yellow-Quaternary` | `#FCDD99` | `#AE7C14` |
| `Chart/BG-Chart-Yellow-Quinary` | `#FDEBC2` | `#7C590E` |
| `Chart/BG-Chart-Yellow-Senary` | `#FEF8EB` | `#4A3509` |

### 8.5 Green (Fern)

| Token | Light | Dark |
|-------|-------|------|
| `Chart/BG-Chart-Green-Primary` | `#0C8844` | `#249457` |
| `Chart/BG-Chart-Green-Secondary` | `#249457` | `#0C8844` |
| `Chart/BG-Chart-Green-Tertiary` | `#55AC7C` | `#0A7138` |
| `Chart/BG-Chart-Green-Quaternary` | `#86C4A2` | `#085B2D` |
| `Chart/BG-Chart-Green-Quinary` | `#B7DCC7` | `#054422` |
| `Chart/BG-Chart-Green-Senary` | `#E7F3ED` | `#042D17` |

### 8.6 Grey (Grey Modern)

| Token | Light | Dark |
|-------|-------|------|
| `Chart/BG-Chart-Grey-Primary` | `#6A7898` (Grey Modern 500) | `#8893AD` |
| `Chart/BG-Chart-Grey-Secondary` | `#8893AD` | `#6A7898` |
| `Chart/BG-Chart-Grey-Tertiary` | `#A5AEC1` | `#55607A` |
| `Chart/BG-Chart-Grey-Quaternary` | `#C3C9D6` | `#40485B` |
| `Chart/BG-Chart-Grey-Quinary` | `#E1E4EB` | `#2A303D` |
| `Chart/BG-Chart-Grey-Senary` | `#F9FAFB` | `#15181E` |

### 8.7 Charoite (Purple)

| Token | Light | Dark |
|-------|-------|------|
| `Chart/BG-Chart-Charoite-Primary` | `#663399` | `#7648A3` |
| `Chart/BG-Chart-Charoite-Secondary` | `#7648A3` | `#663399` |
| `Chart/BG-Chart-Charoite-Tertiary` | `#9471B8` | `#5C2E89` |
| `Chart/BG-Chart-Charoite-Quaternary` | `#B399CD` | `#47246B` |
| `Chart/BG-Chart-Charoite-Quinary` | `#D5C0EA` | `#33194C` |
| `Chart/BG-Chart-Charoite-Senary` | `#F1EAF8` | `#1E0F2E` |

---

## 9. Summary Statistics

| Category | Token Count |
|----------|-------------|
| Spacing | 22 |
| Radius | 7 |
| Font Size | 21 |
| Text | 19 |
| Background | 57 |
| Border (stroke) | 23 |
| Border/Icon | 19 |
| Chart | 43 |
| **Total** | **211** |

---

## 10. Usage Rules

1. **Always use semantic tokens in components** — never reference `Primitive colors` directly in component fills or text styles. This ensures the component responds to theme switching.
2. **Match the full semantic intent** — use `Text/Text-Error` for error text, not `Text/Text-Primary` in red. Semantic names make theming automatic.
3. **Check Night theme separately** — because Night and Green accent remap Error → Charoite and Acknowledge → Sunshine, QA these states explicitly when building night-mode UI.
4. **Chart tokens are sequential** — Primary is the most prominent, Senary is the lightest (Light) / darkest (Dark). Use them in order for multi-series charts.
5. **Acknowledge vs Error** — "Acknowledge" is a distinct semantic state (user-confirmed / purple). Do not use Error tokens for acknowledged states.

---

## Related Collections

| Collection | Purpose |
|-----------|---------|
| `Primitive colors` (199 vars) | Raw hex values; source for all UEMS Theme Token aliases |
| `UEMS Global Tokens` (32 vars) | Layout, sizing, and elevation tokens shared globally |
| `Typography` (132 vars) | Font size/weight/line-height by scale and typeface mode |
| `Font-family` (11 vars) | Typeface switcher (Zoho Puvi, Lato, Roboto) |
| `Type primitives` (28 vars) | Raw font-size and line-height primitives |
| `style Primitivies` (23 vars) | Raw spacing and size steps |

---

*Generated from UEMS Design System 3.0 · Figma variable collection `VariableCollectionId:69:22`*
