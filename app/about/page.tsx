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

const EXPERIENCE = [
  {
    company: "Freelance Product Designer",
    role: "Self-employed",
    dateRange: "Jan 2022 — Present",
    desc: "Advising clients on digital product strategy, UX/UI design, brand development, and scalable design systems to help teams turn complex problems into intuitive, high-impact experiences.",
  },
  {
    company: "Cisco Meraki",
    role: "UX Design Lead → Manager → Senior UX Designer",
    dateRange: "2017 — 2022",
    desc: "Grew from senior IC to design manager and lead, shipping enterprise networking software and the consumer Meraki Go app while building the team and processes behind the work.",
  },
  {
    company: "Tomorrow Partners",
    role: "UX Designer",
    dateRange: "Mar 2015 — Feb 2017",
    desc: "Led human-centered UX research and design at a multidisciplinary consultancy, delivering strategies and artifacts across discovery, concept, and execution for a range of clients.",
  },
  {
    company: "emocha Mobile Health",
    role: "Design Lead",
    dateRange: "Jan 2014 — Jan 2015",
    desc: "Co-founded and led product design, UX, and brand for a health tech startup, building the product from scratch across mobile, web, and operational touchpoints.",
  },
];

const SOFTWARE = [
  { label: "Claude",  src: "/images/claude-color.svg"  },
  { label: "Lovable", src: "/images/lovable-color.svg" },
  { label: "Miro",    src: "/images/miro-icon.svg"     },
  { label: "Adobe",   src: "/images/adobe-color.svg"   },
  { label: "Figma",   src: "/images/figma-color.svg"   },
  { label: "Linear",  src: "/images/linear-symbol.svg" },
];

export default function About() {
  return (
    <>
      <Nav />
      <main className="page">
        <WavyLines />
        <div className="page__col">

          {/* Header */}
          <section style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 24 }}>
            <Reveal>
              <h1 className="t-h1">
                I&apos;m a design leader and strategist who specializes in making complex systems feel approachable.
              </h1>
            </Reveal>
            <Reveal delay={60}>
              <p className="t-tagline">
                At Cisco Meraki, I built <strong className="t-emph">the design system that spread</strong> through Cisco&apos;s other business units, making <strong className="t-emph">collaboration easier, onboarding faster</strong>, and <strong className="t-emph">product experiences more consistent</strong>. These days I consult for early-stage startups, helping them figure out what they need: workflows, design systems, brands –– <strong className="t-emph">whatever gets them moving</strong>. I also <strong className="t-emph">build with AI</strong> — it&apos;s changed what&apos;s possible, and I&apos;m still finding the edges of that.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div style={{ marginTop: 8, display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a
                  href="https://drive.google.com/file/d/1ew9ETwD7JIS_YvBtc0vec6AwzAAMTONt/view?usp=drive_link"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn--primary btn--lg"
                >
                  <span className="t-btn">Download resume</span><IconDownload />
                </a>
                <a
                  href="https://www.linkedin.com/in/ssjkong/"
                  target="_blank" rel="noopener noreferrer"
                  className="btn btn--secondary btn--lg"
                >
                  <span className="t-btn">LinkedIn</span><IconArrowRight />
                </a>
              </div>
            </Reveal>
          </section>

          {/* Portrait */}
          <Reveal>
            <div style={{ marginTop: 56, borderRadius: 31, overflow: "hidden", aspectRatio: "800/500", background: "var(--colors-cream)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/abt-sk1.png" alt="Sharon Kong" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 35%" }} />
            </div>
          </Reveal>

          <hr className="divider divider--cream-dark" style={{ margin: "56px 0 32px" }} />

          {/* Experience */}
          <Reveal>
            <section>
              <h2 className="t-h2" style={{ marginBottom: 8 }}>Experience</h2>
              <div className="exp">
                {EXPERIENCE.map((e) => (
                  <div key={e.company + e.role} className="exp__row">
                    <div className="exp__head">
                      <div className="exp__title">{e.company}</div>
                      <div className="exp__role">{e.role}</div>
                    </div>
                    <div className="exp__date">{e.dateRange}</div>
                    <p className="exp__desc">{e.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <hr className="divider divider--cream-dark" style={{ margin: "56px 0 32px" }} />

          {/* Skills + Software */}
          <Reveal>
            <section>
              <h2 className="t-h2" style={{ marginBottom: 24 }}>Skills + Software</h2>
              <div className="sw-row">
                {SOFTWARE.map((s) => (
                  <div key={s.label} className="sw">
                    <div className="sw__icon">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.src} alt={s.label} />
                    </div>
                    <div className="sw__label">{s.label}</div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <hr className="divider divider--cream-dark" style={{ margin: "56px 0 32px" }} />

          {/* Testimonials */}
          <Reveal>
            <section>
              <h2 className="t-h2">The nicest things anyone has said to me</h2>
              <p className="t-b2" style={{ marginTop: 8, marginBottom: 24 }}>About work.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="quote-grid">
                <div className="quote-card quote-card--rose">
                  <p className="quote-card__body">
                    &ldquo;But anyways, just wanted to say hi and that I miss the time we worked together! It was an amazing experience and you remain THE best (not one of the best) clients I&apos;ve ever worked with to this day.&rdquo;
                  </p>
                  <p className="quote-card__attr">— A designer I collaborated with, two years after we&apos;d last worked together</p>
                </div>
                <div className="quote-card quote-card--butter">
                  <p className="quote-card__body">
                    &ldquo;Damn. Someone was just talking ridiculously highly of you. Telling me that you&apos;re very well spoke, determined, and have a good sense of direction for what you&apos;re trying to do with the UX team. Good job.&rdquo;
                  </p>
                  <p className="quote-card__attr">— A product manager, via Slack</p>
                </div>
              </div>
            </section>
          </Reveal>

          <hr className="divider divider--cream-dark" style={{ margin: "56px 0 32px" }} />

          {/* When I'm not working */}
          <Reveal>
            <section>
              <h2 className="t-h2">When I&apos;m not working</h2>
              <p className="t-b2" style={{ marginTop: 8 }}>
                When I&apos;m off the clock, I&apos;m enjoying life with my husband and child in the SF Bay Area. I also have a habit of picking up creative hobbies the way some people collect houseplants. Current and former obsessions include{" "}
                <a href="https://www.instagram.com/tattooist_delta/" target="_blank" rel="noopener noreferrer" className="inline-link">tattooing</a>
                {" "}and{" "}
                <a href="https://bsky.app/profile/sproutsky.bsky.social" target="_blank" rel="noopener noreferrer" className="inline-link">basket weaving</a>.
              </p>
            </section>
          </Reveal>

          <Footer />
        </div>
      </main>
      <style>{`@media (max-width: 768px) { .quote-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  );
}
