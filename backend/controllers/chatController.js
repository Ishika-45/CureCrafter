import jwt from "jsonwebtoken";
import chatModel from "../models/chatModel.js";

// Helper function to decode the token and retrieve user ID
const decodeToken = (token) => {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.userId; // Ensure `userId` is included in the payload
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
};

// Automatically fetch chats (both user and bot messages) for the user on login
const getChatOnLogin = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract the token from Authorization header
    if (!token) {
      return res.status(401).send("Authorization token required.");
    }

    const userId = decodeToken(token); // Decode token to get user ID

    // Retrieve all chat messages for the user
    const chat = await chatModel.findOne({ userId });

    // Return the chat messages, or an empty array if no chat exists
    res.status(200).json({
      success: true,
      messages: chat?.messages || [],
    });
  } catch (error) {
    console.error("Error retrieving chat:", error.message);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
};

// Save both user and bot messages
const postChat = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract the token from Authorization header
    if (!token) {
      return res.status(401).send("Authorization token required.");
    }

    const userId = decodeToken(token); // Decode token to get user ID
    const { sender, message } = req.body;
    console.log(userId);

    if (!sender || !message) {
      return res.status(400).json({ success: false, message: "Sender and message are required." });
    }

    if (!["user", "bot"].includes(sender)) {
      return res.status(400).json({ success: false, message: "Sender must be 'user' or 'bot'." });
    }

    // Find the chat document for the user, or create a new one if it doesn't exist
    let chat = await chatModel.findOne({ userId });

    if (!chat) {
      chat = new chatModel({ userId, messages: [] }); // Create a new chat document
    }

    // Append the new message to the messages array
    chat.messages.push({
      sender,
      message,
      timestamp: new Date(),
    });

    // Save the updated chat
    await chat.save();

    res.status(200).json({ success: true, message: "Message saved successfully." });
  } catch (error) {
    console.error("Error posting chat:", error.message);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
};

export { postChat, getChatOnLogin };
