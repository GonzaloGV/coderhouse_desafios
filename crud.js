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
    console.log(product);
    const finalProduct = {
      id: this.#idCounter,
      ...product
    }
    this.#productArray.push(finalProduct);
    this.#idCounter++;

    return finalProduct;
  }

}

export class Serializer {
  static serializeProduct(obj) { return JSON.stringify(obj, null, "\t")};
}

export default new  InventoryManager();

