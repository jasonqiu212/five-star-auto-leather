# Five Star Auto Leather

A modern website built with Astro and TypeScript.

## Tech Stack

- **[Astro](https://astro.build/)** - Web framework for content-driven websites
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.19.2 as specified in `.nvmrc`)
- **pnpm** (package manager)

### Using nvm (recommended)

If you use [nvm](https://github.com/nvm-sh/nvm), the correct Node.js version will be automatically selected:

```bash
nvm use
```

This will use the version specified in the `.nvmrc` file (v20.19.2).

### Installing pnpm

To install pnpm globally:

```bash
npm install -g pnpm
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd five-star-auto-leather
```

2. Install dependencies:

```bash
pnpm install
```

## Development

Start the development server:

```bash
pnpm dev
```

The site will be available at `http://localhost:4321`

## Project Structure

```
/
├── public/          # Static assets
├── src/
│   ├── assets/      # Project assets (images, etc.)
│   ├── components/  # Astro components
│   ├── layouts/     # Page layouts
│   └── pages/       # Page routes
└── package.json
```
