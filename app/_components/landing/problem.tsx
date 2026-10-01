import { Icon } from "./icon";
import type { IconName } from "./icons";
import { SectionHeading } from "./ui";

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
        {problems.map((problem) => (
          <li key={problem.title} className="flex flex-col gap-3.5 rounded-[20px] bg-bg p-7">
            <div className="flex size-11 items-center justify-center rounded-[12px] bg-urgent-soft">
              <Icon name={problem.icon} />
            </div>
            <h3 className="text-[20px] font-bold text-ink">{problem.title}</h3>
            <p className="text-[15px] leading-normal text-muted">{problem.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
