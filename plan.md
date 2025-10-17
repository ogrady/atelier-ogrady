# SPA-Künstler — Vite + React + TypeScript

Dieses Dokument ist eine **vollständige Schritt‑für‑Schritt‑Vorlage** für eine schlichte, responsive Single‑Page‑Application (SPA) als Portfolio-Homepage für einen Künstler. Enthalten sind:

- Projekt-Setup (Vite + React + TypeScript)
- TailwindCSS für schlichtes, responsives Design
- Routing mit `react-router-dom` (HashRouter für einfache GitHub-Pages-Deployment-Kompatibilität)
- Navigationsleiste: **Über mich**, **Dienstleistungen**, **Kontakt**, **Arbeiten**
- **Arbeiten** enthält vier Kategorien (Unterseiten). Jede Kategorie zeigt eine Galerie mit:
  - großes Carousel
  - Miniaturansichten unterhalb; Klick bringt Carousel zur jeweiligen Arbeit
  - Metadaten pro Arbeit: Titel, Material, Entstehungsdatum, Maße, Erschienen in
- Beispiel-Daten (4 Kategorien mit je 4 Arbeiten) — mit `picsum.photos`-Platzhaltern
- Deployment-Anleitung für **GitHub Pages** (einfacher Weg mit `gh-pages` + `HashRouter`)

---

## 1) Schnellüberblick (was du in diesem Repo findest)

**Wichtig:** Bitte öffne die Dateien im Editor. Das Folgende ist die komplette Vorlage; kopiere die Dateien in ein neues Vite‑Projekt oder klone ein Repo und ersetze die Inhalte.

```
package.json
vite.config.ts
index.html
tailwind.config.cjs
postcss.config.cjs
src/
  main.tsx
  index.css
  App.tsx
  data/works.ts
  components/
    Navbar.tsx
    Carousel.tsx
  pages/
    About.tsx
    Services.tsx
    Contact.tsx
    Works/
      WorksIndex.tsx
      CategoryPage.tsx
public/
  (hier kommen deine Bilder, alternativ nutzt die Vorlage picsum.photos)
README.md (diese Anleitung)
```

---

## 2) Installation — Schritt für Schritt

> Die genauen Dateien stehen weiter unten. Hier die Befehle, die du lokal ausführst (Node >= 16 empfohlen):

1. Neues Vite + React + TS Projekt anlegen (falls noch nicht):

```bash
npm create vite@latest my-art-portfolio -- --template react-ts
cd my-art-portfolio
```

2. Abhängigkeiten installieren:

```bash
npm install
npm install react-router-dom
npm install -D tailwindcss postcss autoprefixer gh-pages
npx tailwindcss init -p
```

3. Dateien aus dieser Vorlage in dein Projekt übernehmen (überschreibe / erstelle die folgenden Dateien)

4. Dev-Server starten:

```bash
npm run dev
```

(Die genauen Inhalte für `package.json`, `tailwind.config.cjs`, `src/`-Dateien findest du weiter unten.)

---

## 3) Styling — Tailwind (kurz)

Die Vorlage nutzt Tailwind für ein schlichtes, sauberes Design. Nach `npx tailwindcss init -p` setzte `tailwind.config.cjs` wie unten.

---

## 4) Deployment auf GitHub Pages (einfach)

Ich empfehle den folgenden einfachen Weg (HashRouter + `gh-pages`):

1. Erstelle ein GitHub‑Repo (z. B. `meine-kuenstlerseite`) und pushe dein Projekt.
2. In `package.json` **`homepage`** setzen (als Platzhalter ersetzen):

```json
"homepage": "https://<GITHUB_USERNAME>.github.io/<REPO_NAME>"
```

3. Skripte ergänzen (in `package.json`):

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```

4. Installiere `gh-pages` (siehe oben) und führe aus:

```bash
npm run deploy
```

`gh-pages` pusht den Inhalt von `dist/` in den Branch `gh-pages`. Da die App den `HashRouter` verwendet, entstehen keine 404‑Probleme beim direkten Link.

---

## 5) Code — komplette Dateien

> Kopiere jede Datei in dein Projekt. Die Dateien sind bewusst einfach gehalten und kommentiert.

---

### package.json (Beispiel)

```json
{
  "name": "art-spa",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "typescript": "^5.2.2",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0",
    "gh-pages": "^5.0.0"
  }
}
```


---

### vite.config.ts

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

---

### index.html

```html
<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Künstler – Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

