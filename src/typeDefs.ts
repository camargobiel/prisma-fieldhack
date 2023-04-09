import gql from "graphql-tag";

export default gql`
  type Query {
    getUsers: [User!]!
    getUser(id: Int!): User
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  type User {
    id: Int!
    email: String!
    name: String
  }

  type Post {
    id: Int!
    createdAt: String!
    updatedAt: String!
    title: String!
    content: String!
    published: Boolean!
    author: User!
  }
`
