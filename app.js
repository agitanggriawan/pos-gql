const express = require('express');
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql');
const Knex = require('knex');
const path = require('path');
const knexConfig = require('./knexfile');
const { Model } = require('objection');
const PORT = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || 'local';
const playground = process.env.NODE_ENV !== 'production';
Model.knex(Knex(knexConfig[environment]));

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
});

const server = new ApolloServer({
  schema,
  playground,
  cors: true,
  context: ({ req }) => {
    return req.headers;
  },
});

server.applyMiddleware({
  app,
  bodyParserConfig: {
    limit: '20mb',
  },
  path: '/data',
  cors: true,
});
app.use('/public', express.static(path.join(__dirname, 'public')));
app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);

module.exports = app;