---

### tailwind.config.cjs

```js
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

---

### postcss.config.cjs

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

---

### src/main.tsx

```tsx
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
```

---

### src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #root {
  height: 100%;
}

body {
  @apply bg-white text-gray-900 antialiased;
}
```

---

### src/App.tsx

```tsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import WorksIndex from './pages/Works/WorksIndex'
import CategoryPage from './pages/Works/CategoryPage'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/dienstleistungen" element={<Services />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/arbeiten" element={<WorksIndex />} />
          <Route path="/arbeiten/:categoryId" element={<CategoryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Künstlername</footer>
    </div>
  )
}
```

---

### src/components/Navbar.tsx

```tsx
import React from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Über mich' },
  { to: '/dienstleistungen', label: 'Dienstleistungen' },
  { to: '/kontakt', label: 'Kontakt' },
  { to: '/arbeiten', label: 'Arbeiten' },
]

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-medium">Künstlername</div>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                className={({ isActive }) =>
                  isActive ? 'text-black font-semibold' : 'text-gray-600 hover:text-black'
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
```

---

### src/components/Carousel.tsx

```tsx
import React, { useEffect, useRef, useState } from 'react'

export type Work = {
  id: string
  title: string
  material: string
  date: string
  dimensions: string
  publishedIn?: string
  image: string
  thumb?: string
}

export default function Carousel({ items }: { items: Work[] }) {
  const [index, setIndex] = useState(0)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [index])

  if (!items || items.length === 0) return <div>Keine Arbeiten vorhanden.</div>

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length)
  const next = () => setIndex((i) => (i + 1) % items.length)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div
            ref={trackRef}
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {items.map((it) => (
              <div key={it.id} className="min-w-full flex-shrink-0">
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-[60vh] object-contain bg-gray-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <button
          aria-label="Vorherige"
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded shadow"
        >
          ‹
        </button>
        <button
          aria-label="Nächste"
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded shadow"
        >
          ›
        </button>
      </div>

      {/* Meta for active item */}
      <div className="mt-4 p-4 border rounded">
        <h3 className="text-lg font-semibold">{items[index].title}</h3>
        <p className="text-sm text-gray-600">{items[index].material} — {items[index].date}</p>
        <p className="text-sm text-gray-600">Maße: {items[index].dimensions}</p>
        {items[index].publishedIn && (
          <p className="text-sm text-gray-600">Erschienen in: {items[index].publishedIn}</p>
        )}
      </div>

      {/* Thumbnails */}
      <div className="mt-4 grid grid-cols-4 gap-3">
        {items.map((it, i) => (
          <button
            key={it.id}
            onClick={() => setIndex(i)}
            className={`rounded overflow-hidden border ${i === index ? 'ring-2 ring-black' : 'border-gray-200'}`}
            aria-label={`Gehe zu ${it.title}`}
          >
            <img src={it.thumb ?? it.image} alt={it.title} className="w-full h-20 object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
```

---

### src/data/works.ts (Beispieldaten)

