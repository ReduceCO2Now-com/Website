## Updated frontend technology overview

The frontend uses:

* React for building the user interface
* TypeScript for typed JavaScript
* Vite as the development server and build tool
* React Query for loading and caching backend data
* Axios for HTTP requests
* Conventional CSS, primarily in `frontend/src/App.css`

The current codebase contains substantial custom CSS. Bootstrap should only be listed as part of the project after confirming that `bootstrap` or `react-bootstrap` is installed and imported by the frontend.

To verify this locally:

```powershell
cd C:\coding\reduceco2now-app\frontend
npm list bootstrap react-bootstrap
```

A project using Bootstrap will commonly contain an import such as:

```tsx
import "bootstrap/dist/css/bootstrap.min.css";
```

or React component imports such as:

```tsx
import { Container, Row, Col } from "react-bootstrap";
```

Bootstrap and custom CSS are not mutually exclusive. If Bootstrap is installed, it may provide layout utilities, responsive grids, buttons, navigation components, or baseline formatting, while `App.css` supplies the site-specific visual design.

## Planned deployed database environments

Local development currently uses the SQLite database file:

```text
backend/.tmp/data.db
```

The deployed environments are intended to use managed PostgreSQL databases hosted by Supabase instead of SQLite.

The proposed database arrangement is:

```text
Local development
└── Local SQLite database

Testing or staging deployment
└── Dedicated Supabase PostgreSQL project/database

Production go-live deployment
└── Separate dedicated Supabase PostgreSQL project/database
```

The testing and production environments should not share the same database. Keeping them separate prevents test content, schema experiments, administrator accounts, permissions, migrations, and destructive testing from affecting the live website.

Each deployed Strapi instance will connect to its corresponding Supabase PostgreSQL database using server-side environment variables. Database passwords and connection strings must remain in the deployment platform’s secret or environment-variable configuration and must not be exposed to the Vite frontend or committed to Git.

Supabase provides a full PostgreSQL database. A persistent Strapi backend would normally use either a direct PostgreSQL connection or Supabase’s session-mode pooler, depending on whether the hosting environment supports the required network connection. Transaction-mode pooling is generally intended for short-lived or serverless workloads and may be less suitable for a conventional continuously running Strapi process.

SSL should be used for deployed database connections. The final connection method, certificate settings, pooling choice, and hosting-provider configuration should be confirmed when the Strapi hosting platform has been selected.

## Deployment architecture — intended direction

The precise hosting providers and operational details remain open, but the deployment should follow a conventional separation between the frontend, backend, database, and media storage.

A likely architecture is:

```text
Users
  │
  ▼
Vite frontend deployed as static files
  │
  │ HTTPS API requests
  ▼
Strapi backend running as a persistent Node.js service
  │
  ├── PostgreSQL database on Supabase
  │
  └── Persistent or external media storage
```

### Vite frontend

The React/Vite frontend should normally be built with:

```powershell
npm run build
```

Vite places the production output in `dist` by default. That directory can be deployed to a static hosting platform or CDN.

The frontend deployment requires an environment-specific API base URL, for example:

```env
VITE_API_URL=https://api-test.example.org
```

for testing, and:

```env
VITE_API_URL=https://api.example.org
```

for production.

Because Vite environment variables are compiled into the frontend build, the testing and production frontends should be built separately with the correct backend URL for each environment.

The Vite development or preview server should not be used as the production web server. `vite preview` is intended only for locally checking the production build.

### Strapi backend

Strapi should run as a persistent Node.js web service or container rather than as a static or purely serverless application.

The deployed backend will require environment-specific configuration for:

* the PostgreSQL connection;
* Strapi application keys and secrets;
* administrator authentication secrets;
* API token salt;
* transfer token salt;
* public backend URL;
* frontend origins and CORS rules;
* media-storage configuration;
* Node environment;
* host and port settings.

The testing backend should connect only to the testing Supabase database.

The production backend should connect only to the production Supabase database.

Strapi secrets should also be different between testing and production.

### Media storage

The local backend currently stores uploaded media under:

```text
backend/public/uploads/
```

A deployed Strapi instance must not rely on temporary or ephemeral local storage unless its hosting service provides a persistent disk and that disk is included in the backup strategy.

The final media approach remains open. Conventional options include:

* persistent storage attached to the Strapi service;
* an object-storage service compatible with Strapi’s upload providers;
* a managed media platform.

Whichever option is selected, testing and production media should normally be isolated from one another.

The PostgreSQL database stores media metadata and relationships, while the uploaded binary files are generally stored separately. Database migration alone may therefore not transfer all website media.

## Suggested environment separation

The intended environments are:

### Local development

```text
Frontend: Vite development server
Backend: local Strapi development server
Database: local SQLite data.db
Media: backend/public/uploads
```

### Testing or staging

```text
Frontend: static Vite deployment
Backend: deployed Strapi Node.js service
Database: testing Supabase PostgreSQL project
Media: testing media storage
Purpose: integration testing, CMS review and release validation
```

### Production

```text
Frontend: production static Vite deployment
Backend: production Strapi Node.js service
Database: production Supabase PostgreSQL project
Media: production media storage
Purpose: public go-live environment
```

The same application source code should ideally be deployable to testing and production. Environment-specific differences should be supplied through environment variables, secrets, database contents, domain configuration, and deployment settings rather than through manually edited source code.

## Content promotion between environments

Testing and production will have separate PostgreSQL databases. Content entered in the testing CMS will therefore not automatically appear in production.

Before go-live, the team should define a deliberate process for transferring or recreating:

* content entries;
* localizations;
* media files;
* role and API permissions;
* administrator setup where appropriate;
* required permanent records such as headers and Card Sets.

Possible approaches include:

* Strapi import and export tooling;
* Strapi transfer tooling;
* database-level PostgreSQL backup and restore;
* controlled seed scripts;
* manually recreating a small set of content.

The selected process should preserve relationships, locales, document identifiers where required, publication state, and media references.

Using stable semantic slugs for permanent page sections will reduce the frontend’s dependence on environment-specific database identifiers.

## Deployment decisions intentionally left open

The following choices do not need to be fixed in the local setup guide yet:

* the static hosting provider for the Vite frontend;
* the Node.js or container hosting provider for Strapi;
* whether frontend and backend use separate subdomains;
* the media-storage provider;
* the CI/CD platform;
* the exact Supabase direct or pooled connection mode;
* the backup and disaster-recovery schedule;
* the content-promotion workflow.

The architecture should nevertheless preserve these principles:

1. The Vite frontend is built and deployed as static assets.
2. Strapi runs as a persistent backend service.
3. Testing and production have separate PostgreSQL databases.
4. Secrets are stored outside the repository.
5. The browser communicates with Strapi, not directly with the Strapi PostgreSQL database.
6. Uploaded media uses durable storage.
7. Testing and production content and media remain isolated.
8. Deployments are reproducible from committed source code and environment configuration.
9. Permanent CMS sections use stable semantic identifiers where practical.
10. Schema and content changes are tested before production deployment.
