import express from "express";
import productsController from "../controller/productsController.js";
import addMessages from "../middlewares/messages.js";

const router = express.Router();

// product routes
router.get("/", productsController.getProducts);
router.get("/add", addMessages, productsController.addProductView);
router.post("/add", productsController.create);
router.get("/:id", productsController.getProduct);
router.get("/:id/delete", productsController.delete);
router.post("/:id/update", productsController.update);

export default router;
