const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    categories: [Category]
    findCategoryByCid(cid: String!): Category
    searchCategories(name: String!): [Category]
  }

  extend type Mutation {
    createCategory(name: String!): Category
    updateCategory(cid: String!, name: String!): Category
  }

  type Category {
    id: ID
    cid: String!
    name: String!
    created_at: DateTime
    updated_at: DateTime
  }
`;

module.exports = typeDefs;
