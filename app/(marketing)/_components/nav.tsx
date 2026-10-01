import { Asset } from "@/components/ui/asset";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#ai", label: "AI" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="flex items-center gap-10 bg-bg px-6 py-5 lg:px-[120px]">
      <a href="#top" className="flex shrink-0 items-center gap-2.5" aria-label="Trax home">
        <Asset src="/landing/trax-mark-nav.svg" width={34} />
        <span className="text-[22px] font-extrabold tracking-[-0.03em] text-ink">
          Tra<span className="text-warn">x</span>
        </span>
      </a>
      <nav aria-label="Primary" className="hidden min-w-px flex-1 items-center justify-center gap-8 md:flex">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="text-[15px] font-semibold text-muted hover:text-ink">
            {link.label}
          </a>
        ))}
      </nav>
      <div className="ml-auto flex shrink-0 items-center gap-2.5 md:ml-0">
        <Button variant="secondary">Sign in</Button>
        <Button>Get started</Button>
      </div>
    </header>
  );
}
