import productsService from "../service/products.js";
import { SocketEvents } from "../constants/SocketEvents.js";

class ProductsController {
  async create(req, res) {
    try {
      const io = req.app.get("socketio");
      const productData = req.body;
      const product = await productsService.createProduct(productData);
      const serializedProduct = JSON.stringify(product);
      if (product.error) throw new Error(product.error);

      // io events
      io.emit(SocketEvents.PRODUCT_ADDED, serializedProduct);

      res.end(JSON.stringify(serializedProduct));
    } catch (err) {
      console.error(err);
    }
  }

  async getProducts(req, res) {
    const id = Number(req.params["id"]);
    if (id) {
      const product = await productsService.getProductById(id);
      res.end(JSON.stringify(product));
    }
    const productList = await productsService.getProducts();
    res.render("main", { productList, isEmpty: productList.length === 0 });
  }

  async getProduct(req, res) {
    const id = Number(req.params["id"]);
    const product = await productsService.getProductById(id);
    res.end(JSON.stringify(product));
  }

  async update(req, res) {
    try {
      const id = req.params["id"];
      const productData = req.body;
      const product = await productsService.updateProduct({
        id,
        ...productData,
      });
      io;
    } catch (err) {
      console.error(err);
    }
  }

  async delete(req, res) {
    try {
      const id = req.params["id"];
      const product = await productsService.deleteProduct(id);
      if (product.error) throw new Error(product.error);
      res.end(JSON.stringify(product));
    } catch (err) {
      console.error(err);
    }
  }

  async addProductView(req, res) {
    try {
      const productList = await productsService.getProducts();
      const templateVariables = {
        productList,
        isEmpty: productList.length === 0,
        messages: req.msgs,
      };
      res.render("addProduct", templateVariables);
    } catch (err) {
      console.error(err);
    }
  }
}

export default new ProductsController();
