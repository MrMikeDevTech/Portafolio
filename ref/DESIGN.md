---
name: Lumina Tech Persona
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#d5c0d6'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#9d8b9f'
  outline-variant: '#514254'
  surface-tint: '#eeb1ff'
  primary: '#eeb1ff'
  on-primary: '#53006f'
  primary-container: '#b000e6'
  on-primary-container: '#fee7ff'
  inverse-primary: '#9b00cb'
  secondary: '#bbc7e2'
  on-secondary: '#253146'
  secondary-container: '#3e4960'
  on-secondary-container: '#adb9d3'
  tertiary: '#00dbe7'
  on-tertiary: '#00363a'
  tertiary-container: '#00787f'
  on-tertiary-container: '#bafaff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fad7ff'
  primary-fixed-dim: '#eeb1ff'
  on-primary-fixed: '#330045'
  on-primary-fixed-variant: '#76009b'
  secondary-fixed: '#d7e3ff'
  secondary-fixed-dim: '#bbc7e2'
  on-secondary-fixed: '#0f1c30'
  on-secondary-fixed-variant: '#3b475d'
  tertiary-fixed: '#74f5ff'
  tertiary-fixed-dim: '#00dbe7'
  on-tertiary-fixed: '#002022'
  on-tertiary-fixed-variant: '#004f54'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Sora
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Sora
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 80px
  element-gap: 16px
  grid-columns: '12'
---

## Brand & Style

The design system for this personal portfolio project focuses on a "Developer-First" aesthetic, combining deep atmospheric tones with high-energy accents. It is designed to evoke technical proficiency, precision, and modern creative flair.

The visual style is a hybrid of **Corporate Modern** and **Glassmorphism**. It utilizes the structured reliability of enterprise software while introducing depth through translucent layers and vibrant blurs. The interface should feel like a high-end IDE or a futuristic terminalclean, dark, and highly functional. By leveraging the contrast between Deep Navy and Vibrant Purple, the UI guides the user's eye to key achievements and call-to-actions, maintaining a professional yet distinctive digital presence.

## Colors

The palette is anchored by **Deep Navy (#00091d)**, providing a vast, focused background that reduces eye strain and makes code or project screenshots pop. **Vibrant Purple (#b000e6)** serves as the energetic pulse of the system, used exclusively for primary interactions, active states, and brand-defining accents.

In **Dark Mode**, the system uses tonal layering; surfaces are slightly lighter than the background to create hierarchy without needing heavy shadows. In **Light Mode**, the Deep Navy is swapped for a crisp **Off-White (#f8fafc)**, while the Vibrant Purple remains the core action color to maintain brand recognition. A secondary accent of **Cyan (#00f2ff)** is introduced for tech-specific labels or secondary metrics to enhance the "tech" feel.

## Typography

Typography is a critical differentiator in this design system. We use **Sora** for headlines to provide a geometric, tech-forward character that feels innovative and bold. For long-form content and project descriptions, **Hanken Grotesk** offers superior readability with a contemporary, sharp edge.

**JetBrains Mono** is reserved for metadata, tags, and technical labels, reinforcing the developer identity. 

- **Scale:** Large display type should use tight tracking (-0.02em) to feel impactful.
- **Hierarchy:** Use the display-lg for hero sections. Headlines should use semi-bold weights to contrast against the lighter body text weights.
- **Responsiveness:** On mobile, display sizes scale down significantly to ensure text remains legible without excessive wrapping.

## Layout & Spacing

This design system utilizes a **12-column fluid grid** for desktop, transitioning to a **4-column grid** for mobile. The layout philosophy centers on generous vertical rhythm to let individual projects "breathe."

- **Grid:** Use a 24px gutter to maintain clear separation between card-based content.
- **Margins:** Desktop margins are dynamic (auto) to center the `container-max` of 1200px. Mobile margins are fixed at 16px.
- **Vertical Rhythm:** Use increments of 8px for all internal padding and margins. Section gaps are intentionally large (80px+) to create a distinct narrative flow as the user scrolls through the portfolio.

## Elevation & Depth

Hierarchy is established through **Tonal Layers** and **Backdrop Blurs**. 

- **Base Layer:** The deepest background color (#00091d).
- **Surface Layer:** Cards and containers use a slightly lighter navy (#0a192f) with a very subtle 1px border (Opacity 10% white) to define edges without heavy shadows.
- **Interactive Layer:** Modals and navigation bars use a semi-transparent version of the surface color with a `backdrop-filter: blur(12px)`.
- **Glow Effects:** Primary actions (like the "CV" button) may utilize a soft, purple ambient glow (`box-shadow: 0 0 20px rgba(176, 0, 230, 0.3)`) to simulate a light-emitting source, consistent with the reference aesthetic.

## Shapes

The shape language is consistently **Rounded**, striking a balance between friendly approachability and modern tech precision. 

- **Cards & Sections:** Use `rounded-lg` (1rem) for a substantial, modern feel.
- **Buttons & Inputs:** Use `rounded-md` (0.5rem) for a tighter, more functional appearance.
- **Profile/Avatars:** These can break the rule and use "Pill-shaped" or full circles to stand out against the geometric grid.

## Components

### Buttons
- **Primary (CV):** Solid Vibrant Purple background with white text. High-impact.
- **Secondary (GitHub/LinkedIn):** Outline style with a 1px border. On hover, the background fills with a 10% opacity version of the accent color.
- **Tertiary:** Ghost style (text only) for less critical navigation.

### Cards (Project/Skills)
Cards feature a subtle gradient border or a solid 1px low-contrast stroke. Project cards should prioritize a large image area with a 1.618:1 aspect ratio. Title and tags (JetBrains Mono) appear at the bottom.

### Timelines
A vertical 2px line in a muted grey-blue. The "nodes" are circles with a Vibrant Purple center. Each timeline entry is a card that appears to "float" next to the node.

### Modals
Center-aligned with a dark overlay (70% opacity black). The modal container must use the backdrop-blur effect to maintain context of the underlying page.

### Accordions
Minimalist style. Use the secondary accent color for the "plus/minus" or "chevron" icon. Ensure the transition for the content panel is smooth and eased.

### Technology Chips
Small, high-contrast labels using `label-code` typography. Backgrounds should be dark with a 1px border colored according to the specific technology brand if possible, or the secondary accent color.