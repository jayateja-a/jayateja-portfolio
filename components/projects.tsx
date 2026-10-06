"use client";

import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/lib/site-data";
import { ArrowUpRight, Github } from "./icons";
import { SectionHeading } from "./section-heading";
import { SpotlightCard } from "./spotlight-card";

const filters: ("All" | ProjectCategory)[] = ["All", "Java", "Python / AI", "Full Stack", "Cloud / DevOps"];

export function Projects() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = useMemo(() => active === "All" ? projects : projects.filter((p) => p.category === active), [active]);

  return (
    <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10">
      <SectionHeading index="02" eyebrow="Selected systems" title="Projects built around failure modes, not demos." copy="The common thread is engineering judgment: transaction safety, security telemetry, clinical interoperability, search, streaming, and deployable cloud systems." />

      <div className="mb-8 flex flex-wrap gap-2" role="group" aria-label="Project filters">
        {filters.map((filter) => <button key={filter} aria-pressed={active === filter} onClick={() => setActive(filter)} className={`rounded-full px-3.5 py-2 font-mono text-[12px] transition ${active === filter ? "bg-[#9aa8ff] text-[#0b1025]" : "border border-[#e4e8ff]/10 bg-[#11162c] text-[#aab5d0] hover:bg-[#1c2340] hover:text-[#e4e8ff]"}`}>{filter}</button>)}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {shown.map((project, i) => (
          <SpotlightCard key={project.title} className="group min-h-[330px] p-6 sm:p-7">
            <article className="flex h-full flex-col">
              <div className="flex items-start justify-between gap-5">
                <div><span className="font-mono text-[12px] uppercase tracking-[.18em] text-[#8e9dff]">0{i + 1} / {project.category}</span><h3 className="mt-3 text-2xl font-semibold tracking-[-.04em] text-[#e4e8ff]">{project.title}</h3></div>
                <span className="rounded-full border border-[#55dfd0]/16 bg-[#112d32] px-2.5 py-1 font-mono text-[12px] text-[#8ae9e0]">{project.signal}</span>
              </div>
              <p className="mt-5 max-w-xl text-base leading-7 text-[#aeb8d4]">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-md bg-[#171d3b]/[.055] px-2 py-1 font-mono text-[12px] text-[#a6b2d2]">{tag}</span>)}</div>
              <div className="mt-auto flex items-center gap-4 pt-8">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-medium text-[#afbbdc] transition hover:text-[#8e9dff]"><Github className="size-4"/> Source</a>
                <a href={project.live} className="inline-flex items-center gap-2 text-xs font-medium text-[#afbbdc] transition hover:text-[#8e9dff]">Context <ArrowUpRight className="size-4"/></a>
              </div>
            </article>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
