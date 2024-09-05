const mongoose = require('mongoose');

//define mongodb connection url
const mongoURL = 'mongodb://localhost:27017/hotels'

//setup mongodb connection
mongoose.connect(mongoURL)

//get the default connection
//mongoose maintain a deafault connection obejct maintaining the mongoDB connection
const db = mongoose.connection;

//define event listener for database connection
db.on('connected', () => {
    console.log("Connected to mongodb server");
})

db.on('error', (err) => {
    console.log('mongoDB connection error:', err);
})

db.on('disconnected', () => {
    console.log('mongoDB disconnected');
})

//export the database connection
module.exports = db;