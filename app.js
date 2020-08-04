const express = require('express');
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./graphql');

const app = express();
const PORT = 3000;
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  playground: true,
  cors: true,
  context: ({ req }) => {
    return req.headers;
  },
});

server.applyMiddleware({
  app,
  bodyParserConfig: {
    limit: '2mb',
  },
  path: '/data',
  cors: true,
});

app.listen({ port: PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
);
