import { z } from "zod"

export const signInFormSchema = z.object({
  email: z.string({ required_error: "Campo obrigatório!" }).email({ message: "Email inválido." }).min(5).max(255),
  password: z.string({ required_error: "Campo obrigatório!" })
    .min(8, { message: 'A senha deve ter pelo menos 8 caracteres.' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
      message: 'A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.'
    }),
    confirmPassword: z.string({ required_error: "Campo obrigatório!" }),
}).superRefine((field, ctx) => {
  if (field.confirmPassword !== field.password) {
    ctx.addIssue({
      code: "custom",
      message: "As senhas não são iguais.",
      path: ["confirmPassword"]
    })
  }
})

export const loginFormSchema = z.object({
  email: z.string({ required_error: "Campo obrigatório!" }).email({ message: "Email inválido." }).min(5).max(255),
  password: z.string({ required_error: "Campo obrigatório!" })
    .min(8, { message: 'A senha deve ter pelo menos 8 caracteres.' })
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, {
      message: 'A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial.'
    }),
});

export type loginFormSchemaType = z.infer<typeof loginFormSchema>
export type signInFormSchemaType = z.infer<typeof signInFormSchema>