import { careerJourney } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function CareerJourney() {
  return (
    <section id="journey" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10">
      <SectionHeading
        index="03"
        eyebrow="Career journey"
        title="A progression of harder engineering problems."
        copy="From railway systems to healthcare platforms: the problems, decisions, and outcomes behind each chapter."
      />

      <div className="relative ml-2 border-l border-[#8e9dff]/18 pl-6 sm:ml-5 sm:pl-10">
        {careerJourney.map((item, index) => (
          <article key={`${item.company}-${item.period}`} className="relative pb-14 last:pb-0">
            <span className="absolute -left-[31px] top-2 size-3 rounded-full border-[3px] border-[#080a18] bg-[#8e9dff] sm:-left-[47px]" />
            <div className="grid gap-5 lg:grid-cols-[220px_1fr]">
              <div>
                <p className="font-mono text-[12px] uppercase tracking-[.16em] text-[#8e9dff]">{item.period}</p>
                <h3 className="mt-3 text-lg font-semibold text-[#e4e8ff]">{item.company}</h3>
                <p className="mt-1 text-sm text-[#a6b2d2]">{item.title}</p>
                <span className="mt-4 inline-flex rounded-full border border-[#e4e8ff]/10 bg-[#12162c]/95 px-3 py-1.5 font-mono text-[12px] uppercase tracking-[.13em] text-[#a8b6d5]">{item.kind}</span>
              </div>

              <div className="rounded-[28px] border border-[#e4e8ff]/10 bg-[#12162c]/95 p-6 shadow-[0_18px_55px_rgba(30,48,74,.05)] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[12px] uppercase tracking-[.16em] text-[#68dbd2]">chapter {String(index + 1).padStart(2, "0")}</p>
                    <h4 className="mt-2 max-w-2xl text-2xl font-semibold tracking-[-.035em] text-[#e4e8ff]">{item.chapter}</h4>
                  </div>
                  <span className="hidden font-mono text-xs text-[#7482a5] sm:block">↗ {index + 1}</span>
                </div>
                <p className="mt-5 max-w-3xl text-base leading-7 text-[#aab6d4]">{item.story}</p>
                <div className="mt-7 grid gap-3">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="flex gap-3 rounded-2xl bg-[#0e1228] px-4 py-3 text-base leading-7 text-[#bac5df]">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#55dfd0]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.stack.map((tech) => <span key={tech} className="rounded-full border border-[#8e9dff]/10 bg-[#181f3a]/70 px-2.5 py-1 font-mono text-[12px] text-[#afbee3]">{tech}</span>)}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
