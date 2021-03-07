import express from "express";
const router = express.Router();

import {
  addUserToChatRoom,
  createChatRoom,
  deleteChatRoom,
  getAllChatRooms,
} from "../controllers/roomController.js";

router.route("/").post(createChatRoom).get(getAllChatRooms);
router.route("/user/:id").post(addUserToChatRoom);
router.route("/:id").delete(deleteChatRoom);

export default router;
