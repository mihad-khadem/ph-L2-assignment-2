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
export const orderControllers = {
  createOrder,
};
