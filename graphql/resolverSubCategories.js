const { ApolloError } = require('apollo-server-express');
const { SubCategory } = require('../models');

const resolvers = {
  Query: {
    subCategories: async () => {
      try {
        console.log('==> Accessing subCategories');

        return SubCategory.query()
          .orderBy('name', 'ASC')
          .withGraphFetched('category');
      } catch (error) {
        console.log('==> Error accessing: subCategories');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    findSubCategoryByScid: async (_, args) => {
      try {
        console.log('==> Accessing findSubCategoryByScid');

        return SubCategory.query()
          .findOne({ scid: args.scid })
          .orderBy('name', 'ASC')
          .withGraphFetched('category');
      } catch (error) {
        console.log('==> Error accessing: findSubCategoryByScid');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    searchSubCategories: async (_, args) => {
      try {
        console.log('==> Accessing searchSubCategories');

        return SubCategory.query()
          .where('name', 'ilike', `%${args.name}%`)
          .orderBy('name', 'asc');
      } catch (error) {
        console.log('==> Error accessing: searchSubCategories');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
  Mutation: {
    createSubCategory: async (_, args) => {
      try {
        console.log('==> Accessing createSubCategory');
        return SubCategory.query().insertAndFetch({
          category_id: args.category_id,
          name: args.name,
        });
      } catch (error) {
        console.log('==> Error accessing: createSubCategory');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    updateSubCategory: async (_, args) => {
      try {
        console.log('==> Accessing updateSubCategory');
        const sub_category = await SubCategory.query().findOne({
          scid: args.scid,
        });
        return sub_category
          .$query()
          .updateAndFetch({ category_id: args.category_id, name: args.name });
      } catch (error) {
        console.log('==> Error accessing: updateSubCategory');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
};

module.exports = resolvers;
