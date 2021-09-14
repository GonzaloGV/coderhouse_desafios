import productsService from "../service/products.js";

class ProductsController {
  async create(req, res) {
    try {
      const productData = req.body;
      const product = await productsService.createProduct(productData);
      if (product.error) throw new Error(product.error);
      res.end(JSON.stringify(product));
    } catch (err) {
      console.error(err);
    }
  }
  async getProducts(req, res) {
    const id = req.params["id"];
    if (id) {
      const product = await productsService.getProductById(id);
      res.end(JSON.stringify(product));
    }
    const productList = await productsService.getProducts(id);
    res.end(JSON.stringify(productList));
  }

  async update(req, res) {
    try {
      const id = req.params["id"];
      const productData = req.body;
      const product = await productsService.updateProduct({
        id,
        ...productData,
      });
      if (product.error) throw new Error(product.error);
      res.end(JSON.stringify(product));
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
}

export default new ProductsController();
