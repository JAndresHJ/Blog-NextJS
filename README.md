## Blog Site

Link: [https://blog-next-js-umber.vercel.app/posts](https://blog-next-js-umber.vercel.app/)

## Getting Started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Environmental Variables

To run this project, you need to set up the following environmental variables:

- `MONGODB_USERNAME`: The username for your MongoDB account.
- `MONGODB_PASSWORD`: The password for your MongoDB account.

To set up these variables, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the root directory of your project.
3. Create a new file called `.env.local` in the root directory of your project.
4. In the `.env.local` file, add the following lines:

```
  MONGODB_USERNAME=your-username-here
  MONGODB_PASSWORD=your-password-here
```

5. Replace `your-username-here` and `your-password-here` with your actual MongoDB username and password, respectively.
6. Save the `.env.local` file.
7. Restart your project.

After completing these steps, your project should be able to access the `MONGODB_USERNAME` and `MONGODB_PASSWORD` environmental variables, which are necessary to connect to your MongoDB database.
