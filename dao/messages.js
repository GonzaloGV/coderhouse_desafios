import fs from "fs";

class MessagesDAO {
  path = "./messages.txt";

  constructor() {
    console.log(this.path);
    this.loadMsgs();
  }

  loadMsgs() {
    this._createMsgsFile();
    const msgs = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    console.log(msgs);
    this.messageArr = msgs ? msgs : [];
  }
  async persistMsgs() {
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.messageArr, null, "\t")
    );
  }

  async addMsg(msg) {
    const parsedMsg = JSON.parse(msg);
    await this.messageArr.push(parsedMsg);
  }

  async getMsgs() {
    return this.messageArr;
  }
  _createMsgsFile() {
    if (fs.existsSync(this.path)) return;
    fs.writeFileSync(this.path, JSON.stringify([]));
  }
}

export default new MessagesDAO();
