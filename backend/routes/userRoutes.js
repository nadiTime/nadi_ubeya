import express from "express";
const router = express.Router();

import { signInUser } from "../controllers/userContoller.js";

router.route("/").post(signInUser);

export default router;
