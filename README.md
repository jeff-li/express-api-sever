<h1 align="center">express-api-sever</h1>
<div align="center">
An enhanced template for your next project using Express.js and PostgreSQL. 

[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![CircleCI](https://circleci.com/gh/jeff-li/express-api-sever/tree/master.svg?style=svg)](https://circleci.com/gh/jeff-li/express-api-sever/tree/master)
[![codecov](https://codecov.io/gh/jeff-li/express-api-sever/branch/master/graph/badge.svg?token=BZMDHLXB3N)](https://codecov.io/gh/jeff-li/express-api-sever)
</div>


This repo is an opinionated template which can save you time when starting a new nodejs backend project. It includes many best practices and useful tools that have benefited me in the past. I tried to keep it a straight-forward API only server so it's not bloated with view engines. Hopefully it can give your project jump-start and you don't have to reconfigure everything from scratch.

## Features

✅  [Dockerized](https://www.docker.com/)  
✅  [CircleCI](https://circleci.com/) for continuous integration. Tests results and artifacts stored after each build  
✅  [Prettier](https://prettier.io/) enabled  
✅  Prevent some well-known web vulnerabilities with [Helmet](https://helmetjs.github.io/)  
✅  Unit testing with [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/) and [Sinon](https://sinonjs.org/)  
✅  [Winston](https://github.com/winstonjs/winston) logger  
✅  Connection to PostgreSql databases through [Sequelize](https://sequelize.org/master/) ORM  
✅  [Swagger-UI](https://swagger.io/tools/swagger-ui/) API docs generation using [Swagger UI Express](https://github.com/scottie1984/swagger-ui-express)  
✅  Automatic reload development server with [Nodemon](https://nodemon.io/)  
✅  Code linting with [ESLint](https://eslint.org/)  
✅  Track unit-test coverage with [Istanbul](https://istanbul.js.org/)  
✅  [Codecov](https://about.codecov.io/) for unit test coverage monitoring  

Please feel free to remove features that's not needed in your project.


## Getting Started with Docker

1. Run the development server using Docker Compose:

```bash
docker compose up -d
```

2. Open [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/) with your browser to interact with available API endpoints.

## Getting Started without Docker

1. Update `.env` file with your PostgreSQL database config: `DB_USER`, `DB_PASS`, `DB_DATABASE` and `DB_HOST`

2. Run `npm run dev` to start the development server

3. Open [http://localhost:3000/api-docs/](http://localhost:3000/api-docs/) with your browser to interact with available API endpoints.

## Available Scripts

In the project directory, you can run:

### `npm start`

Run all migration scripts and start server<br />

### `npm run dev`

Run all migration scripts and start development server with nodemon<br />

### `npm test`

Run all unit tests and report coverage<br />

### `npm run test-watch`

Run all unit tests in watch mode<br />

### `npm run report-coverage`

Report current test coverage with `nyc`<br />

### `npm run migrate`

Run Sequelize migration and seed scripts<br />

### `npm run lint`

Run Eslint linter on all .js files<br />
