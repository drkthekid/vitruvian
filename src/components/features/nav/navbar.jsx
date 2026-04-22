'use client'
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/features/nav/nav-menu";
import { NavigationSheet } from "@/components/features/nav/navigation-sheet";
import { ButtonTheme } from "../themes/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-16 border-b bg-background">
      <div
        className="mx-auto flex h-full max-w-(--breakpoint-xl) items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <div className="flex items-center gap-3">
          <ButtonTheme />
          <Button className="hidden sm:inline-flex" variant="outline">
            Serviços
          </Button>

          <Button >
            <Link href={"/appointment"} >
              Faça um agendamento
            </Link>
          </Button>

          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
