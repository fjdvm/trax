import { AiSection } from "./_components/ai-section";
import { Cta } from "./_components/cta";
import { Faq } from "./_components/faq";
import { Features } from "./_components/features";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { HowItWorks } from "./_components/how-it-works";
import { Nav } from "./_components/nav";
import { Problem } from "./_components/problem";

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
