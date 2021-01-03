const { ApolloError } = require('apollo-server-express');
const { Category } = require('../models');

const resolvers = {
  Query: {
    categories: async () => {
      try {
        console.log('==> Accessing categories');

        return Category.query().orderBy('name', 'ASC');
      } catch (error) {
        console.log('==> Error accessing: categories');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    findCategoryByCid: async (_, args) => {
      try {
        console.log('==> Accessing findCategoryByCid');

        return Category.query().findOne({ cid: args.cid });
      } catch (error) {
        console.log('==> Error accessing: findCategoryByCid');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
  Mutation: {
    async createCategory(_, args) {
      try {
        console.log('==> Accessing createCategory');

        return Category.query().insertAndFetch({ name: args.name });
      } catch (error) {
        console.log('==> Error accessing: createCategory');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    async updateCategory(_, args) {
      try {
        console.log('==> Accessing updateCategory');

        const unit = await Category.query().findOne({ cid: args.cid });

        return unit.$query().updateAndFetch({ name: args.name });
      } catch (error) {
        console.log('==> Error accessing: updateCategory');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
};

module.exports = resolvers;
