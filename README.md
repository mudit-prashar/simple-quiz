## Getting Started

Create a .env.local file in the project root with a `OPENAI_API_KEY` variable, example:

```
OPENAI_API_KEY='OPENAI_KEY_HERE'
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Folder structure

- components - Quiz questions code and Result screeen code
- pages - Next-specific directory to place routes or pages and API endpoints.
  - **_IMPORTANT:_** pages should not be imported in other components

dependencies:

- [axios](https://www.npmjs.com/package/axios)
- [React](https://react.dev/)