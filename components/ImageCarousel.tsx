"use client";

import { useState, useRef, useEffect, useCallback } from "react";

interface Img { src: string; alt?: string; }
interface Props { images?: Img[]; onImageClick?: (i: number) => void; }

export default function ImageCarousel({ images = [], onImageClick }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const w = el.clientWidth;
        if (!w) return;
        setIdx((c) => { const n = Math.round(el.scrollLeft / w); return c === n ? c : n; });
      });
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => { el.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const go = useCallback((i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: Math.max(0, Math.min(images.length - 1, i)) * el.clientWidth, behavior: "smooth" });
  }, [images.length]);

  if (!images.length) return null;

  return (
    <div className="mc-carousel">
      <div className="mc-carousel__viewport">
        <div className="mc-carousel__track" ref={trackRef}>
          {images.map((img, i) => (
            <div key={i} className="mc-carousel__slide">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.src} alt={img.alt || ""} draggable={false}
                onClick={() => onImageClick?.(i)}
                style={onImageClick ? { cursor: "zoom-in" } : undefined} />
            </div>
          ))}
        </div>
        <button className="mc-arrow mc-arrow--prev" onClick={() => go(idx - 1)} disabled={idx <= 0} aria-label="Previous">
          <svg viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="mc-arrow mc-arrow--next" onClick={() => go(idx + 1)} disabled={idx >= images.length - 1} aria-label="Next">
          <svg viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
      <div className="mc-dots">
        {images.map((_, i) => (
          <button key={i} className={"mc-dot" + (i === idx ? " mc-dot--active" : "")} onClick={() => go(i)} aria-label={`Slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
