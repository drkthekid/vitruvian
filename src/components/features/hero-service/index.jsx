"use client";

import Image from "next/image";
import { Check } from "lucide-react";

const services = [
  {
    tag: "Serviço 01",
    title: "Desenvolvimento de Sistemas sob Medida",
    description:
      "Criamos sistemas completos e personalizados que se adaptam ao fluxo da sua empresa. De ERPs internos a plataformas SaaS escaláveis.",
    items: [
      "Arquitetura escalável",
      "Integração com APIs e serviços externos",
      "Painel administrativo completo",
      "Banco de dados",
      "Deploy e manutenção contínua",
    ],
    stack: ["React", "Node.js", "SQL", "Pandas"],
    image: "illustration/perfomance.svg",
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
    stack: ["Next.js", "React", "Tailwind", "SEO"],
   image: "illustration/success.svg",
  },
  {
    tag: "Serviço 03",
    title: "Landing Pages",
    description:
      "Landing pages projetadas para converter visitantes em clientes com estratégia, design e performance.",
    items: [
      "Copywriting estratégico",
      "Formulários inteligentes",
      "Carregamento ultra-rápido",
      "Tracking de conversão",
    ],
    stack: ["React", "Next.js", "Analytics"],
    image: "illustration/responsive.svg",
  },
  {
    tag: "Serviço 04",
    title: "Aplicações Web Interativas",
    description:
      "Plataformas completas com dashboards, autenticação e experiências ricas em tempo real.",
    items: [
      "Dashboards em tempo real",
      "Integrações com Planilhas e APIs",
      "Autenticação segura",
      "APIs escaláveis",
    ],
    stack: ["React", "Next.js", "Node.js", "WebSockets", "Pandas"],
    image: "illustration/data.svg",
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

        <div className="flex justify-center lg:justify-end relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl"></div>
          <Image
            src="/illustration/services.svg"
            alt="Ilustração de serviços"
            width={520}
            height={520}
            className="w-full max-w-md relative drop-shadow-2xl transition-transform duration-500"
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
      className={`mx-auto max-w-7xl grid gap-16 lg:grid-cols-2 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""
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

      <div className="rounded-2xl border bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm p-10 flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-300 border-foreground/10">
        <h3 className="text-lg font-semibold">Stack</h3>

        <div className="mt-6 flex flex-wrap gap-3">
          {service.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border bg-foreground/5 px-4 py-2 text-xs text-foreground/70 hover:bg-primary/10 hover:text-primary transition-colors duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-8 relative group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
          <Image
            src={service.image}
            alt={service.title}
            width={400}
            height={400}
            className="w-full rounded-xl shadow-md group-hover:shadow-2xl transition-all duration-500 relative group-hover:-translate-y-1"
            priority
          />
        </div>

        <p className="mt-6 text-sm text-foreground/60">
          Tecnologia aplicada para performance, escalabilidade e manutenção.
        </p>
      </div>
    </div>
  );
}