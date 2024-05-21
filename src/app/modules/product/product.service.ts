import { ProductModel } from "./product.model";
import { Product } from "./product.interface";

// create a new product into DB

const createProductInDB = async (productData: Product) => {
  const result = await ProductModel.create(productData);
  return result;
};
// Get all products from DB
const getAllProductsFromDB = async () => {
  const result = await ProductModel.find();
  //   console.log(result);

  return result;
};
// Retrieve a specific product by ID
const getProductByIdFromDB = async (productId: string) => {
  const result = await ProductModel.findById(productId);
  return result;
};

export const productServices = {
  createProductInDB,
  getAllProductsFromDB,
};
