# The ReduceCO2Now Website

This repository contains the source code and technical documentation for the ReduceCO2Now web application.

ReduceCO2Now is a voluntary organisation. The application is expected to include:

* a public multilingual website;
* editable website content;
* a content-management administration interface;
* role-based access;
* news and information pages; and
* organisational workflows that may be expanded in later development phases.

## Current status

The project currently contains:

* a React and TypeScript frontend built with Vite;
* a Strapi content-management backend;
* English and Spanish frontend routes;
* Strapi content-type definitions for the website content;
* technical and architectural documentation; and
* earlier prototype implementations retained for reference.

The application is still under active development. A new developer can install and run both applications locally, but a populated Strapi database or content export is also required for the frontend to display the expected website content.

## Technology overview

### React

React is the JavaScript library used to build the frontend user interface. The website is divided into reusable React components such as the navigation bar, header, footer, news cards and page sections.

### TypeScript

TypeScript adds static type checking to JavaScript. It helps detect incorrect values, missing properties and incompatible function calls during development.

Frontend React files generally use the `.tsx` extension. Backend Strapi configuration and customisation files generally use `.ts`.

### Vite

Vite is the frontend development and build tool used by this repository. It starts a local development server, processes the TypeScript and React source files, and produces the frontend production build.

The frontend is not currently configured as a Next.js application.

### CSS and Tailwind

The current frontend styling is primarily contained in conventional CSS files, including `frontend/src/App.css`.

Tailwind CSS does not appear to be configured in the present repository. It should not be added as a setup requirement unless the project team makes a separate technical decision to adopt it.

### Strapi

Strapi is a headless content-management system.

In this project, Strapi provides:

* the administration interface at `/admin`;
* REST API endpoints under `/api`;
* editable website content;
* multilingual content support;
* content types and reusable components; and
* permissions controlling which API operations are publicly accessible.

The React frontend requests content from the Strapi API and renders it for website visitors.


## Repository structure

The important top-level directories are:

```text
reduceco2now-app/
├── backend/
├── frontend/
├── prototype/
├── docs/
└── README.md
```

### `backend/`

The `backend` directory contains the Strapi application.

Important areas include:

```text
backend/
├── config/                 # Strapi server, database, middleware and plugin configuration
├── database/               # Database migrations
├── public/
│   └── uploads/            # Locally stored uploaded media
├── src/
│   ├── admin/              # Strapi administration customisation
│   ├── api/                # Content types, routes, controllers and services
│   ├── components/         # Reusable Strapi content components
│   ├── extensions/         # Plugin extensions
│   └── index.ts            # Strapi application bootstrap/customisation
├── types/                  # Generated Strapi TypeScript definitions
├── .env.example            # Example backend environment variables
├── package.json
└── tsconfig.json
```

Current Strapi content types include:

* About Us;
* Card Set;
* Footer;
* Lever Block;
* Nav Bar;
* News Post;
* Static Header; and
* Vision.

### `frontend/`

The `frontend` directory contains the React application.

Important areas include:

```text
frontend/
├── public/                 # Static files such as the favicon and icons
├── src/
│   ├── components/         # Reusable website sections and UI components
│   ├── locale/             # English and Spanish route and static-language files
│   ├── pages/              # Complete website pages
│   ├── services/           # Strapi API request functions and utilities
│   ├── App.tsx             # Main application layout and route selection
│   ├── App.css             # Current global application styling
│   └── main.tsx            # React application entry point
├── .env                    # Frontend environment configuration
├── index.html              # Vite HTML entry point
├── package.json
├── tsconfig.json
└── vite.config.ts
```

The frontend currently contains components such as:

* `NavBar`;
* `Footer`;
* `Header`;
* `AboutUs`;
* `WhatWeDo`;
* `FocusAreas`;
* `Vision`;
* `NewsCard`; and
* `SystemView`.

It includes separate English and Spanish route definitions.

### `prototype/`

The `prototype` directory contains earlier or experimental versions of the frontend and backend.

These files should generally be treated as reference material rather than the active application. Development work should normally take place in the root-level `frontend` and `backend` directories unless a task explicitly concerns a prototype.

### `docs/`

The `docs` directory contains technical documentation that belongs close to the codebase.

Product ownership, Scrum ceremonies, meeting notes, user stories, backlog management and general planning documents are maintained outside the repository.

## Prerequisites

A developer should install the following software:

* Git;
* Node.js;
* npm;
* a code editor, such as Visual Studio Code;
* access to the GitHub repository; and
* a supported local database or the project’s agreed development database.

### Recommended Node.js version

The project has been run successfully with:

```text
Node.js 22.23.2
```

A Node version manager is recommended so that developers can switch versions without changing the system-wide Node installation.

On Windows, a developer may use NVM for Windows.

Verify the installed versions:

```powershell
node --version
npm --version
git --version
```

## Downloading the repository

Choose a local development directory and clone the repository:

```powershell
cd C:\coding
git clone https://github.com/JaimeHyland/reduceco2now-app.git
cd reduceco2now-app
```

Developers who have already cloned the repository should update it before starting work:

```powershell
git switch main
git pull origin main
```

