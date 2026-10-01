import type { ReactNode } from "react";
import { Asset } from "./asset";

const tones = {
  info: { box: "bg-primary-soft text-primary", dot: "/landing/dot-info.svg" },
  urgent: { box: "bg-urgent-soft text-urgent", dot: "/landing/dot-urgent.svg" },
} as const;

export function Badge({ tone, children }: { tone: keyof typeof tones; children: ReactNode }) {
  const { box, dot } = tones[tone];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1 text-[12px] font-semibold ${box}`}
    >
      <Asset src={dot} width={6} />
      {children}
    </span>
  );
}
