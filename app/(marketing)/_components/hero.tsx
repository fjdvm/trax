import { ProductPreview } from "./product-preview";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="top" className="flex flex-col items-center gap-6 bg-bg px-6 pt-[72px] lg:px-[120px]">
      <Reveal>
        <Badge tone="info">Made for OJT season · Class of 2027</Badge>
      </Reveal>
      <Reveal delay={100}>
        <h1 className="max-w-[1000px] text-center text-[36px] leading-[1.12] font-extrabold tracking-[-0.02em] text-ink lg:text-[60px]">
          Every internship your class finds.
          <br />
          <span className="text-primary">One board. Zero missed deadlines.</span>
        </h1>
      </Reveal>
      <Reveal delay={200}>
        <p className="max-w-[720px] text-center text-[19px] leading-normal font-medium text-muted">
          Trax gathers the internships your classmates post into one shared board, reminds everyone before deadlines
          close, and uses AI to show which ones fit you best.
        </p>
      </Reveal>
      <Reveal delay={300} className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <Button size="lg">Sign in with school email</Button>
        <Button size="lg" variant="secondary" href="#how-it-works">
          See how it works
        </Button>
      </Reveal>
      <Reveal delay={400}>
        <p className="max-w-[800px] text-center text-[13px] font-medium whitespace-pre-wrap text-subtle">
          Free for students  ·  Works with your class group chat  ·  Your application status stays private
        </p>
      </Reveal>
      <Reveal delay={500} className="hidden w-full justify-center lg:flex">
        <ProductPreview />
      </Reveal>
    </section>
  );
}
