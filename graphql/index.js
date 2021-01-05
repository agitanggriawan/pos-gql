const { merge } = require('lodash');
const { gql } = require('apollo-server-express');

/* IMPORT FOR SCHEMA */
const schemaExamples = require('./schemaExamples');
const schemaUnits = require('./schemaUnits');
const schemaCategories = require('./schemaCategories');
const schemaUsers = require('./schemaUsers');

/* IMPORT FOR RESOLVER */
const resolverExamples = require('./resolverExamples');
const resolverUnits = require('./resolverUnits');
const resolverCategories = require('./resolverCategories');
const resolverUsers = require('./resolverUsers');

const baseSchema = gql`
  scalar DateTime

  type Query {
    version: String
  }

  type Mutation {
    base: String
  }
`;

const schemas = [
  baseSchema,
  schemaExamples,
  schemaUnits,
  schemaCategories,
  schemaUsers,
];
const resolvers = [
  resolverExamples,
  resolverUnits,
  resolverCategories,
  resolverUsers,
];

module.exports = {
  typeDefs: schemas,
  resolvers: merge(resolvers),
};
