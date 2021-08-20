import * as fs from 'fs';



class InventoryManager {
  #idCounter;
  #productArray;

  constructor() {
    this.#idCounter = 1;
    this.#productArray = []; 
  }

  getProductById(id) {
    const filteredProducts = this.#productArray.filter(product => product.id === id);
    if (filteredProducts.length === 0) 
      return {
      'error': 'producto no encontrado'
    }
    return filteredProducts[0];
  }

  getProducts() {
    if (this.#productArray.length == 0)
      return {error: 'no hay productos cargados'}
    return this.#productArray;
  }

  addProduct(product) {
    const finalProduct = {
      id: this.#idCounter,
      ...product
    }
    this.#productArray.push(finalProduct);
    this.#idCounter++;

    return finalProduct;
  }

  updateProduct(product) {
    const idx = this.#findIndex(Number(product.id));
    if (idx === -1) return {'error': 'producto no encontrado'};
    this.#productArray[idx] = product;
    

    return product;
  }

  deleteProduct(id) {
    const idx = this.#findIndex(id);
    if (idx === -1) return {'error': 'producto no encontrado'};
    const productDeleted = this.#productArray.splice(idx, 1);
    return productDeleted[0];
  }

  #findIndex(id) {
    return this.#productArray.findIndex(prods => prods.id === id)
  }

}

export class Serializer {
  static serializeProduct(obj) { return JSON.stringify(obj, null, "\t")};
}

export default new  InventoryManager();

