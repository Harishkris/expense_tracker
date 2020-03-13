const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGOSE_URI, { 
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true
		});
		console.log(`Mongo Db connected ${conn.connection.host}`)
	} catch (error) {
		process.exit(1);
	}
}

module.exports = connectDB;