const User = require('../models/User');

module.exports = {
	Query: {
		user: async (parent, args) => {
			const { email } = args;
			const user = await User.findOne({ email });
			if (!user) return new Error('User not found');
			return user;
		},
		users: async (parent, args) => {
			return await User.find({});
		}
	},
	Mutation: {
		addUser: async (parent, args) => {
			const { email, password } = args;

			const user = new User({ email, password });

			const createdUser = await user.save();

			return createdUser;
		},
		removeUser: async (parent, args) => {
			const { email } = args;

			const removed = await User.findOneAndRemove({ email });
			if (!removed) return new Error('Email not found');
			return removed;
		}
	}
};
