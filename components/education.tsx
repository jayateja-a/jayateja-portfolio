import { education } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10">
      <SectionHeading
        index="04"
        eyebrow="Computer science foundation"
        title="Graduate study, connected to real systems."
        copy="The degree strengthened the theory behind the production problems I was already solving — security, data, cloud systems, software process, and applied AI."
      />
      <div className="grid gap-5 lg:grid-cols-[.82fr_1.18fr]">
        <div className="rounded-[30px] border border-[#e4e8ff]/10 bg-[#171d3b] p-7 text-white shadow-[0_24px_70px_rgba(24,49,83,.18)] sm:p-8">
          <p className="font-mono text-[12px] uppercase tracking-[.18em] text-[#9bb7f3]">{education.period}</p>
          <h3 className="mt-6 text-3xl font-semibold tracking-[-.045em]">{education.degree}</h3>
          <p className="mt-2 text-lg text-[#e1e8ff]">{education.school}</p>
          <p className="mt-1 text-sm text-[#a6b4d6]">{education.location}</p>
          <p className="mt-8 max-w-md text-base leading-7 text-[#aebada]">{education.note}</p>
          
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {education.clusters.map((cluster, i) => (
            <article key={cluster.title} className="rounded-[26px] border border-[#e4e8ff]/10 bg-[#12162c]/95 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-[#e4e8ff]">{cluster.title}</h3>
                <span className="font-mono text-[12px] text-[#8895b9]">0{i + 1}</span>
              </div>
              <div className="mt-6 space-y-3">
                {cluster.courses.map((course) => <div key={course} className="flex items-start gap-2 text-sm leading-5 text-[#aeb8d4]"><span className="mt-1 text-[#55dfd0]">↳</span>{course}</div>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
