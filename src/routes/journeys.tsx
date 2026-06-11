import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import journey1 from "../assets/journey-1.jpg";
import journey2 from "../assets/journey-2.jpg";

export const Route = createFileRoute("/journeys")({
  head: () => ({
    meta: [
      { title: "Success Journeys — FELTA Client Stories" },
      { name: "description", content: "Long-form stories of investors, entrepreneurs and family businesses we have helped build and grow in the UAE." },
      { property: "og:title", content: "Success Journeys" },
      { property: "og:description", content: "Client stories from FELTA's advisory practice." },
      { property: "og:image", content: journey1 },
    ],
  }),
  component: JourneysPage,
});

const STORIES = [
  { img: journey1, eyebrow: "European Entrepreneur", title: "Establishing a UAE presence in 90 days.",
    challenge: "Entering the UAE market while managing legal, licensing and residency requirements on a tight timeline.",
    solution: "A dedicated advisor coordinated the full establishment journey — Free Zone selection, founding documents, residency and banking.",
    outcome: "A successful launch and continued strategic support as the company expanded across the GCC." },
  { img: journey2, eyebrow: "Family-Owned Company", title: "Expansion, oversight, and the next generation.",
    challenge: "Expanding operations across emirates while ensuring long-term compliance and a clean hand-over to the next generation.",
    solution: "Financial oversight, documentation management and regulatory guidance, paired with quarterly advisory reviews.",
    outcome: "Smooth expansion with an ongoing advisory relationship now in its eighth year." },
];

function JourneysPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <Reveal><p className="eyebrow"><span className="rule-divider mr-3" />Success Journeys</p></Reveal>
          <Reveal delay={0.05}><h1 className="editorial-h1 mt-6 max-w-4xl">Quiet partnerships, told in full.</h1></Reveal>
        </div>
      </section>
      {STORIES.map((s, i) => (
        <section key={s.title} className={i % 2 === 0 ? "bg-background" : "bg-secondary/60"}>
          <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 py-28 lg:grid-cols-[1fr_1.2fr] lg:px-12">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img src={s.img} alt={s.eyebrow} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" />
            </Reveal>
            <div>
              <Reveal><p className="eyebrow text-primary">{s.eyebrow}</p></Reveal>
              <Reveal delay={0.05}><h2 className="editorial-h2 mt-4">{s.title}</h2></Reveal>
              <Reveal delay={0.1}>
                <dl className="mt-10 space-y-6">
                  {([["Challenge", s.challenge],["Solution", s.solution],["Outcome", s.outcome]] as const).map(([k, v]) => (
                    <div key={k} className="grid gap-2 sm:grid-cols-[140px_1fr] sm:gap-8">
                      <dt className="eyebrow text-muted-foreground text-[11px]">{k}</dt>
                      <dd className="text-lg leading-relaxed text-foreground/85">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}