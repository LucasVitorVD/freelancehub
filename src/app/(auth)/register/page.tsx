"use client";

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
import { Player } from "@lottiefiles/react-lottie-player";
import welcomeAnimation from "@/assets/animations/welcome-animation.json"

export default function RegisterPage() {
  return (
    <main className="flex flex-col items-center justify-center flex-1">
      <section className="grid grid-cols-1 shadow-xl md:grid-cols-2 md:h-screen lg:p-4 lg:w-3/4 lg:h-[800px]">
        <div className="flex flex-col items-center justify-center bg-primary pt-8 md:p-4 lg:rounded-s-md">
          <div className="text-center space-y-2 text-white">
            <h1 className="text-3xl font-bold">Seja bem-vindo!</h1>
            <p>
              Estamos entusiasmados por você se juntar à nossa comunidade. Faça
              login ou crie uma conta para começar.
            </p>
          </div>

          <Player
            src={welcomeAnimation}
            className="player"
            loop
            autoplay
            style={{ height: '90%', width: '90%' }}
          />
        </div>
        <div className="rounded-e-md px-4 pt-4 lg:pt-0">
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
