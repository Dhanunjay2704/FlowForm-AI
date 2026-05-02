import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

console.log('Attempting to connect to MongoDB...');
console.log('URI:', uri.replace(/:([^:@]{4})[^:@]*@/, ':****@')); // Hide password in logs

try {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully!');
    await mongoose.disconnect();
} catch (error) {
    console.error('MongoDB connection failed:', error.message);
}