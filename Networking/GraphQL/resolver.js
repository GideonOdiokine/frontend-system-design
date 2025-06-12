export const resolvers = {
  Query: {
    authors: () => {
      return [
        {
          id: 1,
          name: "Gideon Odiokine",
        },
      ];
    },
    books: () => {
      return [
        {
          id: 1,
          title: "Okon Bassey Odiokine",
          publishedYear: 2023,
        },
        {
          id: 2,
          title: "Gideon Bassey Odiokine",
          publishedYear: 2023,
        },
      ];
    },
  },
};
