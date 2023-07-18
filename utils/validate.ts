import { z } from "zod";

export const signupFormSchema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .min(5, { message: "Name must be greater than 5 characters long" })
      .max(20, { message: "Name must be less than 20 characters long" }),
    email: z
      .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
      })
      .email("Invalid email address")
      .min(1, { message: "Required" }),
    password: z
      .string({
        required_error: "Password is required",
        invalid_type_error: "Password must be a string",
      })
      .min(8, { message: "Password must be greater than 8 characters long" })
      .max(20, { message: "Password must be less than 20 characters long" })
      .refine((value) => !/\s/.test(value), "Invalid Password"), // whitespace or tab check
    confirm_password: z.string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export const signinFormSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid email address")
    .min(1, { message: "Required" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password must be a string",
    })
    .min(8, { message: "Password must be greater than 8 characters long" })
    .max(20, { message: "Password must be less than 20 characters long" }),
});

export const addProductFormSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .min(5, { message: "Name must be greater than 5 character long" })
    .max(20, { message: "Name must be less than 20 characters long" }),
  brand: z
    .string({
      required_error: "Brand is required",
      invalid_type_error: "Brand must be a string",
    })
    .min(5, { message: "Brand must be greater than 5 character long" })
    .max(20, { message: "Brand must be less than 20 characters long" }),
  category: z
    .string({
      required_error: "Category is required",
      invalid_type_error: "Category must be a string",
    })
    .min(5, { message: "Category must be greater than 5 character long" })
    .max(20, { message: "Category must be less than 20 characters long" }),
  // price: z
  //   .number({
  //     required_error: "Price is required",
  //     invalid_type_error: "Price must be a number",
  //   })
  //   .min(1, { message: "Price must be greater than KSH 1" })
  //   .max(1000000, { message: "Price must be less than KSH 1,000,000" }),
  // quantity: z
  //   .number({
  //     required_error: "Quantity is required",
  //     invalid_type_error: "Quantity must be a number",
  //   })
  //   .min(1, { message: "Quantity must be greater than 1" })
  //   .max(1000, { message: "Quantity must be less than 1,000" }),
  price: z
    .string({
      required_error: "Price is required",
      invalid_type_error: "Price must be a string",
    })
    .min(1, { message: "Price must be greater than 5 character long" })
    .max(20, { message: "Price must be less than 20 characters long" }),
  quantity: z
    .string({
      required_error: "Quantity is required",
      invalid_type_error: "Quantity must be a string",
    })
    .min(1, { message: "Quantity must be greater than 5 character long" })
    .max(20, { message: "Quantity must be less than 20 characters long" }),
  description: z
    .string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    })
    .min(5, { message: "Description must be greater than 5 character long" })
    .max(20, { message: "Description must be less than 20 characters long" }),
});
