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

  type Book {
    id: ID!
    title: String
    author: String
  }
`);

const list = ["AA", "BB", "CC", "DD"]

// Sample data (acting as a simple database)
const booksData = [
  { id: '1', title: 'The Great Gatsby', author: 'AAAA' },
  { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: '3', title: '1984', author: 'George Orwell' },
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
    // Return all books
    const i = Math.floor(Math.random() * 3);
    const tmp = list[i]
    booksData[0].author = tmp;
    return booksData;
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


