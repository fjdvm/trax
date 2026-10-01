// Each entry mirrors how the Figma icon frame places its exported vector:
// `size` is the icon box, `inset` positions the vector group inside it and
// `bleed` is the negative inset that makes room for the stroke.
type IconSpec = { src: string; size: number; inset: string; bleed: string };

const dir = "/landing";
const sparklesInset = "12.5% 12.5% 29.17% 20.83%";
const bellInset = "8.33% 12.5% 8.31% 12.5%";

export const ICONS = {
  // Product preview
  previewGrid: { src: `${dir}/hero-grid.svg`, size: 13.75, inset: "12.5%", bleed: "-7.41%" },
  previewCalendar: { src: `${dir}/hero-calendar.svg`, size: 13.75, inset: "8.33% 12.5%", bleed: "-6.67% -7.41%" },
  previewSparkles: { src: `${dir}/hero-sparkles-nav.svg`, size: 13.75, inset: sparklesInset, bleed: "-9.52% -8.33%" },
  previewKanban: { src: `${dir}/hero-kanban.svg`, size: 13.75, inset: "12.5%", bleed: "-7.41%" },
  previewPlus: { src: `${dir}/hero-plus.svg`, size: 13.75, inset: "20.83%", bleed: "-9.52%" },
  previewBell: { src: `${dir}/hero-bell.svg`, size: 13.75, inset: bellInset, bleed: "-6.66% -7.41%" },
  previewSearch: { src: `${dir}/hero-search.svg`, size: 13.75, inset: "12.5% 12.51% 12.5% 12.5%", bleed: "-7.41%" },
  previewBanner: { src: `${dir}/hero-sparkles-banner.svg`, size: 15.278, inset: sparklesInset, bleed: "-8.57% -7.5%" },
  previewClosing: { src: `${dir}/hero-calendar-closing.svg`, size: 13.75, inset: "8.33% 12.5%", bleed: "-6.67% -7.4% -6.67% -7.41%" },
  previewArrow: { src: `${dir}/hero-arrow.svg`, size: 10.694, inset: "20.83% 20.83% 20.83% 20.84%", bleed: "-12.24%" },
  previewFilter: { src: `${dir}/hero-filter.svg`, size: 12.222, inset: "12.5% 8.34% 12.5% 8.33%", bleed: "-8.33% -7.5%" },
  previewChevCourse: { src: `${dir}/hero-chev-course.svg`, size: 10.694, inset: "37.5% 25%", bleed: "-28.57% -14.29%" },
  previewChevLocation: { src: `${dir}/hero-chev-location.svg`, size: 10.694, inset: "37.5% 25%", bleed: "-28.57% -14.29% -28.57% -14.28%" },
  previewChevSort: { src: `${dir}/hero-chev-sort.svg`, size: 10.694, inset: "37.5% 25%", bleed: "-28.57% -14.29% -28.57% -14.28%" },
  previewUsers: { src: `${dir}/hero-users.svg`, size: 12.222, inset: "12.5% 8.33%", bleed: "-8.33% -7.5%" },
  previewBookmark: { src: `${dir}/hero-bookmark.svg`, size: 15.278, inset: "12.5% 20.83%", bleed: "-6.67% -8.57%" },
  previewPin: { src: `${dir}/hero-pin.svg`, size: 9.167, inset: "8.33% 16.67%", bleed: "-10% -12.5%" },
  previewClock: { src: `${dir}/hero-clock.svg`, size: 10.694, inset: "8.33%", bleed: "-8.57%" },
  // Problem
  problemChat: { src: `${dir}/problem-chat.svg`, size: 22, inset: "12.5%", bleed: "-6.06%" },
  problemClock: { src: `${dir}/problem-clockx.svg`, size: 22, inset: "8.33%", bleed: "-5.45%" },
  problemUnlink: { src: `${dir}/problem-unlink.svg`, size: 22, inset: "8.33%", bleed: "-5.45%" },
  // Features
  featureGrid: { src: `${dir}/feature-grid.svg`, size: 24, inset: "12.5%", bleed: "-5.56%" },
  featureBell: { src: `${dir}/feature-bell.svg`, size: 24, inset: bellInset, bleed: "-5% -5.56%" },
  featureSparkles: { src: `${dir}/feature-sparkles.svg`, size: 24, inset: sparklesInset, bleed: "-7.14% -6.25%" },
  featureKanban: { src: `${dir}/feature-kanban.svg`, size: 24, inset: "12.5%", bleed: "-5.56%" },
  // AI
  aiSparkles: { src: `${dir}/ai-sparkles.svg`, size: 18, inset: sparklesInset, bleed: "-9.52% -8.33%" },
  aiCheck: { src: `${dir}/ai-check.svg`, size: 13, inset: "25% 16.67% 29.17% 16.67%", bleed: "-16.78% -11.54%" },
  matchCheck: { src: `${dir}/match-check.svg`, size: 14, inset: "25% 16.67% 29.17% 16.67%", bleed: "-15.58% -10.71%" },
  matchAlert: { src: `${dir}/match-alert.svg`, size: 14, inset: "12.31% 6.38% 12.5% 6.38%", bleed: "-9.5% -8.19%" },
  // FAQ
  faqPlus: { src: `${dir}/faq-plus.svg`, size: 20, inset: "20.83%", bleed: "-8.57%" },
} as const satisfies Record<string, IconSpec>;

export type IconName = keyof typeof ICONS;
