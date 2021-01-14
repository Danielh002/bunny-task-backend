var mongoose = require('mongoose');
const SETTINGS = require('../settings')


const UserTaskSchema = new mongoose.Schema(
	{
    _id: mongoose.Schema.Types.ObjectId,
	description: { type: String, required: true },
	state: { type: String, enum: ["TO-DO", "DONE"]},
	userId: mongoose.Schema.Types.ObjectId,
	},
	{ collection: 'userTask'}
)

module.exports = mongoose.model('UserTask', UserTaskSchema);