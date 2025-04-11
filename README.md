# Bloom - Health and Absence Management Platform

Bloom Logo (Update path if needed: `public/Logo1.svg`)

Bloom provides an all-in-one solution for modern health and absence management. Leveraging targeted solutions and data-driven insights, Bloom helps companies enhance employee well-being and significantly reduce downtime.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Key Features](#key-features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Available Scripts](#available-scripts)
- [Localization](#localization)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (using App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [React](https://reactjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Localization (i18n)**: [Tolgee](https://tolgee.io/)
- **Animation**: CSS Transitions & Keyframes / Framer Motion (Verify which is primary)
- **Image Optimization**: Next.js Image Component (`next/image`)
- **Typography**: Outfit (Google Fonts)
- **Version Control**: Git

## Project Structure

```
getbloom/
├── app/                   # Next.js App Router pages and layouts
│   ├── (pages)/           # Route groups for different sections
│   │   ├── data-privacy-consumer/
│   │   ├── data-privacy-website/
│   │   ├── legal-notice/
│   │   └── ...            # Other page routes
│   ├── layout.tsx         # Root layout (Server Component)
│   └── page.tsx           # Root page (Homepage)
├── components/            # Reusable UI components
│   ├── Footer.tsx         # Site footer (Client Component)
│   ├── Header.tsx         # Site header (Client Component)
│   ├── TolgeeProviderWrapper.tsx # Client Component for Tolgee setup
│   └── ...                # Other shared components (CTA, Hero, etc.)
├── public/                # Static assets (images, fonts, icons)
│   ├── Logo1.svg
│   ├── GDPR_CCPA.webp
│   ├── footer_bg.svg
│   └── ...
├── styles/                # Global styles
│   └── globals.css
├── .env.local             # Local environment variables (e.g., Tolgee keys - **DO NOT COMMIT**)
├── .gitignore             # Files ignored by Git
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── next.config.mjs        # Next.js configuration (adjust extension if needed)
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md              # Project documentation (this file)
```

## Key Features

- **Modern Frontend Stack**: Built with Next.js App Router for optimal performance and developer experience.
- **Responsive Design**: Fully responsive layout adapting to various screen sizes.
- **Component-Based Architecture**: Reusable React components for maintainability.
- **Utility-First Styling**: Efficient styling using Tailwind CSS.
- **Internationalization (i18n)**: Supports German (default) and English languages using Tolgee.
- **Optimized Assets**: Leverages `next/image` for optimized image delivery.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Version recommended by Next.js, e.g., >= 18.x)
- [npm](https://www.npmjs.com/) (or [yarn](https://yarnpkg.com/))

### Installation

1.  **Clone the repository:**
    ```bash
    # Replace with the correct repository URL if different
    git clone https://github.com/bpnace/getbloom_website.git
    cd getbloom_website
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```
3.  **Set up environment variables:**
    Create a `.env.local` file in the project root and add your Tolgee credentials:
    ```.env.local
    NEXT_PUBLIC_TOLGEE_API_KEY=<your_tolgee_api_key>
    NEXT_PUBLIC_TOLGEE_API_URL=https://app.tolgee.io
    ```
    *(Replace `<your_tolgee_api_key>` with your actual key. Get credentials from [app.tolgee.io](https://app.tolgee.io/))*

### Running the Development Server

Start the Next.js development server:

```bash
npm run dev
# or
# yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Available Scripts

- `npm run dev`: Starts the development server with hot-reloading.
- `npm run build`: Creates a production-ready build of the application.
- `npm run start`: Starts the production server (requires `npm run build` first).
- `npm run lint`: Runs the Next.js linter to check for code quality issues.
- `npm audit`: Checks for known vulnerabilities in dependencies.
- `npm audit fix`: Attempts to automatically fix vulnerabilities.

## Localization

This project uses [Tolgee](https://tolgee.io/) for managing translations between German (`de`) and English (`en`).

- **Configuration:** Tolgee is initialized in `components/TolgeeProviderWrapper.tsx`.
- **Adding/Editing Translations:** Manage translation keys and strings via the [Tolgee Platform](https://app.tolgee.io). New keys used with the `<T>` component in the code are automatically registered in the platform.
- **Switching Languages:** The language switcher is implemented in `components/Header.tsx`.

## Deployment

The application can be deployed to any platform supporting Next.js applications. [Vercel](https://vercel.com/) (the creators of Next.js) is highly recommended for seamless deployment.

Connect your GitHub repository to Vercel for automatic deployments on push. Ensure environment variables (`NEXT_PUBLIC_TOLGEE_API_KEY`, `NEXT_PUBLIC_TOLGEE_API_URL`) are configured in the Vercel project settings.

## Contributing

Contributions are welcome! Please follow standard Git workflow (branch, commit, push, pull request) if contributing. (Add more specific guidelines if needed).

## License

This project is licensed under the MIT License - see the LICENSE file for details (if one exists, otherwise specify).

---

© {new Date().getFullYear()} Bloom - A Brand of Menta Health GmbH