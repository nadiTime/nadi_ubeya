import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc  Register a new user
// @route  POST /api/users
// @access  Public
const signInUser = asyncHandler(async (req, res) => {
  const { firstname, lastname } = req.body;

  const userExists = await User.findOne({ firstname, lastname });
  if (userExists) {
    res.status(400);
    throw new Error("User alreay exists");
  }
  const user = await User.create({
    firstname,
    lastname,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      lastame: user.lastname,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { signInUser };
