import type { ReactNode } from "react";
import { Asset } from "@/components/ui/asset";
import { Icon } from "./icon";
import type { IconName } from "./icons";

// A static, decorative picture of the board. It is not interactive and hidden
// from assistive tech; sizes are fractional because the Figma frame was scaled.

type Tone = "primary" | "ai" | "warn" | "success" | "urgent" | "neutral";

const logoTones: Record<Tone, string> = {
  primary: "bg-primary-soft text-primary",
  ai: "bg-ai-soft text-ai",
  warn: "bg-warn-soft text-warn",
  success: "bg-success-soft text-success",
  urgent: "bg-urgent-soft text-urgent",
  neutral: "bg-surface-alt text-ink",
};

const deadlineTones = {
  urgent: { box: "bg-urgent-soft text-urgent", dot: "/landing/dot-urgent-sm.svg" },
  warn: { box: "bg-warn-soft text-warn", dot: "/landing/dot-warn-sm.svg" },
  success: { box: "bg-success-soft text-success", dot: "/landing/dot-success-sm.svg" },
} as const;

type Listing = {
  initials: string;
  tone: Tone;
  company: string;
  role: string;
  tags: string[];
  starts: string;
  deadline: { tone: keyof typeof deadlineTones; label: string };
};

const listings: Listing[] = [
  {
    initials: "BD", tone: "primary", company: "Bayanihan Digital", role: "Software Engineering Intern",
    tags: ["Taguig", "Hybrid", "₱8,000/mo", "486 hrs · OJT credit"], starts: "Jan 6, 2027",
    deadline: { tone: "urgent", label: "2 days left" },
  },
  {
    initials: "TP", tone: "ai", company: "TalaPay", role: "Mobile Developer Intern",
    tags: ["Makati", "Hybrid", "₱12,000/mo", "486 hrs · OJT credit"], starts: "Jan 13, 2027",
    deadline: { tone: "urgent", label: "3 days left" },
  },
  {
    initials: "SS", tone: "warn", company: "Sinag Studio", role: "UX / UI Design Intern",
    tags: ["BGC", "Onsite", "₱10,000/mo", "300 hrs"], starts: "Jan 12, 2027",
    deadline: { tone: "warn", label: "6 days left" },
  },
  {
    initials: "KD", tone: "success", company: "Kalye Data Co.", role: "Data Analyst Intern",
    tags: ["Anywhere", "Remote", "₱6,000/mo", "400 hrs · OJT credit"], starts: "Feb 2, 2027",
    deadline: { tone: "success", label: "Closes Oct 30" },
  },
  {
    initials: "AW", tone: "neutral", company: "Alon Works", role: "QA Engineer Intern",
    tags: ["Pasig", "Hybrid", "₱7,500/mo", "486 hrs · MOA ✓"], starts: "Jan 20, 2027",
    deadline: { tone: "success", label: "Closes Nov 2" },
  },
  {
    initials: "LI", tone: "urgent", company: "Lungsod IT Office", role: "IT Support Intern",
    tags: ["Quezon City", "Onsite", "Unpaid", "240 hrs · MOA ✓"], starts: "Jan 6, 2027",
    deadline: { tone: "success", label: "Closes Nov 15" },
  },
];

const closingSoon = [
  { days: 2, company: "Bayanihan Digital", role: "Software Eng. Intern", tone: "urgent" },
  { days: 3, company: "TalaPay", role: "Mobile Dev Intern", tone: "urgent" },
  { days: 6, company: "Sinag Studio", role: "UX / UI Design Intern", tone: "warn" },
  { days: 9, company: "Pixel Pandesal", role: "Frontend Intern", tone: "warn" },
] as const;

const closingTones = {
  urgent: { box: "bg-urgent-soft", days: "text-urgent" },
  warn: { box: "bg-warn-soft", days: "text-warn" },
} as const;

const sidebarItems: { icon: IconName; label: string; active?: boolean; badge?: ReactNode }[] = [
  { icon: "previewGrid", label: "Listings", active: true },
  {
    icon: "previewCalendar",
    label: "Calendar",
    badge: (
      <span className="rounded-full bg-urgent px-[5.347px] py-[1.528px] text-[7.64px] font-extrabold text-on-primary">3</span>
    ),
  },
  {
    icon: "previewSparkles",
    label: "For You",
    badge: (
      <span className="rounded-[6px] bg-ai-soft px-[4.583px] py-[1.528px] text-[7.64px] font-extrabold text-ai">AI</span>
    ),
  },
  { icon: "previewKanban", label: "My Tracker" },
  { icon: "previewPlus", label: "Add listing" },
];

