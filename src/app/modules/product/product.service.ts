import { ProductModel } from "./product.model";
import { Product } from "./product.interface";

// create a new product into DB

const createProductInDB = async (productData: Product) => {
  const result = await ProductModel.create(productData);
  return result;
};

export const productServices = {
  createProductInDB,
};
