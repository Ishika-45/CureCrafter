import express from "express";
import { postChat, getChatOnLogin } from "../controllers/chatController.js";

const chatRouter = express.Router();


chatRouter.post("/post", postChat);

chatRouter.get("/get", getChatOnLogin);

export default chatRouter;
