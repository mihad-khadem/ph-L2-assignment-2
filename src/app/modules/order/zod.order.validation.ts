import { z } from "zod";

const zodOrderSchema = z.object({
  email: z
    .string({
      required_error: "email is required",
      invalid_type_error: "email must be a string",
    })
    .email(),
  productId: z.string({
    required_error: "productId is required",
    invalid_type_error: "productId must be a string",
  }),
  price: z.number({
    required_error: "price is required",
    invalid_type_error: "price must be a number",
  }),
  quantity: z.number({
    required_error: "quantity is required",
    invalid_type_error: "quantity must be a number",
  }),
});
export default zodOrderSchema;
