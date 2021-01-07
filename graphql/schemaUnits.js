const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    units: [Unit]
    findUnitByUnid(unid: String!): Unit
    searchUnits(name: String!): [Unit]
  }

  extend type Mutation {
    createUnit(name: String!): Unit
    updateUnit(unid: String!, name: String!): Unit
  }

  type Unit {
    id: ID
    unid: String!
    name: String!
    created_at: DateTime
    updated_at: DateTime
  }
`;

module.exports = typeDefs;
