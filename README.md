# General information

Test project

## Getting Started

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/test](http://localhost:3000/api/test). This endpoint can be edited in `pages/api/test.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Extras

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Scope of Testing

The main goal is to create simplified typical TODO application. Considering features available from Next.js framework and best practices known for ES2021/TS.

The APP should have following pages:

- login / signin
  - signin process is just adding username/password to the in-memory struct (`optional task: persist users struct in localstorage`)
  - username must be valid email
  - password should be stored as hashed values using any algorithm with salt
- list of tasks
  - for simplicity, all users have access to same tasks;
- add / modify task

### Additional information

- Task should be represented by following data [structure](./src/tasks.json)
- Feel free to use any additional libraries (like: @hookstate, yup, react hook form etc.)
- It can be used either TS or JS
- Small, scoped to single implementation/modification, commits are welcome
- ChakraUI is included

> Data retrieval for pages (where required) can be implemented using [API Routes](https://nextjs.org/docs/api-routes/introduction) or using [SSR](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) `getServerSideProps` method

---

Feel free to use your brave ideas & imagination & ❤️

GOOD LUCK!
