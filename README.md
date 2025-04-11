# Bloom - Gesundheits- und Abwesenheitsmanagement

![Bloom Logo](public/Logo1.svg)

Bloom ist eine All-in-One-Lösung für Gesundheits- und Abwesenheitsmanagement. Mit zielgerichteten Lösungen und datenbasierten Einblicken hilft Bloom Unternehmen, die Gesundheit der Mitarbeiter:innen zu stärken und Ausfallzeiten signifikant zu reduzieren.

## Inhaltsverzeichnis

- [Tech Stack](#tech-stack)
- [Projektstruktur](#projektstruktur)
- [Funktionen](#funktionen)
- [Sitemap](#sitemap)
- [Implementierungshistorie](#implementierungshistorie)
- [Installation und Entwicklung](#installation-und-entwicklung)
- [Deployment](#deployment)
- [Mitwirkende](#mitwirkende)
- [Lizenz](#lizenz)

## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/) (React-basiert)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: CSS Transitions & Keyframes
- **Bildverarbeitung**: Next.js Image Component
- **Typografie**: [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)
- **Icons**: SVG-basierte Icons
- **Version Control**: Git
- **Hosting**: GitHub Pages

## Projektstruktur

```
getbloom/
├── components/          # Wiederverwendbare UI-Komponenten
│   ├── AppointmentCalendar.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Integrations.tsx
│   ├── Layout.tsx
│   ├── LogoSlideshow.tsx
│   └── Stats.tsx
├── pages/               # Next.js Seitenkomponenten
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── data.tsx
│   ├── digital-medicine.tsx
│   ├── eap.tsx
│   ├── index.tsx
│   └── ...
├── public/              # Statische Assets
│   ├── Integration logos/
│   ├── Features/
│   ├── Logo1.svg
│   ├── Favicon_large.png
│   ├── footer_bg.svg
│   └── ...
├── styles/              # Globale Styles
│   └── globals.css
├── package.json         # Abhängigkeiten und Scripts
├── tailwind.config.js   # Tailwind Konfiguration
└── README.md            # Projektdokumentation
```

## Funktionen

### Kernfunktionen

1. **Responsive Design**: Vollständig responsives Layout für alle Geräte, von Mobiltelefonen bis zu Desktop-Computern.
2. **Moderner UI-Stack**: Nutzung von Next.js und Tailwind CSS für ein schnelles, benutzerfreundliches Erlebnis.
3. **Optimierte Bilddarstellung**: Next.js Image Component für optimierte Bildladung und -darstellung.
4. **Animationen**: Subtile CSS-Animationen und Übergänge für eine ansprechende Benutzererfahrung.
5. **Accessibility**: Semantische HTML-Struktur und ARIA-Attribute für bessere Zugänglichkeit.

### Komponenten

- **Hero**: Eindrucksvolle Hauptansicht mit CTA für Employee Assistance-Angebote.
- **Stats**: Darstellung wichtiger Leistungskennzahlen und -metriken.
- **LogoSlideshow**: Dynamische Anzeige von Kundenlogos.
- **Integrations**: Präsentation der HR-Systemintegrationen.
- **Calendar**: Terminbuchungskalender für Demo-Anfragen.
- **Footer**: Umfassender Footer mit Navigationslinks und Datenschutzinformationen.

## Sitemap

- **Startseite** (`/`): Hauptlandingpage mit Überblick über Bloom-Angebote
- **EAP** (`/eap`): Employee Assistance Program-Angebote
- **Digitale Arbeitsmedizin** (`/digital-medicine`): Informationen zu digitalen Gesundheitslösungen
- **Daten & Einblicke** (`/data`): Analytics und Reporting-Dashboard
- **Ressourcen** (`/resources`): Übersicht von Materialien und Ressourcen
- **Blog** (`/blog`): Blogartikel und Updates
- **Kundenberichte** (`/case-studies`): Erfolgsgeschichten und Kundenfallstudien
- **Demo buchen** (`/demo`): Terminbuchung für Produktdemonstrationen
- **Impressum** (`/impressum`): Rechtliche Unternehmensinformationen
- **Datenschutz** (`/datenschutz-website`, `/datenschutz-consumer`): Datenschutzrichtlinien

## Implementierungshistorie

### Phase 1: Grundlegende Website-Struktur
- Einrichtung des Next.js-Projekts
- Implementation von Tailwind CSS
- Erstellung der Layout-Komponente mit Header und Footer
- Entwicklung der Hero-Sektion

### Phase 2: Kernkomponenten
- Integration der Stats-Komponente
- Erstellung der LogoSlideshow mit automatischer Rotation
- Implementierung der Integrations-Sektion für Partner-Logos
- Entwicklung der CTA-Komponente

### Phase 3: UI-Verbesserungen und Animation
- Optimierung der LogoSlideshow für bessere Performance und ohne schwarze Blöcke
- Redesign der Integrations-Komponente mit 2x3 Grid und Animationen
- Einbindung der Brand-Farben in alle Komponenten
- Implementierung subtiler Hover- und Ladeanimationen

### Phase 4: Zusätzliche Funktionen und Verfeinerungen
- Integration des Kalenderpickers für Demo-Buchungen
- Ersetzung des Kalenders durch statisches Bild (calendar_dummy.png)
- Aktualisierung des Favicons auf Favicon_large.png
- Integration des footer_bg.svg als Hintergrundbild im Footer
- Anpassung der GDPR-Darstellung mit GDPR_CCPA.webp-Bild

## Installation und Entwicklung

### Voraussetzungen
- Node.js (>= 14.x)
- npm oder yarn

### Einrichtung

```bash
# Repository klonen
git clone https://github.com/bpnace/getbloom.git
cd getbloom

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Anwendung wird dann unter [http://localhost:3000](http://localhost:3000) verfügbar sein.

### Befehle

- `npm run dev`: Startet den Entwicklungsserver
- `npm run build`: Erstellt eine produktionsreife Version
- `npm run start`: Startet die erstellte Anwendung
- `npm run lint`: Führt ESLint zur Code-Überprüfung aus

## Deployment

Die Website kann leicht auf verschiedenen Hosting-Plattformen bereitgestellt werden:

### GitHub Pages
```bash
npm run build
npm run export
# Dann die out/ Ordner Inhalte in den gh-pages Branch pushen
```

### Vercel (empfohlen für Next.js)
```bash
npm install -g vercel
vercel
```

## Mitwirkende

- [BumpinAce](https://github.com/bpnace) - Hauptentwickler

## Lizenz

Dieses Projekt ist unter der MIT Lizenz lizenziert - siehe [LICENSE](LICENSE) Datei für Details.

---

© 2023 Bloom - Eine Marke der Menta Health GmbH