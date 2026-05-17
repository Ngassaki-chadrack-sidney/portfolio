# AGENTS.md — Portfolio Redesign Brief

> Ce fichier est le guide complet pour l'IA chargée de refondre le portfolio.
> Lis intégralement ce document avant d'écrire la moindre ligne de code.

---

## 0. Contexte & Objectif

Tu refais entièrement le portfolio d'un développeur web & mobile full-stack (TypeScript, Next.js, React Native, Flutter, PrestaShop). Le site doit convaincre un recruteur en 10 secondes et donner à un client l'envie de confier son projet. La référence de design est **dennissnellenberg.com** : soigné, épuré, chaque détail compte, niveau Awwwards.

Le site existant est en **Next.js 16 App Router + Tailwind CSS v4 + shadcn/ui**. Tu travailles dans cette stack, tu ne changes pas de stack.

---

## 1. Stack Technique (ne pas modifier)

| Outil         | Version / Config                                                                                     |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| Next.js       | 16, App Router, Turbopack                                                                            |
| Tailwind CSS  | v4 (`@import "tailwindcss"` dans globals.css, **pas** de directives v3)                              |
| PostCSS       | `@tailwindcss/postcss` uniquement                                                                    |
| shadcn/ui     | style `new-york`, icônes `lucide-react`                                                              |
| Animations    | **GSAP uniquement** — supprimer totalement `framer-motion`                                           |
| Smooth scroll | **Lenis**                                                                                            |
| Fonts         | `next/font/local` — Cabinet Grotesk (déjà dans `public/fonts/`)                                      |
| i18n          | Système custom : `LanguageContext` + `useTranslation()` hook + `locales/fr.json` & `locales/en.json` |
| Path alias    | `@/*` → racine du projet                                                                             |

**Supprimer** : `framer-motion`, `motion`. Retirer toutes leurs importations et usages.

---

## 2. Branding & Identité Visuelle

### Nom / Signature

- Afficher le nom complet en hero, typo display large
- Tagline courte et directe (voir section Contenu)

### Palette — Design System

Deux thèmes : `light` et `dark`. Variables CSS définies dans `globals.css` via `@layer base`.

#### Dark (défaut)

```css
--background: #0a0a0a;
--foreground: #f0ede8;
--accent: #c8b89a; /* beige chaud — couleur signature */
--surface: #141414;
--border: #1f1f1f;
--muted: #2a2a2a;
```

#### Light

```css
--background: #f5f2ed;
--foreground: #0a0a0a;
--accent: #8b6f47; /* même teinte, déclinée sombre */
--surface: #ededea;
--border: #dedad4;
--muted: #e5e1da;
```

> **Règle absolue** : Utiliser UNIQUEMENT ces variables dans tout le code CSS/Tailwind. Zéro couleur en dur. Zéro `gray-*`, `white/10`, `black/20` ou équivalent Tailwind opacité arbitraire.

### Typographie

| Rôle           | Police          | Poids                                    |
| -------------- | --------------- | ---------------------------------------- |
| Display / Hero | Cabinet Grotesk | 700–800                                  |
| Corps          | Cabinet Grotesk | 400                                      |
| Labels / Caps  | Cabinet Grotesk | 500, `letter-spacing: 0.08em`, uppercase |

Tailles fluides via `clamp()` :

- Hero title : `clamp(3.5rem, 8vw, 9rem)`
- Section title : `clamp(2rem, 4vw, 4.5rem)`
- Body : `clamp(1rem, 1.2vw, 1.125rem)`

---

## 3. Règles de Design (NON NÉGOCIABLES)

1. **Zéro shadow** — aucun `box-shadow`, `drop-shadow`, `text-shadow`
2. **Zéro dégradé** — aucun `gradient`, `linear-gradient`, `radial-gradient`
3. **Zéro effet de hover trivial** — pas de changement de couleur au hover. Les hovers doivent être **structurels** : déplacement, clip-path, ligne qui traverse, pas de `hover:text-accent`
4. **Zéro commentaire dans le code** — le code doit être du clean code auto-documenté
5. **Minimalisme structurel** — chaque élément a une raison d'être. Si tu hésites, tu supprimes
6. **Grille invisible mais présente** — tout s'aligne sur une grille cohérente (12 colonnes sur desktop, padding horizontal constant : `clamp(1.5rem, 5vw, 6rem)`)
7. **Espacement généreux** — sections séparées par `clamp(6rem, 12vw, 14rem)` de padding vertical
8. **Bordures fines** — `1px solid var(--border)` pour délimiter, jamais de background de carte

---

## 4. Animations — GSAP Only

### Principe général

- **Une animation = une intention** — pas d'animation décorative sans but
- **Cohérence des easing** : `power3.out` pour les entrées, `power2.inOut` pour les transitions
- **Durées** : entrées 0.8s–1.2s, micro-interactions 0.3s–0.5s
- **Stagger** : `0.08s` entre éléments d'une même liste

