import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  arrow?: boolean;
  newTab?: boolean;
};

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[0.95rem]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-sunset text-ink-deep shadow-[0_14px_40px_-12px_rgba(239,121,29,0.7)] hover:-translate-y-0.5 hover:shadow-[0_22px_55px_-12px_rgba(239,121,29,0.9)]",
  secondary: "glass text-fg hover:bg-white/10 hover:-translate-y-0.5",
  ghost: "text-fg-muted hover:text-fg",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  arrow = false,
  newTab,
}: ButtonLinkProps) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;
  const isExternal = /^https?:\/\//.test(href);
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight
          size={size === "lg" ? 18 : 16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={cls}
        target={newTab === false ? undefined : "_blank"}
        rel="noopener noreferrer"
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
