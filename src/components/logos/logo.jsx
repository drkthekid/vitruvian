"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Logo() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <Link href="/" className="relative inline-block">
      <Image
        src={isDark ? "/logo/padrao-dark.png" : "/logo/padrao-light.png"}
        alt="Logo"
        className="object-contain"
        priority
        width={100}
        height={100}
      />
    </Link>
  )
};