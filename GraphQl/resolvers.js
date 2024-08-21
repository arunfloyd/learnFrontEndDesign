const data = {
  authors: [
    { id: "1", name: "John", bookIds: ["101", "102"] },
    { id: "2", name: "John", bookId: ["103"] },
  ],
  books: [
    {
      id: "101",
      title: "Harry Potter and the Philosopher's Stone",
      authorId: "1",
      publisherYear: 2001,
    },
    {
      id: "102",
      title: "Harry Potter and the Chamber of Secrets",
      authorId: "1",
      publisherYear: 2010,
    },
    {
      id: "103",
      title: "Harry Potter and the Prisoner of Azkaban",
      authorId: "2",
      publisherYear: 2011,
    },
  ],
};

export const resolvers = {
  Book: {
    author: (parent, args, context, info) => {
      return data.authors.find((author) => author.id === parent.authorId);
    },
  },
  Author: {
    books: (parent, args, context, info) => {
      return data.books.filter((book) => book.authorId === parent.id);
    },
  },
  Query: {
    authors: (parent, args, context, info) => {
      return data.authors;
    },
    books: (parent, args, context, info) => {
      return data.books;
    },
  },
  Mutation: {
    addBook: (parent, args, context, info) => {
      const newBook = { ...args, id: data.books.length + 1 };
      data.books.push(newBook);
      return newBook;
    },
  },
};
