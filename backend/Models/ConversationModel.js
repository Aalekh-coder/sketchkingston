import { Schema, model } from "mongoose";
const conversationSchame = new Schema(
  {
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
  },
  { timestamps: true }
);
const Conversation = model("Conversation", conversationSchame);
export default Conversation;
