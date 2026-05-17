"use client";

import { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import Reveal from "@/components/Reveal";
import WavyLines from "@/components/WavyLines";

const B = ({ children }: { children: React.ReactNode }) => <strong className="t-emph">{children}</strong>;

const IconArrowRight = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
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

export default function MerakiGoPage() {
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
    <>
      <Nav />
      <main className="page">
        <WavyLines />
        <div className="page__col">

          {/* Header */}
          <section style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 24 }}>
            <Reveal>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span className="t-h5">CISCO MERAKI · 2017</span>
                <span style={{ color: "var(--colors-ink-light)" }}>|</span>
                <span className="t-h5">4 min read</span>
              </div>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="t-h1">Bringing enterprise-grade WiFi management to small business owners</h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-tagline">Product Design Lead</p>
            </Reveal>
          </section>

          {/* Hero image */}
          <Reveal delay={120}>
            <div className="csmedia mc-thumb" style={{ marginTop: 40, aspectRatio: "800/500" }}
              onClick={() => openLb("/images/mkigo.png", "Meraki Go mobile app")}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/mkigo.png" alt="Meraki Go mobile app" />
            </div>
          </Reveal>

          {/* Body — narrow column */}
          <div style={{ maxWidth: 640, margin: "40px auto 0", display: "flex", flexDirection: "column", gap: 32 }}>

            {/* Summary */}
            <Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="t-h5">CHALLENGE</span>
                <p className="t-b2">Networking is daunting and complex for a typical small business owner to set up and manage, leading to inefficient setups and security vulnerabilities or expensive outsourcing.</p>
              </div>
            </Reveal>
            <Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="t-h5">STRATEGY</span>
                <p className="t-b2">I designed an app to <B>make networking simple</B> while still retaining features needed for more complicated business needs.</p>
              </div>
            </Reveal>
            <Reveal>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <span className="t-h5">RESULTS</span>
                <p className="t-b2">Non-technical users found it easy to install and manage their own networks and the app became the foundation for an enterprise-level Cisco Meraki mobile app.</p>
              </div>
            </Reveal>

            <hr className="divider" style={{ margin: "8px 0" }} />

            {/* ── 01 CHALLENGE ── */}
            <section id="cs-challenge" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <Reveal><div className="cblock cblock--rose" /></Reveal>
              <Reveal delay={50}><span className="t-h5">01 / CHALLENGE</span></Reveal>
              <Reveal delay={80}><h2 className="t-h2" style={{ marginTop: -8 }}>Enterprise hardware, consumer audience</h2></Reveal>

              <Reveal delay={120}>
                <p className="t-b2">
                  Cisco Meraki makes some of the <B>most powerful networking hardware in the world</B>, but its products are <B>built for IT professionals</B> managing fleets of devices across enterprise infrastructure. The product team was tasked with creating a down-market <B>consumer-grade product for small business owners</B>. My job was to design the product experience for this new target customer.
                </p>
              </Reveal>

              <Reveal>
                <Subhead>Understanding the users</Subhead>
                <p className="t-b2">
                  I conducted a mix of <B>on-site visits, surveys, and in-depth interviews</B> to learn about the networking needs and <B>personas of small business owners</B>. There was a gap between the needs of enterprise customers and basic ISP products that was not being filled. <B>These users were the prime target for Meraki Go</B> and they largely fell into two groups:
                </p>
              </Reveal>

              <Reveal>
                <ul className="cs-list">
                  <li><B>The DIY Owner</B> — Scrappy, entrepreneurial, willing to learn if it saves money. They tended to set up <B>ad-hoc solutions</B> without knowing if it was secure, or simply used what ISPs gave them out of the box. Some were letting customers onto their main network <B>without realizing the risk</B>. Others thought guest WiFi could help their business, but <B>avoided setting it up out of fear</B> of neighbors freeloading on their connection.</li>
                  <li><B>The Hands-Off Owner</B> — This group found <B>networking intimidating</B> and chose to <B>outsource the job</B>. However, their networking needs were relatively straightforward compared to the <B>expensive enterprise-level products</B> that professional IT staff used. It meant they were <B>prime target users</B> for Meraki Go&apos;s products.</li>
                </ul>
              </Reveal>

              <Reveal>
                <p className="t-b2">
                  Both groups would benefit from using Meraki Go, but had different challenges that needed to be addressed. The DIY Owner needed <B>better built-in best practices</B> to reduce security risks and give them <B>peace of mind</B>. The Hands-Off Owner <B>needed approachability and confidence</B> that they could set up their own networking solutions. Meraki Go had to do both.
                </p>
              </Reveal>
            </section>

            {/* ── 02 STRATEGY ── */}
            <section id="cs-strategy" style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
              <Reveal><div className="cblock cblock--butter" /></Reveal>
              <Reveal delay={50}><span className="t-h5">02 / STRATEGY</span></Reveal>
              <Reveal delay={80}><h2 className="t-h2" style={{ marginTop: -8 }}>Designing for people who don&apos;t think about networking</h2></Reveal>

              <Reveal delay={120}>
                <Subhead>Mobile first</Subhead>
                <p className="t-b2">
                  Small business owners are not always on-site or even stationary, and a <B>mobile platform</B> was the ideal way to <B>manage the network on-the-go</B>. I proposed launching with a mobile-first approach to <B>best meet our user&apos;s needs, no matter where they were.</B>
                </p>
              </Reveal>

              <Reveal>
                <Subhead>Help small business owners overcome their resistance to technology</Subhead>
                <p className="t-b2">
                  I made a prototype of the app and tested to see how tech-wary users responded to it. <B>Clear and engaging illustrations</B> combined with <B>simple terminology</B> made the app feel approachable. In testing, users consistently understood what they needed to do. Realizing that they had set up their own networking stack <B>built their confidence</B>.
                </p>
              </Reveal>

              <Reveal>
                <div className="csmedia mc-thumb" onClick={() => openLb("/images/mkigo-setup.png", "Meraki Go setup experience")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/mkigo-setup.png" alt="Meraki Go setup experience" />
                </div>
              </Reveal>

              <Reveal>
                <Subhead>Build networking and security best practices into the app</Subhead>
                <p className="t-b2">
                  As the <B>sole product designer</B> working with a team of four engineers, <B>I designed every part of the app</B>. I illustrated and animated the onboarding instructions to guide users through networking setup.
                </p>
              </Reveal>

              <Reveal>
                <div className="csmedia mc-thumb" onClick={() => openLb("/images/mkigo-simplify.png", "Simplified networking interface")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/mkigo-simplify.png" alt="Simplified networking interface" />
                </div>
              </Reveal>

              <Reveal>
                <p className="t-b2">
                  I <B>simplified formal terminology</B> and built flows to monitor internet usage, block malicious activity, and filter content. I <B>built default settings</B> designed for small business owners to keep their networks secure and fast.
                </p>
              </Reveal>

              <Reveal>
                <div className="csmedia mc-thumb" onClick={() => openLb("/images/mkigo-networking.png", "Network monitoring and security flows")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/mkigo-networking.png" alt="Network monitoring and security flows" />
                </div>
              </Reveal>

              <Reveal>
                <p className="t-b2">
                  Beyond the app itself, I worked across marketing, brand, and hardware packaging to <B>ensure the experience was consistent</B> from the moment someone opened the box.
                </p>
              </Reveal>

              <Reveal>
                <div className="csmedia mc-thumb" onClick={() => openLb("/images/mkigo-hardwareinstall.png", "Hardware packaging and installation experience")}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/mkigo-hardwareinstall.png" alt="Hardware packaging and installation experience" />
                </div>
              </Reveal>
            </section>

            {/* ── 03 RESULTS ── */}
            <section id="cs-results" style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
              <Reveal><div className="cblock cblock--mint" /></Reveal>
              <Reveal delay={50}><span className="t-h5">03 / RESULTS</span></Reveal>
              <Reveal delay={80}><h2 className="t-h2" style={{ marginTop: -8 }}>A new kind of Meraki user</h2></Reveal>

              <Reveal delay={120}>
                <p className="t-b2">
                  <B>Non-technical users</B> set up and managed their own networks <B>with confidence</B>, without calling a professional.
                </p>
              </Reveal>

              <Reveal>
                <div className="quote-card quote-card--rose">
                  <p className="quote-card__body">
                    &ldquo;It is working like a dream. It was <B>amazingly easy to set up</B>. Even a &ldquo;non techie&rsquo; person like me can set it up easily. Plug it in and download the app and it basically walks you through the steps. <B>Very simple</B>.&rdquo;
                  </p>
                  <p className="quote-card__attr">— Dr. David DeLong, Dentist in Santa Clara</p>
                </div>
              </Reveal>

              <Reveal>
                <p className="t-b2">
                  The product line was eventually sunset, <B>but the app lived on</B>. The screens, patterns, and workflows I designed and built for Meraki Go became <B>the foundation for Cisco Meraki&apos;s first-ever mobile app for its enterprise Dashboard</B>. It proved that networking can be made simple enough to fit into the palm of your hand.
                </p>
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
              <Link href="/case-study/matterhaul" className="morecard morecard--butter">
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
    </>
  );
}
