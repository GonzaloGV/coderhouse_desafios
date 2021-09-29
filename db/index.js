import mongoose from "mongoose";
import { URI, DB } from "../constants/db.js";
import Messages from "./schemas/messages.js";
import Products from "./schemas/products.js";

const conn = mongoose.createConnection(`${URI}${DB}`);
conn.model("Message", Messages);
conn.model("Product", Products);

export default conn;
