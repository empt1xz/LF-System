import { z } from "zod";

export const registerSchema = z
  .object({
    user: z.string().trim().min(3, "No minímo 3 caractéres"),
    email: z.string().email("Digite um email válido"),
    password: z.string().min(6, "No minimo 6 caractéres"),
    comparePassword: z.string().min(1, "Confirme sua senha"),
  })
  .refine((data) => data.password === data.comparePassword, {
    message: "As senhas não coincidem",
    path: ["comparePassword"],
  });

export const loginSchema = z.object({
  email: z.string().email("Digite um email válido"),
  password: z.string().min(6, "No minimo 6 caractéres"),
});

export type DataLogin = z.infer<typeof loginSchema>;
export type DataRegister = z.infer<typeof registerSchema>;
