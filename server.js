const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./app/config/db');

dotenv.config({path: './app/config/config.env'})

connectDB();

const transactions = require('./app/routes/transactions');

const app = express();
app.use(express.json());
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.PORT}`));