"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/site-data";
import { Github, Linkedin, Mail, Phone, TerminalIcon } from "./icons";
import { TerminalPanel } from "./terminal-panel";

export function SiteNav() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  useEffect(() => {
    const launch = (e: MouseEvent) => { if ((e.target as HTMLElement).closest("[data-open-terminal]")) setTerminalOpen(true); };
    document.addEventListener("click", launch);
    return () => document.removeEventListener("click", launch);
  }, []);
  const contacts = [
    { label: "GitHub", href: siteConfig.github, icon: Github },
    { label: "LinkedIn", href: siteConfig.linkedin, icon: Linkedin },
    { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
    { label: "Phone", href: `tel:${siteConfig.phoneHref}`, icon: Phone },
  ];

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-[#e4e8ff]/10 bg-[#111429]/85 px-3 py-2.5 shadow-[0_12px_40px_rgba(37,50,68,.08)] backdrop-blur-xl sm:px-4" aria-label="Primary navigation">
          <a href="#top" className="group flex items-center gap-2.5 rounded-xl px-1 py-1" aria-label={`${siteConfig.name} home`}>
            <span className="grid size-8 place-items-center rounded-lg border border-[#8e9dff]/20 bg-[#1b2040] font-mono text-xs font-bold text-[#8e9dff] transition group-hover:rotate-3">{siteConfig.shortName}</span>
            <span className="hidden font-mono text-[12px] text-[#a9b2cc] md:block"><span className="text-[#8e9dff]">~/</span>portfolio</span>
          </a>

          <div className="hidden items-center gap-1 xl:flex">
            {["roles", "work", "journey", "education", "skills", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className="rounded-lg px-2.5 py-2 font-mono text-[12px] text-[#aab5d0] transition hover:bg-[#171d3b]/5 hover:text-[#e4e8ff]">/{item}</a>
            ))}
          </div>

          <div className="flex items-center gap-1">
            {contacts.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} className="grid size-9 place-items-center rounded-xl text-[#b1bad4] transition hover:bg-[#171d3b]/6 hover:text-[#8e9dff] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8e9dff]">
                <Icon className="size-4" />
              </a>
            ))}
            <button onClick={() => setTerminalOpen(true)} className="ml-1 flex h-9 items-center gap-2 rounded-xl border border-[#8e9dff]/15 bg-[#1b2040] px-3 font-mono text-[12px] text-[#8e9dff] transition hover:bg-[#242d53] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8e9dff]" aria-label="Open terminal mode">
              <TerminalIcon className="size-4"/><span className="hidden sm:inline">terminal</span>
            </button>
          </div>
        </nav>
      </header>
      <TerminalPanel open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}
