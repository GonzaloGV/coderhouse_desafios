const http = require("http");

const generateRandomNumber = (min, max, round = true) => {
  const randomNumber = Math.random() * (max - min) + min;
  return round ? Math.floor(randomNumber) : randomNumber;
};

http
  .createServer((req, res) => {
    const obj = {
      id: generateRandomNumber(1, 10),
      title: "Producto " + generateRandomNumber(1, 10),
      price: generateRandomNumber(0, 9999.99, false),
      thumbnail: "Foto " + generateRandomNumber(1, 10),
    };
    res.end(JSON.stringify(obj));
  })
  .listen(3000);
