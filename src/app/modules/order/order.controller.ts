import { NextFunction, Request, Response } from "express";
import { orderServices } from "./order.service";
import zodOrderSchema from "./zod.order.validation";

const createOrder = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderData = req.body;
    const zodValidation = zodOrderSchema.safeParse(orderData);

    if (!zodValidation.success) {
      return res.status(400).json({
        success: false,
        message: zodValidation.error.errors[0].message,
      });
    }

    const result = await orderServices.createOrderInDB(orderData);

    res.status(201).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// get all orders & search orders by email
const getAllOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = req.query.email as string;
    if (email) {
      const result = await orderServices.getOrdersByEmailFromDB(email);
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully",
        data: result,
      });
    } else if (!email) {
      const result = await orderServices.getAllOrdersFromDB();
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully",
        data: result,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid request",
        data: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
export const orderControllers = {
  createOrder,
  getAllOrders,
};
