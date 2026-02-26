Here is the complete **Markdown (.md) version** of the Neobrutalism Portfolio Design Document:

---

````md
# 📘 Portfolio – Neobrutalism Design System Specification
Version: 1.0  
Style: Neobrutalism  
Layout Policy: STRICT – Layout structure remains unchanged. Only visual styling is defined.

---

# 0. 🎯 Core Design Principles

1. Thick black borders (3px–5px solid #000)
2. Hard shadows (offset, no blur)
3. Flat solid colors (no gradients)
4. High contrast typography
5. Playful blocks + sticker-like UI
6. Slightly imperfect / hand-crafted feel
7. No glassmorphism, no blur, no subtle shadows

---

# 1. 🎨 Color System

## Primary Palette

| Token | Value | Usage |
|-------|--------|--------|
| `--nb-yellow` | `#F4D03F` | Hero background |
| `--nb-blue` | `#6EC1E4` | Cards / accents |
| `--nb-pink` | `#FF6B9A` | Highlight blocks |
| `--nb-green` | `#2ECC71` | CTA accents |
| `--nb-black` | `#000000` | Borders / text |
| `--nb-white` | `#FFFFFF` | Base background |
| `--nb-gray` | `#F5F5F5` | Neutral sections |

---

# 2. 🔤 Typography System

## Font Pairing

**Primary Heading Font**
- Bricolage Grotesque / Space Grotesk  
- Weight: 700–800  

**Secondary / Body**
- Inter / IBM Plex Sans  
- Weight: 400–500  

**Code Blocks**
- JetBrains Mono  
- Fira Code  

---

## Typography Scale

| Type | Size | Weight |
|------|------|--------|
| Hero Title | 48–64px | 800 |
| Section Title | 32–40px | 700 |
| Card Title | 20–24px | 700 |
| Body Text | 16–18px | 400 |
| Button Text | 16px | 600 |

---

# 3. 📦 Border & Shadow System (CRITICAL)

## Border Rule

```css
border: 4px solid #000;
````

## Shadow Rule (Hard Shadow Only)

```css
box-shadow: 6px 6px 0px #000;
```

Rules:

* No blur
* No rgba shadow
* No soft shadow

---

# 4. 🧱 Component Specifications

---

## 4.1 Navbar

### Visual Rules

* Background: `--nb-yellow`
* Border bottom: 4px solid black
* Logo inside bordered box
* Nav items in pill blocks
* CTA button in contrasting color (blue or pink)

### Button Style

```css
background: #6EC1E4;
border: 3px solid #000;
box-shadow: 4px 4px 0 #000;
padding: 8px 16px;
font-weight: 700;
```

Hover:

```css
transform: translate(4px, 4px);
box-shadow: none;
```

---

## 4.2 Hero Section

### Background

```css
background: #F4D03F;
```

### Title Styling

* "Portfolio" word highlighted in pink block
* Black text
* Slight letter spacing

Highlight style:

```css
background: #FF6B9A;
padding: 6px 12px;
border: 3px solid #000;
```

---

## 4.3 Avatar / Profile Card

### Card Styling

```css
background: #6EC1E4;
border: 4px solid #000;
box-shadow: 8px 8px 0 #000;
padding: 20px;
```

Avatar Image:

```css
border: 4px solid #000;
```

Badge (Full-Stack Ninja style tag):

```css
background: #2ECC71;
border: 3px solid #000;
box-shadow: 4px 4px 0 #000;
```

---

## 4.4 Tech Stack Pills

Each pill:

```css
background: #fff;
border: 3px solid #000;
padding: 8px 14px;
box-shadow: 4px 4px 0 #000;
font-weight: 600;
```

Active pill:

```css
background: #F4D03F;
```

Hover interaction:

```css
transform: translate(4px, 4px);
box-shadow: none;
```

---

## 4.5 Code Section (Story Concept)

Dark background:

```css
background: #1E1E1E;
color: #fff;
font-family: "JetBrains Mono";
border: 4px solid #000;
box-shadow: 8px 8px 0 #000;
```

Mac window header dots:

* Red: #FF5F56
* Yellow: #FFBD2E
* Green: #27C93F

---

# 5. 🎛 Icon Style

* Sticker-like
* Slight rotation (-5deg to +5deg)
* Thick black outline
* Flat fill colors
* Floating with no blur shadow

Example:

```css
transform: rotate(-4deg);
```

---

# 6. 🎞 Motion System

Neobrutalism Motion Rules:

* No smooth luxury animations
* Fast and snappy
* Use `cubic-bezier(0.2, 1, 0.2, 1)`
* Hover shift effect (push-down illusion)

Click effect:

```css
transform: translate(6px, 6px);
box-shadow: none;
```

---

# 7. 🧩 Spacing System

Use consistent 8px grid.

Spacing scale:

```
4px
8px
16px
24px
32px
48px
64px
```

No random spacing.

---

# 8. 📐 Section Styling Rules

Every section:

```css
padding: 80px 0;
border-bottom: 4px solid #000;
```

Alternate backgrounds:

* White
* Light gray
* Yellow

---

# 9. 🧠 Personality Layer

The design should feel:

* Confident
* Developer-first
* Slightly playful
* Not corporate
* Bold and opinionated

---

# 10. ❌ Strict Anti-Rules

DO NOT:

* Use gradients
* Use glassmorphism
* Use rounded 20px soft corners (max 8px)
* Use subtle shadows
* Use pastel low-contrast tones
* Use luxury serif fonts

---

# 11. 🎯 Optional Enhancements

* "System Design" ribbon tag
* "Built with React + Node" brutal badge
* Animated terminal typing intro
* Dark mode toggle (still brutal style)

