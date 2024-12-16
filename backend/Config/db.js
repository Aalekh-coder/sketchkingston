import mongoose from "mongoose";

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: process.env.DB_NAME || 'test', // Optional: Specify your database name from environment variables
            connectTimeoutMS: 30000, // 30 seconds timeout
        });
        console.log("Connected successfully with port 5000 😘");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); // Exit the application with failure
    }
};

export default connectDb;