const pillBase =
  "flex items-center gap-[4.583px] rounded-full border-[0.764px] px-[10.694px] py-[6.111px] text-[9.931px] font-semibold whitespace-nowrap";
const pillOutline = `${pillBase} border-border bg-surface text-ink`;
const pillSolid = `${pillBase} border-ink bg-ink text-on-primary`;

function Sidebar() {
  return (
    <div className="flex h-[782.222px] w-[189.444px] shrink-0 flex-col items-start gap-[21.389px] border-r-[0.764px] border-border bg-surface px-[12.222px] py-[18.333px]">
      <div className="flex w-full items-center gap-[7.639px] px-[6.111px]">
        <Asset src="/landing/mark-app.svg" width={25.972} />
        <div className="flex flex-col whitespace-nowrap">
          <p className="text-[13.75px] font-extrabold text-ink">
            Tra<span className="text-warn">x</span>
          </p>
          <p className="text-[9.17px] font-medium text-muted">Class of 2027</p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-[3.056px]">
        {sidebarItems.map((item) => (
          <div
            key={item.label}
            className={`flex w-full items-center gap-[9.167px] rounded-[10px] px-[9.167px] py-[7.639px] text-[10.69px] ${
              item.active ? "bg-primary-soft font-bold text-primary" : "font-medium text-ink"
            }`}
          >
            <Icon name={item.icon} />
            <p className="min-w-px flex-1">{item.label}</p>
            {item.badge}
          </div>
        ))}
      </div>
      <div className="min-h-px w-full flex-1" />
      <div className="flex w-full flex-col gap-[6.111px] rounded-[14px] bg-ink p-[12.222px]">
        <Icon name="previewBell" />
        <p className="text-[9.93px] font-bold text-on-primary">Reminders are on</p>
        <p className="text-[9.17px] text-subtle">Class group gets a ping 7, 3 and 1 day before each deadline.</p>
      </div>
      <div className="flex w-full items-center gap-[7.639px] px-[6.111px]">
        <div className="flex size-[25.972px] shrink-0 items-center justify-center rounded-full bg-warn-soft text-[9.17px] font-extrabold text-warn">
          FM
        </div>
        <div className="flex min-w-px flex-1 flex-col whitespace-nowrap">
          <p className="text-[9.93px] font-bold text-ink">Fitz Martin</p>
          <p className="text-[9.17px] font-medium text-muted">BSIT · 3rd year</p>
        </div>
      </div>
    </div>
  );
}

function ListingCard({ listing }: { listing: Listing }) {
  const deadline = deadlineTones[listing.deadline.tone];
  return (
    <div className="flex w-full flex-col gap-[12.222px] rounded-[16px] border-[0.764px] border-border bg-surface p-[15.278px]">
      <div className="flex w-full items-center gap-[9.167px]">
        <div
          className={`flex size-[33.611px] shrink-0 items-center justify-center rounded-[10px] text-[10.69px] font-extrabold ${logoTones[listing.tone]}`}
        >
          {listing.initials}
        </div>
        <div className="flex min-w-px flex-1 flex-col gap-[1.528px]">
          <p className="text-[9.93px] font-medium text-muted">{listing.company}</p>
          <p className="text-[12.22px] font-bold text-ink">{listing.role}</p>
        </div>
        <Icon name="previewBookmark" />
      </div>
      <div className="flex w-full flex-wrap gap-[4.583px]">
        {listing.tags.map((tag, index) => (
          <span
            key={tag}
            className="flex items-center gap-[3.056px] rounded-full bg-surface-alt px-[7.639px] py-[3.819px] text-[9.17px] font-medium whitespace-nowrap text-ink"
          >
            {index === 0 && <Icon name="previewPin" />}
            {tag}
          </span>
        ))}
      </div>
      <div className="h-[0.764px] w-full bg-border" />
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-[4.583px] text-[9.17px] font-medium whitespace-nowrap text-muted">
          <Icon name="previewClock" />
          Starts {listing.starts}
        </div>
        <span
          className={`flex items-center gap-[4.583px] rounded-full px-[7.639px] py-[3.056px] text-[9.17px] font-semibold whitespace-nowrap ${deadline.box}`}
        >
          <Asset src={deadline.dot} width={4.583} />
          {listing.deadline.label}
        </span>
      </div>
    </div>
  );
}

