import messagesDAO from "../dao/messages.js";

class MessagesService {
  addMsg(msg) {
    try {
      const parsedMsg = JSON.parse(msg);
      return messagesDAO.addMsg(parsedMsg);
    } catch (err) {
      console.error(err);
    }
  }

  async getMsgs() {
    try {
      return await messagesDAO.getMsgs();
    } catch (err) {
      console.error(err);
    }
  }
}

export default new MessagesService();
