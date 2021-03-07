import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Room",
  },
  message: { text: { type: String, required: true }, timestamps: true },
});

const Message = mongoose.model("Message", messageSchema);
export default Message;