function Main() {
  return (
    <div className="flex min-h-[782.222px] min-w-px flex-1 flex-col gap-[18.333px] px-[30.556px] py-[24.444px]">
      <div className="flex w-full items-center gap-[12.222px]">
        <div className="flex min-w-px flex-1 flex-col gap-[3.056px]">
          <p className="text-[22.917px] font-extrabold whitespace-nowrap text-ink">Internships</p>
          <p className="text-[10.694px] font-medium text-muted">42 open listings · 3 added by classmates today</p>
        </div>
        <div className="flex w-[244.444px] shrink-0 items-center gap-[7.639px] rounded-[7.639px] border-[0.764px] border-border bg-surface px-[10.694px] py-[8.403px]">
          <Icon name="previewSearch" />
          <p className="text-[10.694px] whitespace-nowrap text-subtle">Search company, role, or skill</p>
        </div>
        <div className="shrink-0 rounded-[10px] bg-primary px-[12.222px] py-[7.639px] text-[10.69px] font-semibold whitespace-pre text-on-primary">
          {"+  Add listing"}
        </div>
      </div>

      <div className="flex w-full items-center gap-[9.167px] rounded-[10.694px] bg-ai-soft px-[13.75px] py-[10.694px]">
        <Icon name="previewBanner" />
        <div className="flex min-w-px flex-1 flex-col gap-[1.528px]">
          <p className="text-[10.694px] font-bold whitespace-nowrap text-ai">5 listings match your profile</p>
          <p className="text-[9.931px] text-ink">
            Based on your course (BSIT), skills (React, Figma, SQL) and preference for paid, hybrid roles.
          </p>
        </div>
        <div className="shrink-0 rounded-[10px] bg-ai px-[12.222px] py-[7.639px] text-[10.69px] font-semibold whitespace-nowrap text-on-primary">
          See For You
        </div>
      </div>

      <div className="flex w-full flex-col gap-[12.222px] rounded-[12.222px] border-[0.764px] border-border bg-surface p-[15.278px]">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-[6.111px] text-[12.222px] font-bold whitespace-nowrap text-ink">
            <Icon name="previewClosing" />
            Closing soon
          </div>
          <div className="flex items-center gap-[4.583px] text-[9.931px] font-semibold whitespace-nowrap text-primary">
            Open calendar
            <Icon name="previewArrow" />
          </div>
        </div>
        <div className="flex w-full items-start gap-[9.167px]">
          {closingSoon.map((item) => (
            <div
              key={item.company}
              className={`flex min-w-px flex-1 items-center gap-[10.694px] rounded-[9.167px] p-[10.694px] ${closingTones[item.tone].box}`}
            >
              <div className={`flex shrink-0 flex-col items-center whitespace-nowrap ${closingTones[item.tone].days}`}>
                <p className="text-[19.861px] font-extrabold">{item.days}</p>
                <p className="text-[8.403px] font-semibold">days left</p>
              </div>
              <div className="flex min-w-px flex-1 flex-col gap-[1.528px]">
                <p className="w-full text-[9.931px] font-bold text-ink">{item.company}</p>
                <p className="w-full text-[9.167px] font-medium text-muted">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-wrap items-center gap-[6.111px]">
        <div className="flex items-center gap-[4.583px] px-[3.056px] text-[9.931px] font-semibold whitespace-nowrap text-muted">
          <Icon name="previewFilter" />
          Filter
        </div>
        <div className={pillSolid}>
          Course: BSIT
          <Icon name="previewChevCourse" />
        </div>
        <div className={pillSolid}>Paid only</div>
        <div className={pillOutline}>Hybrid / Remote</div>
        <div className={pillOutline}>OJT credit</div>
        <div className={pillOutline}>Has MOA with school</div>
        <div className={pillOutline}>
          Location
          <Icon name="previewChevLocation" />
        </div>
        <div className="h-[0.764px] min-w-px flex-1" />
        <div className={pillOutline}>
          Sort: Deadline soonest
          <Icon name="previewChevSort" />
        </div>
      </div>

      <div className="flex w-full items-center justify-between">
        <p className="text-[13.75px] font-bold whitespace-nowrap text-ink">All listings</p>
        <div className="flex items-center gap-[4.583px] text-[9.931px] font-medium whitespace-nowrap text-muted">
          <Icon name="previewUsers" />
          Verified by 12 classmates this week
        </div>
      </div>

      <div className="grid w-full grid-cols-3 items-start gap-[12.222px]">
        {listings.map((listing) => (
          <ListingCard key={listing.company} listing={listing} />
        ))}
      </div>
    </div>
  );
}

export function ProductPreview() {
  return (
    <div aria-hidden="true" className="flex w-[1100px] max-w-full flex-col items-center overflow-clip pt-10">
      <div className="relative h-[640px] w-full shrink-0 overflow-clip rounded-t-[20px] border border-border bg-surface shadow-[0_24px_60px_rgba(23,23,28,0.12)]">
        <div className="absolute -top-px -left-px flex w-[1100px] items-start overflow-clip bg-bg">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
}
