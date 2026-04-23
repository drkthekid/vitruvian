"use client"

import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useRef } from "react";
// import emailjs from '@emailjs/browser'
// import { toast } from "sonner";

export const Contato = ({ id }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset()
          toast.success("Email enviado com sucesso!")
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="flex min-h-screen m-10 items-center justify-center py-16">

        <div className="mx-auto w-full max-w-(--breakpoint-xl)  xl:px-0">
          <h2 className="mt-3 font-semibold text-3xl tracking-tight md:text-4xl">
            Vamos trabalhar juntos?
          </h2>
          <p className="mt-3 text-lg text-muted-foreground sm:text-lg">
            Precisa de desenvolvimento full stack, consultoria técnica ou sistemas sob medida?
            Me conte sobre seu projeto!
          </p>
          <div className="mt-16 flex flex-col gap-16 md:gap-10 lg:flex-row">
            <div
              className="grid w-full  grid-cols-1 gap-1 border bg-muted p-1 *:border *:bg-background *:p-6 sm:grid-cols-2 lg:col-span-2">
              <div>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:bg-foreground/10">
                  <MailIcon />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Email</h3>
                <p className="my-2.5 text-muted-foreground">
                  Responderemos em até 24h com análise técnica do seu projeto.
                </p>
              </div>
              <div>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:bg-foreground/10">
                  <MessageCircle />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Assunto</h3>
                <p className="my-2.5 text-muted-foreground">
                  Desenvolvimento web, APIs, performance, DevOps ou sistemas completos.
                </p>
              </div>
              <div>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:bg-foreground/10">
                  <MapPinIcon />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Disponibilidade</h3>
                <p className="my-2.5 text-muted-foreground">
                  Remoto (todo Brasil) ou presencial em São Paulo/SP
                </p>
              </div>
              <div>
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-foreground/3 bg-foreground/5 text-foreground dark:bg-foreground/10">
                  <PhoneIcon />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Telefone</h3>
                <p className="my-2.5 text-muted-foreground">
                  WhatsApp ou ligação | Seg-Sex 8h-18h
                </p>
                <div className="flex flex-col text-sm">
                  <Link
                    className="font-medium text-primary"
                    href="tel:+5511942766704">
                    +55 (11) 94276-6704 (Davi Chagas)
                  </Link>
                  <Link
                    className="font-medium text-primary"
                    href="tel:+5511949847736">
                    +55 (11) 94984-7736 (Ramon Coelho)
                  </Link>
                </div>

              </div>
            </div>

            {/* Form */}
            <div className="w-full border bg-muted p-1">
              <Card
                className="relative isolate rounded-none bg-background shadow-none lg:ms-auto">
                <CardHeader>
                  <CardTitle>Nos envie um email</CardTitle>
                  <CardDescription>
                    Preencha este formulário
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-2">
                  <form ref={form} onSubmit={sendEmail} >
                    <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                      <div className="col-span-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                          className="mt-2 h-10 bg-white shadow-none"
                          id="name"
                          name="user_name"
                          placeholder="João Silva"
                          required
                        />
                      </div>

                      <div className="col-span-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          name="user_email"
                          className="mt-2 h-10 bg-white shadow-none"
                          id="email"
                          placeholder="joao@email.com"
                          type="email"
                          required
                        />
                      </div>

                      <div className="col-span-2">
                        <Label htmlFor="subject">Assunto</Label>
                        <Input
                          className="mt-2 h-10 bg-white shadow-none"
                          id="subject"
                          name="assunto"
                          placeholder="Proposta de projeto, feedback, oportunidade, etc."
                          required
                        />
                      </div>

                      <div className="col-span-2">
                        <Label htmlFor="message">Mensagem</Label>
                        <Textarea
                          className="mt-2 bg-white shadow-none"
                          id="message"
                          name="message"
                          placeholder="O que você gostaria de conversar? Projeto, parceria ou dúvidas?"
                          rows={6}
                          required
                        />
                      </div>
                    </div>

                    <Button className="mt-6 w-full" size="lg">
                      Enviar mensagem
                    </Button>
                  </form>

                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contato;