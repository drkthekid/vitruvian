"use client";
import React from "react";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";


  return (
    <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">

      <div className="mx-auto grid w-full max-w-(--breakpoint-xl) items-center gap-16 px-6 py-16 sm:py-20 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

          <h1 className="font-semibold 
            text-4xl 
            sm:text-5xl 
            md:text-6xl 
            lg:text-[3.5rem]"
          >
            Nós criamos{" "}
            <span className="relative inline-block whitespace-nowrap">
              <ContainerTextFlip
                words={[
                  "WebSites",
                  "Landing Pages",
                  "Plataformas",
                  "Experiências",
                ]}
                className="inline-block text-primary"
              />
            </span>{" "}
            que geram resultados
          </h1>

          <p className="mt-6 max-w-[60ch] text-foreground/80 text-base sm:text-lg md:text-xl">
            Desenvolvemos sites modernos, rápidos e focados em conversão para empresas que querem crescer e se destacar no digital.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">

            <Button className="w-full sm:w-auto rounded-full text-base" size="lg">
              Contatar Agora
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full aspect-16/10 sm:aspect-square rounded-2xl overflow-hidden border-2 border-foreground/40 bg-muted shadow-lg">
            <Image
              src={isDark ? "/logo/padrao-backdark.png" : "/logo/padrao-backlight.png"}
              alt="Preview de projeto"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;