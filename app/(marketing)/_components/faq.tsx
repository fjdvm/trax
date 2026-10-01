"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Icon } from "./icon";

// Only the first answer is drawn in the Figma file. The other answers are
// worded from the rest of the page copy and the domain glossary; confirm them.
const questions = [
  {
    question: "Is Trax free?",
    answer: "Yes, for students. Your class signs in with school emails and starts posting.",
  },
  {
    question: "Who can post and verify listings?",
    answer:
      "Any classmate signed in with their school account can post an internship. Moderators, trusted classmates, review hidden listings and close the ones that are no longer open.",
  },
  {
    question: "What does “MOA ✓” mean?",
    answer: "The company has a memorandum of agreement with your school, so the internship can count toward your OJT.",
  },
  {
    question: "Can my classmates see where I applied?",
    answer: "No. Your application status stays private.",
  },
  {
    question: "Does the AI make things up?",
    answer:
      "AI fills in a listing from the posting, then the classmate who posts it checks it first. Match scores always come with reasons you can verify.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="flex scroll-mt-4 flex-col items-center gap-10 bg-bg px-6 py-[112px] lg:px-[120px]">
      <Reveal>
        <h2 className="text-center text-[32px] leading-[1.15] font-extrabold tracking-[-0.02em] text-ink lg:text-[44px]">
          Questions
        </h2>
      </Reveal>
      <ul className="flex w-full max-w-[840px] flex-col gap-3">
        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <li key={item.question}>
              <Reveal delay={index * 80}>
                <div className="rounded-[16px] border border-border bg-surface transition duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(22,24,29,0.06)]">
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${index}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${index}`}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center gap-4 px-6 py-[22px] text-left text-[18px] font-bold text-ink"
                    >
                      <span className="min-w-px flex-1">{item.question}</span>
                      <Icon name="faqPlus" className={`transition-transform ${isOpen ? "rotate-45" : ""}`} />
                    </button>
                  </h3>
                  <div
                    id={`faq-a-${index}`}
                    role="region"
                    aria-labelledby={`faq-q-${index}`}
                    hidden={!isOpen}
                    className="px-6 pb-[22px]"
                  >
                    <p className="text-[16px] leading-normal text-muted">{item.answer}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
