import fs from "fs";

export default {
  path: "./messages.txt",
  _createMsgsFile() {
    if (fs.existsSync(this.path)) return;
    fs.writeFileSync(this.path, JSON.stringify([]));
  },
  loadMessages() {
    this._createMsgsFile();
    const msgs = JSON.parse(fs.readFileSync(this.path, "utf-8"));
    console.log(msgs);
    this.messageArr = msgs ? msgs : [];
  },
  async persistMsgs() {
    await fs.promises.writeFile(
      this.path,
      JSON.stringify(this.messageArr, null, "\t")
    );
  },
  addMessage(msg) {
    this.messageArr.push(msg);
  },
  getMessages() {
    return this.messageArr;
  },
};
