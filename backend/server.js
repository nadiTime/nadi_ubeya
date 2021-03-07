import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

import userRoutes from "./routes/userRoutes.js";
import roomRoutes from "./routes/userRoutes.js";
import messageRoute from "./routes/messageRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/room", roomRoutes);

// app.use("/api/message", orderRoutes);

app.get("/", (req, res) => {
  res.send("API is  running");
});

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server runs in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
