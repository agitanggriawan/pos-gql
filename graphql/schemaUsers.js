const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    users: [User]
    findUserByUid(uid: String!): User
    authenticate(email: String!, password: String!): Auth
  }

  extend type Mutation {
    createUser(data: InUser!): User
    updateUser(uid: String!, data: InUser!): User
  }

  type Auth {
    email: String!
    uid: String!
    role: String!
    token: String!
  }

  type User {
    id: ID
    uid: String!
    name: String!
    email: String!
    role: String!
    created_at: DateTime
    updated_at: DateTime
  }

  input InUser {
    name: String!
    email: String!
    password: String
    role: String!
  }
`;

module.exports = typeDefs;
