"use client";
import { useState } from "react";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { cn } from "@/lib/utils";
import { User } from "lucide-react";

const Testimonial = ({
  features = [
    {
      id: 1,
      name: "Yan",
      company: "Proconnect",
      image: User,
      role: "Administrador",
      testimonial:
        "O site que desenvolveram aumentou significativamente nossos leads. Profissionais e muito rápidos na entrega.",
    },
    {
      id: 2,
      name: "Mariana Costa",
      company: "Studio M",
      image: User,
      role: "Marketing",
      testimonial:
        "Nos ajudaram a posicionar melhor nossa marca no digital. O resultado foi imediato.",
    },
  ],
  className,
}) => {
  const [activeTabId, setActiveTabId] = useState(features[0].id);

  const activeClient = features.find((f) => f.id === activeTabId);

  const Icon = activeClient.image;

  return (
    <section className={cn("py-24 sm:py-28 lg:py-32", className)}>
      <div className="mx-auto w-full max-w-(--breakpoint-xl) px-6">
        
        <h2 className="mb-16 text-center text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
          O que nossos clientes dizem
        </h2>

        <div className="grid gap-12 lg:grid-cols-2 items-start">

          <div className="w-full">
            <Accordion
              type="single"
              collapsible
              defaultValue={`item-${features[0].id}`}
              className="w-full"
            >
              {features.map((client) => (
                <AccordionItem
                  key={client.id}
                  value={`item-${client.id}`}
                  className="border-b"
                >
                  <AccordionTrigger
                    onClick={() => setActiveTabId(client.id)}
                    className="py-6 text-left hover:no-underline"
                  >
                    <div>
                      <p
                        className={cn(
                          "text-lg font-medium",
                          activeTabId === client.id
                            ? "text-foreground"
                            : "text-muted-foreground"
                        )}
                      >
                        {client.name}
                      </p>
                      <span className="text-sm text-muted-foreground">
                        {client.company}
                      </span>
                    </div>
                  </AccordionTrigger>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="relative w-full rounded-2xl border bg-muted p-8 sm:p-10 lg:p-12 flex flex-col justify-between min-h-[320px]">

            <p className="text-lg sm:text-xl md:text-2xl leading-relaxed">
              “{activeClient.testimonial}”
            </p>

            <div className="mt-8 flex items-center gap-4">
              
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background border">
                <Icon className="h-6 w-6 text-muted-foreground" />
              </div>

              <div>
                <p className="font-semibold">{activeClient.name}</p>
                <p className="text-sm text-muted-foreground">
                  {activeClient.role} • {activeClient.company}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export { Testimonial };