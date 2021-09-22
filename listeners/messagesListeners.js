import { SocketEvents } from "../constants/SocketEvents.js";
import messagesService from "../service/messages.js";

export default function (io) {
  io.on(SocketEvents.CONNECT, async (socket) => {
    socket.on(SocketEvents.MESSAGE_SENDED, async (msg) => {
      const parsedMsg = msg;
      await messagesService.addMsg(parsedMsg);
      await messagesService.persistMsgs();
      socket.broadcast.emit(SocketEvents.NEW_MESSAGE, parsedMsg);
    });
  });
}