Confirm the repository status:

```powershell
git status
```

The working tree should normally be clean before a new branch is created.

## Backend setup

### 1. Open the backend directory

```powershell
cd C:\coding\reduceco2now-app\backend
```

### 2. Select the project Node.js version

When using NVM:

```powershell
nvm use 22.23.2
```

### 3. Install backend dependencies

```powershell
npm install
```

Do not run `npm audit fix --force` automatically. Forced dependency upgrades can introduce breaking changes and should be reviewed through a separate development task.

### 4. Create the backend environment file

Copy the example file:

```powershell
Copy-Item .env.example .env
```

The local `.env` file should contain values similar to:

```env
HOST=127.0.0.1
PORT=1337
APP_KEYS="first-random-key,second-random-key,third-random-key,fourth-random-key"
API_TOKEN_SALT=unique-random-value
ADMIN_JWT_SECRET=unique-random-value
TRANSFER_TOKEN_SALT=unique-random-value
JWT_SECRET=unique-random-value
ENCRYPTION_KEY=unique-random-value
```

Use a different long random value for each secret.

`HOST=127.0.0.1` restricts the development server to the local computer. Use `HOST=0.0.0.0` only when the backend deliberately needs to be reachable from another device on the local network.

Never commit the real `.env` file or its secret values.

### 5. Confirm the database configuration

Inspect:

```text
backend/config/database.ts
```

The team must document which database is expected for local development.

A local SQLite database may be used for isolated development, but the source-code repository alone does not necessarily include the website’s populated content.

The developer may therefore also need one of the following:

* a Strapi data export;
* a database backup;
* a seed script;
* a copy of an approved development SQLite database; or
* access to a shared development database.

### 6. Start Strapi

```powershell
npm run develop
```

The backend should become available at:

```text
http://localhost:1337
```

The administration interface should become available at:

```text
http://localhost:1337/admin
```

On the first run, Strapi may ask the developer to create a local administrator account.

Keep this terminal running while working on the frontend.

## Strapi permissions

The public frontend makes unauthenticated requests to Strapi.

For public website content, the Strapi `Public` role may need read-only access to the relevant content types.

In the Strapi administration interface, go to:

```text
Settings
→ Users & Permissions plugin
→ Roles
→ Public
```

For content intended for public display, enable only the required read actions:

* `find`;
* `findOne`.

Do not enable public create, update or delete actions unless this has been explicitly approved.

The currently used public content types include:

* About Us;
* Card Set;
* Footer;
* Nav Bar;
* Static Header;
* Vision; and
* any other content type requested by the public frontend.

These settings belong to the database used by the Strapi instance. Changing them in a local database affects only that local database. Changing them in a shared database affects every backend connected to that database.

## Strapi content and media

The repository contains the Strapi schemas, controllers, routes and services, but a fresh local database may not contain the website’s actual content.

Without populated and published entries, the frontend may receive `404 Not Found` responses for endpoints such as:

```text
/api/about-us
/api/footer
/api/nav-bar
/api/vision
/api/card-sets/{documentId}
/api/static-headers/{documentId}
```

Developers must therefore be given an approved method of loading development content.

Some frontend components currently request entries using specific Strapi document IDs. These IDs must exist in the database used by the frontend. Importing the correct development data is preferable to changing IDs manually on every workstation.

Uploaded images and other media may also need to be restored into:

```text
backend/public/uploads/
```

or into the configured external media-storage service.

## Frontend setup

Open a second terminal. Leave the backend running in the first terminal.

### 1. Open the frontend directory

```powershell
cd C:\coding\reduceco2now-app\frontend
```

### 2. Select the Node.js version

```powershell
nvm use 22.23.2
```

### 3. Install frontend dependencies

```powershell
npm install
```

The repository’s `package.json` and lock file define the React, TypeScript, Vite and other frontend dependencies. React, TypeScript and Vite do not need to be installed globally.

### 4. Configure the frontend environment

Inspect:

```text
frontend/.env
```

It must point the frontend API requests to the correct Strapi environment.

The value will normally resemble:

```env
VITE_API_URL=http://localhost:1337
```

Use the environment-variable name already expected by the source code. Do not rename it without also updating the code that reads it.

Environment variables exposed to Vite frontend code must begin with `VITE_`.

### 5. Start the frontend

```powershell
npm run dev
```

Vite should print a local URL, normally:

```text
http://localhost:5173/
```

The English site is currently expected under:

```text
http://localhost:5173/en
```

Leave the frontend terminal running.

## Expected local development processes

A normal local development session uses two terminals:

```text
Terminal 1
backend/
npm run develop
```

```text
Terminal 2
frontend/
npm run dev
```

The services should then be available at:

```text
Frontend:       http://localhost:5173
English site:   http://localhost:5173/en
Strapi API:     http://localhost:1337/api
Strapi admin:   http://localhost:1337/admin
```

## Troubleshooting

### The frontend shows a blank black page

The black background is part of the current CSS design. A completely blank page is not expected.

Open the browser developer tools:

```text
F12 → Console
```

Then reload the page and inspect the first red error.

