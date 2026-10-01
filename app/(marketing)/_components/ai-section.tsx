import { Asset } from "@/components/ui/asset";
import { Icon } from "./icon";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const points = [
  "A match score with reasons, not a black box",
  "A heads-up on anything that could block you",
  "Ask in plain words: “paid frontend internships near QC”",
];

type Match = {
  score: number;
  arc: string;
  initials: string;
  logo: string;
  company: string;
  role: string;
  deadline: string;
  reasons: string[];
  warning: string;
  dimmed?: boolean;
};

const matches: Match[] = [
  {
    score: 92,
    arc: "/landing/ring-92.svg",
    initials: "TP",
    logo: "bg-ai-soft text-ai",
    company: "TalaPay",
    role: "Mobile Developer Intern",
    deadline: "3 days left",
    reasons: [
      "Uses React Native — close to your React skills",
      "Paid ₱12,000/mo, hybrid in Makati",
      "Counts toward your 486 OJT hours",
    ],
    warning: "Needs a portfolio link before Oct 4",
  },
  {
    score: 86,
    arc: "/landing/ring-86.svg",
    initials: "BD",
    logo: "bg-primary-soft text-primary",
    company: "Bayanihan Digital",
    role: "Software Engineering Intern",
    deadline: "2 days left",
    reasons: [
      "React + Node.js stack matches your skills",
      "2 BSIT seniors interned here last year",
      "School MOA already on file",
    ],
    warning: "Closes in 2 days — apply tonight",
    dimmed: true,
  },
];

function MatchCard({ match }: { match: Match }) {
  return (
    <article
      className={`group flex gap-5 rounded-[16px] border border-border bg-surface p-5 transition duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:-rotate-[0.6deg] hover:shadow-[0_16px_32px_rgba(0,0,0,0.3)] ${
        match.dimmed ? "opacity-60 hover:opacity-100" : ""
      }`}
    >
      <div className="relative size-[60px] shrink-0 overflow-clip" role="img" aria-label={`${match.score}% match`}>
        <Asset src="/landing/ring-track.svg" width={60} className="absolute top-0 left-0" />
        <Asset src={match.arc} width={60} className="absolute top-0 left-0" />
        <p className="absolute top-[20.5px] left-0 w-[60px] text-center text-[15px] font-extrabold text-ai">
          {match.score}%
        </p>
      </div>
      <div className="flex min-w-px flex-1 flex-col gap-3">
        <div className="flex items-center gap-3">
          <div
            className={`flex size-9 shrink-0 items-center justify-center rounded-[9px] text-[12px] font-extrabold transition-transform duration-700 ease-in-out motion-safe:group-hover:rotate-[360deg] ${match.logo}`}
          >
            {match.initials}
          </div>
          <div className="min-w-px flex-1">
            <p className="text-[12px] font-medium text-muted">{match.company}</p>
            <h3 className="text-[16px] font-bold text-ink">{match.role}</h3>
          </div>
          <Badge tone="urgent">{match.deadline}</Badge>
        </div>
        <ul className="flex flex-col gap-1.5 text-[13px]">
          {match.reasons.map((reason) => (
            <li key={reason} className="flex items-center gap-2 text-ink">
              <Icon name="matchCheck" />
              {reason}
            </li>
          ))}
          <li className="flex items-center gap-2 font-medium text-warn">
            <Icon name="matchAlert" />
            {match.warning}
          </li>
        </ul>
        <div className="flex flex-wrap items-start gap-2">
          <Button>View listing</Button>
          <Button variant="secondary">Save</Button>
          <Button variant="secondary">Draft cover letter with AI</Button>
        </div>
      </div>
    </article>
  );
}

export function AiSection() {
  return (
    <section
      id="ai"
      className="flex scroll-mt-4 flex-col items-center gap-12 bg-ink px-6 py-[112px] lg:flex-row lg:gap-20 lg:px-[120px]"
    >
      <Reveal className="flex min-w-px flex-1 flex-col gap-5">
        <p className="flex items-center gap-2 text-[13px] font-bold text-[#c4b5fc]">
          <Icon name="aiSparkles" />
          FOR YOU · AI
        </p>
        <h2 className="text-[32px] leading-[1.15] font-extrabold tracking-[-0.02em] text-on-primary lg:text-[44px]">
          Know which internships are worth your time.
        </h2>
        <p className="text-[18px] leading-normal font-medium text-subtle">
          Tell Trax your course, skills and what you need. AI ranks every listing for you and explains why — so you
          apply to the right five, not a random twenty.
        </p>
        <ul className="flex flex-col gap-5">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2.5 text-[16px] font-semibold text-on-primary">
              <span className="flex size-[22px] shrink-0 items-center justify-center rounded-full bg-success">
                <Icon name="aiCheck" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </Reveal>
      <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[560px]">
        {matches.map((match, index) => (
          <Reveal key={match.company} delay={150 + index * 150}>
            <MatchCard match={match} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
