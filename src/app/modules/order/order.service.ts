import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderInDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};
// get all orders from DB
const getAllOrdersFromDB = async () => {
  const result = await OrderModel.find();
  return result;
};
// Get Orders by Email from Database
const getOrdersByEmailFromDB = async (email: string) => {
  const result = await OrderModel.find({ email });
  return result;
};
export const orderServices = {
  createOrderInDB,
  getAllOrdersFromDB,
  getOrdersByEmailFromDB,
};
