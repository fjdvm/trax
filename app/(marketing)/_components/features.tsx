import { Icon } from "./icon";
import type { IconName } from "./icons";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const features: { icon: IconName; iconBg: string; title: string; body: string; chips: string[] }[] = [
  {
    icon: "featureGrid",
    iconBg: "bg-primary-soft",
    title: "One shared board",
    body: "Classmates post internships in a minute. Every card shows the deadline, pay, setup, OJT hours, and whether the company has an MOA with your school.",
    chips: ["₱8,000/mo", "Hybrid", "486 hrs · OJT credit", "MOA ✓"],
  },
  {
    icon: "featureBell",
    iconBg: "bg-urgent-soft",
    title: "Deadlines you can’t miss",
    body: "A calendar of every deadline, plus reminders to your class group 7, 3 and 1 day before each one closes.",
    chips: ["2 days left", "Weekly digest", "Google Calendar sync"],
  },
  {
    icon: "featureSparkles",
    iconBg: "bg-ai-soft",
    title: "AI that does the boring parts",
    body: "Paste a link and AI fills in the listing. For You ranks internships by how well they fit your course, skills and preferences.",
    chips: ["Autofill from link", "92% match", "Cover letter drafts"],
  },
  {
    icon: "featureKanban",
    iconBg: "bg-success-soft",
    title: "Track every application",
    body: "Move each internship from Saved to Applied to Interview to Offer, with notes and a checklist of required documents.",
    chips: ["Saved", "Applied", "Interview", "Offer"],
  },
];

export function Features() {
  return (
    <section id="features" className="flex scroll-mt-4 flex-col gap-12 bg-bg px-6 py-[112px] lg:px-[120px]">
      <SectionHeading
        eyebrow="FEATURES"
        title="Everything your class needs, in one place"
        description="Built around how Filipino students actually hunt for OJT: group chats, MOAs, required hours and all."
      />
      <ul className="grid gap-6 lg:grid-cols-2">
        {features.map((feature, index) => (
          <li key={feature.title}>
            <Reveal delay={(index % 2) * 120} className="h-full">
              <div className="group flex h-full flex-col gap-4 rounded-[24px] border border-border bg-surface p-8 transition duration-300 motion-safe:hover:-translate-y-1.5 motion-safe:hover:rotate-1 hover:shadow-[0_20px_40px_rgba(22,24,29,0.08)]">
                <div
                  className={`flex size-12 items-center justify-center rounded-[14px] transition-transform duration-700 ease-in-out motion-safe:group-hover:rotate-[360deg] ${feature.iconBg}`}
                >
                  <Icon name={feature.icon} />
                </div>
                <h3 className="text-[24px] font-extrabold text-ink">{feature.title}</h3>
                <p className="text-[16px] leading-normal text-muted">{feature.body}</p>
                <ul className="flex flex-wrap gap-2 pt-1">
                  {feature.chips.map((chip) => (
                    <li
                      key={chip}
                      className="rounded-full bg-surface-alt px-3 py-1.5 text-[13px] font-semibold whitespace-nowrap text-ink"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
