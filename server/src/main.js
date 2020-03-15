import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

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

    "All users"
    user: [String!]!
  },

  type Mutation {
    createUser(input: CreateUserInput!): User!
    logIn(input: CreateLogInInput!): LoginResult!
  }

  type LoginResult {
    token: String!
    user: User!
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

    user: async (source, args) => {

      const results = await pool.query(`
                SELECT * FROM users
                WHERE id = $1
            `, [args.id])
      return results.rows
    },
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

    logIn: async (source, args, context) => {
      const { userName, userPassword } = args.input;
      console.log('CONTEXT', context.extensionStack);
      console.log('ARGS', args);

      try {
        const userResult = await pool.query(`
          SELECT * FROM users WHERE user_name = $1
      `, [userName]);

        const user = userResult.rows[0];

        console.log('USER', user);

        const isValidPassword = await bcrypt.compare(userPassword, user.user_password);

        if (!isValidPassword) {
          console.log('INVALID PASSWORD');
        } else {
          console.log('PASSWORD VALID!');
          const token = jwt.sign({ userID: user.id }, process.env.JWT_SECRET);

          return {
            token,
            user,
          };
          // context.response.cookie('token', token, {
          //   httpOnly: false,
          //   maxAge: 30 * 24 * 60 * 60 * 1000,
          // });
          // return {
          //   token,
          //   message: 'VALID PASSWORD',
          // };
        }
      } catch (error) {
        return {
          message: error,
        };
      }

    },
  },
};

const createServer = () => new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return { req };
  },
});

const app = express();

createServer().applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000/public/graphql`),
);
// CONTEXT {
//   _extensionStack: GraphQLExtensionStack { extensions: [[CacheControlExtension]] }
// }
