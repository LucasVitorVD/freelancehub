"use client"

import GoogleIcon from "@/assets/GoogleLogoIcon";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Path, FieldValues } from "react-hook-form";

type FormFieldType<T> = {
  name: Path<T>;
  label: string;
  type?: string;
  placeholder?: string;
};

interface RegisterFormProps<T extends FieldValues> {
  schema: z.ZodType<T>;
  formType: "login" | "signIn";
  fields: FormFieldType<T>[];
}

export default function RegisterForm<T extends FieldValues>({
  schema,
  formType,
  fields,
}: RegisterFormProps<T>) {
  const form = useForm<T>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (values: T) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {fields.map((inputField, i) => (
          <FormField
            key={inputField.name}
            control={form.control}
            name={inputField.name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{inputField.label}</FormLabel>
                <FormControl>
                  <Input
                    placeholder={inputField.placeholder}
                    type={inputField.type}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button type="submit" className="w-full">
          {formType === "login" ? "Entrar" : "Criar conta"}
        </Button>

        <div className="space-y-2 border-t p-2">
          <p className="text-center text-muted-foreground text-sm">
            Ou continue com:
          </p>
          <Button
            variant="outline"
            className="flex items-center gap-1 w-full hover:bg-white hover:shadow-md transition-shadow"
          >
            <GoogleIcon />
            Google
          </Button>
        </div>

        {formType === "login" && (
          <p className="underline text-sm text-blue-500">Esqueci minha senha</p>
        )}
      </form>
    </Form>
  );
}
