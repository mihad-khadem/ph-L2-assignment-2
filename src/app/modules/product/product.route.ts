// src/app/routes/product.route.ts
import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

// Create a new product
router.post("/", productControllers.createProduct);

// Retrieve all products
router.get("/", productControllers.getAllProducts);
// Retrieve a specific product by ID
router.get("/:productId", productControllers.getProductById);
// Update a product using id
router.put("/:productId", productControllers.updateProduct);
// Delete a product
router.delete("/:productId", productControllers.deleteProduct);

export default router;
