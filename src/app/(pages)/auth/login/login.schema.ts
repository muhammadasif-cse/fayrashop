import z from "zod";

export const LoginSchema = z.object({
  email: z
    .email({
      message: "Invalid email address.",
    })
    .nonempty("Must be provide your valid email."),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});
