const { merge } = require('lodash');
const { gql } = require('apollo-server-express');

/* IMPORT FOR SCHEMA */
const schemaExamples = require('./schemaExamples');
const schemaUnits = require('./schemaUnits');
const schemaCategories = require('./schemaCategories');
const schemaUsers = require('./schemaUsers');
const schemaSubCategories = require('./schemaSubCategories');
const schemaProducts = require('./schemaProducts');

/* IMPORT FOR RESOLVER */
const resolverExamples = require('./resolverExamples');
const resolverUnits = require('./resolverUnits');
const resolverCategories = require('./resolverCategories');
const resolverUsers = require('./resolverUsers');
const resolverSubCategories = require('./resolverSubCategories');
const resolverProducts = require('./resolverProducts');

const baseSchema = gql`
  scalar DateTime
  scalar Double

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
  schemaSubCategories,
  schemaProducts,
];
const resolvers = [
  resolverExamples,
  resolverUnits,
  resolverCategories,
  resolverUsers,
  resolverSubCategories,
  resolverProducts,
];

module.exports = {
  typeDefs: schemas,
  resolvers: merge(resolvers),
};
