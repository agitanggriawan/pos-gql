const { ApolloError } = require('apollo-server-express');
const { Customer } = require('../models');

const resolvers = {
  Query: {
    customers: async () => {
      try {
        console.log('==> Accessing customers');

        return Customer.query().orderBy('name', 'ASC');
      } catch (error) {
        console.log('==> Error accessing: customers', error);
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    findCustomerByCid: async (_, args) => {
      try {
        console.log('==> Accessing findCustomerByCid');

        return Customer.query().findOne({ cid: args.cid });
      } catch (error) {
        console.log('==> Error accessing: findCustomerByCid', error);
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
  Mutation: {
    async createCustomer(_, args) {
      try {
        console.log('==> Accessing createCustomer');

        return Customer.query().insertAndFetch(args.data);
      } catch (error) {
        console.log('==> Error accessing: createCustomer');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
};

module.exports = resolvers;
