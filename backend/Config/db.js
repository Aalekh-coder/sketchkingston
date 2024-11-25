import mongoose from "mongoose";


const connectDb = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            connectTimeoutMS: 30000, // 30 seconds
        });;
        console.log("Connected successfully with port 5000 😘");
    } catch (error) {
        console.error("Error", error.message);
        process.exit(1)
    }
} 

export default connectDb;