### Animation de texte (OBLIGATOIRE)

Toutes les animations de texte doivent utiliser **uniquement** la technique `yPercent: 120` + `overflow: hidden` :

```typescript
// Wrapper parent : overflow: hidden
// Enfant (le texte) : transform translateY(120%)
// Animation : gsap.to(el, { yPercent: 0, duration: 1, ease: "power3.out" })
```

Créer un composant `<RevealText>` réutilisable qui :

- Reçoit `children`, `delay?: number`, `tag?: keyof JSX.IntrinsicElements`
- Enveloppe le contenu dans un `div` avec `overflow: hidden`
- Anime au scroll via `ScrollTrigger` (trigger : `"top 85%"`)

### ScrollTrigger

- Enregistrer `ScrollTrigger` globalement une seule fois dans un composant `GSAPProvider` (context)
- Utiliser `gsap.context()` dans chaque composant pour le cleanup
- `pin` uniquement si vraiment nécessaire (section hero ou projet featured)

### Transitions de page

- Utiliser un overlay `position: fixed` full-screen `background: var(--background)` qui sort vers le haut (`yPercent: -100`) à l'entrée de la nouvelle page
- Durée : 0.6s `power2.inOut`

### Lenis

- Initialiser Lenis dans un `SmoothScrollProvider` client component
- Brancher le `raf` de Lenis sur le ticker GSAP :

