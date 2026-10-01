import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="bg-bg px-6 pb-[112px] lg:px-[120px]">
      <Reveal className="flex flex-col items-center gap-5 rounded-[32px] bg-primary px-6 py-[72px] lg:px-16">
        <h2 className="max-w-[760px] text-center text-[32px] leading-[1.15] font-extrabold tracking-[-0.02em] text-on-primary lg:text-[44px]">
          Get your class on Trax before the next deadline.
        </h2>
        <p className="max-w-[600px] text-center text-[18px] leading-normal font-medium text-on-primary opacity-85">
          Set it up in 5 minutes. Share the invite link in your group chat. Done.
        </p>
        <div className="flex flex-wrap items-start justify-center gap-3 pt-2">
          <Button size="lg" variant="inverse">
            Start your class board
          </Button>
          <Button size="lg" variant="outline">
            See a demo
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
