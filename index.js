const fs = require("fs");

const genRandomNumber = (min, max, floor = true) => {
  const randomNumber = Math.random() * (max - min) + min;
  return floor ? Math.floor(randomNumber) : randomNumber;
};

const generateRandomProduct = () => {
  return {
    title: "titulo" + genRandomNumber(1, 30),
    price: genRandomNumber(1, 999, false),
    thumbnail: genRandomNumber(1, 999),
  };
};

class Archivo {
  constructor(fileName) {
    this.fileName = fileName;
    this.fileExists = fs.existsSync(fileName);
  }
  async guardar(item) {
    try {
      const productsArr = await this.#getProductArray();
      productsArr.push({ id: productsArr.length + 1, ...item });
      const serializedArr = await this.#serialize(productsArr);
      await fs.promises.writeFile(this.fileName, serializedArr);
    } catch (error) {
      console.error(error);
    }
    this.fileExists = true;
  }
  async leer() {
    try {
      const productArr = await this.#getProductArray();
      console.log(productArr);
    } catch (error) {
      console.log(error);
    }
  }
  async borrar() {
    if (!this.fileExists) return;
    try {
      await fs.promises.rm(this.fileName);
    } catch (error) {
      console.error(error);
    }
  }
  async #getProductArray() {
    try {
      if (this.fileExists) {
        const rawFile = await fs.promises.readFile(this.fileName);
        const productsArr = await JSON.parse(rawFile);
        return productsArr;
      }
      return [];
    } catch (error) {
      console.log(error);
    }
  }
  async #serialize(input) {
    const serializedInput = await JSON.stringify(input, null, "\t");
    return serializedInput;
  }
}

const products = new Archivo("productos.txt");

products
  .guardar(generateRandomProduct())
  .then(() => products.leer())
  .then(() => products.borrar())
  .catch((error) => console.error(error));
