const { ApolloError } = require('apollo-server-express');
const { Unit } = require('../models');

const resolvers = {
  Query: {
    units: async () => {
      try {
        console.log('==> Accessing units');

        return Unit.query().orderBy('name', 'ASC');
      } catch (error) {
        console.log('==> Error accessing: units');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    findUnitByUnid: async (_, args) => {
      try {
        console.log('==> Accessing findUnitByUnid');

        return Unit.query().findOne({ unid: args.unid });
      } catch (error) {
        console.log('==> Error accessing: findUnitByUnid');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
  Mutation: {
    async createUnit(_, args) {
      try {
        console.log('==> Accessing createUnit');

        return Unit.query().insertAndFetch({ name: args.name });
      } catch (error) {
        console.log('==> Error accessing: createUnit');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    async updateUnit(_, args) {
      try {
        console.log('==> Accessing updateUnit');

        const unit = await Unit.query().findOne({ unid: args.unid });

        return unit.$query().updateAndFetch({ name: args.name });
      } catch (error) {
        console.log('==> Error accessing: updateUnit');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
};

module.exports = resolvers;
