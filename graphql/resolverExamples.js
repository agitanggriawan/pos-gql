const books = [
  {
    id: 1,
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    id: 2,
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    async books(_, args, context) {
      console.log('==> accessing books');

      return books;
    },
    async book(_, args, context) {
      console.log('==> accessing book');

      return books.find((x) => x.id == args.id);
    },
  },
  Mutation: {
    async createBook(_, args) {
      console.log('==> accessing createBook');

      return args.data;
    },
  },
};

module.exports = resolvers;
