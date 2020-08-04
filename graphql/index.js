const { merge } = require('lodash');
const { gql } = require('apollo-server-express');

/* IMPORT FOR SCHEMA */
const schemaExamples = require('./schemaExamples');

/* IMPORT FOR RESOLVER */
const resolverExamples = require('./resolverExamples');

const baseSchema = gql`
  type Query {
    version: String
  }

  type Mutation {
    base: String
  }
`;

const schemas = [baseSchema, schemaExamples];
const resolvers = [resolverExamples];

module.exports = {
  typeDefs: schemas,
  resolvers: merge(resolvers),
};
