# Goochelaarsem.nl – Dynamiek & Header Refresh

## Doelstelling
Maak de website **dynamischer** met animaties en **verfrissing van het mobiele menu**.
Zorg dat de **header sticky meescrollt** met een **solide achtergrond** (geen transparantie).

---

## 1. Header / Navigation Fix

### Huidi probleem
- Header is doorzichtig → teksten onleesbaar bij scroll
- Menu-animatie ontbreekt
- Mobile menu weinig visuele feedback

### Te doen
1. **Header sticky maken** met `position: sticky; top: 0; z-index: 1000;`
2. **Solide achtergrond toevoegen** (bijv. `background: linear-gradient(180deg, #fff 0%, #fff 90%, rgba(255,255,255,0.95) 100%);` of eenvoudig `background: white;`)
3. **Subtle box-shadow** toevoegen voor depth (`box-shadow: 0 2px 8px rgba(0,0,0,0.08);`)
4. **Mobile menu animatie:**
   - Slide-in van links met `transform: translateX(-100%)` → `translateX(0)`
   - Transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1)`
   - Backdrop blur op overlay (`backdrop-filter: blur(4px)`)
   - Meer spacing tussen menu-items
5. **Menu-icoon animatie** (hamburger → X bij open, smooth rotation)

### Files om aan te werken
- `src/components/Header.astro` (of Header component)
- `src/styles/components/_nav.scss` (of _header.scss)

---

## 2. Dynamische Elementen

### 2.1 Hero Section – Carousel/Fade Effect
**Huidig:** Statische afbeeldingen
**Nieuw:** Auto-rotating carousel met fade-transitions

**Spec:**
- 3 hero-afbeeldingen: `hero-goochelaaarsem.jpg`, `hero-goochelaarsem-2.jpg`, `sem-3.jpeg`
- Fade-in/out om de 5 seconden
- Smooth opacity transition (`transition: opacity 0.8s ease-in-out`)
- Optional: zacht zoom-effect op active image (`transform: scale(1.02)`)
- Pause on hover

**Implementatie:**
- Client-side JS in Astro component of inline script
- State: huidi image index
- setInterval of requestAnimationFrame
- Geen externe library nodig (vanilla JS is prima)

### 2.2 Show-kaarten – Hover Animaties
**Huidig:** Statische cards
**Nieuw:** Interactieve hover-effecten

**Spec:**
- **Scale:** `transform: scale(1.05)` op hover
- **Shadow:** `box-shadow: 0 12px 24px rgba(0,0,0,0.12)` op hover
- **Transition:** `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- Optional: Subtiele translateY (-4px) naar boven op hover
- Link "Meer info →" krijgt color-change op parent hover

**Files:**
- `src/styles/components/_portfolio.scss` of waar de cards nu staan

### 2.3 Testimonials – Automatische Scroll of Carousel
**Huidig:** Statische testimonial-blokken
**Nieuw:** Minstens één van:
  - **Option A:** Auto-scroll horizontaal (carousel loop)
  - **Option B:** Fade-through testimonials (een per keer, bijv. om de 4 sec)

**Spec (Option B – simpelste):**
- 3 testimonials
- Fade-in/out effecten
- Subtle text animation: `transform: translateY(10px)` → `translateY(0)` op entrance
- Dot-indicator (welke testimonial actief is)

**Files:**
- `src/styles/components/_testimonials.scss`
- Astro component met testimonials (bijv. `Testimonials.astro`)

### 2.4 CTA Buttons – Visuele Feedback
**Huidi:** Standaard buttons
**Nieuw:** 
- Hover state met color-shift
- Optional: Subtle glow-effect `box-shadow: 0 0 20px rgba(primary-color, 0.4)` op hover
- Active state met scale `0.98` (pressed feeling)

---

## 3. Mobile Menu Redesign

### Layout & Styling
- **Full-screen overlay** op mobile (not sidebar)
- **Verticale stack** van menu-items
- **Icoontjes** voor "Shows" submenu (bijv. ✨ voor Table Magic, 🎈 voor Ballon)
- **Meer whitespace:** Padding tussen items minstens `1.25rem`
- **Font-size:** Wat groter dan desktop (iets meer interactief voelen)
- **Background:** Solid wit of zeer licht grijze gradient (geen transparantie)

### Submenu Animatie (Shows)
- Kleiner icoontje of chevron naast "Shows"
- Bij tap: expand/collapse animatie
- Subitems schuiven in met stagger-effect (elk item +50ms delay)
- Background subtiel anders (bijv. `background: rgba(0,0,0,0.02)`)

### Mobile CTA
- "Beschikbaarheid Checken" prominent in menu (niet alleen top/bottom)
- Knop styling: groter, meer contrast

### Files
- `src/styles/components/_nav.scss` (mobile breakpoint)
- `src/components/Header.astro` (HTML/JS structure)

---

## 4. CSS Kleur & Design-snelheid

### Animatie-defaults
```scss
// Gebruik consistent in heel project
$transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
$transition-slow: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
$transition-snappy: all 0.15s ease-out;
```

