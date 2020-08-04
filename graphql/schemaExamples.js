const { gql } = require('apollo-server-express');

const typeDefs = gql`
  extend type Query {
    books: [Book]
    book(id: ID!): Book
  }

  extend type Mutation {
    createBook(data: InBook): Book
  }

  type Book {
    id: ID
    title: String
    author: String
  }

  input InBook {
    title: String
    author: String
  }
`;

module.exports = typeDefs;
