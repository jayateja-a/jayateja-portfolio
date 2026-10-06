import { siteConfig } from "@/lib/site-data";

export function Footer() {
  return <footer className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-[#e4e8ff]/10 px-5 py-8 font-mono text-[12px] uppercase tracking-[.12em] text-[#9faccb] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>Java · Cloud · Full Stack · Applied AI</span></footer>;
}
