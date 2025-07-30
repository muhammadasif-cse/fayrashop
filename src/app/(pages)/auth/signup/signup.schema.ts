import { Role } from "@/utils/common/enums/role.enum";
import z from "zod";

export const signupSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .nonempty("Must be provide your name."),
  email: z
    .email({
      message: "Invalid email address.",
    })
    .nonempty("Must be provide your valid email."),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  role: z
    .enum([Role.CUSTOMER, Role.ADMIN, Role.SELLER], {
      message: "Role must be either 'customer', 'admin' or 'seller'.",
    })
    .default(Role.CUSTOMER)
    .optional(),
});
