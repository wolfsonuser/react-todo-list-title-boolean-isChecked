# Getting Started with React Todo List App

This project was created with "npx create-react-app react-todo-list"

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Install Start: 23; Install End: 31 min as of January 15, 2022

1. added 1882 packages, and audited 1883 packages in 9m
1. 104 vulnerabilities (2 low, 91 moderate, 9 high, 2 critical)
1. To address all issues, run: 'npm audit fix'
1. and npm audit fix --force: run twice since after the first run more vulnerabilities appeared. In addition from react-scripts 5.0.0 went back to 3.x.x
1. 8 moderate severity vulnerabilities: recommend to run audit --force, but not.
1. npm start to verify that react-todo-list app is OK

### Modify Source Code to include UX for todo-list

1. In app.js add imports
1. Installed bootstrap
1. Generated possible errors: lack of unique keys, passing object to render as child, url in different domain (cors error), added proxy with backend API url
1. After GET /api/todos route worked out, installed react-bootstrap (Container).
1. Todo items are displayed using ItemDisplay function, but on a separate line.
1. Fixed by adding import 'bootstrap/dist/css/bootstrap.min.css'; in index.js
1. found in: https://react-bootstrap.github.io/getting-started/introduction
1. In ItemDisplay: added buttons, not added icon tags yet, neither onClick functions
1. It is Form.Control not Form.control!!!!
1. Aria-label: for assistive technologies, screen readers for instance
