import type { ReactNode } from "react";

const base =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[10px] font-semibold transition-opacity hover:opacity-90";

const variants = {
  primary: "bg-primary text-on-primary",
  secondary: "border border-border bg-surface text-ink",
  inverse: "bg-surface text-ink",
  outline: "border-[1.5px] border-white/50 bg-primary text-on-primary",
} as const;

const sizes = {
  md: "px-4 py-2.5 text-[14px]",
  lg: "px-[22px] py-3.5 text-[16px]",
} as const;

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  href?: string;
  children: ReactNode;
};

export function Button({ variant = "primary", size = "md", href, children }: ButtonProps) {
  const className = `${base} ${variants[variant]} ${sizes[size]}`;
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={className}>
      {children}
    </button>
  );
}
