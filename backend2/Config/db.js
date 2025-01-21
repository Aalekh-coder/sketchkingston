import {connect} from "mongoose";

const connectDb = async () => {
    try {
        await connect(process.env.MONGO_URI, {
            connectTimeoutMS:30000
        })
        console.log("connect done ✔");
    } catch (error) {
        console.error("MongoDb connection error: ", error.message);
        process.exit(1);
    }
}

export default connectDb;