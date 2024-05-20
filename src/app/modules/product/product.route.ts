// src/app/routes/product.route.ts
import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

// Create a new product
router.post("/", productControllers.createProduct);

// Retrieve all products
// Retrieve a specific product by ID
// Update a product
// Delete a product
// Search products

export default router;
