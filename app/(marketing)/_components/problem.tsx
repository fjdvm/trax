import { Icon } from "./icon";
import type { IconName } from "./icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const problems: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "problemChat",
    title: "Buried in 12 group chats",
    body: "Someone posts a great internship at 11 PM. By morning it’s 200 messages up.",
  },
  {
    icon: "problemClock",
    title: "Found it a day too late",
    body: "You meant to apply “later.” The deadline was yesterday.",
  },
  {
    icon: "problemUnlink",
    title: "Dead links, filled slots",
    body: "You prepare everything, click the link, and the posting is gone.",
  },
];

export function Problem() {
  return (
    <section className="flex flex-col gap-12 bg-surface px-6 py-[112px] lg:px-[120px]">
      <SectionHeading eyebrow="SOUND FAMILIAR?" title="Internship season shouldn’t feel like a scavenger hunt." />
      <ul className="grid gap-6 lg:grid-cols-3">
        {problems.map((problem, index) => (
          <li key={problem.title}>
            <Reveal delay={index * 120} className="h-full">
              <div className="group flex h-full flex-col gap-3.5 rounded-[20px] bg-bg p-7 transition duration-300 motion-safe:hover:-translate-y-1.5 motion-safe:hover:-rotate-1 hover:shadow-[0_16px_32px_rgba(22,24,29,0.08)]">
                <div className="flex size-11 items-center justify-center rounded-[12px] bg-urgent-soft transition-transform duration-700 ease-in-out motion-safe:group-hover:rotate-[360deg]">
                  <Icon name={problem.icon} />
                </div>
                <h3 className="text-[20px] font-bold text-ink">{problem.title}</h3>
                <p className="text-[15px] leading-normal text-muted">{problem.body}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
