const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    customers: [Customer]
    findCustomerByCid(cid: String!): Customer
  }

  extend type Mutation {
    createCustomer(data: InCustomer!): Customer
  }

  type Customer {
    id: ID!
    cid: String!
    name: String!
    address: String
    created_at: DateTime
    updated_at: DateTime
  }

  input InCustomer {
    name: String!
    address: String
  }
`;

module.exports = typeDefs;
