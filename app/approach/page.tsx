import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WavyLines from "@/components/WavyLines";
import Reveal from "@/components/Reveal";

const ROWS = [
  {
    num: "01/", tone: "rose" as const,
    title: "Build a strong team culture",
    items: [
      { head: "Lead by example",            body: "I role-model the culture I want to foster: grounded in respect, kindness, and candor." },
      { head: "Inspiration through impact",  body: "I remind my team that our work has real consequences for real people and encourage them to raise the bar." },
      { head: "Focus on health and well-being", body: "I encourage work-life balance as a prerequisite for doing your best work long-term. Great work needs good health." },
      { head: "Celebrate together",          body: "I foster team culture by encouraging the team to pause and celebrate together –– when one person succeeds, the whole team feels it." },
    ],
  },
  {
    num: "02/", tone: "butter" as const,
    title: "Set standards for excellence",
    items: [
      { head: "Define a clear vision",  body: "I use human-centered design to frame problems and north stars that teams can rally around, knowing that it has impact." },
      { head: "Set strategic goals",    body: "I prioritize ambitious goals that stretch the team and maximize impact." },
      { head: "Reduce friction",        body: "I clear the path and manage resources to enable teams to focus on the work." },
    ],
  },
  {
    num: "03/", tone: "sky" as const,
    title: "Help people grow",
    items: [
      { head: "Develop individuals",     body: "I listen to how people want to grow and nurture their strengths, not just based on the role's requirements." },
      { head: "Deliver clear feedback",  body: "I define goals collaboratively, set honest expectations, and close the gap between where someone is and where they want to be for their career." },
      { head: "Hire deliberately",       body: "I build teams selectively, choosing the right person over the easy hire." },
    ],
  },
];

export default function Approach() {
  return (
    <>
      <Nav />
      <main className="page">
        <WavyLines />
        <div className="page__col">

          <section style={{ display: "flex", flexDirection: "column", gap: 16, paddingTop: 24 }}>
            <Reveal><h4 className="t-h4">LEADERSHIP</h4></Reveal>
            <Reveal delay={60}>
              <h1 className="t-h1">My approach to launching great products starts with building great teams.</h1>
            </Reveal>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: 56, marginTop: 56 }}>
            {ROWS.map((row) => (
              <Reveal key={row.num}>
                <div className="lrow">
                  <div>
                    <div className={"cblock cblock--" + row.tone} />
                    <div className="lrow__num" style={{ marginTop: 14 }}>{row.num}</div>
                    <h2 className="lrow__title" style={{ marginTop: 4 }}>{row.title}</h2>
                  </div>
                  <div className="lrow__list">
                    {row.items.map((it) => (
                      <div key={it.head} className="lrow__item">
                        <div className={"lrow__bullet cblock--" + row.tone} />
                        <div>
                          <div className="lrow__head">{it.head}</div>
                          <div className="lrow__body">{it.body}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
}
