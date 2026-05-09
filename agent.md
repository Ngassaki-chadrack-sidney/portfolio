## 🗂️ Prompt — Portfolio Developer

### Stack & Setup

- **Framework** : Next.js 15 (App Router)
- **Style** : TailwindCSS + shadcn/ui (couleurs système uniquement, pas de custom sauf demande explicite)
- **Animations** : GSAP (ScrollTrigger pour les reveals, pas de lib supplémentaire)
- **Déploiement** : Vercel
- **Internationalisation** : système custom i18n (FR/EN), switchable via bouton dans la navbar, pas de lib externe type next-intl sauf demande

---

### Architecture

- **One-page** avec smooth scroll et ancres par section
- **Multi-pages** uniquement pour les pages détail de chaque projet (`/projects/[slug]`)
- Pas de `gray`, `muted`, ou variantes ternes — uniquement les tokens shadcn (`foreground`, `background`, `primary`, `secondary`, `accent`, `border`, etc.)
- **Dark / Light mode** natif via shadcn + `next-themes`
- **Responsive** : mobile-first, chaque composant doit être pensé mobile avant desktop

---

### Sections (dans l'ordre)

1. **Hero** — Nom + titre + CTA (scroll down ou contact)
2. **À propos** — Courte bio, ce que je fais, ce que je cherche (emploi + freelance)
3. **Stack technique** — Technologies maîtrisées (TypeScript, Next.js, React Native, Flutter, PrestaShop…)
4. **Projets** — Grille de cards, chaque card avec : nom, description courte, stack utilisée, lien live + GitHub, clic → page détail `/projects/[slug]`
5. **Expériences** — Timeline ou liste des expériences pro
6. **Contact** — Formulaire (nom, email, message) + liens réseaux sociaux

---

### Navbar

- **Style iOS 26** : barre flottante avec `backdrop-blur` + dégradé fondu sur les bords
- **Gauche** : mon nom (lien retour hero)
- **Droite** :
  - Bouton langue `FR / EN`
  - Bouton hamburger/open → ouvre le menu fullscreen overlay
- Menu fullscreen overlay : liens vers chaque section avec animation GSAP (stagger reveal), fermeture via croix ou clic extérieur

---

### Animations — Règles globales

- Tous les textes entrent avec `yPercent: 110` + `opacity: 0` → `yPercent: 0` + `opacity: 1` via `ScrollTrigger` (`start: "top 85%"`)
- Les reveals se font **uniquement quand l'élément est visible à l'écran**
- Transitions fluides, durées entre `0.6s` et `1s`, easing `power3.out`
- Stagger sur les listes et grilles
- Pas d'animations agressives ou répétitives
- Custom cursor : cercle qui suit la souris, change de scale au hover sur les éléments interactifs

---

### i18n

- Fichiers de traduction : `/locales/fr.json` et `/locales/en.json`
- Un hook `useTranslation()` custom
- Contexte global `LanguageContext` pour persister le choix
- Le bouton dans la navbar toggle entre `FR` et `EN` et met à jour tout le contenu instantanément

---

### Code

- TypeScript strict
- Clean code, pas de commentaires inutiles
- Composants atomiques et réutilisables
- Chaque section = son propre composant dans `/components/sections/`
- Données des projets et expériences dans `/data/projects.ts` et `/data/experiences.ts` (tableaux typés)
- Aucune logique métier dans les composants de présentation
- toujours mettre le chemin des fichier dans chaque composant ainsi que autres.