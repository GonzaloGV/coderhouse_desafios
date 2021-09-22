import messagesDAO from "../dao/messages.js";

class MessagesService {
  loadMsgs() {
    return messagesDAO.loadMsgs();
  }
  async persistMsgs() {
    return messagesDAO.persistMsgs();
  }

  addMsg(msg) {
    return messagesDAO.addMsg(msg);
  }

  getMsgs() {
    return messagesDAO.getMsgs();
  }
}

export default new MessagesService();
