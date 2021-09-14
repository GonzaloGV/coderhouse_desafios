class ProductsDAO {
  idCounter = 1;
  productArr = [];
  notFoundError = { error: "product not found" };

  async createProduct(productData) {
    const { name, description, code, imgUrl, price, stock } = productData;
    const product = {
      id: this.idCounter,
      timestamp: Date.now(),
      name,
      description,
      code,
      imgUrl,
      price,
      stock,
    };

    this.productArr.push(product);
    this.idCounter += 1;

    return product;
  }

  async getProducts() {
    return this.productArr;
  }

  async getProductById(id) {
    const idx = this.productArr.indexOf((product) => product.id === id);
    if (idx === -1) return this.notFoundError;

    return this.productArr[idx];
  }

  async updateProduct(productData) {
    const { id, name, description, code, imgUrl, price, stock } = productData;
    const idx = this.productArr.indexOf((product) => product.id === id);

    if (idx === -1) return this.notFoundError;

    this.productArr.splice(idx, 1);
    const product = {
      id,
      timestamp: Date.now(),
      name,
      description,
      code,
      imgUrl,
      price,
      stock,
    };
    this.productArr.push(product);
    return product;
  }

  async deleteProduct(id) {
    const idx = this.productArr.indexOf((product) => product.id === id);

    if (idx === -1) return this.notFoundError;

    const product = this.productArr.splice(idx, 1);

    return product;
  }
}

export default new ProductsDAO();
