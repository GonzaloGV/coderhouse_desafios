import messagesService from "../service/messages.js";

export default async (req, res, next) => {
  const messages = await messagesService.getMsgs();
  req.msgs = messages;
  next();
};
