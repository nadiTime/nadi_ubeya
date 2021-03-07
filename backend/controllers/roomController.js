import asyncHandler from "express-async-handler";
import Room from "../models/productModel.js";

// @desc  Create a room
// @route  POST /api/room/
// @access  Private/Admin
const createChatRoom = asyncHandler(async (req, res) => {
  const product = new Room({});
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc  Fetch all rooms
// @route  GET /api/room
// @access  Public
const getAllChatRooms = asyncHandler(async (req, res) => {
  const rooms = await Room.find({});
  res.json(rooms);
});

export { createChatRoom, getAllChatRooms };
