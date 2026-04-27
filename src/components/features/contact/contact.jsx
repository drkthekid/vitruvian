"use client"

import Image from "next/image";
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
      <section className="py-28 px-6 space-y-20" id="contact">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Precisa de desenvolvimento full stack, consultoria técnica ou sistemas sob medida? Me conte sobre seu projeto!
              </p>
            </div>
            <div className="relative hidden lg:flex justify-center lg:justify-end">
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent rounded-3xl blur-3xl"></div>
              <Image
                src="/illustration/contact.svg"
                alt="Contato"
                width={450}
                height={450}
                className="w-full max-w-md relative drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <InfoCard icon={MailIcon} title="Email" description="Responderemos em até 24h com análise técnica do seu projeto." />
              <InfoCard icon={MessageCircle} title="Assunto" description="Desenvolvimento web, APIs, performance, DevOps ou sistemas completos." />
              <InfoCard icon={MapPinIcon} title="Disponibilidade" description="Remoto (todo Brasil) ou presencial em São Paulo/SP" />
              <div className="rounded-2xl border border-foreground/10 bg-linear-to-br from-background/50 to-background/30 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 group">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-primary/10 text-primary group-hover:from-primary/30 group-hover:to-primary/20 transition-colors duration-300">
                  <PhoneIcon size={24} />
                </div>
                <h3 className="mt-6 font-semibold text-xl">Telefone</h3>
                <p className="my-3 text-foreground/70 text-sm">
                  WhatsApp ou ligação | Seg-Sex 8h-18h
                </p>
                <div className="flex flex-col gap-2 text-sm space-y-1">
                  <Link
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                    href="tel:+5511942766704">
                    +55 (11) 94276-6704 (Davi Chagas)
                  </Link>
                  <Link
                    className="font-medium text-primary hover:text-primary/80 transition-colors"
                    href="tel:+5511949847736">
                    +55 (11) 94984-7736 (Ramon Coelho)
                  </Link>
                </div>
              </div>
            </div>

            <Card className="relative lg:col-span-1 border-foreground/10 bg-linear-to-br from-background/50 to-background/30 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">Nos envie um email</CardTitle>
                <CardDescription className="text-foreground/70">
                  Preencha este formulário e entraremos em contato
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form ref={form} onSubmit={sendEmail} className="space-y-5">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium">Nome</Label>
                    <Input
                      className="mt-2 h-11 border-foreground/10 bg-background/50 focus:bg-background transition-colors"
                      id="name"
                      name="user_name"
                      placeholder="João Silva"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                    <Input
                      name="user_email"
                      className="mt-2 h-11 border-foreground/10 bg-background/50 focus:bg-background transition-colors"
                      id="email"
                      placeholder="joao@email.com"
                      type="email"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium">Assunto</Label>
                    <Input
                      className="mt-2 h-11 border-foreground/10 bg-background/50 focus:bg-background transition-colors"
                      id="subject"
                      name="assunto"
                      placeholder="Proposta de projeto, feedback, oportunidade, etc."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">Mensagem</Label>
                    <Textarea
                      className="mt-2 border-foreground/10 bg-background/50 focus:bg-background transition-colors resize-none"
                      id="message"
                      name="message"
                      placeholder="O que você gostaria de conversar? Projeto, parceria ou dúvidas?"
                      rows={5}
                      required
                    />
                  </div>

                  <Button className="w-full h-11 mt-4 bg-linear-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300" size="lg">
                    Enviar mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoCard({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-foreground/10 bg-linear-to-br from-background/50 to-background/30 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-primary/10 text-primary group-hover:from-primary/30 group-hover:to-primary/20 transition-colors duration-300">
        <Icon size={24} />
      </div>
      <h3 className="mt-6 font-semibold text-xl">{title}</h3>
      <p className="mt-3 text-foreground/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default Contato;