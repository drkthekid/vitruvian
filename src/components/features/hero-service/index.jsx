"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const services = [
  {
    tag: "Serviço 01",
    title: "Desenvolvimento de Sistemas sob Medida",
    description:
      "Criamos sistemas completos e personalizados que se adaptam ao fluxo da sua empresa. De ERPs internos a plataformas SaaS escaláveis.",
    items: [
      "Arquitetura escalável com React e Node.js",
      "Integração com APIs e serviços externos",
      "Painel administrativo completo",
      "Banco de dados otimizado (PostgreSQL / MongoDB)",
      "Deploy e manutenção contínua",
    ],
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    tag: "Serviço 02",
    title: "Criação de Sites Profissionais",
    description:
      "Sites modernos e rápidos, focados em SEO e performance, garantindo presença digital forte e profissional.",
    items: [
      "Design responsivo e exclusivo",
      "SEO avançado",
      "Performance otimizada",
      "Animações suaves",
      "Integração com redes sociais",
    ],
    stack: ["Next.js", "Tailwind", "SEO"],
  },
  {
    tag: "Serviço 03",
    title: "Landing Pages de Alta Conversão",
    description:
      "Landing pages projetadas para converter visitantes em clientes com estratégia, design e performance.",
    items: [
      "Copywriting estratégico",
      "Testes A/B",
      "Formulários inteligentes",
      "Carregamento ultra-rápido",
      "Tracking de conversão",
    ],
    stack: ["React", "Analytics", "CRO"],
  },
  {
    tag: "Serviço 04",
    title: "Aplicações Web Interativas",
    description:
      "Plataformas completas com dashboards, autenticação e experiências ricas em tempo real.",
    items: [
      "Dashboards em tempo real",
      "Autenticação segura",
      "APIs escaláveis",
      "Notificações live",
      "Arquitetura modular",
    ],
    stack: ["React", "Node.js", "WebSockets"],
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 px-6 space-y-28">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
        <div>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
            Soluções digitais completas para empresas que querem crescer
          </h1>

          <p className="mt-6 text-foreground/70 text-lg leading-relaxed">
            Desenvolvemos sistemas modernos, escaláveis e de alta performance
            do planejamento ao deploy.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/illustration/services.svg"
            alt="Ilustração de serviços"
            width={520}
            height={520}
            className="w-full max-w-md"
            priority
          />
        </div>

      </div>
      <div className="space-y-40">
        {services.map((service, index) => (
          <ServiceBlock
            key={service.tag}
            service={service}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}

function ServiceBlock({ service, reverse }) {
  return (
    <div
      className={`mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center ${
        reverse ? "lg:[&>div:first-child]:order-2" : ""
      }`}
    >
      <div>
        <span className="text-sm text-primary font-medium">
          {service.tag}
        </span>

        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
          {service.title}
        </h2>

        <p className="mt-5 text-foreground/70 leading-relaxed">
          {service.description}
        </p>

        <ul className="mt-8 space-y-4">
          {service.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full border text-primary">
                <Check size={16} />
              </div>
              <span className="text-sm text-foreground/80">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border p-10">
        <h3 className="text-lg font-semibold">Stack</h3>

        <div className="mt-6 flex flex-wrap gap-3">
          {service.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-4 py-2 text-xs text-foreground/70"
            >
              {tech}
            </span>
          ))}
        </div>
        

        <p className="mt-6 text-sm text-foreground/60">
          Tecnologia aplicada para performance, escalabilidade e manutenção.
        </p>
      </div>
    </div>
  );
}