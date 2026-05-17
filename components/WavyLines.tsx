"use client";

import { useEffect, useRef } from "react";

export default function WavyLines() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const y = window.scrollY;
      el.style.transform = `translateY(${y * 0.6}px)`;
      el.style.opacity = String(Math.max(0, 1 - y / 600));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const path = "M 0 30 Q 80 0 160 30 T 320 30 T 480 30 T 640 30";
  const colors = [
    "var(--colors-rose-light)",
    "var(--colors-butter-light)",
    "var(--colors-mint-light)",
    "var(--colors-sky-light)",
  ];
  return (
    <div className="bg-wavy" ref={ref} aria-hidden="true">
      <svg viewBox="0 0 638 224" width="100%" height="100%" preserveAspectRatio="none">
        {([0, 56, 112, 168] as number[]).map((y, i) => (
          <path key={y} d={path} transform={`translate(0 ${y})`} fill="none"
            stroke={colors[i]} strokeWidth="7.8" strokeLinecap="round" />
        ))}
      </svg>
    </div>
  );
}
