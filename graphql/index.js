const { merge } = require('lodash');
const { gql } = require('apollo-server-express');

/* IMPORT FOR SCHEMA */
const schemaExamples = require('./schemaExamples');
const schemaUnits = require('./schemaUnits');
const schemaCategories = require('./schemaCategories');
const schemaUsers = require('./schemaUsers');
const schemaSubCategories = require('./schemaSubCategories');
const schemaProducts = require('./schemaProducts');
const schemaOrders = require('./schemaOrders');
const schemaCustomers = require('./schemaCustomers');

/* IMPORT FOR RESOLVER */
const resolverExamples = require('./resolverExamples');
const resolverUnits = require('./resolverUnits');
const resolverCategories = require('./resolverCategories');
const resolverUsers = require('./resolverUsers');
const resolverSubCategories = require('./resolverSubCategories');
const resolverProducts = require('./resolverProducts');
const resolverOrders = require('./resolverOrders');
const resolverCustomers = require('./resolverCustomers');

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
  schemaOrders,
  schemaCustomers,
];
const resolvers = [
  resolverExamples,
  resolverUnits,
  resolverCategories,
  resolverUsers,
  resolverSubCategories,
  resolverProducts,
  resolverOrders,
  resolverCustomers,
];

module.exports = {
  typeDefs: schemas,
  resolvers: merge(resolvers),
};
