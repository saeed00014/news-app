"use server";
import { Server } from "socket.io";

export default function handler(req: any, res: any) {
  if (!res.socket.server.io) {
    const httpServer = res.socket.server;
    const io = new Server(httpServer, {
      path: "/api/socket",
    });
    io.on("connection", (socket) => {
      socket.on("join", (chat_id) => {
        socket.join(chat_id);
      });
      socket.on("newMessage", function (data) {
        io.emit("serverSendMessage", data);
      });
      console.log("Client connected");
      socket.on("disconnect", () => {
        console.log("Client disconnected");
      });
    });
    res.socket.server.io = io;
  }
  res.end();
}
