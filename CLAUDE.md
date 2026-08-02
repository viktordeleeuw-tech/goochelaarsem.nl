# CLAUDE.md – LionCraft Client Website Project

## PROJECT BASICS
**Client:** Sem Houtenbos (goochelaar & entertainer)
**Website:** goochelaarsem.nl
**Sector:** Entertainment – magie, humor, event entertainment  

---

## CLAUDE'S STANDAARD WERKWIJZE

### Voorkeur & Principes
- **Communicatie:** Direct, compact, Nederlands. Geen filler.
- **Code:** Geen code zonder Viktor's goedkeuring (plan/specs eerst).
- **Testing:** Viktor test altijd zelf visueel. Claude Code handelt techniek af, geen UI-tests.
- **Output:** Kort en bondig—alleen kern + benodigde besluit.

### Build Preferences
- **HTML:** Semantisch opgebouwd (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<aside>`, etc.)
- **Components:** Reusable, accessibility-first
- **Performance:** Lighthouse 90+, zero-JS waar mogelijk
- **SEO:** Schema markup ingebouwd, meta-tags generiek houdbaar
- **AI-ready:** Geschikt voor generative search (Perplexity, ChatGPT Search, Gemini) – heldere structuur, geen JS-rendering van essentiële content, leesbaar voor AI-crawlers

## CSS Architecture
- **SCSS only:** Alle styles in `src/styles/` – geen `<style>` blocks in `.astro`-componenten
- Componenten krijgen classNames, die worden in `.scss` gestijld
- Gebruik BEM of eenvoudige naamgeving
- **Geen inline CSS** in JavaScript/JSX
- **Flexbox voorkeur** boven grid (mits niet met flexbox op te lossen)

## Design & Build Approach
- **Mobile First:** Ontwerp en bouw EERST voor mobiel (375px viewport), dan scaling naar desktop
- Breakpoints: 375px (mobiel) → 768px (tablet) → 1024px+ (desktop)
- Test visueel op mobiel (devtools F12) vóór release
- Mobile menu: `position: fixed`, solide achtergrond, `z-index: 1000`, volledige dekking

### Skills die Claude gebruikt
Voor dit project laadt Claude automatisch:
- `ui-ux-dev` – Components, responsive design, accessibility
- `content-planning` – Pagina-structuur, hero's, copy-layout
- `seo-geo-aeo` – SEO audit, schema, AI-search optimization
- `copywriting` – Copy review/improvement voor landing pages
- `frontend-design` – Visueel design, distinc look-and-feel
- `senior-it-expert` – Architecture, deployment, scaling

Optioneel (voor integraties):
- `ai-integration-expert` – Automation, MCP-servers, data-flows
- `socialmedia-marketing-expert` – Social media strategie/content
- `bedrijfsjurist-expert` – Juridische checks (privacy, terms, etc.)

---

## OBSIDIAN CONTEXT (Company Departments)

Viktor beheert meerdere agents in Obsidian:

### CTO (Chief Technology Officer Orchestrator)
- Development projects & technical decisions
- Architecture, deployment, infrastructure
- Tech debt & optimization
- **Files:** `/Obsidian/Company Departments/CTO/[project-specific]`

### CMO (Chief Marketing Officer Orchestrator)
- Brand, messaging, content strategy
- Social media, email campaigns
- User acquisition, retention
- **Files:** `/Obsidian/Company Departments/CMO/[project-specific]`

### Specialist Agents
- **Development** (47 bestanden): Code reviews, debugging, feature specs
- **Marketing** (5 bestanden): Copy, SEO strategy, campaign planning

**Hoe Claude deze gebruikt:**
- CTO-context voor technical decisions
- CMO-context voor brand/messaging questions
- Als Viktor vraagt om een "spec" → Claude raadpleegt Development specs uit Obsidian

---

## INTEGRATIONS & TOOLS

### Standard (bijna altijd)
- [ ] **Google Analytics 4** – Tracking code
- [ ] **Schema Markup** – LocalBusiness / Professional / Organization
- [ ] **Sitemap & robots.txt** – Auto-generated
- [ ] **Meta tags** – Dynamisch per pagina (description, OG, etc.)

### Conditional (alleen als nodig)
- [ ] **Forms** – Brevo, Formspree, Supabase, of custom?
- [ ] **Email** – Brevo integration, SMTP setup?
- [ ] **CMS** – Supabase headless, Sanity, of static?
- [ ] **E-commerce** – Stripe, PayPal? Producten in Supabase?
- [ ] **Membership** – Auth, paywall, content gating?
- [ ] **Automation** – n8n workflows, webhooks?

---

## DEPLOYMENT

**Hosting:** Vercel  
**Git:** GitHub  
**Deploy trigger:** Push to `main`  
**Preview:** Vercel auto-generates per PR  
**CI/CD:** Vercel handles build + deploy  

---

## QUICK START FOR CLAUDE

1. Read this file + `.claudeignore`
2. Check `src/` structure (components, layouts, pages, assets)
3. **Always ask** before touching: brand colors, site structure, integrations
4. **Never deploy** without Viktor's visual test
5. If unsure: ask Viktor, don't guess

---

## NOTES & GOTCHAS

### Bekende Issues
- Mobile menu: geen achtergrond → tekst valt over heen. Fix: `background-color`, `position: fixed`, volle hoogte
- Zorg dat menu z-index hoog genoeg is (1000+) voor overlay-effect

### Client Preferences
- Sem is entertainer/goochelaar → focus op "magie & vermaak voor elk evenement"
- CTA: "Boek een magische beleving"
- Visueel: warm, speels, professioneel

---

## SESSION LOG

| Datum | Focus | Status |
|-------|-------|--------|
| [xxx] | [Feature/fix] | [Done / In Progress / Blocked] |

---

**Last Updated:** 1 augustus 2026