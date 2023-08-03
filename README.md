# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Screenshots


## Desktop version 

![desktop-photo](https://github.com/antonyusupov/ts-tailwind-react-port-dark/assets/74938284/08170367-5f99-4d55-8d58-a67aa71ce87f)

## Tablet and Mobile version 
![tablet-photo](https://github.com/antonyusupov/ts-tailwind-react-port-dark/assets/74938284/e8083b6c-76b1-4638-be37-142d49b5a654)
![mobile -photo](https://github.com/antonyusupov/ts-tailwind-react-port-dark/assets/74938284/594e3248-2c2e-4bbd-9a2e-24650ad2be96)



