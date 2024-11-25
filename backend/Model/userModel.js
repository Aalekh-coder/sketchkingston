import { Schema,model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password: {
        type: String,
        required:true
    },
    isSeller: {
        type: Boolean,
        required: true,
        default:false
    }
}, { timestamps: true });
const User = model("User", userSchema);
export default User;
