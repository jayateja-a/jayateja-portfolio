"use client";

import { useState } from "react";
import { careerContext } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function CareerContext() {
  const [open, setOpen] = useState(0);

  return (
    <section id="context" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10">
      <SectionHeading
        index="05"
        eyebrow="Career context"
        title="The questions recruiters usually ask next."
        copy="Contract completion, graduate study, and the next chapter."
      />
      <div className="overflow-hidden rounded-[28px] border border-[#e4e8ff]/10 bg-[#12162c]/95">
        {careerContext.map((item, i) => {
          const active = open === i;
          return (
            <div key={item.question} className="border-b border-[#e4e8ff]/8 last:border-b-0">
              <button
                type="button"
                onClick={() => setOpen(active ? -1 : i)}
                aria-expanded={active}
                className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-7"
              >
                <span className="text-base font-medium text-[#e4e8ff]">{item.question}</span>
                <span className={`grid size-8 shrink-0 place-items-center rounded-full border border-[#e4e8ff]/10 font-mono text-sm text-[#8e9dff] transition ${active ? "rotate-45 bg-[#181f3a]" : "bg-[#151a32]"}`}>+</span>
              </button>
              {active && <div className="px-5 pb-6 sm:px-7"><p className="max-w-4xl text-base leading-7 text-[#aab6d4]">{item.answer}</p></div>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
