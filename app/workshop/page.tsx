import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WavyLines from "@/components/WavyLines";
import Reveal from "@/components/Reveal";

type Tone = "rose" | "butter";

function SwatchTile({ tone, label }: { tone: Tone; label: string }) {
  const bg:     Record<Tone, string> = { rose: "var(--colors-rose-light)",   butter: "var(--colors-butter-light)" };
  const accent: Record<Tone, string> = { rose: "var(--colors-rose-dark)",    butter: "var(--colors-butter-dark)"  };
  return (
    <div className="wsh-card__media" style={{ background: bg[tone], border: `1px solid ${accent[tone]}33` }}>
      <div style={{
        fontFamily: "DM Mono", fontSize: 13, color: accent[tone], letterSpacing: "0.04em",
        background: "rgba(255,255,255,0.55)", padding: "6px 12px", borderRadius: 99,
        position: "relative", zIndex: 1,
      }}>
        {label}
      </div>
      <div aria-hidden="true" style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: `repeating-linear-gradient(45deg, ${accent[tone]}0a 0 2px, transparent 2px 14px)`,
      }} />
    </div>
  );
}

export default function Workshop() {
  return (
    <>
      <Nav />
      <main className="page">
        <WavyLines />
        <div className="page__col">

          <section style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 24 }}>
            <Reveal>
              <h1 className="t-h1">
                &ldquo;For the things we have to learn before we can do them, <em>we learn by doing them</em>.&rdquo; — Aristotle
              </h1>
            </Reveal>
            <Reveal delay={60}>
              <p className="t-tagline" style={{ marginTop: 8 }}>
                I believe the best design leaders <strong className="t-emph">never stop creating</strong>. This space is where my experiments live, even unfinished ones. My mantra is: <strong className="t-emph">keep learning, stay curious</strong>.
              </p>
            </Reveal>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: 56, marginTop: 56 }}>

            {/* Project 01 */}
            <Reveal>
              <div className="lrow">
                <div>
                  <div className="cblock cblock--rose" />
                  <div className="lrow__num" style={{ marginTop: 14 }}>01/</div>
                  <h2 className="lrow__title" style={{ marginTop: 4 }}>Personal Finance Calculator</h2>
                </div>
                <div className="wsh-card">
                  <a href="https://fire-calculator-liard.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <div className="wsh-card__media" style={{ padding: 0 }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/wkshp-calculator.png" alt="Personal Finance Calculator" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </a>
                  <div>
                    <div className="lrow__head" style={{ marginBottom: 4 }}>How much do I need in order to retire?</div>
                    <p className="lrow__body" style={{ fontSize: 16, lineHeight: 1.5 }}>
                      I built a simple calculator to increase financial literacy and prepare people for the future. Inspired by projects like{" "}
                      <a href="https://projectionlab.com/" target="_blank" rel="noopener noreferrer" className="inline-link">Projection Lab</a>
                      , I wanted to create something less complex, but robust enough to show various milestones towards retirement goals.
                    </p>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Claude Design", "Claude Code"].map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                  <div>
                    <a href="https://fire-calculator-liard.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn--tertiary">
                      <span className="t-btn" style={{ fontSize: 18 }}>View project</span>
                      <svg className="icon" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Project 02 */}
            <Reveal>
              <div className="lrow">
                <div>
                  <div className="cblock cblock--butter" />
                  <div className="lrow__num" style={{ marginTop: 14 }}>02/</div>
                  <h2 className="lrow__title" style={{ marginTop: 4 }}>Wedding Photo Album</h2>
                </div>
                <div className="wsh-card">
                  <SwatchTile tone="butter" label="Coming soon" />
                  <div>
                    <div className="lrow__head" style={{ marginBottom: 4 }}>Sharing an important day with loved ones who couldn&apos;t be there</div>
                    <p className="lrow__body" style={{ fontSize: 16, lineHeight: 1.5 }}>Coming soon</p>
                  </div>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {["Lovable", "Claude Code"].map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
            </Reveal>

          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}
