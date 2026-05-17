"use client";

import { useEffect } from "react";

interface Props { open: boolean; src: string; alt?: string; onClose: () => void; }

export default function Lightbox({ open, src, alt, onClose }: Props) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="mc-lightbox" role="dialog" aria-modal="true"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <button className="mc-lightbox__close" onClick={onClose} aria-label="Close">
        <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="mc-lightbox__img" src={src} alt={alt || ""} />
    </div>
  );
}
