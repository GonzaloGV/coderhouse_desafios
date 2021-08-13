const fs = require("fs");
const express = require("express");
const {
  genRandomNumber,
  initProductFile,
  getProductArray,
  serializeObject,
} = require("./helpers");

const app = express();
const port = 3000;
initProductFile(genRandomNumber(3, 15));
const productArr = getProductArray();
const visitsCounter = {
  visitas: {
    items: 0,
    item: 0,
  },
};

app.get("/items", (req, res) => {
  visitsCounter.visitas.items++;
  const jsonResponse = {
    items: productArr,
    cantidad: productArr.length,
  };

  res.end(serializeObject(jsonResponse));
});

app.get("/item-random", (req, res) => {
  visitsCounter.visitas.item++;
  const randomIdx = genRandomNumber(0, productArr.length);
  const jsonResponse = {
    item: productArr[randomIdx],
  };
  res.end(serializeObject(jsonResponse));
});

app.get("/visitas", (req, res) => res.end(serializeObject(visitsCounter)));

try {
  app.listen(port, (error) => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
} catch (error) {
  console.log("Hubo un error, el servidor no pudo ser inicio");
  console.log(error);
}
