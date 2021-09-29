import mongoose from "mongoose";

const messagesSchema = new mongoose.Schema({
  sender: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  date: Date,
  msg: String,
});

export default messagesSchema;
