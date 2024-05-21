import { ProductModel } from "../product/product.model";
import { Order } from "./order.interface";
import { OrderModel } from "./order.model";

// Create Order in Database
const createOrderInDB = async (order: Order) => {
  // Fetch the product details
  const product = await ProductModel.findById(order.productId);
  if (!product) {
    throw new Error("Product not found");
  }
  // Check if the requested quantity is available
  if (product.inventory.quantity < order.quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }
  // Reduce the quantity and update inStock status
  product.inventory.quantity -= order.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;
  // Save the updated product details
  await product.save();
  // Create the order
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
