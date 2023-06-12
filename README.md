This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Clone the project from Github
```bash
git clone https://github.com/YOUR-USERNAME/car-lite-lb
```

Run the development server:

```bash
cd car-lite-lb
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
# Technologies we use
React, Typescript, Nextjs, Emotion styled components, [science design system](https://github.com/chanzuckerberg/sci-components) that is based on material UI (this is what I use at work, but it's open source so I used it here. It has styled buttons and stuff so we don't have to do that ourselves)

# Recommended Tools
vscode, prettier extension, eslint extension, hygen extension

## Hygen code generator
Hygen provides code generation and we use it for new components.  The template is defined in `_templates`.  Each Component consists of a directory with 3 files: 
1. A Component.tsx file where most of the code lives
1. An index.tsx file. This file imports and exports the Component.tsx file. It is here because it makes the imports in other files cleaner. With this we can use 
    ```
    import { Component } from "src/components/Component"
    ```
    rather than
    ```
    import { Component } from "src/components/Component/Component"
    ```
1. A component_style.ts file where the styled components live.

There is an optional `components` directory where sub-components live.

Creating these files manually gets tedious, so Hygen will do this for us. To use it:
1. Add the Hygen extension to vscode
1. Copy the path where you want to create the new component
1. Use command + shift + p to open the command palette and search for Hygen
1. Select "New Component"
1. Name the component
1. Paste in the path when prompted

You should see a new directory and component structure. If you add the component to the page, you should see a placeholder div with a pink background.

# Creating a new page
You can start editing the main landing page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

To add a new page, create a new file in the `pages` directory. For example `pages/about.tsx` will create a page that can be seen in the browser on [http://localhost:3000/about](http://localhost:3000/about). New pages should look similar to `pages/index.tsx`. The `<Head>` section specifies metadata for the page that will be in the html head section. The component below is where the definition of the page lives.  This component is defined in `src/components/LandingPage/LandingPage.tsx`

---
We don't currently have any API routes in use.
[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`. 

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
