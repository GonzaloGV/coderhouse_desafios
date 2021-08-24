import express from "express";
import inventory from "../crud.js";
import { Serializer } from "../crud.js";

const router = express.Router();

router.get("/listar", async (req, res) => {
  const productList = inventory.getProducts();
  const isEmpty = productList.length === 0;
  res.render("main", { productList: productList, isEmpty: isEmpty });
});

router.get("/listar/:id", (req, res) => {
  const id = Number(req.params["id"]);
  const jsonResponse = inventory.getProductById(id);

  res.end(Serializer.serializeProduct(jsonResponse));
});

router.post("/guardar", (req, res) => {
  const product = req.body;
  const jsonResponse = inventory.addProduct(product);

  res.end(Serializer.serializeProduct(jsonResponse));
});

router.put("/actualizar/:id", (req, res) => {
  const product = req.body;
  const jsonResponse = inventory.updateProduct(product);

  res.end(Serializer.serializeProduct(jsonResponse));
});

router.delete("/borrar/:id", (req, res) => {
  const id = Number(req.params["id"]);
  const jsonResponse = inventory.deleteProduct(id);

  res.end(Serializer.serializeProduct(jsonResponse));
});

export default router;
