const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    products: [Product]
    findProductByPid(pid: String!): Product
    searchProducts(name: String!): [Product]
    findProductByBarcode(barcode: String!): Product
  }

  extend type Mutation {
    createProduct(data: InProduct!): Product
    updateProduct(pid: String!, data: InProduct!): Product
  }

  type Product {
    id: ID
    sub_category_id: ID
    unit_id: ID
    pid: String!
    name: String!
    purchase_price: Double!
    selling_price: Double!
    first_stock: Double!
    last_stock: Double!
    minimal_stock: Double!
    created_at: DateTime
    updated_at: DateTime
    sub_category: SubCategory
    unit: Unit
    barcode: String
  }

  input InProduct {
    sub_category_id: ID!
    unit_id: ID!
    name: String!
    purchase_price: Double!
    selling_price: Double!
    first_stock: Double!
    last_stock: Double!
    minimal_stock: Double!
    barcode: String
  }
`;

module.exports = typeDefs;