### Strapi API requests return 403

A `403 Forbidden` response normally means that the request reached Strapi, but the current role does not have permission to perform the requested action.

Review the read permissions for the Strapi `Public` role.

### Strapi API requests return 404

A `404 Not Found` response normally means one of the following:

* the requested entry does not exist in the current database;
* the requested locale has not been created;
* the entry exists but is not published;
* the frontend contains a document ID from a different database; or
* the route or API name is incorrect.

Check the Content Manager and confirm that the English entry exists and is published.

### The frontend crashes after an API error

Some current components assume that API data is always present. For example, they may call `.map()` or read `.title` before checking whether the request succeeded.

Frontend components should eventually be updated to:

* handle loading states;
* handle API errors;
* handle missing or empty data;
* avoid reading properties from `undefined`; and
* display a useful error or placeholder instead of crashing the complete application.

### Vite or Strapi cannot find dependencies

Remove and reinstall the local dependencies:

```powershell
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
npm install
```

Run this separately in the affected `frontend` or `backend` directory.

## Tests and quality checks

The team should define and document the commands used for:

* frontend linting;
* frontend unit tests;
* frontend component tests;
* frontend production builds;
* backend tests;
* API integration tests; and
* end-to-end tests.

At minimum, changes should pass the repository’s available lint and build commands before a pull request is opened.

Likely frontend checks include:

```powershell
npm run lint
npm run build
```

Run only scripts that are actually defined in the relevant `package.json`.

## Recommended environment model

The project should not use one database for every environment.

The recommended model is:

### Local developer environment

Each developer should normally have:

* a local frontend;
* a local Strapi backend;
* an isolated local database;
* local or development-only media; and
* non-production secrets.

A repeatable data import or seed process should provide safe example content.

### Shared development environment

The team should have a shared development deployment with:

* its own frontend;
* its own Strapi backend;
* a shared development database;
* development-only media storage; and
* no real personal or confidential production data.

This environment is useful for integrating work from multiple developers.

### Staging or deployed-test environment

The staging environment should closely resemble production and have:

* its own frontend;
* its own Strapi backend;
* its own staging database;
* its own media storage;
* staging-specific secrets; and
* controlled test content.

Release candidates should be tested here before production deployment.

### Production environment

Production must have:

* its own frontend;
* its own Strapi backend;
* its own production database;
* production media storage;
* production-only secrets;
* restricted administration access;
* automated backups; and
* monitoring and recovery procedures.

Production data and credentials must never be used casually in local development.

### Recommended data flow

Code should move forward through the environments:

```text
developer branch
→ shared development
→ staging
→ production
```

Database schema changes and approved content migrations should also move forward through controlled migration or import processes.

Production databases should not be shared with development or staging. When production data is copied for testing, it must first be minimised and anonymised as required by the organisation’s privacy rules.

## Git workflow

### 1. Update `main`

```powershell
git switch main
git pull origin main
```

### 2. Create a feature branch

Use a short descriptive branch name:

```powershell
git switch -c feature/developer-setup-guide
```

Other examples:

```text
fix/navbar-error-handling
feature/news-page
docs/backend-setup
```

### 3. Make and review changes

Check changed files:

```powershell
git status
git diff
```

Run the relevant tests, linting and builds.

### 4. Stage and commit the changes

```powershell
git add README.md
git commit -m "docs: add local development setup guide"
```

For application changes, stage only the files that belong to the task.

### 5. Push the branch

```powershell
git push -u origin feature/developer-setup-guide
```

### 6. Open a pull request

On GitHub:

1. Open the repository.
2. Select the recently pushed branch.
3. Choose **Compare & pull request**.
4. Confirm that the pull request targets `main`.
5. Give the pull request a clear title.
6. Explain what changed, why it changed and how it was tested.
7. Identify any configuration, database or deployment implications.
8. Request review from the appropriate team member.

Do not commit directly to `main` unless the team’s repository policy explicitly allows it.

### 7. Address review comments

Make any requested changes on the same branch, commit them and push again:

```powershell
git add .
git commit -m "docs: address setup guide review"
git push
```

The pull request updates automatically.

## Repository documentation

The Markdown documentation in this repository is limited to technical material that belongs close to the codebase.

### Website and application structure

* [Application structure](docs/architecture/application-structure.md)
* [Public site structure](docs/architecture/public-site-structure.md)
* [Admin structure](docs/architecture/admin-structure.md)
* [Roles and permissions](docs/architecture/roles-and-permissions.md)
* [Content model](docs/architecture/content-model.md)
* [Privacy and data minimisation](docs/architecture/privacy-and-data-minimisation.md)
* [Technical decisions](docs/architecture/decisions/)

### AI-assisted working process

* [AI working principles](docs/ai/ai-working-principles.md)
* [Prompt patterns](docs/ai/prompt-patterns.md)
* [AI review log](docs/ai/ai-review-log.md)

### External project documents

* [Project links](docs/project-links.md)

## Documentation boundary

Product ownership, Scrum process, meeting notes, user stories, backlog management and planning discussions are handled outside this repository.

The repository may link to external documents where useful, but it should not duplicate them.
