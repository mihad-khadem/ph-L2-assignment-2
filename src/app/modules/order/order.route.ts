import express, { Request, Response } from "express";
import { orderControllers } from "./order.controller";

const router = express.Router();

// Create an order
router.post("/", orderControllers.createOrder);
// Retrieve all orders
router.get("/", orderControllers.getAllOrders);
// Update an order
// Delete an order
export default router;
