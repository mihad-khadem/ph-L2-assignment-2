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
// update a product
const updateProductInDB = async (
  productId: string,
  productData: Partial<Product>
) => {
  const result = await ProductModel.findByIdAndUpdate(productId, productData, {
    new: true,
  });
  return result;
};
// delete a product
const deleteProductInDB = async (productId: string) => {
  const result = await ProductModel.findByIdAndDelete(productId);
  return result;
};
// search products
const searchProductsInDB = async (searchTerm: string) => {
  const regex = new RegExp(searchTerm, "i");
  // console.log(regex, "from service");
  const result = await ProductModel.find({
    $or: [
      { name: { $regex: regex } },
      { description: { $regex: regex } },
      { category: { $regex: regex } },
      { tags: { $regex: regex } },
    ],
  });
  return result;
};

export const productServices = {
  createProductInDB,
  getAllProductsFromDB,
  getProductByIdFromDB,
  updateProductInDB,
  deleteProductInDB,
  searchProductsInDB,
};
