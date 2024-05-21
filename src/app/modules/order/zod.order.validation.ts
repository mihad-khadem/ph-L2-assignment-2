import { z } from "zod";

const zodOrderSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email must be a string",
    })
    .email({
      message: "email must be a valid email",
    }),
  productId: z.string({
    required_error: "productId is required",
    invalid_type_error: "productId must be a string",
  }),
  price: z
    .number({
      required_error: "price is required",
      invalid_type_error: "price must be a number",
    })
    .min(0, { message: "price must be a non-negative number" }),
  quantity: z
    .number({
      required_error: "quantity is required",
      invalid_type_error: "quantity must be a number",
    })
    .min(0, { message: "quantity must be a non-negative number" }),
});
export default zodOrderSchema;
