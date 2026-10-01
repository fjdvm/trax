import { AiSection } from "./_components/landing/ai-section";
import { Cta } from "./_components/landing/cta";
import { Faq } from "./_components/landing/faq";
import { Features } from "./_components/landing/features";
import { Footer } from "./_components/landing/footer";
import { Hero } from "./_components/landing/hero";
import { HowItWorks } from "./_components/landing/how-it-works";
import { Nav } from "./_components/landing/nav";
import { Problem } from "./_components/landing/problem";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Features />
        <HowItWorks />
        <AiSection />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
