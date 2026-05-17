"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PasswordGate from "@/components/PasswordGate";
import ImageCarousel from "@/components/ImageCarousel";
import ImageSlider from "@/components/ImageSlider";
import Lightbox from "@/components/Lightbox";
import Reveal from "@/components/Reveal";
import WavyLines from "@/components/WavyLines";

const B = ({ children }: { children: React.ReactNode }) => <strong className="t-emph">{children}</strong>;

const IconArrowRight = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
);
const IconLock = () => (
  <svg className="icon" width="14" height="14" viewBox="0 0 24 24">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const SECTIONS = [
  { id: "challenge", num: "01" },
  { id: "strategy",  num: "02" },
  { id: "results",   num: "03" },
];

const beforeCarousel = [
  { src: "/images/magds-before-clientdetails.png", alt: "Meraki dashboard before Magnetic — client details" },
  { src: "/images/magds-before-01.png",            alt: "Meraki dashboard before Magnetic" },
];
const strategyCarousel1 = [
  { src: "/images/magds-ngdlandingpage.png",  alt: "Next Generation Dashboard landing page" },
  { src: "/images/magds-meetmagnetic.png",    alt: "Meet Magnetic — system introduction" },
  { src: "/images/magds-styletile.png",       alt: "Magnetic style tile — color, type, and spacing" },
];
const strategyCarousel2 = [
  { src: "/images/magds-statuses.png",  alt: "Magnetic status components" },
  { src: "/images/magds-grayscale.png", alt: "Grayscale audit of the dashboard" },
  { src: "/images/magds-layout.png",    alt: "Magnetic layout and grid system" },
];

function Subhead({ children }: { children: React.ReactNode }) {
  return <p className="t-b1" style={{ marginTop: 28, marginBottom: 8 }}>{children}</p>;
}

function MagdsContent() {
  const [lb, setLb] = useState<{ src: string; alt: string } | null>(null);
  const openLb  = useCallback((src: string, alt: string) => setLb({ src, alt }), []);
  const closeLb = useCallback(() => setLb(null), []);
  const [active, setActive] = useState("challenge");

  useEffect(() => {
    const onScroll = () => {
      let cur = "challenge";
      for (const s of SECTIONS) {
        const el = document.getElementById("cs-" + s.id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = s.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jump = (id: string) => {
    const el = document.getElementById("cs-" + id);
    if (el) window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - 100, behavior: "smooth" });
  };

  return (
    <main className="page">
      <WavyLines />
      <div className="page__col">

        {/* Header */}
        <section style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 24 }}>
          <Reveal>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span className="t-h5">CISCO MERAKI · 2019</span>
              <span style={{ color: "var(--colors-ink-light)" }}>|</span>
              <span className="t-h5">5 min read</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="t-h1">Building design systems for Meraki&apos;s enterprise networking dashboard</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="t-tagline">Design Systems Lead, Agency Design Manager</p>
          </Reveal>
          <Reveal delay={200}>
            <span className="lock" style={{ marginTop: 12, alignSelf: "flex-start" }}>
              <IconLock />
            </span>
          </Reveal>
        </section>

        {/* Hero image */}
        <Reveal delay={120}>
          <div className="csmedia mc-thumb" style={{ marginTop: 40, aspectRatio: "800/500" }}
            onClick={() => openLb("/images/magds.png", "Magnetic design system")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/magds.png" alt="Magnetic design system" />
          </div>
        </Reveal>

        {/* Body — narrow column */}
        <div style={{ maxWidth: 640, margin: "40px auto 0", display: "flex", flexDirection: "column", gap: 32 }}>

          {/* Summary */}
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span className="t-h5">CHALLENGE</span>
              <p className="t-b2">Cisco Meraki&apos;s dashboard had over 10 years of technical debt with no comprehensive design system or component library. Teams were reliant on tribal knowledge and followed the system at-will, leading to an inconsistent and outdated user experience.</p>
            </div>
          </Reveal>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span className="t-h5">STRATEGY</span>
              <p className="t-b2">I drove organizational alignment from initial pitch through scaled adoption. I built and led a cross-functional design systems team from scratch and gathered buy-in from every distinct product group at Meraki.</p>
            </div>
          </Reveal>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span className="t-h5">RESULTS</span>
              <p className="t-b2">Improved overall experience of the dashboard, changed the way teams worked at Meraki and beyond.</p>
            </div>
          </Reveal>

          <hr className="divider" style={{ margin: "8px 0" }} />

          {/* ── 01 CHALLENGE ── */}
          <section id="cs-challenge" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Reveal><div className="cblock cblock--rose" /></Reveal>
            <Reveal delay={50}><span className="t-h5">01 / CHALLENGE</span></Reveal>
            <Reveal delay={80}><h2 className="t-h2" style={{ marginTop: -8 }}>A Dashboard struggling to scale</h2></Reveal>

            <Reveal delay={120}>
              <p className="t-b2">
                Meraki was founded in 2006 with an enterprise Dashboard that had <B>no design systems or component library</B>, building fast and growing even faster. Cut to 2019: the platform had 70 software engineers for every one designer and suffered from <B>organic, uncoordinated growth</B>. It served as the networking management hub for thousands of enterprise networks worldwide, from Starbucks to IHG Hotels (Holiday Inn) and now, the <B>lack of consistency was costing us</B>.
              </p>
            </Reveal>

            <Reveal>
              <div className="csmedia mc-thumb" onClick={() => openLb("/images/magds-problem.png", "Visual audit — inconsistent UI across the dashboard")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/magds-problem.png" alt="Visual audit of inconsistent UI" />
              </div>
            </Reveal>

            <Reveal>
              <p className="t-b2">
                Designers worked from <B>personal files</B> and <B>tribal knowledge</B>. Engineers made judgment calls on spacing, color, and typography independently, <B>often diverging from one another</B>. The codebase had accumulated more than 70 unique shades of gray and over 30 distinct blues, sometimes hardcoded in-line. <B>Every team was effectively building in isolation</B>, and it showed.
              </p>
            </Reveal>
            <Reveal>
              <p className="t-b2">
                The product&apos;s visual language <B>hadn&apos;t meaningfully evolved</B> since the early 2000s. The dated interface <B>wasn&apos;t engaging for new customers</B> and cost us deals. Internally, the lack of shared standards made <B>onboarding slow, collaboration harder than it needed to be</B>, and <B>constrained new feature developments</B>.
              </p>
            </Reveal>

            <Reveal>
              <ImageCarousel images={beforeCarousel} onImageClick={(i) => openLb(beforeCarousel[i].src, beforeCarousel[i].alt)} />
            </Reveal>

            <Reveal>
              <p className="t-b2">
                I joined Meraki in 2017 and began championing the need for a centralized design system and component library from day one. In 2019, I led the entire organization <B>to adopt a design system and component library</B> and <B>built a team to manage and grow the system</B> so that it would outlive us. Together, we transformed Meraki&apos;s dashboard to be more modern and consistent, made onboarding and development faster and easier, and <B>systematized the library itself</B>.
              </p>
            </Reveal>
            <Reveal>
              <p className="t-b2">
                Other Cisco business units began to ask about the work. More than <B>5 distinct businesses under the Cisco label use the design system today</B>.
              </p>
            </Reveal>

            <Reveal>
              <div className="quote-card">
                <p className="quote-card__body">
                  &ldquo;Originating from the Meraki team … Magnetic has a simple, intuitive, and beautiful design, making it the ideal choice for bringing cohesion to the thousands of interfaces and screens across our products.&rdquo;
                </p>
                <p className="quote-card__attr">— <strong>Greg Petroff,</strong> Chief Design Officer at Cisco Security Business Group (Duo, Firewalls, ISE, SSE, Hypershield, XDR)</p>
              </div>
            </Reveal>
          </section>

          {/* ── 02 STRATEGY ── */}
          <section id="cs-strategy" style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
            <Reveal><div className="cblock cblock--butter" /></Reveal>
            <Reveal delay={50}><span className="t-h5">02 / STRATEGY</span></Reveal>
            <Reveal delay={80}><h2 className="t-h2" style={{ marginTop: -8 }}>From tribal knowledge to a single source of truth</h2></Reveal>
            <Reveal delay={120}>
              <p className="t-b2">My strategy for the new design system was built on the following:</p>
            </Reveal>

            <Reveal>
              <Subhead>Define a shared vision</Subhead>
              <p className="t-b2">
                To build something that would last, we needed buy-in from all product teams. We created the &ldquo;Next Generation Dashboard&rdquo; experience to rally around and named the system &ldquo;Magnetic&rdquo; – <B>the attractive force at the center of Dashboard</B>. Tying the visual refresh into the technical debt rework meant that the site would <B>perform better and look cleaner</B>, leading to an overall improvement in product experience. The <B>focus on impact and purpose helped unite teams</B> that had previously worked in silos.
              </p>
            </Reveal>
            <Reveal>
              <ImageCarousel images={strategyCarousel1} onImageClick={(i) => openLb(strategyCarousel1[i].src, strategyCarousel1[i].alt)} />
            </Reveal>

            <Reveal>
              <Subhead>Build UX best practices into the system</Subhead>
              <p className="t-b2">
                Since the organization had many engineers and very few designers, we established <B>rigorous UX best practices</B> into the components themselves. We set standards for consistency, accessibility, and adaptability for our grid system, type system, color, etc. and baked it into the component library so that <B>good UX decisions were the path of least resistance</B>. We documented component intent, constraints, and dependencies rigorously and it&apos;s <B>paying off in Figma&apos;s MCP server</B> today.
              </p>
            </Reveal>
            <Reveal>
              <ImageCarousel images={strategyCarousel2} onImageClick={(i) => openLb(strategyCarousel2[i].src, strategyCarousel2[i].alt)} />
            </Reveal>

            <Reveal>
              <Subhead>Establish process and governance</Subhead>
              <p className="t-b2">
                For a living, growing design system that would continue to evolve, we needed dedicated resources and <B>a plan for how the system would change over time</B>. I built a team of designers and engineers whose <B>sole focus was to make the system better</B>. I built a tiered governance model that <B>balanced standardization with the reality that product teams would always need to innovate</B>. The team shepherded proposed changes to the system and taught new hires how to use it.
              </p>
            </Reveal>
            <Reveal>
              <div className="csmedia mc-thumb" onClick={() => openLb("/images/magds-governance.png", "Magnetic governance model")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/magds-governance.png" alt="Magnetic governance model" />
              </div>
            </Reveal>
          </section>

          {/* ── 03 RESULTS ── */}
          <section id="cs-results" style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
            <Reveal><div className="cblock cblock--mint" /></Reveal>
            <Reveal delay={50}><span className="t-h5">03 / RESULTS</span></Reveal>
            <Reveal delay={80}><h2 className="t-h2" style={{ marginTop: -8 }}>The attractive force at the center of Dashboard</h2></Reveal>
            <Reveal delay={120}>
              <p className="t-b2">
                The new system fundamentally changed the way teams collaborated and built interfaces at Meraki. Engineers and designers were <B>genuinely excited</B> about working with a clean, consistent library. The single source of truth made it <B>faster and easier to onboard new hires</B> and <B>reduced friction in product development</B>. All great outcomes of strong design systems.
              </p>
            </Reveal>

            <Reveal>
              <ImageSlider
                before="/images/magds-before-clientdetails.png"
                after="/images/magds-after-clientdetails.png"
                beforeAlt="Client details page before Magnetic"
                afterAlt="Client details page after Magnetic"
              />
            </Reveal>

            <Reveal>
              <p className="t-b2">Power users noticed the changes and left comments on the Cisco community forums.</p>
            </Reveal>

            <Reveal>
              <div className="quote-card quote-card--butter">
                <p className="quote-card__body">
                  &ldquo;Just want to say thank you Meraki. I love to see that development of the platform never stands still 🙂 And also want to leave a ♥️ for the new design.&rdquo;
                </p>
                <p className="quote-card__attr">— Marcel Kamenz, a frequent contributor</p>
              </div>
            </Reveal>

            <Reveal>
              <p className="t-b2">
                The bold visual language left a lasting impression. Word traveled. <B>Teams inside Cisco began asking if they could use Magnetic</B> — not just as a reference, but to build on. What started as one team&apos;s design system became the foundation for the <B>Magnetic Platform Suite</B>, now used across more than five distinct Cisco business units and multiple acquisitions. The system we built to outlive us did exactly that.
              </p>
            </Reveal>
          </section>

          <hr className="divider" style={{ margin: "24px 0 8px" }} />

          <Reveal><span className="t-h5">MORE SELECT WORK</span></Reveal>
          <Reveal>
            <Link href="/case-study/matterhaul" className="morecard morecard--rose">
              <div className="morecard__logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/mh-card.png" alt="Matterhaul" />
              </div>
              <div className="morecard__body">
                <div className="morecard__meta">
                  <span className="t-h5">MATTERHAUL</span>
                  <span style={{ color: "var(--colors-ink-light)" }}>|</span>
                  <span className="t-h5">4 min</span>
                </div>
                <h3 className="morecard__title">Designing a quote generator for Matterhaul&apos;s AI-powered distribution platform</h3>
              </div>
              <IconArrowRight />
            </Link>
          </Reveal>
          <Reveal>
            <Link href="/case-study/meraki-go" className="morecard morecard--mint">
              <div className="morecard__logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/mkigo-card.png" alt="Meraki Go" />
              </div>
              <div className="morecard__body">
                <div className="morecard__meta">
                  <span className="t-h5">CISCO MERAKI</span>
                  <span style={{ color: "var(--colors-ink-light)" }}>|</span>
                  <span className="t-h5">4 min</span>
                </div>
                <h3 className="morecard__title">Bringing enterprise-grade WiFi management to small business owners</h3>
              </div>
              <IconArrowRight />
            </Link>
          </Reveal>
        </div>

        <Footer />
      </div>

      {/* Sticky progress bar */}
      <div className="progress" role="navigation" aria-label="Case study sections">
        {SECTIONS.map((s) => (
          <button key={s.id} className={"progress__item" + (active === s.id ? " progress__item--active" : "")} onClick={() => jump(s.id)}>
            {s.num}
          </button>
        ))}
      </div>

      <Lightbox open={!!lb} src={lb?.src ?? ""} alt={lb?.alt} onClose={closeLb} />
    </main>
  );
}

export default function MagdsPage() {
  return (
    <>
      <Nav />
      <PasswordGate company="CISCO MERAKI" title="Building design systems for Meraki's enterprise networking dashboard">
        <MagdsContent />
      </PasswordGate>
    </>
  );
}