### Existing Color Scheme
- **Primair:** Bepaal uit huidi CSS (bijv. blauw, goud, paars)
- **Hover states:** Iets donkerder / verzadigd (geen drastic change)
- **Shadows:** `rgba(0,0,0,0.08)` tot `0.12)` (subtiel, geen sterke zwart)

---

## 5. Performance & Best Practices

### JS Animaties
- Gebruik `requestAnimationFrame` voor smooth 60fps
- Avoid hardcoding delays; gebruik CSS transitions waar mogelijk
- IntersectionObserver voor lazy-triggered animations (bijv. kaarten die animeren bij scroll)

### CSS
- Alle styling in SCSS-bestanden, geen inline styles
- Vendorprefix auto-handled (via build tool, maar verify)
- Mobile-first breakpoints

### Testing
- Test op Chrome, Safari, Firefox mobiel
- Controleer jank/stuttering op animation
- Zorg dat menu-animatie niet z-index-problemen veroorzaakt

---

## 6. Stap-voor-stap Uitvoering

1. **Header fixed + styling** (sticky, solid bg, shadow)
2. **Mobile menu animatie** (slide-in, overlay, submenu expand)
3. **Hero carousel** (fade-in/out, vanilla JS)
4. **Card hover effects** (scale, shadow, smooth transition)
5. **Testimonial carousel** (fade or auto-scroll)
6. **Button hover states** (glow, color, active feedback)
7. **Visual QA** – scroll test, hover test, mobile test op device

---

## 7. Specifieke Opmerkingen

- **Geen externe JS libraries** (GSAP, AOS, etc.) tenzij nodig. Vanilla JS + CSS animations zijn genoeg.
- **SCSS mixins** voor herbruikbare animaties (bijv. `@mixin smooth-transition`)
- **Astro Islands** voor interactieve componenten (carousel, menu) als vanilla JS complex wordt
- **Zorg dat laadtijd niet explodeert** – lazy-load images, optimaliseer animations

---

## 8. Checklist

- [ ] Header sticky met solide achtergrond
- [ ] Mobile menu slide-in animatie
- [ ] Hamburger menu icon rotation (X effect)
- [ ] Hero carousel fade-transitions
- [ ] Show-kaarten hover scale + shadow
- [ ] Testimonials auto-fade
- [ ] Button glow/color feedback
- [ ] Mobile submenu expand/collapse
- [ ] All transitions smooth & snappy
- [ ] No z-index conflicts
- [ ] Performance check (60fps)

---

## 9. Security, Efficiency & Skills

### Security
- **Geen externe scripts** van onbekende bronnen (CDN's alleen van gevestigde providers: cdnjs.cloudflare.com, etc.)
- **Input validation** als er formulieren/interactie zijn (bijv. contact form – server-side validation)
- **XSS prevention** – user input escapen in templates
- **No hardcoded secrets** in code (API-keys, credentials) – gebruik .env files
- **Dependency scan** – controleer package.json op vulnerabilities (`npm audit`)

### Efficiency
- **Lazy-load images** waar mogelijk (intersection observer, native `loading="lazy"`)
- **CSS animations over JavaScript** waar het kan (GPU-accelerated: `transform`, `opacity`)
- **Avoid layout thrashing** – geen repeated DOM reads/writes in loops
- **Minimal JS bundlesize** – vanilla JS beter dan external libraries voor simple animations
- **Cache-friendly** – zorg dat deploy geen onverwachte cache-issues geeft (Vercel CDL)
- **No premature optimization** – meet eerst, optimize later

### Juiste Skills Gebruiken
- **ui-ux-dev skill** – Voor alle UI/UX feedback, component design, responsive checks
- **frontend-design skill** – Voor visueel polish, animatie-smotheloze, design-tokens
- **senior-it-expert skill** – Voor performance bottlenecks, architecture issues
- **seo-geo-aeo skill** – Voor header-changes (title, schema) die SEO beïnvloeden
- **Geen skills nodig** voor pure HTML/CSS/SCSS refactor (dat doet Claude Code zelf)

### Code Quality
- **Lees de bestaande codebase eerst** – respect existing patterns (SCSS-structure, component naming)
- **DRY principle** – herbruikbare SCSS mixins voor animaties (`@mixin smooth-transition`)
- **Semantic HTML** – zorg voor a11y (aria-labels, button roles, menu semantics)
- **No console.error/warn spam** – clean console output in production
- **Comments toevoegen** waar logica niet vanzelfsprekend is

---

## 10. Opmerking voor Claude Code

Zorg dat je:
1. **Eerst de huidi HTML-structuur checkt** – geen major restructuring tenzij nodig
2. **SCSS-bestanden intakt houdt** – voeg toe, refactor niet onnodig
3. **Mobile-first breakpoint respecteert** – animaties schalen mee
4. **Alle changes getest zijn** op zowel desktop als mobiel
5. **Security checklist afloopt** – no hardcoded secrets, input validation waar nodig
6. **Performance impact minimaliseert** – CSS animations over JS, lazy-load images
7. **Bestaande code patterns respecteert** – naming, folder-structure, component style
8. **Git commits atomic houden** – één feature = één duidelijke commit

Veel succes! 🎩✨
