import express, { Application, Request, Response } from "express";
import cors from "cors";
import { errorHandler } from "./app/middleware/errorHandler";
import productRoutes from "./app/modules/product/product.route";

// Application
const app: Application = express();

// express middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// application routes
app.use("/api/products", productRoutes);

//
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the e-commerce API" });
});

// Error Handling middleware
app.use(errorHandler);

export default app;
