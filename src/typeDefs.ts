import gql from "graphql-tag";

export default gql`
  type Query {
    getUsers: [User!]!
    getUser(id: Int!): User!
  }

  type User {
    id: Int!
    name: String!
    email: String!
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