const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const TransactionSchema = new mongoose.Schema({
	_id: {
		type: Number,
		default: 0,
		unique: true
	},
  text: {
		type: String,
		trim: true,
		required: [true, 'Please add some text']
  },
  amount: {
		type: Number,
		required: [true, 'Please add a postive or negative number']
  },
  createdAt: {
		type: Date,
		default: Date.now
  },
  description: {
		type: String,
		trim: true
	},
  status: {
		type: Number,
		default: 0
	},
	creator: {
		type: String,
		required: [true, 'Please add creator details']
	}
});

autoIncrement.initialize(mongoose.connection);
TransactionSchema.plugin(
	autoIncrement.plugin, { 
		model: 'Transaction', field: '_id', startAt: 1, incrementBy: 1
	}
);
module.exports = mongoose.model('Transaction', TransactionSchema);