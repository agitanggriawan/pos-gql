const { merge } = require('lodash');
const { gql } = require('apollo-server-express');

/* IMPORT FOR SCHEMA */
const schemaExamples = require('./schemaExamples');
const schemaUnits = require('./schemaUnits');
const schemaCategories = require('./schemaCategories');

/* IMPORT FOR RESOLVER */
const resolverExamples = require('./resolverExamples');
const resolverUnits = require('./resolverUnits');
const resolverCategories = require('./resolverCategories');

const baseSchema = gql`
  scalar DateTime

  type Query {
    version: String
  }

  type Mutation {
    base: String
  }
`;

const schemas = [baseSchema, schemaExamples, schemaUnits, schemaCategories];
const resolvers = [resolverExamples, resolverUnits, resolverCategories];

module.exports = {
  typeDefs: schemas,
  resolvers: merge(resolvers),
};
