import mongoose from "mongoose";
const roomSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  users: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
      },
    },
  ],
});

const Room = mongoose.model("Room", roomSchema);
export default Room;
