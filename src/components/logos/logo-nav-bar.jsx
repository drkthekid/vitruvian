import Image from "next/image";
import Link from "next/link";

export const LogoNavBar = () => (
  <Link href="/" className="relative inline-block">
    <Image
      src="/logo/model2-light.png"
      alt="Logo"
      className="object-contain"
      priority
      width={100}
      height={100}
    />
  </Link>
);



