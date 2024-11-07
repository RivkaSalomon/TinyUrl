

import mongoose from "mongoose";
// Replace the uri string with your connection string.
const uri ="mongodb+srv://Rivka:Rivka0527180201@cluster0.uhyf1.mongodb.net/"
const uriLocal = "mongodb://localhost:27017/Tinyurl";
const connectDB = async () => {
await mongoose.connect(uri);
};
const database = mongoose.connection;
database.on('error', (error) => {
console.log(error);
})
database.once('connected', () => {
console.log('Database Connected');
})
export default connectDB;