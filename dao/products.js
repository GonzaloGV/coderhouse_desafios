import conn from "../db/index.js";
import mongoose from "mongoose";

class ProductsDAO {
  notFoundError = { error: "product not found" };
  Product = conn.model("Product");

  async createProduct(productData) {
    const { name, description, code, imgUrl, price, stock } = productData;
    const product = {
      name,
      description,
      imgUrl,
      price,
      stock,
      code,
    };

    await this.Product.create(product, function (err) {
      if (err) throw err;
    });

    return product;
  }

  async getProducts() {
    const products = await this.Product.find();

    return products;
  }

  async getProductById(id) {
    try {
      id = mongoose.Types.ObjectId(id);
      const product = await this.Product.findById(id);
      return product;
    } catch (err) {
      throw err;
    }
  }

  async updateProduct(productData) {
    try {
      const { id, ...newProduct } = productData;
      const filter = { _id: mongoose.Types.ObjectId(id) };
      const product = await this.Product.findOneAndUpdate(filter, newProduct, {
        new: true,
      });
      return product;
    } catch (err) {
      throw err;
    }
  }

  async deleteProduct(id) {
    try {
      const { id, ...newProduct } = productData;
      const filter = { _id: mongoose.Types.ObjectId(id) };
      const product = await this.Product.findOneAndDelete(filter);
      return product;
    } catch (err) {
      throw err;
    }
  }
}

export default new ProductsDAO();
