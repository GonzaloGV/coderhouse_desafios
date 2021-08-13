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

const initProductFile = (n) => {
  const fileName = "productos.txt";
  if (fs.existsSync(fileName)) return;
  const products = [];

  for (let i = 0; i <= n - 1; i++) {
    products.push(generateRandomProduct());
  }

  fs.writeFileSync(fileName, JSON.stringify(products, null, "\t"));
};

const getProductArray = () => JSON.parse(fs.readFileSync("productos.txt"));

const serializeObject = (obj) => JSON.stringify(obj, null, "\t");

module.exports = {
  genRandomNumber,
  generateRandomProduct,
  initProductFile,
  getProductArray,
  serializeObject,
};
