const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGOSE_URI, { 
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		});
		autoIncrement.initialize(conn);
		console.log(`Mongo Db connected ${conn.connection.host}`)
	} catch (error) {
		process.exit(1);
	}
}

module.exports = connectDB;