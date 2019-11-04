const { gql } = require('apollo-server-express');

module.exports = gql`
	type Query {
		user(email: String!): User!
		users: [User!]
	}
	type User {
		id: ID!
		email: String!
		password: String!
	}
`;
