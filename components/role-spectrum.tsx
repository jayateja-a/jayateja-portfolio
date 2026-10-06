import { roleLenses } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";

export function RoleSpectrum() {
  return (
    <section id="roles" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10">
      <SectionHeading
        index="01"
        eyebrow="Engineering range"
        title="Different job titles. One problem-solving core."
        copy="My strongest work happens where product needs cross boundaries: backend, interface, data, cloud, deployment, and production behavior."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {roleLenses.map((role, i) => (
          <article key={role.code} className="group relative overflow-hidden rounded-[28px] border border-[#e4e8ff]/10 bg-[#12162c]/95 p-6 shadow-[0_18px_55px_rgba(30,48,74,.06)] backdrop-blur sm:p-7">
            <div className="absolute right-5 top-3 font-mono text-[72px] font-bold leading-none tracking-[-.08em] text-[#8e9dff]/[.045]">{role.code}</div>
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <span className="grid size-9 place-items-center rounded-xl border border-[#8e9dff]/15 bg-[#181f3a] font-mono text-[12px] font-semibold text-[#8e9dff]">0{i + 1}</span>
                <p className="font-mono text-[12px] uppercase tracking-[.18em] text-[#a0acce]">role lens</p>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-.035em] text-[#e4e8ff]">{role.title}</h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#aab6d4]">{role.description}</p>
              <div className="mt-7 border-t border-[#e4e8ff]/8 pt-4 font-mono text-[12px] leading-5 text-[#89b7ee]">{role.evidence}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
