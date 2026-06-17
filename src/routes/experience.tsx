import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import galleryHospitality from "../assets/gallery-hospitality.jpg";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "The FELTA Client Experience" },
      { name: "description", content: "Six chapters of a long partnership the FELTA client experience, from private discovery to continuous stewardship." },
      { property: "og:title", content: "The FELTA Client Experience" },
      { property: "og:description", content: "How we work with clients, from first conversation to long-term partnership." },
      { property: "og:image", content: galleryHospitality },
    ],
  }),
  component: ExperiencePage,
});

const STEPS = [
  ["01", "Private Discovery Meeting", "We listen first to ambitions, constraints and timing. Nothing else."],
  ["02", "Strategic Business Planning", "A bespoke roadmap built around your structure of choice and risk appetite."],
  ["03", "Documentation & Preparation", "Every form, attestation and translation, handled with care and discretion."],
  ["04", "Government Coordination", "Direct liaison with the right desks and authorities, on your behalf."],
  ["05", "Company Launch", "Trade licence in hand, operations ready, banking open, residency in place."],
  ["06", "Continuous Partnership", "Ongoing compliance, advisory and quiet stewardship, for years to come."],
] as const;

function ExperiencePage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <Reveal><p className="eyebrow"><span className="rule-divider mr-3" />The FELTA Experience</p></Reveal>
          <Reveal delay={0.05}><h1 className="editorial-h1 mt-6 max-w-4xl">Six chapters of a long partnership.</h1></Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1100px] px-6 pb-32 lg:px-12">
        <ol className="space-y-12 border-l border-border pl-8">
          {STEPS.map(([no, title, desc], i) => (
            <Reveal key={no} delay={i * 0.05}>
              <li className="relative list-none">
                <span className="absolute -left-[37px] top-3 h-3 w-3 rounded-full bg-primary" />
                <p className="eyebrow text-primary">Chapter {no}</p>
                <h2 className="mt-3 font-display text-3xl lg:text-4xl">{title}</h2>
                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}