```ts
import type { Work } from '../components/Carousel'

export type Category = {
  id: string
  title: string
  works: Work[]
}

export const categories: Category[] = [
  {
    id: 'malerei',
    title: 'Malerei',
    works: [
      {
        id: 'm1',
        title: 'Horizont',
        material: 'Öl auf Leinwand',
        date: '2021',
        dimensions: '80 x 60 cm',
        publishedIn: 'Ausstellung A',
        image: 'https://picsum.photos/seed/m1/1200/800',
        thumb: 'https://picsum.photos/seed/m1/300/200'
      },
      {
        id: 'm2',
        title: 'Stille',
        material: 'Acryl auf Holz',
        date: '2020',
        dimensions: '50 x 40 cm',
        publishedIn: 'Katalog B',
        image: 'https://picsum.photos/seed/m2/1200/800',
        thumb: 'https://picsum.photos/seed/m2/300/200'
      },
      {
        id: 'm3',
        title: 'Falter',
        material: 'Öl auf Leinwand',
        date: '2022',
        dimensions: '100 x 80 cm',
        image: 'https://picsum.photos/seed/m3/1200/800',
        thumb: 'https://picsum.photos/seed/m3/300/200'
      },
      {
        id: 'm4',
        title: 'Nachmittag',
        material: 'Mixed Media',
        date: '2019',
        dimensions: '60 x 60 cm',
        publishedIn: 'Magazin C',
        image: 'https://picsum.photos/seed/m4/1200/800',
        thumb: 'https://picsum.photos/seed/m4/300/200'
      }
    ]
  },
  {
    id: 'skulptur',
    title: 'Skulptur',
    works: [
      {
        id: 's1',
        title: 'Gewicht',
        material: 'Bronze',
        date: '2018',
        dimensions: '120 x 60 x 40 cm',
        publishedIn: 'Skulpturpark',
        image: 'https://picsum.photos/seed/s1/1200/800',
        thumb: 'https://picsum.photos/seed/s1/300/200'
      },
      {
        id: 's2',
        title: 'Kern',
        material: 'Stein',
        date: '2017',
        dimensions: '80 x 40 x 40 cm',
        image: 'https://picsum.photos/seed/s2/1200/800',
        thumb: 'https://picsum.photos/seed/s2/300/200'
      },
      {
        id: 's3',
        title: 'Schnitt',
        material: 'Aluminium',
        date: '2019',
        dimensions: '90 x 50 x 30 cm',
        image: 'https://picsum.photos/seed/s3/1200/800',
        thumb: 'https://picsum.photos/seed/s3/300/200'
      },
      {
        id: 's4',
        title: 'Spannung',
        material: 'Holz',
        date: '2020',
        dimensions: '70 x 30 x 20 cm',
        image: 'https://picsum.photos/seed/s4/1200/800',
        thumb: 'https://picsum.photos/seed/s4/300/200'
      }
    ]
  },
  {
    id: 'drucke',
    title: 'Drucke',
    works: [
      {
        id: 'd1',
        title: 'Serie I',
        material: 'Siebdruck',
        date: '2015',
        dimensions: '40 x 30 cm',
        image: 'https://picsum.photos/seed/d1/1200/800',
        thumb: 'https://picsum.photos/seed/d1/300/200'
      },
      {
        id: 'd2',
        title: 'Serie II',
        material: 'Lithografie',
        date: '2016',
        dimensions: '50 x 35 cm',
        image: 'https://picsum.photos/seed/d2/1200/800',
        thumb: 'https://picsum.photos/seed/d2/300/200'
      },
      {
        id: 'd3',
        title: 'Kleinformat',
        material: 'Radierung',
        date: '2014',
        dimensions: '30 x 20 cm',
        image: 'https://picsum.photos/seed/d3/1200/800',
        thumb: 'https://picsum.photos/seed/d3/300/200'
      },
      {
        id: 'd4',
        title: 'Blau',
        material: 'Giclée',
        date: '2021',
        dimensions: '60 x 40 cm',
        image: 'https://picsum.photos/seed/d4/1200/800',
        thumb: 'https://picsum.photos/seed/d4/300/200'
      }
    ]
  },
  {
    id: 'mixed',
    title: 'Mixed Media',
    works: [
      {
        id: 'x1',
        title: 'Collage A',
        material: 'Papier, Acryl',
        date: '2023',
        dimensions: '70 x 50 cm',
        image: 'https://picsum.photos/seed/x1/1200/800',
        thumb: 'https://picsum.photos/seed/x1/300/200'
      },
      {
        id: 'x2',
        title: 'Assemblage',
        material: 'Fundstücke',
        date: '2022',
        dimensions: 'variable',
        image: 'https://picsum.photos/seed/x2/1200/800',
        thumb: 'https://picsum.photos/seed/x2/300/200'
      },
      {
        id: 'x3',
        title: 'Fuge',
        material: 'Mischtechnik',
        date: '2020',
        dimensions: '60 x 40 cm',
        image: 'https://picsum.photos/seed/x3/1200/800',
        thumb: 'https://picsum.photos/seed/x3/300/200'
      },
      {
        id: 'x4',
        title: 'Fragment',
        material: 'Textil, Öl',
        date: '2019',
        dimensions: '80 x 60 cm',
        image: 'https://picsum.photos/seed/x4/1200/800',
        thumb: 'https://picsum.photos/seed/x4/300/200'
      }
    ]
  }
]

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id)
}
```

---

### src/pages/About.tsx

