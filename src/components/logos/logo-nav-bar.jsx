"use client";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function LogoNavBar() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";
  return (
    <Link href="/" className="relative inline-block">
      <Image
        src={isDark ? "/logo/model2-dark.png" : "/logo/model2-light.png"}
        alt="Logo"
        className="object-contain"
        priority
        width={150}
        height={150}
      />
    </Link>
  )
};



