import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import RegisterForm from "@/components/forms/RegisterForm";
import { loginFormSchema, signInFormSchema } from "@/schemas/register-schema";

export default function RegisterPage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <section className="grid grid-cols-2 w-[900px] h-[800px] shadow-xl">
        <div className="bg-blue-500 rounded-s-md">
          <h1>Image</h1>
        </div>
        <div className="rounded-e-md px-4">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="signIn">Crie sua conta!</TabsTrigger>
            </TabsList>
            <TabsContent value="login">
              <Card className="bg-card text-card-foreground flex-1">
                <CardHeader>
                  <CardTitle className="text-2xl">Log In</CardTitle>
                  <CardDescription>
                    Entre com seu email e senha para acessar sua conta.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-10">
                  <RegisterForm
                    formType="login"
                    schema={loginFormSchema}
                    fields={[
                      {
                        label: "Email:",
                        name: "email",
                        placeholder: "exemplo@gmail.com",
                        type: "email",
                      },
                      {
                        label: "Senha:",
                        name: "password",
                        placeholder: "****",
                        type: "password",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="signIn">
              <Card className="bg-card text-card-foreground flex-1">
                <CardHeader>
                  <CardTitle className="text-2xl">Crie sua conta</CardTitle>
                  <CardDescription>
                    Preencha os campos abaixo para começar!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-10">
                  <RegisterForm
                    formType="signIn"
                    schema={signInFormSchema}
                    fields={[
                      {
                        label: "Email:",
                        name: "email",
                        placeholder: "exemplo@gmail.com",
                        type: "email",
                      },
                      {
                        label: "Senha:",
                        name: "password",
                        placeholder: "****",
                        type: "password",
                      },
                      {
                        label: "Confirmar senha:",
                        name: "confirmPassword",
                        placeholder: "****",
                        type: "password",
                      },
                    ]}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
