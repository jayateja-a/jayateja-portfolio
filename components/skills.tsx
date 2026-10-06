import { skillGroups } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10">
      <SectionHeading index="06" eyebrow="Capability map" title="The stack, organized by engineering responsibility." copy="Explore the tools behind the projects — from product interfaces to production infrastructure." />
      <div className="grid overflow-hidden rounded-[28px] border border-[#e4e8ff]/10 bg-[#11162c] md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="group relative min-h-60 border-b border-r border-[#e4e8ff]/8 p-6 transition hover:bg-[#1c2340]">
            <div className="flex items-center justify-between"><h3 className="text-sm font-semibold text-[#e4e8ff]">{group.title}</h3><span className="font-mono text-[12px] text-[#7783a4]">{group.marker}</span></div>
            <div className="mt-8 flex flex-wrap gap-x-4 gap-y-3">
              {group.skills.map((skill) => <span key={skill} className="font-mono text-xs text-[#aab5d0] transition group-hover:text-[#e0e7ff]"><span className="mr-1.5 text-[#55dfd0]">+</span>{skill}</span>)}
            </div>
            <span className="absolute bottom-0 left-0 h-px w-0 bg-[#8e9dff] transition-all duration-500 group-hover:w-full"/>
          </div>
        ))}
      </div>
    </section>
  );
}
