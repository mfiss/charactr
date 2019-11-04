const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('./schemas');
const resolvers = require('./resolvers');

const app = express();

const server = new ApolloServer({
	typeDefs,
	resolvers
});

const port = 8000;

server.applyMiddleware({ app, path: '/graphql' });

mongoose.Promise = global.Promise;
mongoose
	.connect('mongodb://mongo:27017', { useNewUrlParser: true })
	.then(() => {
		app.listen({ port }, () => {
			console.log(`Apollo Server running on port ${port}/graphql`);
		});
	})
	.catch(err => {
		console.log(`error connecting to the database ${err}`);
		process.exit();
	});
