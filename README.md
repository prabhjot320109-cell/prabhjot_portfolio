# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm ci
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Deploy to Vercel

Use Node.js 24.x (also specified in `package.json` and `.nvmrc`).

1. Commit and push these files, including `package-lock.json`, to your Git repository.
2. Import the repository at [Vercel New Project](https://vercel.com/new).
3. Set the Root Directory to this project folder (the repository root for this project).
4. Confirm the framework is **TanStack Start** and Node.js is **24.x**.
5. Deploy. `vercel.json` selects `npm ci` for installation and `npm run build` for the build.

Leave the Output Directory override disabled. Nitro generates Vercel's deployment
bundle in `.vercel/output`, including the server function, static assets, and routing.
This is a server-rendered app; do not configure a rewrite to `index.html` or deploy
only the client assets.

No environment variables or database are required by the current portfolio.
The Bun lockfile remains available for Lovable; Vercel explicitly uses the npm
lockfile. Keep `package-lock.json` updated whenever dependencies change.

### Verify locally

```sh
npm ci
npm run typecheck
npm run build
npm run preview
```

After deploying, check the home page, images, navigation, and contact links, and
confirm an unknown URL displays the custom 404 page. Inspect Vercel's function
logs if a request fails.

The existing Lovable integration remains supported: its configuration wrapper
keeps the Lovable deployment target when building inside Lovable.

See [Vercel's TanStack Start deployment guide](https://vercel.com/kb/guide/deploy-a-tanstack-start-app-to-vercel).
