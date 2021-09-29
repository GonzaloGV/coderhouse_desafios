import conn from "../db/index.js";
import mongoose from "mongoose";

class MessagesDAO {
  Message = conn.model("Message");

  async addMsg(newMsg) {
    const msg = await this.Message.create(newMsg);

    return msg;
  }

  async getMsgs() {
    const msgs = this.Message.find();

    return msgs;
  }
}

export default new MessagesDAO();
