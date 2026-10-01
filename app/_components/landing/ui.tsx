import type { ReactNode } from "react";
import { Asset } from "./icon";

const buttonBase =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-[10px] font-semibold transition-opacity hover:opacity-90";

const buttonVariants = {
  primary: "bg-primary text-on-primary",
  secondary: "border border-border bg-surface text-ink",
  inverse: "bg-surface text-ink",
  outline: "border-[1.5px] border-white/50 bg-primary text-on-primary",
} as const;

const buttonSizes = {
  md: "px-4 py-2.5 text-[14px]",
  lg: "px-[22px] py-3.5 text-[16px]",
} as const;

type ButtonProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  href?: string;
  children: ReactNode;
};

export function Button({ variant = "primary", size = "md", href, children }: ButtonProps) {
  const className = `${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]}`;
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

const badgeTones = {
  info: { box: "bg-primary-soft text-primary", dot: "/landing/dot-info.svg" },
  urgent: { box: "bg-urgent-soft text-urgent", dot: "/landing/dot-urgent.svg" },
} as const;

export function Badge({ tone, children }: { tone: keyof typeof badgeTones; children: ReactNode }) {
  const { box, dot } = badgeTones[tone];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[12px] font-semibold ${box}`}
    >
      <Asset src={dot} width={6} />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto flex max-w-[940px] flex-col items-center gap-3.5 text-center">
      {eyebrow && <p className="text-[13px] font-bold text-primary">{eyebrow}</p>}
      <h2 className="text-[32px] leading-[1.15] font-extrabold tracking-[-0.02em] text-ink lg:text-[44px]">
        {title}
      </h2>
      {description && (
        <p className="max-w-[680px] text-[18px] leading-normal font-medium text-muted">{description}</p>
      )}
    </div>
  );
}
