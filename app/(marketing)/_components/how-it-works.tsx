import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    title: "Someone finds it",
    body: "A classmate spots an internship anywhere — Facebook, a job site, a professor’s email — and pastes the link into Trax.",
  },
  {
    title: "AI fills it in",
    body: "Trax reads the posting and fills in deadline, hours, pay and requirements. The classmate checks it and posts.",
  },
  {
    title: "Everyone’s on it",
    body: "The listing hits the board, the calendar and the weekly digest. Reminders go out before it closes.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="flex scroll-mt-4 flex-col gap-12 bg-surface px-6 py-[112px] lg:px-[120px]">
      <SectionHeading eyebrow="HOW IT WORKS" title="From “nakita ko ’to” to applied, in three steps" />
      <ol className="grid gap-6 lg:grid-cols-3">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1;
          return (
            <li key={step.title}>
              <Reveal delay={index * 150} className="group flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex size-12 shrink-0 items-center justify-center rounded-full text-[20px] font-extrabold text-on-primary transition-transform duration-700 ease-in-out motion-safe:group-hover:rotate-[360deg] ${
                      isLast ? "bg-warn" : "bg-ink"
                    }`}
                  >
                    {index + 1}
                  </span>
                  {!isLast && <span aria-hidden="true" className="h-0.5 min-w-px flex-1 bg-border" />}
                </div>
                <h3 className="text-[22px] font-extrabold text-ink">{step.title}</h3>
                <p className="text-[16px] leading-normal text-muted">{step.body}</p>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
