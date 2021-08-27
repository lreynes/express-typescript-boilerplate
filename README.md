<br />
 
 # Express typescript boilerplate
This is a boilerplate for express + typescript project.

## Installation

```
copy .env.example env   # Copy example environment file
npm i                   # Install dependancies
npm run prepare         # Prepare git hooks
npm run start           # Or npm run start:dev for launching with live reload
```

## Commands

Only use npm (not yarn) :

```
prepare                 Install husky (git hooks)
build                   Build the project (ts to js)
test                    Execute tests

start                   Launch server without live reload
start:dev               Launch server with live reload

deploy:dev              Deploy server in dev with GCP Dev file
deploy:prp              Deploy server in pre-production with GCP Preprod file
deploy:prod             Deploy server in production with GCP Prod file

lint                    Launch linter
lint:fix                Launch & fix errors returned by linter
prettier:format         Format files with prettier configuration
```

### Add git hooks :

```
npx husky add .husky/pre-commit 'npm run lint && npm run test'
```