```tsx
import React from 'react'

export default function About() {
  return (
    <section className="prose mx-auto">
      <h1>Über mich</h1>
      <p>
        Kurzer Text über den Künstler. Hier kannst du deine Biographie, Arbeitsweise und
        Ausstellungsinfos eintragen. Die Seite ist bewusst minimal gehalten; fülle sie mit
        persönlichem Inhalt, Bildern und einem Link zum CV.
      </p>
    </section>
  )
}
```

---

### src/pages/Services.tsx

```tsx
import React from 'react'

export default function Services() {
  return (
    <section className="prose mx-auto">
      <h1>Dienstleistungen</h1>
      <ul>
        <li>Auftragsarbeiten (Malerei / Skulptur)</li>
        <li>Vermietung / Leihgaben</li>
        <li>Workshops & Artist Talks</li>
      </ul>
      <p>Preise und Konditionen auf Anfrage.</p>
    </section>
  )
}
```

---

### src/pages/Contact.tsx

```tsx
import React from 'react'

export default function Contact() {
  return (
    <section className="mx-auto max-w-lg">
      <h1>Kontakt</h1>
      <p>Am besten per E‑Mail: <strong>deinname@example.com</strong></p>

      <form className="mt-4 grid gap-3">
        <input className="border p-2 rounded" placeholder="Name" />
        <input className="border p-2 rounded" placeholder="E‑Mail" />
        <textarea className="border p-2 rounded" placeholder="Nachricht" rows={5} />
        <button className="bg-black text-white px-4 py-2 rounded">Absenden</button>
      </form>
    </section>
  )
}
```

---

### src/pages/Works/WorksIndex.tsx

```tsx
import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/works'

export default function WorksIndex() {
  return (
    <section>
      <h1 className="mb-6">Arbeiten</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((c) => (
          <Link
            key={c.id}
            to={`/arbeiten/${c.id}`}
            className="border rounded p-4 hover:shadow"
            aria-label={`Öffne Kategorie ${c.title}`}
          >
            <h2 className="text-lg font-semibold">{c.title}</h2>
            <p className="text-sm text-gray-600">{c.works.length} Arbeiten</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
```

---

### src/pages/Works/CategoryPage.tsx

```tsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Carousel from '../../components/Carousel'
import { getCategoryById } from '../../data/works'

export default function CategoryPage() {
  const { categoryId } = useParams()
  if (!categoryId) return <div>Keine Kategorie ausgewählt.</div>
  const cat = getCategoryById(categoryId)
  if (!cat) return <div>Kategorie nicht gefunden.</div>

  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h1>{cat.title}</h1>
        <Link to="/arbeiten" className="text-sm text-gray-600 hover:underline">Zurück</Link>
      </div>

      <Carousel items={cat.works} />
    </section>
  )
}
```

---

## 6) Hinweise zur Anpassung

- **Bilder:** Ersetze die `picsum.photos` URLs in `src/data/works.ts` durch deine eigenen Dateien (z. B. `/public/images/malerei/horizont.jpg`) und achte auf Dateinamen.
- **Farben / Typografie:** Passe Tailwind-Klassen an oder erweitere `tailwind.config.cjs`.
- **SEO / Metadaten:** Ergänze `index.html` um passende meta‑Tags (og:title, description, etc.).
- **Kontaktformular:** Das Beispiel-Formular sendet noch nichts. Verbinde es mit einem Provider (Formspree, Netlify Forms) oder baut einen eigenen Endpoint.

---

## 7) Optional: GitHub Actions (Alternative zu `gh-pages`)

Wenn du lieber CI‑gesteuert deployen möchtest, kann ich dir eine `/.github/workflows/deploy.yml` Vorlage hinzufügen, die das `dist/`-Verzeichnis automatisch in `gh-pages` pusht. Sag Bescheid — ich füge sie ein.

---

## 8) Nächste Schritte — wie ich dir weiterhelfen kann

- Ich kann die Farbpalette, Typo und Texte direkt anpassen (z. B. Künstlername, Bio). 
- Ich kann das Layout auf Desktop / Mobile optimieren oder ein kleines Design‑Moodboard erzeugen.
- Ich kann die GitHub Actions `deploy.yml` ergänzen, wenn du CI‑Deployment bevorzugst.

Sag mir kurz, welche Anpassung du als Nächstes möchtest — Name + bevorzugte Farben + ob du echte Bilder hochladen willst — und ich setze es direkt für dich um.

---

*Ende der Vorlage.*
