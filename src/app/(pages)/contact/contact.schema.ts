import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, {
    message: "Name is required.",
  }),

  email: z
    .email({
      message: "Must be provide your valid email.",
    })
    .nonempty("Email is required."),

  message: z.string().min(20, {
    message: "Message must be at least 20 characters.",
  }),

  isAgreed: z.boolean().optional(),
});

export type ContactSchema = z.infer<typeof contactSchema>;

export interface IContact {
  name: string;
  email: string;
  message: string;
  isAgreed?: boolean;
}
