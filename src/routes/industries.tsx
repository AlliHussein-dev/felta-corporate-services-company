import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import tech from "../assets/industry-tech.jpg";
import realestate from "../assets/industry-realestate.jpg";
import healthcare from "../assets/industry-healthcare.jpg";
import retail from "../assets/industry-retail.jpg";
import manufacturing from "../assets/industry-manufacturing.jpg";
import services from "../assets/industry-services.jpg";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries FELTA Abu Dhabi" },
      { name: "description", content: "We serve technology, real estate, healthcare, retail, manufacturing and professional services across the UAE." },
      { property: "og:title", content: "Industries we serve" },
      { property: "og:description", content: "A practice shaped by the diversity of our clients." },
      { property: "og:image", content: tech },
    ],
  }),
  component: IndustriesPage,
});

const ITEMS = [
  { img: tech, title: "Technology", desc: "From early-stage founders to global platforms, structured for growth and protected by sound governance." },
  { img: realestate, title: "Real Estate", desc: "Developers, investors and asset managers — entity structures, holding companies and ongoing compliance." },
  { img: healthcare, title: "Healthcare", desc: "Clinics, medical groups and health-tech operators, with the regulatory clarity the sector demands." },
  { img: retail, title: "Retail", desc: "Boutique and multi-location retail, from licensing to point-of-sale finance and reporting." },
  { img: manufacturing, title: "Manufacturing", desc: "Industrial groups establishing operations across Mainland and Free Zone jurisdictions." },
  { img: services, title: "Professional Services", desc: "Advisory, legal and creative firms — set up to operate with elegance and discipline." },
];

function IndustriesPage() {
  return (
    <>
      <section className="pt-40 pb-16 lg:pt-48">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <Reveal><p className="eyebrow"><span className="rule-divider mr-3" />Industries</p></Reveal>
          <Reveal delay={0.05}><h1 className="editorial-h1 mt-6 max-w-4xl">A practice shaped by the diversity of our clients.</h1></Reveal>
        </div>
      </section>
      <section className="mx-auto max-w-[1400px] grid gap-8 px-6 pb-32 md:grid-cols-2 lg:grid-cols-3 lg:px-12">
        {ITEMS.map((it, i) => (
          <Reveal key={it.title} delay={i * 0.05} className="group lift-card lift-card-hover overflow-hidden">
            <img src={it.img} alt={it.title} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
            <div className="p-8">
              <h2 className="font-display text-2xl">{it.title}</h2>
              <p className="mt-3 text-muted-foreground">{it.desc}</p>
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}