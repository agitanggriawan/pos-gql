const { ApolloError } = require('apollo-server-express');
const { Product } = require('../models');

const resolvers = {
  Query: {
    products: async () => {
      try {
        console.log('==> Accessing products');

        return Product.query()
          .orderBy('name', 'ASC')
          .withGraphFetched('[sub_category, unit]');
      } catch (error) {
        console.log('==> Error accessing: products', error);
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    findProductByPid: async (_, args) => {
      try {
        console.log('==> Accessing findProductByPid');

        return Product.query()
          .findOne({ pid: args.pid })
          .orderBy('name', 'ASC')
          .withGraphFetched('[sub_category, unit]');
      } catch (error) {
        console.log('==> Error accessing: findProductByPid');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    searchProducts: async (_, args) => {
      try {
        console.log('==> Accessing searchProducts');

        return Product.query()
          .where('name', 'ilike', `%${args.name}%`)
          .orWhere('barcode', 'ilike', `%${args.name}%`)
          .orderBy('name', 'ASC')
          .withGraphFetched('[sub_category, unit]');
      } catch (error) {
        console.log('==> Error accessing: searchProducts');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    findProductByBarcode: async (_, args) => {
      try {
        console.log('==> Accessing findProductByBarcode');

        return Product.query()
          .findOne({ barcode: args.barcode })
          .orderBy('name', 'ASC')
          .withGraphFetched('[sub_category, unit]');
      } catch (error) {
        console.log('==> Error accessing: findProductByBarcode');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
  Mutation: {
    createProduct: async (_, args) => {
      try {
        console.log('==> Accessing createProduct');
        return Product.query().insertAndFetch(args.data);
      } catch (error) {
        console.log('==> Error accessing: createProduct');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    updateProduct: async (_, args) => {
      try {
        console.log('==> Accessing updateProduct');
        const product = await Product.query().findOne({
          pid: args.pid,
        });
        return product.$query().updateAndFetch(args.data);
      } catch (error) {
        console.log('==> Error accessing: updateProduct');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
};

module.exports = resolvers;
