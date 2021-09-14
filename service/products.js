import productsDAO from "../dao/products.js";

class ProductsService {
  createProduct(productData) {
    return productsDAO.createProduct(productData);
  }

  getProducts() {
    return productsDAO.getProducts();
  }

  getProductById(id) {
    return productsDAO.getProductById(id);
  }

  updateProduct(productData) {
    return productsDAO.updateProduct(productData);
  }

  deleteProduct(id) {
    return productsDAO.deleteProduct(id);
  }
}

export default new ProductsService();
