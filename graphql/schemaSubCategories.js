const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    subCategories: [SubCategory]
    findSubCategoryByScid(scid: String!): SubCategory
    searchSubCategories(name: String!): [SubCategory]
  }

  extend type Mutation {
    createSubCategory(category_id: ID!, name: String!): SubCategory
    updateSubCategory(
      scid: String!
      category_id: ID!
      name: String!
    ): SubCategory
  }

  type SubCategory {
    id: ID
    category_id: ID
    scid: String!
    name: String!
    created_at: DateTime
    updated_at: DateTime
    category: Category
  }
`;

module.exports = typeDefs;
