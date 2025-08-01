// server.js
// 1. Import necessary packages
const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// 2. Define your GraphQL schema
// This is written in GraphQL Schema Definition Language (SDL)
const schema = buildSchema(`
  type Query {
    hello: String
    book(id: ID!): Book
    books: [Book]
  }

   type Mutation {
    updateBookIsGood(id: ID!, isGood: Boolean!): Book
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    isGood: Boolean!
  }
`);

// Sample data (acting as a simple database)
const booksData = [
  { id: '1', title: 'The Great Gatsby', author: 'Jestan', isGood: false },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', isGood: false },
  { id: '3', title: '1984', author: 'George Orwell', isGood: false },
];

// 3. Create a root resolver
// This object provides a resolver function for each API endpoint
const root = {
  hello: () => {
    return 'Hello, GraphQL!';
  },
  book: ({ id }) => {
    // Find a book by ID
    return booksData.find(book => book.id === id);
  },
  books: () => {
    console.log('books');
    return booksData;
  },
  updateBookIsGood: ({ id, isGood }) => {
    console.log('updateBookIsGood');
    const bookIndex = booksData.findIndex(book => book.id === id);
    if (bookIndex > -1) {
      booksData[bookIndex].isGood = isGood;
      return booksData[bookIndex];
    }
    // If book not found, you might want to return null or throw an error
    return null;
  },
};

// 4. Set up the Express server
const app = express();
app.use(cors());
// Use the express-graphql middleware to handle GraphQL requests
// The `graphiql: true` option enables the GraphiQL IDE in the browser
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable the GraphiQL interactive in-browser GraphQL IDE
  })
);

// Define the port to listen on
const PORT = 4001;

// 5. Start the server
app.listen(PORT, () => {
  console.log(`GraphQL server running at http://localhost:${PORT}/graphql`);
  console.log(`Open http://localhost:${PORT}/graphql in your browser to use GraphiQL.`);
});


