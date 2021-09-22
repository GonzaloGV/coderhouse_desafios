import { Server } from "socket.io";
import { SocketEvents } from "./constants/SocketEvents.js";
import initMsgsListeners from "./listeners/messagesListeners.js";

export default function (httpServer) {
  const io = new Server(httpServer);

  // base connection
  io.on(SocketEvents.CONNECT, (socket) => {
    console.log("CONNECTION STABLISH");
  });

  return io;
}
