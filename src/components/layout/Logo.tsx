import Link from "next/link";
import Image from "next/image";
import { logo } from "@/data/assets";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="Aero One — Startseite"
    >
      <Image
        src={logo.wordmark.src}
        width={logo.wordmark.width}
        height={logo.wordmark.height}
        alt={logo.wordmark.alt}
        preload
        className="h-8 w-auto sm:h-9 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
      />
    </Link>
  );
}
