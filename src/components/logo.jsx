import Image from "next/image";
import Link from "next/link";

export const Logo = () => (
  <Link href="/" className="relative inline-block">
    <Image
      src="/logo/logo.png"
      alt="Logo"
      className="object-contain"
      priority
      width={100}
      height={100}
    />
  </Link>
);