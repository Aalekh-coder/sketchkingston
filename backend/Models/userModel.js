import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "User name is required",
      trim: true,
      minLength: 2,
      maxLength: 50,
    },
    email: {
      type: String,
      required:"User Email is required",
      unique: true,
      trim: true,
      lowercase: true,
      minLength: 5,
    },
    password: {
      type: String,
      required: "User Password is required",
    },
    isSeller:{
      type: Boolean,
      required:true,
      default:false
    }
  },
  { timestamps: true }
);

const User = model("User", userSchema);
export default User;
