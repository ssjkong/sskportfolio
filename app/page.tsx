import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WavyLines from "@/components/WavyLines";
import Reveal from "@/components/Reveal";

const IconDownload = () => (
  <svg className="icon" viewBox="0 0 24 24">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);
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

const CASES = [
  {
    href: "/case-study/magds",
    company: "CISCO MERAKI", readTime: "5 min",
    subtitle: "Building design systems for Meraki's enterprise networking dashboard",
    tags: ["Design systems", "Organizational impact", "Team lead"],
    locked: true,
    image: "/images/magds.png",
  },
  {
    href: "/case-study/matterhaul",
    company: "MATTERHAUL", readTime: "4 min",
    subtitle: "Designing a quote generator for Matterhaul's AI-powered distribution platform",
    tags: ["Rapid prototyping", "AI-workflows", "Sole designer"],
    locked: true,
    image: "/images/mh.png",
  },
  {
    href: "/case-study/meraki-go",
    company: "CISCO MERAKI", readTime: "4 min",
    subtitle: "Bringing enterprise-grade WiFi management to small business owners",
    tags: ["UX Research", "Hi-fidelity", "Mobile design", "Consumer product"],
    locked: false,
    image: "/images/mkigo.png",
  },
];

export default function Home() {
  return (
    <>
      <Nav />
      <main className="page">
        <WavyLines />
        <div className="bg-circle" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/abt-sk1.png" alt="" />
        </div>

        <div className="page__col">
          {/* Hero */}
          <section style={{ display: "flex", flexDirection: "column", gap: 24, paddingTop: 24 }}>
            <Reveal>
              <h4 className="t-h4">PRODUCT DESIGN - SAN FRANCISCO</h4>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="t-h1" style={{ maxWidth: 720 }}>
                Hi there ––<br />I&apos;m Sharon, a hands-on design leader specializing in the intersection of systems, strategy, and people.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-tagline" style={{ maxWidth: 720 }}>
                <strong className="t-emph">Human-centered UX designer</strong> and <strong className="t-emph">strategist</strong> with <strong className="t-emph">10 years</strong> of experience aligning teams to a vision and getting things done. Based in the SF Bay Area and open to the next interesting problem.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <a
                href="https://drive.google.com/file/d/1xyd40F2paaCc_pZjyZKCjXzNiocPlBTW/view?usp=drive_link"
                target="_blank" rel="noopener noreferrer"
                className="btn btn--primary" style={{ alignSelf: "flex-start" }}
              >
                <span className="t-btn">Download resume</span>
                <IconDownload />
              </a>
            </Reveal>
          </section>

          <hr className="divider" style={{ margin: "56px 0 32px" }} />

          {/* Select work */}
          <Reveal>
            <h2 className="t-h2" style={{ marginBottom: 40 }}>Select work</h2>
          </Reveal>
          <section style={{ display: "flex", flexDirection: "column", gap: 56 }}>
            {CASES.map((c) => (
              <Reveal key={c.href}>
                <Link href={c.href} className="pcard" style={{ textDecoration: "none" }}>
                  <div className="pcard__media">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt={c.subtitle} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    <div className="pcard__meta">
                      <span className="t-h5" style={{ color: "var(--colors-ink-soft)" }}>{c.company}</span>
                      <span className="pcard__sep">|</span>
                      <span className="t-h5">{c.readTime}</span>
                    </div>
                    <h3 className="pcard__title">{c.subtitle}</h3>
                    <div className="pcard__tags">
                      {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                    </div>
                    {c.locked && (
                      <span className="pcard__lock">
                        <IconLock /> Password available upon request
                      </span>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </section>

          <hr className="divider" style={{ margin: "56px 0" }} />

          {/* My approach */}
          <Reveal>
            <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 className="t-h2">My approach</h2>
              <p className="t-b2">
                I believe successful business outcomes begin in a strong team culture, <strong className="t-emph">rooted in warmth and candor</strong>. As a leader, I focus on paving the way and <strong className="t-emph">providing space</strong> for my team to do what it does best: create great products.
              </p>
              <div>
                <Link href="/approach" className="btn btn--tertiary">
                  <span className="t-btn" style={{ fontSize: 18 }}>Read more</span>
                  <IconArrowRight />
                </Link>
              </div>
            </section>
          </Reveal>

          <hr className="divider" style={{ margin: "56px 0" }} />

          {/* Workshop */}
          <Reveal>
            <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 className="t-h2">Workshop</h2>
              <p className="t-b2">
                As a design leader, I believe you must always <strong className="t-emph">stay familiar with the tools to create</strong>. The workshop is where my experiments live –– messy, hands-on, and often in-progress.
              </p>
              <div>
                <Link href="/workshop" className="btn btn--tertiary">
                  <span className="t-btn" style={{ fontSize: 18 }}>Check it out</span>
                  <IconArrowRight />
                </Link>
              </div>
            </section>
          </Reveal>

          <hr className="divider" style={{ margin: "56px 0" }} />

          {/* Why I do what I do */}
          <Reveal>
            <section style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h2 className="t-h2">Why I do what I do</h2>
              <p className="t-b2">
                Someone I know once put it like this: I believe getting it right has <strong className="t-emph">real consequences for real people</strong>. I love delving into open-ended problems and never lose sight on the impact of the work. I&apos;m invested because <strong className="t-emph">I care about the people we design for</strong>.
              </p>
            </section>
          </Reveal>

          <Footer />
        </div>
      </main>
    </>
  );
}
