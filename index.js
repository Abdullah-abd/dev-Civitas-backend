// server.js (or index.js)
import dotenv from "dotenv";
import express from "express";
import { createServer } from "http";
import morgan from "morgan";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import { handleSocketConnection } from "./socketHandler.js";

dotenv.config();
connectDB();
const app = express();
const server = createServer(app);

// Use Morgan middleware
app.use(morgan("dev"));
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
app.use(express.json());
app.use("/api/auth", authRoutes);
// Handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);
  handleSocketConnection(socket, io);

  socket.on("disconnect", (reason) => {
    console.log(`Socket ${socket.id} disconnected: ${reason}`);
  });
});

// Basic route
app.get("/", (req, res) => {
  res.send("Socket.IO server is running");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ✅ Only export what other modules actually need
export { app, io, PORT, server };

// socketHandler.js
