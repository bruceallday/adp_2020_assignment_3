import { ApolloServer, gql } from 'apollo-server';
import { Pool } from 'pg' 
import bcrypt from 'bcrypt';
import csurf from 'csurf';
import cors from 'cors';

const pool = new Pool();

const registerNewUser = (password) => {
  const saltRounds = 10;
  const hash = bcrypt.hash(password, saltRounds);
  return hash;
};

// The GraphQL schema
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});