```typescript
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

---

## 5. Gestion du Thème Dark / Light

Remplacer le `bg-black text-white` hardcodé dans le layout.

### Implémentation

1. Activer `next-themes` : wrapper `ThemeProvider` dans `app/layout.tsx` avec `attribute="class"`, `defaultTheme="dark"`, `enableSystem`
2. Dans `globals.css` :

```css
:root {
  /* variables light */
}
.dark {
  /* variables dark */
}
```

3. Le `ThemeToggle` (composant shadcn/ui `Button` + icône lucide `Sun`/`Moon`) s'intègre dans la navigation
4. Zéro flash au chargement : utiliser `suppressHydrationWarning` sur `<html>`

---

## 6. i18n — Règles

- Conserver le système existant (`LanguageContext`, `useTranslation`, `locales/*.json`)
- **Toutes les chaînes** de contenu passent par `t("clé.sous-clé")`
- Mettre à jour `fr.json` et `en.json` avec le nouveau contenu (voir section 8)
- Le `LanguageToggle` : un simple bouton `FR | EN` dans la nav, style typographique, pas de dropdown

---

## 7. Structure des Pages & Composants

```
app/
  layout.tsx          ← ThemeProvider + SmoothScrollProvider + GSAPProvider + fonts
  page.tsx            ← Home (sections importées)
  cv/
    page.tsx          ← Page CV

components/
  layout/
    Navigation.tsx    ← Nav fixe, logo/nom + FR|EN + ThemeToggle
    Footer.tsx
  sections/
    Hero.tsx
    About.tsx
    Services.tsx
    Projects.tsx
    Experience.tsx
    Contact.tsx
  ui/                 ← shadcn primitives (ne pas modifier)
  gsap/
    GSAPProvider.tsx
    RevealText.tsx
    SmoothScrollProvider.tsx

context/
  LanguageContext.tsx (existant)
  ThemeProvider.tsx   (activer)

locales/
  fr.json
  en.json
```

---

## 8. Contenu du Portfolio

### Navigation

- Logo : initiales stylisées (ex : `JD` ou les vraies initiales du dev) à gauche
- Liens à droite : `Projets` / `À propos` / `Contact` + `FR|EN` + ThemeToggle

### Section Hero

- **Accroche principale** (grande, display) :
  - FR : `Développeur Full Stack — Je conçois des produits digitaux qui convertissent.`
  - EN : `Full Stack Developer — I build digital products that convert.`
- **Sous-titre** (corps) :
  - FR : `Spécialisé Next.js, React Native & Flutter. Disponible pour missions freelance.`
  - EN : `Specialized in Next.js, React Native & Flutter. Available for freelance projects.`
- CTA : `Voir mes projets →` (ancre vers #projects)
- Indicateur de scroll animé (ligne verticale qui pulse, GSAP)
- Pas d'image hero — typographie seule, c'est suffisant

### Section À propos

- Titre : `À propos` / `About`
- Texte court (2–3 phrases percutantes) :
  - FR : `Je transforme des idées complexes en interfaces simples et des applications performantes. Après X années à construire des produits pour des startups et des entreprises, j'ai appris que la technique ne vaut rien sans une vraie compréhension du business. Je travaille en français et en anglais, en remote ou sur site.`
  - EN : `I turn complex ideas into clean interfaces and high-performance applications. After X years building products for startups and companies, I've learned that tech means nothing without a real understanding of the business. I work in French and English, remote or on-site.`
- Compétences listées en grille typographique (pas de progress bar, pas de pourcentage) :
  - `TypeScript`, `Next.js`, `React Native`, `Flutter`, `Node.js`, `PrestaShop`, `PostgreSQL`, `Supabase`, `Docker`

### Section Services

- 3 services, layout en colonnes séparées par des bordures verticales `1px solid var(--border)` :
  1. **Développement Web** / **Web Development** — Next.js, TypeScript, APIs, performance, SEO
  2. **Applications Mobiles** / **Mobile Apps** — React Native, Flutter, iOS & Android
  3. **E-commerce** / **E-commerce** — PrestaShop, modules sur mesure, optimisation conversion

### Section Projets

- 3–4 projets featured
- Layout : liste verticale, chaque projet prend toute la largeur, séparé par une ligne `1px solid var(--border)`
- Chaque projet affiche : numéro (01, 02...), titre, stack (tags typographiques), année, lien
- Au hover : le titre se déplace légèrement vers la droite (`x: 12px`, GSAP) + affichage d'une flèche
- Contenu exemple (à adapter avec les vrais projets) :
  - Projet 1 : App mobile React Native — [description courte]
  - Projet 2 : Site e-commerce PrestaShop — [description courte]
  - Projet 3 : Dashboard Next.js — [description courte]

### Section Expérience

- Timeline simple : liste verticale avec année à gauche, poste + entreprise à droite
- Données depuis `data/experiences.ts` (existant)

### Section Contact

- Titre accrocheur :
  - FR : `Travaillons ensemble.`
  - EN : `Let's work together.`
- Email cliquable en grande typographie display
- Liens réseaux : GitHub, LinkedIn (icônes lucide)
- Pas de formulaire de contact — juste l'email et les liens directs

### Footer

- Copyright + initiales + année dynamique (`new Date().getFullYear()`)
- Même langue que le site

---

## 9. Performance & Accessibilité

- Images : `next/image` avec `priority` sur le LCP, lazy sur le reste
- Fonts : `display: swap` dans la config `next/font`
- GSAP : charger en client-only (`'use client'`), jamais de code GSAP dans un Server Component
- `ScrollTrigger.refresh()` après le chargement de toutes les fonts
- Attributs `aria-label` sur tous les boutons icônes
- Contraste minimum AA sur les deux thèmes
- `prefers-reduced-motion` : wrapper toutes les animations GSAP dans :

```typescript
const mm = gsap.matchMedia();
mm.add("(prefers-reduced-motion: no-preference)", () => {
  /* animations */
});
```

- `viewport` meta correcte dans layout.tsx
- Balises sémantiques : `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`

---

## 10. Bugs à corriger (hérités)

1. **Scrollbar CSS** : dans `globals.css`, corriger `::-webkit-scrollbar` (était `--webkit-scrollbar`)
2. **ThemeProvider** : brancher dans `app/layout.tsx` (était importé mais non utilisé)
3. **Supprimer** toutes les importations `framer-motion`/`motion`
4. **Vérifier** que `next-themes` est bien dans `package.json`, sinon `npm install next-themes`

---

## 11. Checklist Finale

Avant de livrer, vérifier point par point :

- [ ] Aucune couleur en dur (tout passe par les variables CSS)
- [ ] Aucun `shadow`, `gradient` dans le CSS
- [ ] Aucun changement de couleur au hover (uniquement des animations structurelles GSAP)
- [ ] Toutes les animations de texte utilisent `yPercent: 120` + `overflow: hidden`
- [ ] Dark/Light toggle fonctionnel sans flash
- [ ] FR/EN complet — toutes les clés présentes dans `fr.json` ET `en.json`
- [ ] Lenis + GSAP ticker synchronisés
- [ ] `prefers-reduced-motion` respecté
- [ ] Build `npm run build` sans erreur TypeScript ni ESLint
- [ ] Aucune importation `framer-motion` restante
- [ ] Responsive : mobile (375px), tablette (768px), desktop (1440px)
- [ ] Aucun commentaire dans le code de sortie

---

## 12. Ce qu'il NE FAUT PAS faire

- ❌ Animations au scroll sur chaque micro-élément — seulement sur les éléments principaux
- ❌ Cartes avec background coloré et border-radius agressif
- ❌ Progress bars pour les skills
- ❌ Section "Télécharger mon CV" avec un gros bouton CTA en couleur vive
- ❌ Illustrations ou emojis
- ❌ Grid de logos de technos avec icônes colorées
- ❌ Section "Ce que je fais" avec des icônes dans des cercles
- ❌ Texte en `gray-400` ou équivalent — tout le texte secondaire reste lisible et fort
- ❌ Effets de particules, canvas WebGL, shaders — ça ne va pas dans ce projet
- ❌ Parallax agressif

---

_Ce document est la source de vérité. En cas de doute, revenir à la règle la plus restrictive._
