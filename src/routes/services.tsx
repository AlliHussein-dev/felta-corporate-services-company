import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import serviceFormation from "../assets/service-formation.jpg";
import serviceResidency from "../assets/service-residency.jpg";
import serviceFinancial from "../assets/service-financial.jpg";
import serviceGovernment from "../assets/service-government.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Signature Services FELTA Abu Dhabi" },
      { name: "description", content: "Business formation, residency, financial management and government relations — four practices under one advisory standard." },
      { property: "og:title", content: "Signature Services FELTA" },
      { property: "og:description", content: "Four practices. One advisory standard." },
      { property: "og:image", content: serviceFormation },
    ],
  }),
  component: ServicesPage,
});

const PRACTICES = [
  { no: "01", title: "Business Formation & Expansion", img: serviceFormation, alt: "Founders reviewing formation documents",
    items: ["Mainland company registration", "Free Zone establishment", "Corporate restructuring", "Branch and subsidiary set-up"],
    body: "From a first conversation about structure to the moment your trade licence is in your hand, we orchestrate every step — choosing the right jurisdiction, drafting the founding documents, opening banking relationships and aligning shareholders." },
  { no: "02", title: "Residency & Immigration", img: serviceResidency, alt: "International family receiving residency paperwork",
    items: ["Investor visas", "Executive visas", "Family residency", "Golden Visa advisory"],
    body: "Residency is rarely just paperwork — it is a life decision. We coordinate with the relevant authorities and handle every form, attestation and translation so you can focus on settling in." },
  { no: "03", title: "Financial Management & Compliance", img: serviceFinancial, alt: "Financial advisors reviewing reports",
    items: ["Accounting and bookkeeping", "VAT registration and returns", "Audit preparation", "Corporate tax advisory"],
    body: "Numbers tell the truth about a business. Our finance practice keeps your books precise, your filings on time, and your leadership equipped with the clarity needed to make decisions." },
  { no: "04", title: "Government Relations & PRO", img: serviceGovernment, alt: "Government relations officer with UAE licences",
    items: ["Official documentation", "Licensing support", "Regulatory coordination", "Renewals and amendments"],
    body: "Our PRO team is on first-name terms with the relevant desks. We move quickly, but always quietly — with discretion, respect, and a deep regard for the institutions we work alongside." },
] as const;

function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <Reveal><p className="eyebrow"><span className="rule-divider mr-3" />Signature Services</p></Reveal>
          <Reveal delay={0.05}><h1 className="editorial-h1 mt-6 max-w-4xl">Four practices. One advisory standard.</h1></Reveal>
          <Reveal delay={0.1}><p className="mt-8 max-w-2xl text-lg text-muted-foreground">Each practice is led by a senior advisor and supported by a small, attentive team. We work as one firm — the engagement does not change hands as you progress.</p></Reveal>
        </div>
      </section>

      {PRACTICES.map((p, i) => (
        <section key={p.no} className={i % 2 === 0 ? "bg-background" : "bg-secondary/60"}>
          <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-32">
            <Reveal className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img src={p.img} alt={p.alt} loading="lazy" className="aspect-[4/5] w-full rounded-2xl object-cover" />
            </Reveal>
            <div>
              <Reveal><p className="eyebrow text-primary">{p.no} · Practice</p></Reveal>
              <Reveal delay={0.05}><h2 className="editorial-h2 mt-4">{p.title}</h2></Reveal>
              <Reveal delay={0.1}><p className="mt-6 text-lg leading-relaxed text-muted-foreground">{p.body}</p></Reveal>
              <Reveal delay={0.15}>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm">
                      <span className="mt-2 h-1 w-3 shrink-0 bg-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>
      ))}

      <section className="mx-auto max-w-[1100px] px-6 py-24 text-center lg:px-12">
        <Reveal><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground">Discuss your engagement</Link></Reveal>
      </section>
    </>
  );
}