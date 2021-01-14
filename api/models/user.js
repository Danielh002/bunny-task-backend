var mongoose = require('mongoose');
const SETTINGS = require('../settings')

const UserSchema = new mongoose.Schema(
	{
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
	},
	{ collection: 'user'}
)

module.exports = mongoose.model('User', UserSchema);