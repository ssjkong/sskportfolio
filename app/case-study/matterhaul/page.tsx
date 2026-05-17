"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PasswordGate from "@/components/PasswordGate";
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

function Subhead({ children }: { children: React.ReactNode }) {
  return <p className="t-b1" style={{ marginTop: 28, marginBottom: 8 }}>{children}</p>;
}

function MatterhaulContent() {
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
              <span className="t-h5">MATTERHAUL · 2025</span>
              <span style={{ color: "var(--colors-ink-light)" }}>|</span>
              <span className="t-h5">4 min read</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="t-h1">Designing a quote generator for Matterhaul&apos;s AI-powered distribution platform.</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="t-tagline">Product Design Lead</p>
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
            onClick={() => openLb("/images/mh-01.png", "Matterhaul quote generation workflow")}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/mh-01.png" alt="Matterhaul quote generation workflow" />
          </div>
        </Reveal>

        {/* Body — narrow column */}
        <div style={{ maxWidth: 640, margin: "40px auto 0", display: "flex", flexDirection: "column", gap: 32 }}>

          {/* Summary */}
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span className="t-h5">CHALLENGE</span>
              <p className="t-b2">Construction supply distribution salespeople suffer from slow, manual processes to build quotes that cost them customers and money.</p>
            </div>
          </Reveal>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span className="t-h5">STRATEGY</span>
              <p className="t-b2">I designed a quote generation workflow that leverages a salesperson&apos;s institutional knowledge and automates the rest.</p>
            </div>
          </Reveal>
          <Reveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <span className="t-h5">RESULTS</span>
              <p className="t-b2">Quicker quote turnarounds, happier salespeople, and more informed customers.</p>
            </div>
          </Reveal>

          <hr className="divider" style={{ margin: "8px 0" }} />

          {/* ── 01 CHALLENGE ── */}
          <section id="cs-challenge" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <Reveal><div className="cblock cblock--rose" /></Reveal>
            <Reveal delay={50}><span className="t-h5">01 / CHALLENGE</span></Reveal>
            <Reveal delay={80}><h2 className="t-h2" style={{ marginTop: -8 }}>An industry built on trust, slowed down by the tools</h2></Reveal>

            <Reveal delay={120}>
              <p className="t-b2">
                The construction supply industry relies on phone calls, paper, and knowing the right person. While this system has held up for a long time, <B>it&apos;s slow</B> and shops lose potential jobs when they <B>can&apos;t respond quickly</B>. Even when shops do respond in a timely manner, <B>quotes can have errors</B> –– incorrect parts, a single product that has a much longer lead time than expected, the wrong price listed, etc. These errors affect construction schedules and <B>erode trust from customers</B>.
              </p>
            </Reveal>

            <Reveal>
              <div className="csmedia mc-thumb" onClick={() => openLb("/images/mh-research-lutz.png", "On-site research with salespeople")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/mh-research-lutz.png" alt="On-site research with salespeople" />
              </div>
            </Reveal>

            <Reveal>
              <p className="t-b2">
                We went onsite to <B>conduct ethnographic research</B> and speak to salespeople on their home turf. It revealed that the tools salespeople were using <B>required a lot of inefficiencies</B>, e.g., switching between windows, searching for products across several websites, and manual calculations.
              </p>
            </Reveal>

            <Reveal>
              <blockquote className="quote-inline">
                They showed us the calculator app sitting open next to their quoting tool — manually marking up prices, line by line, clicking every number with their mouse.
              </blockquote>
            </Reveal>

            <Reveal>
              <p className="t-b2">
                We <B>mapped the full workflow</B>, including various front-of-house, back-of-house, and customer touchpoints, and zeroed in on the key entry point where we could <B>make the most impact: quote generation</B>.
              </p>
            </Reveal>

            <Reveal>
              <div className="csmedia mc-thumb" onClick={() => openLb("/images/mh-workflow.png", "Quote generation workflow map")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/mh-workflow.png" alt="Quote generation workflow map" />
              </div>
            </Reveal>
          </section>

          {/* ── 02 STRATEGY ── */}
          <section id="cs-strategy" style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
            <Reveal><div className="cblock cblock--butter" /></Reveal>
            <Reveal delay={50}><span className="t-h5">02 / STRATEGY</span></Reveal>
            <Reveal delay={80}><h2 className="t-h2" style={{ marginTop: -8 }}>Designing with the expert in mind</h2></Reveal>

            <Reveal delay={120}>
              <p className="t-b2">
                The approach for this project was deliberately lean. Rather than chasing pixel-perfect designs, <B>the work prioritized flow, layout, and feature clarity</B>, with tight feedback loops between design, engineering, and real users throughout. <B>AI-generated prototypes</B> kept iteration fast and kept conversations concrete.
              </p>
            </Reveal>

            <Reveal>
              <Subhead>Ontology that maps customers, products, and communication</Subhead>
              <p className="t-b2">
                Before designing any interface, we needed to <B>establish how data was structured</B> underneath it. We sketched out a <B>high-level ontology</B> to map the relationships between customers, jobs, products, and quotes. This would inform how data was stored and make it <B>easier to find specific products</B>. It was important to <B>reflect the mental model that users already had</B>, making it feel seamless for them to navigate the product and interact with the AI.
              </p>
            </Reveal>

            <Reveal>
              <Subhead>Dynamic quote builder with automation and control</Subhead>
              <p className="t-b2">
                The quote builder needed to do a lot of <B>heavy lifting for complex quotes</B> and still be easy enough to <B>use on the fly</B> when a customer walked in. It needed to decipher an image of a list of products or a spreadsheet and create a quote. I designed the quote builder to <B>balance automation while allowing for line-by-line customization</B>. Automating repetitive tasks, such as markup calculations, <B>sped up quote generation time considerably</B> and reduced errors.
              </p>
            </Reveal>

            <Reveal>
              <div className="csmedia mc-thumb" onClick={() => openLb("/images/mh-quotebuilder.png", "Dynamic quote builder interface")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/mh-quotebuilder.png" alt="Dynamic quote builder interface" />
              </div>
            </Reveal>

            <Reveal>
              <Subhead>Intelligent product validations</Subhead>
              <p className="t-b2">
                In order to verify if the list of products looked correct, we applied <B>simple logic and ontological parameters</B>. For example, if we know that a spigot requires a specific diameter hex nut, we could suggest it during the building phase or mark a potential error before sending to the client. Or if all the finishes in the kitchen remodel are shiny nickel but one is matte brass, that might be an error. <B>Validation was a key step</B> that required a salesperson&apos;s <B>expert eyes to audit and review</B>.
              </p>
            </Reveal>

            <Reveal>
              <div className="csmedia mc-thumb" onClick={() => openLb("/images/mh-validation.png", "Intelligent product validations")}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/mh-validation.png" alt="Intelligent product validations" />
              </div>
            </Reveal>
          </section>

          {/* ── 03 RESULTS ── */}
          <section id="cs-results" style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
            <Reveal><div className="cblock cblock--mint" /></Reveal>
            <Reveal delay={50}><span className="t-h5">03 / RESULTS</span></Reveal>
            <Reveal delay={80}><h2 className="t-h2" style={{ marginTop: -8 }}>Successful on-site beta</h2></Reveal>

            <Reveal delay={120}>
              <p className="t-b2">
                The Quote Builder is <B>currently in beta</B> with one of the shops we partnered with during the research phase. The feedback has been positive across the board. Experienced salespeople noted <B>significantly faster quote turnarounds</B>, with less time spent on manual calculations and product sourcing. The <B>clear, linear flow</B> and <B>consolidated toolset</B> made onboarding noticeably easier for junior staff, with less room for the kinds of errors that come from working across disconnected systems.
              </p>
            </Reveal>

            <Reveal>
              <a
                href="https://www.figma.com/make/UD6giTSZGeT7ZztMWv18UN/Quote-Generation-Flow-Design?t=FAFwRAGDCF4yWLf2-1&preview-route=%2Fquotes%2Fnew"
                target="_blank" rel="noopener noreferrer"
                className="btn btn--primary" style={{ alignSelf: "flex-start" }}
              >
                <span className="t-btn">View prototype</span>
                <IconArrowRight />
              </a>
            </Reveal>
          </section>

          <hr className="divider" style={{ margin: "24px 0 8px" }} />

          <Reveal><span className="t-h5">MORE SELECT WORK</span></Reveal>
          <Reveal>
            <Link href="/case-study/magds" className="morecard morecard--rose">
              <div className="morecard__logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/magds-card.png" alt="Magnetic Design System" />
              </div>
              <div className="morecard__body">
                <div className="morecard__meta">
                  <span className="t-h5">CISCO MERAKI</span>
                  <span style={{ color: "var(--colors-ink-light)" }}>|</span>
                  <span className="t-h5">5 min</span>
                </div>
                <h3 className="morecard__title">Building design systems for Meraki&apos;s enterprise networking dashboard</h3>
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

export default function MatterhaulPage() {
  return (
    <>
      <Nav />
      <PasswordGate company="MATTERHAUL" title="Designing a quote generator for Matterhaul's AI-powered distribution platform.">
        <MatterhaulContent />
      </PasswordGate>
    </>
  );
}
