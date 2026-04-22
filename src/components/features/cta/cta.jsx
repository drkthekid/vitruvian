import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <div className="px-0 py-16 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden sm:rounded-xl sm:shadow-lg dark:border dark:border-border/80">
        
        <img
          alt="Background"
          className="absolute inset-0 size-full object-cover"
          src="/images/ascii-art.png"
        />

        <div className="relative isolate bg-linear-to-r from-black to-black/50 px-10 py-14">
          
          <h2 className="font-semibold text-4xl text-white tracking-tight sm:text-5xl">
            Pronto para levar seu negócio para o próximo nível?
          </h2>

          <p className="mt-4 max-w-md text-lg text-white/85 md:text-xl">
            Vamos criar um site profissional que realmente gere resultados para você.
          </p>

          <Button
            className="mt-10 bg-white text-black ring-4 ring-white/30 hover:bg-white/90"
            size="lg"
          >
            Falar com a gente
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </Button>

        </div>
      </div>
    </div>
  );
};

export default CTA;