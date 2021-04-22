const { ApolloError } = require('apollo-server-express');
const { Order } = require('../models');

const resolvers = {
  Query: {},
  Mutation: {
    async createOrder(_, args) {
      try {
        console.log('==> Accessing createOrder');

        return Order.query().insertGraphAndFetch(args.data);
      } catch (error) {
        console.log('==> Error accessing: createOrder');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
};

module.exports = resolvers;
