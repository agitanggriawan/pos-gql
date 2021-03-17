const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    orders: [Order]
  }

  extend type Mutation {
    createOrder(data: InOrder!): Order
  }

  input InOrder {
    amount_paid: Double!
    grand_total: Double!
    change: Double!
    order_products: [InOrderProduct!]!
  }

  input InOrderProduct {
    product_id: ID!
    price: Double!
    quantity: Double!
    sub_total: Double!
  }

  type Order {
    id: ID
    oid: String!
    amount_paid: Double!
    grand_total: Double!
    created_at: DateTime
    updated_at: DateTime
  }
`;

module.exports = typeDefs;
