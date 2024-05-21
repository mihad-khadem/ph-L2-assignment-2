import { z } from "zod";

const variantSchema = z.object({
  type: z.string().min(1, { message: "Type cannot be empty" }),
  value: z.string().min(1, { message: "Value cannot be empty" }),
});

const inventorySchema = z.object({
  quantity: z
    .number({
      required_error: "quantity is required",
      invalid_type_error: "quantity must be a number",
    })
    .min(0, { message: "quantity must be a non-negative number" }),
  inStock: z.boolean({
    required_error: "inStock is required",
    invalid_type_error: "inStock must be a boolean",
  }),
});

// defining zod schema for product validation
export const zodProductSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(200, { message: "Description cannot exceed 200 characters" }),
  price: z
    .number({
      required_error: "Price is required",
      invalid_type_error: "Price must be a number",
    })
    .min(0, { message: "Price must be a non-negative number" }),
  category: z.string().min(1, { message: "Category cannot be empty" }),
  tags: z.array(z.string(), {
    message: "Tags must be an array of strings",
  }),
  variants: z.array(variantSchema, {
    message: "Variants must be an array of valid variant objects",
  }),
  inventory: inventorySchema,
});

export type ProductValidation = z.infer<typeof zodProductSchema>;
