import { Asset } from "./icon";

const links = [
  { href: "#features", label: "Features" },
  { href: "#faq", label: "FAQ" },
  { href: "#", label: "Privacy" },
  { href: "#", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-border bg-surface px-6 py-10 lg:px-[120px]">
      <div className="flex shrink-0 items-center gap-2.5">
        <Asset src="/landing/trax-mark-footer.svg" width={28} />
        <span className="text-[18px] font-extrabold tracking-[-0.03em] text-ink">
          Tra<span className="text-warn">x</span>
        </span>
      </div>
      <p className="min-w-px flex-1 text-[14px] font-medium text-muted">Made by students, for OJT season.</p>
      <nav aria-label="Footer" className="flex gap-6">
        {links.map((link) => (
          <a key={link.label} href={link.href} className="text-[14px] font-semibold text-muted hover:text-ink">
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  );
}
