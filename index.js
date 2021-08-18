import express from "express";
import inventory from "./crud.js";
import { Serializer } from './crud.js';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get("/api/productos/listar", async (req, res) => {
  const jsonResponse = inventory.getProducts();

  res.end(Serializer.serializeProduct(jsonResponse));
});

app.get("/api/productos/listar/:id", (req, res) => {
  const id = Number(req.params['id']);
  const jsonResponse = inventory.getProductById(id);

  res.end(Serializer.serializeProduct(jsonResponse));
});

app.post("/api/productos/guardar/", (req, res) => {
  const product = req.body;
  console.log(req.body)
  const jsonResponse = inventory.addProduct(product);

  res.end(Serializer.serializeProduct(jsonResponse));

});

try {
  app.listen(port, (error) => {
    console.log(`Servidor corriendo en el puerto ${port}`);
  });
} catch (error) {
  console.log("Hubo un error, el servidor no pudo ser inicio");
  console.log(error);
}
