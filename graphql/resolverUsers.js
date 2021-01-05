const { ApolloError } = require('apollo-server-express');
const { User } = require('../models');
const { generateToken } = require('../utils');

const resolvers = {
  Query: {
    users: async () => {
      try {
        console.log('==> Accessing users');

        return User.query().orderBy('name', 'ASC');
      } catch (error) {
        console.log('==> Error accessing: users');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    findUserByUid: async (_, args) => {
      try {
        console.log('==> Accessing findUserByUid');

        return User.query().findOne({ uid: args.uid });
      } catch (error) {
        console.log('==> Error accessing: findUserByUid');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    authenticate: async (_, args) => {
      console.log('==> Accessing authenticate');
      console.log('==> args', args);

      try {
        const user = await User.query().findOne({
          email: args.email,
        });

        if (user && user.checkPassword(args.password)) {
          const data = {
            id: user.id,
            name: user.name,
            email: user.email,
            uid: user.uid,
            role: user.role,
          };

          const token = generateToken(data);
          user.token = token;

          return user;
        }

        throw new ApolloError(
          'Email atau Password tidak sesuai',
          'INTERNAL_SERVER_ERROR',
          null
        );
      } catch (error) {
        console.log('==> Error Accessing authenticate', error);
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
  Mutation: {
    async createUser(_, args) {
      try {
        console.log('==> Accessing createUser');

        return User.query().insertAndFetch(args.data);
      } catch (error) {
        console.log('==> Error accessing: createUser');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
    async updateUser(_, args) {
      try {
        console.log('==> Accessing updateUser');

        const user = await User.query().findOne({ uid: args.uid });

        return user.$query().updateAndFetch(args.data);
      } catch (error) {
        console.log('==> Error accessing: updateUser');
        throw new ApolloError(error, 'INTERNAL_SERVER_ERROR', null);
      }
    },
  },
};

module.exports = resolvers;
