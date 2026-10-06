"use client";

import { useRef, type MouseEvent, type ReactNode } from "react";

export function SpotlightCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(event: MouseEvent<HTMLDivElement>) {
    const box = ref.current?.getBoundingClientRect();
    if (!box || !ref.current) return;
    ref.current.style.setProperty("--mx", `${event.clientX - box.left}px`);
    ref.current.style.setProperty("--my", `${event.clientY - box.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={`spotlight-card ${className}`}>
      {children}
    </div>
  );
}
