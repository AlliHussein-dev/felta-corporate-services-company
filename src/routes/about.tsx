import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "../components/reveal";
import officeInterior from "../assets/office-interior.jpg";
import galleryHospitality from "../assets/gallery-hospitality.jpg";
import galleryTeam from "../assets/gallery-team.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The FELTA Story — Abu Dhabi Corporate Advisory" },
      { name: "description", content: "Our mission, advisory philosophy and commitment to long-term client relationships in Abu Dhabi and beyond." },
      { property: "og:title", content: "The FELTA Story" },
      { property: "og:description", content: "How FELTA became a trusted Abu Dhabi corporate services partner." },
      { property: "og:image", content: officeInterior },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 lg:pt-48">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-12">
          <Reveal><p className="eyebrow"><span className="rule-divider mr-3" />The FELTA Story</p></Reveal>
          <Reveal delay={0.05}><h1 className="editorial-h1 mt-6 max-w-4xl">A quiet, attentive firm built on long relationships.</h1></Reveal>
          <Reveal delay={0.1}><p className="mt-8 max-w-2xl text-lg text-muted-foreground">FELTA was founded on a simple conviction: businesses thrive when advisors treat every relationship as a long-term partnership. From our offices on Hamdan Street in Al Danah, we serve investors, entrepreneurs, family businesses and international enterprises building in the UAE.</p></Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal><img src={officeInterior} alt="FELTA executive office" loading="lazy" className="aspect-[16/9] w-full rounded-2xl object-cover" /></Reveal>
      </section>

      <section className="mx-auto max-w-[1100px] grid gap-16 px-6 py-28 lg:grid-cols-2 lg:gap-24 lg:px-12 lg:py-40">
        <Reveal><h2 className="editorial-h2">Our mission</h2></Reveal>
        <Reveal delay={0.05}><p className="text-lg leading-relaxed text-muted-foreground">To make the experience of building and growing a UAE business feel calm, considered and personal — by being present at every step, not just at the milestones.</p></Reveal>

        <Reveal><h2 className="editorial-h2">Advisory philosophy</h2></Reveal>
        <Reveal delay={0.05}><p className="text-lg leading-relaxed text-muted-foreground">We listen before we act. Every engagement begins with a private conversation about ambitions and constraints; only then do we map a path through formation, residency, finance and compliance.</p></Reveal>

        <Reveal><h2 className="editorial-h2">Local knowledge, international perspective</h2></Reveal>
        <Reveal delay={0.05}><p className="text-lg leading-relaxed text-muted-foreground">Our team is at home in Abu Dhabi's mainland and Free Zones, and equally fluent in the expectations of international groups arriving from Europe, the Americas, Asia and beyond.</p></Reveal>
      </section>

      <section className="mx-auto max-w-[1400px] grid gap-6 px-6 pb-24 md:grid-cols-2 lg:px-12">
        <Reveal><img src={galleryHospitality} alt="Clients enjoying espresso with their advisor" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" /></Reveal>
        <Reveal delay={0.05}><img src={galleryTeam} alt="FELTA team collaborating" loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" /></Reveal>
      </section>

      <section className="mx-auto max-w-[1100px] px-6 pb-32 lg:px-12">
        <Reveal><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground">Begin the conversation</Link></Reveal>
      </section>
    </>
  );
}