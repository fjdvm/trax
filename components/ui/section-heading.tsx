import { Reveal } from "./reveal";

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
    <Reveal className="mx-auto flex max-w-[940px] flex-col items-center gap-3.5 text-center">
      {eyebrow && <p className="text-[13px] font-bold text-primary">{eyebrow}</p>}
      <h2 className="text-[32px] leading-[1.15] font-extrabold tracking-[-0.02em] text-ink lg:text-[44px]">
        {title}
      </h2>
      {description && (
        <p className="max-w-[680px] text-[18px] leading-normal font-medium text-muted">{description}</p>
      )}
    </Reveal>
  );
}
