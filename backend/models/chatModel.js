import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  messages: [
    {
      sender: {
        type: String,
        required: true,
        enum: ["user", "bot"], // Restrict sender to either 'user' or 'bot'
      },
      message: {
        type: String,
        required: true,
      },
      timestamp: {
        type: Date,
        default: Date.now, // Set current timestamp by default
      },
    },
  ],
});

const chatModel = mongoose.model("Chat", chatSchema);
export default chatModel;
