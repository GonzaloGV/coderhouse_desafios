import mongoose from "mongoose";

const productsSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    imgUrl: String,
    stock: Number,
    description: String,
  },
  {
    timestamps: true,
  }
);

export default productsSchema;
