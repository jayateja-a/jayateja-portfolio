"use client";

import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type MouseEvent as ReactMouseEvent } from "react";
import { careerJourney, education, hobbies, skillGroups, projects, roleLenses, siteConfig } from "@/lib/site-data";

const help = ["help", "about", "roles", "skills", "projects", "journey", "education", "why-lightx", "hobbies", "contact", "clear"];

export function TerminalPanel({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [history, setHistory] = useState<string[]>([
    `Portfolio shell v2.0 — ${siteConfig.name}`,
    "Type 'help' to explore.",
  ]);
  const [input, setInput] = useState("");
  const field = useRef<HTMLInputElement>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const transcript = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => field.current?.focus(), 60);
    const listener = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Tab") {
        const targets = dialog.current?.querySelectorAll<HTMLElement>("button,input");
        if (!targets?.length) return;
        const first = targets[0], last = targets[targets.length-1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", listener);
    return () => {clearTimeout(timer); document.body.style.overflow = overflow; window.removeEventListener("keydown",listener); previous?.focus();};
  }, [open,onClose]);
  useEffect(() => { if (transcript.current) transcript.current.scrollTop = transcript.current.scrollHeight; }, [history]);

  if (!open) return null;

  function output(command: string) {
    switch (command) {
      case "help": return `commands: ${help.join(" · ")}`;
      case "about": return `${siteConfig.role} — ${siteConfig.headline}`;
      case "roles": return roleLenses.map((r) => `${r.code}: ${r.title} — ${r.evidence}`).join("\n");
      case "skills": return skillGroups.map(group => `${group.title}: ${group.skills.join(" · ")}`).join("\n");
      case "projects": return projects.map((p, i) => `${i + 1}. ${p.title} — ${p.signal}`).join("\n");
      case "journey": return careerJourney.map((c) => `${c.period} | ${c.company} | ${c.chapter}`).join("\n");
      case "education": return `${education.degree}, ${education.school} (${education.period})\nFocus: security, NLP/data, big data, cloud information management, software process.`;
      case "why-lightx": return "LightX was a full-time contract engagement. The agreed modernization, migration, cloud deployment, CI/CD, and handoff scope was successfully completed, and the contract concluded in May 2026.";
      case "hobbies": return hobbies.map((h) => h.name).join(" · ");
      case "contact": return `${siteConfig.email} · ${siteConfig.linkedin} · ${siteConfig.phoneDisplay}`;
      case "clear": return "__CLEAR__";
      default: return `command not found: ${command}. Try 'help'.`;
    }
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;
    const result = output(command);
    setHistory(result === "__CLEAR__" ? [] : (old) => [...old, `> ${input}`, result]);
    setInput("");
  }

  return (
    <div className="fixed inset-0 z-[80] grid place-items-center bg-[#171d3b]/35 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Interactive portfolio terminal" onMouseDown={(e: ReactMouseEvent<HTMLDivElement>) => e.currentTarget === e.target && onClose()}>
      <div ref={dialog} className="terminal-window w-full max-w-3xl overflow-hidden rounded-2xl border border-cyan-300/20 bg-[#03090b] shadow-[0_30px_100px_rgba(0,0,0,.55)]">
        <div className="flex items-center justify-between border-b border-white/8 bg-[#151a32]/[.03] px-4 py-3">
          <div className="flex gap-1.5" aria-hidden="true"><span className="size-2.5 rounded-full bg-rose-400/80"/><span className="size-2.5 rounded-full bg-amber-300/80"/><span className="size-2.5 rounded-full bg-emerald-300/80"/></div>
          <span className="font-mono text-[12px] text-slate-500">jayateja.portfolio — zsh</span>
          <button onClick={onClose} className="font-mono text-xs text-slate-300 hover:text-white" aria-label="Close terminal">esc</button>
        </div>
        <div ref={transcript} className="h-[min(460px,65svh)] overflow-y-auto p-5 font-mono text-base leading-7 text-slate-300">
          {history.map((line, i) => <pre key={i} className={line.startsWith(">") ? "whitespace-pre-wrap text-cyan-300" : "whitespace-pre-wrap text-slate-400"}>{line}</pre>)}
          <form onSubmit={submit} className="mt-1 flex items-center gap-2">
            <span className="text-cyan-300">❯</span>
            <input ref={field} value={input} onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} className="min-w-0 flex-1 bg-transparent text-white outline-none placeholder:text-slate-700" placeholder="help" aria-label="Terminal command" autoComplete="off" />
          </form>
        </div>
      </div>
    </div>
  );
}
