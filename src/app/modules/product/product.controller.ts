import { Request, Response, NextFunction } from "express";
import { ProductModel } from "./product.model";
import { zodProductSchema } from "./product.validation";
import { ProductValidation } from "./product.validation";
import { productServices } from "./product.service";
import { Product } from "./product.interface";

export const createProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const validationResult = zodProductSchema.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.error.errors[0].message,
      });
    }
    const productData: ProductValidation = validationResult.data;
    const result = await productServices.createProductInDB(productData);

    res.status(201).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// Retrieve All Products
const getAllProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await productServices.getAllProductsFromDB();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// Retrieve a specific product by ID
const getProductById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getProductByIdFromDB(productId);
    // product not found
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Product not found",
        data: null,
      });
    }
    // product found response
    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
// Update a product
const updateProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const validationResult = zodProductSchema.safeParse(req.body);
    if (!validationResult.success) {
      return res.status(400).json({
        success: false,
        message: validationResult.error.errors[0].message,
        data: null,
      });
    }
    const productData: ProductValidation = validationResult.data;
    const result = await productServices.updateProductInDB(
      productId,
      productData
    );
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
        data: null,
      });
    }
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
      data: result,
    });
  } catch (error) {}
};
// Delete a product
const deleteProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { productId } = req.params;
    const result = await productServices.deleteProductInDB(productId);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
        data: null,
      });
    }
    if (result) {
      res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        data: null,
      });
    }
  } catch (error) {
    next(error);
  }
};
// Search products
const searchProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const searchTerm = req.query.searchTerm as string;
    // Implement search logic here
    const result = await productServices.searchProductsInDB(searchTerm);
    if (!result) {
      console.log(result, "from search controller");
    }
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: result,
    });
  } catch (error) {}
};

export const productControllers = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
  searchProducts,
};
