import express from "express";
import authController from "../controller/authController.js";

const router = express.Router();

// auth routes
router.get("/login", authController.loginView);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

export default router;
