const mongoose = require('mongoose');

const mongooseConnect = mongoose.connect('mongodb://mongo:27017', { useNewUrlParser: true });

module.exports = {
	mongooseConnect
};
