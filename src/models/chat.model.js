import { Schema, model } from "mongoose";

const chatSchema = new Schema({
    name: { type: String, required: true },
    users: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

export default model("Chat", chatSchema);
