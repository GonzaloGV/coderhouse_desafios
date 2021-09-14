import express from "express";
import productsController from "../controller/productsController.js";

const router = express.Router();

// product routes
router.get("/:id?", productsController.getProducts);
router.post("/agregar", productsController.create);

export default router;
