import { ApolloServer, gql } from 'apollo-server';
import { Pool } from 'pg' 
import bcrypt from 'bcrypt';
import csurf from 'csurf';
import cors from 'cors';

const pool = new Pool();

const csrfProtect = csurf({
  ignoreMethods: [],
});

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

    "All users"
    user: [String!]!
  },

  type Mutation {
    createUser(input: CreateUserInput!): User!
    logIn(input: CreateLogInInput!): User!
  }

  input CreateLogInInput {
    userName: String!
    userPassword: String!
  }

  input CreateUserInput {
    userName: String!
    userEmail: String!
    userPassword: String!
  }

  type User {
    id: ID!
    userName: String!
    userEmail: String
    userPassword: String! 
  }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    hello: () => 'world',
  },

  Mutation: {
    createUser: async (source, args) => {
      const { userName, userEmail, userPassword } = args.input;

      const hash = await registerNewUser(userPassword);

      const results = await pool.query(`
        INSERT INTO users ( user_name, user_email, user_password )
        VALUES
          ( $1, $2, $3 )
      `, [userName, userEmail, hash]);
      return results.rows[0];
    },

    logIn: async (source, args) => {
      const { userName, userPassword } = args.input;

      console.log('ARGS', args);

      try {
        const userResult = await pool.query(`
          SELECT * FROM users WHERE user_name = $1
      `, [userName]);

        const user = userResult.rows[0];
        console.log('USER', user);

        const isValidPassword = await bcrypt.compare(userPassword, user.user_password);

        if (!isValidPassword) {
          console.log('INVALID PASSWORD!');
        } else {
          console.log('VALID PASSWORD');
        }
      } catch (e) {
        console.log(e);
      }

    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
