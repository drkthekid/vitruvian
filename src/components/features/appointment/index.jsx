import { Clock, ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Appointment = ({
  icon = <Clock className="size-6" />,
  heading = "Pronto para tirar seu projeto do papel?",
  description = "Criamos sites profissionais e rápidos para ajudar seu negócio a crescer no digital.",

  button = {
    text: "Agendar uma conversa",
    icon: <ArrowUpRight className="ml-2 size-4" />,
    url: "#",
  },
  className
}) => {
  return (
    <section className={cn("overflow-hidden py-32", className)}>
      <div className="container">
        <div className="flex flex-col gap-10">
          
          <div className="relative flex flex-col gap-5">

            <div
              style={{ transform: "translate(-50%, -50%)" }}
              className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border 
              [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] 
              p-16 md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>

            <span className="mx-auto flex size-16 items-center justify-center rounded-full border md:size-20 bg-background">
              {icon}
            </span>

            <h2 className="mx-auto max-w-5xl text-center text-3xl font-semibold tracking-tight md:text-6xl">
              {heading}
            </h2>

            <p className="mx-auto max-w-3xl text-center text-muted-foreground md:text-lg">
              {description}
            </p>

            <div className="flex flex-col items-center justify-center gap-3 pt-4 pb-8">
              <Button size="lg" className="rounded-full" asChild>
                <a href={button.url}>
                  {button.text}
                  {button.icon}
                </a>
              </Button>
            </div>
          </div>

          <div className="mx-auto flex h-[200px] w-full max-w-5xl items-center justify-center rounded-2xl border bg-muted">
            
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <Clock className="size-10" />
              <span className="text-sm">
                Resposta rápida • Atendimento direto
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export { Appointment };