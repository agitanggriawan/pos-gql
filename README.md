# Setup Backend

This is for setup app from server side, client side need setup from another project.

## Requirement

- Node JS Version min. 10.x.x
- NPM or Yarn
- Database Postgres min. 10 or more

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/) to dependencies.

```bash
npm install or yarn install
```

Run migrations, make sure you already install `knex` globally. If not, you need install `npm install -g knex`

```bash
knex migrate:latest --env local
```

Run seedings for initial data in database

```bash
knex seed:run --env local
```

## Run Server

After done install dependencies, you need run server with command

```bash
npm local or yarn local
```

Your server is running 🎉🎉🎉

Good luck, have fun. -lek, 2021
