import productsDAO from "../dao/products.js";

class ProductsService {
  async createProduct(productData) {
    return productsDAO.createProduct(productData);
  }

  async getProducts() {
    try {
      const products = await productsDAO.getProducts();

      return products;
    } catch (err) {
      console.error(err.message);
    }
  }

  async getProductById(id) {
    try {
      const product = await productsDAO.getProductById(id);

      return product;
    } catch (err) {
      console.error(err.message);
    }
  }

  updateProduct(productData) {
    return productsDAO.updateProduct(productData);
  }

  deleteProduct(id) {
    return productsDAO.deleteProduct(id);
  }
}

export default new ProductsService();
