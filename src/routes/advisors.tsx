import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import a1 from "../assets/advisor-1.jpg";
import a2 from "../assets/advisor-2.jpg";
import a3 from "../assets/advisor-3.jpg";
import a4 from "../assets/advisor-4.jpg";

export const Route = createFileRoute("/advisors")({
  head: () => ({
    meta: [
      { title: "Meet Our Advisors FELTA Abu Dhabi" },
      { name: "description", content: "Senior advisors who answer their own phones — meet the people behind FELTA's corporate services practice." },
      { property: "og:title", content: "Meet Our Advisors" },
      { property: "og:description", content: "The people behind FELTA's advisory practice." },
      { property: "og:image", content: a1 },
    ],
  }),
  component: AdvisorsPage,
});

const PEOPLE = [
  { img: a1, name: "Layla Al-Mansoori", role: "Managing Partner", focus: "Corporate strategy, structuring", years: "18 years",
    quote: "Every client deserves the same first conversation we would want for ourselves." },
  { img: a2, name: "Saif Al-Hashimi", role: "Government Relations Director", focus: "Licensing, regulatory liaison", years: "22 years",
    quote: "Doors open quickly when relationships are tended to slowly." },
  { img: a3, name: "Priya Raman", role: "Financial Compliance Lead", focus: "Accounting, VAT, audit", years: "14 years",
    quote: "Numbers are a language. We help clients read it without strain." },
  { img: a4, name: "Lukas Berger", role: "International Advisory", focus: "Cross-border structuring", years: "16 years",
    quote: "An international client deserves the same patience as a neighbour." },
];

function AdvisorsPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <Reveal><p className="eyebrow"><span className="rule-divider mr-3" />Our Advisors</p></Reveal>
          <Reveal delay={0.05}><h1 className="editorial-h1 mt-6 max-w-4xl">Senior professionals who answer their own phones.</h1></Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] grid gap-12 px-6 pb-32 md:grid-cols-2 lg:px-12">
        {PEOPLE.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05} className="group">
            <div className="overflow-hidden rounded-2xl">
              <img src={p.img} alt={`Portrait of ${p.name}`} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            </div>
            <div className="mt-6 flex items-start justify-between gap-6">
              <div>
                <h2 className="font-display text-3xl">{p.name}</h2>
                <p className="eyebrow mt-2 text-muted-foreground text-[11px]">{p.role}</p>
              </div>
              <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{p.years}</span>
            </div>
            <p className="mt-6 text-muted-foreground"><span className="text-foreground">Focus.</span> {p.focus}</p>
            <p className="mt-4 font-display text-xl leading-snug text-foreground/90">"{p.quote}"</p>
          </Reveal>
        ))}
      </section>
    </>
  );
}