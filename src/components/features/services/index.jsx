"use client";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowRight, Blocks, Settings2 } from "lucide-react";

export default function Services() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-20 sm:py-24 lg:py-28 text-center">

      <span className="text-sm text-muted-foreground">
        Serviços
      </span>

      <h2 className="mt-4 max-w-[22ch] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]">
        Deixe a tecnologia com a gente, foque no crescimento do seu negócio
      </h2>

      <p className="mt-6 max-w-[60ch] text-muted-foreground text-base sm:text-lg md:text-xl">
        Desenvolvemos sites modernos, rápidos e focados em conversão para empresas que querem crescer no digital.
      </p>

      <div className="mt-10">
        <Button size="lg" className="rounded-full w-full sm:w-auto">
          Agendar uma conversa
          <ArrowUpRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      <div className="mt-20 w-full">
        <div className="mx-auto w-full max-w-(--breakpoint-xl) px-0 sm:px-6">
          
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            
            <div className="rounded-xl border bg-muted p-6 text-left hover:shadow-lg transition">
              
              <div className="mb-6 aspect-video w-full rounded-xl bg-background md:hidden" />

              <span className="font-semibold text-lg sm:text-xl">
                Criação de Sites
              </span>

              <ul className="mt-6 space-y-5">
                <li>
                  <div className="flex items-start gap-3">
                    <Settings2 className="shrink-0" />
                    <p className="text-sm sm:text-base">
                      Desenvolvimento de sites modernos e responsivos para sua empresa.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Blocks className="shrink-0" />
                    <p className="text-sm sm:text-base">
                      Estrutura otimizada para melhor experiência e conversão.
                    </p>
                  </div>
                </li>
              </ul>

              <Button className="mt-8 w-full">
                Ver mais <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="hidden rounded-xl border bg-muted md:block lg:col-span-2 min-h-[250px]" />
            <div className="hidden rounded-xl border bg-muted md:block lg:col-span-2 min-h-[250px]" />
            <div className="rounded-xl border bg-muted p-6 text-left hover:shadow-lg transition">
              
              <div className="mb-6 aspect-video w-full rounded-xl bg-background md:hidden" />

              <span className="font-semibold text-lg sm:text-xl">
                Landing Pages
              </span>

              <ul className="mt-6 space-y-4">
                <li>
                  <div className="flex items-start gap-3">
                    <Settings2 className="shrink-0" />
                    <p className="text-sm sm:text-base">
                      Páginas focadas em conversão para campanhas e anúncios.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-start gap-3">
                    <Blocks className="shrink-0" />
                    <p className="text-sm sm:text-base">
                      Design estratégico para captar leads e gerar resultados.
                    </p>
                  </div>
                </li>
              </ul>

              <Button className="mt-8 w-full">
                Ver mais <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
}