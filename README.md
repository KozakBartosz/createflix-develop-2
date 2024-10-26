# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Task instructions

1. Load and show movie list from [https://itunes.apple.com/us/rss/topmovies/limit=100/json](https://itunes.apple.com/us/rss/topmovies/limit=100/json)
2. Create proper routes for application
3. Add favorites feature for the system
4. Add app global state (use that one you prefer)
5. Add loader to that app
6. Add some additional styles (animations, transitions) to make app more beautiful (but be careful)

You can use all components available in the system, you can edit every component if you like. You can display components using `npm run storybook` command.

Task 1) is obligatory other tasks are mandatory, feel free to select each one you want to do.

## Project structure

```
+-- elements
    +-- components
    |   +-- app-footer
    |       +-- [...]
    |   +-- app-header
    |       +-- [...]
    |   +-- app-logo
    |       +-- [...]
    |   +-- header-icon
    |       +-- [...]
    |   +-- movie-list-item
    |       +-- [...]
    |   +-- navbar
    |       +-- [...]
    +-- containers
    |   +-- [...]
+-- scenes
    +-- favorites
    |       +-- [...]
    +-- instructions
    |       +-- [...]
    +-- movie-list
    |       +-- [...]
+-- index.css
+-- index.tsx
+-- types.ts
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run storybook`

Rus storybook in the development mode.\
Open [http://localhost:6006](http://localhost:6006) to view and edit all available system components.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run build-storybook`

Builds the storybook content.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
    languageOptions: {
        // other options...
        parserOptions: {
            project: ['./tsconfig.node.json', './tsconfig.app.json'],
            tsconfigRootDir: import.meta.dirname
        }
    }
});
```

-   Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
-   Optionally add `...tseslint.configs.stylisticTypeChecked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
    // Set the react version
    settings: { react: { version: '18.3' } },
    plugins: {
        // Add the react plugin
        react
    },
    rules: {
        // other rules...
        // Enable its recommended rules
        ...react.configs.recommended.rules,
        ...react.configs['jsx-runtime'].rules
    }
});
```
