const users = [
	{
		email: 'Test@test.com',
		password: 'password123'
	},
	{
		email: 'Test2@test.com',
		password: 'password456'
	}
];

module.exports = {
	Query: {
		user: (parent, args) => {
			return user;
		},
		users: (parent, args) => {
			return users;
		}
	}
};
