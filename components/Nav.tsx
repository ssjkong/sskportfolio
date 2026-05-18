"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS = [
  { href: "/about",    label: "About"      },
  { href: "/approach", label: "Leadership" },
  { href: "/workshop", label: "Workshop"   },
];

const IconMenu = () => (
  <svg className="icon icon-24" viewBox="0 0 24 24">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);
const IconX = () => (
  <svg className="icon icon-24" viewBox="0 0 24 24">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const active = pathname.startsWith("/case-study") ? "" : pathname;

  return (
    <>
      <nav className="nav">
        <Link href="/" className="nav__brand" onClick={() => setOpen(false)}>Sharon S Kong</Link>
        <div className="nav__links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={"nav__link" + (active === l.href ? " nav__link--active" : "")}>
              {l.label}
            </Link>
          ))}
        </div>
        <button className="nav__menu" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? <IconX /> : <IconMenu />}
        </button>
      </nav>
      <div className={"mobile-menu" + (open ? " mobile-menu--open" : "")}>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className={"nav__link" + (active === l.href ? " nav__link--active" : "")} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
