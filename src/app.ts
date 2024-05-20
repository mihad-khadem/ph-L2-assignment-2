import express, { Application, Request, Response } from "express";
import cors from "cors";
import { errorHandler } from "./app/middleware/errorHandler";

// Application
const app: Application = express();

// express middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// application route

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the e-commerce API" });
});

// Error Handling middleware
app.use(errorHandler);

export default app;
