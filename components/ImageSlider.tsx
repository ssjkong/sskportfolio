"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Props { before: string; after: string; beforeAlt?: string; afterAlt?: string; }

export default function ImageSlider({ before, after, beforeAlt = "Before", afterAlt = "After" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const [drag, setDrag] = useState(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  }, []);

  useEffect(() => {
    if (!drag) return;
    const onMove = (e: MouseEvent | TouchEvent) => move("touches" in e ? e.touches[0].clientX : e.clientX);
    const onUp   = () => setDrag(false);
    window.addEventListener("mousemove", onMove as EventListener);
    window.addEventListener("mouseup",   onUp);
    window.addEventListener("touchmove", onMove as EventListener, { passive: true });
    window.addEventListener("touchend",  onUp);
    return () => {
      window.removeEventListener("mousemove", onMove as EventListener);
      window.removeEventListener("mouseup",   onUp);
      window.removeEventListener("touchmove", onMove as EventListener);
      window.removeEventListener("touchend",  onUp);
    };
  }, [drag, move]);

  const onDown = (e: React.MouseEvent | React.TouchEvent) => {
    setDrag(true);
    move("touches" in e ? e.touches[0].clientX : e.clientX);
  };

  return (
    <div ref={ref} className="mc-slider" style={{ ["--mc-pos" as string]: pos + "%" }}
      onMouseDown={onDown} onTouchStart={onDown}
      role="slider" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(pos)}
      aria-label="Before and after comparison" tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft")  setPos((p) => Math.max(0,   p - 4));
        if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="mc-slider__img" src={before} alt={beforeAlt} draggable={false} />
      <div className="mc-slider__after-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="mc-slider__img" src={after} alt={afterAlt} draggable={false} />
      </div>
      <span className="mc-slider__label mc-slider__label--before">BEFORE</span>
      <span className="mc-slider__label mc-slider__label--after">AFTER</span>
      <div className="mc-slider__line" aria-hidden="true" />
      <div className="mc-slider__knob" aria-hidden="true">
        <svg viewBox="0 0 24 24"><polyline points="9 6 4 12 9 18"/><polyline points="15 6 20 12 15 18"/></svg>
      </div>
    </div>
  );
}
